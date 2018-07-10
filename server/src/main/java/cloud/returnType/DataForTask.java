package cloud.returnType;

import lombok.Data;

import java.util.Date;

@Data
public class DataForTask {

    private String taskId;

    private String taskKey;

    private String ownerName;

    private String title;

    private String content;

    private String level;

    private Date date;

    private String type;
}
