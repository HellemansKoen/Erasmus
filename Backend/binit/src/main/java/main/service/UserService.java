package main.service;

import main.model.User;
import main.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public int addUser(User user) {
        try {
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

    public int resetPassword(long userId, String newPassword) {
        try {
            User user = findUserById(userId);
            user.setPassword(newPassword);
            return 1;
        } catch (Exception e) {
            return 0;
        }
    }
}
