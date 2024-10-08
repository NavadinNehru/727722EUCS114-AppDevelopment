package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Client;
import com.example.backend.repository.ClientRepository;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;

    public Client saveClient(Client client) {
        return clientRepository.save(client);
    }

    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    public Client getClientById(Long id) {
        return clientRepository.findById(id).orElse(null);
    }

    public void deleteClient(Long id) {
        clientRepository.deleteById(id);
    }

    public Client authenticateClient(String email, String password) {
        Client client = clientRepository.findByEmail(email);
        if (client != null && client.getPassword().equals(password)) {
            return client;
        }
        return null;
    }
}
