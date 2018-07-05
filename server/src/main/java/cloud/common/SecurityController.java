package cloud.common;

import cloud.common.BaseController;
import cloud.common.User.UserRepository;
import cloud.common.Result;
import cloud.common.User.User;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@Api(value = "User", description = "User operations")
public class SecurityController extends BaseController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user/login")
    public Result login(HttpServletRequest request) {

        String email = request.getParameter("email");
        String password = request.getParameter("password");

        User user = userRepository.findByEmail(email);

        if (user == null) {
            return new Result("fail", "email not exist");
        }

        if (!user.getPassword().equals(password)) {
            return new Result("fail", "wrong password");
        }

        return new Result("success", "good", user);
    }

    @GetMapping("/user/logout")
    public String Logout(@RequestParam(value="name", defaultValue="World") String name) {

        return "111111111";
    }
}
