// grade marking
var result = 85;
if(result >0){
    if(result<33){
        console.log("Fail");
    }
    else if(result>=33 && result<40){
        console.log("grade D");
    }
    else if(result>=41 && result<50){
        console.log("grade C");
    }
    else if(result>=51 && result<60){
        console.log("grade B");
    }
    else if(result>=61 && result<70){
        console.log("grade A-");
    }
    else if(result>=71 && result<80){
        console.log("grade A");
    }
    else{
        console.log("A+");
    }
}
else{
    console.log("Not eligible");
}