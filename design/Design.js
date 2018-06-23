

//-----------------------------------------------------------------------------


/**
 * Object to contain information and code for the design.
 */
var Design = {};

/**
 * Meta information about the design
 */
Design.info = {
	"name": "Hobbes",
	"designer": "Amit Nambiar",
	"version": "1.0.0",
	"license": "MIT",
	"short_desc": "A simple bed for common use.",
	"long_desc": "",
	"url": null,
	"message": "",
	"tags": [ "", "" ]
}


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------


/**
 * Specify configuration about the customisble parameters for the design.
 * A UI element is generated for the param and its values are updated by
 *  the framework and made accessible in the code.
 * Different param types and thier configuration definitions are
 * 	-"slider"	Input values to be contained in a range. Presented as a slider
 				from min to max.
 *	-"bool"		Input for yes/no values. Presented as a checkbox.
 * 	-"select"	Input for selecting values from a list. Presented as a
 				drop-down list.
 *
 * IMPORTANT
 * Register the param with its code-label in the 'params' array.
 * Specify its configuration as an object with the same code-label as key and
 * configuration object as value.
 */
Design.inputs = {

	"age": { 
		"type": "slider",
		"label": "Age",
		"default": 22,
		"min": 6,
		"max": 80
	},
	"sleep-style": { 
		"type": "select",
		"label": "Sleep Style",
		"tip": "Are you a tight sleeper or do you like to spread yourself?",
		"default": "tight",
		"choices": [ "tight", "comfy", "luxurious" ]
	},
	"double-bed": {
		"type": "bool",
		"tip": "",
		"label": "DoubleBed",
		"default": false
	},
	"headrest": {
		"type": "bool",
		"tip": "",
		"label": "Headrest",
		"default": true
	},
	"sidetable": {
		"type": "bool",
		"tip": "",
		"label": "Sidetable",
		"default": false
	}
}


//-----------------------------------------------------------------------------


/**
 * Object to contain the parameter values.
 * Values are updated in this object as changes are made in the UI.
 * Use this to read the current values for the specified parameters
 * and update your design.
 * Values are represented as key-value pairs with code-label as
 * specified in "Design.inputs" as key and their updated values as values.
 */
Design.inputState = {}




function map_range(value, low1, high1, low2, high2, interp="lin") {
	var val = low2 + (high2 - low2) * (value - low1) / (high1 - low1);
    return val;
}



// http://www.wolframalpha.com/examples/math/algebra/polynomials/
// quadratic functions


// 12 -> 0.6	|	30 -> 0.9	|	50 -> 1		|	60 -> 0.95
function getAgeMul(age) {
	return (-0.000315247 * (Math.pow(age, 2))) + (0.0300255 * age) + 0.284562
}




