document.addEventListener('DOMContentLoaded', function () {

    var firebaseConfig = {
        apiKey: "AIzaSyBS-lXWEC_38LRy3M9O7nPGgZMgs0xNsIo",
        authDomain: "cokie-2dd20.firebaseapp.com",
        databaseURL: "https://cokie-2dd20.firebaseio.com",
        projectId: "cokie-2dd20",
        storageBucket: "",
        messagingSenderId: "999692031371",
        appId: "1:999692031371:web:bee7e00fefeec1d1ae8b8e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // global var user
    var myUser;


    var root = '';
    var useHash = true; // Defaults to: false
    var hash = '#'; // Defaults to: '#'
    var router = new Navigo(root, useHash, hash);


    let contenido = document.querySelector('#contenido');
    let refUser = firebase.database().ref('users');
    let refPost = firebase.database().ref('posts');
    var allUsers;
    var allPosts;
    var me = {};

    var userExists = new Promise(function (resolve, reject) {
        setTimeout(() => {

            var repeatUntilUserExists = setInterval(() => {

                if (myUser) {

                    resolve('Nice');
                    clearInterval(repeatUntilUserExists);
                }
            }, 1000);

        }), 5000;
    });

    var getUsers = new Promise(function (resolve, reject) {
        refUser.on('value', function (user) {

            resolve(Object.values(user.val()));
        });
    })




    firebase.auth().onAuthStateChanged(function (user) {

        if (user && user.emailVerified) {
            // User is signed in.
            myUser = user;
            console.log('existe usuario activo');

            setInterval(() => {
                if (hasHash()) {

                    removeHash();
                }

            }, 1000);


        } else {
            console.log('no existe usuario activo');
            irA('#landing');

        }
    });



    router
        .on(
            function () {

                contenido.innerHTML = '';
                contenido.innerHTML = loading;

                setTimeout(() => {



                    contenido.innerHTML = '';
                    contenido.innerHTML = navbar();
                    contenido.innerHTML += postCreator();
                    contenido.innerHTML += postContainerTemplate();

                    let btnSignOut = document.getElementById('signOut');

                    let postContainer = document.getElementById('postContainer');

                    let btnPost = document.getElementById('btnPost');






                    getUsers.then((response) => {

                        allUsers = response;
                        userExists.then((response) => {


                            for (let x in allUsers) {
                                if (allUsers[x].email == myUser.email) {

                                    me = {
                                        nombre: allUsers[x].nombre,
                                        apellido: allUsers[x].apellido,
                                        author: allUsers[x].id,
                                        fechaPublicacion: getPostDate(),
                                        post: 'some',
                                        likeNumber: 0,
                                        nahNumber: 0,
                                        mehNumber: 0
                                    }
                                }
                            }

                        });
                    })






                    refPost.on('value', function (posts) {
                        allPosts = Object.values(posts.val());
                        allPosts = allPosts.reverse();
                        postContainer.innerHTML = '';
                        
                        for(let x in allPosts){
                            postContainer.innerHTML += postTemplate(allPosts[x]);
                            
                        }
                       //document.querySelectorAll(me.author)[x].classList.remove('d-none');
                        
                        

                    });

                    btnPost.addEventListener('click', () => {
                        let post = document.getElementById('postTextArea').value;
                        post = post.toLowerCase();
                        me.post = post;
                        console.log(me);

                        createPost(getDataFromPostCreator(me));
                        clearInputs('postTextArea');



                    });

                    btnSignOut.addEventListener('click', () => {
                        
                        signOut();
                        

                    });
                }, 1500);

            }

        )
        .on('landing', function () {

            contenido.innerHTML = '';
            contenido.innerHTML = loading;
            setTimeout(() => {
                contenido.innerHTML = landingTemplate();
                var btnLandingLogin = document.getElementById('btnLandingLogin');
                var btnLandingRegister = document.getElementById('btnLandingRegister');


            }, 1500);


        })
        .on('login', function () {

            contenido.innerHTML = '';
            contenido.innerHTML = loading;
            setTimeout(() => {
                contenido.innerHTML = '';
                contenido.innerHTML = loginTemplate();

                let btnLogin = document.getElementById('btnLogin');
                btnLogin.addEventListener('click', () => {
                    login(getDataFromLogin());

                });
            }, 1500);

        })

        .on('register', function () {
            contenido.innerHTML = '';
            contenido.innerHTML = loading;

            setTimeout(() => {
                contenido.innerHTML = '';
                contenido.innerHTML = registerTemplate();
                let btnRegister = document.getElementById('btnRegister');
                btnRegister.addEventListener('click', () => {
                    createUser(getDataFromRegister());
                    contenido.innerHTML = '';
                    contenido.innerHTML = verifyEmail;




                });

            }, 1500);

        })

        .resolve();







});
