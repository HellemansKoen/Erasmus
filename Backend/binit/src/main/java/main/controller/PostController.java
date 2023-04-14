package main.controller;


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

    @DeleteMapping("/deletePost")
    public void deletePost(Post post) {
        postService.deletePost(post);
    }

}
