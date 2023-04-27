package main.controller;

import main.model.ResetPasswordObject;
import main.model.User;
import main.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin()
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserService userService;

    // NOK
    // @CrossOrigin(origins = "http://localhost:8100/")
    @PostMapping("/addUser")
    public void addUser(@RequestBody User user) {
        System.out.println("222");
        userService.addUser(user);
    }

    // OK
    @GetMapping("/getAllUsers")
    public List<User> getAllUsers() {
        List<User> allUsers = userService.findAllUsers();
        return allUsers;
    }

    @GetMapping("/getUserById")
    public User getUserById(long userId) {
        User user = userService.findUserById(userId);
        return user;
    }

    @PutMapping("/updateUser")
    public void updateUser(long UserId, User user) {
        userService.updateProfile(UserId, user);
    }

    @DeleteMapping("/removeUser")
    public void removeUser(long userid) {
        userService.removeUser(userid);
    }

    // OK
    @PutMapping("/resetPassword")
    public int resetPassword(@RequestBody ResetPasswordObject obj) {
        if (userService.resetPassword(obj.getEmail(), obj.getPassword()) == 1) {
            return 1;
        } else {
            return 0;
        }
    }



}
