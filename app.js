/*

//chapter01

//Question no.1
alert("Welcome To My Website");


//Question no.2
alert("Error! Please enter a valid password");

//Question no.3
alert("welcome to JS\nHappy Coding");

//Question no.4
alert("welcome to JS");
alert("Happy Coding\n\n Prevent this page from additional dialog");


//Question no.5
alert("Hello.. I can run JS from browser console")

//Question no.6
alert("this is a alart for my html page");

*/


/* 
//chapter02

// Question no.01
var username;

// Question no.02
var myname ="muhammad arsalan";

// Question no.03
var messege="Hello world";
alert(messege);


// Question no.04
var name="muhammad arsalan";
var age="21";
var qualification="certified application developer";
alert(name);
alert(age);
alert(qualification);


// Question no.05
var pizza="PIZZA\nPIZZ\nPIZ\n\PI\nP";
alert(pizza);

// Question no.06
var email="arsalanbaba414@yahoo.com";
alert("my email address is "+ email);

// Question no.07
var book="A smarter way to learn JavaScript";
alert("I am trying to learn from the book "+book)

//Question no.08
document.write("Yeah! I can write HTML content through JavaScript");

//Question no.09
var style="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(style);

*/

/*
//chapter03

//Question no.01
var age="21";
alert("I am "+age+" years old");


//Question no.02
var no=8;
alert("You have visited this site "+no +" times");

//Question no.03
var birthYear=1998;
document.write("my birthyear is "+birthYear+"\nData type of my declaired variable is number");

//Question no.04
var visName=prompt("please enter name","enter your name here");
var proTitle=prompt("please enter product title","enter your product title here");
var proQuantity=prompt("please enter quantity of product you want to buy","enter quantity here");

document.write(visName+" ordered "+proQuantity+" "+proTitle+" from the xyz store");

*/

/*
//chapter03

//Question no.01
var variable01,variable02,variable03;


//Question no.02
//legal variables
var name,age,gender,profession,qualification;

//illegal variable
var -a;
var 1apple;
var Bad boy;
var  +enjoy;
var const;


//Question no.03
document.write("<h1>Rules for naming JS variables</h1>");
document.write("<p>Variable names can only contain numbers,alphabets,$ and _. For example:$my_variable01</p>");
document.write("<p>Variables must begin with a letter, $ or _. For example $name, _name or name</p>");
document.write("<p>Variable names are case sensitive</p>");
document.write("<p>Variable names should not be JS Keywords</p>");

*/

