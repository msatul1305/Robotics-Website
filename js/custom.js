var devpos=0;
//  Screen Width Detection 
$(document).ready(function(){
    $(window).width(function(){
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        
        if (w > 500 && w <900) {
          $(".demo a").css("left" , "46%");
          alert(w)
          devpos=900;
        }
  
        else if(w <= 500)
        {
            $(".demo a").css("left" , "42%");
            devpos=500;
            alert(w);    	
        }
        else
        {
            $(".demo a").css("left" , "48%");
            devpos=750;
        }
    });
  });
//   End Screen Widt Detection
function parallaxInit(){$("#counter").parallax("50%",.3),$("#team-skills").parallax("50%",.3),$("#twitter-feed").parallax("50%",.3),$("#testimonial").parallax("50%",.3)}jQuery(function(e){"use strict";window.onload=function(){document.getElementById("loading-mask").style.display="none"},e(".media-wrapper").fitVids(),e("html").niceScroll({cursorborderradius:0,cursorwidth:"8px",cursorfixedheight:150,cursorcolor:"#E53935",zindex:9999,cursorborder:0}),e(window).scroll(function(){e(window).scrollTop()>400?e("#scrollUp").fadeIn(200):e("#scrollUp").fadeOut(200)}),e("#scrollUp").click(function(){e("html, body").stop().animate({scrollTop:0},1500,"easeInOutExpo")}),e("#section04").click(function(){e("html, body").stop().animate({scrollTop:devpos},1500,"easeInOutExpo")}),e("#scrollUp-name").click(function(){e("html, body").stop().animate({scrollTop:0},1500,"easeInOutExpo")}),e("#scrollUp-logo").click(function(){e("html, body").stop().animate({scrollTop:0},1500,"easeInOutExpo")}),e("#post-thumb, #gallery-post").owlCarousel({navigation:!0,pagination:!1,slideSpeed:800,autoHeight:!0,paginationSpeed:800,singleItem:!0,navigationText:["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"]}),e("#features").owlCarousel({navigation:!1,pagination:!0,slideSpeed:800,singleItem:!0,transitionStyle:"fadeUp",paginationSpeed:800}),e("#navigation").sticky({topSpacing:0}),e("#nav").onePageNav({currentClass:"current",changeHash:!1,scrollSpeed:1500,scrollThreshold:.5,filter:"",easing:"easeInOutExpo"});var t=e(window).height();e("#slitSlider, .sl-slider, .sl-content-wrapper").css("height",t),e(window).resize(function(){e("#slitSlider, .sl-slider, .sl-content-wrapper").css("height",t)}),{initialized:!1,initialize:function(){this.initialized||(this.initialized=!0,this.build())},build:function(){this.animations()},animations:function(){e(".counters-item [data-to]").each(function(){var t=e(this);t.appear(function(){t.countTo({})},{accX:0,accY:-150})})}}.initialize(),e(".chart").appear(function(){e(".chart").easyPieChart({easing:"easeOutBounce",barColor:"#E53935",size:"150",lineWidth:15,animate:2e3,onStep:function(t,a,i){e(this.el).find(".percent").text(Math.round(i))}})}),e(".tweet").twittie({dateFormat:"%b. %d, %Y",template:"{{tweet}}",count:1}),e("#og-grid").mixItUp(),Grid.init(),e("#testimonials").owlCarousel({slideSpeed:500,paginationSpeed:500,singleItem:!0,pagination:!0,transitionStyle:"backSlide"}),e("#contact-submit").click(function(t){t.preventDefault();var a=!1,i=e("#name").val(),o=e("#email").val(),n=e("#subject").val(),l=e("#message").val();0==i.length?(a=!0,e("#name").css("border-color","#E53935")):e("#name").css("border-color","#666"),0==o.length||"-1"==o.indexOf("@")?(a=!0,e("#email").css("border-color","#E53935")):e("#email").css("border-color","#666"),0==n.length?(a=!0,e("#subject").css("border-color","#E53935")):e("#subject").css("border-color","#666"),0==l.length?(a=!0,e("#message").css("border-color","#E53935")):e("#message").css("border-color","#666"),0==a&&(e("#contact-submit").attr({disabled:"false",value:"Sending..."}),e.post("sendmail.php",e("#contact-form").serialize(),function(t){"sent"==t?(e("#cf-submit").remove(),e("#mail-success").fadeIn(500)):(e("#mail-fail").fadeIn(500),e("#contact-submit").removeAttr("disabled").attr("value","Send The Message"))}))}),google.maps.event.addDomListener(window,"load",function(){var e=new google.maps.LatLng(22.333851,91.812256),t={zoom:14,center:e,disableDefaultUI:!0,scrollwheel:!1,navigationControl:!1,mapTypeControl:!1,scaleControl:!1,draggable:!1,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,"roadatlas"]}},a=new google.maps.Map(document.getElementById("map-canvas"),t),i=new google.maps.Marker({position:e,map:a,icon:"img/location-icon.png",title:""});google.maps.event.addListener(i,"click",function(){infowindow.open(a,i)});var o=new google.maps.StyledMapType([{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#2F3238"}]},{elementType:"labels.text.fill",stylers:[{color:"#FFFFFF"}]},{elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#50525f"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{visibility:"on"},{color:"#808080"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#808080"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#3071a7"},{saturation:-65}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"geometry.stroke",stylers:[{color:"#bbbbbb"}]}],{name:"US Road Atlas"});a.mapTypes.set("roadatlas",o),a.setMapTypeId("roadatlas")})}),wow=new WOW({animateClass:"animated",offset:100}),wow.init(),$(function(){var e,t,a,i;(e=$("#nav-arrows"),t=$("#nav-dots > span"),a=$("#slitSlider").slitslider({speed:1600,onBeforeChange:function(e,a){t.removeClass("nav-dot-current"),t.eq(a).addClass("nav-dot-current")}}),i=function(){e.children(":last").on("click",function(){return a.next(),!1}),e.children(":first").on("click",function(){return a.previous(),!1}),t.each(function(e){$(this).on("click",function(i){var o=$(this);return a.isActive()||(t.removeClass("nav-dot-current"),o.addClass("nav-dot-current")),a.jump(e+1),!1})})},{init:function(){i()}}).init()}),$(window).bind("load",function(){parallaxInit()});

//Menu Close on clicking Link When Collapsed (Mobile Screen)
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
  });


  