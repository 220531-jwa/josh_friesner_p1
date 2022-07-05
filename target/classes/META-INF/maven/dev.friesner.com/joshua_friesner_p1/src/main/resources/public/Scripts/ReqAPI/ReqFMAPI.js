

    // let userReqFMAPI = localStorage.getItem("user");
    var user = localStorage.getItem("user");
    // var daUSerID = user.id;
    let ReqbaseURL = `http://localhost:8082/users/`

    var allUserRequestsAPI = []
    var allAssignedRequests = []
    var allTheRequests = [];

    var eventVar = {
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


    async function updateEventVar(incomingEventObjFromDB){

        Object.keys(incomingEventObjFromDB).forEach((key, index) => {
            eventVar[key] = incomingEventObjFromDB[key];
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
        event:eventVar,
        amounttobereimbursed:null,
        
    }


    async function updateEventVar(incomingReqObjFromDB){

        Object.keys(incomingReqObjFromDB).forEach((key, index) => {
            reqVar[key] = incomingReqObjFromDB[key];
        });

    }




    async function createRequest(request) {
        // post
        // Requests req = ctx.bodyAsClass(Requests.class);
        
        // Requests r = reqS.createRequest(req);
        
        
        // ctx.json(r);
        // ctx.status(200);
    }

    async function getRequestById_FNMngr(reqid) {
        let daUSerID=user.id

        let urlfirstprt = `${daUSerID}/request/fnmngr`

        let url = `${ReqbaseURL}${urlfirstprt}/getbyId/${reqid}`
        // ${ReqbaseURL}users/${eeId}/requests/fnmngr/

        let response = await fetch(url,{
            method:'GET',
            header:{'Content-Type': 'application/json'},
            // header:{'cors':'no-cors'},
            // body:Reqst
            
        });

        if (response.status === 200) {
        
            let data = await await response.json();
            let request = data;

            return request;


            
        } else {

            console.log("There was no data")
            /*
                Handle error
            */
        }
        //get {id} in path
        
        // int reqID = Integer.parseInt(ctx.pathParam("reqid"));
        // Requests r = reqS.getRequestById(reqID);
        // ctx.json(r);
        // ctx.status(200);
    }









    async function getAllFNMNGRRequest(userId){
        // getallfnmngrrequests

        let daUSerID=user.id
        //get
        let urlfirstprt = `${daUSerID}/requests/fnmngr`
        let urlEnding = `/getallfnmngrrequests`

        let url = `${ReqbaseURL}${urlfirstprt}${urlEnding}`

        let response = await fetch(url,{
           method:'GET',
           header:{'Content-Type': 'application/json'},
           // header:{'cors':'no-cors'},
           // body:Reqst
           
       });




       if (response.status === 200) {
       
           let data = await await response.json();
           let requests = data;

           for(u = 0; u<requests.length; u++){

               allAssignedRequests.push(requests[u]);

           }
       

           return allAssignedRequests;


           
       } else {

           console.log("There was no data")
           /*
               Handle error
           */
       }
    }



    async function getAllAssignedRequests(fnmngrID){

         //get
         let daUSerID=user.id
         let urlfirstprt = `${daUSerID}/requests/fnmngr`

         let url = `${ReqbaseURL}/${urlfirstprt}/getallassigned`
 
         

         let response = await fetch(url,{
            method:'GET',
            header:{'Content-Type': 'application/json'},
            // header:{'cors':'no-cors'},
            // body:Reqst
            
        });

        // var allUserRequestsAPI = []
    
    // var allTheRequests = [];


        if (response.status === 200) {
        
            let data = await await response.json();
            let requests = data;

            for(u = 0; u<requests.length; u++){

                allAssignedRequests.push(requests[u]);

            }
        

            return allAssignedRequests;


            
        } else {

            console.log("There was no data")
            /*
                Handle error
            */
        }

    }

    async function getAllRequests(){

        let daUSerID=user.id
        //get
        // let urlfirstprt = `${daUSerID}/request/fnmngr`
        // let urlEnding = `/getallfnmngrrequests`



        let urlfirstprt = `${daUSerID}/requests/fnmngr`

        let url = `${ReqbaseURL}${urlfirstprt}/getallrequests`

        
         
         let response = await fetch(url,{
            method:'GET',
            header:{'Content-Type': 'application/json'},
            // header:{'cors':'no-cors'},
            // body:Reqst
            
        });

        if (response.status === 200) {
        
            let data = await await response.json();
            let requests = data;

            for(u = 0; u<requests.length; u++){

                allTheRequests.push(requests[u]);

            }
        
            return allUserRequestsAPI;


            
        } else {

            console.log("There was no data")
            /*
                Handle error
            */
        }
    }











    async function getgetbyIdFNMNGR(){
        
    }


    // async function getAllRequests(eeId) {
    //     //get
    //     let response = await fetch(`${ReqbaseURL}users/${eeId}/requests/all`,{
    //         method:'GET',
    //         header:{'Content-Type': 'application/json'},
    //         // header:{'cors':'no-cors'},
    //         // body:Reqst
            
    //     });

    //     if (response.status === 200) {
        
    //         let data = await await response.json();
    //         let requests = data;

    //         for(u = 0; u<requests.length; u++){

    //             allUserRequestsAPI.push(requests[u]);

    //         }
        

    //         return allUserRequestsAPI;


            
    //     } else {

    //         console.log("There was no data")
    //         /*
    //             Handle error
    //         */
    //     }
    // }

    //getAllRequestsByEEIds



    async function getAllRequestsByEEId(eeId){

        let url = `${ReqbaseURL}users/${eeId}/requests`
        console.log(url)
        let response = await fetch(url,{
            method:'GET',
            header:{'Content-Type': 'application/json'},
            // header:{'cors':'no-cors'},
            // body:Reqst
            
        });

        if (response.status === 200) {
        
            let data = await response.json();
            let requests = data;

            for(u = 0; u < requests.length; u++){

                allUserRequestsAPI.push(requests[u]);

            }
        

            return allUserRequestsAPI;


            
        } else {

            console.log("There was no data")
            /*
                Handle error
            */
        }


    };



    async function getAllReqByFinanceMngrId(fnmngrId) {


        let daUSerID=user.id
        let urlfirstprt = `${ReqbaseURL}${daUSerID}/requests/fnmngr`

        let url = `${urlfirstprt}/getallrequests`


        let response = await fetch(url,{
            method:'GET',
            header:{'Content-Type': 'application/json'},
            // header:{'cors':'no-cors'},
            // body:Reqst
            
        });

        if (response.status === 200) {
        
            let data = await await response.json();
            let requests = data;

            // var allUserRequestsAPI = []
            // var allAssignedRequests = []
            // var allTheRequests = [];

            for(u = 0; u<requests.length; u++){

                allUserRequestsAPI.push(requests[u]);

            }
        
            console.log("Here are all EE Requests Assigned")
            console.log(allUserRequestsAPI)
            return allUserRequestsAPI;


            
        } else {

            console.log("There was no data")
            /*
                Handle error
            */
        }

        // get {FINMNGRID}
        
        // int fmID = Integer.parseInt(ctx.pathParam("fmID"));
        // User u = us.getUserById(fmID);
        
        // List<Requests> listReqs = reqS.getAllReqByFinanceMngrId(fmID);
        // ctx.json(listReqs);
        // ctx.status(200);
    }




    // Updates
    async function updateStatus(request) {

        let reqID = request.reqId

        let response = await fetch(`${ReqbaseURL}users/${fnmngrId}/requests/${request.reqId}/status`,{
            method:'PATCJ',
            header:{'Content-Type': 'application/json'},
            // header:{'cors':'no-cors'},
            body:request
            
        });

        if (response.status === 200) {
        
            let data = await await response.json();
            let requests = data;

            for(u = 0; u<requests.length; u++){

                allUserRequestsAPI.push(requests[u]);

            }
        

            return allUserRequestsAPI;


            
        } else {

            console.log("There was no data")
            /*
                Handle error
            */
        }

        
        //patch
        
        // int reqID = Integer.parseInt(ctx.pathParam("reqid"));
        // Requests req = ctx.bodyAsClass(Requests.class);
        // String statusUpdate = req.getReqStatus();
        
        // Requests r = reqS.updateStatus(reqID,statusUpdate);
        // ctx.json(r);
        // ctx.status(200);
    }




// patch
    async function patchRequest(request) {

        
        //post
        
        // int reqID = Integer.parseInt(ctx.pathParam("reqID"));
        // Requests req = ctx.bodyAsClass(Requests.class);
        
        // Requests r = reqS.patchRequest(req);
        // ctx.json(r);
        // ctx.status(200);
        
    }
    
    
    
  
     
     
     
  
        
        
    
    async function patchReqEventType(request) {
//			patchUserFirstName(int id, String newFirstName, User u)
        
        // Requests incomingReq = ctx.bodyAsClass(Requests.class);
        // EventModel event = incomingReq.getEvent();
        // String eventType = event.getEventType();
        // int id = incomingReq.getReqForID();
        
        // Requests r = reqS.patchReqEventType(id,eventType,incomingReq);

        
        // ctx.json(r);
        // ctx.status(200);
        
    }
    


// ******************************************************************************88
    
    // Updates
    async function updateRequestNotes(request) {

        // "/updatenotes"
        let reqID = request.reqId

        let response = await fetch(`${ReqbaseURL}users/${fnmngrId}/requests/${request.reqId}/updatenotes`,{
            method:'PATCH',
            header:{'Content-Type': 'application/json'},
            // header:{'cors':'no-cors'},
            body:request
            
        });

        if (response.status === 200) {
        
            let data = await await response.json();
            let requests = data;

            for(u = 0; u<requests.length; u++){

                allUserRequestsAPI.push(requests[u]);

            }
        

            return allUserRequestsAPI;


            
        } else {

            console.log("There was no data")
            /*
                Handle error
            */
        }
     
    }
    
    async function updateEventGradingFormat(request) {
        //patch

        "/updategrading"
           let reqID = request.reqId

        let response = await fetch(`${ReqbaseURL}users/${fnmngrId}/requests/${request.reqId}/updategrading`,{
            method:'PATCH',
            header:{'Content-Type': 'application/json'},
            // header:{'cors':'no-cors'},
            body:request
            
        });

        if (response.status === 200) {
        
            let data = await await response.json();
            let requests = data;

            for(u = 0; u<requests.length; u++){

                allUserRequestsAPI.push(requests[u]);

            }
        

            return allUserRequestsAPI;


            
        } else {

            console.log("There was no data")
            /*
                Handle error
            */
        }
      
    }

    async function updateWorkRelatedJustification(request) {
        //patch
        // "/updatewrj"
        let reqID = request.reqId

        let response = await fetch(`${ReqbaseURL}users/${fnmngrId}/requests/${request.reqId}/updatewrj`,{
            method:'PATCH',
            header:{'Content-Type': 'application/json'},
            // header:{'cors':'no-cors'},
            body:request
            
        });

        if (response.status === 200) {
        
            let data = await await response.json();
            let requests = data;

            for(u = 0; u<requests.length; u++){

                allUserRequestsAPI.push(requests[u]);

            }
        

            return allUserRequestsAPI;


            
        } else {

            console.log("There was no data")
            /*
                Handle error
            */
        }
        // int reqID = Integer.parseInt(ctx.pathParam("reqid"));
        // Requests req = ctx.bodyAsClass(Requests.class);
        // EventModel event = req.getEvent();
        // String eventGrading = event.getWorkRelatedJustification();
        // String reqUpdater = eventGrading;
        
        // Requests r = reqS.updateWorkRelatedJustification(reqID,reqUpdater,req);
        // ctx.json(r);
        // ctx.status(200);
    }



    async function updateRequest(request) {
        //patch


        let reqID = request.reqId
        let fnmngrId = user.id

        let daUSerID=user.id
     

        console.log(request)

        let urlfirstprt = `${daUSerID}/requests/fnmngr`

        let url = `${ReqbaseURL}${urlfirstprt}/getbyId/${reqID}/update`
        // http://localhost:8082/users/137/requests/fnmngr/getbyId/8/update
        // http://localhost:8082/users/137/requests/fnmngr/3/update 

        request = JSON.stringify(request)
        let response = await fetch(url,{
            method:'PATCH',
            header:{'Content-Type': 'application/json'},
            // header:{'cors':'no-cors'},
            body:request
            
        });

        if (response.status === 200) {
        
            let data = await await response.json();
            let requests = data;

            // for(u = 0; u<requests.length; u++){

            //     allUserRequestsAPI.push(requests[u]);

            // }
        

            return requests;


            
        } else {

            console.log("There was no data")
            /*
                Handle error
            */
        }
        

    }

    async function updateEventReimburesmentPerc(request) {
        //patch


        let reqID = request.reqId

        let response = await fetch(`${ReqbaseURL}users/${fnmngrId}/requests/${request.reqId}/updateEvntReimbsPerc`,{
            method:'PATCH',
            header:{'Content-Type': 'application/json'},
            // header:{'cors':'no-cors'},
            body:request
            
        });

        if (response.status === 200) {
        
            let data = await await response.json();
            let requests = data;

            for(u = 0; u<requests.length; u++){

                allUserRequestsAPI.push(requests[u]);

            }
        

            return allUserRequestsAPI;


            
        } else {

            console.log("There was no data")
            /*
                Handle error
            */
        }
        
        // int reqID = Integer.parseInt(ctx.pathParam("reqid"));
        // Requests req = ctx.bodyAsClass(Requests.class);
        // EventModel event = req.getEvent();
        // String eventGrading = event.getEventReimburesmentPerc();
        // String reqUpdater = eventGrading;
        
        // Requests r = reqS.updateWorkRelatedJustification(reqID,reqUpdater,req);
        // ctx.json(r);
        // ctx.status(200);
    }

    async function updateInstructor(request) {
        //patch


        let reqID = request.reqId

        let response = await fetch(`${ReqbaseURL}users/${fnmngrId}/requests/${request.reqId}/updateInstructor`,{
            method:'PATCH',
            header:{'Content-Type': 'application/json'},
            // header:{'cors':'no-cors'},
            body:request
            
        });

        if (response.status === 200) {
        
            let data = await await response.json();
            let requests = data;

            for(u = 0; u<requests.length; u++){

                allUserRequestsAPI.push(requests[u]);

            }
        

            return allUserRequestsAPI;


            
        } else {

            console.log("There was no data")
            /*
                Handle error
            */
        }
        
        // int reqID = Integer.parseInt(ctx.pathParam("reqid"));
        // Requests req = ctx.bodyAsClass(Requests.class);
        // EventModel event = req.getEvent();
        // String eventGrading = event.getInstructor();
        // String reqUpdater = eventGrading;
        
        // Requests r = reqS.updateInstructor(reqID,reqUpdater,req);
        // ctx.json(r);
        // ctx.status(200);
    }


    async function updateAmountToBeReimbursed(request) {
        //patch
        let reqID = request.reqId

        let response = await fetch(`${ReqbaseURL}users/${fnmngrId}/requests/${request.reqId}/updateAmountToBeReimbursed`,{
            method:'PATCH',
            header:{'Content-Type': 'application/json'},
            // header:{'cors':'no-cors'},
            body:request
            
        });

        if (response.status === 200) {
        
            let data = await await response.json();
            let requests = data;

            for(u = 0; u<requests.length; u++){

                allUserRequestsAPI.push(requests[u]);

            }
        

            return allUserRequestsAPI;


            
        } else {

            console.log("There was no data")
            /*
                Handle error
            */
        }
        
        // int reqID = Integer.parseInt(ctx.pathParam("reqid"));
        // Requests req = ctx.bodyAsClass(Requests.class);
        // EventModel event = req.getEvent();
        // String eventGrading = event.getInstructor();
        // String reqUpdater = eventGrading;
        
        // Requests r = reqS.updateAmountToBeReimbursed(reqID,reqUpdater,req);
        // ctx.json(r);
        // ctx.status(200);
    }

    
    
    


