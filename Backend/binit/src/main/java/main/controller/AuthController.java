package main.controller;

import main.model.User;
import main.security.Credentials;
import main.security.JWTResponse;
import main.service.AuthService;
import main.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@CrossOrigin()
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    public AuthService authService;
    @Autowired
    public UserService userService;

    @PostMapping("/authenticate")
    public JWTResponse signin(@RequestBody Credentials credentials) {
        try {
            return authService.createToken(credentials);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
        }
    }
    @RequestMapping("/authenticate")
    public User getCurrentUser(@RequestHeader("Authorization") String token) {
        try {
            final User user = userService.getCurrentUser(token.split(" ")[1]);
            user.setPassword(null);
            return user;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }
}

