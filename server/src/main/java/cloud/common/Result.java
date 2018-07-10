package cloud.common;

import lombok.Data;

@Data
public class Result {


    public Result(String status) {
        this.status = status;
    }

    public Result(String status, String description) {
        this.status = status;
        this.description = description;
    }

    public Result(String status, String description, Object obj) {
        this.status = status;
        this.description = description;
        this.detail = obj;
    }

    String status;

    String description;

    Object detail;

}
