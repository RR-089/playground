package com.ucok.spring_app.service;

import com.ucok.spring_app.model.Library;
import com.ucok.spring_app.repository.LibraryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LibraryService {
    private final LibraryRepository libraryRepository;

    @Autowired
    public LibraryService(LibraryRepository libraryRepository){
        this.libraryRepository = libraryRepository;
    }

    public Library createLibrary(Library library){
        return libraryRepository.save(library);
    }

    public List<Library> getAllLibrary(){
        return libraryRepository.findAll();
    }
}
