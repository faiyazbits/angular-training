package com.digitall.fs.entity;

public class User {
    String id;
    String email;

    public User(String id) {
    }


    public User(String id, String email) {
        this(id);
        this.email = email;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
