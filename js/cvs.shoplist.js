$(window).load(function () {
  $.get('shoplist.csv', function (data) {
    var csv = $.csv.toArrays(data);
    var itemlist = '';

    $(csv).each(function (index) {
      itemlist += '<li>';
      itemlist += '<p class="shop-name">';
      itemlist += this[0] + '</p>';
      itemlist += '<p class="shop-address">';
      itemlist += this[1] + '</p>';
      itemlist += '</li>';
    })
    $('.linkbox-shoplist').append(itemlist);
  });
});