/*
//chapter05

//Question no.01
var num1=15;
var num2=10;
var num3=num1+num2;
document.write(num3);

//Question no.02
var num1=15;
var num2=10;
var num3=num1-num2;
document.write(num3);

var num1=15;
var num2=10;
var num3=num1*num2;
document.write(num3);

var num1=15;
var num2=10;
var num3=num1/num2;
document.write(num3);

var num1=15;
var num2=10;
var num3=num1%num2;
document.write(num3);


//Question no.03
var value;
document.write("<p>Value after variable declaration is: "+value);
value=5;
document.write("<p>Initial value: "+value);
value++;
document.write("<p>Value after increament is: "+value);
value+=7;
document.write("<p>value after addition is: "+value);
value--;
document.write("<p>Value after decreament is: "+value);
value%=3;
document.write("<p>The reminder is: "+value);

//Question no.04
var price=600;
var no_Of_Tickets=5;
var totalPrice=price * no_Of_Tickets;
document.write("Total cost to buy "+no_Of_Tickets+" tickets to a movie is "+totalPrice);

//Question no.05
var table=4;
for(i=1;i<11;i++){
    document.write("<p>4 X "+i+" = "+table*i);
}


//Question no.06
var temp=45;
var tempInF=(temp*(9/5))+32;
document.write("<p>"+temp+"oC is "+tempInF+"oF");
var ferenheit=98;
var celsius=(ferenheit-32)*5/9;
document.write("<p>"+ferenheit+"oF is "+celsius+"oC");


//Question no.07
var item1price=650;
var item1Quantity=3;
var item1Total=item1price*item1Quantity;
var item2price=100;
var item2Quantity=7;
var item2Total=item2price*item2Quantity;
var shipingCost=100;
var totalCost=item1Total+item2Total+shipingCost;
document.write("<p>Price of item 1 is "+item1price+"<p>Price of item 2 is "+item2price+
"<p>Ordered quantity of item 1 is "+item1Quantity+"<p>Ordered Quantity of item 2 is"+item2Quantity+
"<p>Shipping charges are "+shipingCost+"<p>Total cost of your order is "+totalCost);




//Question no.08
var tMarks=980;
var oMarks=804;
var percentage=(oMarks/tMarks)*100;
document.write("<p>Total marks: "+tMarks+"<p>Obtained marks: "+oMarks+"<p>Percentage: "+percentage+"%");


//Question no.09
var usDollar=10;
var saudiRiyal=25;
var usToPkr=usDollar*104.80;
var saudiToPkr=saudiRiyal*28;
var total=usToPkr+saudiToPkr;
document.write("<h1>Currency in PKR</h1>");
document.write("<p>Total currency in PKR: "+total);


//Question no.10
var num=10;
var arithematic=num+5*10/2;

document.write("<p>Arithmetic operation perfomed gives: "+arithematic);


//Question no.11
var currentYear=2020;
var birthYear=1998;
var age=currentYear-birthYear;
document.write("<h1>Age Calculator</h1>");
document.write("<p>Your age is: "+age);


//Question no.12
var r=20;
var circumference=2*3.142*r;
var areaOfCircle=3.142*r*r;
document.write("<h1>The Geometrizer</h1>");
document.write("<p>Radius of circle: "+r);
document.write("<p>The circumference is: "+circumference);
document.write("<p>The area is: "+areaOfCircle);




//Question no.13
var snack="Chocolato";
var currentAge=21;
var maxAge=60;
var amount=2;
var totalSnacks=(maxAge-currentAge)*12*amount;
document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("<p>favourate Snacks: "+snack);
document.write("<p>Current Age: "+currentAge);
document.write("<p>Estimated Maximum Age: "+maxAge);
document.write("<p>Amount of snacks per day: "+amount);
document.write("<p>You will need "+totalSnacks+" "+snack+" to last you until the ripe old age of "+maxAge);

*/



/*

//chapter 06-09

//Question no.01
var a=10;
document.write("<p>Result: ");
document.write("<p>The value of a is: "+ a);

document.write("<p>The value of ++a is: "+ ++a);
document.write("<p>Now the value of a is: "+a);
document.write("<p>The value of a++ is: "+ a++);
document.write("<p>Now the value of a is: "+a);

document.write("<p>The value of --a is: "+ --a);
document.write("<p>Now the value of a is: "+a);

document.write("<p>The value of a-- is: "+ a--);
document.write("<p>Now the value of a is: "+a); 



//Question no.02
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
            // 1 - 0  +  1 +   1; and result will be 3
document.write("<p>a is "+a);
document.write("<p>b is "+b);
document.write("<p>the result is: "+result);

//Question no.03
var name=prompt("please enter your name","input your name here");
alert("welcome to our site "+name)


//Question no.04
var numb=+prompt("please input a number","input a number ");
if (numb===numb){
for(i=1;i<11;i++){
    document.write("<p>"+numb+" X "+i+" = "+numb*i);
}
}
else{
    var table=5;
for(i=1;i<11;i++){
    document.write("<p>5 X "+i+" = "+table*i);
}
}

//Question no.05
var var1=prompt("please enter the subject name","enter subject name");
var var2=prompt("please enter the subject name","enter subject name");
var var3=prompt("please enter the subject name","enter subject name");
var totalMarks=100;
var subject1=+prompt("please enter the obtained marks of first subject","please enter number here");
var percent1=subject1*100/totalMarks;
var subject2=+prompt("please enter the obtained marks of second subject","please enter number here");
var percent2=subject2*100/totalMarks;
var subject3=+prompt("please enter the obtained marks of third subject","please enter number here");
var percent3=subject3*100/totalMarks;
var oMarks=subject1+subject2+subject3;
var percent=oMarks*100/totalMarks;
document.write("<table>");
document.write("<tr>");
document.write("<th>Subjects</th><th>Total marks</th><th>Obtained marks</th><th>Percentage</th>")
document.write("</tr>");
document.write("<tr>");
document.write("<th>"+var1+"<td>"+totalMarks+"<td>"+subject1+"<td>"+percent1);
document.write("</tr>");
document.write("<tr>");
document.write("<th>"+var2+"<td>"+totalMarks+"<td>"+subject2+"<td>"+percent2);
document.write("</tr>");
document.write("<tr>");
document.write("<th>"+var3+"<td>"+totalMarks+"<td>"+subject3+"<td>"+percent3);
document.write("</tr>");
document.write("</table>");

*/


