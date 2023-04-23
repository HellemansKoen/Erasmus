package main.model;

import jakarta.persistence.*;

@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int userId;

    @Column
    private String username;

    @Column
    private String email;

    @Column
    private int score;

    @Column
    private String password;

    @Column
    private String role;

    //     @ElementCollection
    //     private List<Badge> listBadges;

    // Constructors
    public User() {
    }

    public User(int userId, String username, String email, int score, String password, String role) {
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.score = score;
        this.password = password;
        this.role = role;
    }

    // Methodes

    // Getters and Setters

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "User{" +
                "email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", role='" + role + '\'' +
                ", score=" + score +
                ", userId=" + userId +
                ", username='" + username + '\'' +
                '}';
    }
}
