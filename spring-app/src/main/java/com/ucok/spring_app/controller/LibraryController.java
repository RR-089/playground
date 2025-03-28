package com.ucok.spring_app.controller;

import com.ucok.spring_app.model.Library;
import com.ucok.spring_app.service.LibraryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/libraries")
public class LibraryController {
    private final LibraryService libraryService;

    @Autowired
    public LibraryController(LibraryService libraryService){
        this.libraryService = libraryService;
    }

    @PostMapping
    public ResponseEntity<Library> createLibrary(@RequestBody Library library){
        Library newLibrary = this.libraryService.createLibrary(library);
        return ResponseEntity.status(HttpStatus.CREATED).body(newLibrary);
    }

    @GetMapping
    public ResponseEntity<List<Library>> getAllLibrary(){
        List<Library> libraries = this.libraryService.getAllLibrary();
        return ResponseEntity.ok(libraries);
    }


}
