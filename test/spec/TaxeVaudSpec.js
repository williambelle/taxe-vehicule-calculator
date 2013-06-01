describe("TaxeVaud", function() {
  
  var taxeVD;
  
  beforeEach(function() {
    taxeVD = new TaxeVaud();
  });

  describe("when TaxesVaud is used to find taxe for a car", function() {
    
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

    it("should be able to calcul taxe", function() { 
      expect( taxeVD.car( 1300, 66 ) ).toEqual(367);
    });
    
    it("should be able to calcul taxe", function() { 
      expect( taxeVD.car( 1500, 110 ) ).toEqual(495);
    });
    
    it("should be able to calcul taxe", function() { 
      expect( taxeVD.car( 2400, 66 ) ).toEqual(592);
    });
    
    it("should be able to calcul taxe", function() { 
      expect( taxeVD.car( 2200, 160 ) ).toEqual(780);
    });
  });
});