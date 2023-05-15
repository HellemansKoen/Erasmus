package main.controller;

import main.model.IncomingVoteObject;
import main.model.User;
import main.model.Vote;
import main.model.VoteType;
import main.service.VoteService;
import main.utils.JWTUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/vote")
@RestController
@CrossOrigin
public class VoteController {

    @Autowired
    private VoteService voteService;

    @Autowired
    private JWTUtils jwtUtils;

    @PostMapping("/vote")
    public int rateBin(@RequestBody IncomingVoteObject incomingVoteObject, @RequestParam String token) {
        System.out.println("test");
        User user = jwtUtils.getUserFromToken(token);
        voteService.vote(new Vote(incomingVoteObject.getVoteType(), user.getUserId(),incomingVoteObject.getBinId()));
        return 0;
    }
}
