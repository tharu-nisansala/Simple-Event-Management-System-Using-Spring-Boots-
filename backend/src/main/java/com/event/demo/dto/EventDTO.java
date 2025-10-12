package com.event.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EventDTO {
    private Integer id;
    private String title;
    private String description;
    private String venue;
    private LocalDateTime dateTime;
    private String status;
    private Integer capacity;
}
