package fd.group.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import fd.group.entites.AppUser;

public interface UserRepository extends JpaRepository<AppUser, Long> {
    AppUser findByUsername(String username);
}
