package com.wecp.progressive.exception;

public class DoctorAlreadyExistsException extends Exception{
    public DoctorAlreadyExistsException(String msg){
        super(msg);
    }
}