package com.wecp.progressive.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.wecp.progressive.entity.Appointment;
import com.wecp.progressive.entity.Clinic;
import com.wecp.progressive.entity.Patient;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment,Integer>{
    // public List<Appointment> findByClinicId(Integer clinicId);
    // public List<Appointment> findByPatientId(Integer patientId);
    public List<Appointment> findByStatus(String status);
    // void deleteByDoctorId(int doctorId);
    @Modifying
    @Transactional
    @Query("DELETE FROM Appointment a WHERE a.patient.patientId = :patientId")
    void deleteByPatientId(@Param("patientId") int patientId);
}