(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[92],{"419a":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("router-view")},n=[],o=a("18d6"),r=a("0967");a("3a34");var c={name:"initial",data(){return{webto:""}},methods:{},beforeCreate(){var e=this;r["b"].is.cordova?window.device&&("Zebra Technologies"===window.device.manufacturer?(o["a"].set("device",2),e.webto="zebrascan"):"Urovo"===window.device.manufacturer?(o["a"].set("device",2),e.webto="urovoscan"):(o["a"].set("device",1),e.webto="mobile_index")):r["b"].is.mobile?(o["a"].set("device",1),e.webto="mobile_index"):(o["a"].set("device",0),e.webto="web_index",o["a"].has("menulink")&&""!==o["a"].getItem("menulink")&&(e.webto=o["a"].getItem("menulink"))),e.$router.push({name:e.webto})}},s=c,w=a("42e1"),b=Object(w["a"])(s,i,n,!1,null,"718fb1e2",null);t["default"]=b.exports}}]);