package fd.group.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import fd.group.filter.JWTAuthentification;
import fd.group.filter.JWTAuthorization;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    private UserDetailsService    userDetailsService;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                .authorizeRequests().antMatchers("/login/**", "/register/**").permitAll().and().authorizeRequests()
                .antMatchers(HttpMethod.POST, "/editProduit/**").hasAuthority("ADMIN")
                .antMatchers(HttpMethod.POST, "/editCategorie/**").hasAuthority("ADMIN").and().authorizeRequests()
                .antMatchers("/deleteProduit/**", "/deleteCategorie/**").hasAuthority("ADMIN").and().authorizeRequests()
                .anyRequest().permitAll().and().addFilter(new JWTAuthentification(authenticationManager()))
                .addFilterBefore(new JWTAuthorization(), UsernamePasswordAuthenticationFilter.class);
    }
}
