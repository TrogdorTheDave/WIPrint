define(function(){return function(t){function e(s){if(i[s])return i[s].exports;var n=i[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([,function(t,e,i){var s,n;s=[i,e],void 0!==(n=function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e,i,n){this.dirty=!1,this.LHS=new s(t,i,n||null),this.RHS=new s(e,i,n||null)}return t.prototype.push=function(){var t=this,e=this.LHS.selected.map(function(e){return t.LHS.items[e]});this.LHS.remove(),this.RHS.add(e),this.dirty=!0},t.prototype.pop=function(){var t=this,e=this.RHS.selected.map(function(e){return t.RHS.items[e]});this.RHS.remove(),this.LHS.add(e),this.dirty=!0},t.prototype.up=function(){this.RHS.up(),this.dirty=!0},t.prototype.down=function(){this.RHS.down(),this.dirty=!0},t.prototype.top=function(){this.RHS.top(),this.dirty=!0},t.prototype.bottom=function(){},t.prototype.click=function(t,e,i,s){"print"===t?this.RHS.select(e,i||!1,s||!1):this.LHS.select(e,i||!1,s||!1)},t}();e.FieldsSelector=i;var s=function(){function t(t,e,i){var s=this;this.index=e,this.value=i,this.items=t.map(function(t){return new n(t[s.index],t[s.value])}),this.selected=[]}return t.prototype.add=function(t){if(t.length>0){t.reverse();var e=this.selected[this.selected.length-1]+1||this.items.length||0;this.selected=[];for(var i=0;i<t.length;i++)this.items.splice(e,0,t[i]),this.selected.push(e+i)}},t.prototype.remove=function(){var t=this;if(this.items.length>0){this.selected.sort().reverse();var e=this.selected[this.selected.length-1||0];this.selected.forEach(function(e){t.items.splice(e,1)}),this.selected=[],0!==e&&(this.selected=[this.items[e]?e:e-1])}},t.prototype.up=function(){var t=this,e=this.selected.map(function(e){if(0===e||t.selected.some(function(t){return t===e-1}))return e;var i=t.items.splice(e,1);return(s=t.items).splice.apply(s,[e-1,0].concat(i)),e-1;var s});this.selected=e},t.prototype.down=function(){var t=this,e=this.selected.map(function(e){if(e<t.items.length&&!t.selected.some(function(t){return t===e+1})){var i=t.items.splice(e,1);return(s=t.items).splice.apply(s,[e+1,0].concat(i)),e+1}return e;var s});this.selected=e},t.prototype.top=function(){var t=this;this.selected.sort().reverse();var e=[];this.selected.forEach(function(i){e.push(t.items.splice(i,1))}),(s=this.items).unshift.apply(s,e),this.selected=[];for(var i=0;i<e.length;i++)this.selected.push[i];var s},t.prototype.bottom=function(){},t.prototype.select=function(t,e,i){if(e&&!i)this.selected.push(t);else if(i){this.selected.push(t);var s=this.selected.reduce(function(t,e){return Math.min(t,e)}),n=this.selected.reduce(function(t,e){return Math.max(t,e)});this.selected=[];for(var r=s;r<=n;r++)this.selected.push(r)}else this.selected=[],this.selected.push(t)},t.prototype.sort=function(){var t=this,e=this.selected.map(function(e){return t.items[e].index});this.items.sort(function(t,e){return t.index>e.index?1:-1}),this.selected=e.map(function(e){for(var i=0;i<t.items.length;i++)if(t.items[i].index===e)return i})},t.prototype.sync=function(t){},t}();e.Selector=s;var n=function(){function t(t,e){this.index=t,this.value=e||t}return t}();e.SelectorItem=n}.apply(e,s))&&(t.exports=n)}])});
//# sourceMappingURL=selector.js.map