

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
	"headrest": {
		"type": "bool",
		"tip": "",
		"label": "Headrest",
		"default": false
	},
	"genome-id": {
		"type": "text",
		"tip": "Enter your Genome ID to customise the design with information from your genetic information.",
		"label": "Genome ID",
		"default": "dolly"
	}
}


//-----------------------------------------------------------------------------


var genomeData = null;


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



function getGenomeData() {
    let genome1 =   `
                    {
                      "caffeine-consumption": {
                        "phenotype": {
                          "url_name": "caffeine-consumption",
                          "display_name": "Caffeine consumption",
                          "category": "food_and_nutrition"
                        },
                        "population": "european",
                        "scores": [
                          {
                            "score": 0,
                            "text": "Less cup of coffee"
                          },
                          {
                            "score": 1,
                            "text": "Slightly less cup of coffee"
                          },
                          {
                            "score": 2,
                            "text": "Intermediate"
                          },
                          {
                            "score": 3,
                            "text": "Slightly more cup of coffee"
                          },
                          {
                            "score": 4,
                            "text": "More cup of coffee"
                          }
                        ],
                        "summary": {
                          "score": 2,
                          "text": "Intermediate",
                          "warnings": []
                        }
                      },
                      "excessive-daytime-sleepiness": {
                        "phenotype": {
                          "url_name": "excessive-daytime-sleepiness",
                          "display_name": "Excessive daytime sleepiness",
                          "category": "trait"
                        },
                        "population": "european",
                        "scores": [
                          {
                            "score": 0,
                            "text": "Tend not to get daytime sleepiness"
                          },
                          {
                            "score": 1,
                            "text": "Tend not to get daytime sleepiness, slightly"
                          },
                          {
                            "score": 2,
                            "text": "Intermediate"
                          },
                          {
                            "score": 3,
                            "text": "Slight tendency to get daytime sleepiness"
                          },
                          {
                            "score": 4,
                            "text": "Stronger tendency to get daytime sleepiness"
                          }
                        ],
                        "summary": {
                          "score": 2,
                          "text": "Intermediate",
                          "warnings": [
                            "reliability is low"
                          ]
                        }
                      },
                      "body-fat-mass": {
                        "phenotype": {
                          "url_name": "body-fat-mass",
                          "display_name": "Body fat mass",
                          "category": "trait"
                        },
                        "population": "european",
                        "scores": [
                          {
                            "score": 0,
                            "text": "Lower"
                          },
                          {
                            "score": 1,
                            "text": "Slightly lower"
                          },
                          {
                            "score": 2,
                            "text": "Intermediate"
                          },
                          {
                            "score": 3,
                            "text": "Slightly higher"
                          },
                          {
                            "score": 4,
                            "text": "Higher"
                          }
                        ],
                        "summary": {
                          "score": 2,
                          "text": "Intermediate",
                          "warnings": []
                        }
                      },
                      "body-fat-percentage": {
                        "phenotype": {
                          "url_name": "body-fat-percentage",
                          "display_name": "Body fat percentage",
                          "category": "trait"
                        },
                        "population": "european",
                        "scores": [
                          {
                            "score": 0,
                            "text": "Lower fat percentage"
                          },
                          {
                            "score": 1,
                            "text": "Slightly lower fat percentage"
                          },
                          {
                            "score": 2,
                            "text": "Intermediate"
                          },
                          {
                            "score": 3,
                            "text": "Slightly higher fat percentage"
                          },
                          {
                            "score": 4,
                            "text": "Higher fat percentage"
                          }
                        ],
                        "summary": {
                          "score": 2,
                          "text": "Intermediate",
                          "warnings": []
                        }
                      },
                      "bmi": {
                        "phenotype": {
                          "url_name": "bmi",
                          "display_name": "BMI",
                          "category": "trait"
                        },
                        "population": "european",
                        "scores": [
                          {
                            "score": 0,
                            "text": "Lower"
                          },
                          {
                            "score": 1,
                            "text": "Slightly lower"
                          },
                          {
                            "score": 2,
                            "text": "Intermediate"
                          },
                          {
                            "score": 3,
                            "text": "Slightly higher"
                          },
                          {
                            "score": 4,
                            "text": "Higher"
                          }
                        ],
                        "summary": {
                          "score": 3,
                          "text": "Slightly higher",
                          "warnings": []
                        }
                      },
                      "weight": {
                        "phenotype": {
                          "url_name": "weight",
                          "display_name": "Genetic weight",
                          "category": "trait"
                        },
                        "population": "european",
                        "scores": [
                          {
                            "score": 0,
                            "text": "Tend not to have heavy weight"
                          },
                          {
                            "score": 1,
                            "text": "Tend not to have heavy weight, slightly"
                          },
                          {
                            "score": 2,
                            "text": "Intermediate"
                          },
                          {
                            "score": 3,
                            "text": "Slight tendency to have heavy weight"
                          },
                          {
                            "score": 4,
                            "text": "Stronger tendency to have heavy weight"
                          }
                        ],
                        "summary": {
                          "score": 1,
                          "text": "Tend not to have heavy weight, slightly",
                          "warnings": [
                            "reliability is low"
                          ]
                        }
                      },
                      "height": {
                        "phenotype": {
                          "url_name": "height",
                          "display_name": "Height",
                          "category": "trait"
                        },
                        "population": "european",
                        "scores": [
                          {
                            "score": 0,
                            "text": "Shorter"
                          },
                          {
                            "score": 1,
                            "text": "Slightly shorter"
                          },
                          {
                            "score": 2,
                            "text": "Intermediate"
                          },
                          {
                            "score": 3,
                            "text": "Slightly taller"
                          },
                          {
                            "score": 4,
                            "text": "Taller"
                          }
                        ],
                        "summary": {
                          "score": 1,
                          "text": "Slightly shorter",
                          "warnings": []
                        }
                      }
                    }
                    `;
    return genome1;
}




