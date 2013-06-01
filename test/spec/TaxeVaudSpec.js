describe("TaxeVaud", function() {
  
  var taxeVD;
  
  beforeEach(function() {
    taxeVD = new TaxeVaud();
  });

  describe("when TaxeVaud is used to calculate tax for a car", function() {
    
    it("should be able to throw an exception with negative power", function() { 
      expect( function() {taxeVD.car( 1300, -10 )} ).toThrow("Negative weight or power");
    });
    
    it("should be able to throw an exception with negative weight", function() { 
      expect( function() {taxeVD.car( -180, 80 )} ).toThrow("Negative weight or power");
    });
    
    it("should be able to throw an exception with negative weight and power", function() { 
      expect( function() {taxeVD.car( -180, -80 )} ).toThrow("Negative weight or power");
    });
    
    it("should be able to throw an exception if the car is too heavy", function() { 
      expect( function() {taxeVD.car( 4000, 80 )} ).toThrow("You have a truck");
    });

    it("should be able to calculate tax", function() { 
      expect( taxeVD.car( 1300, 66 ) ).toEqual(367);
      expect( taxeVD.car( 1500, 110 ) ).toEqual(495);
      expect( taxeVD.car( 2400, 66 ) ).toEqual(592);
      expect( taxeVD.car( 2200, 160 ) ).toEqual(780);
    });
  });
  
  describe("when TaxeVaud is used to calculate tax for a truck", function() {
    
    it("should be able to throw an exception with weigth less than 3500", function() { 
      expect( function() {taxeVD.truck( 3400, 2 )} ).toThrow("You have a car");
    });
    
    it("should be able to throw an exception with weigth less than 3500 and negative euro norme", function() { 
      expect( function() {taxeVD.truck( 3400, -2 )} ).toThrow("You have a car");
    });
    
    it("should be able to throw an exception with negative euro norme", function() { 
      expect( function() {taxeVD.truck( 4500, -2 )} ).toThrow("Negative euro norme");
    });
    
    it("should be able to calculate tax", function() {
      
      var weights    = [3600, 3600, 3600, 4000, 4000, 4000, 4001, 5000, 5001];
      var euroNormes = [   1,    3,    5,    0,    3,    4,    2,    2,    2];
      var totals     = [ 560,  448,  364,  560,  448,  364,  700,  700,  840];
      
      for (var i = 0; i < weights.length; i++) {
        expect(taxeVD.truck(weights[i], euroNormes[i])).toEqual(totals[i]);
      }      
    });  
  });
  
  describe("when TaxeVaud is used to calculate tax for a motorcycle", function() {
    
    it("should be able to throw an exception with negative cm3", function() { 
      expect( function() {taxeVD.motorcycle( -100 )} ).toThrow("Negative cm3");
    });
    
    it("should be able to calculate tax", function() {
      
      var cm3    = [ 35, 50, 75, 100, 101, 250, 750, 1000];
      var totals = [ 65, 65, 87,  87, 109, 131, 241,  285];
      
      for (var i = 0; i < cm3.length; i++) {
        expect(taxeVD.motorcycle( cm3[i] )).toEqual(totals[i]);
      }      
    });
  });
  
  
});