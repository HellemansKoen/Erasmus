package main.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "post")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int postId;

    @Column
    private String title;

    @Column
    private LocalDate date;

    @Column
    private String city;

    @Column(columnDefinition = "LONGTEXT")
    private String content;

    @Column(columnDefinition = "LONGTEXT")
    private String imageUrl;

    // Constructors
    public Post() {
    }

    public Post(int postId, String title, LocalDate date, String city, String content, String imageUrl) {
        this.postId = postId;
        this.title = title;
        this.date = date;
        this.city = city;
        this.content = content;
        this.imageUrl = imageUrl;
    }

    // Getters and Setters
    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
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

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    @Override
    public String toString() {
        return "Post{" +
                "city='" + city + '\'' +
                ", content='" + content + '\'' +
                ", date=" + date +
                ", imageUrl='" + imageUrl + '\'' +
                ", postId=" + postId +
                ", title='" + title + '\'' +
                '}';
    }
}
