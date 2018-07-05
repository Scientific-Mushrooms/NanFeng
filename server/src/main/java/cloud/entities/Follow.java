package cloud.entities;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "follower")
@Data
public class Follow {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator( name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private String id;

    private String userId;

    private String followId;

    public Follow() {

    }

    public Follow(String userId, String followId) {
        this.userId = userId;
        this.followId = followId;
    }

}
