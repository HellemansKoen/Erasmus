package main.model;

import jakarta.persistence.*;

@Entity
@Table(name = "vote")
public class Vote {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int voteId;

    @Column
    @Enumerated(EnumType.STRING)
    private VoteType vote;

    @Column
    private int binId;

    @Column
    private int userId;

    public Vote() {}

    public Vote(VoteType vote, int binId, int userId) {
        this.vote = vote;
        this.binId = binId;
        this.userId = userId;
    }

    public int getVoteId() {
        return voteId;
    }

    public void setVoteId(int voteId) {
        this.voteId = voteId;
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

    @Override
    public String toString() {
        return "Vote{" +
                "binId=" + binId +
                ", userId=" + userId +
                ", vote=" + vote +
                '}';
    }
}
