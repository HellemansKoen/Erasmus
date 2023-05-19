package main.controller;

import main.model.Post;
import main.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/post")
@CrossOrigin
public class PostController {

    @Autowired
    PostService postService;

    @PostMapping("/addPost")
    public void addPost(@RequestBody Post post) {
        System.out.println(123);
 //       System.out.println(post.getImageUrl().length());
        System.out.println(postService.addPost(post));
    }

    @GetMapping("/getAllPosts")
    public List getAllBins() {
        return postService.getAllPosts();
    }

    @DeleteMapping("/deletePost")
    public void deletePost(@RequestParam long postId) {
        postService.deletePost(postService.getPostById(postId));
    }

    @GetMapping("/getPostById")
    public Post getPostById(@RequestParam long postId) {
        return postService.getPostById(postId);
    }
}