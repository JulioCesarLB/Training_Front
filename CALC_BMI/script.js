function func_genre(){
    var select = document.querySelector("#select").value;
    var image = document.querySelector(".image");

    if(select=="feminine"){
        image.setAttribute('src','images/vector-woman-silhouette-700-154925823-removebg-preview.png');
    }
    else{ 
        image.setAttribute('src','images/male-silhouette-png-clip-art-5a3bf62bd3b246.0734705815138790838671-removebg-preview.png') ; 
    }
}
function calc_BMI(){
   
    var gen = document.querySelector("#select").value;
    
    var age = document.querySelector("#years").value;
    if(age==null || age==""){
        window.alert("You need to fill all the fields ");
        return document.querySelector("#years").focus();

    }else if(age<0 || age>130){
        window.alert("Invalid age ")
        return document.querySelector("#years").focus();
    }
  
    var height = document.querySelector("#hei").value;
    if(height==null || height==""){
        window.alert("You need to fill all the fields ");
        return document.querySelector("#hei").focus();

    }else if(height<30 || height>300){
        window.alert("Invalid height ")
        return document.querySelector("#hei").focus();
    }
   
    var weight = document.querySelector("#wei").value;
    if(weight==null || weight==""){
        window.alert("You need to fill all the fields ");
        return document.querySelector("#wei").focus();

    }else if(weight<10 || weight>1000){
        window.alert("Invalid weight")
        return document.querySelector("#wei").focus();
    }
    
    height = height/100;
    var BMI =weight/(height*height);

    BMI = BMI.toFixed(2);
    height = height.toFixed(2);

    toggle();
    alter(height,weight,age,BMI,gen);
   
}

function alter(height,weight,age,BMI, gen){
    document.querySelector(".bmi").textContent= BMI;
    document.querySelector(".result_age").textContent= age;
    document.querySelector(".result_gen").textContent= gen;
    document.querySelector(".result_wei").textContent= weight;
    document.querySelector(".result_hei").textContent= height;

    if(BMI>=40){
        document.querySelector(".result_bmi").textContent="Obesity class III";
        document.querySelector(".result_bmi").style.color = "#950000";
    }else if(BMI>=35){
        document.querySelector(".result_bmi").textContent="Obesity class II";
        document.querySelector(".result_bmi").style.color = "#B30000";
    }else if(BMI>=30){
        document.querySelector(".result_bmi").textContent="Obesity class I";
        document.querySelector(".result_bmi").style.color = "#FF0000";
    }else if(BMI>=25){
        document.querySelector(".result_bmi").textContent="Pre-obesity";
        document.querySelector(".result_bmi").style.color = "#FF4D00";
    }else if(BMI>=18.5){
        document.querySelector(".result_bmi").textContent="Normal weight";
        document.querySelector(".result_bmi").style.color = "#00FF00";
    }else{
        document.querySelector(".result_bmi").textContent="Underweight";
        document.querySelector(".result_bmi").style.color = "#00025E";
    }

}
function toggle(){
    var element = document.getElementById("result");
  element.classList.toggle("invisible");
    var element2 = document.getElementById("calculation");
  element2.classList.toggle("invisible");
}