function updatePts() {




    // --------------------------------------------




    // age alterations - scale the whole design by a factor depending on age
    var age = Design.inputState.age;
    // scale factor is non-linear and follows a quadratic curve
    var sc = getAgeMul(age);

    // scale all points by value
    m_bs_pts.forEach((d, i) => { d[0] = m_bs_pts_start[i][0] * sc; d[1] = m_bs_pts_start[i][1] * sc; d[2] = m_bs_pts_start[i][2] * sc; });
    m_bk_pts.forEach((d, i) => { d[0] = m_bk_pts_start[i][0] * sc; d[1] = m_bk_pts_start[i][1] * sc; d[2] = m_bk_pts_start[i][2] * sc; });
    m_tp_pts.forEach((d, i) => { d[0] = m_tp_pts_start[i][0] * sc; d[1] = m_tp_pts_start[i][1] * sc; d[2] = m_tp_pts_start[i][2] * sc; });
    m_st_pts.forEach((d, i) => { d[0] = m_st_pts_start[i][0] * sc; d[1] = m_st_pts_start[i][1] * sc; d[2] = m_st_pts_start[i][2] * sc; });
    m_ft_pts.forEach((d, i) => { d[0] = m_ft_pts_start[i][0] * sc; d[1] = m_ft_pts_start[i][1] * sc; d[2] = m_ft_pts_start[i][2] * sc; });

    o_bs_pts.forEach((d, i) => { d[0] = o_bs_pts_start[i][0] * sc; d[1] = o_bs_pts_start[i][1] * sc; d[2] = o_bs_pts_start[i][2] * sc; });
    o_bk_pts.forEach((d, i) => { d[0] = o_bk_pts_start[i][0] * sc; d[1] = o_bk_pts_start[i][1] * sc; d[2] = o_bk_pts_start[i][2] * sc; });
    o_tp_pts.forEach((d, i) => { d[0] = o_tp_pts_start[i][0] * sc; d[1] = o_tp_pts_start[i][1] * sc; d[2] = o_tp_pts_start[i][2] * sc; });
    o_st_pts.forEach((d, i) => { d[0] = o_st_pts_start[i][0] * sc; d[1] = o_st_pts_start[i][1] * sc; d[2] = o_st_pts_start[i][2] * sc; });
    o_ft_pts.forEach((d, i) => { d[0] = o_ft_pts_start[i][0] * sc; d[1] = o_ft_pts_start[i][1] * sc; d[2] = o_ft_pts_start[i][2] * sc; });

    o_bs_pts_mirr.forEach((d, i) => { d[0] = o_bs_pts_mirr_start[i][0] * sc; d[1] = o_bs_pts_mirr_start[i][1] * sc; d[2] = o_bs_pts_mirr_start[i][2] * sc; });
    o_bk_pts_mirr.forEach((d, i) => { d[0] = o_bk_pts_mirr_start[i][0] * sc; d[1] = o_bk_pts_mirr_start[i][1] * sc; d[2] = o_bk_pts_mirr_start[i][2] * sc; });
    o_tp_pts_mirr.forEach((d, i) => { d[0] = o_tp_pts_mirr_start[i][0] * sc; d[1] = o_tp_pts_mirr_start[i][1] * sc; d[2] = o_tp_pts_mirr_start[i][2] * sc; });
    o_st_pts_mirr.forEach((d, i) => { d[0] = o_st_pts_mirr_start[i][0] * sc; d[1] = o_st_pts_mirr_start[i][1] * sc; d[2] = o_st_pts_mirr_start[i][2] * sc; });
    o_ft_pts_mirr.forEach((d, i) => { d[0] = o_ft_pts_mirr_start[i][0] * sc; d[1] = o_ft_pts_mirr_start[i][1] * sc; d[2] = o_ft_pts_mirr_start[i][2] * sc; });




    // --------------------------------------------



    // 
    var sleepstyle = Design.inputState["sleep-style"];

    // 75(3")
    // 121.35
    // 196.35

    // (75 + 46.35) / 75 = 1.618
    // (121.35 + 75) / 121.35 = 1.618
    let sleepStyleWidthAdd = (sleepstyle == "tight") ? 75 : (sleepstyle == "comfy") ? 121.35 : 196.35;


    o_bs_pts.forEach((d, i) => { d[0] += sleepStyleWidthAdd; });
    o_bk_pts.forEach((d, i) => { d[0] += sleepStyleWidthAdd; });
    o_tp_pts.forEach((d, i) => { d[0] += sleepStyleWidthAdd; });
    o_st_pts.forEach((d, i) => { d[0] += sleepStyleWidthAdd; });
    o_ft_pts.forEach((d, i) => { d[0] += sleepStyleWidthAdd; });

    o_bs_pts_mirr.forEach((d, i) => { d[0] -= sleepStyleWidthAdd; });
    o_bk_pts_mirr.forEach((d, i) => { d[0] -= sleepStyleWidthAdd; });
    o_tp_pts_mirr.forEach((d, i) => { d[0] -= sleepStyleWidthAdd; });
    o_st_pts_mirr.forEach((d, i) => { d[0] -= sleepStyleWidthAdd; });
    o_ft_pts_mirr.forEach((d, i) => { d[0] -= sleepStyleWidthAdd; });


    let sleepStyleHeightSub = (sleepstyle == "tight") ? 25 : (sleepstyle == "comfy") ? 50 : 75;
    m_tp_pts[2][1] -= sleepStyleHeightSub;
    o_tp_pts[2][1] -= sleepStyleHeightSub;
    o_tp_pts_mirr[2][1] -= sleepStyleHeightSub;

    m_st_pts[0][1] -= sleepStyleHeightSub;
    m_st_pts[1][1] -= sleepStyleHeightSub;
    m_st_pts[2][1] -= sleepStyleHeightSub;
    
    o_st_pts[0][1] -= sleepStyleHeightSub;
    o_st_pts[1][1] -= sleepStyleHeightSub;
    o_st_pts[2][1] -= sleepStyleHeightSub;

    o_st_pts_mirr[0][1] -= sleepStyleHeightSub;
    o_st_pts_mirr[1][1] -= sleepStyleHeightSub;
    o_st_pts_mirr[2][1] -= sleepStyleHeightSub;

    m_ft_pts[0][1] -= sleepStyleHeightSub;
    o_ft_pts[0][1] -= sleepStyleHeightSub;
    o_ft_pts_mirr[0][1] -= sleepStyleHeightSub;



	
	// --------------------------------------------


	
	// 
	var wantsheadrest = Design.inputState["headrest"];
	var headrestHtAdd = (wantsheadrest) ? 300 : 0;

	m_bk_pts[2][1] += headrestHtAdd;
	o_bk_pts[2][1] += headrestHtAdd;
	o_bk_pts_mirr[2][1] += headrestHtAdd;

	m_tp_pts[0][1] += headrestHtAdd;
	m_tp_pts[1][1] += headrestHtAdd;
	o_tp_pts[0][1] += headrestHtAdd;
	o_tp_pts[1][1] += headrestHtAdd;
	o_tp_pts_mirr[0][1] += headrestHtAdd;
	o_tp_pts_mirr[1][1] += headrestHtAdd;


    
    // --------------------------------------------




    genomeData = JSON.parse(getGenomeData());
    console.log(genomeData);



	
	// --------------------------------------------


	



	
	// --------------------------------------------


}



