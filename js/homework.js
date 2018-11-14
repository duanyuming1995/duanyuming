window.onload = function () {
    var text = document.getElementById("text");
    var pwd = document.getElementById("pwd");
    var pwd2 = document.getElementById("pwd2");
    var email = document.getElementById("email");
    var  tel = document.getElementById("tel");
    var id = document.getElementById("id");
    var youbian = document.getElementById("youbian");
    //判断用户名
    text.onblur = function () {
        var result = this.value.match(/^[a-z0-9A-Z_]{5,10}$/);
        if (result == null)
        {
            document.getElementById("stext").innerText = "用户名格式有误";
        }
    }
    text.onfocus = function () {
        document.getElementById("stext").innerText =null;
    }
    //判断密码
    pwd.onblur = function ()
    {
        var result = this.value.match(/^[a-zA-Z0-9_]{6,15}$/);
        if (result == null)
        {
            document.getElementById("spwd").innerText = "密码格式有误";
        }
    }
   pwd.onfocus = function ()
   {
        document.getElementById("spwd").innerText = null;
   }

   //第二次输入密码
    pwd2.onblur = function ()
    {
        if (this.value != pwd.value||this.value == "")
        {
            document.getElementById("spwd2").innerText = "两次输入的密码不一致";
        }
    }
    pwd2.onfocus = function () {
        document.getElementById("spwd2").innerText = null;
    }

    //验证电话号码
    tel.onblur = function () {
        var result = this.value.match(/^\+86\-1[0-9]{10}$/);
        if (result == null)
        {
            document.getElementById("stel").innerText = "电话号码格式有误";
        }
    }
    tel.onfocus = function () {
        document.getElementById("stel").innerText = null;
    }

    //验证邮箱
    email.onblur = function () {
        var result = this.value.match(/^[0-9]{5,11}@(qq|163|162)\.(com|cn|org)$/);
        if (result == null)
        {
            document.getElementById("semail").innerText = "邮箱格式有误";
        }
    }
    email.onfocus = function () {
        document.getElementById("semail").innerText = null;
    }
//验证邮编
    youbian.onblur = function () {
        var result = this.value.match(/^[0-9]{6}$/);
        if (result == null)
        {
            document.getElementById("syoubian").innerText = "邮编格式有误";
        }
    }
    youbian.onfocus = function () {
        document.getElementById("syoubian").innerText = null;
    }


    //验证省份证号
    id.onblur = function () {
        var result = this.value.match(/^[0-9]{17}(x|[0-9])$/);
        if (result == null)
        {
            document.getElementById("sid").innerText = "身份证号格式有误";
        }
    }
    id.onfocus = function () {
        document.getElementById("sid").innerText = null;
    }
}



