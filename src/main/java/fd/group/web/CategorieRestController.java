package fd.group.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import fd.group.dao.CategorieRepository;
import fd.group.entites.Categorie;

@RestController
public class CategorieRestController {
    @Autowired
    private CategorieRepository categorieRepository;

    @GetMapping("/allCategorie")
    public List<Categorie> allCategorie() {
        return categorieRepository.findAll();
    }

    @GetMapping("/findCategorie/{id}")
    public Categorie findCategorie(@PathVariable("id") Long id) {
        return categorieRepository.findById(id).get();
    }

    @GetMapping("/allCategoriePage")
    public Page<Categorie> allCategoriePage(@RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "taille", defaultValue = "11") int taille) {
        return categorieRepository.findAll(PageRequest.of(page, taille));
    }

    @GetMapping("/allCategorieParMC")
    public Page<Categorie> allCategorieParMC(@RequestParam("motcle") String motcle,
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "taille", defaultValue = "11") int taille) {
        return categorieRepository.findByLibelleContains(motcle, PageRequest.of(page, taille, Sort.by("id")));
    }

    @PostMapping("/addCategorie")
    public Categorie addCategorie(@RequestBody Categorie categorie) {
        return categorieRepository.save(categorie);
    }

    @PostMapping("/editCategorie/{id}")
    public Categorie editCategorie(@RequestBody Categorie categorie, @PathVariable Long id) {
        categorie.setId(id);
        return categorieRepository.save(categorie);
    }

    @GetMapping("/deleteCategorie/{id}")
    public void deleteCategorie(@PathVariable Long id) {
        categorieRepository.deleteById(id);
    }

}
