package com.demo.studrepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.studentity.Student;

@Repository
public interface StudentRepo extends JpaRepository<Student, Integer>{

}
