package com.wecp.progressive.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.wecp.progressive.entity.Clinic;


@Repository
public interface ClinicRepository extends JpaRepository<Clinic, Integer>{
    void deleteByDoctorId(int doctorId);
    List<Clinic> findByLocation(String location);
}