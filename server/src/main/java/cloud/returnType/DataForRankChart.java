package cloud.returnType;

import lombok.Data;

@Data
public class DataForRankChart implements Comparable<DataForRankChart> {

    private String name;

    private int contribution;

    public int compareTo(DataForRankChart dataForRankChart) {
        int compareQuantity = ((DataForRankChart) dataForRankChart).getContribution();
        return  compareQuantity - this.contribution;
    }

}
