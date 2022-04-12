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
   
}