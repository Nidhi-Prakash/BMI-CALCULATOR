function BMI() {
    var h = document.getElementById('h').value;
    var w = document.getElementById('w').value;
    var bmi = w / (h / 100 * h / 100);
    var bmio = (bmi.toFixed(2));

    document.getElementById("result").innerHTML = "Your BMI is " + bmio;
    
    if(bmio<18.5){
        document.getElementById("category").innerHTML = "You're UNDERWEIGHT "
    } else if(bmio>=18.5 && bmio<=24.9){
        document.getElementById("category").innerHTML = "You're NORMAL "
    } else if(bmio>=25 && bmio<-29.9){
        document.getElementById("category").innerHTML = "You're OVERWEIGHT "
    } else{
        document.getElementById("category").innerHTML = "You're OBESE "
    }
}