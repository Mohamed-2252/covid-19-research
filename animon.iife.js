var Animon=function(t){"use strict";var e=new IntersectionObserver((function(t){t.forEach((function(t){var e=t.target,n=parseInt(e.getAttribute("data-delay"))||0,i=e.getAttribute("data-duration")||null;t.intersectionRatio>0?setTimeout((function(){i&&(e.style.transitionDuration="".concat(i,", ").concat(i)),e.classList.add("is-visible")}),n):(e.classList.remove("is-visible"),e.style.removeProperty("transition-duration"))}))}));return t.animon=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".animonItem",n=document.querySelectorAll(t);"IntersectionObserver"in window?n.forEach((function(t){e.observe(t)})):n.forEach((function(t){return t.classList.add("is-visible")}))},Object.defineProperty(t,"__esModule",{value:!0}),t}({});
