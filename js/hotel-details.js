webpackJsonp([4],{0:function(a,i,t){a.exports=t(88)},11:function(a,i){},16:function(a,i){a.exports='<div class="base-box"> <div class="swiper-container"> <div class="swiper-wrapper"> {{#imgList}} <a href="javascript:;" class="swiper-slide"> <img src="{{imgPath}}" alt="{{imgName}}"/> </a> {{/imgList}} </div> <div class="swiper-pagination"></div> </div> <div class="infos-box"> <div class="infos-box-top"> <p>&yen;<span>{{pricesZxw}}</span>元/人</p> <p class="p1">人均消费</p> </div> <div class="infos-box-bottom"> <p title="{{name}}"><span>酒店名称：</span><span>{{name}}</span></p> <p title="{{phone}}"><span>酒店电话：</span><span>{{phone}}</span></p> <p title="{{opentime}}"><span>营业时间：</span><span>{{opentime}}</span></p> <p class="room-type"><span>房间类别：</span><span>{{#rootTypeList}}{{roomType}} {{/rootTypeList}}</span></p> {{#site}} <p class="room-site" title="{{site}}"><span>酒店官网：</span><span><a href="{{site}}">{{site}}</a></span></p> {{/site}} <p title=""><span>酒店地址：</span><span>{{address}}</span></p> </div> </div> </div> <div class="intro-box"> <p class="title">酒店介绍</p> <div class="ct">{{{content}}}</div> </div>'},17:function(a,i){a.exports='<p class="title">周边酒店</p> <div class="hotel-round-wrap"> <ul class="hotel-round-list clearfix"> {{#list}} <li class="scale-img" title="{{name}}"> <a href="hotel-details.html?channelCode={{channelCode}}&id={{id}}" class="img-box"> <img src="{{logo}}" alt=""/> <p class="name">{{name}}</p> </a> </li> {{/list}} </ul> </div>'},51:function(a,i){},88:function(a,i,t){t(51),t(11);var e=t(1),s=t(2),n=(t(3),t(16)),l=t(17),o=s.getUrlParam("channelCode"),p={data:{type:2,longitude:"",latitude:"",distance:10},init:function(){this.loadHotelDetails()},loadHotelDetails:function(){var a=this;$(".hotel-content").daqCreateModule({url:e.hotelDetails,loading:!0,template:n,params:{id:s.getUrlParam("id")},callback:function(i){return a.data.longitude=i.longitude,a.data.latitude=i.latitude,i},complete:function(){a.loadRimHotel(),a.loadFlexslider()}})},loadRimHotel:function(){var a=this;$(".hotel-round").daqCreateModule({url:e.getAround,template:l,size:3,params:a.data,callback:function(a){for(var i=0,t=a.length;i<t;i++)a[i].channelCode=o;return a}})},loadFlexslider:function(){new Swiper(".swiper-container",{loop:!0,autoplay:{delay:3e5,disableOnInteraction:!1},pagination:{el:".swiper-pagination"}})}};$(function(){p.init()})}});