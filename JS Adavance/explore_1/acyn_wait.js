function fetchUserData(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            reject({name : "tanu ", url:"https://www.google.com"})
        }, 3000);
    })
}
async function getUserData(){
    try{
        console.log("Fetching user data....");
        const userData = await fetchUserData()
        console.log("User data", userData);
    }
    catch(error){
        console.log("Erroe fetching Data",error);
    }
}
getUserData();