/*

//chapter 9-11

//Question no.01
var cityNmae=prompt("enter the name of city","enter the city name");
if (cityNmae==="karachi"){
    document.write("<h1>Welcome to city of lights");
}
else{
    document.write("<h1>Sorry you are not welcome here")
}

//Question no.02
var gender=prompt("what's your gender","enter your gender");
if (gender==="male"){
    document.write("<h1>Good Morning Sir.");
}
else if(gender==="female"){
    document.write("<h1>Good Gorning Ma'am.")
}
else{
    document.write("<h1>please write gender in alphabetically");
}
//Question no.03
document.write("<table style='color:blue; font-weight:bold'>");
document.write("<tr>");
document.write("<th>Signal color</th><th #8bdffb>Messege</th>");
document.write("</tr>");
var signalColor=prompt("write a traffic signal color","enter color");
if (signalColor==="red"){
    document.write("<tr style='background-color:#8bdffb'>");
    document.write("<td>"+signalColor);
    document.write("<td> must stop</td>");
    document.write("</tr>");
}
else if (signalColor==="yellow"){
    document.write("<tr>");
    document.write("<td>"+signalColor);
    document.write("<td> ready to move</td>");
    document.write("</tr>");
}
else if (signalColor==="green"){
    document.write("<tr>");
    document.write("<td>"+signalColor);
    document.write("<td> move now</td>");
    document.write("</tr>");
}
else{
    alert("please enter correct color");
}
document.write("</table>")



//Question no.04
var fuel=+prompt("please enter fuel in litres","enter fuel");
if (fuel<0.25){
    document.write("Please refill the fuel in your car");
}
else{
    document.write("you have a fuel");
}


//Question no.05
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true"); 
}
var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){ 
    alert("condition 1 is true"); 
}
if (c === 13){ 
    alert("condition 2 is true"); 
}
if (++c < 14){ 
    alert("condition 3 is true"); 
}
if(c === 14){ 
    alert("condition 4 is true"); 
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){ 
    alert("The cost equals");
}
if (true){ 
    alert("True"); 
}
if (false){ 
    alert("False"); 
}
if("car" < "cat"){
    alert("car is smaller than cat"); 
}



//Question no.06
var sub1=+prompt("please enter obtained marks in english","write obtained marks out of 100");
var sub2=+prompt("please enter obtained marks in urdu","write obtained marks out of 100");
var sub3=+prompt("please enter obtained marks in programming","write obtained marks out of 100");
var obtainedMarks=sub1+sub2+sub3;
var totalMarks=300;
var percentage=obtainedMarks*100/totalMarks;
var grade,remarks;
if (percentage>=80 && percentage<=100){
    grade="A-one";
    remarks="excellent"
}
else if (percentage>=70 && percentage<=79){
    grade="B";
    remarks="You need to improve";
}
else if (percentage>=60 && percentage<=69){
    grade="A";
    remarks="Good";
}
else if (percentage<=60){
    grade="Fail";
    remarks="Sorry";
}
else{
    alert("please enter correct number otherwise it will effect the result")
}
document.write("<h1>Marks Sheet");
document.write("Total marks: "+totalMarks);
document.write("<br>Marks obtained: "+obtainedMarks);
document.write("<br>Percentage: "+percentage+"%");
document.write("<br>Grade: "+grade);
document.write("<br>Remarks:"+ remarks);

//Question no.07
var secretNumber=6;
var guess=+prompt("please guess the secret number 1-10","enter number range 1-10");
if (secretNumber===guess){
    document.write("Bingo! correct answer");
}
else{
    document.write("Close enough to the correct answer");
}

//Question no.08
var number=+prompt("please enter number");
if (number%3==0){
    document.write("yes number is divisible by three");
}
else{
    document.write("sorry number is not divisible by 3");
}

//Question no.09
var number=+prompt("please enter number");
if (number%2==0){
    document.write("number is even");
}
else{
    document.write("number is odd");
}

//Question no.10
var temp=+prompt("please eneter temperature","eneter temperature in celcius");
if (temp>40){
        document.write("Its  too hot outside");
    }
    else if (temp>30){
       document.write("The Wheather today is Normal")
    }
    else if (temp>20){
        document.write("Today's Weather is cool")
    }
    else if (temp>10){
       document.write("OMG! Today's weather is so Cool")
    }
    else{
        alert("please enter correct number otherwise it will effect the result")
    }

//Question no.11
var numb1=+prompt("please enter number");
var numb2=+prompt("please enter number");
var operation=prompt("please eneter operation");
if(operation=="+"){
    document.write(numb1+numb2);
}
else if(operation=="-"){
    document.write(numb1-numb2);
}
else if(operation=="/"){
    document.write(numb1/numb2);
}
else if(operation=="%"){
    document.write(numb1%numb2);
}
else{
    document.write("please correct the inputs");    
}

*/

