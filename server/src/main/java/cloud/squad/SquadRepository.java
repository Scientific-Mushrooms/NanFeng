package cloud.squad;

import org.springframework.data.repository.CrudRepository;


public interface SquadRepository extends CrudRepository<Squad, Long> {

    Squad findById(String id);


}
