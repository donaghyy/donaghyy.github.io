"use strict";

class car {
    
    car(make, model, miles, regno, complete, faults) {
        this.make = make;
        this.model = model;
        this.miles = miles;
        this.regno = regno;
        this.complete = complete;
        this.faults = faults;
    }
    

    markComplete(){
        this.complete = true;
        console.log(this.make + " Job Complete.");
    }

    getBill(){
        let res = this.miles*0.66;
        console.log(res);
        return res;
    }
}

let car1 = new car ();
car1.make = "Vauxhall";
car1.model = "Corsa";
car1.miles = 3400;
car1.regno = "REG 1234";
car1.complete = true;
car1.faults = ["Bald Tyres ", " Check Engine Light "];

let car2 = new car (); 
car2.make = "Honda";
car2.model = "Civic";
car2.miles = 3000;
car2.regno = "REG 1235";
car2.complete = false;
car2.faults = ["Low Compression ", " Fan Belt "];


let cars = [car1, car2];
let carsCheckedIn = [];
// var currentCar;

function displayCars(){
    if(document.getElementById("pid" || "jbid" || "jbid2") !== null){
        for (let i=0; i<cars.length; i++){
            remove("pid");
            remove("jbid");
            remove("jbid2");
        }
    }
    for(let i = 0; i <cars.length; i++){
        console.log(cars[i].make);
        let res = cars[i].make;
     
        let para = document.createElement('p');
        para.textContent = res;
        para.id = "pid";
        document.getElementById("divCars").appendChild(para); 
    }
}
function remove(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}

function displayFaults(){
    if(document.getElementById("faultsP") !== null){
        remove("faultsP");
    }
    let reg = document.getElementById("inCRegno").value;
    
    var x = cars.filter(a => {
        return a.regno === reg;
        
    });
    
    console.log(x[0].faults);
    let para = document.createElement('p');
    para.textContent = x[0].faults;
    para.id = "faultsP";
    document.getElementById("faultDiv").appendChild(para);
}

function completeJob(){
    let radio = document.getElementById("inComplete");
    let reg = document.getElementById("inCRegno").value;
    
    var x = cars.filter(a => {
        return a.regno === reg;
    });
    
    x[0].markComplete();
    let para = document.createElement('p');
    para.textContent = `${x[0].make} ${x[0].model}  -  Job Complete.`;
    para.id = "jcp";
    document.getElementById("faultDiv").appendChild(para);
    
}

function theConsole(){
    let input = document.getElementById("gConsole").value;
    let cmd1 = "Create car ";
    let cmd2 = "Output garage"
    let cmd3 = "Check out"
    
    if(input.substr(0,11) === cmd1){
        console.log("CREATE CAR");
        let str = input.substr(10, 200);
        let partsOfStr = str.split(',');
        let fault = partsOfStr[4];
        let faultStr = fault.split('/');
        
        createCarConsole(partsOfStr[0], partsOfStr[1], partsOfStr[2], partsOfStr[3], faultStr);
        console.log(partsOfStr);
        console.log(partsOfStr);
    }
    else if(input.substr(0, 13) === cmd2){
        console.log("OUTPUT GARAGE");
        displayCars();
    }
    else if(input.substr(0, 9) === cmd3){
        console.log("CHECK OUT CAR");
        let str = input.substr(10, 200);
        document.getElementById("inCRegno").value = str;
        completeJob();
    
    }
    
}

function displayJobs(){
    if(document.getElementById("jbid" || "jbid2" || "pid") !== null){
        for (let i=0; i<cars.length; i++){
            switch(document.getElementById("jbid" || "jbid2" || "pid") !== null){
            case "jbid"!== null:
            remove("jbid");
            case "jbid2"!== null:
            remove("jbid2");
            case "pid"!== null:            
            remove("pid");
            };
        }
    }
    let jobW = checkJobW();
    let prnt = false;
    for(let i = 0; i <cars.length; i++){
              
        let para = document.createElement('p');
        let para2 = document.createElement('p2');
        var x = cars.filter(a => {
            return a.complete === false;
        });
        
        if(jobW === false){
            prnt = true; 
        }
        else {
            para.textContent = `${x[i].make} ${x[i].model}`;
            para2.textContent = `TO DO: ${x[i].faults} `;
            para.id = "jbid";
            para2.id = "jbid2";
            document.getElementById("divCars").appendChild(para); 
            document.getElementById("divCars").appendChild(para2); 
        }
    }
    if(prnt === true){
        let para = document.createElement('p');
        console.log("All Jobs Complete - nothing to display.")
        para.textContent = "All Jobs Complete - nothing to display.";
        document.getElementById("divCars").appendChild(para); 
    }
}

function checkJobW(){
    let jobWaiting = false;
    for(let i = 0; i<cars.length; i++){
        if (cars[i].complete === false){
            jobWaiting = true;
        }
    }
    if (jobWaiting === true){
        return true;
    } 
    else{
        return false;
    }
}

function testBill(){
    let reg = document.getElementById("inCRegno").value;
    
    var x = cars.filter(a => {
        return a.regno === reg;
        
    });
    console.log(x);
    x[0].getBill();

    let para = document.createElement('p');
    para.textContent = `Total Bill: $${x[0].getBill()}`;
    para.id = "BillP";
    document.getElementById("faultDiv").appendChild(para);
}

//currentCar = selectCar();

function createCar(){
    let c = new car();
    c.make = document.getElementById("inMake").value;
    c.model = document.getElementById("inModel").value;
    c.miles = document.getElementById("inMiles").value;
    c.regno = document.getElementById("inRegno").value;
    c.complete = false;
    c.faults = document.getElementById("inFaults").value;
    cars.push(c);
}

function checkIN(){
    
}

function createCarConsole(make, model, miles, regno, faults){
    let c = new car();
    c.make = make;
    c.model = model;
    c.miles = miles;
    c.regno = regno;
    c.complete = false;
    c.faults = faults;
    cars.push(c);
}




