package cloud.squad.project.task;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

public interface TaskRepository extends CrudRepository<Task, String> {

    Task findByTaskId(String taskId);

    Iterable<Task> findAllByProjectId(String projectId);

    Iterable<Task> findAllByProjectIdAndType(String projectId, String type);

    @Modifying
    @Query("update Task t set t.type = ?1 where t.taskId = ?2")
    @Transactional
    void updateTypeByTaskId(String type, String taskId);

    @Modifying
    @Query("update Task t set t.title = ?1 where t.taskId = ?2")
    @Transactional
    void updateTitleByTaskId(String title, String taskId);

    @Modifying
    @Query("update Task t set t.content = ?1 where t.taskId = ?2")
    @Transactional
    void updateContentByTaskId(String content, String taskId);


}
