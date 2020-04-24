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
      let response = await conversions.apiCall();
      conversions.usd = $("#amount").val();
      conversions.currency = $("#currencySelector").val()
      if(conversions.currency === "EUR"){
       conversions.usd.convert(conversions.currency);
      }
      console.log(response.conversion_rates.USD);
    })();
  })
});
