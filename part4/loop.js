// let num = 0
// let i =1
// while(i <= 5){
//    num += i;
//    i++
// }
// console.log(num)

//write an while loop that count down form 5 to 1  and stores  the number  in an array named "countdown"

// let countdown =[]
// let st = 5

// while(st>=0){
//    countdown.push(st)
//    st--
// }
// console.log(countdown)

// write a code using do while looop

// let teacollection =[]
// let tea

// do {
//    tea = prompt(`enter the tea name type( ) `)

//    if(tea !=="stop"){
//       teacollection.push(tea)
//    }
      
// }while(tea !=="stop")


// write a program using for loop to multiply all element in given array 
let num = [1,2,3,4,5]
let ans = 1;
for(let i = 0 ; i<num.length; i++){
     
   ans = ans*num[i];
}
console.log(ans)


let cites = ["mumbai", "paris","london" ,"dubai" ]
let newcities =[]
for(let i =0  ; i<cites.length; i++){
   const mycities = cites[i]
    newcities.push(mycities)
}
//console.log(newcities)


/// write a program  to stop a storing  when you find "chai"

let tea = ["massla chai", "balck chai ","chai" ," green chai"  ]
const newtea =[]
for(let i =0 ; i<tea.length; i++){
   if(tea[i]==='chai'){
      break;
   }
   else {
       newtea.push(tea[i])
   }
   //console.log(newtea)
}

let tea2 = ["massla chai", "balck chai ","chai" ," green chai"  ] 
const newtea2 = []
for(let i =0 ; i<tea.length; i++){
   if(tea2[i]==='chai'){
      continue;
   }
    newtea2.push(tea2[i])
}
//console.log(newtea2)


let tea21 = ["massla chai", "black chai ","chai" ," green chai"  ] 
const ans1 =[]
for(const val  of tea21){
   if(val === "chai"){
      continue ;
   }
   ans1.push(val)
}
//console.log("new tea :"+ans1)


//[for in] loop in obejct
let cites1 ={
   "mumbai": 12033,
   "gao"   : 6000,
   "delhi" :20344,
   "Bangluru":242422

}
const ans32 = {}
for(const val2 in cites1){
   
}
//console.log(cites1)


let largescites24 = {
   "mumbai":1202,
   "uttarpradesh":30000,
   "gao": 10000,
   "noida":12000010
}
let smallcites={}
for(const val in largescites24){
   if( largescites24[val]>120000){
      continue;
   }
   smallcites[val] = largescites24[val]
}
//console.log(smallcites)


// for each loop //
let collectionTea =["black-tea", "green-tea", "chai", "oolgong tea"]
let availabletea =[]

collectionTea.forEach(function (tea){
        if(tea === 'chai'){
         return;
        }
        availabletea.push(tea)
});
// console.log(availabletea)

let value =[2,5,7,9]
let doubleNumber =[]
for(let i =0 ; i<value.length; i++){
   if(value[i]===7){
      continue;

   }
  doubleNumber.push(value[i]*2)
}
//console.log(doubleNumber)


//write a program  to stop an array if the length string is greater than 10
let chai = ["black chai"," greenchai", "massal chai", "Noramlchai","tanduri-chai"]
let newchai=[]
for(const val of chai){
    if(val.length>10){
      break;
    }
    newchai.push(val)
}
console.log(newchai)