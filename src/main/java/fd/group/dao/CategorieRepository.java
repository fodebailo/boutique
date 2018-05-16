package fd.group.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import fd.group.entites.Categorie;

public interface CategorieRepository extends JpaRepository<Categorie, Long> {
    Page<Categorie> findByLibelleContains(String libelle, Pageable pageable);
}