//-----------------------------------------------------------



var doublebedSlicingOn;



// inner profile
var m_bs_pts_start = 	  [		[0, 0, -2086],		[0, 0, 252], 		[0, 0, 805] 		];
var m_bk_pts_start = 	  [		[0, 0, 805], 		[0, 200, 920], 		[0, 400, 916] 		];
var m_tp_pts_start = 	  [		[0, 400, 916], 		[0, 450, 827], 		[0, 400, 600] 		];
var m_st_pts_start = 	  [		[0, 400, 600], 		[0, 400, 466], 		[0, 400, -2086]		];
var m_ft_pts_start = 	  [		[0, 400, -2086], 	[0, 456, -2136],	[0, 0, -2100]		];


// outer profiles
var o_bs_pts_start = 	  [		[370, 0, -2087],	[370, 0, 240],		[370, 0, 730]		];
var o_bk_pts_start = 	  [		[370, 0, 730],		[370, 220, 860],	[370, 420, 840]		];
var o_tp_pts_start = 	  [		[370, 420, 840],	[370, 500, 770],	[370, 400, 600]		];
var o_st_pts_start = 	  [		[370, 400, 600],	[370, 400, 430],	[370, 400, -2087]	];
var o_ft_pts_start = 	  [		[370, 400, -2087],	[370, 405, -2175],	[370, 0, -2100]		];


