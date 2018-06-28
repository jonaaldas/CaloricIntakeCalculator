class Macro{
  constructor(weight, perProtein, perFats, perCarbs){
    this.weight = weight;
    this.perProtein = perProtein;
    this.perFats = perFats;
    this.perCarbs = perCarbs;
  }

  caloricIntakeFatLoss(){
   let  dailyCalories = this.weight * 12;
   return dailyCalories;
  }

  calProteinFatLoss(){
    let protein = Math.floor((this.weight * 12) * (this.perProtein/100)/4)
    return protein;
  }
  calFatFatLoss(){
    let fat = Math.floor((this.weight * 12) * (this.perFats/100)/9)
    return fat;
  }
  calCarbsFatLoss(){
    let carbs = Math.floor((this.weight * 12) * (this.perCarbs/100)/4)
    return carbs;
  }

  caloricIntakeGainWeight(){
    let  dailyCalories = this.weight * 15;
    return dailyCalories;
   }
 
   calProteinGainWeight(){
     let protein = Math.floor((this.weight * 15 + 200) * (this.perProtein/100)/4)
     return protein;
   }
   calFatGainWeight(){
     let fat = Math.floor((this.weight * 15 + 200) * (this.perFats/100)/9)
     return fat;
   }
   calCarbsGainWeight(){
     let carbs = Math.floor((this.weight * 15 + 200) * (this.perCarbs/100)/4)
     return carbs;
   }
 
}



document.querySelector('.gain-weight').addEventListener('click', function(){
  let weight = document.querySelector('.weight').value;
  let protein = document.querySelector('.protein').value;
  let fats = document.querySelector('.fats').value;
  let carbs = document.querySelector('.carbs').value;
  let person = new Macro(weight, protein, fats, carbs);
  
  if(parseInt(protein) <1 && parseInt(fats) <1 && parseInt(carbs) <1){
    alert('please enter wholoe number');
  } else if(parseInt(protein) + parseInt(fats) + parseInt(carbs) === 100){
  document.querySelector('#result').innerHTML = `
    <p class='results'>Caloric Intake ${person.caloricIntakeGainWeight()}</p>
    <p class='results'>Protein ${person.calProteinGainWeight()} g</p>
    <p class='results'>Fat ${person.calFatGainWeight()}</p>
    <p class='results'>Carbs ${person.calCarbsGainWeight()} g</p>
  `
   } else {
     alert('need to add up to 100');
   }
  
});

document.querySelector('.lose-weight').addEventListener('click', function(){
  let weight = document.querySelector('.weight').value;
  let protein = document.querySelector('.protein').value;
  let fats = document.querySelector('.fats').value;
  let carbs = document.querySelector('.carbs').value;
  let person = new Macro(weight, protein, fats, carbs);
  
  if(parseInt(protein) <1 && parseInt(fats) <1 && parseInt(carbs) <1){
    alert('please enter wholoe number');
  } else if(parseInt(protein) + parseInt(fats) + parseInt(carbs) === 100){
  document.querySelector('#result').innerHTML = `
    <p class='results'>Calories ${person.caloricIntakeFatLoss()}</p>
    <p class='results'>Protein ${person.calProteinFatLoss()} g</p>
    <p class='results'>Fat ${person.calFatFatLoss()} g</p>
    <p class='results'>Carbs ${person.calCarbsFatLoss()} g</p>
  `
   } else {
     alert('need to add up to 100');
   }
  
})


