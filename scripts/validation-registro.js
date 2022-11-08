

const buttonRegistro = document.querySelector('#registro');

console.log(buttonRegistro);
buttonRegistro.addEventListener('click',(event) =>{
    event.preventDefault();

    
    const name = document.forms.form_login1.Usuario.value;
    const apellido = document.forms.form_login1.Apellido.value;
    const email = document.forms.form_login1.EMail.value;
    const password = document.forms.form_login1.Password.value;

    const regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  
    const regName = /\d+$/g;    
    const redApe =  /\d+$/g;                            

    if (name == "" || regName.test(name)) {
        window.alert("Ingresa tu nombre.");
        document.querySelector('[name=Usuario]').focus();
        return false;
    }

    

    if (apellido == "" || redApe.test(apellido)) {
        window.alert("Ingresa tu apellido.");
        document.querySelector('[name=Apellido]').focus();
        return false;
    }
     
    if (email == "" || !regEmail.test(email)) {
        window.alert("Ingresa una dirección de correo valida.");
        document.querySelector('[name=EMail]').focus();
        return false;
    }
      
    if (password == "") {
        alert("Ingresa tu contraseña.");
        document.querySelector('[name=Password]').focus();
        return false;
    }

    if(password.length <6){
        alert("La contraseña debe de tener minimo 6 caracteres.");
        document.querySelector('[name=Password]').focus();
        return false;

    }

    window.location="index.html";
    event.preventDefault(); 
});