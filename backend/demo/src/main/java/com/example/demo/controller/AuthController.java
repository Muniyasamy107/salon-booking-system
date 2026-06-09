package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.util.JwtUtil;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    private final UserRepository repo;

    public AuthController(UserRepository repo) {
        this.repo = repo;
    }

    @PostMapping("/signup")
    public Map<String, String> signup(@RequestBody User user) {

        if (repo.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        user.setRole("USER");
        repo.save(user);

        Map<String, String> res = new HashMap<>();
        res.put("message", "Signup Success");
        return res;
    }

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody User req) {

        User user = repo.findByEmail(req.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!user.getPassword().equals(req.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        String token =
                JwtUtil.generateToken(
                        user.getEmail(),
                        user.getRole()
                );

        Map<String, String> res = new HashMap<>();
        res.put("token", token);
        res.put("role", user.getRole());
        res.put("name", user.getName());

        return res;
    }
}