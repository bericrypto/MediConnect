package com.wecp.progressive.exception;

public class PatientAlreadyExistsException extends Exception{
    public PatientAlreadyExistsException(String msg){
        super(msg);
    }
}