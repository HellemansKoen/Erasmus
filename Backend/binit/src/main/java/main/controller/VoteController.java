package main.controller;

import main.model.IncomingVoteObject;
import main.model.User;
import main.model.Vote;
import main.model.VoteType;
import main.service.UserService;
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

    @Autowired
    private UserService userService;

    @PostMapping("/vote")
    public int rateBin(@RequestBody IncomingVoteObject incomingVoteObject, @RequestParam String token) {
        User user = jwtUtils.getUserFromToken(token);
        Vote vote = new Vote(incomingVoteObject.getVoteType(), incomingVoteObject.getBinId(), user.getUserId());
        userService.addScore(5, jwtUtils.getUserFromToken(token));
        return voteService.vote(vote);
    }
}
