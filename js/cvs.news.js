$(window).load(function () {
    $.get('news.csv', function (data) {
        var csv = $.csv.toArrays(data);
        var itemlist = '';

        $(csv).each(function (index) {
            itemlist += '<li>';
            itemlist += '<p>';
            itemlist += this[0] + '</p>';
            itemlist += '<a href="' + this[1] + '" target="_blank">';
            itemlist += this[2] + '</a>';
            itemlist += '</p>';
            itemlist += '</li>';
        })
        $('.linkbox-shoplist').append(itemlist);
    });
});
