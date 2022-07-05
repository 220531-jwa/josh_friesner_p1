
let baseURLDos = "http://localhost:8082/"


var viewReqsOpen = false;
var createReqsOpen = false;
var viewAssociateReqs = false;
var viewAllAssociateReqs = false;

var modalEventShowing = false;

var updateOn = false;

var user = JSON.parse(sessionStorage.getItem("user"))

var allUserRequests = [];
var TheUserRequets = [];
var allEEReqs=[];

var ALLTHEREQUESTS =[]
var allAsignedReqsArr = [];

let OpenFormDivId = "";


// document.getElementById("eventNamePen").addEventListener("click", testPenAgain("eventNamePen"));
document.getElementById("eventNamePen").addEventListener("click", testPenAgain(event.target));


// var user = {
//     id,
//     first_name,
//     last_name,
//     email,
//     phone,
//     dob,
//     address,
//     city,
//     state,
//     zip,
//     //login
//     username, // make sure this is a unique field
//     passwrd,
//     role,
//     financeMngrId,
//     //reimbursements
//     reimbursement_amount,
//     //	private byte[] employee_pic,
//     //	private File[] employee_pic,
//     employee_pic,
// }



// async function updateUserVar(incomingUser){

//     Object.keys(incomingUser).forEach((key, index) => {
//         user[key] = incomingUser[key];
//       });

// }


var reqEvent = {
        eventName:null,
        eventDate:null,
        eventTime:null,
        eventLocation:null,
        eventDescription:null,
        eventTotalCost:null,
        eventGradingFormat:null,
        workRelatedJustification:null,
        eventType:null,
        eventReimburesmentPerc:null,
        instructor:null
}

async function updateEvent(incomingEvent){

    Object.keys(incomingEvent).forEach((key, index) => {
        reqEvent[key] = incomingEvent[key];
      });

}

var reqVar = {
    reqId:null,
    reqForID:null,
    reqStatus:null,
    assignedFinanceMngrId:null,
    requestedDate:null,
    notes:null,
    presentation:null,
    certUpLoad:null,
    lastUpdatedById:null,
    lastupdatedDate:null,
    event:reqEvent,
    amounttobereimbursed:null,
    
}

async function updatereqVar(incomingEvent){
    console.log("ran here")
    Object.keys(incomingEvent).forEach((key, index) => {
        reqVar[key] = incomingEvent[key];
      });

}




function testMe(){

    let i = 3
    if(i==1){
        console.log(allUserRequests)
        let inTest = document.getElementById("testin").value;
    
        let req = allUserRequests[inTest]
    
    
        for (var key in req) {
    
            
            if (reqVar.hasOwnProperty(key)) {
                reqVar[key] = req[key];
            }
        }
    
        // console.log(reqVar);

    }else if(i==2){


        let testDate = document.getElementById("testCal").value
        let testTime = document.getElementById("testTime").value

        let testCalPlacer = document.getElementById("testCalPlacer");
        let testTimePlacer=document.getElementById("testTimePlacer")

        // console.log("I am testDate " + testDate);
        // console.log("I am test Time " + testTime);
// 

        let newDater = new Date();
        newDater.setDate(newDater.getDate(testDate));
        let hmmDate = newDater.getDate()+36
        // console.log(newDater)

        testTime = testTime + ":00"

        let togetherDate = testDate + " " + testTime

        let newDate = new Date()
        // console.log(togetherDate)
      

        // console.log(newDate.getTime())
        // console.log(newTime)


        let dateInput = document.getElementById("dateInput").value;
        let timeInpt = document.getElementById("timeInpt").value;
        
        // alterDateIncoming(testDate,testTime)
        let mythings = alterDateIncoming(testDate, testTime);
        console.log(mythings)

        testCalPlacer.value=mythings[0]
        testTimePlacer.value=mythings[1]

    }else if(i==3){

        let test_date= document.getElementById("testCal")
        let test_val = test_date.value
        console.log(test_val)

        let date = new Date(1656741600000)
        console.log(date);
        console.log(date.toISOString())
        let dateISO = date.toISOString();
        let dateString = dateISO.toString();

        let [breakDate, breakTime] = dateString.split("T",1)
        console.log(breakDate);
        let dateArray = breakDate.split("/",2);
        console.log(dateArray);

        let test_calinpt = document.getElementById("testCalPlacer");
        test_calinpt.value = breakDate;
    }
}



function setupModal (incomingReq){


    // let modalButton = document.createElement("button")

    let testDive = document.getElementById("testDiv");
    
    // let divToRemove = document.createElement("div")
    // divToRemove.className = "container"
    // divToRemove.id="modalShell"

    testDive.innerHTML=""

  let ModalElement = (   `
  <div id="divtoRemove" class="container">
  
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title ${reqEvent.eventName}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

            <div class="row">

                <div id="reqTypeDDiv"class="col-6 col-sm-6>
                    <label>Event Name</label>
                </div>
                <div id="reqTypeDDiv"class="col-6 col-sm-6>
                    <label>${reqEvent.eventType}</label>
                </div>



            </div>
            ...
            </div>
            <div class="modal-footer">
            <button onclick="modalTearDown()">Test</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
        </div>
    </div>
    </div>`);

    // divToRemove.innerHTML=ModalElement


    testDive.innerHTML = ModalElement


}


function formatDateOutgoing(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + (d.getDate() + 4),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}


function formatDateInComing(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + (d.getDate() + 2),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}


