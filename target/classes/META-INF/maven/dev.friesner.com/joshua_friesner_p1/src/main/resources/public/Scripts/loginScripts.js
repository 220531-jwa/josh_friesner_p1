
let baseURL = "http://localhost:8082/"
// let baseURL = "http://localhost:8082/public/LoginPage/"

async function logUserIn(){
    let uName = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    
    console.log("Here is uname " + uName);
    console.log("here is pass " + pass);
    
    //create an object literal
    if(uName && pass){
    
        let user ={
            username:uName,
            passwrd:pass
        }

        userJson = JSON.stringify(user);
        sendCredentialstoServer(userJson);

    
    }else{

        let errDiv = document.getElementById("loginerror");
        let errMsg = document.getElementById("loginAlert");
        errDiv.setAttribute("style","style:auto");
        errDiv.setAttribute("style","padding-top:10px");

        errMsg.innerText = "Please enter values above."
    }
}

async function sendCredentialstoServer(user){

    let response = await fetch(baseURL + "login",{
        method:'Post',
        header:{'Content-Type': 'application/json'},
        // header:{'cors':'no-cors'},
        body:user
        
    });

    if (response.status === 200) {
    
        let data = await response.json();
        let dataStrng = JSON.stringify(data)
        console.log(data);
        console.log("You logged in!")

        sessionStorage.setItem("user",dataStrng);

        if(data.role== "Associate"){
            // sessionStorage.setItem("user",JSON.stringify(data))
            let assinger = baseURL+ "LoggedInEE.html";
            console.log("ran here")
            window.location.assign(assinger);

        }else if(data.role =="FINANCEMANAGER"){
            // sessionStorage.setItem("user",JSON.stringify(data))
            let assinger = baseURL +"LoggedInFM.html";
            window.location.assign(assinger);
        }
        
        // successLogin(data,response);
        
    } else {

        console.log("There was no data")
        /*
            Handle error
        */
    }


}