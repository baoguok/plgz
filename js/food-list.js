webpackJsonp([7],{0:function(e,a,t){e.exports=t(86)},5:function(e,a){e.exports=' <ul class="resource-list clearfix"> {{#list}} <li class="scale-img"> <div class="img-box"><img src="{{pictureFourToThree}}" alt=""></div> <div class="words-box"> {{#urlFlag}} <p class="title-cursor" title="{{name}}">{{name}}</p> {{/urlFlag}} {{^urlFlag}} <a href="{{url}}" class="title" title="{{name}}">{{name}}</a> {{/urlFlag}} <p class="tel">电话：{{#phone}}{{phone}}{{/phone}}{{^phone}}暂无电话{{/phone}}</p> <p class="address" title="{{address}}">地址：{{#address}}{{address}}{{/address}}{{^address}}未知{{/address}}</p> </div> </li> {{/list}} </ul> '},7:function(e,a){},9:function(e,a,t){"use strict";t(7);var o=t(1),r=t(2),l=t(5),s=r.getUrlParam("channelCode"),i={loadList:function(e,a,t){var r="";switch(a){case"hotel":r=o.hotelList;break;case"recreation":r=o.recreationList;break;case"food":r=o.diningList}var i=$(e);i.daqCreateModule({url:r,loading:!0,template:l,size:8,params:t,pagination:!0,callback:function(e){for(var t=0,o=e.length;t<o;t++)"hotel"===a&&(e[t].url="hotel-details.html?channelCode="+s+"&id="+e[t].id),"recreation"===a&&(e[t].url="resource-details01.html?channelCode="+s+"&type="+a+"&id="+e[t].id,e[t].pictureFourToThree=e[t].logoFourToThree),"food"===a&&(e[t].urlFlag=!0,e[t].pictureFourToThree=e[t].logoFourToThree);return e}})}};e.exports=i},49:function(e,a){},86:function(e,a,t){"use strict";t(3);t(49);var o=t(2),r=t(9),l=(o.getUrlParam("channelCode"),{init:function(){this.loadList()},loadList:function(){r.loadList(".food-list-page","food")}});$(function(){l.init()})}});