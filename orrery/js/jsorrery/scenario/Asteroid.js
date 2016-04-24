/** 

Corrections have been added to element's altitude to compensate for imprecisions in parameters, so as to fit mechanical orbit to orbital elements.

*/

define(
	[
		'jsorrery/NameSpace',
		'jsorrery/scenario/CommonCelestialBodies',
		'jsorrery/scenario/NasaNumbers'
	], 
	function(ns, common, nasaNumbers) {
		
function decimalDateToJsDate(time) {
  var year = Math.floor(time);
  var thisYear = new Date(year, 0, 1);
  var nextYear = new Date(year + 1, 0, 1);
  var millisecondsInYear = nextYear.getTime() - thisYear.getTime();
  var deltaTime = Math.ceil((time - year) * millisecondsInYear);
  thisYear.setMilliseconds(deltaTime);
  return thisYear;
}

var our_epoch  = decimalDateToJsDate(2015.48552336);

		var earthRadius = common.earth.radius;
		var earthTilt = common.earth.tilt;
		var system =  {
			name : 'asteroid',
			title : 'asteroid satellites around the Earth',
			commonBodies : ['sun','earth','mars'],
			fov:90,
			bodies : {

				ryugu : {
					title : 'The Ryugu',
					mass : 4.9e12,
					radius : 490,
					color : "#ffffff",
					map : 'img/moonmap4k_levels.jpg',
					//sideralDay : (27.3215782 * ns.DAY) ,
					//tilt : 1.5424,
					fov : 1,
					relativeTo : 'sun',
					//orbitCalculator : MoonRealOrbit,
					//calculateFromElements : true,
					orbit: {
						epoch:our_epoch,
						base : {
							a : 177953693.7,
							e : 0.1902107094378715,
							w : 211.4547183990554,
							M : 266.2,
							i : 5.883563933,
							o : 251.6033559580795
						},
						day : {
							a : 0,
							e : 0,
							i : 0,
							M : 13.176358,//360 / 27.321582,
							w : (360 / 5.997) / 365.25,
							o : (360 / 18.600) / 365.25
						}	
					}
				},
				_1989ml : {
					title : '1989 ML',
					mass : 1.1e12,
					radius : 300,
					color : "#ffffff",
					map : 'img/moonmap4k_levels.jpg',
					//sideralDay : (27.3215782 * ns.DAY) ,
					//tilt : 1.5424,
					fov : 1,
					relativeTo : 'sun',
					//orbitCalculator : MoonRealOrbit,
					//calculateFromElements : true,
					orbit: {
						epoch:our_epoch,
						base : {
							a : 190359174.8,
							e : 0.1365488211680677,
							w : 183.283020726887,
							M : 125.9408525750348,
							i : 4.37778823321158,
							o : 104.4087917477828
						},
						day : {
							a : 0,
							e : 0,
							i : 0,
							M : 13.176358,//360 / 27.321582,
							w : (360 / 5.997) / 365.25,
							o : (360 / 18.600) / 365.25
						}	
					}
				},

				nereus : {
					title : 'Nereus',
					mass : 1.5e12,
					radius : 330,
					color : "#ffffff",
					map : 'img/moonmap4k_levels.jpg',
					//sideralDay : (27.3215782 * ns.DAY) ,
					//tilt : 1.5424,
					fov : 1,
					relativeTo : 'sun',
					//orbitCalculator : MoonRealOrbit,
					//calculateFromElements : true,
					orbit: {
						epoch:our_epoch,
						base : {
							a : 222709738.7,
							e : 0.3599730456898795,
							w : 158.0193855671611,
							M : 253.78898383,
							i : 1.431822121981028,
							o : 314.45888952
						},
						day : {
							a : 0,
							e : 0,
							i : 0,
							M : 13.176358,//360 / 27.321582,
							w : (360 / 5.997) / 365.25,
							o : (360 / 18.600) / 365.25
						}	
					}
				},	
				_2011uw158 : {
					title : '2011 UW158',
					mass : 1.1e12,
					radius : 300,
					color : "#ffffff",
					map : 'img/moonmap4k_levels.jpg',
					//sideralDay : (27.3215782 * ns.DAY) ,
					//tilt : 1.5424,
					fov : 1,
					relativeTo : 'sun',
					//orbitCalculator : MoonRealOrbit,
					//calculateFromElements : true,
					orbit: {
						epoch:our_epoch,
						base : {
							a : 242381971.2,
							e : 0.3763193973751719,
							w : 8.759777602482,
							M : 85.3201165,
							i : 4.57256265,
							o : 286.0184482718448
						},
						day : {
							a : 0,
							e : 0,
							i : 0,
							M : 13.176358,//360 / 27.321582,
							w : (360 / 5.997) / 365.25,
							o : (360 / 18.600) / 365.25
						}	
					}
				},
				anteros : {
					title : 'Anteros',
					mass : 8.9e13,
					radius : 1300,
					color : "#ffffff",
					map : 'img/moonmap4k_levels.jpg',
					//sideralDay : (27.3215782 * ns.DAY) ,
					//tilt : 1.5424,
					fov : 1,
					relativeTo : 'sun',
					//orbitCalculator : MoonRealOrbit,
					//calculateFromElements : true,
					orbit: {
						epoch:our_epoch,
						base : {
							a : 214000273.4,
							e : 0.2559657511689051,
							w : 338.3382673951236,
							M : 346.5523120753244,
							i : 8.705273352011847,
							o : 246.3398218472341
						},
						day : {
							a : 0,
							e : 0,
							i : 0,
							M : 13.176358,//360 / 27.321582,
							w : (360 / 5.997) / 365.25,
							o : (360 / 18.600) / 365.25
						}	
					}
				},
				_2001cc21 : {
					title : '2001 CC21',
					mass : 2.4e12,
					radius : 432.5,
					color : "#ffffff",
					map : 'img/moonmap4k_levels.jpg',
					//sideralDay : (27.3215782 * ns.DAY) ,
					//tilt : 1.5424,
					fov : 1,
					relativeTo : 'sun',
					//orbitCalculator : MoonRealOrbit,
					//calculateFromElements : true,
					orbit: {
						epoch:our_epoch,
						base : {
							a : 154463549.8,
							e : 0.219328203573175,
							w : 179.3300622,
							M : 357.9437338,
							i : 4.80843179418816,
							o : 75.5832887442711
						},
						day : {
							a : 0,
							e : 0,
							i : 0,
							M : 13.176358,//360 / 27.321582,
							w : (360 / 5.997) / 365.25,
							o : (360 / 18.600) / 365.25
						}	
					}
				},
				_1992tc : {
					title : '1992 TC',
					mass : 3.8e13,
					radius : 1085,
					color : "#ffffff",
					map : 'img/moonmap4k_levels.jpg',
					//sideralDay : (27.3215782 * ns.DAY) ,
					//tilt : 1.5424,
					fov : 1,
					relativeTo : 'sun',
					//orbitCalculator : MoonRealOrbit,
					//calculateFromElements : true,
					orbit: {
						epoch:our_epoch,
						base : {
							a : 234207959.3,
							e : 0.292441211,
							w : 275.5510819,
							M : 319.669882766873,
							i : 7.087399865,
							o : 88.6531633
						},
						day : {
							a : 0,
							e : 0,
							i : 0,
							M : 13.176358,//360 / 27.321582,
							w : (360 / 5.997) / 365.25,
							o : (360 / 18.600) / 365.25
						}	
					}
				},
				_2001sg10 : {
					title : '2001 SG10',
					mass : 1.3e11,
					radius : 165,
					color : "#ffffff",
					map : 'img/moonmap4k_levels.jpg',
					//sideralDay : (27.3215782 * ns.DAY) ,
					//tilt : 1.5424,
					fov : 1,
					relativeTo : 'sun',
					//orbitCalculator : MoonRealOrbit,
					//calculateFromElements : true,
					orbit: {
						epoch:our_epoch,
						base : {
							a : 216687202.5,
							e : 0.424295859,
							w : 101.5875144,
							M : 105.8717783,
							i : 4.256975642,
							o : 184.9893662
						},
						day : {
							a : 0,
							e : 0,
							i : 0,
							M : 13.176358,//360 / 27.321582,
							w : (360 / 5.997) / 365.25,
							o : (360 / 18.600) / 365.25
						}	
					}
				},
				_2002do3 : {
					title : '2002 DO3',
					mass : 2.0e10,
					radius : 87,
					color : "#ffffff",
					map : 'img/moonmap4k_levels.jpg',
					//sideralDay : (27.3215782 * ns.DAY) ,
					//tilt : 1.5424,
					fov : 1,
					relativeTo : 'sun',
					//orbitCalculator : MoonRealOrbit,
					//calculateFromElements : true,
					orbit: {
						epoch:our_epoch,
						base : {
							a : 278260602.8,
							e : 0.499051681,
							w : 165.5318824,
							M : 147.9065277,
							i : 3.80042557,
							o : 56.12730751
						},
						day : {
							a : 0,
							e : 0,
							i : 0,
							M : 13.176358,//360 / 27.321582,
							w : (360 / 5.997) / 365.25,
							o : (360 / 18.600) / 365.25
						}	
					}
				},
				seleucus : {
					title : 'Seleucus',
					mass : 8.1e13,
					radius : 1400,
					color : "#ffffff",
					map : 'img/moonmap4k_levels.jpg',
					//sideralDay : (27.3215782 * ns.DAY) ,
					//tilt : 1.5424,
					fov : 1,
					relativeTo : 'sun',
					//orbitCalculator : MoonRealOrbit,
					//calculateFromElements : true,
					orbit: {
						epoch:our_epoch,
						base : {
							a : 304106863.1,
							e : 0.456209232,
							w : 349.2885916,
							M : 233.1353196,
							i : 5.930106798,
							o : 218.6556269
						},
						day : {
							a : 0,
							e : 0,
							i : 0,
							M : 13.176358,//360 / 27.321582,
							w : (360 / 5.997) / 365.25,
							o : (360 / 18.600) / 365.25
						}	
					}
				}
			},
			
			secondsPerTick : {min: 1, max: 10, initial:5},
			help : "A selection of artificial satellites orbiting the Earth. They were not launched in the same years, so the epoch is irrelevent in this simulation. The numbers I have for these orbits are incomplete. The shape and inclination of the orbits are correct, but I don't have epoch and orientation information. I included this scenario to show the differences between these satellite's orbits shapes."

		};

		return system;
		
	}
);