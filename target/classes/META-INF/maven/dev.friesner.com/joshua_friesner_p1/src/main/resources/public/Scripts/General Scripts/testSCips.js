


window.addEventListener('load', function () {
    // alert("It's loaded!")
  })


const userName = "Josh"
const userType = "Associate"


const FMNav =` <nav class="navbar navbar-expand-lg bg-dark">
<div class="container-fluid">
  <a class="navbar-brand" href="#" style="color:lightcoral">Welcome Finance Manager</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <!-- <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#" style="color:lightcoral">Home</a>
      </li> -->
      <li class="nav-item">
        <li><a class="dropdown-item" href="./FMCreateEmployee.html" style="color:lightcoral">Create Employee</a></li>
      </li>
      <li class="nav-item">
        <li><a class="dropdown-item" href="./FMCreateEmployee.html" style="color:lightcoral">${userName}</a></li>
      </li>
    </ul>
    <form class="d-flex" role="login">
    <button class="btn btn-outline-success" type="submit" onclick="logout()">Log Out</button>
    </form>
    </div>
    </div>
    </nav>`


let homePageEE = "../../LoggedInEE.html"
    
const EENav =` <nav class="navbar navbar-expand-lg bg-dark">
<div class="container-fluid">
  <a class="navbar-brand" href="#" style="color:lightcoral">Welcome Regular Employee ${userName}</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href=${homePageEE} style="color:lightcoral">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#" style="color:lightcoral">Option 1</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#" style="color:lightcoral">Option 2</a>
      </li>
     
     
    </ul>
    <form class="d-flex" role="login">
      <button class="btn btn-outline-success" type="submit" onclick="logout()">Log Out</button>
    </form>
    </div>
    </div>
    </nav>`

  //   <li class="nav-item">
  //   <li><a class="dropdown-item" href="./FMCreateEmployee.html" style="color:lightcoral"></a></li>
  // </li>

    // <input class="form-control me-2" type="password" placeholder="Password" aria-label="Login">
    // <input class="form-control me-2" type="username" placeholder="UserName" aria-label="Login">
async function setErrUp(divToAttachTo,userRole){
  // MouseEvent.arguments
    setupNav(divToAttachTo,userRole);
}

function setupNav(divToAttachTo,userRole){

  let topDiv = document.getElementById(divToAttachTo)
  
  let navCont = document.createElement("div");
  navCont.id="navCont";

  console.log(userRole)


  if(userRole == "Associate"){

    let myElements = EENav;
    navCont.innerHTML = myElements

  }else{

    let myElements = FMNav;
    navCont.innerHTML = myElements

  }

  topDiv.append(navCont);
  

}

const mainBody = document.body;

const mainDiv = document.getElementById("main")


async function setErrUpTest(){
  // MouseEvent.arguments
    setupNav("ForTheNav","Associate");
    // setupNav(mainDiv,"Associate");
}

// function setupNav(divToAttachTo,userRole){

//   let topDiv = document.getElementById(divToAttachTo)
  
//   let navCont = document.createElement("div");
//   navCont.id="navCont";

//   console.log(userRole)


//   if(userRole == "Associate"){

//     let myElements = EENav;
//     navCont.innerHTML = myElements

//   }else{

//     let myElements = FMNav;
//     navCont.innerHTML = myElements

//   }

//   topDiv.append(navCont);
  

// }