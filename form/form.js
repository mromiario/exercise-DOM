
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var c_pass = document.getElementById("confirm_pass").value;
    var email = document.getElementById("email").value;
    var c_email = document.getElementById("c_email").value;


    if(username === ''){
        alert("Username tidak boleh kosong!")
    } else if(password === ''){
        alert('Password tidak boleh kosong!')
    } else if(c_pass === ''){
        alert('Harap konfirmasi Password Anda!')
    } else if(email === ''){
        alert('E-mail tidak boleh kosong')
    }else if(c_email ===''){
        alert('Harap konfirmasi E-mail Anda!')
    }

    if(password !== c_pass){
        alert('Password yang anda masukkan tidak sesuai!')
    }

    if(email !== c_email){
        alert('Email tidak sesuai!')
    }
 
 
  };


