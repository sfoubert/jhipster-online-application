package fr.ippon.jhipster.application.web.rest;

import org.zalando.problem.AbstractThrowableProblem;
import org.zalando.problem.Status;

public class DocumentNotFoundException extends AbstractThrowableProblem {

    private static final long serialVersionUID = 1L;
    public DocumentNotFoundException() {
        super(null, "Document not found", Status.NOT_FOUND);
    }
}
