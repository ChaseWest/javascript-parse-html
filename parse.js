;(function(window, document, undefined){

  function parseHTML(htmlString){
      var frag = document.createDocumentFragment();

      if(!!DOMParser){

        var parser = new DOMParser();
        return frag.appendChild(parser.parseFromString(htmlString, "text/html").querySelector("body").children[0]);

      } else {

        var el = document.createElement( "div" );
            el.setAttribute("id", "wrapper");
            el.innerHTML = htmlString;

        frag.appendChild(el);
        return frag.querySelector("div#wrapper").children[0];

      }

  }

  this.parseHTML = parseHTML;

})(window, document);
