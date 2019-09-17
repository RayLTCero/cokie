async function createUser(obj) {
    let ref = firebase.database().ref("users");
    let id = ID();
    ref.child(id).set({
        id: id,
        nombre: obj.nombre,
        apellido: obj.apellido,
        email: obj.email,
        password: obj.password
    });

    firebase.auth().createUserWithEmailAndPassword(obj.email, obj.password)
        .then(() => {
            emailVerification();
        })
        .catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorCode);
            alert(errorMessage);
        });

}

function createPost(obj) {
    let ref = firebase.database().ref("posts");
    let id = ID();

    ref.child(id).set({
        id: id,
        nombre: obj.nombre,
        apellido: obj.apellido,
        author: obj.author,
        fechaPublicacion: obj.fechaPublicacion,
        post: obj.post,
        likeNumber: obj.likeNumber,
        nahNumber: obj.nahNumber,
        mehNumber: obj.mehNumber
    });
}


function editPost(){
    
}





function login(obj) {

    firebase.auth().signInWithEmailAndPassword(obj.email, obj.password).then(response => {

    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}

function signOut() {
    firebase.auth().signOut();
}



async function emailVerification() {

    var user = firebase.auth().currentUser;
    var res = await user.sendEmailVerification();
    /*.then(function () {
      // Email sent.
      console.log('email verification .then');
      return true;
    }).catch(function (error) {
      // An error happened.
      console.log(error);
      return error;
    });
    */
}


