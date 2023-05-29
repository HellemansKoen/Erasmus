package main.controller;

import main.model.GarbageBin;
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
        if (garbageBinService.addGarbageBin(garbageBin) == 1) {
            userService.addScore(10, jwtUtils.getUserFromToken(token));
            return 1;
        } else {
            return 0;
        }
    }

    @PutMapping("/full")
    public int fullBin(@RequestParam Long binId, @RequestBody String state) {
        System.out.println("KOE  "+state);
        if (this.garbageBinService.fullBin(binId, state) == 1) {
            return 1;
        } else {
            return 0;
        }
    }

    @GetMapping("/getAllBins")
    public List<GarbageBin> getAllBins() {
        return garbageBinService.getAllGarbageBins();
    }

    @GetMapping("/removeBin")
    public int removeBin(GarbageBin garbageBin) {
        if (garbageBinService.removeGarbageBin(garbageBin) == 1) {
            return 1;
        } else {
            return 0;
        }
    }
}