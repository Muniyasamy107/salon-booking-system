package com.example.demo.util;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;

import java.security.Key;
import java.util.Date;

public class JwtUtil {

    // ⚠️ IMPORTANT: move to application.properties in real project
    private static final String SECRET =
            "mysecretkeymysecretkeymysecretkey123456";

    private static final long EXPIRATION_TIME = 1000 * 60 * 60 * 24; // 24 hours

    // 🔐 Generate signing key
    private static Key getKey() {
        return Keys.hmacShaKeyFor(SECRET.getBytes());
    }

    // 🟢 CREATE TOKEN
    public static String generateToken(String email, String role) {
        return Jwts.builder()
                .setSubject(email)
                .claim("role", role)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(getKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    // 🔍 EXTRACT ALL CLAIMS
    public static Claims extract(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    // 👤 GET EMAIL FROM TOKEN
    public static String getEmail(String token) {
        return extract(token).getSubject();
    }

    // 🔐 GET ROLE FROM TOKEN
    public static String getRole(String token) {
        return extract(token).get("role", String.class);
    }

    // ❌ VALIDATE TOKEN
    public static boolean isValid(String token) {
        try {
            extract(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}