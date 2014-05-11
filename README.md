javascript-parse-html
=====================

Parse HTML string and return DOM Nodes.

#How to Use

###Function

>  `parseHTML(htmlString)`

######In

-  htmlString  - String of HTML (ex: `<div><ul><li></li></ul></div>`)

######Out

-  node(s)  - Node representation of `htmlString`


###[Example](http://jsfiddle.net/ChaseWest/D682s/)

```javascript
  //String representation of nodes you want
  var htmlString = "<div><ul><li></li></ul></div>";

  //nodes from parsing htmlString
  var nodes = parseHTML(htmlString);
```

```html
<div>
  <ul>
    <li></li>
  </ul>
</div>  
```
