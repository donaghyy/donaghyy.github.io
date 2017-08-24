"use strict";

var personObject = {
    name: "David",
    age: 22,
    occupation: "Software Dev"
};

function displayObject(personObject){
    var ans =(personObject.name + "  -  " + personObject.age + "  -  " + personObject.occupation);
    window.alert(ans);
}

function increaseAge(){
    return personObject.age = personObject.age +1;
}

function createPerson(){
    personObject.name = document.getElementById("personName").value,
    personObject.age = document.getElementById("personAge").value,
    personObject.occupation = document.getElementById("personOccupation").value
}

var strings1 = "He said: &quotMy name is Elliott&quot";
function convertUpper(str){
    var caps = str.toUpperCase();
    
    window.alert(caps);
}

function conStringInt(){
    var strConcat = document.getElementById("1stHalfStr").value;
    var intConcat = document.getElementById("2ndHalfInt").value;
    window.alert(strConcat + intConcat);
}

var arrayOfStrings = [" String 1 ", " String 2 ", " String 3 "];
function displayArrayOfStrings() {
    window.alert(arrayOfStrings);
}
function addToArrayOfStrings(){
    var newSTR = document.getElementById("newStringArray").value;
    arrayOfStrings.push(newSTR);
}
function removeLastStr() {
    arrayOfStrings.pop();
}

function checkAge2040(){
    if (personObject.age > 20 && personObject.age < 40){
        window.alert("True: Person is between 20 & 40")
        return true;
    }
    window.alert("False: Person is not between 20 & 40")
    return false;
}

function fizzBuzz(){
    var Word1 = document.getElementById("word1Input").value; 
    var Word2 = document.getElementById("word2Input").value;
    var MaxVal = document.getElementById("maxValInput").value;

    for (var i = 0; i<=MaxVal; i++){
        console.log(i);

        if (i%3 === 0 && i%5 === 0){
            console.log(Word1);
        }
        else if (i%5 === 0){
            console.log(Word2);
        }
        else if (i%3 === 0){
            console.log(Word1+Word2);
        }
    }
}

function iteration4() {
    let iteration4n = document.getElementById("iteration4Input").value;
    
    console.log("Number = "+iteration4n);
    while (iteration4n !==1){
        
        if (iteration4n%3 === 0){
            iteration4n = iteration4n/3;
            console.log("Divisible by 3");
            console.log(iteration4n);
        }
        else if ((iteration4n -1)%3 === 0){
            iteration4n = (iteration4n-1)/3;
            console.log("Subtract 1");
            console.log(iteration4n);
        }
        else if ((iteration4n +1)%3 === 0){
            iteration4n = (iteration4n+1)/3
            console.log("Add 1"); 
            console.log(iteration4n);
        }
        
    }
}

function strings4(){
    var str4 = document.getElementById("strings4Input").value;
    var triples = 0;

    for (var i = 0; i< str4.length-1; i++){
        if(str4.substr(i,1)===str4.substr(i+1,1) && str4.substr(i+1,1)===str4.substr(i+2,1)){
            triples++;
        }
    }
    console.log(triples);
    alert(triples);
}

function dom1Create(){
    var dom1 = document.getElementById("DOM1");
    var para = document.createElement("p");
    para.id = "para";
    dom1.appendChild(para)
}
function chngTag(){
    var node = document.createTextNode(document.getElementById("dom1Input").value);
    document.getElementById("para").appendChild(node);
}
let deletePara = () => {
    var pdel = document.getElementById("para");
    document.getElementById("DOM1").removeChild(pdel);
}

// JSON1
    var url = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var reqData = request.response;
        var squadName = document.createElement('squadName');
        var homeTown = document.createElement('homeTown');
        var formed = document.createElement('formed');
        var secBase = document.createElement('secretBase');
        var active = document.createElement('active');
        var mem1 = document.createElement('mem1');
        var mem2 = document.createElement('mem2');
        var mem3 = document.createElement('mem3');
        
        squadName.textContent = reqData['squadName'];
        homeTown.textContent = reqData['homeTown'];
        formed.textContent = reqData['formed'];
        secBase.textContent = reqData["secretBase"];
        active.textContent = reqData['active'];
        mem1.textContent = reqData['members'][0].name;
        mem2.textContent = reqData['members'][1].name;
        mem3.textContent = reqData['members'][2].name;
        
        document.getElementById("JSON1div").appendChild(squadName); 
        document.getElementById("JSON2div").appendChild(homeTown);
        document.getElementById("JSON3div").appendChild(formed);
        document.getElementById("JSON4div").appendChild(secBase);
        document.getElementById("JSON5div").appendChild(active);
        document.getElementById("JSON6div").appendChild(mem1);
        document.getElementById("JSON7div").appendChild(mem2);
        document.getElementById("JSON8div").appendChild(mem3);
        
        
    }

// JSON2
function king(){   
let url2 = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json";
    let request2 = new XMLHttpRequest();
    request2.open('GET', url2);
    request2.responseType = 'json';
    request2.send();
    request2.onload =()=> {
        let reqData2 = request2.response;

            let kings = reqData2.filter((x) => {
                return x.nm || x.cty || x.hse || x.yrs === document.getElementById("JSON2input").value;
            });
            let json2out = document.createElement("p");
            json2out.id = "json2out";
            json2out.textContent = `Name: ${kings[0].nm} | City: ${kings[0].cty} | House: ${kings[0].hse} | Years in Reign: ${kings[0].yrs}`;

            document.getElementById("JSONdiv2").appendChild(json2out);
            }
        };

    
