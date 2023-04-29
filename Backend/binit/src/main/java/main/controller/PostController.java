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

    // OK
    @PostMapping("/addPost")
    public void addPost(@RequestBody Post post) {
        postService.addPost(post);
    }

    // OK
    @GetMapping("/getAllPosts")
    public List getAllBins() {
        return postService.getAllPosts();
    }

    // OK
    @DeleteMapping("/deletePost")
    public void deletePost(@RequestParam long postId) {
        postService.deletePost(postService.getPostById(postId));
    }

    // OK
    @GetMapping("/getPostById")
    public Post getPostById(@RequestParam long postId) {
        return postService.getPostById(postId);
    }
}