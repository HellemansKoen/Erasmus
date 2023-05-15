package main.service;

import main.model.Vote;
import main.repository.VoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VoteService {

    @Autowired
    private VoteRepository voteRepository;

    public int vote(Vote vote) {
        try {
            voteRepository.save(vote);
            return 1;
        } catch (Exception e) {
            return 0;
        }
    }
}
