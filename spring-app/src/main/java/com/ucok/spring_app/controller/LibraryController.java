package com.ucok.spring_app.controller;

import com.ucok.spring_app.model.Library;
import com.ucok.spring_app.service.LibraryService;
import com.ucok.spring_app.utils.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/libraries")
public class LibraryController {
    private final LibraryService libraryService;

    @Autowired
    public LibraryController(LibraryService libraryService){
        this.libraryService = libraryService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<Library>>> getAllLibrary(){
        List<Library> libraries = libraryService.getAllLibrary();
            return ResponseEntity.ok( new ApiResponse<>(HttpStatus.OK.value(),
                "Fetch " +
                        "libraries SuccessFul", libraries));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Library> getLibrary(@PathVariable String id){
        Optional<Library> foundLibrary = libraryService.getLibrary(id);
        if(foundLibrary.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.of(foundLibrary);
    }

    @PostMapping
    public ResponseEntity<Library> createLibrary(@RequestBody Library library){
        Library newLibrary = libraryService.createLibrary(library);
        return ResponseEntity.status(HttpStatus.CREATED).body(newLibrary);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Library> updateLibrary(@PathVariable String id,
                                                 @RequestBody Library library){
        Optional<Library> updatedLibrary = libraryService.updateLibrary(id, library);

        if(updatedLibrary.isEmpty()){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.of(updatedLibrary);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLibrary(@PathVariable String id){
        libraryService.deleteLibrary(id);
        return ResponseEntity.ok().build();
    }

}
