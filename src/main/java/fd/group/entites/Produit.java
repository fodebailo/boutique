package fd.group.entites;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Produit implements Serializable {
    @Id
    @GeneratedValue
    private Long      id;
    private String    designation;
    private double    prix;
    private int       quantite;
    @ManyToOne
    private Categorie categorie;

}
