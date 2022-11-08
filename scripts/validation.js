function validationregistro() {
    var name =
        document.forms.form_login1.Usuario.value;
    var apellido =
        document.forms.form_login1.Apellido.value;
    var email =
        document.forms.form_login1.EMail.value;
    var password =
        document.forms.form_login1.Password.value;
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  
    var regName = /\d+$/g;    
    var redApe =  /\d+$/g;                            

    if (name == "" || regName.test(name)) {
        window.alert("Ingresa tu nombre.");
        name.focus();
        return false;
    }

    if (apellido == "" || redApe.test(apellido)) {
        window.alert("Ingresa tu apellido.");
        name.focus();
        return false;
    }
     
    if (email == "" || !regEmail.test(email)) {
        window.alert("Ingresa una dirección de correo valida.");
        email.focus();
        return false;
    }
      
    if (password == "") {
        alert("Ingresa tu contraseña.");
        password.focus();
        return false;
    }

    if(password.length <6){
        alert("La contraseña debe de tener minimo 6 caracteres.");
        password.focus();
        return false;

    }

    return true;
}

function validationlogin() {
    var name =
        document.forms.form_login.usuario.value;
    var password =
        document.forms.form_login.contra.value;
    var regName = /\d+$/g;                    

    if (name == "" || regName.test(name)) {
        window.alert("Ingresa tu nombre de usuario.");
        name.focus();
        return false;
    }
      
    if (password == "") {
        alert("Ingresa tu contraseña.");
        password.focus();
        return false;
    }

    if(password.length <6){
        alert("La contraseña debe de tener minimo 6 caracteres.");
        password.focus();
        return false;

    }
    return true;
}