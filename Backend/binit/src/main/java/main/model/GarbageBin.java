package main.model;

import jakarta.persistence.*;

@Entity
@Table(name="garbagebin")
public class GarbageBin {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
  //  @ManyToOne
    private int binId;

    @Column
    private String lat;

    @Column
    private String lng;

    @Column
    private KindBin kindBin;

    // Constructors
    public GarbageBin() {
    }

    public GarbageBin(int binId, String lat, String lng, KindBin kindBin) {
        this.binId = binId;
        this.lat = lat;
        this.lng = lng;
        this.kindBin = kindBin;
    }

    // Methodes

    // Getters and Setters

    public int getBinId() {
        return binId;
    }

    public void setBinId(int binId) {
        this.binId = binId;
    }

    public String getLat() {
        return lat;
    }

    public void setLat(String lat) {
        this.lat = lat;
    }

    public String getLng() {
        return lng;
    }

    public void setLng(String lng) {
        this.lng = lng;
    }

    public KindBin getKindBin() {
        return kindBin;
    }

    public void setKindBin(KindBin kindBin) {
        this.kindBin = kindBin;
    }
}