async function setupModalAgain (){

    let i =3
    if(i == 1){

        modalTearDown();
    }else if(i == 3){




        modalTearDown(i);

        console.log(reqVar)
        console.log(reqEvent)


        let newFormDiv = document.getElementById("newFormDiv");
        let viewAssociateRequestTop = document.getElementById("viewAssociateRequestTop");

        // console.log(reqEvent)

        /////////// EVENT NAME \\\\\\\\\\\\\
        // document.getElementById("eventNameLbl").innerText = reqEvent.eventName

        document.getElementById("eventNameInpt").value = reqEvent.eventName


        document.getElementById("amounttobereimbursedInpt").value = reqVar.amounttobereimbursed;


        /////////// EVENT DATE \\\\\\\\\\\\\
        
        // let duhDate = reqEvent.eventDate;
        // let duhTime = reqEvent.eventTime;


        // let newDate = new Date(reqEvent.eventDate);

        // let new_date = alterDateAgain(reqEvent.eventDate);
        // console.log(new_date)

        // let day = newDate.getDay();
        // let year = newDate.getFullYear();
        // let mnth = newDate.getMonth();

        // console.log(newDate.toString());
        // console.log("here is day from new date" + day.toString())
        // console.log("here is year from new date" + year.toString())
        // console.log("here is mnth from new date" + mnth.toString())



        let comeOnDate = formatDateInComing(reqEvent.eventDate)

        let newDATERADE = comeOnDate.split("-")
        let newDay = newDATERADE[2]
        let newYear = newDATERADE[0]
        let newMonth = newDATERADE[1]

        let newDATERADER = [newMonth, newDay, newYear].join('/')
        // newDATERADER.replace("-","/")
         

        let evDateLbl = document.getElementById("eventDateLbl");
        let evDateInpt = document.getElementById("eventDateInpt");

        let date = new Date(reqEvent.eventDate)
        let dateISO = date.toISOString();
        let dateString = dateISO.toString();

        let [breakDate, breakTime] = dateString.split("T",1)
        let dateArray = breakDate.split("/",2);
        // console.log(dateArray);

        // let test_calinpt = document.getElementById("testCalPlacer");
        // test_calinpt.value = breakDate;
        



        // evDateLbl.innerText = breakDate;
        evDateInpt.value = breakDate;



        /////////// EVENT TIME \\\\\\\\\\\\\

        // let evTimeLbl = document.getElementById("eventTimeLbl")
        // let evTimeInptdos = document.getElementById("timeInptdos")
        let evTimeInpt = document.getElementById("eventTimeInpt")


        // evTimeLbl.innerText = reqEvent.eventTime
        // let evntTimeDate = new Date(reqEvent.eventTime)
      
        // let timeISO = evntTimeDate.toISOString();
        // let timeString = timeISO.toString();
        // console.log(timeString)
        // let [breakDatedos, breakTimedos] = dateString.split("T",1)
        // let timeArray = breakTimedos.split(":",2);
        // console.log(timeArray)






        evTimeInpt.value = reqEvent.eventTime



        // if(reqEvent.eventTime){

        //     let optsofTime = evTimeInpt.getElementsByTagName("option")
        //     let optsTimeLength = optsofTime.length;
        //     let optStrng = "";
    
        //     for(let y = 0; y < optsTimeLength; y++){
        //         let newopt = optsofTime[y];
        //         let newOptVAl = newopt.value;
 
    
        //         if(newOptVAl == reqEvent.eventTime){
        //             optsofTime[y].selected = true;
        //             optStrng = evTimeInpt.value;

        //         }
    
                
    
        //     }

        //     evTimeLbl.innerText = optStrng;

        // }else{

        //     evTimeLbl.innerText = "????"
        //     optsofTime[0].selected = true;
            

        // }


        /////////// EVENT Location \\\\\\\\\\\\\

        // let evLocationLbl = document.getElementById("eventLocationLbl")
        let evLocationInpt = document.getElementById("eventLocationInpt")

        if(reqEvent.eventLocation){

            // evLocationLbl.innerText = reqEvent.eventLocation
            evLocationInpt.value = reqEvent.eventLocation

        }else{

        }
        


        /////////// EVENT DESCRIPTION \\\\\\\\\\\\\
        
        // let evDescriptLbl = document.getElementById("eventDescriptionLbl")
        let evDescriptInpt = document.getElementById("eventDescriptionInpt")

        if(reqEvent.eventDescription){

            // evDescriptLbl.innerText = reqEvent.eventLocation
            evDescriptInpt.value = reqEvent.eventDescription

        }else{

            // evDescriptLbl.innerText = "????"
            evDescriptInpt.value = "unknown"

        }


        /////////// EVENT COST \\\\\\\\\\\\\
        // let eventTotalCostLbl = document.getElementById("eventTotalCostLbl")
        let eventTotalCostInpt = document.getElementById("eventTotalCostInpt")

        if(reqEvent.eventTotalCost){

            // eventTotalCostLbl.innerText = reqEvent.eventTotalCost
            evDescriptInpt.value = reqEvent.eventTotalCost

        }else{

            // eventTotalCostLbl.innerText = "????"
            eventTotalCostInpt.value = "unknown"

        }




        /////////// EVENT GRADING \\\\\\\\\\\\\
        // let eventGradingLbl = document.getElementById("eventGradingFormatLbl")
        let eventGradingInpt = document.getElementById("eventGradingFormatInpt")
        if(reqEvent.eventGradingFormat){

            let optsofGrade = eventGradingInpt.getElementsByTagName("option")
            let optsGradeLength = optsofGrade.length;
            let optStrng = "";
    
            for(let y = 0; y < optsGradeLength; y++){
                let newopt = optsofGrade[y];
                let newOptVAl = newopt.value;
                
    
                if(newOptVAl == reqEvent.eventGradingFormat){
                    optsofGrade[y].selected = true;
                    optStrng = eventGradingInpt.value;
                }
    
                
    
            }

            // eventGradingLbl.innerText = optStrng;

        }else{

            // eventGradingLbl.innerText = "????"
            optsofGrade[0].selected = true;
            

        }

        /////////// EVENT WORK JUSTIFICATION \\\\\\\\\\\\\
        // let workRelatedJustificationLbl = document.getElementById("workRelatedJustificationLbl")
        let workRelatedJustificationInpt = document.getElementById("workRelatedJustificationInpt")

        if(reqEvent.workRelatedJustification){

            // workRelatedJustificationLbl.innerText = reqEvent.workRelatedJustification
            workRelatedJustificationInpt.value = reqEvent.workRelatedJustification

        }else{

            // workRelatedJustificationLbl.innerText = "????"
            workRelatedJustificationInpt.value = "unknown"

        }














        /////////// EVENT TYPE \\\\\\\\\\\\\
        // let eventSelLbl = document.getElementById("eventTypeLbl")
        let eventSelInpt = document.getElementById("eventTypeInpt")

        if(reqEvent.eventType){

            let optsofType = eventSelInpt.getElementsByTagName("option")
            let optsLength = optsofType.length;
            let optStrng = "";
    
            for(let y = 0; y < optsLength; y++){
                let newopt = optsofType[y];
                let newOptVAl = newopt.value;
                
    
                if(newOptVAl == reqEvent.eventType){
                    optsofType[y].selected = true;
                    // optStrng = eventSelInpt.value;
                    
                }

                // eventSelLbl.innerText = optStrng
    
                
    
            }
    
            for(opt of optsofType){
                
            }
            
            // eventSel.options[reqEvent.eventType];
            
            // let gradeSel = gradeSelect.options[gradeSelect.selectedIndex].value;
            
    

        }else{

            eventSelLbl.innerText = "????"
            eventSelInpt[0].selected

        }




        // let eventReimburesmentPercLbl = document.getElementById("eventReimburesmentPercLbl")
        let eventReimburesmentPercInpt = document.getElementById("eventReimburesmentPercInpt")

        if(reqEvent.eventReimburesmentPerc){
            // eventReimburesmentPercLbl = reqEvent.eventReimburesmentPerc;
            eventReimburesmentPercInpt.value = reqEvent.eventReimburesmentPerc;
        }else{

            // eventReimburesmentPercLbl.innerText = "unknown"
            eventReimburesmentPercInpt.value = "unkown"
            
        }




        /////////// EVENT INSTRUCTOR \\\\\\\\\\\\\
        // document.getElementById("instructorLbl").innerText = reqEvent.instructor
        document.getElementById("instructorInpt").innerText = reqEvent.instructor

        // let instructLbl = document.getElementById("instructorLbl")
        let instrucInpt = document.getElementById("instructorInpt")

        if(reqEvent.instructor){
            // instructLbl = reqEvent.instructor;
            instrucInpt.value = reqEvent.instructor;
        }else{

            // instructLbl.innerText = "unknown"
            instrucInpt.value = "unkown"
            
        }



        newFormDiv.classList.toggle("off");
        // viewAssociateRequestTop.style.display="none";
        viewAssociateRequestTop.classList.toggle("off")





        // let evNameTitle = document.getElementById("eventNametitle");
        // evNameTitle.innerText = reqEvent.eventName;


        // let theTypeLbl = document.getElementById("evType");
        // theTypeLbl.innerText = reqEvent.eventType;


//      *******************************************************************************************

    //     let modalBody = document.createElement("modalBody");

    //     let wrapperDiv = document.createElement("div");
    //     wrapperDiv.id = "modalWrapper";


    //     // EVENT TYPE

    //     let row1div = document.createElement("div")
    //     row1div.className = "row"


    //     let typeCol1 = document.createElement("div")
    //     typeCol1.className="col-6 col-sm-6";

    //     let typeCol2 = document.createElement("div")
    //     typeCol2.className="col-6 col-sm-6";


    //    let evTypeLbl1 = document.createElement("label");
    //     evTypeLbl1.innerText="Event Type:"

    //     let evTypeLbl2 = document.createElement("label");
    //     evType = reqEvent.eventType;
    //     evTypeLbl2.innerText=evType;


    //     typeCol1.append(evTypeLbl1)
    //     typeCol2.append(evTypeLbl2);

    //     row1div.append(typeCol1);
    //     row1div.append(typeCol2);

    //     wrapperDiv.append(row1div);
    //     modalBody.append(wrapperDiv);


//      *******************************************************************************************

        

    } else{

        modalTearDown();
        // console.log("I am setup Modal Again incoming event")
        // console.log(incomingEvent)
        // console.log("I am setup Modal Again reqEvent")
        // console.log(reqEvent)
    // 
        // let modalButton = document.createElement("button")
    
        let testDive = document.getElementById("testDiv");
        // let MyEvent = Event
        // let divToRemove = document.createElement("div")
        // divToRemove.className = "container"
        // divToRemove.id="modalShell"
    
        // let name = newEvnt.eventName;
    
        testDive.innerHTML= ""
    
      let ModalElement = (   `
      <div id="divtoRemove" class="container">
      
        <div class="modal fade" id="exampleModalTWO" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h1>Poo Balls</h1>
                <h5 class="modal-title" id="exampleModalLabel">Modal title ${reqEvent.eventName}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
    
                <div class="row">
    
                    <div id="reqTypeDDiv" class="col-6 col-sm-6">
                        <label>Event Type</label>
                    </div>
                    <div id="reqTypeDDiv" class="col-6 col-sm-6">
                        <label>${reqEvent.eventName}</label>
                    </div>
    
    
    
                </div>
                ...
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="modalTearDown()">test</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
            </div>
        </div>
        </div>`);


        // `<!-- Trigger/Open The Modal -->
        // //     <button id="myBtn">Open Modal</button>

        // //     <!-- The Modal -->

        var MyRealModal = `<div id="myModal" class="modal">

            <!-- Modal content -->
            <div class="modal-content">
                <span class="close">&times;</span>
                <p>Some text in the Modal..</p>
            </div>

            </div>`
    
     
        render(ModalElement,testDive)
  
        
    }

    


}



