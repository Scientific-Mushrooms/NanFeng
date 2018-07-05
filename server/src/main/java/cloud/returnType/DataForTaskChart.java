package cloud.returnType;

import lombok.Data;

@Data
public class DataForTaskChart {

    public Iterable<DataForTask> pending;

    public Iterable<DataForTask> progressing;

    public Iterable<DataForTask> finished;

    public Iterable<DataForTask> bugs;

}
