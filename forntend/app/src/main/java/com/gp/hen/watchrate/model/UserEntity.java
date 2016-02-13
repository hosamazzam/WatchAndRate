package com.gp.hen.watchrate.model;


import org.json.JSONException;
import org.json.simple.JSONObject;

import java.util.ArrayList;


/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author hosam azzam
 */
public class UserEntity {
    private int User_Id;
    private String Name;
    private String Email;
    private String Pass;
    private double Score;
    private String image;
    private ArrayList<ReviewEntity> review;

    public int getUser_Id() {
        return User_Id;
    }

    public String getName() {
        return Name;
    }

    public String getEmail() {
        return Email;
    }

    public String getPass() {
        return Pass;
    }

    public double getScore() {
        return Score;
    }

    public String getImage() {
        return image;
    }

    static UserEntity user = new UserEntity();

    private UserEntity(){
    }
    public static  UserEntity getCurrentUser(){
        return user;
    }
    public static  void setCurrentUser(JSONObject json) {
        user.Email = json.get("email").toString();
        user.Name =  json.get("name").toString();
        user.Pass =  json.get("pass").toString();
        user.image =  json.get("image").toString();
        user.Score= Double.valueOf(json.get("score").toString());
        user.User_Id = Integer.valueOf(json.get("userid").toString());

    }
}
