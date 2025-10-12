package com.event.demo.controller;

import com.event.demo.dto.EventDTO;
import com.event.demo.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping(value = "api/v1/")
@CrossOrigin(origins = "http://localhost:3000")


public class EventController {
    @Autowired
    private EventService eventService;

    @GetMapping("/getEvents")
    public List<EventDTO> getEvents(){
        return eventService.getAllEvents();
    }

    @PostMapping("/addEvent")
    public EventDTO addEvent(@RequestBody EventDTO eventDTO){
        return eventService.saveEvent(eventDTO);
    }

    @PutMapping("/updateEvent/{id}")
    public EventDTO updateEvent(@PathVariable Integer id, @RequestBody EventDTO eventDTO) {
        eventDTO.setId(id); // set the id from the URL
        return eventService.updateEvent(eventDTO);
    }


    @GetMapping("/getEvent/{id}")
    public EventDTO getEventById(@PathVariable Integer id){
        return eventService.getEventById(id);
    }


    @DeleteMapping("/deleteEvent/{id}")
    public void deleteEvent(@PathVariable Integer id){
        EventDTO dto = new EventDTO();
        dto.setId(id);
        eventService.deleteEvent(dto);
    }
}
