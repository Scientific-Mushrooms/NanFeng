package cloud.entities;

import lombok.Data;

import java.sql.Timestamp;
import java.util.Date;


@Data
public class ConfessPost {

    private String id;

    private String authorId;

    private String authorAvatar;

    private String type;

    private Boolean anonymous;

    private Date date;

    private Integer commentNum;

    private Integer likeNum;

    private String content;

}
