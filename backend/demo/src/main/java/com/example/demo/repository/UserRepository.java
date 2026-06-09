package com.example.demo.repository;

import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // 📧 Login / Auth
    Optional<User> findByEmail(String email);

    // 👤 Check user exists
    boolean existsByEmail(String email);

    // 🔍 Search users by name (Admin dashboard)
    List<User> findByNameContainingIgnoreCase(String name);

    // 🔐 Get users by role (USER / ADMIN)
    List<User> findByRole(String role);
}