package main.controller;

import main.model.Post;
import main.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/post")
@CrossOrigin
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

    @GetMapping("/getAllPostsByCity")
    public List getAllBins(@RequestParam String city) {
        List<Post> list = postService.getAllPosts();
        List<Post> listFromCity = new ArrayList<>();
        for (int i = 0; i < list.size(); i++) {
            if (list.get(i).getCity().equals(city)) {
                listFromCity.add(list.get(i));
            }
        }
        return listFromCity;
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