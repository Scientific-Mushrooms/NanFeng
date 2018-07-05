package cloud.services;


import cloud.common.User.UserService;
import cloud.entities.ConfessPost;
import cloud.entities.Post;
import cloud.common.User.User;
import cloud.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;

@Transactional
@Service
public class ConfessPostService {

    @Resource
    private UserService userService;

    @Autowired
    private PostRepository postRepository;



    public ConfessPost postToConfessPost(Post post) {

        User author = userService.findById(post.getAuthorId());

        ConfessPost confessPost = new ConfessPost();

        confessPost.setAuthorId(post.getAuthorId());
        confessPost.setAuthorAvatar(author.getAvatar());

        confessPost.setLikeNum(post.getLikeNum());
        confessPost.setCommentNum(post.getCommentNum());

        confessPost.setAnonymous(post.getAnonymous());
        confessPost.setDate(post.getDate());

        confessPost.setContent(post.getContent());
        return confessPost;
    }


    public ConfessPost[] postsToConfessPosts(Post[] posts) {

        ConfessPost[] confessPosts = new ConfessPost[posts.length];

        for (int i = 0; i < posts.length; ++i) {
            confessPosts[i] = postToConfessPost(posts[i]);
        }

        return confessPosts;
    }
}
