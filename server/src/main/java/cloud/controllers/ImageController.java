package cloud.controllers;

import cloud.common.BaseController;
import cloud.entities.Image;
import cloud.repositories.ImageRepository;
import cloud.services.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;


@RestController
public class ImageController extends BaseController {

    @Autowired
    private ImageRepository imageRepository;

    @Resource
    private ImageService imageService;

    @GetMapping("/images/list")
    public Iterable<Image> list() {
        return imageRepository.findAll();
    }

    @GetMapping(value = { "/images/{filename:.+}" },
            produces = { MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_GIF_VALUE, MediaType.IMAGE_PNG_VALUE })
    public byte[] getImg(@PathVariable String filename) {

        Path path = Paths.get("/Users/mac/Desktop/java-spring-rest-api/upload/" + filename);
        byte[] data = null;

        try {
            data = Files.readAllBytes(path);
        } catch (IOException e) {

            e.printStackTrace();
        }
        return data;
    }
}

