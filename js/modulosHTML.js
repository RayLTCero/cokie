var loading = '<div class="text-center" >' +
    '<div class="spinner-border text-danger" style="width: 8rem; height: 8rem;" role="status">' +
    '<span class="sr-only">Loading...</span>' +
    '</div>' +
    '</div>';

var verifyEmail = '<div class="col-sm-8 col-md-6 col-lg-4">'+
                '<div class="card">'+
                    '<div class="card-body">'+
                        '<h2 class="text-purple-3">Please verify your Email.</h2>'+
                        '<h4>THEN Come Back</h4>'+
                    '</div>'+
                '</div>'+
            '</div>';

function loginTemplate() {

    return '<div class=" circle-top col-sm-8 col-md-6 col-lg-4 mx-auto mt-3 rounded bg-transparent-white text-white">' +
        '<h2 class="text-center mt-5 ">Login</h2>' +
        '<div class="row">' +
        '<div class="col-10 mx-auto">' +
        '<form>' +
        '<div class="form-group">' +
        '<input type="email" class="form-control form-control-lg" id="email" placeholder="Email">' +
        '<div class="invalid-feedback">' +
        'Email Required.' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<input type="password" class="form-control form-control-lg" id="password" placeholder="Password">' +
        '<div class="invalid-feedback">' +
        'Password Required.' +
        '</div>' +
        '</div>' +
        '<button type="button" class="btn btn-lg btn-block btn-yellow mb-5" id="btnLogin" onclick="">Login</button>' +
        '</form>' +
        '</div>' +
        '</div>' +
        '<div class="circle  "></div>' +
        '</div>' +
        '<div class="col-12">' +
        '<p class="text-white text-center">¿DONT HAVE AN ACCOUNT? <a id="aRefRegister" href="#register">Registrate</a></p>' +
        '</div>';

}

function landingTemplate() {
    return '<div class="col-sm-8 col-md-6 col-lg-4">' +
        '<div class="card my-3">' +
        '<div class="card-header">' +
        '<h2 class="text-purple-3">Welcome to Cokie!</h2>' +
        '</div>' +
        '<div class="card-body">' +
        '<p class="text-common">Share with everyone... </p>' +
        '<p class="text-common"> Make contact with people who share your same shit. Just Comment, give some love or hate, whatever.</p>' +
        '<img src="https://media.giphy.com/media/fMA9clafDU6k67qHbL/giphy.gif" alt="" class="gif rouded ml-5">' +
        ' </div>' +
        '</div>' +

        '</div>' +

        '<div class="col-sm-8 col-md-6 col-lg-4">' +
        '<div class="card my-3">' +
        '<div class="card-header">' +
        '<h2 class="text-purple-3 text-center card-title">Register</h2>' +
        ' </div>' +
        '<div class="body pb-3">' +

        ' <blockquote class="blockquote mb-0">' +
        '<p></p>' +
        '<h4 class="sombra-verde d-inline  text-black text-left pl-1 pr-1 ml-3">Until Now You make your </h4>' +
        '<h4 class="sombra-verde d-inline pt-1 text-black text-left pl-1 pr-1 ml-3">acount?</h4>' +
        '<h4 class=" sombra-rosa    text-black text-right pr-1 pl-1 mr-3">Yes</h4>' +
        '<h4 class=" sombra-verde mt-3 float-left ml-3 text-black text-left pr-1 pl-1">Thats not cool</h4>' +

        '<footer class="blockquote-footer mt-5 text-common text-left pr-3"><cite title="Source Title">A Nice Guy</cite></footer>' +
        '</blockquote>' +
        '</div>' +


        '</div>' +
        '</div>' +

        '<div class="col-sm-8 col-md-6 col-lg-4 offset-md-6 try">' +
        '<div class="card mb-2  ">' +
        '<div class="card-header">' +
        '<h2 class="text-center  text-purple-3">Where to go?</h2>' +
        '<a  href="#login" class="btn btn-verde  btn-sm btn-block my-3" id="btnLandingLogin" >Login </a>' +
        '<a href="#register" class="btn btn-verde   btn-sm btn-block my-3" id="btnLandingRegister">Register</a>' +
        '</div>' +

        '</div>' +
        '</div>';
}

function registerTemplate() {
    return '<div class=" circle-top col-sm-8 col-md-6 col-lg-4 mx-auto mt-3 rounded bg-transparent-white text-white">' +
        '<h2 class="text-center mt-5 ">Register</h2>' +
        '<div class="row">' +
        ' <div class="col-10 mx-auto">' +
        '<form>' +
        '<div class="form-group">' +
        '<input type="text" class="form-control" id="nombre" placeholder="Name">' +
        '<div class="invalid-feedback">' +
        'Name Required.' +
        '</div>' +
        '</div>' +
        '<div class="form-group ">' +
        '<input type="text" class="form-control" id="apellido" placeholder="Last Name">' +
        '<div class="invalid-feedback">' +
        'Last Name Required.' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<input type="email" class="form-control" id="email" placeholder="Email">' +
        '<div class="invalid-feedback">' +
        'Email Required.' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<input type="password" class="form-control " id="password" placeholder="Password">' +
        '<div id="wrongPass"class="invalid-feedback">' +
        'Password Required.' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<input type="password" class="form-control " id="confirmPassword" placeholder="Confirm Password">' +
        '<div id="cWrongPass"class="invalid-feedback">' +
        'Password Required.' +
        '</div>' +
        '</div>' +
        '<button type="button" class="btn btn-block btn-yellow mb-5" id="btnRegister">Sign In</button>' +
        '</form>' +
        '</div>' +
        '</div>' +
        '<div class="circle  "></div>' +
        '</div>' +
        '<div class="col-12">' +
        '<p class="text-white text-center">¿DO YOU HAVE AN ACCOUNT? <a id="aRefLogin" href="#login">LOGIN</a></p>';

}

