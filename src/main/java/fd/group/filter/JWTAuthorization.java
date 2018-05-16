package fd.group.filter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import fd.group.entites.SecurityContant;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

public class JWTAuthorization extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        response.addHeader("Access-Control-Allow-Origin", "*");
        response.addHeader("Access-Control-Allow-Headers",
                "Origin,Accept,Content-Type,Authorization,Access-Control-Request-Method,Access-Control-Request-Headers");
        response.addHeader("Access-Control-Expose-Headers",
                "Access-Control-Allow-Origin,Authorization,Access-Control-Allow-Credentials");
        if (request.getMethod().equals("OPTIONS")) {
            response.setStatus(HttpServletResponse.SC_OK);
        } else {
            String jwtToken = request.getHeader(SecurityContant.HEADER.getValeur());

            if (jwtToken == null || !jwtToken.startsWith(SecurityContant.PREFIX_TOKEN.getValeur())) {
                filterChain.doFilter(request, response);
                return;
            }

            Claims claims = Jwts.parser().setSigningKey(SecurityContant.SECRET.getValeur())
                    .parseClaimsJws(jwtToken.replace(SecurityContant.PREFIX_TOKEN.getValeur(), "")).getBody();

            String username = claims.getSubject();

            List<Map<String, String>> authorities = (List<Map<String, String>>) claims.get("roles");

            List<GrantedAuthority> roles = new ArrayList<>();

            authorities.forEach(r -> {
                roles.add(new SimpleGrantedAuthority(r.get("authority")));
            });

            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username,
                    null, roles);

            SecurityContextHolder.getContext().setAuthentication(authenticationToken);

            filterChain.doFilter(request, response);
        }
    }

}
