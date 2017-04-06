var mainDivs = document.querySelector('.content').querySelectorAll('div');

function srcChange(event) {
    for (var i = 1; i < mainDivs.length; i++) {
        var target = event.target.parentNode.parentNode.parentNode;
        if (mainDivs[i] = target) {
            var IFRAME = target.querySelector('iframe'),
                idIMG = [];
            idIMG=event.target.src.split('/');
            IFRAME.src = 'http://www.youtube.com/embed/' + idIMG[idIMG.length-2] + '?autoplay=1';
        }
    }
}

document.querySelector('.content').addEventListener('click', srcChange);