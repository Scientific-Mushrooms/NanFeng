package cloud.squad.project;

import cloud.common.BaseController;
import cloud.common.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.Date;

@RestController
public class ProjectController extends BaseController {


    @Autowired
    private ProjectRepository projectRepository;

    @Resource
    private ProjectService projectService;


    @PostMapping("/project/all")
    public Result all(HttpServletRequest request) {
        Iterable<Project> all = projectRepository.findAll();
        return new Result("success", "all projecs", all);
    }

    @PostMapping("/project/delAll")
    public Result delAll(HttpServletRequest request) {
        projectRepository.deleteAll();
        return new Result("success", "delete all projects");
    }

    @PostMapping("/project/create")
    public Result create(HttpServletRequest request) {

        String squadId = request.getParameter("squadId");
        String projectName = request.getParameter("projectName");

        Project project = new Project();
        project.setSquadId(squadId);
        project.setProjectName(projectName);
        project.setPendingNum(0);
        project.setProgressingNum(0);
        project.setFinishedNum(0);
        project.setBugNum(0);
        project.setDate(new Date());

        projectRepository.save(project);
        return new Result("success", "create project", project);
    }

}
