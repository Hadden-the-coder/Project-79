name_of_toppings_array=[];

function submit(){
    var Name1= document.getElementById("name_of_the_topping_1").value;
    var Name2= document.getElementById("name_of_the_topping_2").value;
    var Name3= document.getElementById("name_of_the_topping_3").value;
    var Name4= document.getElementById("name_of_the_topping_4").value;
    name_of_toppings_array.push(Name1);
    name_of_toppings_array.push(Name2);
    name_of_toppings_array.push(Name3);
    name_of_toppings_array.push(Name4);
    console.log(name_of_toppings_array);
    document.getElementById("display_name").innerHTML=name_of_toppings_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    name_of_toppings_array.sort();
    console.log(name_of_toppings_array);
    document.getElementById("display_name").innerHTML=name_of_toppings_array;
}