package com.software.teamfive.electron_api.services;

import com.software.teamfive.electron_api.models.GLCode;
import com.software.teamfive.electron_api.repos.GLCodeRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class GLCodeService {

    @Autowired
    private GLCodeRepository glCodeRepository;

    public GLCodeService(GLCodeRepository glCodeRepository) {
        this.glCodeRepository = glCodeRepository;
    }

    @Transactional
    public GLCode createGLCode(GLCode glCodeToCreate) {
        return this.glCodeRepository.save(glCodeToCreate);
    }

    @Transactional
    public GLCode getCodeById(Long id) {
        return this.glCodeRepository
                .findAll()
                .stream()
                .filter(p -> p.getId().equals(id))
                .findFirst()
                .orElse(null);

    }
}