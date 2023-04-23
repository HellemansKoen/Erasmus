package main.controller;

import jakarta.websocket.server.PathParam;
import main.model.Post;
import main.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/post")
public class PostController {

    @Autowired
    PostService postService;

    @PostMapping("/addPost")
    public void addPost(@RequestBody Post post) {
        postService.addPost(post);
    }

    @GetMapping("/getAllPosts")
    public List getAllBins() {
        return postService.getAllPosts();
    }

    @PutMapping("/deletePost")
    public void deletePost(@RequestBody Post post) {
        postService.deletePost(post);
    }

    @GetMapping("/getPostById")
    public Post getPostById(@RequestBody long postId) {
        System.out.println("123");
        return postService.getPostById(postId);
    }

}