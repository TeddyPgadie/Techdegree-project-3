// Puts focus on the first text field when the page load.
//Hide 'Other' from the drop down menu

document.getElementById("name").focus();
document.getElementById("title").children[5].hidden = true;

/*selected the id='color' and inserted a new option 
which will be the main field once the older  
options are set to hidden. */

const select = document.getElementById("color");
const NewOption = document.createElement("option");
NewOption.innerHTML = "Please select a T-shirt theme";
select.appendChild(NewOption).value = "T-shirt Theme";

//Hide the color in the color drop down menu
const SelectAllColor = document.getElementById("color");

console.log(select);

//http://port-80-1kz33o63m2.treehouse-app.com/