async function editModalFields(){

    newFormDiv = document.getElementById("upDateForm");

    let inputClasses = newFormDiv.getElementsByTagName("input");
    let selectClasses = newFormDiv.getElementsByTagName("select");

    console.log(inputClasses.length)


    if(updateOn==false){

        for(w=0 ; w < inputClasses.length; w++){
    
            let daInpt = inputClasses[w]
    
            daInpt.removeAttribute("disabled")
        }
    
    
        
        for(w=0 ; w < selectClasses.length; w++){
    
            let daInpt = selectClasses[w]
    
            daInpt.removeAttribute("disabled")
        }

        updateOn=true;
    
        console.log("ran edit modal")
    }else{


 

            for(w=0 ; w < inputClasses.length; w++){
        
                let daInpt = inputClasses[w]
        
                daInpt.setAttribute("disabled","disabled")
            }
        
        
            
            for(w=0 ; w < selectClasses.length; w++){
        
                let daInpt = selectClasses[w]
        
                daInpt.setAttribute("disabled","disabled")
            }

            updateOn=false;
        
            console.log("ran edit modal")



    }


}



async function SaveModalandSendForUpdate(){

    newFormDiv = document.getElementById("upDateForm");

    let inputClasses = newFormDiv.getElementsByTagName("input");
    let selectClasses = newFormDiv.getElementsByTagName("select");

    console.log(inputClasses.length)


    if(updateOn==false){

        for(w=0 ; w < inputClasses.length; w++){
    
            let daInpt = inputClasses[w]
    
            daInpt.removeAttribute("disabled")
        }
    
    
        
        for(w=0 ; w < selectClasses.length; w++){
    
            let daInpt = selectClasses[w]
    
            daInpt.removeAttribute("disabled")
        }

        updateOn=true;
    
        console.log("ran edit modal")
    }else{


 

            for(w=0 ; w < inputClasses.length; w++){
        
                let daInpt = inputClasses[w]
        
                daInpt.setAttribute("disabled","disabled")
            }
        
        
            
            for(w=0 ; w < selectClasses.length; w++){
        
                let daInpt = selectClasses[w]
        
                daInpt.setAttribute("disabled","disabled")
            }

            updateOn=false;
        
            console.log("ran edit modal")



    }


}