/*

//chapter 10-12

//Question no.01


//Question no.02
var a=+prompt("please input a number A");
var b=+prompt("please input a number B");
var larger=a;
if(a<b){
    larger=b;
}
else if(a==b){
    larger=larger;
}
document.write("the larger number is: "+larger);


//Question no.03
var number1=+prompt("please eneter a number");
if (number1>0){
    document.write("number is positive");
}
else if(number1<0){
    document.write("number is negative");
}
else if(number10){
    document.write("number is zero");
}
else{
    document.write("please enter number correctly");

}

//Question no.04
var password="password";
var typePassword=prompt("please enter your password");
if (typePassword==null){
    alert("Please enter your password");
}
else if (typePassword==="password"){
    document.write("Correct! The password you entered matches the original password");
}
else{
    document.write("Incorrect password");
}
//Question no.06
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else{
    greeting = "Good evening"; 
}
*/

// //chapter13-15

// //Question01
// var array=[];

// //Question02
// var objectA = {};

// //Question03
// var names=["ali","usama","kamran","saeed"];

// //Question04
// var number=[1,2,3,4,5];

// //Question05
// var bool=[true,false,false,true];

// //Question06
// var mixed=[true,1,2,3,"ali","kamran"];

// //Question07
// var qualification=["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]
// document.write("<h1>QUALIFICATION</h1> <br>");
// for ( i=0; i<=7;i++){
//     document.write(i+1+") "+qualification[i]+"<br>");
// }

// //Question08
// var students=["Michael","John","tony"];
// var score=[320,230,480];
// var tMarks=500;
// for(var i=0;i<3;i++){
//     document.write("score of "+students[i]+ " is "+ score[i]+". Percentage: "+ (score[i]*100/tMarks)+"% <br>");
// }

// //Question no.09
// var colors=["red "," blue "," green "];
// alert("the colors are: "+colors);
// colors.unshift(prompt("enter the color you want to add in start"));
// alert("the colors are: "+colors);
// colors.push(prompt("enter the color you want to add in end"));
// alert("the colors are: "+colors);
// colors.unshift(prompt("enter the color you want to add in start"),prompt("enter the color you want to add in start"));
// alert("the colors are: "+colors);
// colors.shift();
// alert("the colors are: "+colors);
// colors.pop();
// colors.splice(prompt("Select index number"),prompt("select number of colors you want remove"),prompt("select color names you want to add "),prompt("select color names you want to add "));
// alert("the colors are: "+colors);

// //Question no.10
// var scores=[];
// scores.sort();
// for ( i=0; i<3;i++){
//     scores[i]=prompt("enter number of student: " );
// }
// document.write(scores);
// //Question no.11
// var cities=["karachi","lahore","peshawar"];
// var selectedCities= cities.slice(0,3);
// document.write("selected cities are: "+selectedCities);


//Assignment07

//chapter 21-25

// //question no.1

