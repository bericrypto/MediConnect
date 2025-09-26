package com.wecp.progressive.exception;

public class PatientNotFoundException extends Exception{
    public PatientNotFoundException(String msg){
        super(msg);
    }
}