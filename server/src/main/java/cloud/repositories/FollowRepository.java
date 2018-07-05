package cloud.repositories;

import cloud.entities.Follow;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;


public interface FollowRepository extends CrudRepository<Follow, Long> {

    Iterable<Follow> findAllByUserId(String userId);

    Iterable<Follow> findAllByFollowId(String followId);

    @Transactional
    void deleteByUserIdAndFollowId(String userId, String followId);

    @Transactional
    void deleteByUserId(String userId);

    @Transactional
    void deleteByFollowId(String followId);
}