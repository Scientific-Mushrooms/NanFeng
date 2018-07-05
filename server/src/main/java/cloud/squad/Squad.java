package cloud.squad;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "Squad")
@Data
public class Squad {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator( name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private String id;

    private String name;

    private Date date;

    private Integer memberNum;

    private Integer pendingNum;

    private Integer progressingNum;

    private Integer finishedNum;

    private Integer bugNum;

}