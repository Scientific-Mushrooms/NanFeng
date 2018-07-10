package cloud.common.User;


import cloud.common.BaseController;
import cloud.common.Result;
import cloud.repositories.FollowRepository;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;

@RestController
@Api(value = "User", description = "User operations")
public class UserController extends BaseController {


    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FollowRepository followRepository;


    @PostMapping("/user/all")
    public Iterable<User> all(HttpServletRequest request) {
        return userRepository.findAll();
    }

    @PostMapping("/user/delAll")
    public Result deleteAll(HttpServletRequest request) {
        userRepository.deleteAll();
        return new Result("success");
    }

    @PostMapping("/user/create")
    public Result create(HttpServletRequest request) {

        String email = request.getParameter("email");
        String password = request.getParameter("password");
        String name = request.getParameter("name");

        if (userRepository.existsByEmail(email)) {
            return new Result("fail", "duplicate email");
        }

        User user = new User();
        user.setEmail(email);
        user.setPassword(password);
        user.setName(name);
        user.setAvatar("default_avatar.png");
        userRepository.save(user);

        return new Result("success", "nothing", user);
    }

    @PostMapping("/user/deleteById")
    public Result deleteById(HttpServletRequest request) {

        String id = request.getParameter("id");

        if (!userRepository.existsById(id)) {
            return new Result("fail", "user not exist");
        }
        userRepository.deleteById(id);

        return new Result("success");
    }


    @PostMapping("/user/updateAvatar")
    public Result updateAvatar(HttpServletRequest request, @RequestParam("avatar") MultipartFile avatar) {

        String userId = request.getParameter("userId");
        Result result = saveImage(avatar);

        if (!userRepository.existsById(userId)) {
            return new Result("fail", "user not exist");
        }

        if (result.getStatus().equals("fail")) {
            return result;
        }

        userRepository.updateAvatarById(result.getDescription(), userId);

        return new Result("success", "update the avatar");
    }


}
