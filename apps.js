let bangla=Number(prompt("Enter Bangla Mark"));
let english=Number(prompt("Enter English Mark"));
let math=Number(prompt("Enter Math Mark"));
let obtainmark=bangl+english+math;
if(bangla<33 || english <33 || math <33){
	document.write("F");
}
else if(obtainmark>=240){
	document.write("A+");
}

else if(obtainmark>=210){
	document.write("A");
}

else if(obtainmark>=180){
	document.write("A-");
}

else if(obtainmark>=150){
	document.write("B");
}

else if(obtainmark>=120){
	document.write("C");
}

else if(obtainmark>=99){
	document.write("D");
}
