//... sticky header
if ($(window).width() > 576) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass("fixed-top");
            // add padding top to show content behind navbar
            $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
        } else {
            $('.navbar').removeClass("fixed-top");
            // remove padding top from body
            $('body').css('padding-top', '0');
        }
    });
}

if ($(window).width() < 576) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass("fixed-top");
            // add padding top to show content behind navbar
            $('body').css('padding-top', '60px');
        } else {
            $('.navbar').removeClass("fixed-top");
            // remove padding top from body
            $('body').css('padding-top', '0');
        }
    });
}

//... srrow down click event
$(".hero_arrow_down").click(function () {
    $('html, body').animate({
        scrollTop: $(".menu").offset().top
    }, 1000);
});

//... Prefabbricati slider
$('.prefabbricati_slider_row').owlCarousel({
    // center: true,
    loop: true,
    margin: 30,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        992: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
});

$('.prefabbricati_slider_double_row').owlCarousel({
    slideSpeed : 300,
    paginationSpeed : 400,
    loop: true,
    margin: 30,
    dots: false,
    pagination: true,
    paginationNumbers: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    }
});

//... custom arrows of Prefabbricati slider
var selector = $('.owl-carousel');
$('.my-next-button').click(function () {
    $(this).parent().parent().find(selector).trigger('next.owl.carousel');
});
$('.my-prev-button').click(function () {
    $(this).parent().parent().find(selector).trigger('prev.owl.carousel');
});


//... change active class to li
$(".menu li").click(function(){
    $(this).parent().find( 'li.active' ).removeClass( 'active' );
    $(this).addClass("active");
})

$(".filter li").click(function(){
    $(this).parent().find( 'li.active' ).removeClass( 'active' );
    $(this).addClass("active");
})

//... google map

var map;

// Inserire coordinate
var Lat = 46.4125232;
var Lng = 10.4914527;
// Sito per le coordinate: https://www.mapcoordinates.net/it

// Inserire stile
var stile = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#e9ecec"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#e9ecec"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#e9ecec"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ff0000"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": "44"
            },
            {
                "lightness": "-7"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "labels.icon",
        "stylers": [
            {
                "hue": "#9eff00"
            },
            {
                "lightness": "0"
            },
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.icon",
        "stylers": [
            {
                "hue": "#ffb900"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "labels.icon",
        "stylers": [
            {
                "saturation": "-100"
            },
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "labels.icon",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": "-36"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "hue": "#ff0000"
            },
            {
                "saturation": "-100"
            },
            {
                "lightness": "9"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#d2d2d2"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#a0c9d5"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    }
];

function initMap() {
    var mapElement = document.getElementById("map");
    if (!mapElement) {
        return;
    }
    map = new google.maps.Map(mapElement, {
        zoom: 16,
        center: new google.maps.LatLng(Lat, Lng),
        mapTypeId: "roadmap",
        // scrollwheel: true,
        // draggable: true,
        mapTypeControl: false,
        disableDefaultUI: true,
        styles: stile,
    });

    var icons = {
        pin: {
            icon: {
                url: "./assets/image/pin.svg",
                //anchor: new google.maps.Point(118, 10)
            },
        },
    };

    function addMarker(feature) {
        var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map,
        });
    }

    var features = [
        {
            position: new google.maps.LatLng(Lat, Lng),
            type: "pin",
        },
    ];

    for (var i = 0, feature; (feature = features[i]); i++) {
        addMarker(feature);
    }
}