function modalTearDown(i){

    let modalBody = document.getElementById("modalBody");
    let testDive = document.getElementById("testDiv");
    let divtoRemove = document.getElementById("divtoRemove")

    let wrapperDiv = document.getElementById("modalWrapper");

    if(i == 3){

    }
    
    
}



function setupEE(){
    w=1
    if(w=2){
        let someUSer = {
                "id": 137,
                "first_name": "Fin",
                "last_name": "Manager",
                "email": "email@email.com",
                "phone": null,
                "dob": null,
                "address": null,
                "city": null,
                "state": null,
                "zip": null,
                "username": "fm1",
                "passwrd": "pass",
                "role": "FINANCEMANAGER",
                "financeMngrId": 1,
                "reimbursement_amount": 1000.0,
                "employee_pic": null
            }

            // updateUser(someUSer)

    }else{

        eeId = document.getElementById("eeid");
        first_name = document.getElementById("first_name");
        last_name = document.getElementById("last_name");
        eeFinMangrID = document.getElementById("eeFinMngrId")
    
        
        eeId.value = user.id;
        first_name.value = user.first_name;
        last_name.value = user.last_name;
        eeFinMangrID.value = user.financeMngrId
    }

}








function alterDateIncoming(dateInput, timeInpt){

    // console.log("////// Entered Alterd Time /////////////////")

    // console.log("I am date input " + dateInput);
    // console.log( "I am time input " + timeInpt);

    // HANDLE THE DATE AND TIME FIELD
    const dateStr = dateInput+ " " + timeInpt;
    // console.log("I am date string" + dateStr)
                        
    // const newString = dateStr.replace("-","/").replace("-","/");
    const newString = dateStr

    // console.log("I am new date string" + newString)



    const [dateRelated, timeRelated] = newString.split(' ');


    const myArray = dateRelated.split("/")

    myArray[0]

    const year = myArray[0];
    const month = myArray[1];
    const day = myArray[2];
    // console.log("year " + year)
    // console.log("month " + month)
    // console.log("day " + day)
    const constMyNewDate = `${month}/${day}/${year}`;


    const myTimeArray = timeRelated.split(":");
    const hourDos = myTimeArray[0];
    const minDos = myTimeArray[1];
    const secDos = myTimeArray[2];

    // timeRelated = timeRelated.replace("-","/");
    // console.log(dateRelated); // 👉️ "06/24/2022"

    // console.log(timeRelated); // 👉️ "09:30:05"

    // console.log(constMyNewDate)

    let myDateArr = [dateRelated,timeRelated]
    

    // console.log("here is my newDate " + constMyNewDate)
    const [monthdos, yeardos, daydos] = constMyNewDate.split('/');
    const [hours, minutes, seconds] = timeRelated.split(':');
    const [hoursdos, minutesdos, secondsdos] = timeRelated.split(':');

    const date2 = new Date(+year, month - 1, +day, +hours, +minutes, +seconds);
    const date3 = new Date(+year, month - 1, +day);
 

    // console.log(date2); // 👉️ Fri Jun 24 2022 09:30:05
    // console.log(date2)
    
    // reqVar
    // reqEvent.eventDate = date2;
    // 👇️ Get timestamp
    const timestamp = date2.getTime();
    const evntDate = date2.getDate();

    // console.log("I am time stamp " + evntDate)

    return myDateArr;

}

// function alterDateAgain(incominDate){
//     // let test_date= document.getElementById("testCal")
//     // let test_val = test_date.value
//     // console.log(test_val)

//     // let date = new Date(1656741600000)
//     let date = new Date(incominDate)
//     console.log(date);
//     console.log(date.toISOString())
//     let dateISO = date.toISOString();
//     let dateString = dateISO.toString();

//     let [breakDate, breakTime] = dateString.split("T",1)
//     console.log(breakDate);
//     let dateArray = breakDate.split("/",2);
//     console.log(dateArray);

//     let test_calinpt = document.getElementById("testCalPlacer");
//     test_calinpt.value = breakDate;
// }

function alterDateOutGoing(dateInput, timeInpt){

    // HANDLE THE DATE AND TIME FIELD
    const dateStr = dateInput+ " " + timeInpt;
                        
    const newString = dateStr.replace("-","/").replace("-","/");
    const [dateRelated, timeRelated] = newString.split(' ');

    // timeRelated = timeRelated.replace("-","/");
    // console.log(dateRelated); // 👉️ "06/24/2022"

    // console.log(timeRelated); // 👉️ "09:30:05"

    const myArray = dateRelated.split("/")

    myArray[0]

    const year = myArray[0];
    const month = myArray[1];
    const day = myArray[2];
    // console.log("year " + year)
    // console.log("month " + month)
    // console.log("day " + day)
    const constMyNewDate = `${month}/${day}/${year}`;

    // console.log("here is my newDate " + constMyNewDate)
    const [monthdos, yeardos, daydos] = constMyNewDate.split('/');
    const [hours, minutes, seconds] = timeRelated.split(':');

    const date2 = new Date(+year, month - 1, +day, +hours, +minutes, +seconds);
    const date3 = new Date(+year, month - 1, +day);
    const date4 =
    // console.log(date2); // 👉️ Fri Jun 24 2022 09:30:05
    // console.log(date2)
    // reqVar
    reqEvent.eventDate = date2;
    // 👇️ Get timestamp
    const timestamp = date2.getTime();
    const evntDate = date2.getDate();

    // console.log("I am time stamp " + evntDate)



}

//GOOD












/// **************************************TOP BUTTON HANDLERS ************************************888

// OPENS AND CLOSES THE VIEW MY REQUEST

// OPENS AND CLOSES THE ADD REQUEST
function viewReqsHandler(){

    
    let viewReqs = document.getElementById("viewRequestTop");

    let createReqs = document.getElementById("addRequestTop");

    let viewAssociateReqDiv = document.getElementById("viewAssociateRequestTop");

    let viewAllDiv = document.getElementById("viewAllRequestTop")

    // var viewReqsOpen = false;
    // var createReqsOpen = false;
    // var viewAssociateReqs = false;

    // var viewAllAssociateReqs = false



    viewReqsOpen=true;
    viewReqs.classList.toggle("off")
    OpenFormDivId = "viewRequestTop"
    // viewReqs.classList.add("on")

    if(createReqsOpen){
        createReqsOpen=false;
        createReqs.classList.toggle("off")
    }

    if(viewAssociateReqs){

        viewAssociateReqs=false;
        viewAssociateReqDiv.classList.toggle("off");
        // viewAssociateReqDiv.style.display = 'none'
        // viewAssociateReqDiv.classList.toggle("on");
    }

    if(viewAllAssociateReqs){

        viewAllAssociateReqs = false
        viewAllDiv.classList.toggle("off")

    }

    
}


