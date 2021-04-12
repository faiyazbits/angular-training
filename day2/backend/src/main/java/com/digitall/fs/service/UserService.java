package com.digitall.fs.service;

import com.digitall.fs.entity.User;
import com.digitall.fs.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;


@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public List<User> getAllUsers() {
        return Collections.emptyList();
    }

    public Optional<User> getUserById(String id) {
        return Optional.empty();
    }

    public User createUser(User user) {
        return user;
    }

    public User updateUser(User user) {
        return user;
    }

    public void deleteUser(String userId) {

    }


    public Long countUsersByDomain(String emailDomain) {

        List<User> allUsers = userRepository.findAll();

        return allUsers.stream().filter((user) -> user.getEmail().endsWith(emailDomain)).count();
    }
}
