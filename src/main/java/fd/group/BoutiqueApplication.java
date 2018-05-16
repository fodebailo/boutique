package fd.group;

import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import fd.group.account.AccountService;
import fd.group.dao.CategorieRepository;
import fd.group.dao.ProduitRepository;
import fd.group.entites.AppRole;
import fd.group.entites.AppUser;
import fd.group.entites.Categorie;
import fd.group.entites.Produit;

@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan
public class BoutiqueApplication implements CommandLineRunner {
    @Autowired
    private ProduitRepository   produitRepository;
    @Autowired
    private CategorieRepository categorieRepository;
    @Autowired
    private AccountService      accountService;

    public static void main(String[] args) {
        SpringApplication.run(BoutiqueApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        if (categorieRepository.findAll().isEmpty()) {
            Stream.of("Ecran", "Portable Mobile", "Ordinateur", "Cable", "Accessoirs ordinateur et portable")
                    .forEach(c -> categorieRepository.save(new Categorie(null, c, null)));
        }

        if (produitRepository.findAll().isEmpty()) {
            produitRepository.save(new Produit(null, "hp 650", Math.floor(Math.random() * 10000),
                    (int) Math.floor(Math.random() * 100), new Categorie(3L, null, null)));
            produitRepository.save(new Produit(null, "toshiba G700", Math.floor(Math.random() * 10000),
                    (int) Math.floor(Math.random() * 100), new Categorie(3L, null, null)));
            produitRepository.save(new Produit(null, "sharp", Math.floor(Math.random() * 10000),
                    (int) Math.floor(Math.random() * 100), new Categorie(1L, null, null)));
            produitRepository.save(new Produit(null, "lg", Math.floor(Math.random() * 10000),
                    (int) Math.floor(Math.random() * 100), new Categorie(1L, null, null)));
            produitRepository.save(new Produit(null, "nokia lumia", Math.floor(Math.random() * 10000),
                    (int) Math.floor(Math.random() * 100), new Categorie(2L, null, null)));
            produitRepository.save(new Produit(null, "samsung galaxy S8", Math.floor(Math.random() * 10000),
                    (int) Math.floor(Math.random() * 100), new Categorie(2L, null, null)));
            produitRepository.save(new Produit(null, "cable optique", Math.floor(Math.random() * 10000),
                    (int) Math.floor(Math.random() * 100), new Categorie(4L, null, null)));
            produitRepository.save(new Produit(null, "cable coaxial", Math.floor(Math.random() * 10000),
                    (int) Math.floor(Math.random() * 100), new Categorie(4L, null, null)));
            produitRepository.save(new Produit(null, "imprimante lazer L9000", Math.floor(Math.random() * 10000),
                    (int) Math.floor(Math.random() * 100), new Categorie(5L, null, null)));
            produitRepository.save(new Produit(null, "ecran tactile", Math.floor(Math.random() * 10000),
                    (int) Math.floor(Math.random() * 100), new Categorie(5L, null, null)));
            produitRepository.save(new Produit(null, "hp 630", Math.floor(Math.random() * 10000),
                    (int) Math.floor(Math.random() * 100), new Categorie(3L, null, null)));
        }

        categorieRepository.findAll().forEach(c -> System.out.println(c.getLibelle()));

        if (accountService.findUserByUsername("admin") == null) {
            accountService.saveUser(new AppUser(null, "admin", "admin", null));
            accountService.saveUser(new AppUser(null, "user", "user", null));

            accountService.saveRole(new AppRole(null, "ADMIN"));
            accountService.saveRole(new AppRole(null, "USER"));

            accountService.addRoleToUser("admin", "ADMIN");
            accountService.addRoleToUser("user", "USER");
        }

    }

}