// var firstName = prompt("enter your first name");
// var lastName = prompt("enter your last name");
// var fullName = firstName + lastName;
// alert(fullName + " welcome to this webpage");

// //Quetion No.02
// var mobile = prompt("Enter your favourate mobile model");
// document.write("My favourate mobile phone is: "+mobile+"<br>Lent of string: "+mobile.length);



// //Quetion No.03
// var name =  'pakistan';
// for(var i=0; i<name.length; i++){
//     if(name.slice(i)==='n'){
//         document.write(i+1)
//     }
// }

// //Quetion No.04
// var name =  "Hello worldhadslahah";
// var index;
// for(var i=0; i<name.length; i++){
//     if(name.slice(i,i+1)==="l"){
//         index=i;
//     }
// }
// document.write(index)


// //Quetion No.05
// var string = "Pakistan";
// document.write("String : ", string, "<br>Character at index 3 : ", string[3]);

// //Quetion No.06
// var firstName = prompt("enter your first name");
// var lastName = prompt("enter your last name");
// var fullName = firstName.concat(lastName);


// //Quetion No.07
// var city = "Hyderabad";
// document.write("<br><br>After REplacement", city.replace("Hyder", "Islam"));

// //Quetion No.08
// var message = "Ali and Sami are best friends. They play cricket and football together."
// document.write("<br><br>Message : ", message.split("and").join("&"));


// //Quetion No.09
// var number = "472";
// document.write("<br><br>Value : ", number, "<br>Type : ", typeof (number));
// document.write("<br><br>Value : ", +number, "<br>Type : ", typeof (+number));

// //Quetion No.10
// var user_input = prompt("Enter fruit anme");
// document.write("<br><br>User INput : ", user_input);
// document.write("<br><br>User Case : ", user_input.toUpperCase());


// //Quetion No.11
// var user_input = prompt("Enter name");
// document.write("<br><br>User INput : ", user_input);
// document.write("<br><br>User Case : ", user_input[0].toUpperCase(), user_input.slice(1, user_input.length));

// //Quetion No.12
// var number = 35.36;
// document.write("<br><br>Number : ", number);
// document.write("<br><br>Result : ", number.toString().replace(".", ""));

// //Quetion No.13
// var user_name = prompt("Enter username");
// for (var i = 0; i < user_name.length; i++) {
//     if (user_name[i].charCodeAt() == 33 ||
//         user_name[i].charCodeAt() == 44 ||
//         user_name[i].charCodeAt() == 46 ||
//         user_name[i].charCodeAt() == 64) {
//         alert("Please enter a valid name");
//         break;
//     }
// }


// //Quetion No.14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var bakery = prompt("Welcome to ABC Bakery. What do you wnat to order ?");
// for (i = 0; i < A.length; i++) {
//     if (bakery.toLowerCase() === A[i].toLowerCase()) {
//         document.write(A[i], " is available at index ", i, " in our bakery.")
//     }
//     else {
//         document.write("<br><br>We are sorry. ", bakery, " is not available in not bakery.")
//     }
// }


// //Quetion No.15
// var password = prompt("Enter password");
// if (password.match(/^[A-Za-z][a-zA-Z0-9]{5}$/)) {
//     alert("Password can't begin with a number");
//     alert("Please enter a valid password");
// }

// //Quetion No.16
// var university = "University of Karachi";
// document.write(university.split(""));

// //Quetion No.17
// var user_input1 = prompt("Enter your country name: ");
// document.write(document.write("<br><br><br>", user_input1[user_input1.length - 1]));

// //Quetion No.18
// var string2 = "The quick brown fox jumps over the lazy dog";
// document.write("<br><br>There are ", string2.match(/the/gi).length, " of the world 'the'");


// //chapter 26-30

// //question no.01
// var integer = prompt("Enter positive integer");
// document.write("<br><br>Number : ", integer);
// document.write("<br><br>Round off Value : ", Math.round(integer));
// document.write("<br><br>Floor Value : ", Math.floor(integer));
// document.write("<br><br>Ceil Value : ", Math.floor(integer) + 1);


