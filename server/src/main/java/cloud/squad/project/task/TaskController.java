package cloud.squad.project.task;


import cloud.common.BaseController;
import cloud.common.Result;
import cloud.returnType.DataForTaskChart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;

@RestController
public class TaskController extends BaseController {


    @Autowired
    private TaskRepository taskRepository;

    @Resource
    private TaskService taskService;


    @PostMapping("/task/all")
    public Result all(HttpServletRequest request) {
        Iterable<Task> all = taskRepository.findAll();
        return new Result("success", "all tasks", all);
    }

    @PostMapping("/task/delAll")
    public Result delAll(HttpServletRequest request) {
        taskRepository.deleteAll();
        return new Result("success", "delete all projects");
    }

    @PostMapping("/task/create")
    public Result create(HttpServletRequest request) {

        String title = request.getParameter("title");
        String content = request.getParameter("content");
        String projectId = request.getParameter("projectId");
        String level = request.getParameter("level");
        String type = request.getParameter("type");
        String taskKey = request.getParameter("taskKey");
        String creatorId = request.getParameter("creatorId");

        Task task = new Task();
        task.setContent(content);
        task.setTitle(title);
        task.setProjectId(projectId);
        task.setLevel(level);
        task.setType(type);
        task.setTaskKey(taskKey);
        task.setCreatorId(creatorId);
        task.setDate(new Date());

        taskRepository.save(task);
        return new Result("success", "create project", task);
    }

    @PostMapping("/task/projectIdToTasks")
    public Result projectIdToTasks(HttpServletRequest request) {
        String projectId = request.getParameter("projectId");
        Iterable<Task> tasks = taskService.projectIdToTasks(projectId);
        return new Result("success", "test", tasks);
    }

    @PostMapping("/task/projectIdToTasksByType")
    public Result projectIdToTasksByType(HttpServletRequest request) {

        String projectId = request.getParameter("projectId");
        String type = request.getParameter("type");

        Iterable<Task> tasks = taskService.projectIdToTasksByType(projectId, type);

        return new Result("success", "test", tasks);
    }

    @PostMapping("/task/dataForTaskChart")
    public Result dataForTaskChart(HttpServletRequest request) {

        String projectId = request.getParameter("projectId");

        DataForTaskChart data = taskService.dataForTaskChart(projectId);

        return new Result("success", "get data for task chart", data);
    }

    @PostMapping("/task/updateTypeByTaskId")
    public Result updateTypeByTaskId(HttpServletRequest request) {

        String taskId = request.getParameter("taskId");
        String type = request.getParameter("type");

        Task task = taskService.updateTypeByTaskId(type, taskId);
        return new Result("success", "get data for task chart", task);
    }
}
