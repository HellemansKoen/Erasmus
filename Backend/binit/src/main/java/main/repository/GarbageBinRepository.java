package main.repository;

import main.model.GarbageBin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GarbageBinRepository extends JpaRepository<GarbageBin, Long> {
      GarbageBin findGarbagebinByBinId(Long BinId);
}