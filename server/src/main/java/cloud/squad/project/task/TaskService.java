package cloud.squad.project.task;


import cloud.common.User.UserRepository;
import cloud.common.User.UserService;
import cloud.returnType.DataForTask;
import cloud.returnType.DataForTaskChart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Transactional
@Service
public class TaskService {


    @Autowired
    private TaskRepository taskRepository;

    @Resource
    private UserService userService;


    public Task taskIdToTask(String taskId) {
        Task task = taskRepository.findByTaskId(taskId);
        return task;
    }

    public Iterable<Task> projectIdToTasks(String projectId) {
        Iterable<Task> tasks = taskRepository.findAllByProjectId(projectId);
        return tasks;
    }

    public Iterable<Task> projectIdToTasksByType(String projectId, String type) {
        Iterable<Task> tasks = taskRepository.findAllByProjectIdAndType(projectId, type);
        return tasks;
    }

    public Iterable<DataForTask> dataForTask(String projectId, String type) {

        Iterable<Task> tasks = projectIdToTasksByType(projectId, type);
        List<DataForTask> results = new ArrayList();

        for (Task task : tasks) {
            DataForTask data = new DataForTask();
            data.setTaskId(task.getTaskId());
            data.setTaskKey(task.getTaskKey());
            data.setTitle(task.getTitle());
            data.setContent(task.getContent());
            data.setDate(task.getDate());
            data.setType(task.getType());
            data.setLevel(task.getLevel());
            data.setOwnerName(userService.userIdToUserName(task.getCreatorId()));
            results.add(data);
        }

        return results;
    }

    public DataForTaskChart dataForTaskChart(String projectId) {

        DataForTaskChart data = new DataForTaskChart();

        Iterable<DataForTask> pending = dataForTask(projectId, "pending");
        Iterable<DataForTask> progressing = dataForTask(projectId, "progressing");
        Iterable<DataForTask> finished = dataForTask(projectId, "finished");
        Iterable<DataForTask> bugs = dataForTask(projectId, "bugs");

        data.setPending(pending);
        data.setProgressing(progressing);
        data.setFinished(finished);
        data.setBugs(bugs);

        return data;
    }

    public Task updateTypeByTaskId(String type, String taskId) {
        taskRepository.updateTypeByTaskId(type, taskId);
        Task task = taskIdToTask(taskId);
        return task;
    }

}
