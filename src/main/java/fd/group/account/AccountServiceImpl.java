package fd.group.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fd.group.dao.RoleRepository;
import fd.group.dao.UserRepository;
import fd.group.entites.AppRole;
import fd.group.entites.AppUser;

@Service
@Transactional
public class AccountServiceImpl implements AccountService {
    @Autowired
    private UserRepository        userRepository;
    @Autowired
    private RoleRepository        roleRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public AppUser saveUser(AppUser user) {
        String hashPassword = bCryptPasswordEncoder.encode(user.getPassword());
        user.setPassword(hashPassword);
        return userRepository.save(user);
    }

    @Override
    public AppRole saveRole(AppRole role) {
        return roleRepository.save(role);
    }

    @Override
    public void addRoleToUser(String username, String rolename) {
        AppUser user = userRepository.findByUsername(username);
        AppRole role = roleRepository.findByRolename(rolename);
        user.getRoles().add(role);
    }

    @Override
    public AppUser findUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

}
