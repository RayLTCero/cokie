
function validateRegister() {
    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellido');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirmPassword');
    let allCamposValues = new Array(
        nombre.value.toLowerCase(),
        apellido.value.toLowerCase(),
        email.value.toLowerCase(),
        password.value.toLowerCase(),
        confirmPassword.value.toLowerCase());

    let res = true;



    /*elimino la clase is-invalid
    para volver a preguntar si esta vacio en caso de que no sea la primera ejecucion
    y tenga las clases añadidas*/

    nombre.classList.remove('is-invalid');
    apellido.classList.remove('is-invalid');
    email.classList.remove('is-invalid');
    password.classList.remove('is-invalid');
    confirmPassword.classList.remove('is-invalid');




    /*agrego la clase is-valid para que la tenga por defecto*/

    nombre.classList.add('is-valid');
    apellido.classList.add('is-valid');
    email.classList.add('is-valid');
    password.classList.add('is-valid');
    confirmPassword.classList.add('is-valid');

    //validacion campos vacios
    for (let x in allCamposValues) {

        //pregunto si los campos estan vacios
        if (allCamposValues[x] == '') {


            //si estan vacios agrego la clase is-invalid y remuevo la clase is-valid, (envio un mensaje)
            switch (Number(x)) {
                case 0:

                    nombre.classList.remove('is-valid');
                    nombre.classList.add('is-invalid');

                    break;
                case 1:

                    apellido.classList.remove('is-valid');
                    apellido.classList.add('is-invalid');

                    break;
                case 2:

                    email.classList.remove('is-valid');
                    email.classList.add('is-invalid');

                    break;
                case 3:

                    password.classList.remove('is-valid');
                    password.classList.add('is-invalid');

                    break;
                case 4:

                    confirmPassword.classList.remove('is-valid');
                    confirmPassword.classList.add('is-invalid');

                    break;


            }
            res = false;
        }
    }

    //validacion passwords iguales
    if (password.value !== confirmPassword.value) {

        password.classList.remove('is-valid');
        password.classList.add('is-invalid');
        confirmPassword.classList.remove('is-valid');
        confirmPassword.classList.add('is-invalid');
        document.getElementById('wrongPass').textContent = "Password Doesnt match";
        document.getElementById('cWrongPass').textContent = "Password Doesnt match";

        res = false;
    }

    return res;
}

function validateLogin() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let res = true;

    /*elimino la clase is-invalid
    para volver a preguntar si esta vacio en caso de que no sea la primera ejecucion
    y tenga las clases añadidas*/

    email.classList.remove('is-invalid');
    password.classList.remove('is-invalid');

    /*agrego la clase is-valid para que la tenga por defecto*/
    email.classList.add('is-valid');
    password.classList.add('is-valid');

    //validacion campos vacios

    if (email.value == "") {
        email.classList.remove('is-valid');
        email.classList.add('is-invalid');

        if (password.value == "") {
            password.classList.remove('is-valid');
            password.classList.add('is-invalid');


        }
        res = false;
    } else if (password.value == "") {
        password.classList.remove('is-valid');
        password.classList.add('is-invalid');
        res = false;

    }



    return res;

}

function validatePost() {
    let postTextArea = document.getElementById('postTextArea');
    let post = postTextArea.value;
    let res = true;

    postTextArea.classList.remove('is-invalid');
    

    if (post == '') {
        
        postTextArea.classList.add('is-invalid');
        res = false;
    }
    if (post.length > 60) {
        
        postTextArea.classList.add('is-invalid');
        alert('Tu post Sobre pasa el limite de caracteres');
        res = false;
    }

    return res;
}


function getDataFromRegister() {
    if (validateRegister()) {
        return {
            nombre: nombre.value.toLowerCase(),
            apellido: apellido.value.toLowerCase(),
            email: email.value.toLowerCase(),
            password: password.value.toLowerCase()
        }
    }



}

function getDataFromLogin() {
    if (validateLogin()) {
        return {
            email: email.value.toLowerCase(),
            password: password.value.toLowerCase()
        }
    }
}

function getDataFromPostCreator(obj) {
    if (validatePost()) {
        return {
            nombre: obj.nombre,
            apellido: obj.apellido,
            author: obj.author,
            fechaPublicacion: obj.fechaPublicacion,
            post:obj.post,
            likeNumber: obj.likeNumber,
            nahNumber: obj.nahNumber,
            mehNumber: obj.mehNumber
        }
        //console.log(obj);
    }
}


function irA(dir) {

    location.href += dir;

}

function removeHash() {

    let hash = location.href.substr(location.href.indexOf('#'));
    if (hash.charAt(0) === '#') {
        let newUrl = location.href.replace(hash, '');
        location.href = newUrl;
    }


}

function hasHash() {
    let hash = location.href.substr(location.href.indexOf('#'));
    if (hash) {
        return true;
    } else {
        return false;
    }
}



function getPostDate() {
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth();
    let year = fecha.getFullYear();

    return dia + '-' + mes + '-' + year;
}

var ID = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};

function clearInputs(id){
    return document.getElementById(id).value = '';
}
    