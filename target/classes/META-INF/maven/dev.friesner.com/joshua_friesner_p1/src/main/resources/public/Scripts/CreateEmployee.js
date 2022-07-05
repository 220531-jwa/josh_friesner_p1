
let baseURL = "http://localhost:8082/"

var blobUltra = "";
var eePicArry ="";
var opt ="";


function test(){

}
async function createEmployee(){

    let eeFname = document.getElementById("eefname");
    let eeLname = document.getElementById("eelname");
    let email = document.getElementById("eeemail");
    let phone = document.getElementById("eephone");
    let address = document.getElementById("eeAddress");
    let city = document.getElementById("eeCity");
    let state = document.getElementById("eeState");
    let zip = document.getElementById("eeZip");
    let username = document.getElementById("eeUserName");
    let passwrd = document.getElementById("eePass");
    let roles = document.getElementById("idSelect");
    let financeMngrId = document.getElementById("financeMngrIdSelect");

    let role = roles.options[roles.selectedIndex].value;
    let fnMngrID = financeMngrId.options[financeMngrId.selectedIndex].value;

    let eePic = document.getElementById("eePicInput").files[0];
    let eePicArray = fileToByteArray(eePic);
    console.log(eePicArray)
    // var reader = new FileReader();
    // var fileByteArray = [];
    
    // reader.readAsArrayBuffer(eePic);
   
    // reader.onloadend = function (evt) {
    //     if (evt.target.readyState == FileReader.DONE) {
    //         var arrayBuffer = evt.target.result,
    //         array = new Uint8Array(arrayBuffer);
    //         for (var i = 0; i < array.length; i++) {
    //             fileByteArray.push(array[i]);
    //         }
    //     }
    // }
    
    
    // let eePicPath = new File
    // eePicPath.stream(eePic)
    let formData = new FormData();
    let frmDataPic = formData.append("employee_pic", eePic);
    formData.set("employee_pic",eePic,eePic.name)
// fetch('/upload/image', {method: "POST", body: formData});

    if(role == "Associate"){

            // role = 1;
        let User = {
            id:0,
            first_name:eeFname.value,
            last_name:eeLname.value, 
            email:email.value,
            phone:phone.value, 
            dob:null,
            address:address.value,
            city:city.value,
            state:state.value,
            zip:zip.value,
            username:username.value,
            passwrd:passwrd.value,
            role:role,
            financeMngrId:fnMngrID,
            reimbursement_amount : 1000.00,
            // employee_pic: formData
            // employee_pic : eePicArray
            // employee_pic:fileByteArray
            // employee_pic:eePic
            employee_pic:formData

        }

        
        console.log(User)
    
        User=JSON.stringify(User)
        // console.log("here is user stringified")
        // console.log("button pressed")
    
        sendNewUserToBeCreated(User);
    }
    // var value = select.options[select.selectedIndex].value;


}



async function convertEEPic(){


    let what = 2
    let eePic = document.getElementById("eePicInput").files[0];
    opt =what;
    if(what == 1){

        const obj = {hello: 'world'};
        const blob = new Blob([JSON.stringify(eePic, null, 2)], {type : '.jpg'});
        blobUltra = blob;
        console.log(blob)
    
    
        
    }else if(what == 2){
        let eePicArray = fileToByteArray(eePic)
        eePicArray.then(value =>{
            console.log(value)
            eePicArry = value;
        });


        // console.log(eePicArray.then({

        // }))
    }else if(what == 3){
        var reader = new FileReader();
        var fileByteArray = [];
        
        reader.readAsArrayBuffer(eePic);
       
        reader.onloadend = function (evt) {
            if (evt.target.readyState == FileReader.DONE) {
                var arrayBuffer = evt.target.result,
                array = new Uint8Array(arrayBuffer);
                for (var i = 0; i < array.length; i++) {
                    fileByteArray.push(array[i]);
                }
                console.log("reading i where i = " + i)
                console.log(fileByteArray)
                let newFileByteArray  = JSON.stringify(fileByteArray);
                console.log(newFileByteArray)
            }
        }
    }
    
    


    return fileByteArray;
}






