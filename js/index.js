$(document).ready(function(){

    var folder = "images";

    $.ajax({
        url : folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                    $("div.content").append( "<span><img src='"+ val +"'></span>" );
                } 
            });
        }
    });
});