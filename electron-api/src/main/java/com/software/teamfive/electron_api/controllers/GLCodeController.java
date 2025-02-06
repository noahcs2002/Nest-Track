package com.software.teamfive.electron_api.controllers;

import com.software.teamfive.electron_api.models.GLCode;
import com.software.teamfive.electron_api.repos.GLCodeRepository;
import com.software.teamfive.electron_api.services.GLCodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/nest-track/api/gl-codes")
public class GLCodeController {


    @Autowired
    private final GLCodeService glCodeService;

    public GLCodeController(GLCodeService glCodeService) {
        this.glCodeService = glCodeService;
    }

    @RequestMapping("/create")
    @PostMapping
    public GLCode createGlCode(@RequestBody GLCode glCode) {
        return this.glCodeService.createGLCode(glCode);
    }
}