function viewAssociateRequests(){

    let viewReqs = document.getElementById("viewRequestTop");

    let createReqs = document.getElementById("addRequestTop");

    let viewAssociateReqDiv = document.getElementById("viewAssociateRequestTop");

    let viewAllDiv = document.getElementById("viewAllRequestTop")


    viewAssociateReqs =true;
    viewAssociateReqDiv.classList.toggle("off")
    OpenFormDivId = "viewAssociateRequestTop"

    // var viewReqsOpen = false;
    // var createReqsOpen = false;
    // var viewAssociateReqs = false;

    // var viewAllAssociateReqs = false

    

    if(viewReqsOpen==true){

        viewReqsOpen=false;
        viewReqs.classList.add("off");
        // viewReqs.classList.add("on")


    }
    if(createReqsOpen){
        createReqsOpen=false;
        createReqs.classList.toggle("off")
    }

    if(viewAllAssociateReqs==true){

        viewAllAssociateReqs = false
        viewAllDiv.classList.toggle("off")

    }



    
    
}


function viewAllAssociateRequests(){

    let viewReqs = document.getElementById("viewRequestTop");

    let createReqs = document.getElementById("addRequestTop");

    let viewAssociateReqDiv = document.getElementById("viewAssociateRequestTop");

    let viewAllAssociateReqsDiv = document.getElementById("viewAllRequestTop");


    // var viewReqsOpen = false;
    // var createReqsOpen = false;
    // var viewAssociateReqs = false;
    // var viewAllAssociateReqs = false;

    // let viewAllDiv = document.getElementById("viewAllRequestTop")


    viewAllAssociateReqs =true;
    viewAllAssociateReqsDiv.classList.toggle("off")
    OpenFormDivId = "viewAllRequestTop"
    

    if(viewReqsOpen){

        viewReqsOpen=false;
        viewReqs.classList.toggle("off")
        // viewReqs.classList.add("on")


    }
    if(createReqsOpen){
        createReqsOpen=false;
        createReqs.classList.toggle("off")
    }

    if(viewAssociateReqs){
        viewAssociateReqs= false;
        viewAssociateReqDiv.classList.toggle("off");
    }

    



    
    
}


function addReqsHandler(){
    
    let createReqs = document.getElementById("addRequestTop");

    
    let viewReqs = document.getElementById("viewRequestTop");

    let viewAssociateReqDiv = document.getElementById("viewAssociateRequestTop");

    let viewAllDiv = document.getElementById("viewAllRequestTop")


    


    // var viewReqsOpen = false;
    // var createReqsOpen = false;
    // var viewAssociateReqs = false;
    // var viewAllAssociateReqs = false;


    createReqsOpen=true;
    createReqs.classList.toggle("off")



    if(viewReqsOpen){
        
        // createReqs.classList.toggle("on")
        viewReqsOpen=false;
        viewReqs.classList.toggle("off")
        


    }
    if(viewAssociateReqs == false){
        
        viewAssociateReqs=false;
        // viewAssociateReqDiv.style.display = 'none'
        viewAssociateReqDiv.classList.toggle("off");
        

    }

    if(viewAllAssociateReqs){

        viewAllAssociateReqs = false
        viewAllDiv.classList.toggle("off")

    }



}












async function removeAllReqhandler(){
    let tableParentDiv = document.getElementById("RequestTableDiv");

}



// THIS GETS THE REQUESTS ALL SET UP
async function allRequestsHandler(){

        w=1


            let userId = user.id;
            console.log(userId)

            let allReqsToFNMngr = await getAllFNMNGRRequest(userId);
            let allAssignedReqs = await getAllReqByFinanceMngrId(userId);
            let allReqs = await getAllRequests()

        if(allReqsToFNMngr){

            for(u = 0; u < allReqsToFNMngr.length; u++){
        
                TheUserRequets.push(allReqsToFNMngr[u]);
        
            }
            console.log("I am all user requests for them")
            console.log(TheUserRequets)
            await showAllUserReqsHandler();
        }


        if(allAssignedReqs){

            for(u = 0; u < allAssignedReqs.length; u++){
        
                allAsignedReqsArr.push(allAssignedReqs[u]);
        
            }
            console.log(allAsignedReqsArr)
        
            await show_AllAsignedRequestsForReviewHandler();
        }

        if(allReqs){

            for(u = 0; u < allReqs.length; u++){
        
                ALLTHEREQUESTS.push(allReqs[u]);
        
            }
            console.log(ALLTHEREQUESTS)
        
            await showAllRequestsHandler();
        }

    // }
    
     
}


//GOOD
async function showAllUserReqsHandler(){

    let reqTbleDiv = document.getElementById("RequestTableDiv");
    let tbl = document.createElement("table");
    let tblHead = document.createElement("thead");
    let tblHdrRow = document.createElement("tr");

    tbl.className="table";


    // OpenFormDivId = "RequestTableDiv";
    
    console.log("I am all user requests from show all user reqs handler")
    console.log(allUserRequests)
    
    //  Appending Table Headers to Table.
    for(reqProp in allUserRequests[0]){
        let tblHdr = document.createElement("th")
        tblHdr.scope = "col"
        tblHdr.innerText = reqProp
        tblHdrRow.append(tblHdr);
    }


        tblHead.append(tblHdrRow);

        let tbleBody = document.createElement("tbody");


        for(x = 0; x<=allUserRequests.length; x++){
            
            let reqRow = document.createElement("tr");
            w = 0;

            for (key in allUserRequests[x]) {
                
                let reqTd = document.createElement("td")
                   

                if(w==4){

                    let date = new Date(allUserRequests[x]["requestedDate"])
                    let dateISO = date.toISOString();
                    let dateString = dateISO.toString();
            
                    let [breakDate, breakTime] = dateString.split("T",1)
                    let dateArray = breakDate.split("/",2);

                    // console.log(dateArray);



                    // let daDate = new Date();

                    // let evdate = allUserRequests[x][key];
                    // evdate = new Date(evDate)
                    // console.log("here is evdate" + evdate)

                    // let testDate = allUserRequests[x]["eventDate"]
                    // let testTime = allUserRequests[x]["eventTime"]
                    
                    // let dateInput = document.getElementById("dateInput").value;
                    // let timeInpt = document.getElementById("timeInpt").value;
                    
                    // alterDateIncoming(testDate,testTime);

                    // daDate.setDate(daDate.getDate(evdate)+36)
                    
                    reqTd.innerText =dateArray[0];
                    reqRow.append(reqTd);

                }else if(w == 10){
                    reqEvent = allUserRequests[x][key];
                    reqEventToMap = allUserRequests[x][key];

                    let eventButt = document.createElement("button");
                        eventButt.type="button"
                        eventButt.className="btn btn-primary"
                        eventButt.setAttribute('data-bs-toggle',"modal")
                        eventButt.setAttribute('data-bs-target',"#exampleModal")
                        eventButt.innerText = "View Event";    
                        
                        let newID = allUserRequests[x]["id"];
                        eventButt.id = x;


                        eventButt.onclick=(e)=>{

                            let idder = document.getElementById(e.target.id)
                            let id = eventButt.id;

                            let req = allUserRequests[id];
                            console.log(req)
                            let reqEv = req.event;
                            updateEvent(reqEv);
                            
                            updatereqVar(req);
                            // setupModal();
                            setupModalAgain();
                            // eventButt.click;
                        
                        }

                    reqTd.append(eventButt);
                    reqRow.append(reqTd);
                
                
                }else{
                    // let reqValAg = reqVal.toLocaleString();
                    // console.log(requests[x][key]);
                    reqTd.innerText = allUserRequests[x][key];
                    reqRow.append(reqTd);
                }
                
                
                w++;
            }
            
            tbleBody.append(reqRow)

        }


         // Append header row to table.
         tbl.appendChild(tblHead)
         tbl.append(tbleBody)
        reqTbleDiv.appendChild(tbl)

}


