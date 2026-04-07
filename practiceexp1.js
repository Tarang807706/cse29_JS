function calculateresult(){
    console.log("fhfz")
let n = document.getElementById("subjects").value;
let total = 0;
for(let i=1;i<=n;i++)
{
let marks = parseFloat(prompt("Enter marks of subject "+i));
total = total + marks;
}
let avg = total/n;
let grade;
if(avg>=90)
grade="A";
else if(avg>=75)
grade="B";
else if(avg>=60)
grade="C";
else if(avg>=40)
grade="D";
else
grade="F";
let result;
if(avg>=40)
result="Pass";
else
result="Fail";
document.getElementById("result").innerHTML=
"Total Marks = "+total+"<br>"+
"Average = "+avg+"<br>"+
"Grade = "+grade+"<br>"+
"Result = "+result;

}
