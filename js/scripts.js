var a=[];function e(e){return function(t,n){return n%2?e[t]:t}}$(document).ready(function(){$("#initialAmount").change(function(){c()});$("#interestRate").change(function(){c()});$("#period").change(function(){c()});$("#monthlyContrib").change(function(){c()});$("#reset").click(function(){t()})});function t(){m("initialAmount").value=v("0");m("interestRate").value=v("0");m("period").value=l("0");m("monthlyContrib").value=v("0");m("totInterest").value=v("0");m("totCost").value=v("0");a=[];s()}function m(t){return document.getElementById(t)}function n(t){return document.getElementsByClassName(t)}function i(t){return/^\d*\.?\d*$/.test(t)}function r(t){if(!i(t)){var n=t;t="";for(var e=0;e<n.length;e++){t+=i(n.charAt(e))?n.charAt(e):""}}if(t==""){t="0.00"}return t}var o={minimumFractionDigits:2,maximumFractionDigits:2};function v(t){return Number(t).toLocaleString("en",o)}var u={minimumFractionDigits:0,maximumFractionDigits:0};function l(t){return Number(t).toLocaleString("en",u)}function c(){m("initialAmount").value=v(r(m("initialAmount").value));m("interestRate").value=v(r(m("interestRate").value));m("period").value=l(r(m("period").value));m("monthlyContrib").value=v(r(m("monthlyContrib").value));var t=parseFloat(r(m("interestRate").value))/1200;var n=parseInt(r(m("period").value));var e=parseFloat(r(m("initialAmount").value));var i=parseFloat(r(m("monthlyContrib").value));a=f(e,i,n,t);s()}function s(){var n=$('script[data-template="row"]').text().split(/\$\{(.+?)\}/g);$("#itembody").empty();$("#itembody").append(a.map(function(t){return n.map(e(t)).join("")}))}function f(t,n,e,i){t=t>0?t:n;var a=t;var r=[];var o=0,u=0;for(var l=0;l<e;++l){var c={};c.rowNo=l+1;c.beginBalance=v(a);u=Math.round(a*i*100)/100;o+=u;c.interest=v(u);if(l==e-1){c.contribution=v(0);a=a+u}else{c.contribution=v(n);a=a+u+n}c.endBalance=v(a);r.push(c)}m("totInterest").value=v(o);var x=t+n*(e>0?e-1:0);m("totCost").value=v(x);m('finBalance').value=v(x+o);return r}