async function show_AllAsignedRequestsForReviewHandler(){

    // console.log(allAsignedReqs)
    let reqTbleDiv = document.getElementById("AssociateRequestTableDiv");
    let tbl = document.createElement("table");
    let tblHead = document.createElement("thead");
    let tblHdrRow = document.createElement("tr");

    tbl.className="table";

    // OpenFormDivId = "AssociateRequestTableDiv";
    
    
    //  Appending Table Headers to Table.
    for(reqProp in allAsignedReqsArr[0]){
        let tblHdr = document.createElement("th")
        tblHdr.scope = "col"
        tblHdr.innerText = reqProp
        tblHdrRow.append(tblHdr);
    }


        tblHead.append(tblHdrRow);

        let tbleBody = document.createElement("tbody");


        for(x = 0; x<=allAsignedReqsArr.length; x++){
            
            let reqRow = document.createElement("tr");
            w = 0;
            

            for (key in allAsignedReqsArr[x]) {
                
                let reqTd = document.createElement("td")
                   

                if(w==4){


                    let date = new Date(allAsignedReqsArr[x]["requestedDate"])
                    let dateISO = date.toISOString();
                    let dateString = dateISO.toString();
            
                    let [breakDate, breakTime] = dateString.split("T",1)
                    let dateArray = breakDate.split("/",2);

                    console.log(dateArray);


                    

                    let daDate = new Date();

                    let evdate = allAsignedReqsArr[x][key];

                    let testDate = allAsignedReqsArr[x]["eventDate"]
                    let testTime = allAsignedReqsArr[x]["eventTime"]
                    
                    let dateInput = document.getElementById("dateInput").value;
                    let timeInpt = document.getElementById("timeInpt").value;
                    
                    alterDateIncoming(testDate,testTime)

                    daDate.setDate(daDate.getDate(evdate)+36)
                    
                    reqTd.innerText =dateArray[0];
                    reqRow.append(reqTd);

                }else if(w == 10){
                    reqEvent = allAsignedReqsArr[x][key];
                    reqEventToMap = allAsignedReqsArr[x][key];

                    let eventButt = document.createElement("button");
                        eventButt.type="button"
                        eventButt.className="btn btn-primary"
                        eventButt.setAttribute('data-bs-toggle',"modal")
                        eventButt.setAttribute('data-bs-target',"#exampleModal")
                        eventButt.innerText = "View Event";                    
                        eventButt.id = x;
                        // eventButt.id = allEEReqs[x][reqId];


                        eventButt.onclick=(e)=>{

                            let idder = document.getElementById(e.target.id)
                            let id = eventButt.id;
                            let req = allAsignedReqsArr[id];
                            let reqEv = req.event;
                            updateEvent(reqEv);
                            updatereqVar(req);
                            // setupModal();
                            setupModalAgain();
                            // eventButt.click;
                        
                        }

                    reqTd.append(eventButt);
                    reqRow.append(reqTd);
                
                
                }else{
                    // let reqValAg = reqVal.toLocaleString();
                    // console.log(requests[x][key]);
                    reqTd.innerText = allAsignedReqsArr[x][key];
                    reqRow.append(reqTd);
                }
                
                
                w++;
            }
            
            tbleBody.append(reqRow)

        }


         // Append header row to table.
         tbl.appendChild(tblHead)
         tbl.append(tbleBody)
        reqTbleDiv.appendChild(tbl)

}


