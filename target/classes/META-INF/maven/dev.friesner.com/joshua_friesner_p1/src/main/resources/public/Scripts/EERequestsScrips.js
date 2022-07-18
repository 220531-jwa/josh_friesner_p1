
let baseURLEESCRIPT = "http://localhost:8082/"


var viewReqsOpen = false;
var createReqsOpen = false;
var modalEventShowing = false;
// var user = JSON.parse(sessionStorage.getItem("user"))
var userVar = "";


var user = {
    id:null,
    first_name:null,
    last_name:null,
    email:null,
    phone:null,
    dob:null,
    address:null,
    city:null,
    state:null,
    zip:null,
    //login
    username:null, // make sure this is a unique field
    passwrd:null,
    role:null,
    financeMngrId:null,
    //reimbursements
    reimbursement_amount:null,
    //	private byte[] employee_pic,
    //	private File[] employee_pic,
    employee_pic:null,
}


async function updateIncomingUser(incomingUser){

    Object.keys(incomingUser).forEach((key, index) => {
        user[key] = incomingUser[key];
      });

    

}




var allUserRequests = [];


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

    let i = 2
    if(i==1){
        console.log(allUserRequests)
        let inTest = document.getElementById("testin").value;
    
        let req = allUserRequests[inTest]
    
    
        for (var key in req) {
    
            
            if (reqVar.hasOwnProperty(key)) {
                reqVar[key] = req[key];
            }
        }
    
        console.log(reqVar);

    }else if(i==2){


        let testDate = document.getElementById("testCal").value
        let testTime = document.getElementById("testTime").value

        let testCalPlacer = document.getElementById("testCalPlacer");
        let testTimePlacer=document.getElementById("testTimePlacer")

        console.log("I am testDate " + testDate);
        console.log("I am test Time " + testTime);


        let newDater = new Date();
        newDater.setDate(newDater.getDate(testDate));
        let hmmDate = newDater.getDate()+36
        console.log(newDater)

        testTime = testTime + ":00"

        let togetherDate = testDate + " " + testTime

        let newDate = new Date()
        console.log(togetherDate)
      

        console.log(newDate.getTime())
        // console.log(newTime)


        let dateInput = document.getElementById("dateInput").value;
        let timeInpt = document.getElementById("timeInpt").value;
        
        // alterDateIncoming(testDate,testTime)
        let mythings = alterDateIncoming(testDate, testTime);
        console.log(mythings)

        testCalPlacer.value=mythings[0]
        testTimePlacer.value=mythings[1]
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


// async function setupModalAgain (){

//     let i =3
//     if(i == 1){

//         modalTearDown();
//     }else if(i == 3){

//         modalTearDown(i);


//         let theFormDiv = document.getElementById("newFormDiv");
//         console.log(reqEvent)

//         /////////// EVENT NAME \\\\\\\\\\\\\
//         document.getElementById("eventNameLbl").innerText = reqEvent.eventName
//         document.getElementById("eventNameInpt").innerText = reqEvent.eventName


//         /////////// EVENT DATE \\\\\\\\\\\\\
//         let umm = new Date()
//         let duhDate = reqEvent.eventDate;
//         let duhTime = reqEvent.eventTime;
//         let mythings = alterDateIncoming(duhDate, duhTime);






//         umm.setDate(duhDate);
//         let finalDate = umm.getDate();
//         let evDateLbl = document.getElementById("eventDateLbl");
//         let evDateInpt = document.getElementById("eventDateInpt");
//         evDateLbl.innerText = mythings[0];
//         evDateInpt = mythings[0];


//         let daDate = new Date();
//         let evdate = duhDate;
//         daDate.setDate(daDate.getDate(evdate)+36)

//         let timm = daDate.getTime()+36;
//         // let deee = daDate.getDate()+36;

//         // daDate.setDate(daDate.getTime(evdate))
//         let daTime = new Date();
//         daTime.setTime(daTime.getTime(daDate))
//         // daTime.setDate(daTime.getDate(timm));
        
//         // console.log("I am time " + daTime);

//         // evDateLbl.innerText = daDate;
//         // evDateInpt.innerText = daDate;



//         /////////// EVENT TIME \\\\\\\\\\\\\

//         let evTimeLbl = document.getElementById("eventTimeLbl")
//         let evTimeInptdos = document.getElementById("timeInptdos")
//         let evTimeInpt = document.getElementById("eventTimeInpt")

//         evTimeLbl = mythings[1];
//         evTimeInptdos = mythings[1];

//         evTimeLbl.innerText = reqEvent.eventTime
//         evTimeInpt.innerHTML = reqEvent.eventTime



//         if(reqEvent.eventTime){

//             let optsofTime = evTimeInpt.getElementsByTagName("option")
//             let optsTimeLength = optsofTime.length;
//             let optStrng = "";
    
//             for(let y = 0; y < optsTimeLength; y++){
//                 let newopt = optsofTime[y];
//                 let newOptVAl = newopt.value;
                
//                 console.log("I am new optVal" + newOptVAl)
    
//                 if(newOptVAl == reqEvent.eventTime){
//                     optsofTime[y].selected = true;
//                     optStrng = evTimeInpt.value;

//                     console.log(optStrng)
//                 }
    
                
    
//             }

//             evTimeLbl.innerText = optStrng;

//         }else{

//             evTimeLbl.innerText = "????"
//             optsofTime[0].selected = true;
            

//         }














































//         /////////// EVENT Location \\\\\\\\\\\\\

//         let evLocationLbl = document.getElementById("eventLocationLbl")
//         let evLocationInpt = document.getElementById("eventLocationInpt")

//         if(reqEvent.eventLocation){

//             evLocationLbl.innerText = reqEvent.eventLocation
//             evLocationInpt.value = reqEvent.eventLocation

//         }else{

//         }
        


//         /////////// EVENT DESCRIPTION \\\\\\\\\\\\\
        
//         let evDescriptLbl = document.getElementById("eventDescriptionLbl")
//         let evDescriptInpt = document.getElementById("eventDescriptionInpt")

//         if(reqEvent.eventDescription){

//             evDescriptLbl.innerText = reqEvent.eventLocation
//             evDescriptInpt.value = reqEvent.eventLocation

//         }else{

//             evDescriptLbl.innerText = "????"
//             evDescriptInpt.value = "unknown"

//         }


//         /////////// EVENT COST \\\\\\\\\\\\\
//         let eventTotalCostLbl = document.getElementById("eventTotalCostLbl")
//         let eventTotalCostInpt = document.getElementById("eventTotalCostInpt")

//         if(reqEvent.eventTotalCost){

//             eventTotalCostLbl.innerText = reqEvent.eventTotalCost
//             evDescriptInpt.value = reqEvent.eventTotalCost

//         }else{

//             eventTotalCostLbl.innerText = "????"
//             eventTotalCostInpt.value = "unknown"

//         }




//         /////////// EVENT GRADING \\\\\\\\\\\\\
//         let eventGradingLbl = document.getElementById("eventGradingFormatLbl")
//         let eventGradingInpt = document.getElementById("eventGradingFormatInpt")
//         if(reqEvent.eventGradingFormat){

//             let optsofGrade = eventGradingInpt.getElementsByTagName("option")
//             let optsGradeLength = optsofGrade.length;
//             let optStrng = "";
    
//             for(let y = 0; y < optsGradeLength; y++){
//                 let newopt = optsofGrade[y];
//                 let newOptVAl = newopt.value;
                
    
//                 if(newOptVAl == reqEvent.eventGradingFormat){
//                     optsofGrade[y].selected = true;
//                     optStrng = eventGradingInpt.value;
//                 }
    
                
    
//             }

//             eventGradingLbl.innerText = optStrng;

//         }else{

//             eventGradingLbl.innerText = "????"
//             optsofGrade[0].selected = true;
            

//         }

//         /////////// EVENT WORK JUSTIFICATION \\\\\\\\\\\\\
//         let workRelatedJustificationLbl = document.getElementById("workRelatedJustificationLbl")
//         let workRelatedJustificationInpt = document.getElementById("workRelatedJustificationInpt")

//         if(reqEvent.workRelatedJustification){

//             workRelatedJustificationLbl.innerText = reqEvent.workRelatedJustification
//             workRelatedJustificationInpt.value = reqEvent.workRelatedJustification

//         }else{

//             workRelatedJustificationLbl.innerText = "????"
//             workRelatedJustificationInpt.value = "unknown"

//         }














//         /////////// EVENT TYPE \\\\\\\\\\\\\
//         let eventSelLbl = document.getElementById("eventTypeLbl")
//         let eventSelInpt = document.getElementById("eventTypeInpt")

//         if(reqEvent.eventType){

//             let optsofType = eventSelInpt.getElementsByTagName("option")
//             let optsLength = optsofType.length;
//             let newWrd = "";
    
//             for(let y = 0; y < optsLength; y++){
//                 let newopt = optsofType[y];
//                 let newOptVAl = newopt.value;
//                 // console.log(newOptVAl)
    
//                 if(newOptVAl == reqEvent.eventType){
//                     optsofType[y].selected = true;
//                     newWrd = optsofType[y].selected.value;
                    
//                     // console.log("I selected")
//                 }

//                 eventSelLbl.innerText = newWrd
    
                
    
//             }
    
//             for(opt of optsofType){
//                 // console.log(opt);
//             }
            
//             // eventSel.options[reqEvent.eventType];
            
//             // let gradeSel = gradeSelect.options[gradeSelect.selectedIndex].value;
            
    

//         }else{

//             eventSelLbl.innerText = "????"
//             eventSelInpt[0].selected

//         }






























//         let eventReimburesmentPercLbl = document.getElementById("eventReimburesmentPercLbl")
//         let eventReimburesmentPercInpt = document.getElementById("eventReimburesmentPercInpt")

//         if(reqEvent.eventReimburesmentPerc){
//             eventReimburesmentPercLbl = reqEvent.eventReimburesmentPerc;
//             eventReimburesmentPercInpt.value = reqEvent.eventReimburesmentPerc;
//         }else{

//             eventReimburesmentPercLbl.innerText = "unknown"
//             eventReimburesmentPercInpt.value = "unkown"
            
//         }




//         /////////// EVENT INSTRUCTOR \\\\\\\\\\\\\
//         document.getElementById("instructorLbl").innerText = reqEvent.instructor
//         document.getElementById("instructorInpt").innerText = reqEvent.instructor

//         let instructLbl = document.getElementById("instructorLbl")
//         let instrucInpt = document.getElementById("instructorInpt")

//         if(reqEvent.instructor){
//             instructLbl = reqEvent.instructor;
//             instrucInpt.value = reqEvent.instructor;
//         }else{

//             instructLbl.innerText = "unknown"
//             instrucInpt.value = "unkown"
            
//         }





//         // let evNameTitle = document.getElementById("eventNametitle");
//         // evNameTitle.innerText = reqEvent.eventName;


//         // let theTypeLbl = document.getElementById("evType");
//         // theTypeLbl.innerText = reqEvent.eventType;


// //      *******************************************************************************************

//     //     let modalBody = document.createElement("modalBody");

//     //     let wrapperDiv = document.createElement("div");
//     //     wrapperDiv.id = "modalWrapper";


//     //     // EVENT TYPE

//     //     let row1div = document.createElement("div")
//     //     row1div.className = "row"


//     //     let typeCol1 = document.createElement("div")
//     //     typeCol1.className="col-6 col-sm-6";

//     //     let typeCol2 = document.createElement("div")
//     //     typeCol2.className="col-6 col-sm-6";


//     //    let evTypeLbl1 = document.createElement("label");
//     //     evTypeLbl1.innerText="Event Type:"

//     //     let evTypeLbl2 = document.createElement("label");
//     //     evType = reqEvent.eventType;
//     //     evTypeLbl2.innerText=evType;


//     //     typeCol1.append(evTypeLbl1)
//     //     typeCol2.append(evTypeLbl2);

//     //     row1div.append(typeCol1);
//     //     row1div.append(typeCol2);

//     //     wrapperDiv.append(row1div);
//     //     modalBody.append(wrapperDiv);


// //      *******************************************************************************************

        

//     } else{

//         modalTearDown();
//         console.log("I am setup Modal Again incoming event")
//         console.log(incomingEvent)
//         console.log("I am setup Modal Again reqEvent")
//         console.log(reqEvent)
    
//         // let modalButton = document.createElement("button")
    
//         let testDive = document.getElementById("testDiv");
//         // let MyEvent = Event
//         // let divToRemove = document.createElement("div")
//         // divToRemove.className = "container"
//         // divToRemove.id="modalShell"
    
//         // let name = newEvnt.eventName;
    
//         testDive.innerHTML= ""
    
//       let ModalElement = (   `
//       <div id="divtoRemove" class="container">
      
//         <div class="modal fade" id="exampleModalTWO" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div class="modal-dialog">
//             <div class="modal-content">
//                 <div class="modal-header">
//                 <h1>Poo Balls</h1>
//                 <h5 class="modal-title" id="exampleModalLabel">Modal title ${reqEvent.eventName}</h5>
//                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                 </div>
//                 <div class="modal-body">
    
//                 <div class="row">
    
//                     <div id="reqTypeDDiv" class="col-6 col-sm-6">
//                         <label>Event Type</label>
//                     </div>
//                     <div id="reqTypeDDiv" class="col-6 col-sm-6">
//                         <label>${reqEvent.eventName}</label>
//                     </div>
    
    
    
//                 </div>
//                 ...
//                 </div>
//                 <div class="modal-footer">
//                 <button type="button" class="btn btn-secondary" onclick="modalTearDown()">test</button>
//                 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                 <button type="button" class="btn btn-primary">Save changes</button>
//                 </div>
//             </div>
//             </div>
//         </div>
//         </div>`);


//         // `<!-- Trigger/Open The Modal -->
//         // //     <button id="myBtn">Open Modal</button>

//         // //     <!-- The Modal -->

//         var MyRealModal = `<div id="myModal" class="modal">

//             <!-- Modal content -->
//             <div class="modal-content">
//                 <span class="close">&times;</span>
//                 <p>Some text in the Modal..</p>
//             </div>

//             </div>`
    
//         // divToRemove.innerHTML=ModalElement
    
    
//         // testDive.innerHTML= ModalElement
//         // testDive.append(ModalElement)
//         // let newDIV = render(ModalElement,testDive)
//         render(ModalElement,testDive)
//         // render(MyRealModal,testDive)
        
//     }

    


// }



async function setupModalAgain (){

    let i =3
  
        modalTearDown(i);

        console.log(reqVar)
        console.log(reqEvent)


        let newFormDiv = document.getElementById("newFormDiv");
        let viewAssociateRequestTop = document.getElementById("viewRequestTop");

        // console.log(reqEvent)

        /////////// EVENT NAME \\\\\\\\\\\\\
        // document.getElementById("eventNameLbl").innerText = reqEvent.eventName

        document.getElementById("eventNameInpt").value = reqEvent.eventName


        document.getElementById("amounttobereimbursedInpt").value = reqVar.amounttobereimbursed;

       
        let evDateInpt = document.getElementById("eventDateInpt");

        console.log("I am right before the if statement")

        if(reqEvent.eventDate){

            let dateToAlter = reqEvent.eventDate;

            console.log(dateToAlter)

            let date = new Date(reqEvent.eventDate)
            let dateISO = date.toISOString();
            let dateString = dateISO.toString();
            let [breakDate, breakTime] = dateString.split("T",1);
            let dateArray = breakDate.split("/",2);

            console.log(dateArray)
            evDateInpt.value = dateArray[0]



        }

        // console.log(dateArray);

        // let test_calinpt = document.getElementById("testCalPlacer");
        // test_calinpt.value = breakDate;
        



        // evDateLbl.innerText = breakDate;
        // evDateInpt.value = breakDate;



        /////////// EVENT TIME \\\\\\\\\\\\\

        // let evTimeLbl = document.getElementById("eventTimeLbl")
        // let evTimeInptdos = document.getElementById("timeInptdos")
        let evTimeInpt = document.getElementById("eventTimeInpt")


        // evTimeLbl.innerText = reqEvent.eventTime
        // let evntTimeDate = new Date(reqEvent.eventTime)
      
        // let timeISO = evntTimeDate.toISOString();
        // let timeString = timeISO.toString();
        
        // let [breakDatedos, breakTimedos] = dateString.split("T",1)
        // let timeArray = breakTimedos.split(":",2);
        






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
            eventTotalCostInpt.value = reqEvent.eventTotalCost

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



    } 







function modalTearDown(i){

    let modalBody = document.getElementById("modalBody");
    let testDive = document.getElementById("testDiv");
    let divtoRemove = document.getElementById("divtoRemove")

    let wrapperDiv = document.getElementById("modalWrapper");

    if(i == 3){


        // modalBody.remove(wrapperDiv);

        

        // wrapperDiv.id = "modalWrapper";
    }
    
    // var myModal = document.getElementById('myModal')
    // var myInput = document.getElementById('myInput')
    


    
    // testDive.removeChild(divtoRemove);


    // testDive.innerHTML = ""


    // myModal.removeEventListener('shown.bs.modal');
    // myModal.addEventListener('shown.bs.modal', () => {
    //     myInput.focus();
    //     if(modalEventShowing){
    //     modalEventShowing = false;
    //     modalTearDown();
    //     }
    // })
}



function setupEE(){

    let incomingUser = sessionStorage.getItem("user");
    incomingUser = JSON.parse(incomingUser);
    updateIncomingUser(incomingUser);

    console.log("Here is user")
    console.log(user);


    eeId = document.getElementById("eeid");
    first_name = document.getElementById("first_name");
    last_name = document.getElementById("last_name");
    eeFinMangrID = document.getElementById("eeFinMngrId")

    
    eeId.value = user.id;
    first_name.value = user.first_name;
    last_name.value = user.last_name;
    eeFinMangrID.value = user.financeMngrId




}

// // HANDLE THE DATE AND TIME FIELD
// const dateStr = dateInput+ " " + timeInpt;
    
// const newString = dateStr.replace("-","/").replace("-","/");
// const [dateRelated, timeRelated] = newString.split(' ');

// // timeRelated = timeRelated.replace("-","/");
// console.log(dateRelated); // 👉️ "06/24/2022"

// console.log(timeRelated); // 👉️ "09:30:05"

// const myArray = dateRelated.split("/")

// myArray[0]

// const year = myArray[0];
// const month = myArray[1];
// const day = myArray[2];
// console.log("year " + year)
// console.log("month " + month)
// console.log("day " + day)
// const constMyNewDate = `${month}/${day}/${year}`;

// // console.log("here is my newDate " + constMyNewDate)
// const [monthdos, yeardos, daydos] = constMyNewDate.split('/');
// const [hours, minutes, seconds] = timeRelated.split(':');

// const date2 = new Date(+year, month - 1, +day, +hours, +minutes, +seconds);
// const date3 = new Date(+year, month - 1, +day);
// // console.log(date2); // 👉️ Fri Jun 24 2022 09:30:05
// console.log(date2)
// reqVar
// reqEvent.eventDate = date2;
// // 👇️ Get timestamp
// const timestamp = date2.getTime();
// const evntDate = date2.getDate();

// console.log("I am time stamp " + evntDate)



function alterDateIncoming(dateInput, timeInpt){

    console.log("////// Entered Alterd Time /////////////////")

    console.log("I am date input " + dateInput);
    console.log( "I am time input " + timeInpt);

    // HANDLE THE DATE AND TIME FIELD
    const dateStr = dateInput+ " " + timeInpt;
    console.log("I am date string" + dateStr)
                        
    // const newString = dateStr.replace("-","/").replace("-","/");
    const newString = dateStr

    console.log("I am new date string" + newString)



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
    console.log(dateRelated); // 👉️ "06/24/2022"

    console.log(timeRelated); // 👉️ "09:30:05"

    console.log(constMyNewDate)

    let myDateArr = [dateRelated,timeRelated]
    

    // console.log("here is my newDate " + constMyNewDate)
    const [monthdos, yeardos, daydos] = constMyNewDate.split('/');
    const [hours, minutes, seconds] = timeRelated.split(':');
    const [hoursdos, minutesdos, secondsdos] = timeRelated.split(':');

    const date2 = new Date(+year, month - 1, +day, +hours, +minutes, +seconds);
    const date3 = new Date(+year, month - 1, +day);
 

    // console.log(date2); // 👉️ Fri Jun 24 2022 09:30:05
    console.log(date2)
    
    // reqVar
    reqEvent.eventDate = date2;
    // 👇️ Get timestamp
    const timestamp = date2.getTime();
    const evntDate = date2.getDate();

    // console.log("I am time stamp " + evntDate)

    return myDateArr;

}

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
async function allRequestsHandler(){

    let userId = user.id;
   

    let allReqs = await getAllRequestsByEEId(userId)

    if(allReqs){

        for(u = 0; u<allReqs.length; u++){
    
            allUserRequests.push(allReqs[u]);
    
        }
    
        await showAllReqsHandler();
    }
    
     
}





//GOOD
async function showAllReqsHandler(){
    let reqTbleDiv = document.getElementById("RequestTableDiv");
    let tbl = document.createElement("table");
    let tblHead = document.createElement("thead");
    let tblHdrRow = document.createElement("tr");

    tbl.className="table";
    
    let shouldAppend = false;

    let newHdr = ""


    //  Appending Table Headers to Table.
    for(reqProp in allUserRequests[0]){

        // console.log(reqProp)

        let tblHdr = document.createElement("th")

        let reqPropStrng = reqProp.toString();

        if(reqProp == "reqId"){
            
            shouldAppend = false

        }else if(reqProp == "reqForID"){

            
            shouldAppend = false

        }else if(reqProp == "reqStatus"){

            shouldAppend = true;
            newHdr="Status"
           

        }
        else if(reqProp == "assignedFinanceMngrId"){

            shouldAppend = true
            newHdr="Assigned Finance Mngr"
            
            // tblHdr.scope = "col"
            // tblHdr.innerText = reqProp
            // tblHdrRow.append(tblHdr);
        }
        else if(reqProp == "requestedDate"){
            
            shouldAppend = true
            newHdr = "Requested Date"
            
            // tblHdr.scope = "col"
            // tblHdr.innerText = reqProp
            // tblHdrRow.append(tblHdr);
        }
        else if(reqProp == "notes"){

            shouldAppend = false

        }
        else if(reqProp == "presentation"){
           
            shouldAppend = false
        }
        else if(reqProp == "certUpLoad"){
            shouldAppend = false
        }
        else if(reqProp == "lastUpdatedById"){

            shouldAppend = false
            
          
        }
        else if(reqProp == "lastupdatedDate"){

            shouldAppend = false

          
            
        }
        else if(reqProp == "event"){

            shouldAppend = true
            newHdr = "Event"
            
        }
        else if(reqProp == "amounttobereimbursed"){
            
            shouldAppend = true;
            newHdr = "Reimbursement Amount"
        }

        if(shouldAppend){


            tblHdr.scope = "col"
            tblHdr.innerText = newHdr
            tblHdrRow.append(tblHdr);
        }

        
    }
    
    tblHead.append(tblHdrRow);


        let tbleBody = document.createElement("tbody");


        for(x = 0; x<=allUserRequests.length; x++){
            
            let reqRow = document.createElement("tr");
            w = 0;

            for (key in allUserRequests[x]) {
                
                
                let reqTd = document.createElement("td")
                  

                if(w==4){





                    var currentdate = new Date(allUserRequests[x][key]); 
                    var datetime = currentdate.getFullYear() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getDate()

                    var dayagain = currentdate.getDate();
                    if(dayagain.length = 1){
                    dayagain="0"+dayagain;
                    }

                    var monthagain = currentdate.getMonth()+1;
                    if(monthagain.length = 1){
                    monthagain="0"+monthagain;
                    }

                    var yearagain = currentdate.getFullYear();

                    let finaldate = yearagain +"-"+monthagain+"-"+dayagain



                    // let daDate = new Date();

                    // let evdate = allUserRequests[x][key];

                    // let testDate = allUserRequests[x]["eventDate"]
                    // let testTime = allUserRequests[x]["eventTime"]
                    
                    // let dateInput = document.getElementById("dateInput").value;
                    // let timeInpt = document.getElementById("timeInpt").value;
                    
                    // alterDateIncoming(testDate,testTime)

                    // daDate.setDate(daDate.getDate(evdate)+36)
                    
                    reqTd.innerText =finaldate;
                    reqRow.append(reqTd);

                }else if(w == 0){

                }else if(w == 1){

                }else if(w == 5){

                }else if(w == 6){

                }else if(w == 7){

                }else if(w == 8){

                }else if(w == 9){

                }else if(w == 10){
                    reqEvent = allUserRequests[x][key];
                    reqEventToMap = allUserRequests[x][key];

                    let eventButt = document.createElement("button");
                        eventButt.type="button"
                        eventButt.className="btn btn-primary"
                        eventButt.setAttribute('data-bs-toggle',"modal")
                        eventButt.setAttribute('data-bs-target',"#exampleModal")
                        eventButt.innerText = "View Event";                    
                        eventButt.id = x;


                        eventButt.onclick=(e)=>{

                            let idder = document.getElementById(e.target.id)
                            let id = eventButt.id;
                            let req = allUserRequests[id];
                            let reqEv = req.event;

                            updateEvent(reqEv);
                            updatereqVar(req);
                            // setupModal();
                            setupModalAgain();



                            // updateEvent(reqEv);
                            // // setupModal();
                            // setupModalAgain();
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


async function removeAllReqhandler(){
    let tableParentDiv = document.getElementById("RequestTableDiv");

}


function testPen(e){
    // console.log(e.id)
    let elID = e.id;
    let elClass = e.className;
    elID = elID.replace("Pen","");
    // console.log(elID);

    let Lbl = "Lbl";
    let Inpt = "Inpt";

    let elLBLID = elID + Lbl;
    let elInptID = elID + Inpt;
    // let field = elId;


    let lblEl = document.getElementById(elLBLID);
    console.log(elLBLID)
    let inptEl = document.getElementById(elInptID);


    let lblTog = lblEl.classList.toggle("Iamoff");



    console.log(lblTog)
    // modalEventShowing 

    if(lblTog){

        lblEl.classList.toggle("Iamoff",true);
        // lblEl.classList.toggle("IamOn",false);


        inptEl.classList.toggle('Iamoff',false);
        // inptEl.classList.toggle('IamOn',true);


    }else{

        lblEl.classList.toggle("Iamoff",false);
        // lblEl.classList.toggle("IamOn",true);

        inptEl.classList.toggle('Iamoff',true);
        
    }


  
    
    

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


        }else if(elID =="eventType"){



            let percamnt ="0"
            switch(newVal) {
                case newVal = "University Courses":
                    // code block
                    newVal = "UNIVERSITYCOURSES"
                    percamnt =".80"
                break;
                case newVal = "Seminars":
                    // code block
                    newVal = "SEMINARS"
                    percamnt =".60"
                break;
                case newVal = "Certification Preparation Classes":
                    // code block
                    newVal = "CERTIFICATIONPREPCLASSES"
                    percamnt =".75"
                    
                    break;
                case newVal = "Certification":
                    // code block
                    newVal = "CERTIFICATION"
                    percamnt ="1"
                    break;
                case newVal = "Technical Training":
                    // code block
                    newVal = "TECHNICALTRAINING"
                    percamnt =".90"
                break;
                case newVal = "Other":
                    // code block
                    newVal = "OTHER"
                    percamnt ="0"
                break;
                // default:
                // code block
            }

            reqEvent[column] = newVal;
            reqEvent["eventreimburesmentperc"] = percamnt
            // reqVar[column] = newVal;
            // reqVar.amounttobereimbursed = newVal;

            reqVar.event = reqEvent;
            // console.log(elID)


            let answ = await updateRequest(reqVar);
            console.log(answ);



            console.log(reqVar);
            inptEl.setAttribute("disabled","disabled")
            let reimbu = document.getElementById("eventReimburesmentPercInpt")
            reimbu.value = percamnt;

        }else if(elID =="eventReimburesmentPerc"){

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





function createRequest(){


    
    let eeId = document.getElementById("eeid").value;
    let first_name=document.getElementById("first_name").value;
    let last_name=document.getElementById("last_name" ).value;

    eeFinMangrID = document.getElementById("eeFinMngrId").value

    //Event Elements
    let eventName = document.getElementById("evntNameInput").value;
    
    let dateInput=document.getElementById("dateInput").value;
    let timeInpt = document.getElementById("timeInpt");


    var currentdate = new Date(dateInput);
    var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

    console.log(datetime);

    console.log(timeInpt.value)
    let timeinptval = timeInpt.value
    timeinptval = timeinptval + ":00"
   
    // // HANDLE THE DATE AND TIME FIELD
    // const dateStr = dateInput+ " " + timeInpt;
    
    // const newString = dateStr.replace("-","/").replace("-","/");
    // const [dateRelated, timeRelated] = newString.split(' ');

    // // timeRelated = timeRelated.replace("-","/");
    // console.log(dateRelated); // 👉️ "06/24/2022"
    
    // console.log(timeRelated); // 👉️ "09:30:05"

    // const myArray = dateRelated.split("/")

    // myArray[0]
    
    // const year = myArray[0];
    // const month = myArray[1];
    // const day = myArray[2];
    // console.log("year " + year)
    // console.log("month " + month)
    // console.log("day " + day)
    // const constMyNewDate = `${month}/${day}/${year}`;

    // // console.log("here is my newDate " + constMyNewDate)
    // const [monthdos, yeardos, daydos] = constMyNewDate.split('/');
    // const [hours, minutes, seconds] = timeRelated.split(':');

    // const date2 = new Date(+year, month - 1, +day, +hours, +minutes, +seconds);
    // const date3 = new Date(+year, month - 1, +day);
    // // console.log(date2); // 👉️ Fri Jun 24 2022 09:30:05
    // console.log(date2)
    // reqVar
    // reqEvent.eventDate = date2;
    // 👇️ Get timestamp
    // const timestamp = date2.getTime();
    // const evntDate = date2.getDate();
    
    // console.log("I am time stamp " + evntDate)
    
    
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
    let percamnt ="0"
    switch(evntType) {
        case evntType = "University Courses":
          // code block
          evntType = "UNIVERSITYCOURSES"
          percamnt =".80"
          break;
        case evntType = "Seminars":
          // code block
          evntType = "SEMINARS"
          percamnt =".60"
          break;
        case evntType = "Certification Preparation Classes":
            // code block
            evntType = "CERTIFICATIONPREPCLASSES"
            percamnt =".75"
            
            break;
        case evntType = "Certification":
        // code block
            evntType = "CERTIFICATION"
            percamnt ="1"
            break;
        case evntType = "Technical Training":
            // code block
            evntType = "TECHNICALTRAINING"
            percamnt =".90"
        break;
        case evntType = "Other":
        // code block
            evntType = "OTHER"
            percamnt ="0"
            break;
        // default:
          // code block
      }

    //   console.log("here is evntType " + evntType);

    let wrjInpt=document.getElementById("wrjInpt").value; 
    let eventDescript = document.getElementById("evntDescriptInput").value;

    let user = JSON.parse(sessionStorage.getItem("user"));


    console.log(timeInpt);

    let newTiem = new Date(timeInpt);
    let newTimeHr = newTiem.getHours();
    let newTimeMin = newTiem.getMinutes();
    let newTimeSec = newTiem.getSeconds();
    finallyTimer = timeInpt + ":00"

    // let finallyTimer = newTimeHr +":" + newTimeMin + ":" +newTimeSec
    console.log(newTiem)
    console.log(newTimeHr.toString)
    // newTiem.getTime()

    let percentage = percamnt.valueOf();
    let amnttoreimb= costInpt * percentage;

    

    let Evnt={
        eventName:eventName,
        eventDate:dateInput,
        // eventTime:timeInpt,
        eventTime:timeinptval,
        eventLocation:locationInpt,
        eventDescription:eventDescript,
        eventTotalCost:costInpt,
        eventGradingFormat:gradeSel,
        workRelatedJustification:wrjInpt,
        eventType:evntType,
        eventReimburesmentPerc:percamnt,
        instructor:null,
        
 

    }

    var currentdate = new Date(); 
    var datetime = currentdate.getFullYear() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getDate()

    var dayagain = currentdate.getDate();

    + (currentdate.getMonth()+1)  + "/" 
    + currentdate.getFullYear() + " @ "  
    + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds();




    if(dayagain.length = 1){
        dayagain="0"+dayagain;
    }

    var monthagain = currentdate.getMonth()+1;
    if(monthagain.length = 1){
        monthagain="0"+monthagain;
    }

    var yearagain = currentdate.getFullYear();

    let hrAgain = currentdate.getHours();
    let minAgain = currentdate.getMinutes();
    let secAgain = currentdate.getSeconds();

    let finalTime = hrAgain + ":" + minAgain + ":" +secAgain

    let finaldate = yearagain +"-"+monthagain+"-"+dayagain
               
    let Timzy = finaldate + " " + finalTime

    let finalTimzy = new Date(yearagain,monthagain,dayagain,hrAgain,minAgain,secAgain)
    finalTimzy = finalTimzy.toISOString();
    console.log(finalTimzy)
                
    let Reqst={
        reqId:null,
        reqForID:user.id,
        reqStatus:"pending",
        assignedFinanceMngrId:eeFinMangrID,
        // requestedDate: null,
        requestedDate: finaldate,
        // requestedDate: Date = new Date().getDate(),
        lastUpdatedById:eeId,
        notes:null,
        presentation:null,
        certUpLoad:null,
        event:Evnt,
        lastupdatedDate:finalTimzy,
        amounttobereimbursed:amnttoreimb
    }
    


    console.log(Reqst)
    Reqst = JSON.stringify(Reqst);

    sendRequesttoDB(Reqst)




}


async function sendRequesttoDB(Reqst){

    // let eeId = Reqst.reqForID;
    let eeId=user.id

    let response = await fetch(`${baseURL}users/${eeId}/requests`,{
        method:'POST',
        header:{'Content-Type': 'application/json'},
        // header:{'cors':'no-cors'},
        body:Reqst
        
    });

    if (response.status === 200) {
    
        let data = await response.json();
        let dataStrng = JSON.stringify(data)
        console.log(data);
        console.log("You Created a new request")

        

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

function editModalFields(){

}



function viewReqsHandler(){

    let viewReqsButt = document.getElementById("ViewOpnReqButt");
    let viewReqs = document.getElementById("viewRequestTop");

    let createReqsButt = document.getElementById("createReqButt");
    let createReqs = document.getElementById("addRequestTop");
    

    if(viewReqsOpen == false && createReqsOpen == false ){

        viewReqsOpen=true;
        viewReqs.classList.toggle("off")
        viewReqs.classList.add("on")


    }else if(viewReqsOpen == false && createReqsOpen == true ){
        
        viewReqsOpen=true;
        createReqs=false;

        viewReqs.classList.toggle("off")
        viewReqs.classList.toggle("on")

        createReqs.classList.toggle("off")
        // createReqs.classList.toggle("off")

        

        
    }



    
    
}


async function tester(){

    let testDiv = document.getElementById("testDiv")

    let template = "../CreateEmployee.html"
    // let template = Element
     
        
        render(template,testDiv)

}


function addReqsHandler(){
    let createReqsButt = document.getElementById("createReqButt");
    let createReqs = document.getElementById("addRequestTop");

    let viewReqsButt = document.getElementById("ViewOpnReqButt");
    let viewReqs = document.getElementById("viewRequestTop");

    if(createReqsOpen == false && viewReqsOpen == false){
        
        createReqsOpen=true;
        createReqs.classList.toggle("off")
        createReqs.classList.toggle("on")



    }else{
        
        createReqs.classList.toggle("off")
        createReqs.classList.toggle("on")

        // createReqs.classList.toggle()


        createReqsOpen=true;
        viewReqsOpen=false;

        viewReqs.classList.toggle("off")
        viewReqs.classList.toggle("on")


    }



}


async function setUpFinanceManagersSubmitReqBox(){
    getAllFinanceManagers()
}


function setupAgain(){
    setup();
}

function setup(){
    setErrUpTest();

    setupEE();
    

    allRequestsHandler();
    setErrUp("FortheNav",user.role);
    // setErrUp("main_div",user.role);
    // main_div
    // setupNav("FortheNav",user.role);
    // setUpFinanceManagersSubmitReqBox();
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

var OpenFormDivId =""


function closeRequestEditOne (){


    let newFormDiv = document.getElementById("newFormDiv");
    OpenFormDivId = "viewRequestTop"
   




    let formToReShow = document.getElementById(OpenFormDivId);

    newFormDiv.classList.toggle("off");
    formToReShow.classList.toggle("off")
}






// const myModalElement = `<div class="modal" tabindex="-1">
//     <div class="modal-dialog">
//     <div class="modal-content">
//     <div class="modal-header">
//     <h5 class="modal-title">Modal title</h5>
//     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//     </div>
//     <div class="modal-body">
//     <p>Modal body text goes here.</p>
//     </div>
//     <div class="modal-footer">
//     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//     <button type="button" class="btn btn-primary">Save changes</button>
//     </div>
//     </div>
//     </div>
//     </div>`

    







// PENDING("Pending"),
// PENDINGAINFE("Pending -AINFE-"),//-Additional Information Needed From Employee -
// CONFIRMEDPENDING("Confirmed Pending"),// this means that the finance manager has confirmed it and waiting for course completion.
// CONFIRMEDPEAF("Confirmed PEAF"),// This means that the finance manager has confirmed it and waiting for course completion and it is exceeding available funds.
// CONFIRMED("Confirmed"), // This means it is confirmed and everything is done.
// //exceeding available funds
// CONFIRMEDEAF("Confirmed EAF"),// This means it is confirmed and everything is done, and there is exceeding available funds.
// DENIED("Denied");