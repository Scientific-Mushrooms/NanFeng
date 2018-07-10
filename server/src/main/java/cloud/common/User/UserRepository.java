package cloud.common.User;

import cloud.common.User.User;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;


public interface UserRepository extends CrudRepository<User, Long> {

    boolean existsByPhoneNumber(String phoneNumber);

    User findByPhoneNumber(String phoneNumber);

    void deleteById(String userId);

    User findById(String id);

    boolean existsById(String userId);

    @Modifying
    @Query("update User u set u.post = ?1, u.following= ?2 where u.id = ?3")
    @Transactional
    void setUserInfoById(Integer post, Integer following, String userId);

    @Modifying
    @Query("update User u set u.post = ?1 where u.id = ?2")
    @Transactional
    void updatePostById(Integer post, String userId);

    @Modifying
    @Query("update User u set u.follower = ?1 where u.id = ?2")
    @Transactional
    void updateFollowerById(Integer follower, String userId);

    @Modifying
    @Query("update User u set u.following = ?1 where u.id = ?2")
    @Transactional
    void updateFollowingById(Integer following, String userId);

    @Modifying
    @Query("update User u set u.avatar = ?1 where u.id = ?2")
    @Transactional
    void updateAvatarById(String avatar, String userId);

    boolean existsByEmail(String email);

    User findByEmail(String email);
}