package fd.group.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import fd.group.entites.Produit;

public interface ProduitRepository extends JpaRepository<Produit, Long> {
    Page<Produit> findByDesignationContains(String motcle, Pageable pageable);
}
