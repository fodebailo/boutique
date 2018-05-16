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

import fd.group.dao.ProduitRepository;
import fd.group.entites.Produit;

@RestController
public class ProduitRestController {
    @Autowired
    private ProduitRepository produitRepository;

    @GetMapping("/allProduit")
    public List<Produit> allProduit() {
        return produitRepository.findAll();
    }

    @GetMapping("/findProduit/{id}")
    public Produit findProduit(@PathVariable("id") Long id) {
        return produitRepository.findById(id).get();
    }

    @GetMapping("/allProduitPage")
    public Page<Produit> allProduitPage(@RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "taille", defaultValue = "11") int taille) {
        return produitRepository.findAll(PageRequest.of(page, taille));
    }

    @GetMapping("/allProduitParMC")
    public Page<Produit> allProduitParMC(@RequestParam("motcle") String motcle,
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "taille", defaultValue = "11") int taille) {
        return produitRepository.findByDesignationContains(motcle, PageRequest.of(page, taille, Sort.by("quantite")));
    }

    @PostMapping("/addProduit")
    public Produit addProduit(@RequestBody Produit produit) {
        return produitRepository.save(produit);
    }

    @PostMapping("/editProduit/{id}")
    public Produit editProduit(@RequestBody Produit produit, @PathVariable Long id) {
        produit.setId(id);
        return produitRepository.save(produit);
    }

    @GetMapping("/deleteProduit/{id}")
    public void deleteProduit(@PathVariable Long id) {
        produitRepository.deleteById(id);
    }

}