// //question no.02
// var negative_integer = prompt("Enter positive negative_integer");
// document.write("<br><br>Number : ", negative_integer);
// document.write("<br><br>Round off Value : ", Math.round(negative_integer));
// document.write("<br><br>Floor Value : ", Math.floor(negative_integer));
// document.write("<br><br>Ceil Value : ", Math.floor(negative_integer) + 1);

// //question no.03
// var absolute_value = prompt("Enter absolute number");
// document.write("<br><br>The absolute value of ", absolute_value, " is ", Math.abs(absolute_value));


// //question no.04
// document.write("<br><br>Random Dice Value : ", Math.floor(Math.random() * 6) + 1);


// //question no.05
// let coin_toss = Math.floor(Math.random() * 2 + 1);
// if (coin_toss == 2) { document.write("<br><br>2<br>RAndom coin value : Heads") }
// else { document.write("<br><br>1<br>Random coin value : Tails"); }

// //question no.06
// document.write("<br><br>Random number between 1 and 100 is ", Math.floor(Math.random() * 100 + 1));

// //question no.07
// var weight = prompt("Enter weight:");
// let w = weight.match(/[0-9 .]*/);
// document.write('THe weight of user is ', w[0], ' kilograms');


// //question no.08
// var secret = prompt('Enter secret Number ?');
// var random = Math.random() * 10 + 1;

// if (secret == random) {
//     alert("Congratulations! Matched");
// }
// else {
//     alert("Try Again!");
// }

// //chapter 31-34

// //question no.01
// document.write(new Date());


// //question no.02
// let months = ['January', 'Feruary', 'March',
//     'April', "May", 'June', 'July', "August", 'September',
//     'October', 'November', 'December'];

// document.write("<br><br></br>Current Month : ", months[new Date().getMonth()])

// //question no.03
// let days = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
// document.write("<br><br></br>Today is ", days[new Date().getDay()]);


// //question no.04
// if (new Date().getDay() == 5 || new Date().getDay() == 6) {
//     document.write("<br><br></br>It's Fun day");
// }


// //question no.05
// if (new Date().getDate() < 16) {
//     document.write("<br><br></br>First fifteen days of the month");
// }
// else {
//     document.write("<br><br></br>Last days of the month.");
// }

// //question no.06
// document.write("<br><br></br>Current Date", new Date());
// document.write("<br><br></br>Elapsed milliseconds since January 1, 1970: ", new Date().getTime());
// document.write("<br><br></br>Elapsed minutes since January 1, 1970: ", (new Date().getTime()) / (1000 * 60 * 60));


// //question no.07
// if (new Date().getHours < 13) {
//     document.write("<br><br></br>It's AM");
// }
// else {
//     document.write("<br><br></br>It's PM");
// }

// //question no.08
// document.write("<br><br></br>Later Date : ", new Date(2020, 4, 30));



// //question no.09
// let ramadan = new Date(2020, 3, 25).getTime();
// let today1 = new Date().getTime();

// document.write("<br>", Math.floor((today1 - ramadan) / (1000 * 60 * 60 * 24)), " days have passed since 1st Ramadan");


// //question no.10
// let diff = new Date("Dec 5, 2015").getTime();
// let today = new Date().getTime();
// let result = (diff - today);
// document.write("<br><br>", result, " seconds has passed since beginning of 2015");

// //question no.11
// var date_now = new Date();
// document.write("<br><br></br>Current Date : ", date_now);
// var one_hour = new Date();
// one_hour.setHours(date_now.getHours() - 1);
// document.write("<br><br></br>1 hour ago, it was ", one_hour);


// //question no.12
// var date_now = new Date();
// document.write("<br><br></br>Current Date : ", date_now);
// var one_hour = new Date();
// one_hour.setHours(date_now.getFullYear() - 100);
// document.write("<br><br></br>1 hour ago, it was ", one_hour);


// //question no.13
// var age = prompt("Enter your age");
// document.write("<br><br></br>Your age is ", age);
// document.write("<br><br></br>Your birth Year is  :", new Date().getFullYear() - +age);


