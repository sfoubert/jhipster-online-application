package fr.ippon.jhipster.application.repository;

import fr.ippon.jhipster.application.domain.Document;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.Optional;


/**
 * Spring Data  repository for the Document entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DocumentRepository extends JpaRepository<Document, Long> {

    @EntityGraph(attributePaths = "content")
    Optional<Document> findOneById(Long id);

}
