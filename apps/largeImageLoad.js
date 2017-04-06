var element = $('#history');
function loadLargeImage(smallImage, callback) {
    var img = new Image(),
        removeEventListeners = function () {
            img.removeEventListener('load', success);
            img.removeEventListener('error', error);
        },
        success = function () {
            removeEventListeners();
            callback(img);
        },
        error = function () {
            removeEventListeners();
            callback(null)
        };
    img.addEventListener('load', success);
    img.addEventListener('error', error);

    img.src=smallImage.src.replace('small', 'large')
}

element.on('click', 'img', function () {
    var _this = $(this);
    loadLargeImage(this, function (largeImage) {
        if (largeImage) {
            var preview = $('<div class="preview">');
            preview.append(largeImage);
            preview.on('click', function listener() {
                preview.off('click', listener);
                preview.remove();
            });
            $(document.body).append(preview);
        }
    });
});
