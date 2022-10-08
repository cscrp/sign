(function () {
    const user = document.querySelector(".user input"),
        password = document.querySelector(".password input"),
        phone = document.querySelector(".phone input"),
        verificationCode = document.querySelector(".verificationCode input"),
        passwordLogin = document.querySelector(".passwordLogin"),
        SMSLogin = document.querySelector(".SMSLogin"),
        loginBottom = document.querySelector(".login-bottom"),
        loginPas = document.querySelector(".login-pas"),
        denglu = document.querySelector(".denglu"),
        denglu2 = document.querySelector(".denglu2"),
        loginNewbg = document.querySelector(".login-newbg"),
        loginNewbg2 = document.querySelector(".login-newbg2"),
        iconQrcode = document.querySelector(".icon-qrcode"),
        iconPassword = document.querySelector(".icon-password");



    /* 用户校验 */
    const checkUser = function checkUser() {
        let val = user.value.trim();
        if (val.length === 0) {
            alert("账号不能为空");
            return false
        }
        let reg1 = /^(?:(?:\+|00)86)?1\d{10}$/;
        let reg2 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let reg3 = /^[\w\u4e00-\u9fa5-]{4,16}$/;
        if (!reg1.test(val) && !reg2.test(val) && !reg3.test(val)) {
            alert("账号格式有误[支持：手机号、邮箱、用户名]!")
            return false
        }
        return true
    }

    /* 密码校验 */
    const checkPassword = function checkPassword() {
        let val = password.value.trim();
        if (val.length === 0) {
            alert("密码不能为空!")
            return false
        }
        let reg = /^.{6,16}$/
        if (!reg.test(val)) {
            alert("密码格式有误[6~16位任意字符]!")
            return false
        }
        return true
    }

    /* 点击登录 */
    denglu.onclick = function () {
        if (!checkUser() || !checkPassword()) {
            return

        }
        alert("登录成功")
        location.href = 'index.html'
    }
    /* 手机号校验 */
    const checkPhone = function checkPhone() {
        let val = phone.value.trim();
        if (val.length === 0) {
            alert("手机号不能为空");
            return false
        }
        let reg1 = /^(?:(?:\+|00)86)?1\d{10}$/;
        if (!reg1.test(val)) {
            alert("手机号格式有误")
            return false
        }
        return true
    }
    /* 验证码校验 */
    const checkverificationCode = function checkverificationCode() {
        let val = verificationCode.value.trim();
        if (val.length === 0) {
            alert("验证码不能为空!")
            return false
        }
        let reg = /^\d{6}$/
        if (!reg.test(val)) {
            alert("验证码格式有误[6位数字]!")
            return false
        }
        return true
    }
    /* 登录 */
    denglu2.onclick = function () {
        if (!checkPhone() || !checkverificationCode()) {
            return

        }
        alert("登录成功")
        location.href = 'index.html'
    }

    /* 选项卡 */
    passwordLogin.onclick = function () {
        loginBottom.style.display = "block";
        passwordLogin.style.textDecoration = 'underline';
        loginPas.style.display = "none";
        SMSLogin.style.textDecoration = 'none';
    }
    SMSLogin.onclick = function () {
        SMSLogin.style.textDecoration = 'underline';
        passwordLogin.style.textDecoration = 'none';
        loginPas.style.display = "block";
        loginBottom.style.display = "none";
    }


    iconPassword.onclick = function () {
        loginNewbg.style.display = 'block';
        loginNewbg2.style.display = 'none';
    }
    iconQrcode.onclick = function () {
        loginNewbg.style.display = 'none';
        loginNewbg2.style.display = 'block';
    }
})()