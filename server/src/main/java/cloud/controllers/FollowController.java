package cloud.controllers;

import cloud.common.BaseController;
import cloud.common.User.UserRepository;
import cloud.common.Result;
import cloud.repositories.FollowRepository;
import cloud.entities.Follow;
import cloud.common.User.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;


@RestController
public class FollowController extends BaseController {

    @Autowired
    private FollowRepository followRepository;

    @Autowired
    private UserRepository userRepository;

    @Resource
    private UserService userService;

    // api for admin
    @GetMapping("/follow/all")
    public Iterable<Follow> list(HttpServletRequest request) {
        return followRepository.findAll();
    }

    @GetMapping("/follow/deleteAll")
    public Result delAll(HttpServletRequest request) {
        followRepository.deleteAll();
        return new Result("success");
    }

    @PostMapping("/follow/deleteByUserId")
    public Result deleteByUserId(HttpServletRequest request) {

        String userId = request.getParameter("userId");

        if (!userRepository.existsById(userId)) {
            return new Result("fail", "user not exist");
        }

        followRepository.deleteByUserId(userId);

        return new Result("success");
    }

    @PostMapping("/follow/deleteByFollowId")
    public Result delByFollowId(HttpServletRequest request) {

        String followId = request.getParameter("followId");

        if (!userRepository.existsById(followId)) {
            return new Result("fail", "user not exist");
        }

        followRepository.deleteByFollowId(followId);

        return new Result("success");
    }




    // api for users
    @PostMapping("/follow/add")
    public Result add(HttpServletRequest request) {

        String userId = request.getParameter("userId");
        String followId = request.getParameter("followId");

        if (!userRepository.existsById(followId)) {

            return new Result("fail", "followId not exist");

        } else if (!userRepository.existsById(followId)) {

            return new Result("fail", "userId not exist");

        } else if (userId.equals(followId)) {

            return new Result("fail", "can not follow self");

        }

        userService.increaseFollowingByOne(userId);
        userService.increaseFollowerByOne(followId);
        Follow follow = new Follow(userId, followId);
        followRepository.save(follow);

        return new Result("success", "nothing", follow);
    }


    @PostMapping("/follow/deleteByUserIdAndFollowId")
    public Result delByUserIdAndFollowId(HttpServletRequest request) {

        String userId = request.getParameter("userId");
        String followId = request.getParameter("followId");

        followRepository.deleteByUserIdAndFollowId(userId, followId);
        userService.decreaseFollowingByOne(userId);
        userService.decreaseFollowerByOne(followId);

        return new Result("success");

    }

    @PostMapping("/follow/findAllByUserId")
    public Iterable<Follow> findAllByUserId(HttpServletRequest request) {

        String userId = request.getParameter("userId");

        return followRepository.findAllByUserId(userId);

    }

    @PostMapping("/follow/findAllByFollowId")
    public Iterable<Follow> findAllByFollowId(HttpServletRequest request) {

        String followId = request.getParameter("followId");

        return followRepository.findAllByFollowId(followId);

    }





}