// //question no.14
// document.write("<br><br></br><h1>K-Electric Bill</h1>");
// document.write("<br><br></br>Customer Name : <strong>ABC Customer</strong>");
// document.write("<br><br></br>Month :  <strong>", months[new Date().getMonth()], "</strong>");
// document.write("<br><br></br>Number of units :  <strong>410</strong>");
// document.write("<br><br></br>Charges per unit :  <strong>16</strong>");

// document.write("<br><br></br>Net Amount Payable (within Due Date) :  <strong>6560</strong>");
// document.write("<br><br></br>Late payment surcharge :  <strong>350</strong>");
// document.write("<br><br></br>Gross Amount Payable (after Due Date) :  <strong>6910</strong>")

// //chapter 35-38

// // Question no.1
// function date(){
// var rightNow = new Date();
// document.write(rightNow);
// }
// date();

// // Question no.2
// function greet(){
// var firstName=prompt("Enter your first name:");
// var lastName=prompt("Enter the last name:");
// alert("welcome "+firstName+" "+lastName+" to this webpage")
// }
// greet();

// // Question no.3
// function add(){
// var firstNum=+prompt("Enter the first number:");
// var secNum=+prompt("Enter the second number:");
// var add=firstNum+secNum;
// alert(add);
// }
// add();

// // Question no.4
// function add(){
//     var firstNum=+prompt("Enter the first number:");
//     var secNum=+prompt("Enter the second number:");
//     var operate=prompt("enter the operator");
//     if (operate=="+"){
//         var calculate=firstNum+secNum;
//     }
//     else if(operate=="-"){
//         var calculate=firstNum-secNum;
//     }
//     else if(operate="*"){
//         var calculate=firstNum*secNum;
//     }
//     else if(operate="/"){
//         var calculate=firstNum/secNum;
//     }
//     else if(operate="%"){
//         var calculate=firstNum%secNum;
//     }
//     else{
//         alert("please eneter correctly")
//     }
//     alert(calculate);
// }
// add();

// // Question no.5
// function square(){
//     var firstNum=+prompt("Enter the first number:");
//     var square=firstNum+firstNum+firstNum+firstNum;
//     alert("square of "+firstNum+" is "+square);
// }
// square();

// // Question no.7
// function counting(){
//     var num=+prompt("enter the start number");
//     var endNum=+prompt("enter end number");
//     if (num<endNum){
//     while(num-1!=endNum){
//         console.log(num);
//         num++;
//     }
// }
// else{
//     console.log("please write first number smaller than second")
// }
// }
// counting();

// // Question no.8
// function final(){
//     var base=+prompt("enter the base");
//     var perpendicular=+prompt("enter the perpendicular");
//     var hypo=bas()+perp();
//     var hyposq= hypo*hypo;
//     function bas(base){
//         var basesq=base*base;
        
//     }
//     function perp(perpendicular){
//         var perpendicularsq=perpendicular*perpendicular;
//     }
//     console.log(hyposq);
// }
// final();

// // Question no.9

// var height=23;
// function area(width,height){
//     var calc=width*height;
//     console.log(calc)

// }
// area(2,height)

// //chapter 38-44

// //Question no.1

// function powe(a,b){
//     var sq=b*b;
//     console.log(sq)
// }
// powe(2,40)

// //Question no.2
// function leapYear(){
//     var year=+prompt("please enter the year");
//     if (year%4==0){
//         console.log("this is a leap year")
//     }
//     else if (year%4!=0){
//         console.log("this is not a leap year")
//     }
//     else{
//         console.log("please enter the year")
//     }
// }
// leapYear()


// //Question no.3
// var a=+prompt("please enter the 1st side length")
// var b=+prompt("please enter the 2nd side length")
// var c=+prompt("please enter the 3rd side length")
// function s(){
//     var cals=(a+b+c)/2;
//     return cals;
// }
// var value=s();
// console.log(value)
// function area(){
//     var s=value;
//     var area=s*(s-a)*(s-b)*(s-c)
//     console.log(area)
// }
// area()

// //Question no.4

// var sub1=89;
// var sub2=90;
// var sub3=76;
// main();
// function main(){
//     var average=average();
//     var percentage= percentage();
//     console.log(average);
//     console.log(percentage);
    
// function average(){
//     var ave=sub1+sub2+sub3;
//     return ave;
// }
// function percentage(){
//     var aver=sub1+sub2+sub3;
//     var percent= (aver*100)/300
//     return percent;
// }
// }

