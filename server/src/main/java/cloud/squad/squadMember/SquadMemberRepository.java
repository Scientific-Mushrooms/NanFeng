package cloud.squad.squadMember;

import org.springframework.data.repository.CrudRepository;

public interface SquadMemberRepository extends CrudRepository<SquadMember, Long> {

    Iterable<SquadMember> findAllBySquadId(String squadId);

}
