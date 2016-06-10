package com.ttnd.linkSharing.Controllers;

import com.ttnd.linkSharing.Domain.User;
import com.ttnd.linkSharing.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(allowCredentials = "true", origins = "*", maxAge = 3600)
@RestController
public class LoginController {
    @Autowired
    UserRepository userRepository;

    @RequestMapping("/login")
    public Map isUserExist(@RequestParam(name = "username") String username,
                           @RequestParam(name = "password") String password) {
        User user = userRepository.findByUsernameAndPassword(username, password);
        Map map = new HashMap();
        if (user != null) {
            map.put("status", "success");
        } else {
            map.put("status", "failure");

        }
        return map;
    }
}