// //Question no.5
// // var firstChar = text.indexOf("World War II");

// var para="hello this is fun game";
// var find=prompt("please input");
// function index(){
// var num=0;
// for (i=0;i<para.length; i++){
//     if (para.slice(i,i+find.length)===find){
//         break
//     }
//     num=num+1;
// }
// console.log(num+1)
// }
// index(find)
    

// //Question no.6
// var para="this is just a dumy text";
// var newpara;
// for (var i = 0; i < para.length; i++) {
//     if (para.slice(i,i+1) !== "a" || para.slice(i,i+1) !== "e" || para.slice(i,i+1) !== "i" || para.slice(i,i+1) !== "o" || para.slice(i,i+1) !== "u" ) {
//         newpara=newpara + para.slice(i);
//     }

// }
// console.log(newpara)
    

// //Question no.7
// var disInKm=prompt("please input distance in km");
// function meter(){
//     var meter=disInKm/1000;
//     return meter
// }
// function feet(){
//     var feet=disInKm/10000;
//     return feet
// }
// function inches(){
//     var inches=disInKm/10000;
//     return inches
// }
// function centimeter(){
//     var centimeter= disInKm/1000000
//     return centimeter
// }

//Question no.10

// function currencyDen() {
//     var cash = prompt("Enter cash (in hundreds): ");                              // You  can use prompt like this
//     var hundred = parseInt(cash / 100);
//     var fifty = parseInt((cash % 100) / 50);
//     var ten = parseInt(((cash % 100) % 50) / 10);
//     document.write('You will have ', hundred, ' hundred notes ', fifty, ' fifty notes, ', ten, ' ten notes');

// }
// currencyDen();

// //Chapter 43-48

// //Question no.1
// function display(){
//     alert("This is a New Branded mobile you should buy")
// }

// //Question no.2
// function display(){
//     alert("This is a New Branded mobile you should buy")
// }

// //Question no.3
// function SomeDeleteRowFunction(o) {
//     //no clue what to put here?
//     var p=o.parentNode.parentNode;
//         p.parentNode.removeChild(p);
//    }

// //Question no.5
// function inc(){
//     var field=document.getElementById('field-text').value;
//     document.getElementById('field-text').value++;

// }
// function dec(){
//     var field=document.getElementById('field-text').value;
//     document.getElementById('field-text').value--;

// }


//Chapter 43-48

// //Question no.01
// function getelement(){
//     var firstname=document.getElementById('firstname').value
    
//     var lastname=document.getElementById('lastname').value
    
//     var email=document.getElementById('email').value
    
//     var number=document.getElementById('number').value
//     document.write("First name: "+firstname+"<br>")
//     document.write("last name:  "+lastname+"<br>")
//     document.write("email: "+email+"<br>")
//     document.write("Phone Number: "+number+"<br>")
//     }
    
    
// //Question no.02
// function more(){
// var list='<h1>car availables</h1><ol><li>honda</li><li>toyota</li><li>suzuki</li><li>yamaha</li><li>ferrari</li><li>land cruiser</li><li>daewoo</li></ol>'
// document.write(list)
// }
//Question no.03




// //Chapter 58-67

// //Question No.1

// var mainContent=document.getElementById('main-content')
// console.log(mainContent.children)
// var render=document.getElementsByClassName('render')
// for (var i=0;i<render.length;i++){
//      console.log(render[i].innerHTML)
// }
// var firstName = document.getElementById('first-name')
// var lastName = document.getElementById('last-name')
// var email = document.getElementById('e-mail')
// firstName.value= "Muhammad"
// lastName.value="Arsalan"
// email.value="arsalanbaba414@yahoo.com"


// //Question no.2

// console.log(document.getElementById("form-content").nodeType)
// console.log(document.getElementById("lastName").childNodes)
// console.log(document.getElementById("lastName").childNodes[0].value="LastName Update")
// console.log(mainContent.firstChild,mainContent.lastChild)
// console.log(document.getElementById('lastName').nextSibling,document.getElementById('lastName').previousSibling)
// console.log(document.getElementById('email').parentElement)