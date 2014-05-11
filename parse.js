;(function(window, document, undefined){

  function parseHTML(htmlString){
      var frag = document.createDocumentFragment(),
          el,
          parser;

      if(!htmlString || typeof htmlString !== "string"){
          return "";
      }

      else if(!!DOMParser){

        parser = new DOMParser();
        el = parser.parseFromString(htmlString, "text/html").querySelector("body");

        return !!frag.appendChild(el).children[0] ? frag.appendChild(el).children[0] : "";

      } else {

        el = document.createElement( "div" );
        el.setAttribute("id", "wrapper");
        el.innerHTML = htmlString;

       return !!frag.appendChild(el).querySelector("div#wrapper") ?  frag.appendChild(el).querySelector("div#wrapper").children[0] : "";

      }

  }

  this.parseHTML = parseHTML;

})(window, document);
