package com.ucok.spring_app.service;

import com.ucok.spring_app.model.Library;
import com.ucok.spring_app.repository.LibraryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class LibraryService {
    private final LibraryRepository libraryRepository;

    @Autowired
    public LibraryService(LibraryRepository libraryRepository){
        this.libraryRepository = libraryRepository;
    }

    public List<Library> getAllLibrary(){
        return libraryRepository.findAll();
    }

    public Optional<Library> getLibrary(String id){
        return libraryRepository.findById(id);
    }

    public Library createLibrary(Library library){
        return libraryRepository.save(library);
    }

    public Optional<Library> updateLibrary(String id, Library library) {
        // Find the library by ID
        Optional<Library> foundLibrary = libraryRepository.findById(id);
        if (foundLibrary.isEmpty()) {
            return Optional.empty();
        }

        Library existingLibrary = foundLibrary.get();

        existingLibrary.setName(library.getName());
        existingLibrary.setLocation(library.getLocation());

        // Save the updated library
        Library updatedLibrary = libraryRepository.save(existingLibrary);

        return Optional.of(updatedLibrary);
    }

    public void deleteLibrary(String id) {
      libraryRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Library not found"));

      libraryRepository.deleteById(id);
    }


}
