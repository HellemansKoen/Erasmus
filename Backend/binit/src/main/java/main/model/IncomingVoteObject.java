package main.model;

public class IncomingVoteObject {
    private VoteType voteType;
    private int binId;

    public IncomingVoteObject(String voteType, int binId) {
        setVoteType(voteType);
        this.binId = binId;
    }

    public VoteType getVoteType() {
        return voteType;
    }

    public void setVoteType(String voteType) {
        if (voteType.equals("UP")) {
            this.voteType = VoteType.UP;
        } else {
            this.voteType = VoteType.DOWN
            ;

        }
    }

    public int getBinId() {
        return binId;
    }

    public void setBinId(int binId) {
        this.binId = binId;
    }

    @Override
    public String toString() {
        return "IncomingVoteObject{" +
                "binId=" + binId +
                ", voteType=" + voteType +
                '}';
    }
}
