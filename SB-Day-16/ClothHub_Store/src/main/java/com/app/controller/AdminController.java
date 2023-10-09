//package com.app.controller;
//
//
//
//
//
//import java.util.List;
//import java.util.Map;
//import java.util.Optional;
//
//import com.app.entity.Admin;
//import com.app.service.AdminService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//    @RestController
//    @RequestMapping("/api")
//    @CrossOrigin("http://localhost:3000")
//    public class AdminController {
//        @Autowired
//        private AdminService service;
//
////        // Auth
//////        @Tag(name = "Signin", description = "Login Endpoint")
////        @PostMapping("/Signin")
////        private String Login(@RequestBody Map<String, String> xLogin) {
////            String username = xLogin.get("username");
////            String password = xLogin.get("password");
////            String result = service.Login(username, password);
////            return result;
////        }
////
//////        @Tag(name = "Signup", description = "Signup Endpoint")
////        @PostMapping("/Signup")
////        public String Signup(@RequestBody AuthModel user) {
////            return service.Signup(user);
////        }
//
//        // Products
////        @Tag(name = "List Colleges", description = "List All Colleges")
//        @GetMapping("/list")
//        private List<Admin> Games(){
//            return service.getData();
//        }
////
//////        @Tag(name = "Sort Product by ID", description = "View individual College Data")
////        @GetMapping("/data/{id}")
////        private Optional<AppModel> viewGame(@PathVariable Long id) {
////            return service.findbyID(id);
////        }
//
////
//////        @Tag(name = "Add College", description = "Add New College")
////        @PostMapping("/add")
////        private AppModel addProduct(@RequestBody AppModel data) {
////            return service.addData(data);
////        }
////
//////        @Tag(name = "Edit College", description = "Edit Existing College")
////        @PutMapping("/edit/{id}")
////        private AppModel editProduct(@PathVariable Long id, @RequestBody AppModel data) {
////            return service.editData(data, id);
////        }
////
//////        @Tag(name = "Delete Data", description = "Delete The Existing College")
////        @DeleteMapping("/delete/{id}")
////        private String deleteProduct(@PathVariable Long id) {
////            return service.deleteData(id);
////        }
////    }
//
//}
