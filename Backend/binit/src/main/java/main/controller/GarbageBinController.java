package main.controller;

import main.model.GarbageBin;
import main.model.User;
import main.service.GarbageBinService;
import main.service.UserService;
import main.utils.JWTUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/garbageBin")
@RestController
@CrossOrigin
public class GarbageBinController {

    @Autowired
    private GarbageBinService garbageBinService;

    @Autowired
    private UserService userService;

    @Autowired
    private JWTUtils jwtUtils;

    @PostMapping("/addBin")
    public int addBin(@RequestBody GarbageBin garbageBin, @RequestParam String token) {
        System.out.println(555);
        if (garbageBinService.addGarbageBin(garbageBin) == 1) {
            User user = jwtUtils.getUserFromToken(token);
            System.out.println(user);
            userService.addScore(10, user);
            System.out.println("Ikke");
            return 1;
        } else {
            return 0;
        }
    }

    @GetMapping("/getAllBins")
    public List<GarbageBin> getAllBins() {
        System.out.println("159");
        return garbageBinService.getAllGarbageBins();
    }

    @GetMapping("/updateBin")
    public void updateBin(GarbageBin garbageBin) {

    }

    @GetMapping("/removeBin")
    public int removeBin(GarbageBin garbageBin) {
        if (garbageBinService.removeGarbageBin(garbageBin) == 1) {
            return 1;
        } else {
            return 0;
        }
    }

    @GetMapping("/confirmBin")
    public int confirmGarbageBin(GarbageBin garbageBin, long userId) {
        if (garbageBinService.confirmDeclineGarbageBin("confirm", garbageBin) == 1) {
            User user = userService.findUserById(userId);
            userService.addScore(5, user);
            return 1;
        } else {
            return 0;
        }
    }

    @GetMapping("/declineBin")
    public int declineGarbageBin(GarbageBin garbageBin, long userId) {
        if (garbageBinService.confirmDeclineGarbageBin("decline", garbageBin) == 1) {
            User user = userService.findUserById(userId);
            userService.addScore(5, user);
            return 1;
        } else {
            return 0;
        }
    }
}