async function showAllRequestsHandler(){

    // console.log(allEEReqs)
    let reqTbleDiv = document.getElementById("AllAssociateRequestTableDiv");
    let tbl = document.createElement("table");
    let tblHead = document.createElement("thead");
    let tblHdrRow = document.createElement("tr");

    tbl.className="table";

    // OpenFormDivId = "AllAssociateRequestTableDiv";
    
    
    //  Appending Table Headers to Table.
    for(reqProp in ALLTHEREQUESTS[0]){
        let tblHdr = document.createElement("th")
        tblHdr.scope = "col"
        tblHdr.innerText = reqProp
        tblHdrRow.append(tblHdr);
    }


        tblHead.append(tblHdrRow);

        let tbleBody = document.createElement("tbody");


        for(x = 0; x<=ALLTHEREQUESTS.length; x++){
            
            let reqRow = document.createElement("tr");
            w = 0;
            

            for (key in ALLTHEREQUESTS[x]) {
                
                let reqTd = document.createElement("td")
                   

                if(w==4){


                    let date = new Date(ALLTHEREQUESTS[x]["requestedDate"])
                    let dateISO = date.toISOString();
                    let dateString = dateISO.toString();
            
                    let [breakDate, breakTime] = dateString.split("T",1)
                    let dateArray = breakDate.split("/",2);

                    // console.log(dateArray);


                    // let daDate = new Date();

                    // let evdate = ALLTHEREQUESTS[x][key];

                    // let testDate = ALLTHEREQUESTS[x]["eventDate"]
                    // let testTime = ALLTHEREQUESTS[x]["eventTime"]
                    
                    // let dateInput = document.getElementById("dateInput").value;
                    // let timeInpt = document.getElementById("timeInpt").value;
                    
                    // alterDateIncoming(testDate,testTime)

                    // daDate.setDate(daDate.getDate(evdate)+36)
                    
                    reqTd.innerText =dateArray[0];
                    reqRow.append(reqTd);

                }else if(w == 10){
                    reqEvent = ALLTHEREQUESTS[x][key];
                    reqEventToMap = ALLTHEREQUESTS[x][key];

                    let eventButt = document.createElement("button");
                        eventButt.type="button"
                        eventButt.className="btn btn-primary"
                        eventButt.setAttribute('data-bs-toggle',"modal")
                        eventButt.setAttribute('data-bs-target',"#exampleModal")
                        eventButt.innerText = "View Event";                    
                        eventButt.id = x;
                        // eventButt.id = allEEReqs[x][reqId];


                        eventButt.onclick=(e)=>{

                            let idder = document.getElementById(e.target.id)
                            let id = eventButt.id;
                            let req = ALLTHEREQUESTS[id];
                            let reqEv = req.event;
                            updateEvent(reqEv);
                            updatereqVar(req);
                            // setupModal();
                            setupModalAgain();
                            // eventButt.click;
                        
                        }

                    reqTd.append(eventButt);
                    reqRow.append(reqTd);
                
                
                }else{
                    // let reqValAg = reqVal.toLocaleString();
                    // console.log(requests[x][key]);
                    reqTd.innerText = ALLTHEREQUESTS[x][key];
                    reqRow.append(reqTd);
                }
                
                
                w++;
            }
            
            tbleBody.append(reqRow)

        }


         // Append header row to table.
         tbl.appendChild(tblHead)
         tbl.append(tbleBody)
        reqTbleDiv.appendChild(tbl)

}



function closeRequestEditOne (){
    let newFormDiv = document.getElementById("newFormDiv");
    
    let formToReShowChild = document.getElementById(OpenFormDivId);



   
    let formToReShowParentID = formToReShowChild.parentElement.getAttribute("id");


    console.log(OpenFormDivId)

    if(OpenFormDivId == "AssociateRequestTableDiv"){
        // AllAssociateRequestTableDiv

        formToReShowParentID = "viewAssociateRequestTop"

    }else if(OpenFormDivId=="AllAssociateRequestTableDiv"){

        formToReShowParentID = "viewAllRequestTop"

    }else if(OpenFormDivId=="RequestTableDiv"){
        
        formToReShowParentID = "viewRequestTop"
    }




    let formToReShow = document.getElementById(OpenFormDivId);

    newFormDiv.classList.toggle("off");
    formToReShow.classList.toggle("off")
}




function createRequest(){


    
    let eeId = document.getElementById("eeid").value;
    let first_name=document.getElementById("first_name").value;
    let last_name=document.getElementById("last_name" ).value;

    eeFinMangrID = document.getElementById("eeFinMngrId").value

    //Event Elements
    let eventName = document.getElementById("evntNameInput").value;
    
    let dateInput=document.getElementById("dateInput").value;
    let timeInpt = document.getElementById("timeInpt").value;
   
    // HANDLE THE DATE AND TIME FIELD
    const dateStr = dateInput+ " " + timeInpt;
    
    const newString = dateStr.replace("-","/").replace("-","/");
    const [dateRelated, timeRelated] = newString.split(' ');

    // timeRelated = timeRelated.replace("-","/");
    // console.log(dateRelated); // 👉️ "06/24/2022"
    
    // console.log(timeRelated); // 👉️ "09:30:05"

    const myArray = dateRelated.split("/")

    myArray[0]
    
    const year = myArray[0];
    const month = myArray[1];
    const day = myArray[2];
    // console.log("year " + year)
    // console.log("month " + month)l
    // console.log("day " + day)
    const constMyNewDate = `${month}/${day}/${year}`;

    // console.log("here is my newDate " + constMyNewDate)
    const [monthdos, yeardos, daydos] = constMyNewDate.split('/');
    const [hours, minutes, seconds] = timeRelated.split(':');

    const date2 = new Date(+year, month - 1, +day, +hours, +minutes, +seconds);
    const date3 = new Date(+year, month - 1, +day);
    // console.log(date2); // 👉️ Fri Jun 24 2022 09:30:05
    console.log(date2)
    reqVar
    reqEvent.eventDate = date2;
    // 👇️ Get timestamp
    const timestamp = date2.getTime();
    const evntDate = date2.getDate();
    
    console.log("I am time stamp " + evntDate)
    
    
    let locationInpt=document.getElementById("locationInpt").value; 
    let costInpt=document.getElementById("costInpt").value;

    let gradeSelect=document.getElementById("gradeSelect"); 
    let gradeSel = gradeSelect.options[gradeSelect.selectedIndex].value;
    // console.log(" here is time " + timeInptCl.toFixed(5));

    switch(gradeSel) {
        case gradeSel = "Percentage Grading":
          // code block
          gradeSel = "PERCENTGRADING"
          break;
        case gradeSel = "Letter grading":
          // code block
          gradeSel = "LETTERGRADING"
          break;
        case gradeSel = "Norm-referenced grading":
            // code block
            gradeSel = "NORMREFERENCEDGRADING"
            break;
        case gradeSel = "Mastery grading":
        // code block
            gradeSel = "MASTERYGRADNG"
            break;
        case gradeSel = "Pass/Fail":
            // code block
            gradeSel = "PASSFAIL"
        break;
        case gradeSel = "Standards grading":
        // code block
            gradeSel = "STANDARDS"
            break;
        case gradeSel = "Narrative grading":
        // code block
            gradeSel = "NARRATIVE"
            break;
        // default:
          // code block
      }


      

    
    let eventTypeSelect=document.getElementById("eventTypeSelect"); 
    let evntType = eventTypeSelect.options[eventTypeSelect.selectedIndex].value;

    switch(evntType) {
        case evntType = "University Courses":
          // code block
          evntType = "UNIVERSITYCOURSES"
          break;
        case evntType = "Seminars":
          // code block
          evntType = "SEMINARS"
          break;
        case evntType = "Certification Preparation Classes":
            // code block
            evntType = "CERTIFICATIONPREPCLASSES"
            break;
        case evntType = "Certification":
        // code block
            evntType = "CERTIFICATION"
            break;
        case evntType = "Technical Training":
            // code block
            evntType = "TECHNICALTRAINING"
        break;
        case evntType = "Other":
        // code block
            evntType = "OTHER"
            break;
        // default:
          // code block
      }

    //   console.log("here is evntType " + evntType);

    let wrjInpt=document.getElementById("wrjInpt").value; 
    let eventDescript = document.getElementById("evntDescriptInput").value;

    let user = JSON.parse(sessionStorage.getItem("user"));

    let Evnt={
        eventName:eventName,
        eventDate:JSON.stringify(date2),
        // eventTime:timeInpt,
        eventTime:timeRelated,
        eventLocation:locationInpt,
        eventDescription:eventDescript,
        eventTotalCost:costInpt,
        eventGradingFormat:gradeSel,
        workRelatedJustification:wrjInpt,
        eventType:evntType,
        eventReimburesmentPerc:null,
        instructor:null
 

    }

    let Reqst={
        reqId:null,
        reqForID:user.id,
        reqStatus:"pending",
        assignedFinanceMngrId:eeFinMangrID,
        requestedDate: Date = new Date().getDate(),
        lastUpdatedById:eeId,
        notes:null,
        presentation:null,
        certUpLoad:null,
        event:Evnt
    }



    // console.log(Reqst)
    Reqst = JSON.stringify(Reqst);

    sendRequesttoDB(Reqst)




}