function updatePts() {

	// age alterations - scale the whole design by a factor depending on age
	var age = Design.inputState.age;
	// scale factor is non-linear and follows a quadratic curve
	var sc = getAgeMul(age);

	// scale all points by value
	i_bs_pts.forEach((d, i) => { d[0] = i_bs_pts_start[i][0] * sc; d[1] = i_bs_pts_start[i][1] * sc; d[2] = i_bs_pts_start[i][2] * sc; });
	i_bk_pts.forEach((d, i) => { d[0] = i_bk_pts_start[i][0] * sc; d[1] = i_bk_pts_start[i][1] * sc; d[2] = i_bk_pts_start[i][2] * sc; });
	i_tp_pts.forEach((d, i) => { d[0] = i_tp_pts_start[i][0] * sc; d[1] = i_tp_pts_start[i][1] * sc; d[2] = i_tp_pts_start[i][2] * sc; });
	i_st_pts.forEach((d, i) => { d[0] = i_st_pts_start[i][0] * sc; d[1] = i_st_pts_start[i][1] * sc; d[2] = i_st_pts_start[i][2] * sc; });
	i_ft_pts.forEach((d, i) => { d[0] = i_ft_pts_start[i][0] * sc; d[1] = i_ft_pts_start[i][1] * sc; d[2] = i_ft_pts_start[i][2] * sc; });

	o_bs_pts.forEach((d, i) => { d[0] = o_bs_pts_start[i][0] * sc; d[1] = o_bs_pts_start[i][1] * sc; d[2] = o_bs_pts_start[i][2] * sc; });
	o_bk_pts.forEach((d, i) => { d[0] = o_bk_pts_start[i][0] * sc; d[1] = o_bk_pts_start[i][1] * sc; d[2] = o_bk_pts_start[i][2] * sc; });
	o_tp_pts.forEach((d, i) => { d[0] = o_tp_pts_start[i][0] * sc; d[1] = o_tp_pts_start[i][1] * sc; d[2] = o_tp_pts_start[i][2] * sc; });
	o_st_pts.forEach((d, i) => { d[0] = o_st_pts_start[i][0] * sc; d[1] = o_st_pts_start[i][1] * sc; d[2] = o_st_pts_start[i][2] * sc; });
	o_ft_pts.forEach((d, i) => { d[0] = o_ft_pts_start[i][0] * sc; d[1] = o_ft_pts_start[i][1] * sc; d[2] = o_ft_pts_start[i][2] * sc; });

	i_bs_pts_mirr.forEach((d, i) => { d[0] = i_bs_pts_mirr_start[i][0] * sc; d[1] = i_bs_pts_mirr_start[i][1] * sc; d[2] = i_bs_pts_mirr_start[i][2] * sc; });
	i_bk_pts_mirr.forEach((d, i) => { d[0] = i_bk_pts_mirr_start[i][0] * sc; d[1] = i_bk_pts_mirr_start[i][1] * sc; d[2] = i_bk_pts_mirr_start[i][2] * sc; });
	i_tp_pts_mirr.forEach((d, i) => { d[0] = i_tp_pts_mirr_start[i][0] * sc; d[1] = i_tp_pts_mirr_start[i][1] * sc; d[2] = i_tp_pts_mirr_start[i][2] * sc; });
	i_st_pts_mirr.forEach((d, i) => { d[0] = i_st_pts_mirr_start[i][0] * sc; d[1] = i_st_pts_mirr_start[i][1] * sc; d[2] = i_st_pts_mirr_start[i][2] * sc; });
	i_ft_pts_mirr.forEach((d, i) => { d[0] = i_ft_pts_mirr_start[i][0] * sc; d[1] = i_ft_pts_mirr_start[i][1] * sc; d[2] = i_ft_pts_mirr_start[i][2] * sc; });

	o_bs_pts_mirr.forEach((d, i) => { d[0] = o_bs_pts_mirr_start[i][0] * sc; d[1] = o_bs_pts_mirr_start[i][1] * sc; d[2] = o_bs_pts_mirr_start[i][2] * sc; });
	o_bk_pts_mirr.forEach((d, i) => { d[0] = o_bk_pts_mirr_start[i][0] * sc; d[1] = o_bk_pts_mirr_start[i][1] * sc; d[2] = o_bk_pts_mirr_start[i][2] * sc; });
	o_tp_pts_mirr.forEach((d, i) => { d[0] = o_tp_pts_mirr_start[i][0] * sc; d[1] = o_tp_pts_mirr_start[i][1] * sc; d[2] = o_tp_pts_mirr_start[i][2] * sc; });
	o_st_pts_mirr.forEach((d, i) => { d[0] = o_st_pts_mirr_start[i][0] * sc; d[1] = o_st_pts_mirr_start[i][1] * sc; d[2] = o_st_pts_mirr_start[i][2] * sc; });
	o_ft_pts_mirr.forEach((d, i) => { d[0] = o_ft_pts_mirr_start[i][0] * sc; d[1] = o_ft_pts_mirr_start[i][1] * sc; d[2] = o_ft_pts_mirr_start[i][2] * sc; });



	
	// --------------------------------------------



	// 
	var sleepstyle = Design.inputState["sleep-style"];



	
	// --------------------------------------------



	// 
	var doublebed = Design.inputState["double-bed"];



	
	// --------------------------------------------


	
	// 
	var wantsheadrest = Design.inputState["headrest"];



	
	// --------------------------------------------


	
	// 
	var wantssidetable = Design.inputState["sidetable"];



	
	// --------------------------------------------


}



//-----------------------------------------------------------



