var gallery = document.querySelector('#gallery'),
    buttons = gallery.querySelectorAll('.button');


function classChangingForThirdElement(i) {
    setTimeout(function () {
        buttons[i - 3].classList.remove('gallery-move-back', 'first', 'gallery-transform-back');
        buttons[i - 2].classList.remove('gallery-move-back', 'second', 'gallery-transform-back', 'first-figure');
        buttons[i - 2].classList.add('first');
        buttons[i - 1].classList.remove('gallery-move-back', 'third', 'second-figure', 'gallery-transform-back');
        buttons[i - 1].classList.add('second');
        buttons[i].classList.remove('gallery-move-back', 'gallery-transform-back');
    }, 1400);
    buttons[i].classList.add('third', 'gallery-move-back');
    buttons[i - 1].classList.add('gallery-move-back');
    buttons[i - 2].classList.add('gallery-move-back');
    buttons[i - 3].classList.add('gallery-move-back');
    setTimeout(function () {
        buttons[i].classList.add('gallery-transform-back');
        buttons[i - 1].classList.add('gallery-transform-back', 'second-figure');
        buttons[i - 2].classList.add('gallery-transform-back', 'first-figure');
        buttons[i - 3].classList.add('gallery-transform-back');
    }, 10);
}
function classChangingForFirstElement(i) {
    setTimeout(function () {
        buttons[i + 3].classList.remove('gallery-move-forward', 'third', 'gallery-transform-forward');
        buttons[i + 2].classList.remove('gallery-move-forward', 'second', 'gallery-transform-forward', 'first-figure');
        buttons[i + 2].classList.add('third');
        buttons[i + 1].classList.remove('gallery-move-forward', 'first', 'second-figure', 'gallery-transform-forward');
        buttons[i + 1].classList.add('second');
        buttons[i].classList.remove('gallery-move-forward', 'gallery-transform-forward');
    }, 1400);
    buttons[i].classList.add('first', 'gallery-move-forward');
    buttons[i + 1].classList.add('gallery-move-forward');
    buttons[i + 2].classList.add('gallery-move-forward');
    buttons[i + 3].classList.add('gallery-move-forward');
    setTimeout(function () {
        buttons[i].classList.add('gallery-transform-forward');
        buttons[i + 1].classList.add('gallery-transform-forward', 'second-figure');
        buttons[i + 2].classList.add('gallery-transform-forward', 'first-figure');
        buttons[i + 3].classList.add('gallery-transform-forward');
    }, 10);

}

function clickListener(event) {
    var target = event.target.parentNode.parentNode,
        third = gallery.querySelector('.third'),
        second = gallery.querySelector('.second'),
        first = gallery.querySelector('.first'),
        href = target.href;
    if (target !== second) {
        target.parentNode.classList.add('pointer');
        event.preventDefault();
        setTimeout(function A() {
            for (i = 0; i < buttons.length; i++) {
                buttons[i].style.transition = 'none';
            }
            if (target == third) {
                for (var i = 0; i < buttons.length; i++) {
                    if (third == buttons[i]) {
                        if (i !== (buttons.length - 1)) {
                            classChangingForThirdElement(i + 1);
                        } else {
                            buttons[buttons.length - 1].after(buttons[0]);
                            buttons = gallery.querySelectorAll('.button');
                            classChangingForThirdElement(i);
                        }
                    }
                }
            }
            if (target == first) {
                for (i = 0; i < buttons.length; i++) {
                    if (first == buttons[i]) {
                        if (i !== 0) {
                            classChangingForFirstElement(i - 1);
                        } else {
                            buttons[0].before(buttons[buttons.length - 1]);
                            buttons = gallery.querySelectorAll('.button');
                            classChangingForFirstElement(i);
                        }
                    }
                }
            }
        }, 400);
        setTimeout(function () {
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].style.transition = 'transform 0.4s 0.1s linear, color 0.4s 0.1s linear, text-shadow 0.4s 0.1s linear';
            }
            target.parentNode.classList.remove('pointer');
            window.location.href = href;
        }, 2000);
    }
}

window.addEventListener('load', function () {
   var c = document.body.clientWidth;
    if (c > 320) {
        document.body.querySelector('#gallery').addEventListener('click', clickListener);
    } else {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('button', 'first', 'second', 'third');
            buttons[i].classList.add('buttonMedia');
        }
    }
});


/*
 var linkNav = document.querySelectorAll('[href^="#nav"]'),
 V = 2;  // скорость, может иметь дробное значение через точку
 for (var i = 0; i < linkNav.length; i++) {
 linkNav[i].onclick = function(){
 var w = window.pageYOffset,
 hash = this.href.replace(/[^#]*(.*)/, '$1');
 t = document.querySelector(hash).getBoundingClientRect().top,
 start = null;
 requestAnimationFrame(step);
 function step(time) {
 if (start === null) start = time;
 var progress = time - start,
 r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
 window.scrollTo(0,r);
 if (r != w + t) {requestAnimationFrame(step)} else {location.hash = hash}
 }
 return false;
 }
 }*/

/*
 <script>
 var linkNav = document.querySelectorAll('[href^="#nav"]'),
 V = 2;  // скорость, может иметь дробное значение через точку
 for (var i = 0; i < linkNav.length; i++) {
 linkNav[i].addEventListener('click', function(e) {
 e.preventDefault();
 var w = window.pageYOffset,  // прокрутка
 hash = this.href.replace(/[^#]*(.*)/, '$1');  // id элемента, к которому нужно перейти
 t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
 start = null;
 requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
 function step(time) {
 if (start === null) start = time;
 var progress = time - start,
 r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
 window.scrollTo(0,r);
 if (r != w + t) {
 requestAnimationFrame(step)
 } else {
 location.hash = hash  // URL с хэшем
 }
 }
 }, false);
 }
 </script>*/
