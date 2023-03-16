let folder = "images/";

$(document).ready(function(){
    $.ajax({
        url : folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                    $("div.content").append( "<span><img src='" + val + "'></span>" );
                    var randomize = $("span");
                    for(var i = 0; i < randomize.length; i++){
                    var target = Math.floor(Math.random() * randomize.length -1) + 1;
                    var target2 = Math.floor(Math.random() * randomize.length -1) +1;
                    randomize.eq(target).before(randomize.eq(target2));
    }
                } 
            });
        }
    });
});