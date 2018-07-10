package cloud.squad;

import cloud.common.BaseController;
import cloud.common.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;

@RestController
public class SquadController extends BaseController {


    @Autowired
    private SquadRepository squadRepository;


    @PostMapping("/squad/all")
    public Iterable<Squad> getAll(HttpServletRequest request) {
        return squadRepository.findAll();
    }

    @PostMapping("/squad/delAll")
    public Result delAll(HttpServletRequest request) {
        squadRepository.deleteAll();
        return new Result("success");
    }

    @PostMapping("/squad/create")
    public Result add(HttpServletRequest request) {

        String name = request.getParameter("name");

        Squad squad = new Squad();
        squad.setName(name);
        squad.setDate(new Date());
        squad.setBugNum(0);
        squad.setMemberNum(0);
        squad.setFinishedNum(0);
        squad.setProgressingNum(0);
        squad.setPendingNum(0);
        squadRepository.save(squad);

        return new Result("success", "add squad", squad);
    }
    
    @CrossOrigin
    @PostMapping("/squad/squadIdToSquad")
    public Result findById(HttpServletRequest request) {

        String id = request.getParameter("squadId");

        Squad squad = squadRepository.findById(id);

        if (squad == null) {
            return new Result("fail");
        }

        return new Result("success", "find by id", squad);
    }

}
