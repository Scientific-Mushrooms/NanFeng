package cloud.squad.project.task;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "Task")
@Data
public class Task {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator( name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private String taskId;

    private String taskKey;

    private String projectId;

    private String title;

    private String type;

    private String level;

    private String content;

    private String ownerId;

    private String creatorId;

    private Date date;

}
