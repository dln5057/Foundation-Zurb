import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation().ready( function(){
  $("#getdata-button").click(function() {
    console.log("reading read_data!!");







    // $.getJSON("../dealers.json", function(data) {
    //   // document.getElementById("companies").innerHTML = data.dealers[1]["name"]
    //   // var source   = document.getElementById('text-template').innerHTML;
    //   // var template = Handlebars.compile(source);
    //   // var html    = template(data);
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //     //individual dealer array
    //   var dealers = data.dealers;
    //   console.log(data);
    //   console.log(data.dealers[1]);
    //   console.log(dealers[1]);
    //   var certs =[dealers[1].data.certifications];
    //   $.each(certs, function(i, val){
    //     console.log("i issss " + i);
    //     console.log("val isss " + val);
    //     var value = val[i];
    //     console.log("This is the Value" + value)
    //     console.log("Week hours " + dealers[1].data.weekHours.mon)
    //     if(value == "Installation Pro"){
    //       $(".company_list").append("<h2 class='company-name'>" + dealers[1].data.name + "<h2>");
    //       $(".company_list").append("<p class='phone'>" + dealers[1].data.phone1 + "<p>");
    //       $(".company_list").append("<p class='click-below'><i>Can't talk now? Click below to send an email.<i><p>");
    //       $(".company_list").append("<a class='contact' href="+dealers[1].data.email+">Contact this pro</a>");
    //       $(".company_list").append("<p class='hours'><strong>Business Hours</strong></p>");
    //       $(".company_list").append("<p class='weekdays'>Weekdays "  + dealers[1].data.weekHours.mon + "</p>");
    //       $(".company_list").append("<p class='saturday'>Saturdays "  + dealers[1].data.weekHours.sat + "</p>");
    //       $(".company_list").append("<p class='sunday'>Sundays "  + dealers[1].data.weekHours.sun + "</p>");
    //     }else{
    //       alert("this blows");
    //     }
    //   });
    // });
  });
});


// for (i=0; i < certs.length; i++){
//   if(certs[i] == "Installation Pro"){
//     alert("This is right!");
//   }else{
//     alert("this blows");
//   }
// }
