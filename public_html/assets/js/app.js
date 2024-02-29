/*!
=========================================================
* JohnDoe Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});

//Download Resume Button Listeners
document.addEventListener("DOMContentLoaded", function() {
  const downloadButtons = document.querySelectorAll(".download-resume");
  const openPdfButton = document.getElementById("openResume");

  downloadButtons.forEach(button => {
      button.addEventListener("click", () => {
          const pdfURL = "assets/Sean Rowell Resume.pdf"; // Replace with the actual path to your PDF file
          const link = document.createElement("a");
          link.href = pdfURL;
          link.download = "Sean Rowell Resume.pdf"; // Set the desired filename for the downloaded PDF
          link.click();
      });
  });
});

//Opens Resume PDF in a new tab

//Send a message functionality

const sendMessageButton = document.getElementById('sendMessageButton');

var url = "https://script.google.com/macros/s/AKfycbxraEcfPNbCYifek4qEQohIxvU6odNXJLlL_hnsURYNUbizsQRgjE-PIGRkEXFSv08/exec";

function sendMessage(){
  var m_name = document.getElementById("m_name");
  var m_email = document.getElementById("m_email");
  var m_message = document.getElementById("m_message");
  var full_message = "You have a new message from: " + m_name.value + "\n\nEmail: " + m_email.value + "\n\nMessage: " + m_message.value;
  console.log("output");
  console.log(m_name.value);
  console.log(m_email.value);
  console.log(m_message.value);
  if (m_name.value != "" && m_email.value != "" && m_message.value != ""){
    fetch(url + "?q=" + JSON.stringify([
        "sxrowell@yahoo.com",
        "Website: New Message",
        full_message
      ])).then(() => {
        // here you can let the user know their contact was received
      });
  }
  
}


// google maps
// function initMap() {
// // Styles a map in night mode.
//     var map = new google.maps.Map(document.getElementById('map'), {
//         center: {lat: 40.674, lng: -73.945},
//         zoom: 12,
//         scrollwheel:  false,
//         navigationControl: false,
//         mapTypeControl: false,
//         scaleControl: false,
//       styles: [
//         {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
//         {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
//         {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
//         {
//           featureType: 'administrative.locality',
//           elementType: 'labels.text.fill',
//           stylers: [{color: '#d59563'}]
//         },
//         {
//           featureType: 'poi',
//           elementType: 'labels.text.fill',
//           stylers: [{color: '#d59563'}]
//         },
//         {
//           featureType: 'poi.park',
//           elementType: 'geometry',
//           stylers: [{color: '#263c3f'}]
//         },
//         {
//           featureType: 'poi.park',
//           elementType: 'labels.text.fill',
//           stylers: [{color: '#6b9a76'}]
//         },
//         {
//           featureType: 'road',
//           elementType: 'geometry',
//           stylers: [{color: '#38414e'}]
//         },
//         {
//           featureType: 'road',
//           elementType: 'geometry.stroke',
//           stylers: [{color: '#212a37'}]
//         },
//         {
//           featureType: 'road',
//           elementType: 'labels.text.fill',
//           stylers: [{color: '#9ca5b3'}]
//         },
//         {
//           featureType: 'road.highway',
//           elementType: 'geometry',
//           stylers: [{color: '#746855'}]
//         },
//         {
//           featureType: 'road.highway',
//           elementType: 'geometry.stroke',
//           stylers: [{color: '#1f2835'}]
//         },
//         {
//           featureType: 'road.highway',
//           elementType: 'labels.text.fill',
//           stylers: [{color: '#f3d19c'}]
//         },
//         {
//           featureType: 'transit',
//           elementType: 'geometry',
//           stylers: [{color: '#2f3948'}]
//         },
//         {
//           featureType: 'transit.station',
//           elementType: 'labels.text.fill',
//           stylers: [{color: '#d59563'}]
//         },
//         {
//           featureType: 'water',
//           elementType: 'geometry',
//           stylers: [{color: '#17263c'}]
//         },
//         {
//           featureType: 'water',
//           elementType: 'labels.text.fill',
//           stylers: [{color: '#515c6d'}]
//         },
//         {
//           featureType: 'water',
//           elementType: 'labels.text.stroke',
//           stylers: [{color: '#17263c'}]
//         }
//       ]
//     });
//}
