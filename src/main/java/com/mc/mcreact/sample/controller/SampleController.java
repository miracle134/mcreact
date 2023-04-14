/**
 * MiracleCat Project
 * Copyright 2018 https://github.com/miracle134
 */
package com.mc.mcreact.sample.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * packageName    : com.mc.mcreact.sample.controller
 * fileName       : SampleController
 * author         : MiracleCat
 * date           : 2023-04-06
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023-04-06        MiracleCat       최초 생성
 */
@RestController
public class SampleController {

    static ArrayList<String> list = new ArrayList<>(Arrays.asList("1", "2"));

    @GetMapping("/hello")
    public List<String> hello() {
        return list;
    }

    @PostMapping("/hello")
    public List<String> hello(@RequestBody String name) {
        list.add(name);

        return list;
    }

}
