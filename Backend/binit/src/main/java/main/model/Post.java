package main.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name="post")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int postId;

    @Column
    private String title;

    @Column
    private LocalDateTime date;

    @Column
    private String content;

    // Constructors
    public Post() {
    }

    public Post(int postId, String title, LocalDateTime date, String content) {
        this.postId = postId;
        this.title = title;
        this.date = date;
        this.content = content;
    }

// Getters and Setters

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getPostId() {
        return postId;
    }

    public void setPostId(int postId) {
        this.postId = postId;
    }
}
