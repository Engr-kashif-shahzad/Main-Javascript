

let per=prompt("Enter your percentage:");

if(per>=80 && per<=100){
    document.write("you are in marit");
} else if(per>=60 && per<80){
    document.write("you are in Ist Division");
} else if(per>=45 && per<60){
    document.write("you are in II nd Division");
} else if(per>=33 && per<45){
    document.write("you are in III rd Division");
} else if(per>33){
    document.write("you are Fail");
} else {
    document.write("Please enter Valid Percentage");
}