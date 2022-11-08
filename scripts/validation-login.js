

const buttonLogin = document.querySelector('#login');
buttonLogin.addEventListener('click',(event) =>{
    

    const name = document.forms.form_login.usuario.value;
    const password = document.forms.form_login.contra.value;
    const regName = /\d+$/g;                    

    if (name == "" || regName.test(name)) {
        window.alert("Ingresa tu nombre de usuario.");
        document.getElementById('usuarios').focus();
        event.preventDefault();
        return false;
    }
      
    if (password == "") {
        alert("Ingresa tu contraseña.");
        document.getElementById('contraseña').focus();
        event.preventDefault();
        return false;
    }

    if(password.length <6){
        alert("La contraseña debe de tener minimo 6 caracteres.");
        document.getElementById('contraseña').focus();
        event.preventDefault();
        return false;
    }

    window.location="index.html";
    event.preventDefault();    
    
    
} );

