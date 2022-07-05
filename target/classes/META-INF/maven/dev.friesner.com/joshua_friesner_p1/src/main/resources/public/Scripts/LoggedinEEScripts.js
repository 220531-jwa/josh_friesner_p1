

function setupEE(){

    user = sessionStorage.getItem("user");
    user = JSON.parse(user)
    console.log(user);

    let userHdr = document.getElementById("eehdr");

    userHdr.innerText = "Welcome " + user.first_name + " " + user.last_name


    // ADD Image for Employee
    let picTestdiv = document.getElementById("imageTest");




    var bytes = new Uint8Array(user.employee_pic); // pass your byte response to this constructor
    var blob=new Blob([bytes], {type: "application/jpg"});// change resultByte to bytes
    
    let imgCreate = document.createElement("img");
    // imgCreate.src = window.URL.createObjectURL(blob);

    console.log()
    imgCreate.src = window.URL.createObjectURL(user.employee_pic.name)
    
    
    var link=document.createElement('a');
    link.href=window.URL.createObjectURL(blob);
    // link.download="myFileName.pdf";
    // link.click();
    picTestdiv.append(link);
    picTestdiv.append(imgCreate);

    


}


function base64ToArrayBuffer(base64) {
    var binaryString = window.atob(base64);
    var binaryLen = binaryString.length;
    var bytes = new Uint8Array(binaryLen);
    for (var i = 0; i < binaryLen; i++) {
       var ascii = binaryString.charCodeAt(i);
       bytes[i] = ascii;
    }
    return bytes;
 }