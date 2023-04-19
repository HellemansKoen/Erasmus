package main.controller;

import main.model.ResetPasswordObject;
import main.model.User;
import main.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/addUser")
    public void addUser(@RequestBody User user) {
        System.out.println(user);
        userService.addUser(user);
    }

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

    @PutMapping("/resetPassword")
    public int resetPassword(@RequestBody ResetPasswordObject obj) {
        if (userService.resetPassword(obj.getEmail(), obj.getPassword()) == 1) {
            return 1;
        } else {
            return 0;
        }
    }
}
