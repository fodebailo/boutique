package fd.group.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import fd.group.account.AccountService;
import fd.group.entites.AppUser;
import fd.group.form.FormRegister;

@RestController
public class RegisterRestController {
    @Autowired
    private AccountService accountService;

    @PostMapping("/register")
    public AppUser register(@RequestBody FormRegister formRegister) {
        AppUser user = accountService.findUserByUsername(formRegister.getUsername());

        if (user != null)
            throw new RuntimeException("L'utilisateur existe déja !");

        if (!formRegister.getPassword().equals(formRegister.getVerifPassword()))
            throw new RuntimeException("Les mots de passe ne sont pas conformes !");

        AppUser appUser = accountService
                .saveUser(new AppUser(null, formRegister.getUsername(), formRegister.getPassword(), null));

        accountService.addRoleToUser(formRegister.getUsername(), "USER");

        return appUser;
    }

}
