package main.service;

import main.model.User;
import main.repository.UserRepository;
import main.security.CPasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

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

    public List<User> SortAllUsers() {
        List<User> listUsers = findAllUsers();
        Collections.sort(listUsers);
        for (int i = 0; i < listUsers.size(); i++) {
            System.out.println(listUsers.get(i));
        }
        return listUsers;
    }

    public int addScore(int score, User user) {
        try {
            user.setScore(user.getScore() + score);
            System.out.println(user.getScore());
            System.out.println("Score: " + user.getScore() + score);
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
}
