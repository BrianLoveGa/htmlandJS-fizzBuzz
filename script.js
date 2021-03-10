const start = document.getElementById("start");
const end = document.getElementById("end");
const fizzNumb = document.getElementById("fizz");
const buzzNumb = document.getElementById("buzz");

let goodToGo = false;
let output = [];
let list = document.getElementById("list");

function checkIt() {
  if (fizzNumb.value == buzzNumb.value) {
    goodToGo = false;
    alert("please use different values for fizz and buzz");
  } else if (end.value - start.value >= 4) {
    console.log("okeydokey");
    goodToGo = true;
  } else {
    goodToGo = false;
    alert(
      " The difference between start and end should be greater than 4. Select a value for Fizz and for Buzz greater than zero. "
    );
  }
}

function showIt() {
  checkIt();
  console.log(goodToGo);
  if (goodToGo) {
    for (let i = start.value; i <= end.value; i++) {
      if (i % fizzNumb.value == 0 && i % buzzNumb.value == 0) {
        output.push("FIZZ  BUZZ");
      } else if (i % fizzNumb.value == 0) {
        output.push("fizzz");
      } else if (i % buzzNumb.value == 0) {
        output.push("buzz-buzz ");
      } else {
        output.push(i);
      }
    }
  }

  //let item = document.createElement("li");

  for (x = 0; x < output.length; x++) {
    //var listItem = document.createTextNode(output[x]);
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(output[x]));
    list.append(li);
  }
  console.log(output);
}

function clearIt() {
  console.log("clear");
  //alert("clear");
  output.splice(0, output.length);
  console.log(output);
  console.log("clean");
  list.innerText = "";
}


function someFunc(a,b,c){
  console.log(a);
  console.log(b);
  console.log(c);
}

someFunc(5.0);


let x = null;
let y;

console.log(x==y);
console.log(x===y);