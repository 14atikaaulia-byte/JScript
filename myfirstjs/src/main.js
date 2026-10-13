//JavaScript --> Programming Language
/*
Programming Language
1. input  & output
2. variable and data type 
3. condition (if, else)
4. looping (perulangan)
5. function 
*/

//Output
//1. using console.log ()
console.log("Hello  World");
console.log("My Name is Atika Aulia");
console.log(4+5);

//2. alert()
//alert("Welcome to My Website");

//3. using document.write()

//4. using innerHTML
//document.getElementById("id_name").innerHTML="text";
document.getElementById("first").innerHTML="My Name is Atika";

//variable --> to store data (let, var, const)

//let 
let name= "Atika";
name="Atika Aulia"; //mengganti tinggal tulis variable aja
console.log(name); //tdk pakai petik didalem kurung
let a = 4;
let b = 3;
let c = a+b;
let d = a*b;
console.log(a+b);
console.log(c);
console.log(c+d);
let address= "solo";
console.log("My Name is $name " + name +"Iam from" + address);

let oke1 = 8;
let OKE = 7;
console.log(oke1);
console.log(OKE);

const school = "SMA ABBS Surakarta";

console.log(school);
 

/*Operator Aritmatika
penjumlahan (+)
pengurangan (-)
perkalian (*)
pembagion (/)
perpangkatan (**)
modulus (%) sisa hasil bagi
*/
let number1 = 100;
let number2 = 250;
console.log(number1+number2);
console.log(number1-number2);
console.log(number1*number2);
console.log(number1/number2);
console.log(number1%number2);
console.log(number1 ** number2);

//calculator BMI 
let tb=160;
let bb=60;

let bmi = (bb/(tb*tb))*10000;

console.log(bmi);

//variable = let, var, const
let angka = 6;
console.log(angka);

var angka1 = 5;
var angka1 = 6;
console.log(angka1);

const angka2 = 5;
//angka2 = 6; (tidak boleh)
console.log(angka2);

/*Data Type
1. String = Character --> using "" / ''
2. number (integer, float)
  - integer = Bilangan Bulat
  - float Bilangan Pecahan 
3. Boolean = True, False
*/
let data = "SMA ABBS SURAKARTA"; // String
let data1 = "100"; // String
let data3 = 50; // Integer
let data4 = 25.25; //fload 
let data5 = false; //boolean

/*Comparison Operator --> the output of comparison are true or false.
- Equal (==)
- Not equal (!=)
- Grader Than (>)
- Grader Than or equal (>=)
- Less than (<)
- Less than or equal (<=)
*/
//example

let x = 5;
console.log(x == 5); //true
console.log(x != 5); //false
console.log(x > 10); //false
console.log(x >= 10); //false
console.log(x < 10); //true
console.log(x <= 10); //true

/*
logical Operators
-and (&&) = semua kondisi harus bernilai true
- or (||) = paling tidak ada 1 kondisi yang bernilai true
- not (!) = kebalikan dari kondisinya
*/

//Condition

/*1. if (1 condition)
     if (condition){
action;}
*/

let time =8;
if (time <=6){
  console.log("good morning")
}
/*1. if (2 condition)
     if (condition){
}
action;
     }
else{
  action 2;
}
*/

let time1= 6;
if(time1 <=6){
  console.log("Good Morning")
}
else{
  console.log("Good Bye")
}

/*kondisi
1. jika hari ini hujan, maka membawa payung 
2. jika hari ini tidak hujan, maka tidak membawa payung
*/
let cuaca = "hujan";
if (cuaca == "hujan"){
  console.log("Bawa Payung");
}
else{
  console.log("Tidak Bawa Payung");
}

//jiks nilai lebih dari 75, maka lulus
//jika nilai kurang dari 75, maka tidak lulus

let nilai = "90";
console.log ("nilai = ", nilai)
if (nilai > 75){
  console.log("lulus");
}
else{
  console.log("tidak lulus");
}

//jika bilangannya itu genap, maka genap
//jika biolangannya ganjil, maka ganjil

let bilangan = "19";
if (bilangan%2 == 0){
  console.log(bilangan + "adalah bilangan genap");
}
else{
  console.log(bilangan + "adalah bilangan ganjil");
}

/*more than 2 conditions
if(condition 1){
      action 1;
}
    else if (condition 2){
      action 2;
}
    else{
      action 3;
}
*/

//calculator BMI 
let TB=160;
let BB=60;
let BMI = (BB/(TB*TB))*10000;
console.log("Tinggi Badan = ", TB, "cm");
console.log("Berat Badan = ", BB, "kg");
console.log("BMI = ", BMI);
//jika bmi< 18.5, maka underweight (if)
//jika bmi 18.5 - 24.9, maka normal weight (else if)
//jika bmi 25.0 - 29.9, maka overweight (else if)
//jika bmi >= 30.0, maka obese (else)

  if(BMI < 18.5){
    console.log("underweight")
  }
   else if (BMI >= 18.5 && BMI <=24.9){
    console.log("Normal Weight");
  }
   else if (BMI >24.9 && BMI <=29.9){
    console.log("Overweight");
  }
  else{
    console.log("Obese")
  }