function typedArrayToURL(typedArray, mimeType) {
    return URL.createObjectURL(new Blob([typedArray.buffer], {type: mimeType}))
  }

function writeEePicToURL(){
    console.log(blobUltra)
    console.log(eePicArry)


    if(opt == 2){
        const bytes = new Uint8Array(59);
        for(let i = 0; i < 59; i++) {
            bytes[i] = 32 + i;
          }

          const url = typedArrayToURL(bytes, 'text/plain');
          const link = document.createElement('a');
          const imgt = document.createElement('img');

          link.href = url;
          link.innerText = 'Open the array URL';
            let tester= document.getElementById("whoknows");
          //  document.body.appendChild(link);
           tester.append(link);
      
           const text = await (new Response(blob));
           imgt.src = text;
           tester.append(imgt);
    }else{

        // URL.createObjectURL(new Blob([blobUltra.buffer], {type: 'mimeType'}))
        const bytes = new Uint8Array(59);
        for(let i = 0; i < 59; i++) {
            bytes[i] = 32 + i;
          }
    
         
        const url = typedArrayToURL(bytes, 'text/plain');
        const link = document.createElement('a');
        const imgt = document.createElement('img');
    
        
        link.href = url;
        link.innerText = 'Open the array URL';
          let tester= document.getElementById("whoknows");
        //  document.body.appendChild(link);
         tester.append(link);
    
         const text = await (new Response(blob));
         imgt.src = text;
         tester.append(imgt);
    }



     
      
    //   const bytes = new Uint8Array(59);
      
    //   for(let i = 0; i < 59; i++) {
    //     bytes[i] = 32 + i;
    //   }
      
    //   const url = typedArrayToURL(bytes, 'text/plain');
      
    //   const link = document.createElement('a');
    //   link.href = url;
    //   link.innerText = 'Open the array URL';
      
    //   document.body.appendChild(link);
      
}
// function typedArrayToURL(typedArray, mimeType) {
//     return URL.createObjectURL(new Blob([typedArray.buffer], {type: mimeType}))
//   }
  
  
  
//   for(let i = 0; i < 59; i++) {
//     bytes[i] = 32 + i;
//   }

  
  


function fileToByteArray(file) {
    return new Promise((resolve, reject) => {
        try {
            let reader = new FileReader();
            let fileByteArray = [];
            reader.readAsArrayBuffer(file);
            reader.onloadend = (evt) => {
                if (evt.target.readyState == FileReader.DONE) {
                    let arrayBuffer = evt.target.result,
                        array = new Uint8Array(arrayBuffer);
                    for (byte of array) {
                        fileByteArray.push(byte);
                    }
                }
                resolve(fileByteArray);
            }
        }
        catch (e) {
            reject(e);
        } 
    })
}

