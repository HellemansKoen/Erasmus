package main.service;

import main.model.Post;
import main.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public int addPost(Post post) {
        try {
            postRepository.save(post);
            return 1;
        } catch (Exception e) {
            return 0;
        }
    }


    public int deletePost(Post post) {
        try {
            postRepository.delete(post);
            return 1;
        } catch (Exception e) {
            return 0;
        }
    }

    public Post getPostById(long postId) {
        return postRepository.findPostByPostId(postId);
    }

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }
}
