package fd.group.form;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FormRegister {
    private String username;
    private String password;
    private String verifPassword;

}
