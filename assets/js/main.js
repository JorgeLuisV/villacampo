$('.dropdown').hover(
  function () {
    $(this).addClass('open')
  }, 
  function () {
    $(this).removeClass('open')
  }
)

$('.nav-inline .link').click(function(e){
  e.preventDefault()
  var href = $(this).attr('href')
  if(href){
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 1000)
  } else {
    return false
  }
})

function stopVideo(){
  if($('.play').hasClass('hidden')){
    $('.video-container video').get(0).pause()
    $('.play').removeClass('fadeOut')
    $('.play').addClass('fadeIn')
    $('.play').removeClass('hidden')
  } else {
    $('.video-container video').get(0).play()
    $('.play').removeClass('fadeIn')
    $('.play').addClass('fadeOut')
    $('.play').addClass('hidden')
  }
}

function setVideo(name){
  const selector = $('.video-container video')

  selector.get(0).pause();
    $('#mp4').attr('src', `assets/media/${name}.mp4`);
    $('#webm').attr('src', `assets/media/${name}.webm`);
    selector.get(0).load();
    selector.attr('poster', `assets/media/${name}.jpg`);
    selector.get(0).play();
}

var wow = new WOW({
    mobile: false
});
wow.init();

function buildOlmosMap(){
  let areas = {
      a1: {coords: 'M13.667,32.333C24.333,22,46.667,22,69,22V83H2C2,62.667,2,42.333,13.667,32.333Z', type: 3, area: 4999},
      a2: {coords: 'M75.014,22.049l61.936-.036,0.036,59.938-61.936.036Z', type: 3, area: 1557},
      a3: {coords: 'M144.014,22.049l60.937-.036,0.035,59.938-60.937.036Z', type: 1, area: 1266},
      a4: {coords: 'M212.014,22.049l60.937-.036,0.035,59.938-60.937.036Z', type: 3, area: 1180},
      a5: {coords: 'M280.012,22.049l51.946-.036,0.03,59.938-51.946.036Z', type: 1, area: 1766},
      a6: {coords: 'M337,22c22,0,44,0,53.333,10C403,42.333,403,62.667,403,83H337V22Z', type: 1, area: 2038},
      b1: {coords: 'M9.005,568.989l185,0.022-0.01,116-185-.022Z', type: 1, area: 2666},
      b2: {coords: 'M207.005,568.989l185,0.022-0.01,116-185-.022Z', type: 1, area: 1250},
      b3: {coords: 'M207.005,407.986l185,0.028-0.01,150-185-.028Z', type: 1, area: 1680},
      b4: {coords: 'M9.005,407.986l185,0.028-0.01,150-185-.028Z', type: 2, area: 3022},
      b5: {coords: 'M207.005,248.986l185,0.028-0.01,150-185-.028Z', type: 2, area: 4663},
      b6: {coords: 'M9.005,248.986l185,0.028-0.01,150-185-.028Z', type: 1, area: 1268},
      b7: {coords: 'M9.005,103.987l185,0.026-0.01,133-185-.026Z', type: 1, area: 5022},
      b8: {coords: 'M207.005,103.987l185,0.026-0.01,133-185-.026Z', type: 2, area: 3007},
      c1: {coords: 'M402,576l95.281,17.461,78.65-71.889s39.867,124.97,39.843,124.99c0,0-90.747,38.481-90.767,38.473-0.389-.153-122.37-0.614-122.37-0.614S403.5,576,402,576h0Z', type: 3, area: 4009},
      c2: {coords: 'M402,429l67.067,13.9,62.694-60.644L575.7,510.272c0.281,1.641-79.656,73.5-79.656,73.5L402,566V429Z', type: 2, area: 8709},
      c3: {coords: 'M402,251c-0.092.581,37.877,10.87,37.877,10.87-1.9-.063,38.7-41.2,38.7-41.2l51.339,147.912c-0.148,1-61.164,60.364-61.164,60.364L402,416V251Z', type: 3, area: 7000},
      c4: {coords: 'M402,104l23.669,9.155,16.5-8.653,33.4,106.517s-36.924,39.5-36.883,39.306L402,240V104Z', type: 3, area: 6301},
      d1: {coords: 'M604.393,537.738L731.422,493.7l34.851,110.223-127.029,44.04Z', type: 1, area: 1234},
      d2: {coords: 'M747.987,486.97l127.127-43.959,34.878,110.023L782.865,596.993Z', type: 1, area: 3214},
      d3: {coords: 'M555.585,382.6l125.128-39.567,44.752,141.523L600.336,524.126Z', type: 1, area: 4562},
      d4: {coords: 'M698.987,330.128l126.5-40.2,45.286,142.5-126.5,40.2Z', type: 2, area: 6543},
      d5: {coords: 'M505.152,230.29l126.1-39.9,44.875,141.822-126.1,39.9Z', type: 1, area: 1472},
      d6: {coords: 'M649.906,178.137l125.072-40.655,46.031,141.607L695.937,319.745Z', type: 3, area: 2585},
      d7: {coords: 'M460.567,94.172l125.445-40.09,40.359,126.287-125.445,40.09Z', type: 1, area: 3690},
      d8: {coords: 'M604.427,41.227L730.261,0.381l40.875,125.925L645.3,167.152Z', type: 1, area: 1230}
    },
    width = 911,
    height = 686,
    indigo = {
      "fill": "#3F51B5",
      "stroke": "#fff",
      "stroke-width": "0.75"
    },
    teal = {
      "fill": "#009688",
      "stroke": "#fff",
      "stroke-width": "0.75"
    },
    orange = {
      "fill": "#FF9800",
      "stroke": "#fff",
      "stroke-width": "0.75"
    },
    buildAreas = {}

  let paper = Raphael('oresmap', width, height)
  paper.setViewBox(0, 0, width, height);

  paper.canvas.removeAttribute('width');
  paper.canvas.removeAttribute('height');
  paper.canvas.setAttribute('preserveAspectRatio', 'none');

  $.each(areas,(i,item) => {
    if (item.type == 1) {
      buildAreas[i] = paper.path(item.coords).attr(indigo)
      buildAreas[i].area = item.area
    }else if(item.type == 2) {
      buildAreas[i] = paper.path(item.coords).attr(teal)
      buildAreas[i].area = item.area
    } else {
      buildAreas[i] = paper.path(item.coords).attr(orange)
      buildAreas[i].area = item.area
    }
  })

  for (var area in buildAreas) {
    buildAreas[area].orColor = buildAreas[area].attrs.fill;
    
    ((st, area) => {

      st[0].style.cursor = "pointer";

      st[0].onmouseover = () => {
        st.animate({fill: '#FFF', "stroke": buildAreas[area].orColor, "stroke-width": "5"}, 500)
        st.toFront()
        $('#zarea').html(`${st.area} m²`)
      }

      st[0].onmouseout = () => {
        st.animate({fill: buildAreas[area].orColor, "stroke": '#FFF', "stroke-width": "0.75"}, 500)
        st.toFront()
        $('#zarea').html('-')
      }
                 
    })(buildAreas[area], area)
  }

}