function postCreator() {
    return '<div class="col-sm-8 col-md-8 col-lg-8 mt-4 mx-auto ">' +
        '<div class="card ">' +
        '<p class="text-muted text-common card-header">Create Post</p>' +
        '<div class="card-body">' +
        '<div class="form-group">' +
        '<label for="postTextArea " class="text-common">Say Something...</label>' +
        ' <textarea class="form-control text-common" id="postTextArea" rows="3" placeholder="Write Here"></textarea>' +
        '<div class="invalid-feedback">' +
        'Something Wrong.' +
        '</div>' +
        '<div class="valid-feedback">' +
        'Looks Good.' +
        '</div>' +
        '</div>' +
        '<button class=" btn btn-rosa float-right" id="btnPost">Post</button>' +
        '</div>' +
        ' </div>' +
        ' </div>';
}

function postContainerTemplate() {
    return '<div class="col-sm-8 col-md-8 col-lg-8  ">' +
        '<div class="row" id="postContainer">' +


        '</div>' +
        '</div>';
}

function postTemplate(obj) {
    return '<div class="col-12 mt-4 mb-4 ">' +
        '<div class="card ">' +
        '<div class="card-body pb-0">' +
        '<a href="" class=""><i class="fa fa-user" aria-hidden="true"> ' + obj.nombre + ' ' + obj.apellido + '</i></a>'+
    
        '<div class="dropdown show d-none float-right ml-3" id="">' +
        '<a class="dropdown-toggle text-dark" href="#" role="button" id="'+obj.author+'" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
        '<i class="fa fa-ellipsis-h" aria-hidden="true"></i>'+
        '</a>' +

        '<div class="dropdown-menu" aria-labelledby="'+obj.author+'">' +
        '<a class="dropdown-item" id="'+obj.id+'" href="#">Edit</a>' +
        '<a class="dropdown-item" href="#">Delete</a>' +
        '</div>' +
        '</div>' +
    
    
    
        '<span class="float-right"><i class="fa fa-calendar-o " aria-hidden="true"></i>' + obj.fechaPublicacion + '</span>' +
        '<p class="text-common mt-4">' + obj.post + '</p>' +
        '<span class="liked float-left "><span id="likeNumber" class="text-common">' + obj.likeNumber + '</span> <i class="fa fa-hand-peace-o" aria-hidden="true"></i></span>' +
        '<span class="nah float-left  ml-3"><span id="nahNumber" class="text-common">' + obj.nahNumber + '</span> <i class="fa fa-thumbs-o-down" aria-hidden="true"></i></span>' +
        '<span class="meh float-left  ml-3"><span id="mehNumber" class="text-common">' + obj.mehNumber + '</span> <i class="fa fa-meh-o" aria-hidden="true"></i></span>' +
        '</div>' +
        '<div class="card-footer ">' +
        '<button class="btn text-purple-3 btn-feedback float-left "><i class="fa fa-hand-peace-o" aria-hidden="true"></i> Cool</button>' +
        '<button class="btn text-purple-3 btn-feedback float-left "><i class="fa fa-thumbs-o-down" aria-hidden="true"></i> Nah</button>' +
        '<button class="btn text-purple-3 btn-feedback float-left "><i class="fa fa-meh-o" aria-hidden="true"></i> Meh</button>' +
        '<button class="btn text-purple-3 btn-feedback float-right"><i class="fa fa-comment-o" aria-hidden="true"></i> Comment</button>' +
        '</div>' +
        '</div>' +
        '</div>';
}

function navbar() {
    return '<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-yellow ">' +
        '<a class=" text-common logo" href="#">Cokie!</a>' +
        '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">' +
        '<span class="navbar-toggler-icon"></span>' +
        '</button>' +
        '<div class="collapse navbar-collapse" id="navbarCollapse">' +
        '<ul class="navbar-nav mr-auto  offset-lg-8">' +

        '<li class="nav-item">' +
        '<a  class="nav-link" href="#">Me</a>' +
        '</li>' +


        '<li class="nav-item">' +
        '<div class="dropdown show">' +
        '<a class=" nav-link   dropdown-toggle" href="#" role="button" id="notifications" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
        '<i class="fa fa-bell-o" aria-hidden="true"></i><span class="badge badge-pill bg-rosa">1</span>' +
        '</a>' +

        '<div class="dropdown-menu" aria-labelledby="notifications">' +
        '<a class="dropdown-item" href="#">Action</a>' +
        '<a class="dropdown-item" href="#">Another action</a>' +
        '<a class="dropdown-item" href="#">Something else here</a>' +
        '</div>' +
        '</div>' +
        '</li>' +

        '<li class="nav-item ">' +
        '<a id="signOut" class="nav-link " href="" ><i class="fa fa-sign-out"  aria-hidden="true"></i></a>' +
        '</li>' +
        '</ul>' +

        '</div>' +
        '</nav>';
}
