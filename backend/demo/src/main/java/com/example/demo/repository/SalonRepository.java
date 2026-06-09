package com.example.demo.repository;

import com.example.demo.model.Salon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SalonRepository extends JpaRepository<Salon, Long> {

    // 🔍 Search by salon name
    List<Salon> findByNameContainingIgnoreCase(String name);

    // 📍 Filter by location (if field exists in model)
    List<Salon> findByLocationContainingIgnoreCase(String location);

    // ⭐ High rating salons
    List<Salon> findByRatingGreaterThanEqual(Double rating);

    // 📊 Exact name search
    List<Salon> findByName(String name);
}