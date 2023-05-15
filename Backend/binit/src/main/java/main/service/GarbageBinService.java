package main.service;

import main.repository.GarbageBinRepository;
import main.model.GarbageBin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class GarbageBinService {

    @Autowired
    private GarbageBinRepository garbageBinRepository;

    public GarbageBinService(GarbageBinRepository garbageBinRepository) {
        this.garbageBinRepository = garbageBinRepository;
    }

    public List<GarbageBin> getAllGarbageBins() {
        return garbageBinRepository.findAll();
    }

    public int addGarbageBin(GarbageBin garbageBin) {
        try {
            garbageBinRepository.save(garbageBin);
            return 1;
        } catch (Exception e) {
            return 0;
        }
    }

    public int removeGarbageBin(GarbageBin garbageBin) {
        try {
            garbageBinRepository.delete(garbageBin);
            return 1;
        } catch (Exception e) {
            return 0;
        }
    }
}
