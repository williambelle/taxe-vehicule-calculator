function TaxeVaud() {
}

TaxeVaud.prototype.car = function( weight, power ){
  
  var total = 40;
  
  if ( weight < 0 || power < 0 ) {
    throw new Error("Negative weight or power");
  } else if ( weight >= 3500 ){
    throw new Error("You have a truck"); 
  }
  
  if ( weight <= 2000 ){
    total += 0.15 * weight;
  } else {
    total += ( weight - 2000 ) * 0.3 + 0.15 * 2000;
  }
  
  if ( power <= 100 ){
    total += 2 * power;
  } else {
    total += ( power - 100 ) * 3 + 2 * 100;
  }

  return total;
};

TaxeVaud.prototype.truck = function( weight, euroNorme ){
  
  var total = 560;
  
  if ( weight < 3500 ) {
    throw new Error("You have a car"); 
  } else if ( euroNorme < 0){
    throw new Error("Negative euro norme"); 
  }
  
  var diff = weight-4000;
  if ( diff > 0 ){
    total += Math.ceil(diff/1000) * 140; 
  }
  
  if ( euroNorme === 3 ){
    total -= total*20/100;
  } else if ( euroNorme > 3 ){
    total -= total*35/100;  
  } 
  
  return total;
};