async function sendRequesttoDB(Reqst){

    let eeId = Reqst.reqForID;

    let response = await fetch(`${baseURL}users/${eeId}/requests`,{
        method:'POST',
        header:{'Content-Type': 'application/json'},
        // header:{'cors':'no-cors'},
        body:Reqst
        
    });

    if (response.status === 200) {
    
        let data = await response.json();
        let dataStrng = JSON.stringify(data)
        // console.log(data);
        // console.log("You Created a new request")

        

        // sessionStorage.setItem("user",dataStrng);

        // if(data.role== "Associate"){
        //     // sessionStorage.setItem("user",JSON.stringify(data))
        //     let assinger = baseURL+ "LoggedInEE.html";
        //     console.log("ran here")
        //     window.location.assign(assinger);

        // }else if(data.role =="Finance Manager"){
        //     // sessionStorage.setItem("user",JSON.stringify(data))
        //     let assinger = baseURL +"LoggedInFM.html";
        //     window.location.assign(assinger);
        // }
        
        // successLogin(data,response);
        
    } else {

        console.log("There was no data")
        /*
            Handle error
        */
    }


}





function setupAgain(){
    setup();
}

function setup(){
    setupEE();
    allRequestsHandler();
    // setupRequests();
    // setupModal(reqVar);
    // setupModalAgain(reqVar);
}





function convertGradeFormattoDB(){

    switch(gradeSel) {
        case gradeSel = "Percentage Grading":
          // code block
          gradeSel = "PERCENTGRADING"
          break;
        case gradeSel = "Letter grading":
          // code block
          gradeSel = "LETTERGRADING"
          break;
        case gradeSel = "Norm-referenced grading":
            // code block
            gradeSel = "NORMREFERENCEDGRADING"
            break;
        case gradeSel = "Mastery grading":
        // code block
            gradeSel = "MASTERYGRADNG"
            break;
        case gradeSel = "Pass/Fail":
            // code block
            gradeSel = "PASSFAIL"
        break;
        case gradeSel = "Standards grading":
        // code block
            gradeSel = "STANDARDS"
            break;
        case gradeSel = "Narrative grading":
        // code block
            gradeSel = "NARRATIVE"
            break;
        // default:
          // code block
      }

}


function convertGradeFormatfromDB(gradeSel){

    switch(gradeSel) {
        case gradeSel = "PERCENTGRADING":
          // code block
          gradeSel = "Percentage Grading"
          break;
        case gradeSel = "LETTERGRADING":
          // code block
          gradeSel =  "Letter grading"
          break;
        case gradeSel = "NORMREFERENCEDGRADING":
            // code block
            gradeSel = "Norm-referenced grading"
            break;
        case gradeSel = "MASTERYGRADNG":
        // code block
            gradeSel = "Mastery grading"
            break;
        case gradeSel = "PASSFAIL":
            // code block
            gradeSel = "Pass/Fail"
        break;
        case gradeSel = "STANDARDS":
        // code block
            gradeSel = "Standards grading"
            break;
        case gradeSel = "NARRATIVE":
        // code block
            gradeSel = "Narrative grading"
            break;
        // default:
          // code block
      }

      return gradeSel;

}



async function tester(){

    let testDiv = document.getElementById("testDiv")

    let template = "../CreateEmployee.html"
    // let template = Element
     
        
        render(template,testDiv)

}


async function testPenAgain(e){

  
        let elID = e.id;
        let elClass = e.className;
        elID = elID.replace("Pen","");
        // console.log(elID);
    
        let Lbl = "Lbl";
        let Inpt = "Inpt";
    
        let elLBLID = elID + Lbl;
        let elInptID = elID + Inpt;
        
        let inptEl = document.getElementById(elInptID);

        let inptEldisabled = inptEl.getAttribute("disabled");


        if(inptEldisabled){

            inptEl.removeAttribute("disabled","disabled")

        }else{

            let column = elID;
            let newVal = inptEl.value;

            console.log(elID)

            if(elID == "amounttobereimbursed"){

                reqVar[column] = newVal;
                reqVar.amounttobereimbursed = newVal;
    
                reqVar.event = reqEvent;
                // console.log(elID)
    
    
                let answ = await updateRequest(reqVar);
                console.log(answ);
    
    
    
                console.log(reqVar);
                inptEl.setAttribute("disabled","disabled")


            }else{

                reqEvent[column] = newVal;
    
                reqVar.event = reqEvent;
                console.log(elID)
    
    
                let answ = await updateRequest(reqVar);
                console.log(answ);
    
    
    
                console.log(reqVar);
                inptEl.setAttribute("disabled","disabled")

            }


            // reqVar[column] = newVal;
        }
    
    
        // let lblTog = lblEl.classList.toggle("Iamoff");
    
    
    
        // console.log(lblTog)
        // modalEventShowing 
    
        // if(lblTog){
    
            // lblEl.classList.toggle("Iamoff",true);
            // lblEl.classList.toggle("IamOn",false);
    
    
            // inptEl.classList.toggle('Iamoff',false);
            // inptEl.classList.toggle('IamOn',true);
    
    
        // }else{
    
            // lblEl.classList.toggle("Iamoff",false);
            // lblEl.classList.toggle("IamOn",true);
    
            // inptEl.classList.toggle('Iamoff',true);
            
        // }
    
    
      
    
    
    

}








   