function buildJayancaMap(){
  let areas = {
      a1: {coords: 'M29.726,100.993l114.262,48.54c0.1,0.142-9.428,102.787-9.428,102.787L20.17,212.6Z', type: 2, area: 4999},
      a2: {coords: 'M152.161,154.3S288.6,212.446,288.776,212.222l-8.119,91.326c0.087-.174-137.67-47.782-137.67-47.782Z', type: 1, area: 1557},
      a3: {coords: 'M297.175,215.988l132.438,57.386c1.051,1.251-7.407,81.458-7.407,81.458-0.1.006-133.355-47.126-133.355-47.126Z', type: 2, area: 1266},
      a4: {coords: 'M436.339,275.988l128.242,55.351-6.558,73.113c0.279-.964-128.647-45.116-128.647-45.116Z', type: 1, area: 1180},
      a5: {coords: 'M20.183,222.661L134.943,261.7,124.52,368.025S9.533,334.774,9.684,334.809Z', type: 1, area: 1766},
      a6: {coords: 'M142.737,265.538l140.48,49.45L272.641,414.8c0.082-.042-140.291-42.449-140.291-42.449Z', type: 2, area: 2038},
      a7: {coords: 'M289.39,318.116l132.392,44.832L413.031,457.8c-0.238.117-132.872-38.9-132.872-38.9Z', type: 3, area: 1766},
      a8: {coords: 'M429.316,367.524l127.959,45.419-7.5,86.7c-0.624-.322-128.988-38.959-128.988-38.959Z', type: 1, area: 2038},
      a9: {coords: 'M9.339,347.321l115.792,31.924-7.054,85.479L2,437.69Z', type: 2, area: 4999},
      a10: {coords: 'M131.987,385.35l140.381,40.5-7.039,79.162L125.775,469.146Z', type: 1, area: 1557},
      a11: {coords: 'M280.034,430.644l131.1,38.248-6.623,74.068L273.24,509.109Z', type: 1, area: 1266},
      a12: {coords: 'M420.557,474.028l129.38,38.893s-5.552,69.835-5.569,69.884c0,0-129.806-35.4-129.989-34.8Z', type: 1, area: 1180},
      b1: {coords: 'M566.189,462.287l52.392-51.669L614.35,531.267s-57.849,55.778-58.615,53.987C555.72,585.218,566.189,462.287,566.189,462.287Z', type: 3, area: 4999},
      b2: {coords: 'M625.968,407.434L747.508,294.46s64.655,64.562,63.934,65.21l-190.022,167Z', type: 1, area: 1557},
      b3: {coords: 'M753.547,290.129L826.389,222.3l83.35,52.248c7.286-6.918-92.775,80.349-92.775,80.349C816.949,354.958,753.547,290.129,753.547,290.129Z', type: 3, area: 1266},
      b4: {coords: 'M701.012,235.79l64.018-50.776,56.022,34.695c-0.38-1.713-72.361,66.3-72.361,66.3Z', type: 1, area: 1180},
      b5: {coords: 'M629.667,290.8L694.4,239.764l47.12,49.952C737.777,293.8,626.01,396.8,626.01,396.8,625.917,396.743,629.667,290.8,629.667,290.8Z', type: 2, area: 1766},
      b6: {coords: 'M578.182,332.326l44.9-35.76s-4.384,103.218-4.525,103.263c-0.79.251-51.3,49.186-51.3,49.186C568.055,448.3,578.182,332.326,578.182,332.326Z', type: 3, area: 2038}
    },
    width = 911,
    height = 686,
    indigo = {
      "fill": "#3F51B5",
      "stroke": "#fff",
      "stroke-width": "0.75"
    },
    teal = {
      "fill": "#009688",
      "stroke": "#fff",
      "stroke-width": "0.75"
    },
    orange = {
      "fill": "#FF9800",
      "stroke": "#fff",
      "stroke-width": "0.75"
    },
    buildAreas = {}

  let paper = Raphael('jresmap', width, height)
  paper.setViewBox(0, 0, width, height);

  paper.canvas.removeAttribute('width');
  paper.canvas.removeAttribute('height');
  paper.canvas.setAttribute('preserveAspectRatio', 'none');

  $.each(areas,(i,item) => {
    if (item.type == 1) {
      buildAreas[i] = paper.path(item.coords).attr(indigo)
      buildAreas[i].area = item.area
    }else if(item.type == 2) {
      buildAreas[i] = paper.path(item.coords).attr(teal)
      buildAreas[i].area = item.area
    } else {
      buildAreas[i] = paper.path(item.coords).attr(orange)
      buildAreas[i].area = item.area
    }
  })

  for (var area in buildAreas) {
    buildAreas[area].orColor = buildAreas[area].attrs.fill;
    
    ((st, area) => {

      st[0].style.cursor = "pointer";

      st[0].onmouseover = () => {
        st.animate({fill: '#FFF', "stroke": buildAreas[area].orColor, "stroke-width": "5"}, 500)
        st.toFront()
        $('#jarea').html(`${st.area} m²`)
      }

      st[0].onmouseout = () => {
        st.animate({fill: buildAreas[area].orColor, "stroke": '#FFF', "stroke-width": "0.75"}, 500)
        st.toFront()
        $('#jarea').html('-')
      }
                 
    })(buildAreas[area], area)
  }

}


