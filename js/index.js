$(document).ready(function(){
    // Window Resize 100vh
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // We listen to the resize event
    window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    })
        

    var folder = "images/"
    $.ajax({
        url : folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                    $("div.content").append( "<span><img src='" + folder + val + "'></span>" );
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