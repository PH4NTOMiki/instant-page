!function(){var t=document.createElement("link");if(window.Set&&document.documentElement.dataset&&t.relList&&t.relList.supports&&t.relList.supports("prefetch")&&window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype){var e,n,o=new Set,a="instantAllowQueryString"in document.body.dataset,i="instantAllowExternalLinks"in document.body.dataset,r="instantWhitelist"in document.body.dataset,s=65,c=!1,d=!1,l=!1;if(true/*"instantIntensity"in document.body.dataset*/){var u="viewport-all"/*document.body.dataset.instantIntensity*/;if("mousedown"==u.substr(0,"mousedown".length))c=!0,"mousedown-only"==u&&(d=!0);else if("viewport"==u.substr(0,"viewport".length))navigator.connection&&(navigator.connection.saveData||navigator.connection.effectiveType.indexOf("2g")>-1)||("viewport"==u?document.documentElement.clientWidth*document.documentElement.clientHeight<45e4&&(l=!0):"viewport-all"==u&&(l=!0));else{var f=parseInt(u);isNaN(f)||(s=f)}}var m={capture:!0,passive:!0};if(d||document.addEventListener("touchstart",function(t){n=performance.now();var e=t.target.closest("a");h(e)&&p(e.href)},m),c?document.addEventListener("mousedown",function(t){var e=t.target.closest("a");h(e)&&p(e.href)},m):document.addEventListener("mouseover",function(t){if(!(performance.now()-n<1100)){var o=t.target.closest("a");h(o)&&(o.addEventListener("mouseout",v,{passive:!0}),e=setTimeout(function(){p(o.href),e=void 0},s))}},m),l)(window.requestIdleCallback?function(t){requestIdleCallback(t,{timeout:1500})}:function(t){t()})(function(){var t=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting){var n=e.target;t.unobserve(n),p(n.href)}})});[].slice.call(document.querySelectorAll("a")).forEach(function(e){h(e)&&t.observe(e)})});function v(t){t.relatedTarget&&t.target.closest("a")==t.relatedTarget.closest("a")||e&&(clearTimeout(e),e=void 0)}function h(t){if(t&&t.href&&(!r||"instant"in t.dataset)&&(i||t.origin==location.origin||"instant"in t.dataset)&&["http:","https:"].indexOf(t.protocol)>-1&&("http:"!=t.protocol||"https:"!=location.protocol)&&(a||!t.search||"instant"in t.dataset)&&!((t.hash||"#"==t.href.slice(-1))&&t.pathname+t.search==location.pathname+location.search||"noInstant"in t.dataset))return!0}function p(t){if(!o.has(t)){var e=document.createElement("link");e.rel="prefetch",e.href=t,document.head.appendChild(e),o.add(t)}}}}();
