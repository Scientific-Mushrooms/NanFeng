package cloud.squad.squadMember;


import cloud.common.User.UserService;
import cloud.returnType.DataForRankChart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.*;

@Transactional
@Service
public class SquadMemberSevice {


    @Autowired
    private SquadMemberRepository squadMemberRepository;

    @Resource
    private UserService userService;


    public void add(String squadId, String userId) {
        SquadMember squadMember = new SquadMember();
        squadMember.setSquadId(squadId);
        squadMember.setUserId(userId);
        squadMember.setContribution(0);
        squadMemberRepository.save(squadMember);
    }

    public List<DataForRankChart> squadIdToDataForRankChart(String squadId) {

        Iterable<SquadMember> squadMembers = squadMemberRepository.findAllBySquadId(squadId);
        ArrayList<DataForRankChart> result = new ArrayList();

        for (SquadMember squadMember : squadMembers) {
            String userId = squadMember.getUserId();
            String name = userService.userIdToUserName(userId);
            int contribution = squadMember.getContribution();

            DataForRankChart dataForRankChart = new DataForRankChart();
            dataForRankChart.setContribution(contribution);
            dataForRankChart.setName(name);

            result.add(dataForRankChart);
        }

        Collections.sort(result);


        return result;
    }
}
