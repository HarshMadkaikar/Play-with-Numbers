function fibonancci()
{
    var num=parseInt(prompt("Enter the number of elements: "));
    var t1=0,t2=1;
    document.write("<br>"+t1+"<br>"+t2);

    for(var i=3;i<=num;i++)
    {
        var t3=t1+t2;
        document.write("<br>"+t3);
        t1=t2;
        t2=t3;
    }
}

function prime()
{
    var num= parseInt(prompt("Enter Number "));
    document.write("<br>Number: "+num);
    var i;
    var count=0;
    for( i=2;i<=num/2;i++){
		if(num%i==0){
		count++;
		}
	}
	if(count ==0){
		document.write("<br>The number is prime number.");
	}
	else{
		document.write("<br>The number is not prime number.");
	}
}


function factorial()
{
    var num=parseInt(prompt("Enter the Number: "));

    var i,factorial=1;
    for(i=1;i<=num;i++)
    {
        factorial=factorial*i;
    }
    document.write("<b>The factorial of "+num+" is "+factorial);

}

function findresult()
{ var result=parseInt(prompt("Enter The Marks: "));
switch(true)
{
    case(result>=80):
    document.write(" Congratulations!! You Got 'A+' Grade.")
    break;
    case(result>=70&&result<80):
    document.write("Congratulations!! You Got 'A' Grade.")
    break;
    case(result>=60&&result<70):
    document.write("Congrats! You Got 'B' Grade.")
    break;
    case(result>=35):
    document.write("You Got Grade 'C'.")
    break;
    default:
    document.write("Sorry! You have Failed The Exam.Better Luck Next Time..")
}
}

function EvenOROdd()
{
    var num=parseInt(prompt("Enter The Number: "));
    if(num%2==0)
    {
        document.write("The Number is EVEN.");
    }
    else{
        document.write("The Number is ODD.");
    }
}