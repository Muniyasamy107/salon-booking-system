package com.example.demo.controller;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/payment")
@CrossOrigin("*")
public class PaymentController {

    // 🔐 BEST PRACTICE: move to application.properties
    private static final String KEY = System.getenv("RAZORPAY_KEY");
    private static final String SECRET = System.getenv("RAZORPAY_SECRET");

    @PostMapping("/create-order")
    public Map<String, Object> createOrder(@RequestBody Map<String, Object> data) {

        Map<String, Object> response = new HashMap<>();

        try {
            // ✅ safe amount handling
            Number amountNumber = (Number) data.get("amount");
            int amount = amountNumber.intValue();

            RazorpayClient client = new RazorpayClient(KEY, SECRET);

            JSONObject orderRequest = new JSONObject();
            orderRequest.put("amount", amount * 100); // paise
            orderRequest.put("currency", "INR");
            orderRequest.put("payment_capture", 1);

            Order order = client.orders.create(orderRequest);

            response.put("orderId", order.get("id"));
            response.put("status", "success");

        } catch (Exception e) {
            response.put("status", "failed");
            response.put("error", e.getMessage());
        }

        return response;
    }
}