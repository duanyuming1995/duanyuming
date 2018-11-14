window.onload = function () {
    var div1 = document.createElement("div");
    div1.setAttribute("style","width:200px; height:200px;border:solid 1px;position:absolute;top:17px;left:100px;display:none;")
    var ul  = document.createElement("ul");
    var li = document.createElement("li");
    var text = document.createTextNode("商品");
    var text1 = document.createTextNode("买我");
    document.body.appendChild(div1);
    document.body.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(text);
    div1.appendChild(text1);

    li.onmouseover = function () {
        div1.style.display = "block";
    }
    li.onmouseout = function () {
        div1.style.display = "none";
    }
    div1.onmouseover = function () {
        this.style.display = "block";
    }
    div1.onmouseout = function () {
        this.style.display = "none";
    }
}
