package com.demo.contactrepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.contactentity.Contact;

@Repository
public interface ContactRepo extends JpaRepository<Contact, Integer>{

}
