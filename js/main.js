

/*
function receive(saveData) {
    if (saveData == null) {
        alert("DATA IS UNDEFINED!");  // displays every time
    }
    alert("Success is " + saveData);  // 'Success is undefined'
}

var jsonURL = "http://test.enyo.av-studio.net/products.ashx";
$.ajax({
    data: {  },
    cache: false,
    dataType: "json", // tried json
    type: "GET",
    crossDomain: true,
    url: jsonURL,
    async: false,
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
    }
});
*/
/*
$.getJSON( jsonURL, function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
        items.push( "<li id='" + key + "'>" + val + "</li>" );
    });

    $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
    }).appendTo( "body" );
});
*/