function infoVisibility(){
  let width = $(window).width()
  if(width >= 752){
    $('#info-text').removeClass('hidden')
    $('#info-text').removeClass('slideOutRight')
  } else {
    $('#info-text').addClass('hidden')
  }
}

function showInfoMap(){
  let selector = $('#info-text')
  if(selector.hasClass('hidden') || selector.hasClass('slideOutRight')){
    selector.removeClass('slideOutRight')
    selector.addClass('slideInRight')
    selector.removeClass('hidden')
  } else {
    selector.removeClass('slideInRight')
    selector.addClass('slideOutRight')
  }
  
}

function initMap() {
  let myLatLng = new google.maps.LatLng(-6.776597400000001,-79.84429779999999);
  
  let map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -6.776597400000001, lng: -79.84429779999999},
      zoom: 13,
      mapTypeControl: false,
      fullscreenControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT
      },
      streetViewControlOptions: {
        position: google.maps.ControlPosition.LEFT_BOTTOM
      },
      zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_BOTTOM
      }
  });

  let infowindow = new google.maps.InfoWindow();
  let marker = new google.maps.Marker({
      map: map,
      icon: 'assets/media/marker.png',
      anchorPoint: new google.maps.Point(0, -29)
  });
  
  google.maps.event.addDomListener(window, "resize", function() {
      let center = map.getCenter();
      google.maps.event.trigger(map, "resize");
      map.setCenter(center);
  });
      
  map.setOptions({styles: styles["silver"]})
  
  marker.setVisible(false);
  
  map.setCenter(myLatLng);
  map.setZoom(16);
  
  marker.setPosition(myLatLng);
  marker.setVisible(true);
}

var offset = 200
var duration = 500
$(window).scroll(function() {
  if ($(this).scrollTop() > offset) {
    $('.back-to-top').fadeIn(400)
  } else {
    $('.back-to-top').fadeOut(400)
  }
})
$('.back-to-top').click(function(event) {
  event.preventDefault()
  $('html, body').animate({
    scrollTop: 0
  }, 600)
  return false
})

