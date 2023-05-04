package main.service;

import main.model.User;
import main.security.Credentials;
import main.security.JWTResponse;
import main.utils.JWTUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import java.util.HashSet;
import java.util.Set;

@Service
public class AuthService implements UserDetailsService {

    @Autowired
    private UserService userService;

    @Autowired
    private JWTUtils jwtUtil;

    public AuthService() {
    }

    public JWTResponse createToken(Credentials credentials) throws Exception {
        String username = credentials.getUsername();
        String password = credentials.getPassword();
        authenticate(username, password);
        final UserDetails userDetails = loadUserByUsername(username);
        final String token = jwtUtil.generateToken(userDetails);
        User user = userService.findUserByUsername(username);
        user.setPassword(null);
        return new JWTResponse(user, token);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userService.findUserByUsername(username);
        if (user != null) {
            return new org.springframework.security.core.userdetails.User(
                    user.getUsername(),
                    user.getPassword(),
                    getAuthorities(user));
        } else throw new UsernameNotFoundException("Username not valid!");
    }

    private Set<GrantedAuthority> getAuthorities(User user) {
        Set<GrantedAuthority> authorities = new HashSet<>();
        authorities.add(new SimpleGrantedAuthority("User"));

        return authorities;
    }

    private void authenticate(String email, String password) throws Exception {
        try {
        //    authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
        } catch (DisabledException e) {
            throw new Exception("Disabled!");
        } catch (BadCredentialsException e) {
            throw new Exception("Error with credentials!");
        }
    }

}
