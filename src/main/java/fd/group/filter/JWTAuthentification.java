package fd.group.filter;

import java.io.IOException;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.fasterxml.jackson.databind.ObjectMapper;

import fd.group.entites.AppUser;
import fd.group.entites.SecurityContant;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JWTAuthentification extends UsernamePasswordAuthenticationFilter {
    private AuthenticationManager authenticationManager;

    public JWTAuthentification(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
            throws AuthenticationException {
        AppUser user;

        try {
            user = new ObjectMapper().readValue(request.getInputStream(), AppUser.class);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        System.out.println("Username = " + user.getUsername() + " Password = " + user.getPassword());

        return authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
            Authentication authResult) throws IOException, ServletException {

        User springUser = (User) authResult.getPrincipal();

        String username = springUser.getUsername();

        String jwtToken = Jwts.builder()
                .setExpiration(new Date(System.currentTimeMillis() + SecurityContant.DATE_EXPIRATION.getExpire()))
                .setSubject(username).claim("roles", springUser.getAuthorities())
                .signWith(SignatureAlgorithm.HS256, SecurityContant.SECRET.getValeur()).compact();

        response.addHeader(SecurityContant.HEADER.getValeur(), jwtToken);
    }

}
