package com.example.demo.controller;

import com.example.demo.model.Salon;
import com.example.demo.repository.SalonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/salons")
@CrossOrigin
public class SalonController {

    @Autowired
    private SalonRepository salonRepository;

    // Create Salon
    @PostMapping
    public Salon createSalon(@RequestBody Salon salon) {
        return salonRepository.save(salon);
    }

    // Get All Salons
    @GetMapping
    public List<Salon> getAllSalons() {
        return salonRepository.findAll();
    }
}