package com.example.demo.repository;

import com.example.demo.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {

    // 📧 Get bookings by email (User dashboard)
    List<Booking> findByEmail(String email);

    // 💳 Get bookings by status (PENDING / PAID)
    List<Booking> findByStatus(String status);

    // 📅 Get bookings by date
    List<Booking> findByDate(String date);

    // 💰 Get paid bookings (for revenue calculation)
    List<Booking> findByStatusAndAmountNotNull(String status);

    // 📞 Get bookings by contact number
    List<Booking> findByContact(String contact);
}