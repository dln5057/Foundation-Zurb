import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation().ready( function(){
  $("#getdata-button").click(function() {
    $.getJSON('../dealers.json', function(read_data) {
      console.log(read_data)
    });
  });
});