$('#olmos-gallery').owlCarousel({
    navigation: true,
    navigationText : ['<i class="fas fa-caret-left"></i>','<i class="fas fa-caret-right"></i>'],
    pagination: false,
    items:4,
    itemsTablet:3,
    margin:90,
    stagePadding:90,
    smartSpeed:450,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,3],
    itemsTablet: [767,2],
    itemsTabletSmall: [480,2],
    itemsMobile : [479,1]
})

$('#olmos-gallery').lightGallery({
    selector: '.img-item',
    autoplayControls: false,
    fullScreen: false,
    zoom: false,
    download: false,
    share: false
})

$('#jayanca-gallery').owlCarousel({
  navigation: true,
  navigationText : ['<i class="fas fa-caret-left"></i>','<i class="fas fa-caret-right"></i>'],
  pagination: false,
  items:4,
  itemsTablet:3,
  margin:90,
  stagePadding:90,
  smartSpeed:450,
  itemsDesktop : [1199,4],
  itemsDesktopSmall : [980,3],
  itemsTablet: [768,3],
  itemsTablet: [767,2],
  itemsTabletSmall: [480,2],
  itemsMobile : [479,1]
})

$('#jayanca-gallery').lightGallery({
    selector: '.img-item',
    autoplayControls: false,
    fullScreen: false,
    zoom: false,
    download: false,
    share: false
})

$('#contactForm').submit(function(e){
    e.preventDefault()
    $('#contactForm')[0].reset()
      $('.infoForm').html('<p class="txdgreen animated fadeIn"><i class="fas fa-check-circle"></i> Mensaje enviado con éxito.</p>')
      setTimeout(function() {
        $('.infoForm').html('')
      }, 5000)
})

$(document).ready(function(){

  $('body').scrollspy({
    target: '#nav-villacampo'
  })

  $('.ctitle').mouseover( function(){
    $(this).find('i').css('color',"#FF9800")
    $(this).css('color',"#FF9800")
    $(this).parent('.scard').css('background-color',"#FF9800")
    $(this).next('p').css('visibility','visible')
  })

  $('.ctitle').mouseout( function(){
    
    if( $(this).parent('.scard').hasClass('green')){
      $(this).find('i').css('color',"#6ab143")
      $(this).css('color',"#6ab143")
      $(this).parent('.scard').css('background-color',"#6ab143")
    } else {
      $(this).find('i').css('color',"#008d31")
      $(this).css('color',"#008d31")
      $(this).parent('.scard').css('background-color',"#008d31")
    }
    $(this).next('p').css('visibility','hidden')
  })

  $('.video-pry').click(function(){
    return
    /*
    if( $(this).find('.play-pry').hasClass('fadeOut') ){
      $(this).find('.play-pry').removeClass('fadeOut')
      $(this).find('.play-pry').removeClass('hidden')
      $(this).find('.play-pry').addClass('animated fadeIn')
      $(this).find('#pvid')[0].pause()
    } else {
      $(this).find('.play-pry').removeClass('fadeIn')
      $(this).find('.play-pry').addClass('hidden')
      $(this).find('.play-pry').addClass('animated fadeOut')
      $(this).find('#pvid')[0].play()
    }*/
  })

  $('.izones').mouseover( function(){
    $('.zones-cont').css('padding-bottom','0px')
    $(this).parent().siblings('.zones-desc').find('a').css('display','none')
    $(this).parent().siblings('.zones-desc').find('p').css('display','block')
  })

  $('.izones').mouseout( function(){
    $('.zones-cont').css('padding-bottom','120px')
    $(this).parent().siblings('.zones-desc').find('p').css('display','none')
    $(this).parent().siblings('.zones-desc').find('a').css('display','inline-block')
  })

  buildOlmosMap()
  buildJayancaMap()

  $('.video-container').on('click',()=> {
    stopVideo()
  })

  if($(window).width() <= 750){
    $('#info-text').addClass('hidden')
  }

  initMap()

  $( window ).resize(() => {
    infoVisibility()
  })

  $('#infomap').on('click',()=> {
    showInfoMap()
  })

})

let styles = {
    default: null,
    silver: [
      {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#d3d3d3"
              }
          ]
      },
      {
          "featureType": "transit",
          "stylers": [
              {
                  "color": "#808080"
              },
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#b3b3b3"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#ffffff"
              },
              {
                  "weight": 1.8
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#d7d7d7"
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
                  "color": "#ebebeb"
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#a7a7a7"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#efefef"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#696969"
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#737373"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#d6d6d6"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {},
      {
          "featureType": "poi",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#dadada"
              }
          ]
      }
  ]
}