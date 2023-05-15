package main.security;

import main.model.User;

public class JWTResponse {

    private User user;
    private String JWTToken;

    public JWTResponse(User user, String JWTToken) {
        this.user = user;
        this.JWTToken = JWTToken;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getJWTToken() {
        return JWTToken;
    }

    public void setJWTToken(String JWTToken) {
        this.JWTToken = JWTToken;
    }
}
