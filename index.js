// document.write('hello in JS');
// window.alert('hello in JS');
// console.log('hello in JS');
// let name = 'zeinab';
// let age= 22;
// let x  =' ';
// console.log(name + x + age);
// console.log(`my name is ${name} and my age is${age}`)
// console.log('5'+'7');
// let zakah = window.prompt();
// console.log(0.025 * 1000);
// تحويل الارقام الي نصوص
// let x = 100;
// document.write(typeof x);
// document.write(typeof String(x));
// document.write(typeof x.toString());
// document.write(typeof 100..toString());
// strings
// let name ='zeinab';
// console.log(name.repeat(5));
// console.log(name.length);
// console.log(name[3]);
// console.log(name.indexOf('b'));
// let namee ='love javascript';
// console.log(namee.split());
// console.log(namee.slice());



// arrays
// let names=['zoz' , 'toz' , 'boz'];
// names[0]='zeinab';
// names[1]='mohamed';
// names[2]='aziz';
// console.log(names);
// console.log(names.splice(-1,-2));
// console.log(names.reverse());
// console.log(names.sort());
// console.log(names.toSorted());



// 
// let name=prompt('Enter your name');
// let namee='zeinab';
// document.write(name.trim() == namee);
// document.write(5 =='5');
// let salary = 1000;
// document .write(salary<=1000 || salary>5000);
 
// let grade = prompt('num');
// if (grade >= 90)
// {
//     document.write('ex');
// }
// else if(grade>=70)
// {
//     document.write('passed');
// }
// else if(grade >= 50)
// {
//     document.write('pa');
// }
// else{
//     document.write('failed');
// }

// let age = prompt ('enter age');
// let result = age > 18?'hello user':age == 18?'you are now 18':'no you are very young';
// document. write(result);

//   let cars=['honda' , 'BMW' , 'marc'];
//   let models=[2020 , 2021 , 2022];
//   for(let i = 0 ; i<cars.length ; i++)
//   {
//     console.log(`cars : ${cars[i]}`);
//     for(let j = 0; j<models.length ; j++)
//     {
//         console.log(`model : ${models[j]}`);

//     }

//   }


// function hello (name)
// {
//     console.log('hello' +  name);
// }
// hello (' zeinab');
// hello(' ali');

// function calcAge (age)
// {
//     let result = age*365;
//     console.log( result);
// }
// calcAge(18);
// calcAge(22);

// function pro (price , taxes , ad)
// {
//     let product = price + taxes ;
//     let result = product + ad ; 
//     console.log(result);
// }
// pro (200 , 10 , 40);

// let car =
// {
//   title : 'BMW',
//   color : ['white' , 'black' , 'red'],
//   model : 2020 , 
//   hello : function()
//   {
//     return 'hello';
//   }
// };
// console.log(typeof car);
//  let head =  document.getElementsByClassName('head') ;

//   console.log(head);

// let container = document.getElementById('container');
// console.log(container);
// console.log(container.innerHTML);
// console.log(container.outerHTML);
// container.textContent='hello every one';
// container.style.backgroundColor='red';
// container.style.color='white';
// container.style.fontWeight= 400;



// container.style.removeProperty('font-weight');

// 
// 

// let after = document.getElementById('after');
// let before = document.getElementById('before');
// let append = document.getElementById('append');
// let content = document.getElementById('content');
// let container = document.getElementById('container');

// after.onclick=function()
// {
//     container.after(content);
// }
// before.onclick=function()
// {
//     container.before(content);
// }
// append.onclick = function()
// {
//     container.append(content);
// }

// let hello = document.getElementById('hello');
// hello.onclick = function()
// {
//     hello.classList.add('name');
// }




// nav bar by JS
// let btnopen = document.getElementById('open');
// let btnclose = document.getElementById('close');
// let container = document.getElementById('container');

// btnclose.onclick = function()
// {
//     container.classList.add('hide');
//     btnclose.classList.add('hide');
//     btnopen.classList.remove('hide');

// }
// btnopen.onclick = function()
// {
//     container.classList.remove('hide');
//     btnclose.classList.remove('hide');
//     btnopen.classList.add('hide');
// }


// setTimeout(function(){
//     console.log('hello')
// } , 5000)
// var div1 =document.getElementById("div1");
// var btn1= document.getElementById("btn1");
 
// function code1()
// {
//     div1.innerHTML=("zeinab mohamed")
// }
// btn1.onclick=code1      
  

// var x = prompt("enter your degree")
// if(x == 20)
// {
//     console.log("yes")
// }else{
//     console.log("no")
// }


// switch case
// function
// (function code() {
// console.log("zeft")
// }) ()

// window.onload = function (){
//  alert("ينعن ابو دا مجال")
// }
// ////////////////////////////////////////////////////////////////////////////////////////////
// var mult =1
// var x = prompt("enter first number");
// var y = prompt("enter second number");
// for (var i=x; i<=y; i++){
//     if(i%2 == 0){
//         console.log(i);
//         mult*=i
//     }
       
// }
// console.log(mult)
// var mult = 1;
// var x = parseInt(prompt("enter first number"));
// var y = parseInt(prompt("enter second number"));
// for (var i = x; i <= y; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//         mult *= i;
//     }
// }
// console.log(mult);
 


// /////////////////////////////////////////////////////////////////////////////////////////
// var arr =[]
// var studentNum= prompt("enter student numbers");
// for(var x=1 ;x<=studentNum ;x++)
// {
//    var name =prompt(`enter student name numb ${x}`)
//    console.log(`your name ${name}`)
//    arr[x]=name
// }
// console.log(arr)


// //////////////////////////////////////////////////////////////////////////////////////////////
//   var degree =prompt("enter your degree")
//   if(degree>=85){
//      console.log("Excellent")
//   }
//   else if(degree>=75)
//     {
//         console.log("Good")
//     }

// ////////////////////////////////////////////////////////////////////////////////////////

// var salary =prompt("Enter your salary")
// if(salary >= 17000){
//     console.log("wealthy")
// }
// else if(salary>=9000 && salary<=17000){
//      console.log("rich")
// }
// else{
//     console.log("mashia be elsatr")
// }

// //////////////////////////////////////////////////////////////////////
//  function code (){
//     var xhttp = new XMLHttpRequest()
//     console.log(xhttp)
//  }
//  code()

'Use Strict';
function code(){
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange =function (){
        if( this.readyState ==4 && this.status ==200)
            {
                console.log(this.responseText)
            }
    }
    xhttp.open = ("GET" , "https://jsonplaceholder.typicode.com/posts" , "false")
    xhttp .send( )
}
code()




































