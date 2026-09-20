const form = document.getElementById('registerForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const pwd = document.getElementById('pwd');
const pwd2 = document.getElementById('pwd2');

// 用户名校验
username.addEventListener('blur',function(){
    const val = this.value.trim();
    const tip = document.getElementById('userTip');
    const reg = /^[a-zA-Z0-9]{4,16}$/;
    if(val === ""){
        tip.textContent = "用户名不能为空";
        tip.className = "tip error";
    }else if(!reg.test(val)){
        tip.textContent = "格式错误，4-16位字母数字";
        tip.className = "tip error";
    }else{
        tip.textContent = "用户名格式正确";
        tip.className = "tip success";
    }
})

//邮箱校验
email.addEventListener('blur',function(){
    const val = this.value.trim();
    const tip = document.getElementById('emailTip');
    const reg = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if(val === ""){
        tip.textContent = "邮箱不能为空";
        tip.className = "tip error";
    }else if(!reg.test(val)){
        tip.textContent = "邮箱格式不正确";
        tip.className = "tip error";
    }else{
        tip.textContent = "邮箱格式正确";
        tip.className = "tip success";
    }
})

//密码校验
pwd.addEventListener('blur',function(){
    const val = this.value;
    const tip = document.getElementById('pwdTip');
    if(val.length <6){
        tip.textContent = "密码至少6位";
        tip.className = "tip error";
    }else{
        tip.textContent = "密码符合要求";
        tip.className = "tip success";
    }
})

//确认密码
pwd2.addEventListener('blur',function(){
    const val = this.value;
    const tip = document.getElementById('pwd2Tip');
    if(val !== pwd.value){
        tip.textContent = "两次密码不一致";
        tip.className = "tip error";
    }else{
        tip.textContent = "密码匹配";
        tip.className = "tip success";
    }
})

//表单提交
form.addEventListener('submit',function(e){
    e.preventDefault();
    alert("注册信息提交成功！");
    form.reset();
    //清空提示文字
    document.querySelectorAll('.tip').forEach(item=>{
        item.textContent = "";
    })
})