var o_bs_pts_mirr_start = [		[-370, 0, -2087],	[-370, 0, 240],		[-370, 0, 730]		];
var o_bk_pts_mirr_start = [		[-370, 0, 730],		[-370, 220, 860],	[-370, 420, 840]	];
var o_tp_pts_mirr_start = [		[-370, 420, 840],	[-370, 500, 770],	[-370, 400, 600]	];
var o_st_pts_mirr_start = [		[-370, 400, 600],	[-370, 400, 430],	[-370, 400, -2087]	];
var o_ft_pts_mirr_start = [		[-370, 400, -2087],	[-370, 405, -2175],	[-370, 0, -2100]	];



//-----------------------------------------------------------



// inner profile
var m_bs_pts = JSON.parse(JSON.stringify(m_bs_pts_start));
var m_bk_pts = JSON.parse(JSON.stringify(m_bk_pts_start));
var m_tp_pts = JSON.parse(JSON.stringify(m_tp_pts_start));
var m_st_pts = JSON.parse(JSON.stringify(m_st_pts_start));
var m_ft_pts = JSON.parse(JSON.stringify(m_ft_pts_start));


// outer profile
var o_bs_pts = JSON.parse(JSON.stringify(o_bs_pts_start));
var o_bk_pts = JSON.parse(JSON.stringify(o_bk_pts_start));
var o_tp_pts = JSON.parse(JSON.stringify(o_tp_pts_start));
var o_st_pts = JSON.parse(JSON.stringify(o_st_pts_start));
var o_ft_pts = JSON.parse(JSON.stringify(o_ft_pts_start));


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
	var m_bs = verb.geom.NurbsCurve.byPoints( m_bs_pts, 2 );
	var m_bk = verb.geom.NurbsCurve.byPoints( m_bk_pts, 2 );
	var m_tp = verb.geom.NurbsCurve.byPoints( m_tp_pts, 2 );
	var m_st = verb.geom.NurbsCurve.byPoints( m_st_pts, 2 );
	var m_ft = verb.geom.NurbsCurve.byPoints( m_ft_pts, 2 );

	var o_bs = verb.geom.NurbsCurve.byPoints( o_bs_pts, 2 );
	var o_bk = verb.geom.NurbsCurve.byPoints( o_bk_pts, 2 );
	var o_tp = verb.geom.NurbsCurve.byPoints( o_tp_pts, 2 );
	var o_st = verb.geom.NurbsCurve.byPoints( o_st_pts, 2 );
	var o_ft = verb.geom.NurbsCurve.byPoints( o_ft_pts, 2 );

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
					verb.geom.NurbsCurve.byPoints( m_bs_pts, 2 ),
					verb.geom.NurbsCurve.byPoints( o_bs_pts_mirr, 2 )
				];
	var srf_bs = verb.geom.NurbsSurface.byLoftingCurves( bs_crv, 2 );

	bk_crv = 	[
					o_bk_crv,
					verb.geom.NurbsCurve.byPoints( m_bk_pts, 2 ),
					verb.geom.NurbsCurve.byPoints( o_bk_pts_mirr, 2 )
				];
	var srf_bk = verb.geom.NurbsSurface.byLoftingCurves( bk_crv, 2 );

	tp_crv = 	[
					o_tp_crv,
					verb.geom.NurbsCurve.byPoints( m_tp_pts, 2 ),
					verb.geom.NurbsCurve.byPoints( o_tp_pts_mirr, 2 )
				];
	var srf_tp = verb.geom.NurbsSurface.byLoftingCurves( tp_crv, 2 );

	st_crv = 	[
					o_st_crv,
					verb.geom.NurbsCurve.byPoints( m_st_pts, 2 ),
					verb.geom.NurbsCurve.byPoints( o_st_pts_mirr, 2 )
				];
	var srf_st = verb.geom.NurbsSurface.byLoftingCurves( st_crv, 2 );

	ft_crv = 	[
					o_ft_crv,
					verb.geom.NurbsCurve.byPoints( m_ft_pts, 2 ),
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
	sideA.position.x = o_bs_pts[0][0];
	obj.add(sideA);


	var sideB = new THREE.Mesh( new THREE.ShapeGeometry( side_shp ), activeMat );
	sideB.rotation.set(Math.PI / 2, Math.PI / 2, 0);
	sideB.position.x = -(o_bs_pts[0][0]);
	obj.add(sideB);

	if(doublebedSlicingOn) {
		sliceManager.addSliceSet({uDir: true, start: -800, end: 800, cuts: 14});
		sliceManager.addSliceSet({uDir: false, start: -2500, end: 600, cuts: 20});
	}
	else {
		sliceManager.addSliceSet({uDir: true, start: -400, end: 400, cuts: 7});
		sliceManager.addSliceSet({uDir: false, start: -2500, end: 600, cuts: 20});
	}

	group.add(obj);
}


//-----------------------------------------------------------------------------





