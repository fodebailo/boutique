package fd.group.account;

import fd.group.entites.AppRole;
import fd.group.entites.AppUser;

public interface AccountService {
    AppUser saveUser(AppUser user);

    AppRole saveRole(AppRole role);

    void addRoleToUser(String username, String rolename);

    AppUser findUserByUsername(String username);
}
