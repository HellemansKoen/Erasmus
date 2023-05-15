package main.controller;

import main.model.ResetPasswordObject;
import main.model.User;
import main.security.CPasswordEncoder;
import main.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    CPasswordEncoder cPasswordEncoder;

    @PostMapping("/addUser")
    public void addUser(@RequestBody User user) {
        userService.addUser(user);
    }

    @GetMapping("/getAllUsers")
    public List<User> getAllUsers() {
        return userService.findAllUsers();
    }

    @GetMapping("/getAllUsersSorted")
    public List<User> getAllUsersSorted() {
        return userService.SortAllUsers();
    }

    @GetMapping("/getUserById")
    public User getUserById(long userId) {
        return userService.findUserById(userId);
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