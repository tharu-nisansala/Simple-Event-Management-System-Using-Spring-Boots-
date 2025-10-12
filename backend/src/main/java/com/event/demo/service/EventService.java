package com.event.demo.service;

import com.event.demo.dto.EventDTO;
import com.event.demo.model.Event;
import com.event.demo.repo.EventRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class EventService {
    @Autowired
    private EventRepo eventRepo;

    @Autowired
    private ModelMapper modelMapper;

    public List<EventDTO> getAllEvents() {
        List<Event>eventList = eventRepo.findAll();
        return modelMapper.map(eventList,new TypeToken<List<EventDTO>>(){}.getType());
    }

    public EventDTO saveEvent(EventDTO eventDTO){
        eventRepo.save(modelMapper.map(eventDTO,Event.class));
        return modelMapper.map(eventDTO,EventDTO.class);
    }

    public EventDTO updateEvent(EventDTO eventDTO){
        eventRepo.save(modelMapper.map(eventDTO,Event.class));
        return modelMapper.map(eventDTO,EventDTO.class);
    }

    public void deleteEvent(EventDTO eventDTO){
        eventRepo.delete(modelMapper.map(eventDTO,Event.class));
    }

    public EventDTO getEventById(Integer id) {
        Event event = eventRepo.findById(id).orElse(null);
        if (event == null) return null;
        return modelMapper.map(event, EventDTO.class);
    }

}
