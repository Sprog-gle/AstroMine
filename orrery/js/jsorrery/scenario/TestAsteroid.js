
define(
	[
		'jquery',
		'jsorrery/NameSpace',
		'jsorrery/scenario/MoonRealOrbit',
		'three',
		'vendor/greensock/TweenMax',
		'vendor/greensock/easing/EasePack'
	],
	function($, ns, MoonRealOrbit){
		var common = {
			sun : {
				title : 'The Sun',
				mass : 1.9891e30,
				radius : 6.96342e5,
				color : '#ffff00',
				map : 'img/sunmap.jpg',
				k : 0.01720209895, //gravitational constant (μ)
				material : {
					emissive : new THREE.Color( 0xdddd33 )
				}
			},
			earth : {
				title : 'The Earth',
				mass : 5.9736e24,
				radius : 3443.9307 * ns.NM_TO_KM,
				color : '#1F7CDA',
				map : 'img/earthmap1k_clouds.jpg',
				material : {
					specular : new THREE.Color('grey')
				},
				sideralDay : ns.SIDERAL_DAY,
				tilt : 23+(26/60)+(21/3600) ,
				orbit : {
					base : {a : 1.00000261 * ns.AU, e : 0.01671123, i : -0.00001531, l : 100.46457166, lp : 102.93768193, o : 0.0},
					cy : {a : 0.00000562 * ns.AU, e : -0.00004392, i : -0.01294668, l : 35999.37244981, lp : 0.32327364, o : 0.0}
				}
			},
			asteroid : {
				title : 'The Ryugu',
				mass : 7.3477e22,
				radius : 1738.1,
				color : "#ffffff",
				map : 'img/moonmap4k_levels.jpg',
				//sideralDay : (27.3215782 * ns.DAY) ,
				//tilt : 1.5424,
				fov : 1,
				relativeTo : 'sun',
				//orbitCalculator : MoonRealOrbit,
				calculateFromElements : true,
				orbit: {
					base : {
						a : 384400,
						e : 0.0554,
						w : 318.15,
						M : 135.27,
						i : 5.16,
						o : 125.08
					},
					day : {
						a : 0,
						e : 0,
						i : 0,
						M : 13.176358,//360 / 27.321582,
						w : (360 / 5.997) / 365.25,
						o : (360 / 18.600) / 365.25
					}	
				}/*,
				getMapRotation : function(angle){
					if(angle > 0) {
						return angle - Math.PI;
					}
					return angle + Math.PI;
				},
				customInitialize : function() {
					if(this.relativeTo !== 'earth') return;
					this.baseMapRotation = this.getMapRotation(this.getAngleTo('earth'));
					this.nextCheck = this.sideralDay;
				},
				customAfterTick : function(time){
					if(this.relativeTo !== 'earth') return;
					//when a sideral day has passed, make sure that the near side is still facing the earth. Since the moon's orbit is heavily disturbed, some imprecision occurs in its orbit, and its duration is not always the same, especially in an incomplete scenario (where there are no sun/planets). Therefore, a correction is brought to the base map rotation, tweened so that is is not jerky.
					if(time >= this.nextCheck){
						this.nextCheck += this.sideralDay;
						TweenMax.to(this, 2, {baseMapRotation : this.getMapRotation(this.getAngleTo('earth')), ease:Sine.easeInOut});
					}
				}*/
			}
		};
		return common;

	}
);
