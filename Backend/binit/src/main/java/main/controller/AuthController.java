package main.controller;

import main.model.User;
import main.security.CPasswordEncoder;
import main.security.Credentials;
import main.security.JWTResponse;
import main.service.AuthService;
import main.service.UserService;
import main.utils.JWTUtils;
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

    @Autowired
    CPasswordEncoder cPasswordEncoder;

    @Autowired
    JWTUtils jwtUtils;

    @GetMapping("/authenticate")
    public JWTResponse signin(@RequestParam String username, @RequestParam String password) {
        System.out.println(username);
        User user = userService.findUserByUsername(username);
        System.out.println(user);
        if (cPasswordEncoder.matches(password, user.getPassword())) {
            Credentials credentials = new Credentials(username, password);
            try {
                return authService.createToken(credentials);
            } catch (Exception e) {
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
            }
        } else {
            return null;
        }
    }

    @GetMapping("/getCurrentRole")
    public String GetCurrentRole(@RequestParam String token){
        System.out.println("test");
        User user = jwtUtils.getUserFromToken(token);
        return user.getRole();
    }
}