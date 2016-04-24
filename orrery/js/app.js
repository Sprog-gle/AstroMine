
(function(ns){
	'use strict';
	require.config({
		baseUrl: './js/',
		paths:{
			'jquery' : 'vendor/jquery.min',
			'vendor/jquery.scrollto' : 'vendor/jquery.scrollTo-1.4.2-min',
			'three' : 'vendor/three.min',
			'_' : 'vendor/underscore-min',
			'ui' : 'vendor/jquery-ui-1.10.3.custom.min',
			'three/controls/OrbitControls' : 'vendor/three/controls/OrbitControls',
			'three/controls/TrackballControls' : 'vendor/three/controls/TrackballControls',
			'three/stats' : 'vendor/three/stats.min',
			'three/RingGeometry2' : 'vendor/three/RingGeometry2',
	        "bootstrap" :  "//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min",
       		"jquery" : "//code.jquery.com/jquery-2.1.1.min",
       		"tether" : "https://cdnjs.cloudflare.com/ajax/libs/tether/1.3.1/js/tether.min"

		},
		shim: {
	        "bootstrap" : { 
	        	"deps" :['jquery'],
      			exports: "$.fn.popover"
 			},

			'three': {
				deps: []
			},
			'jquery': {
				deps: []
			},
			'ui': {
				deps: ['jquery']
			},
			'vendor/jquery.autosize': {
				deps: ['jquery']
			},
			'vendor/jquery.scrollto': {
				deps: ['jquery']
			},
			'vendor/jquery.xdomainajax': {
				deps: ['jquery']
			},
			'three/controls/OrbitControls' : {
				deps: ['three']
			},
			'three/controls/TrackballControls' : {
				deps: ['three']
			},
			'three/RingGeometry2' : {
				deps: ['three']
			}
		}
	});
		
	require([
		'jquery',
		'jsorrery/Main',
		'bootstrap'
	], function($, JSOrrery, tether){
		   // window.Tether = tether;

		$(function(){

			if(!window.WebGLRenderingContext){
				var msgCont = $('#preload').find('.title');
				msgCont.append('<h3>Your browser does not support WebGL. Please visit <a href="http://get.webgl.org/">webgl.org</a></h3>');
				return;
			}

			ns.app = JSOrrery.init();

var messages = {
	Ryugu:{
		desc:"Next Approach: July 24, 2016\nOrbital Period: 1.30 years\nValue: $ 95.02 billion\nPotential Profit: $34.54 billion",
		header:""
	},
	"1989 ML":{
		desc:"Next Approach: February 14, 2019\nOrbital Period: 1.43 years\nValue: $13.94 billion\nPotential Profit: $4.38 billion",
		header:""
	},
	Nereus:{
		desc:"Next Approach: December 11, 2021\nOrbital Period: 1.82 years\nValue: $4.71 billion\nPotential Profit: $1.39 billion",
		header:""
	},
	"2011 UW158":{
		desc:"Next Approach: September 09, 2017\nOrbital Period: 2.05 years\nValue: $7.68 billion\nPotential Profit: $22.14 billion",
		header:""
	},
	"Anteros":{
		desc:"Next Approach: May 30, 2026\nOrbital Period: 1.71 years\nValue: $5.57 trillion\nPotential Profit: $1.25 trillion",
		header:""
	},
	"2001 CC21":{
		desc:"Next Approach: February 22, 2022\nOrbital Period: 1.08 years\nValue: $147.04 billion\nPotential Profit: $29.76 billion",
		header:""
	},
	"1992 TC":{
		desc:"Next Approach: July 20, 2037\nOrbital Period: 1.96 years\nValue: $84.01 billion\nPotential Profit: $16.79 billion",
		header:""
	},
	"2001 SG10":{
		desc:"Next Approach: June 3, 2022\nOrbital Period: 1.74 years\nValue: $3.50 billion\nPotential Profit: $625.12 million",
		header:""
	},
	"2002 DO3":{
		desc:"Next Approach: February 20, 2063\nOrbital Period: 2.54 years\nValue: $334.44 million\nPotential Profit: $59.08 million",
		header:""
	},
	"Seleucus":{
		desc:"Next Approach: May 24, 2037\nOrbital Period: 2.90 years\nValue: $33.52 trillion\nPotential Profit: $5.02 trillion",
		header:""
	}
}
window.onmessage = function(e){

    var $el = $('div.planetLabel:contains("'+e.data+'")');
   	//$el.css('background-color', 'red');
   	var content = "stuff";
   	var header = "";
    $('#popover').popover('hide');   
   	$('#popover').remove();
    $el.append('<a href="#" id="popover" data-toggle="popover" title="'+messages[e.data].header+'" data-content="'+messages[e.data].desc+'"></a>')
    $('[data-toggle="popover"]').popover();  
    $('#popover').popover('show');   
};
  $('[data-toggle="popover"]').popover();


		});
	});
	
})(window.jsorrery = window.jsorrery || {});