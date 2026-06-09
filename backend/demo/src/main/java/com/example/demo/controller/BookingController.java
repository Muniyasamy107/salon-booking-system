package com.example.demo.controller;

import com.example.demo.model.Booking;
import com.example.demo.repository.BookingRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin("*")
public class BookingController {

    private final BookingRepository repository;

    public BookingController(
            BookingRepository repository
    ) {
        this.repository = repository;
    }

    // CREATE BOOKING
    @PostMapping
    public Booking create(
            @RequestBody Booking booking
    ) {

        booking.setStatus("PENDING");

        return repository.save(booking);
    }

    // ALL BOOKINGS
    @GetMapping
    public List<Booking> getAll() {
        return repository.findAll();
    }

    // USER BOOKINGS
    @GetMapping("/user/{email}")
    public List<Booking> getByEmail(
            @PathVariable String email
    ) {
        return repository.findByEmail(email);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public String delete(
            @PathVariable Long id
    ) {

        repository.deleteById(id);

        return "Deleted";
    }

    // PAYMENT SUCCESS
    @PutMapping("/pay/{id}")
    public Booking updatePayment(
            @PathVariable Long id,
            @RequestBody Booking req
    ) {

        Booking booking =
                repository.findById(id)
                .orElseThrow(
                () -> new RuntimeException(
                        "Booking Not Found"
                ));

        booking.setStatus("PAID");
        booking.setPaymentId(
                req.getPaymentId()
        );

        return repository.save(
                booking
        );
    }

    // ADMIN
    @GetMapping("/admin/all")
    public List<Booking> adminAll() {
        return repository.findAll();
    }
}