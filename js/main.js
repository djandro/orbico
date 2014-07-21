var jsonURL = "http://test.enyo.av-studio.net/products.ashx";

$.ajax({
    type: "GET",
    dataType: "jsonp", // tried json
    jsonpCallback: 'jsonCallback',
    crossDomain: true,
    url: jsonURL,
    async: false,
    success: function(json) {
        $.each(json.products, function( index, item ) {
            var itemHtml1 = "<div class='col-xs-6 col-md-4 product-box'>" +
                "<a href='#'><img src=\""+ item.image +"\"></a>" +
                "<div class='product-title'><span>"+ item.name +"</span></div>";

            var price = "";
            if (!item.action_price) {
                price = "<div class='product-price-box'>" + item.regular_price + " €</div>";
            } else {
                price = "<div class='product-price-box'>" + item.action_price + " €" +
                    "<span class='old-price'>" + item.regular_price + " €" + "</span></div>";
            }

            var itemHtml2 =
                "<div class='row'><div class='product-quantity-box input-group col-sm-6'>" +
                "<span class='input-group-btn'><button class='btn btn-default' type='button'><i class='icon ion-minus'></i></button></span>" +
                "<input type='text' class='form-control' value='1' maxlength='3'>" +
                "<span class='input-group-btn'>" +
                "<button class='btn btn-default' type='button'><i class='icon ion-plus'></i></button>"+
                "</span></div>" +
                "<div class='col-sm-6'><a class='btn btn-cart btn-block' href='#'>KUPIM</a></div>"
                "</div>";
            $(".category-view .product-list").append(itemHtml1 + price + itemHtml2);
        });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log(textStatus);
    }
});


$('#filters').collapse();