// Example 1
 
// document
// .getElementById('changeTextButton')
// .addEventListener('click',()=>{
//          console.log(this);
// });


document
  .getElementById("changeTextButton") // access the button
  .addEventListener("click", function () { // add the functionality
    let paragraph = document.getElementById
    ("myParagraph");
    paragraph.textContent = "The paragraph is changed"; // changement show here
});


// Example -2

document
.getElementById("highlightFirstCity")
.addEventListener("click",function () {
  let citiesList =  document.getElementById
  ("citiesList");
  citiesList.firstElementChild.classList.add
  ("highlight");
  
});


// Example -3

document
.getElementById("changeOrder").addEventListener
("click",function(){
    let  coffeeType = document.getElementById("coffeeType");
    coffeeType.textContent = " Espresso";
    coffeeType.style.backgroundColor = "brown"
    coffeeType.style.padding = "5px";

});

//Example - 4 change the name from one name to another

document.getElementById("changeName").addEventListener
("click", function(){
    let nameType  = document.getElementById("nameType");
    nameType.textContent = "Rahul";
    nameType.style.backgroundColor = "brown"
});



// Example -5 adding Element in list
document.getElementById("addNewItem").addEventListener
("click" , function(){
    let newItem = document.createElement("li");
    newItem.textContent = "Eggs";

    document.getElementById("shoppingList").appendChild(newItem);
});


// Example -6 Removing Element form the list

document.getElementById("removeLastTask").addEventListener
("click", function(){

   let taskList = document.getElementById("taskList");
   taskList.lastElementChild.remove();  // the function lastElementChild access the last element of the list


})


// Example - 7 
document.getElementById("clickMeButton").addEventListener
('click', function(){
  alert("Tanu Code");

})

// Example -8 Event  Delegation just slectiing the Tea 
document.getElementById("teaList").addEventListener
("click", function(event){
  console.log(target.event);
  if(event.target && event.target.matches(".teaItem")){
    alert("You Selected : " + event.target.textContent);
  }
});
 
// Example - 9 Form Handling
document
.getElementById("feedbackForm")
.addEventListener("submit", function(event){  
  event.preventDefault(); // prevent page refresh 
  let feedback = document.getElementById
  ("feedbackInput").value;
  console.log(feedback);

  document.getElementById(
    "feedbackDisplay"
  ).textContent = `Feedback is: ${feedback}`;
    
});


// Example 10 DOM Content Loaded
document.addEventListener("DOMContentLoaded",function()
{
  document.getElementById('domStatus').textContent = 
  "DOM fully loaded"
})

// Example - 11 CSS Manipulation
document.getElementById("toggleHeighlight").addEventListener
('click', function(){
  let descriptionText = document.getElementById
  ("descriptionText");
  descriptionText.classList.toggle("highlight");

})