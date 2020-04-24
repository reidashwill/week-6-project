import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Converter } from './../src/converter.js';

$(document).ready(function(){
  
  (async () => {
    let conversions = new Converter;
    let response = await conversions.apiCall();
    console.log(response.conversion_rates.USD);
  })();
  
});
