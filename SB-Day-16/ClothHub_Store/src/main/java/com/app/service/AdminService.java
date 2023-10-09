package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.entity.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

//import com.max.spring.model.AppModel;
//import com.max.spring.model.AuthModel;
//import com.max.spring.repository.Apprepo;
//import com.max.spring.repository.Authrepo;

@Service
public class AdminService {


//    //Login Logic
//    public String Login(String username, String password) {
//        AuthModel xuser = authrepo.findByusername(username);
//        if (xuser == null) {
//            return "invalidusername";
//        } else {
//            if (xuser.getPassword().equals(password)) {
//                return "success";
//            } else {
//                return "invalidpassword";
//            }
//        }
//    }

//    //Signup Logic
//    public String Signup(AuthModel xuser) {
//        String username = xuser.getUsername();
//        AuthModel authuser = authrepo.findByusername(username);
//        if (authuser == null) {
//            authrepo.save(xuser);
//            return "useradded";
//        } else {
//            return "existingusername";
//        }
//    }

//    // Get
//    public List<Admin> getData() {
//        ResponseEntity<Admin> responseEntity=new RestTemplate().getForEntity("http://localhost:8081/api/list",List<Admin>)
//        //return apprepo.findAll();
//
//
//    }
//
//    // Post
//    public AppModel addData(AppModel data) {
//        return apprepo.save(data);
//    }
//
//    // Edit (modify if data exists and save, else don't save)
//    public AppModel editData(AppModel data, Long id) {
//        AppModel edx = apprepo.findById(id).orElse(data);
//        if (edx != null) {
//            edx.setCollegename(data.getCollegename());
//            edx.setCollegelocation(data.getCollegelocation());
//            edx.setCollegerating(data.getCollegerating());
//            edx.setCollegecategory(data.getCollegecategory());
//            edx.setCollegeimg(data.getCollegeimg());
//            return apprepo.saveAndFlush(edx);
//        } else {
//            return null;
//        }
//    }
//
//    //Delete
//    public String deleteData(Long id) {
//        apprepo.deleteById(id);
//        return "Deleted Successfully";
//    }
//
//    //Find by ID
//    public Optional<AppModel> findbyID(Long id) {
//        return apprepo.findById(id);
//    }


}
