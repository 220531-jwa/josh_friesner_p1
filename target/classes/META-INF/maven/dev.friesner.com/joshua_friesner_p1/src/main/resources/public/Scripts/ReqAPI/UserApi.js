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

var userinAPi = localStorage.getItem("user");

let baseURL = "http://localhost:8082/"


async function updateUserJS(incomingUser){

    Object.keys(incomingUser).forEach((key, index) => {
        user[key] = incomingUser[key];
      });
}


async function createUser(userId){

    let response = await fetch(`${baseURL}users/${userId}`,{
        method:'POST',
        header:{'Content-Type': 'application/json'},
        // header:{'cors':'no-cors'},
        body:Reqsts
        
    });

    if (response.status === 200) {
    
        let data = await await response.json();
        let request = data;
        updateUserJS(data);
        return request;


           
    } else {

        console.log("There was no data")
        /*
            Handle error
        */
    }


};


	
	


async function getAllUsers(){

    let response = await fetch(`${baseURL}users/${userId}`,{
        method:'POST',
        header:{'Content-Type': 'application/json'},
        // header:{'cors':'no-cors'},

        
        body:Reqsts
        
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


};



async function updateUser(u){

    updateUserJS(u);
    let userId = user.id;
    let response = await fetch(`${baseURL}users/${userId}`,{
        method:'PATCH',
        header:{'Content-Type': 'application/json'},
        // header:{'cors':'no-cors'},
        body:Reqsts
        
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


};
 

	
// 	public static void updateUser(Context ctx) {
		
// 		User u = ctx.bodyAsClass(User.class);
		
		
		
// 		us.updateUser(u);
// 	}
	
	
// 	public static void patchUser(Context ctx) {
// 		User u = ctx.bodyAsClass(User.class);
		
		
		
// 		us.updateUser(u);
// 	}



	
// 	public static void loginUser(Context ctx) throws FileNotFoundException, IOException, InterruptedException{
		
// 		User u = us.loginUser(ctx);
		
// 		if(u != null) {
// 			System.out.println("here is user inside controller");
// 			System.out.println(u.toString());
// 			ctx.json(u);
// 			ctx.status(200);
// 		}else {
// 			System.out.println("we have error");
// 		}
// //		String username = ctx.queryParam("username");
// //		String passwrd = String.parse(ctx.pathParam("passwrd"));
// //		User loggedInUser = us.getUserByUserName(u);
		
// //		return u;
		
// 	}


// 	public static void patchUserFirstName(Context ctx) {
// //		patchUserFirstName(int id, String newFirstName, User u)
		
// 		System.out.println("made it to controller");
// 		User incomingUser = ctx.bodyAsClass(User.class);
// 		int id = incomingUser.getId();
// 		String fname = incomingUser.getFirst_name();
		
// //		us.patchUserFirstName(0, null, incomingUser)
		
// 		User u = us.patchUserFirstName(id, fname, incomingUser);
		
// 		ctx.json(u);
// 		ctx.status(200);
		
// 	}
	

// 	public static void patchUserReimbursementAmnt(Context ctx) {
// //		patchUserFirstName(int id, String newFirstName, User u)
		
// 		System.out.println("made it to controller");
// 		User incomingUser = ctx.bodyAsClass(User.class);
// 		int id = incomingUser.getId();
// 		float reimb = incomingUser.getReimbursement_amount();
		
// //		us.patchUserFirstName(0, null, incomingUser)
		
// 		User u = us.patchUserReimburesment(id, reimb, incomingUser);
		
// 		ctx.json(u);
// 		ctx.status(200);
		
// 	}
	





// }


async function logout(){
    
    sessionStorage.clear

    let assinger = baseURL+ "../../LoginPage.html";
            console.log("ran here")
            window.location.assign(assinger);

}