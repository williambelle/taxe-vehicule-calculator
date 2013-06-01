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
