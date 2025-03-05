function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let success = false;
            if(success){
                resolve("Data Fecteched successfully")

            }else{
                reject("Error Fetching Data");
            }
        }, 3000);
    });
}
// let response = fetchData();
// console.log(response);
fetchData()
     .then((data) => console.log(data))
     .catch((error) => console.error(error))