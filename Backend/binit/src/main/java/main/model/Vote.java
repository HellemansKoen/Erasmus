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


}
