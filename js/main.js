$.getJSON( "https://api.nbp.pl/api/exchangerates/rates/a/gbp/?format=json", function( data ) {
  $('#score').text("1 GBP = " + data.rates[0].mid +" PLN");
  val = data.rates[0].mid;
    $(document).ready(function() {
      $('#GBP_input').bind('keyup', function(e){
          let gbp = $('#GBP_input').val();
          gbp = parseFloat(gbp);
          if(!isNaN(gbp) && gbp > 0){
            let result = val * gbp;
            $('#PLN_input').val(result.toFixed(2));
          }
          else{
            $('#PLN_input').val("");
          }
      });
      $('#PLN_input').bind('keyup', function(e){
        let pln = $('#PLN_input').val();
        pln = parseFloat(pln);
        if(!isNaN(pln) && pln > 0){
          let result = pln / val;
          $('#GBP_input').val(result.toFixed(2));
        }
        else{
          $('#GBP_input').val("");
        }
      })
    });
});