// inner profile
var i_bs_pts_start = [ 		[200, 0, -2086],	[200, 0, 252], 		[200, 0, 605] 		];
var i_bk_pts_start = [ 		[200, 0, 605], 		[200, 400, 720], 	[200, 852, 716] 	];
var i_tp_pts_start = [		[200, 852, 716], 	[200, 920, 627], 	[200, 520, 552] 	];
var i_st_pts_start = [		[200, 520, 552], 	[200, 520, 366], 	[200, 520, -2086]	];
var i_ft_pts_start = [		[200, 520, -2086], 	[200, 456, -2136],	[200, 0, -2100]		];


// outer profile
var o_bs_pts_start = [		[360, 0, -2087],	[360, 0, 240],		[360, 0, 530]		];
var o_bk_pts_start = [		[360, 0, 530],		[360, 540, 660],	[360, 907, 640]		];
var o_tp_pts_start = [		[360, 907, 640],	[360, 965, 570],	[360, 520, 510]		];
var o_st_pts_start = [		[360, 520, 510],	[360, 520, 330],	[360, 520, -2087]	];
var o_ft_pts_start = [		[360, 520, -2087],	[360, 405, -2175],	[360, 0, -2100]		];



var i_bs_pts_mirr_start = [ 	[-200, 0, -2086],	[-200, 0, 252], 	[-200, 0, 605] 		];
var i_bk_pts_mirr_start = [ 	[-200, 0, 605], 	[-200, 400, 720], 	[-200, 852, 716] 	];
var i_tp_pts_mirr_start = [		[-200, 852, 716], 	[-200, 920, 627], 	[-200, 520, 552] 	];
var i_st_pts_mirr_start = [		[-200, 520, 552], 	[-200, 520, 366], 	[-200, 520, -2086]	];
var i_ft_pts_mirr_start = [		[-200, 520, -2086], [-200, 456, -2136],	[-200, 0, -2100]	];


var o_bs_pts_mirr_start = [		[-360, 0, -2087],	[-360, 0, 240],		[-360, 0, 530]		];
var o_bk_pts_mirr_start = [		[-360, 0, 530],		[-360, 540, 660],	[-360, 907, 640]	];
var o_tp_pts_mirr_start = [		[-360, 907, 640],	[-360, 965, 570],	[-360, 520, 510]	];
var o_st_pts_mirr_start = [		[-360, 520, 510],	[-360, 520, 330],	[-360, 520, -2087]	];
var o_ft_pts_mirr_start = [		[-360, 520, -2087],	[-360, 405, -2175],	[-360, 0, -2100]	];



//-----------------------------------------------------------



// inner profile
var i_bs_pts = JSON.parse(JSON.stringify(i_bs_pts_start));
var i_bk_pts = JSON.parse(JSON.stringify(i_bk_pts_start));
var i_tp_pts = JSON.parse(JSON.stringify(i_tp_pts_start));
var i_st_pts = JSON.parse(JSON.stringify(i_st_pts_start));
var i_ft_pts = JSON.parse(JSON.stringify(i_ft_pts_start));


// outer profile
var o_bs_pts = JSON.parse(JSON.stringify(o_bs_pts_start));
var o_bk_pts = JSON.parse(JSON.stringify(o_bk_pts_start));
var o_tp_pts = JSON.parse(JSON.stringify(o_tp_pts_start));
var o_st_pts = JSON.parse(JSON.stringify(o_st_pts_start));
var o_ft_pts = JSON.parse(JSON.stringify(o_ft_pts_start));



var i_bs_pts_mirr =JSON.parse(JSON.stringify(i_bs_pts_mirr_start));
var i_bk_pts_mirr = JSON.parse(JSON.stringify(i_bk_pts_mirr_start));
var i_tp_pts_mirr = JSON.parse(JSON.stringify(i_tp_pts_mirr_start));
var i_st_pts_mirr = JSON.parse(JSON.stringify(i_st_pts_mirr_start));
var i_ft_pts_mirr = JSON.parse(JSON.stringify(i_ft_pts_mirr_start));


