package cloud.squad.project;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;


@Entity
@Table(name = "Project")
@Data
public class Project {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator( name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private String projectId;

    private String projectName;

    private String squadId;

    private Integer pendingNum;

    private Integer progressingNum;

    private Integer finishedNum;

    private Integer bugNum;

    private Date date;
}
