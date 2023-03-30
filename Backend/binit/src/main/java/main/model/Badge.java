package main.model;

import jakarta.persistence.*;

@Entity
@Table(name = "badge")
public class Badge {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int badgeId;

    @Column
    private String title;

    @Column
    private int requiredScore;

    @Column
    private String content;

    public Badge() {
    }

    public Badge(int badgeId, String title, int requiredScore, String content) {
        this.badgeId = badgeId;
        this.title = title;
        this.requiredScore = requiredScore;
        this.content = content;
    }

    public int getBadgeId() {
        return badgeId;
    }

    public void setBadgeId(int badgeId) {
        this.badgeId = badgeId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getRequiredScore() {
        return requiredScore;
    }

    public void setRequiredScore(int requiredScore) {
        this.requiredScore = requiredScore;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}