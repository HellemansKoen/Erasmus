package main.model;

public class IncomingVoteObject {
    private VoteType voteType;
    private int binId;

    public IncomingVoteObject(VoteType voteType, int binId) {
        this.voteType = voteType;
        this.binId = binId;
    }

    public VoteType getVoteType() {
        return voteType;
    }

    public void setVoteType(VoteType voteType) {
        this.voteType = voteType;
    }

    public int getBinId() {
        return binId;
    }

    public void setBinId(int binId) {
        this.binId = binId;
    }
}
