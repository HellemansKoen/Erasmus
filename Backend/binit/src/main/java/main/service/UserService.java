package main.service;

import main.model.User;
import main.repository.UserRepository;
import main.security.CPasswordEncoder;
import main.utils.JWTUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JWTUtils jwtUtils;

    @Autowired
    private CPasswordEncoder cPasswordEncoder;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public int addUser(User user) {
        try {
            user.setPassword(cPasswordEncoder.encode(user.getPassword()));
            userRepository.save(user);
            return 1;
        } catch
        (Exception e) {
            return 0;
        }
    }

    public User findUserById(long userId) {
        return userRepository.findUserByUserId(userId);
    }

    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    public int addScore(int score, User user) {
        try {
            user.setScore(user.getScore() + score);
            userRepository.save(user);
            return 1;
        } catch (Exception e) {
            return 0;
        }
    }

    public int removeUser(long userId) {
        try {
            User user = findUserById(userId);
            userRepository.delete(user);
            return 1;
        } catch (Exception e) {
            return 0;
        }
    }

    public int updateProfile(long userId, User user) {
        try {
            removeUser(userId);
            userRepository.save(user);
            return 1;
        } catch (Exception e) {
            return 0;
        }
    }

    public int resetPassword(String email, String newPassword) {
        try {
            User user = userRepository.findUserByEmail(email);
            user.setPassword(cPasswordEncoder.encode(newPassword));
            userRepository.save(user);
            return 1;
        } catch (Exception e) {
            return 0;
        }
    }

    public User findUserByUsername(String username) {
        return userRepository.findUserByUsername(username);
    }

    public User getCurrentUser(String token) {
        final User finalAuthUser = jwtUtils.getUserFromToken(token);
        if (finalAuthUser == null) {
            return null;
        } else {
            return finalAuthUser;
        }
    }
}
