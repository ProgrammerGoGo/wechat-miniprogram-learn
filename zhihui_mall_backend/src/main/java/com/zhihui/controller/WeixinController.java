package com.zhihui.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WeixinController {

    /**
     * 小程序欢迎页
     *
     * @return
     */
    @RequestMapping("/getWelcomePic")
    public String getWelcomePic() {
        return "http://127.0.0.1:8080/welcome1.jpeg";
    }
}
