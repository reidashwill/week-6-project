import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Converter } from './../src/converter.js';


$(document).ready(function(){
  $("#formGroup").submit(function(event){
    event.preventDefault();
    (async () => {
      let conversions = new Converter;
      conversions.usd = parseInt($("#amount").val());
      conversions.currency = $("#currencySelector").val();
      let response = await conversions.apiCall();
      let response2 = await conversions.bitCoinApiCall();
      conversions.eurRate = response.conversion_rates.EUR;
      conversions.cadRate = response.conversion_rates.CAD;
      conversions.dkkRate = response.conversion_rates.DKK;
      conversions.egpRate = response.conversion_rates.EGP;
      conversions.gbpRate = response.conversion_rates.GBP;
      conversions.nokRate = response.conversion_rates.NOK;
      conversions.sekRate = response.conversion_rates.SEK;
      conversions.rubRate = response.conversion_rates.RUB;
      conversions.btcPrice = response2.USD.buy;
      conversions.convert(response);
      if(conversions.currency !== "eur" && conversions.currency !== "cad" && conversions.currency !== "dkk" && conversions.currency !== "egp" && conversions.currency !== "gbp" && conversions.currency !== "nok" && conversions.currency !== "sek" && conversions.currency !== "rub"){
        alert("This currency is not currently supported!");
      }
      $(".results").show();
      $("#input-return").html(conversions.usd);
      $("#converted-return").html(" " + conversions.converted);
      $("#currency-type").html(" " + conversions.currency.toUpperCase());
      $("#bit-coin-return").html(conversions.bitCoinPotential);
    })();
  });
});
