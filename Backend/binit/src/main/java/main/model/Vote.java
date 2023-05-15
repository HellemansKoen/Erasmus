package main.model;

import jakarta.persistence.*;

@Entity
@Table(name = "vote")
public class Vote {

    @Id
    private VoteType vote;

    @Column
    //  @OneToMany
    private int binId;

    @Column
    //   @OneToMany
    private int userId;

    public Vote() {}

    public Vote(VoteType vote, int binId, int userId) {
        this.vote = vote;
        this.binId = binId;
        this.userId = userId;
    }

    public VoteType getVote() {
        return vote;
    }

    public void setVote(VoteType vote) {
        this.vote = vote;
    }

    public int getBinId() {
        return binId;
    }

    public void setBinId(int binId) {
        this.binId = binId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}
