package cloud.repositories;


import cloud.entities.Post;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;


public interface PostRepository extends CrudRepository<Post, Long> {


    Iterable<Post> findTop10ByDateBeforeAndTypeOrderByDateDesc(Date date, String type);
}
