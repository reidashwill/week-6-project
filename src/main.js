import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Converter } from './../src/converter.js';

$(document).ready(function(){
  let conversionTest = new Converter
  conversionTest.apiCall();
})
