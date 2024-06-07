import '@fortawesome/fontawesome-free/css/all.min.css';

import Ghostbaner from './component/Ghost-Baner-2/Ghost-baner';
import Header from './component/Header/Header';

import Slider from './component/Swiper/Swiper';
import './App.css'
import Slider2 from './component/swiper1/swiper1';
import Cards from './component/Card/Card';
import Foter from './component/Fotter/Foter';
import NormalText from './component/Normaltext/NormalText';
import Purplecar from './component/Purple-car/Purple-car';
import Text from './component/Text-section/Text';
import Scale from './component/Scale-imge/Scale';
import gsap from 'gsap';
import Paralx from './component/Parrax3img/Paralx';
import Textbtn from './component/Text+btn/Text+btn';
import Text3 from './component/Text-3/Text-3';


function App() {
  function customCursor(options) {
    let settings = $.extend({
            targetClass: 'custom-cursor', 
            wrapper: $('body'), 
            speed: 1,
            movingDelay: 0, 
            hasHover: false, 
            hoverTarget: $('a[href], button'),
            touchDevices: false, 
            onMove: function (data) {
            }
        }, options),
        data = {},
        checkTouch = !settings.touchDevices && "undefined" !== typeof document.documentElement.ontouchstart,
        timer = null;

   
    if (checkTouch || !settings.wrapper.length) return;

    settings.wrapper.append(`<div class="${settings.targetClass}"></div>`);

    let $cursor = $('.' + settings.targetClass),
        position = {x: window.innerWidth / 2, y: window.innerHeight / 2},
        mouse = {x: position.x, y: position.y},
        setX = gsap.quickSetter($cursor, "x", "px"),
        setY = gsap.quickSetter($cursor, "y", "px");

    data.cursor = $cursor;

    window.addEventListener("mousemove", init);

    function init() {
       
        window.removeEventListener("mousemove", init);

        
        window.addEventListener("mousemove", e => {
            mouse.x = e.x;
            mouse.y = e.y;

            
            data.isMoving = true;
            settings.onMove(data);

            timer = setTimeout(function () {
              
                data.isMoving = false;
                settings.onMove(data);
            }, settings.movingDelay);
        });

        
        document.addEventListener("mouseleave", e => {
        
            data.isInViewport = false;
            settings.onMove(data);
        });

        document.addEventListener("mouseenter", e => {
            mouse.x = position.x = e.x;
            mouse.y = position.y = e.y;

            
            data.isInViewport = true;
            settings.onMove(data);
        });

        gsap.ticker.add((time, deltaTime) => {
            let fpms = 60 / 1000,
                delta = deltaTime * fpms,
                dt = 1 - Math.pow(1 - settings.speed, delta);
            position.x += (mouse.x - position.x) * dt;
            position.y += (mouse.y - position.y) * dt;
            setX(position.x);
            setY(position.y);
        });

        data.isInViewport = true;
    }

    if (settings.hasHover && settings.hoverTarget.length) {
        setTimeout(function () {
            settings.hoverTarget.hover(function () {
                data.hoverTarget = $(this);
                data.isHover = true;
                settings.onMove(data);
            }, function () {
                data.hoverTarget = $(this);
                data.isHover = false;
                settings.onMove(data);
            });
        }, 100);
    }
}

// big ball
customCursor({
    hasHover: true,
    onMove: function (data) {
        if (data.isInViewport) {
            // in viewport
            if (data.isMoving) {
                if (data.isHover) {
                    gsap.to(data.cursor, {opacity: 1, scale: 1.5});
                } else {
                    gsap.to(data.cursor, {opacity: .5, scale: .8});
                }
            } else {
                if (data.isHover) {
                    gsap.to(data.cursor, {opacity: 1, scale: 1.5});
                } else {
                    gsap.to(data.cursor, {opacity: .5, scale: 1.5});
                }
            }
        } else {
            // out viewport
            gsap.to(data.cursor, {opacity: 0, scale: 0});
        }
    },
});



function toggleIcon() {
    var icon = document.getElementById("toggleIcon");
    var menuText = document.getElementById("menuText");

    // Check if the icon has the class that indicates it's currently showing bars
    if (icon.classList.contains("fa-bars")) {
        // Change the icon to something else, for example, a close icon
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
        // Change the text to "CLOSE"
        menuText.textContent = "CLOSE";
        // Here you can add code to show or hide a menu, if desired
    } else {
        // Change the icon back to bars
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        // Change the text back to "MENU"
        menuText.textContent = "MENU";
        // Here you can add code to reverse the menu visibility change, if applicable
    }

}

  return (
    <>
       <Header onClick={toggleIcon} />
          <Slider />
          <NormalText/>
          <Ghostbaner/>
          <Text text={"A PERFECT BLANK CANVAS, TRANSFORMED BY YOUR COLOURFUL ESSENCE."} />
          <Scale/>
          <Text text={"IMAGINATION IS LIMITLESS. PERSONALISATION, ENDLESS."}/>
          <Purplecar/>
          <Text3 text={"REFLECT YOUR WORLD THROUGH AMBITIOUS CREATIVITY."}/>
          <Paralx/>
          <Text text={"CAPTURE YOUR CHARACTER.  CREATE A PERSONAL WORK OF ART."}/>
          <Slider2/>
          <Textbtn/>
          <Cards/>
          <Foter/>
    </>
  )
}

export default App
