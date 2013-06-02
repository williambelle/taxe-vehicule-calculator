(function($) {

    $(document).delegate( '#carTax', 'tap', function(event){
      event.preventDefault();
      
      var taxeVaud = new TaxeVaud();
      
      var result = taxeVaud.car(
        $('#cartaxform [name=weight]').val(),
        $('#cartaxform [name=power]').val()
      );  
      $('#resultat').text(result);

    });

})(jQuery);
