webpackJsonp([11],{0:function(a,s,i){a.exports=i(94)},14:function(a,s){a.exports='<ul class="news-list02 clearfix"> {{#list}} <li> <span class="img-box"> <img src="{{coverTwoToOne}}" alt=""> <span class="mask"></span> </span> <div class="words-box"> <div class="words-box-top clearfix"> <div class="date"> <p class="day">{{day}}</p> <p class="year">{{year}}</p> </div> <div class="title-box"> <a href="news-details.html?channelCode={{channelCode}}&id={{id}}" class="title" title="{{title}}">{{title}}</a> <p class="intro" title="{{summary}}">{{summary}}</p> </div> </div> <div class="words-box-bottom clearfix"> <a href="news-details.html?channelCode={{channelCode}}&id={{id}}" class="more-1">查看详情</a> <a href="news-details.html?channelCode={{channelCode}}&id={{id}}" class="more-2 ued-mobile">&#xe642;</a> </div> </div> </li> {{/list}} </ul>'},36:function(a,s){},57:function(a,s){},79:function(a,s,i){"use strict";i(36);var e=i(2),t=i(1),l=i(14),n=e.getUrlParam("channelCode"),o={loadList:function(a){var s=$(a);s.daqCreateModule({url:t.newsList,loading:!0,template:l,size:6,pagination:!0,params:{channelCode:n},callback:function(a){for(var s=0;s<a.length;s++)if(a[s].publishtime){var i=a[s].publishtime.split(" ")[0].split("-");a[s].year=i[0]+"-"+i[1],a[s].day=i[2]}return a}})}};a.exports=o},94:function(a,s,i){"use strict";i(57);var e=i(79),t={init:function(){this.getDatas()},getDatas:function(){e.loadList(".news-list-page")}};$(function(){t.init()})}});