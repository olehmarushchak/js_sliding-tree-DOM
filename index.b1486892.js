document.getElementsByTagName("ul")[0].querySelectorAll("li").forEach(function(e){e.style.cursor="pointer",e.addEventListener("click",function(t){t.stopPropagation();var r=e.querySelector("ul");r&&(r.hasAttribute("hidden")?r.removeAttribute("hidden"):r.setAttribute("hidden",""))})});
//# sourceMappingURL=index.b1486892.js.map
