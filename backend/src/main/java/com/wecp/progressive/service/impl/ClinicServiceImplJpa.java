package com.wecp.progressive.service.impl;

import com.wecp.progressive.entity.Clinic;
import com.wecp.progressive.exception.ClinicAlreadyExistsException;
import com.wecp.progressive.repository.AppointmentRepository;
import com.wecp.progressive.repository.ClinicRepository;
import com.wecp.progressive.repository.DoctorRepository;
import com.wecp.progressive.service.ClinicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClinicServiceImplJpa implements ClinicService {

    ClinicRepository clinicRepository;

    @Autowired
    AppointmentRepository appointmentRepository;

    @Autowired
    public ClinicServiceImplJpa(ClinicRepository clinicRepository) {
        this.clinicRepository = clinicRepository;
    }

    @Override
    public List<Clinic> getAllClinics() throws Exception {
        return clinicRepository.findAll();
    }

    @Override
    public Clinic getClinicById(int clinicId) throws Exception {
        return clinicRepository.findByClinicId(clinicId);
    }

    @Override
    public Integer addClinic(Clinic clinic) throws Exception {
        Clinic existingClinic = clinicRepository.findByClinicName(clinic.getClinicName());
        if (existingClinic != null) {
            throw new ClinicAlreadyExistsException("Clinic with this name already exists, Clinic Name: " + clinic.getClinicName());
        }
        return clinicRepository.save(clinic).getClinicId();
    }

    @Override
    public void updateClinic(Clinic clinic) throws Exception {
        Clinic existingClinic = clinicRepository.findByClinicName(clinic.getClinicName());
        if (existingClinic != null && existingClinic.getClinicId() != clinic.getClinicId()) {
            throw new ClinicAlreadyExistsException("Clinic with this name already exists, Clinic Name: " + clinic.getClinicName());
        }
        clinicRepository.save(clinic);
    }

    @Override
    public void deleteClinic(int clinicId) throws Exception {
        appointmentRepository.deleteByClinicId(clinicId);
        clinicRepository.deleteById(clinicId);
    }

    @Override
    public List<Clinic> getAllClinicByLocation(String location) {
        return clinicRepository.findAllByLocation(location);
    }

    @Override
    public List<Clinic> getAllClinicByDoctorId(int doctorId) {
        return clinicRepository.findAllByDoctorId(doctorId);
    }
}