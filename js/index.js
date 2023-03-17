$(document).ready(function(){



  (async () => {
      const response = await fetch('https://api.github.com/repos/liferuin/ruinnoir.github.io/contents/images');
      const data = await response.json();
      let contentString = '<div class="w-100 flex flex-column content">';
      
      for (let file of data) {
        contentString += `<span><img src="${file.path}"></img></span>`;
      }

      contentString += '</div>';
      let headerString = '<div class="logo db fixed tc">RUIN NOIR</div>'
      let footerString = '<div class="footer db fixed tc">RANDOM REFERENCES // <a href="https://instagram.com/ruinnoir">INSTAGRAM</a> // <a href="https://are.na/life-ruin/ruin-noir">ARE.NA</a></div>'

      document.getElementsByTagName('body')[0].innerHTML = headerString + contentString + footerString;

      var randomize = $("span");
      for(var i = 0; i < randomize.length; i++){
      var target = Math.floor(Math.random() * randomize.length -1) + 1;
      var target2 = Math.floor(Math.random() * randomize.length -1) +1;
      randomize.eq(target).before(randomize.eq(target2));}

      

    })()

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

});