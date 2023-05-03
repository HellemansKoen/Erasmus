package main.controller;

import main.security.Credentials;
import main.security.JWTResponse;
import main.service.AuthService;
import main.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {
    @Autowired
    public AuthService authService;

    @Autowired
    public UserService userService;

    @GetMapping("/authenticate")
    public JWTResponse signin(@RequestParam String username, @RequestParam String password) {
        Credentials credentials = new Credentials(username,password);
        try {
            return authService.createToken(credentials);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
        }
    }
}

