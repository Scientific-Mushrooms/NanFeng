package cloud.controllers;


import cloud.common.BaseController;
import cloud.common.User.UserRepository;
import cloud.entities.Post;
import cloud.common.Result;
import cloud.repositories.PostRepository;
import cloud.services.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.text.ParseException;
import java.util.Date;


@RestController
public class ConfessWallController extends BaseController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PostRepository postRepository;

    @Resource
    private ImageService imageService;



    @GetMapping("/confessPost/list")
    public Iterable<Post> all() {
        return postRepository.findAll();
    }

    @GetMapping("/confessPost/deleteAll")
    public Result deleteAll(HttpServletRequest request) {
        postRepository.deleteAll();
        return new Result("success", "delete all");
    }

    @PostMapping("/confessPost/add")
    public Result add(HttpServletRequest request, @RequestParam("image") MultipartFile[] images) {

        String authorId = request.getParameter("authorId");
        String content = request.getParameter("content");


        Post post = new Post();
        post.setAuthorId(authorId);
        post.setCommentNum(0);
        post.setAnonymous(false);
        post.setLikeNum(0);
        post.setType("confess");
        post.setContent(content);
        post.setDate(new Date());
        postRepository.save(post);

        Result result = imageService.saveImagesById(authorId, images);

        return new Result("success");
    }

    @PostMapping("confessPost/get")
    public Result getTenByDate(HttpServletRequest request) throws ParseException {

        String paramDate = request.getParameter("date");
        String type = request.getParameter("type");

        Date date = stringToDate(paramDate);

        System.out.println(date);
        System.out.println(new Date());

        Iterable<Post> posts = postRepository.findTop10ByDateBeforeAndTypeOrderByDateDesc(date, type);

//        Iterable<ConfessPost> confessPosts = postsToConfessPosts(posts);

        return new Result("success", "test", posts);
    }



}
