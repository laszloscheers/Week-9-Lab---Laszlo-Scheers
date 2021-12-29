function grade(){
    var number=parseInt(prompt("How many subjects do you wish to grade"));
    var subjectName = [];
    var subjectMark = [];
    var avarage,yourGrade,msg;
    msg="";
    for(i=0;i<number;i++){
        subjectName[i]=prompt("Please, enter the subject name number "+(i+1)+".");
        subjectMark[i]=parseInt(prompt("Please, enter the subject mark number "+(i+1)+", from 0 to 100 to be graded."));
        msg+="For "+subjectName[i]+" you got "+subjectMark[i]+" marks.<br>";
    }
    avarage=0;
    for(i=0;i<subjectMark.length;i++){
        avarage+=subjectMark[i];
    }
    avarage=avarage/subjectMark.length;
    msg+="Your avarage is "+Math.floor(avarage)+" marks.<br>";
    yourGrade="";
    if(avarage>=90){
        yourGrade="A+";
    } else if(avarage>=75){
        yourGrade="B";
    } else if(avarage>=65){
        yourGrade="B+";
    } else if(avarage>=50){
        yourGrade="B";
    } else if(avarage>=45){
        yourGrade="B-";
    } else if(avarage<40){
        yourGrade="F";
    }
    msg+="Your grade for this course is "+yourGrade+".";
    document.getElementById("msg").innerHTML=msg;
}