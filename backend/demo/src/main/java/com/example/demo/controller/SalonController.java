package com.example.demo.controller;

import com.example.demo.model.Salon;
import com.example.demo.repository.SalonRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/salons")
@CrossOrigin("*")
public class SalonController {

    private final SalonRepository salonRepository;

    // ✅ Constructor Injection (BEST PRACTICE)
    public SalonController(SalonRepository salonRepository) {
        this.salonRepository = salonRepository;
    }

    // ➕ CREATE SALON
    @PostMapping
    public ResponseEntity<Salon> createSalon(@RequestBody Salon salon) {
        Salon saved = salonRepository.save(salon);
        return ResponseEntity.ok(saved);
    }

    // 📋 GET ALL SALONS
    @GetMapping
    public ResponseEntity<List<Salon>> getAllSalons() {
        return ResponseEntity.ok(salonRepository.findAll());
    }

    // 🔍 GET BY ID (IMPORTANT ADDITION)
    @GetMapping("/{id}")
    public ResponseEntity<Salon> getById(@PathVariable Long id) {
        return salonRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // ❌ DELETE SALON (ADMIN USE)
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteSalon(@PathVariable Long id) {

        if (!salonRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        salonRepository.deleteById(id);
        return ResponseEntity.ok("Salon deleted successfully");
    }
}