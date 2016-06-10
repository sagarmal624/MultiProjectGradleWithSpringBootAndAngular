package com.ttnd.linkSharing.Controllers;

import com.ttnd.linkSharing.CommandObjects.UserCo;
import com.ttnd.linkSharing.Domain.User;
import com.ttnd.linkSharing.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(allowCredentials = "true", origins = "*", maxAge = 3600)
@RestController
public class UserController {
    @Autowired
    UserRepository userRepository;

    @RequestMapping(value = "/saveUser", method = {RequestMethod.POST, RequestMethod.GET})
    public List<User> saveUser(@ModelAttribute UserCo userCo) {
        User user = new User(userCo);
        userRepository.save(user);
        return userRepository.findAll();
    }
}