var o_bs_pts_mirr = JSON.parse(JSON.stringify(o_bs_pts_mirr_start));
var o_bk_pts_mirr = JSON.parse(JSON.stringify(o_bk_pts_mirr_start));
var o_tp_pts_mirr = JSON.parse(JSON.stringify(o_tp_pts_mirr_start));
var o_st_pts_mirr = JSON.parse(JSON.stringify(o_st_pts_mirr_start));
var o_ft_pts_mirr = JSON.parse(JSON.stringify(o_ft_pts_mirr_start));

/**
 * Called on design initialization; called before UI is updated to show params.
 * Use for initializing values.
 */
Design.init = function() {
}

/**
 * Called when any parameter is updated.
 * @param {object} params 		Object containing key-value pairs with 
 * 								code-label as specified in "Design.inputs" as 
 *								key and their updated values as values. The same
 * 								values are available in "Design.inputState".
 */
Design.onParamChange = function(params) {
	this.inputState = params;
	updatePts();
}

/**
 * Called to request updates to the design.
 * @param {THREE.Object3D} group 	Object passed for adding elements.
 * 									This object is removed from the scene before
 *									this function is called and added again
 *									at the end. Called after parameters are 
 *									updated
 */
Design.updateGeom = function(group, sliceManager) {



	var obj = new THREE.Object3D();


	// add curves
	var i_bs = verb.geom.NurbsCurve.byPoints( i_bs_pts, 2 );
	var i_bk = verb.geom.NurbsCurve.byPoints( i_bk_pts, 2 );
	var i_tp = verb.geom.NurbsCurve.byPoints( i_tp_pts, 2 );
	var i_st = verb.geom.NurbsCurve.byPoints( i_st_pts, 2 );
	var i_ft = verb.geom.NurbsCurve.byPoints( i_ft_pts, 2 );

	var o_bs = verb.geom.NurbsCurve.byPoints( o_bs_pts, 2 );
	var o_bk = verb.geom.NurbsCurve.byPoints( o_bk_pts, 2 );
	var o_tp = verb.geom.NurbsCurve.byPoints( o_tp_pts, 2 );
	var o_st = verb.geom.NurbsCurve.byPoints( o_st_pts, 2 );
	var o_ft = verb.geom.NurbsCurve.byPoints( o_ft_pts, 2 );

	var i_bs_mirr = verb.geom.NurbsCurve.byPoints( i_bs_pts_mirr, 2 );
	var i_bk_mirr = verb.geom.NurbsCurve.byPoints( i_bk_pts_mirr, 2 );
	var i_tp_mirr = verb.geom.NurbsCurve.byPoints( i_tp_pts_mirr, 2 );
	var i_st_mirr = verb.geom.NurbsCurve.byPoints( i_st_pts_mirr, 2 );
	var i_ft_mirr = verb.geom.NurbsCurve.byPoints( i_ft_pts_mirr, 2 );

	var o_bs_mirr = verb.geom.NurbsCurve.byPoints( o_bs_pts_mirr, 2 );
	var o_bk_mirr = verb.geom.NurbsCurve.byPoints( o_bk_pts_mirr, 2 );
	var o_tp_mirr = verb.geom.NurbsCurve.byPoints( o_tp_pts_mirr, 2 );
	var o_st_mirr = verb.geom.NurbsCurve.byPoints( o_st_pts_mirr, 2 );
	var o_ft_mirr = verb.geom.NurbsCurve.byPoints( o_ft_pts_mirr, 2 );


	// add surfaces
	var bs_crv, bk_crv, tp_crv, st_crv, ft_crv;

	var o_bk_crv = verb.geom.NurbsCurve.byPoints( o_bk_pts, 2 );
	var o_tp_crv = verb.geom.NurbsCurve.byPoints( o_tp_pts, 2 );
	var o_st_crv = verb.geom.NurbsCurve.byPoints( o_st_pts, 2 );
	var o_ft_crv = verb.geom.NurbsCurve.byPoints( o_ft_pts, 2 );

	bs_crv = 	[
					verb.geom.NurbsCurve.byPoints( o_bs_pts, 2 ),
					verb.geom.NurbsCurve.byPoints( i_bs_pts, 2 ),
					verb.geom.NurbsCurve.byPoints( i_bs_pts_mirr, 2 ),
					verb.geom.NurbsCurve.byPoints( o_bs_pts_mirr, 2 )
				];
	var srf_bs = verb.geom.NurbsSurface.byLoftingCurves( bs_crv, 2 );

	bk_crv = 	[
					o_bk_crv,
					verb.geom.NurbsCurve.byPoints( i_bk_pts, 2 ),
					verb.geom.NurbsCurve.byPoints( i_bk_pts_mirr, 2 ),
					verb.geom.NurbsCurve.byPoints( o_bk_pts_mirr, 2 )
				];
	var srf_bk = verb.geom.NurbsSurface.byLoftingCurves( bk_crv, 2 );

	tp_crv = 	[
					o_tp_crv,
					verb.geom.NurbsCurve.byPoints( i_tp_pts, 2 ),
					verb.geom.NurbsCurve.byPoints( i_tp_pts_mirr, 2 ),
					verb.geom.NurbsCurve.byPoints( o_tp_pts_mirr, 2 )
				];
	var srf_tp = verb.geom.NurbsSurface.byLoftingCurves( tp_crv, 2 );

	st_crv = 	[
					o_st_crv,
					verb.geom.NurbsCurve.byPoints( i_st_pts, 2 ),
					verb.geom.NurbsCurve.byPoints( i_st_pts_mirr, 2 ),
					verb.geom.NurbsCurve.byPoints( o_st_pts_mirr, 2 )
				];
	var srf_st = verb.geom.NurbsSurface.byLoftingCurves( st_crv, 2 );

	ft_crv = 	[
					o_ft_crv,
					verb.geom.NurbsCurve.byPoints( i_ft_pts, 2 ),
					verb.geom.NurbsCurve.byPoints( i_ft_pts_mirr, 2 ),
					verb.geom.NurbsCurve.byPoints( o_ft_pts_mirr, 2 )
				];
	var srf_ft = verb.geom.NurbsSurface.byLoftingCurves( ft_crv, 2 );


	var activeMat = new THREE.MeshPhongMaterial( { side: THREE.DoubleSide, color: 0xd32f2f } );

	let backmesh = new THREE.Mesh( srf_bk.toThreeGeometry(), activeMat );
	obj.add(new THREE.Mesh( srf_bs.toThreeGeometry(), activeMat ));
	obj.add(backmesh);
	obj.add(new THREE.Mesh( srf_tp.toThreeGeometry(), activeMat ));
	obj.add(new THREE.Mesh( srf_st.toThreeGeometry(), activeMat ));
	obj.add(new THREE.Mesh( srf_ft.toThreeGeometry(), activeMat ));








	var side_shp = new THREE.Shape();
    side_shp.moveTo(o_bs_pts[0][1], o_bs_pts[0][2]);
    side_shp.lineTo(o_bs_pts[2][1], o_bs_pts[2][2]);
	for(let i=0; i<1; i+=0.05) { let p = o_bk_crv.point(i); side_shp.lineTo(p[1], p[2]); }
	for(let i=0; i<1; i+=0.05) { let p = o_tp_crv.point(i); side_shp.lineTo(p[1], p[2]); }
	for(let i=0; i<1; i+=0.05) { let p = o_st_crv.point(i); side_shp.lineTo(p[1], p[2]); }
	for(let i=0; i<1; i+=0.05) { let p = o_ft_crv.point(i); side_shp.lineTo(p[1], p[2]); }
	var sideA = new THREE.Mesh( new THREE.ShapeGeometry( side_shp ), activeMat );
	sideA.rotation.set(Math.PI / 2, Math.PI / 2, 0);
	sideA.position.x = i_bs_pts[0][0];
	obj.add(sideA);


	var sideB = new THREE.Mesh( new THREE.ShapeGeometry( side_shp ), activeMat );
	sideB.rotation.set(Math.PI / 2, Math.PI / 2, 0);
	sideB.position.x = -(i_bs_pts[0][0]);
	obj.add(sideB);

	sliceManager.addSliceSet({uDir: true, start: -400, end: 400, cuts: 7});
	sliceManager.addSliceSet({uDir: false, start: -50, end: 600, cuts: 6});

	group.add(obj);
}


//-----------------------------------------------------------------------------





