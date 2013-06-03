(function($) {

    $(document).delegate( '#carTax', 'tap', function(event){
      event.preventDefault();
      
      var taxeVaud = new TaxeVaud();
      
      var result = taxeVaud.car(
        $('input[name=weight]', '#cartaxform').val(),
        $('input[name=power]', '#cartaxform').val()
      );  

      $('.result').text(result);
      $('.result-container').show();
    });
    
    $(document).delegate( '#truckTax', 'tap', function(event){
      event.preventDefault();
      
      var taxeVaud = new TaxeVaud();

      var result = taxeVaud.truck(
        $('input[name=weight]', '#trucktaxform').val(),
        $('input[name=euroNorme]:checked', '#trucktaxform').val()
      ); 
       
      $('.result').text(result);
      $('.result-container').show();
    });
    
    $(document).delegate( '#motorcycleTax', 'tap', function(event){
      event.preventDefault();
      
      var taxeVaud = new TaxeVaud();

      var result = taxeVaud.motorcycle(
        $('input[name=cm3]', '#motorcycletaxform').val()
      ); 
       
      $('.result').text(result);
      $('.result-container').show();
    });

})(jQuery);
