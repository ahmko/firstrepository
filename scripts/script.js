document.body.style.background = "rgba(222,223,4,0.1)";

let initialValue = document.getElementById('heading1').textContent;

console.log(initialValue);

document.getElementById('heading1').textContent = "Heading";
heading1.textContent = "Roses are red";

let myHeading = document.getElementById('heading1');

myHeading.textContent = "<p>Violets are blue</p>";
myHeading.style.color = "#0000FF";



const myDiv = document.createElement("div");
//const textContent = document.createTextNode("Some content goes here");
//myDiv.appendChild(textContent);
myDiv.innerHTML = "<p>Hello</p>";

const blockEle = document.getElementById("block");
blockEle.textContent = "lorem ipsum"
document.body.insertBefore(myDiv, blockEle);


blockEle.setAttribute("style", "font-size: 2em; color:#AAFF22;");


blockEle.style.cssText = "font-style: italic; letter-spacing: 30px";

function toggleText()
{
    heading1.classList.toggle('hidden');
    blockEle.classList.toggle('hidden');
}


// function add(x=0,y=0){
//     let total = x + y;
//     return total;
// }


// var add = function(x=0,y=0){
//     let total = x + y;
//     return total;
// }


var add = (x=0,y=0) => {
    let total = x + y;
    return total;
}

let total = add(20,5);

console.log(total);


toggleButton.addEventListener('click', toggleText);

//toggleText();


textInput.addEventListener('input', () => {
    console.log(textInput.value);
})

document.body.onload = toggleText();
