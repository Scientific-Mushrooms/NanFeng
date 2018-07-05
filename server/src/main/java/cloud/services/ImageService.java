package cloud.services;


import cloud.repositories.ImageRepository;
import cloud.common.Result;
import cloud.entities.Image;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Transactional
@Service
public class ImageService {

    @Autowired
    private ImageRepository imageRepository;

    public Result saveImagesById(String parent, MultipartFile[] images) {

        for(int i =0; i < images.length; i++) {
            Result result = saveImageById(parent, images[i]);
            if (result.getStatus().equals("fail")) {
                return result;
            }
        }

        return new Result("success");

    }

    public Result saveImageById(String parent, MultipartFile file) {

        Result result = saveImage(file);
        if (result.getStatus().equals("fail")) {
            return result;
        }

        Image image = new Image();
        image.setParent(parent);
        image.setPath(result.getDescription());
        imageRepository.save(image);

        return new Result("success", "save image", image);
    }


    public Result saveImage(MultipartFile file) {

        String target;
        try {
            String suffix = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf("."));
            String fileName = UUID.randomUUID() + suffix;
            target = fileName;
            BufferedOutputStream serverFile = new BufferedOutputStream(
                    new FileOutputStream(
                            new File("/Users/mac/Desktop/java-spring-rest-api/upload/" + fileName)));

            serverFile.write(file.getBytes());
            serverFile.flush();
            serverFile.close();

        } catch (FileNotFoundException e) {

            e.printStackTrace();
            return new Result("fail", "file not found");

        } catch (IOException e) {

            e.printStackTrace();
            return new Result("fail", "IO exception");

        }

        return new Result("success", target);
    }

    public Result saveImages(MultipartFile[] files) {

        List<String> targets = new ArrayList<String>();

        for(int i =0 ;i< files.length; i++){
            Result result = saveImage(files[i]);

            if (result.getStatus().equals("fail")) {
                return result;
            }

            targets.add(result.getDescription());
        }

        return new Result("success", "save all images", targets);
    }
}
