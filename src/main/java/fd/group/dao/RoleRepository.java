package fd.group.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import fd.group.entites.AppRole;

public interface RoleRepository extends JpaRepository<AppRole, Long> {
    AppRole findByRolename(String rolename);
}
