package main.controller;

import main.model.User;
import main.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/addUser")
    public void addUser(User user) {
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

    @GetMapping("/updateUser")
    public void updateUser(long UserId, User user) {
        userService.updateProfile(UserId, user);
    }

    @GetMapping("/removeUser")
    public void removeUser(long userid) {
        userService.removeUser(userid);
    }

    @GetMapping("/resetPassword")
    public int resetPassword(long userId, String password) {
        if (userService.resetPassword(userId, password) == 1) {
            return 1;
        } else {
            return 0;
        }
    }
}
