package main.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
 //   @ManyToOne
    private int userId;

    @Column
    private String username;

    @Column
    private String email;

    @Column
    private int score;

    @Column
    private String password;

     @ElementCollection
     private List<Badge> listBadges;

    // Constructors
    public User() {
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

 /*   public List<Badge> getListBadges() {
        return listBadges;
    }

    public void setListBadges(List<Badge> listBadges) {
        this.listBadges = listBadges;
    }*/
}