async function sendNewUserToBeCreated(user){


    fetch(baseURL + "users",{
        method:'POST',
        header:{'Content-Type': 'application/json'},
        body:user
        
    }).then((response) => {

        if (response.status >= 200 && response.status <= 299) {

            return response.json;
            // let data = await response.json;
            // let newData = JSON.parse(data);
            // console.log(newData);
            // successLogin(data,response);
            
        }else if(response.status >= 400 && response.status <=499){
            // console.log("i entered 404")
            if(response.status ==406){

                // console.log("Please choose a different user name.")

                let incorDiv = document.getElementById("unameincor");
                let incorP = document.getElementById("betterUN");
                if(incorDiv.classList.toggle("userNameincorOff")){

                    incorDiv.classList.remove("userNameincorOff")
                    incorDiv.classList.toggle("userNameincorOn")
                }else{
                    incorDiv.classList.toggle("userNameincorOn")
                }
                
                incorP.innerText = "Please choose a different user name."
            }


        } else{
            // console.log("i entered the else")
            throw Error(response.statusText);
        }
        
        
        // Always gets a response, unless there is network error
        // It never throws an error for 4xx or 5xx response 😟
      }).then((jsonResponse)=>{
        // jsonResponse.
        let data = JSON.stringify(jsonResponse);

        // console.log("Here is the response" + data);

      }).catch((error) => {
        // Only network error comes here
            // error.statusText
            // if(response.status ==406){
            //     console.log("entered error in catch 406")
                console.log(error);
            // }else{
            //     console.log("i entered else in catch")
            // }
            
      });








    //   // ////////OLD CODE \\\\\\



    // try{
    //     let response = await fetch(baseURL + "users",{
    //     method:'POST',
    //     header:{'Content-Type': 'application/json'},
    //     // header:{'Origin': 'http://localhost:8082/'},
    //     // header:{'cors':'no-cors'},
    //     body:user
        
    // });
    
    //     console.log(response.status)

    //     if (response.status === 200) {
        
    //         let data = await response.json;
    //         let newData = JSON.parse(data);
    //         console.log(newData);
    //         // successLogin(data,response);
            
    //     } else if(response.status === 404){
    //         let data = await response.json;
    //         console.log(data);
    //         console.log("There was no data")
    //         /*
    //             Handle error
    //         */
    //     }
    // }catch(errHndlr){
    //     console.error(errHndlr)
    // }



}


function checkPics(event){
    
    let topPicPrev = document.getElementById("eePicPreviewTop");

    let eePicPreviewDiv = document.getElementById("picPreviewDiv");
    let eePic = document.getElementById("eePicInput").files[0];
    // let picField = document.getElementById("theEEPicPreview");
    let eeImg = document.getElementById("somePic")
    let eePicInfo = document.getElementById("eePicInfo");

    console.log("below is eepic")
    console.log(eePic);


   

    if(eePic){

        let oneFile = eePic;
        let newURL = URL.createObjectURL(oneFile)

        let myImgEl = document.createElement("img")
        myImgEl.id ="somePic"
        myImgEl.src= newURL;
        myImgEl.setAttribute("href",newURL);
        myImgEl.setAttribute("alt",eePic.name);
        eePicPreviewDiv.append(myImgEl)
        // eeImg.src = newURL;
        // eeImg.setAttribute("href",newURL)
        eePicInfo.innerText = eePic.name

        if(topPicPrev.classList.toggle("eePicPreviewOff")){

            topPicPrev.classList.remove("eePicPreviewOff");
        }
        topPicPrev.classList.toggle("eePicPreviewOn");

        // eeImg.setAttribute("alt",eePic.name)

    }

    // let imageFile = new File(eePic.files[1],eePic.innerText);

    // let imageName = eePic.name
    // console.log(imageName);
    // eeImg.src=eePic.name;
    // picField.src = eePic;
    
    console.log("I ran check pics.")


    // var src = URL.createObjectURL(eePic);
    // var preview = document.getElementById("theEEPicPreview");
    // preview.src = eePic;
    // preview.style.display = "block";
    // eePicPreviewDiv.appendChild(preview)
    
    // if(eePic.count = 1){
    //     let eePic = document.createElement("a");
    //     eePic.id = "eePicPreviewA"
    //     eePic.href = eePic.pathname;
    //     eePicPreviewDiv.append(eePic)

    // }else{
    //     console.log("I ran and found none")
    // }

}

function test(){

    let butt = document.getElementById("testbutt");
    console.log(butt.innerText)
    let buttVal = butt.innerText

    if(buttVal === "Button on"){

        console.log("button on")
        sessionStorage.clear();
        butt.innerText = "Button off"
        

    }else{
        butt.innerText = "Button on"
        console.log("button off")
        sessionStorage.setItem("user","Iam a user")

    }
}