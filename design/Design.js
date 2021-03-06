
let mockJSON = '{"token":"123456","report":{"bmi":{"phenotype":{"url_name":"bmi","display_name":"BMI","category":"trait"},"population":"european","scores":[{"score":0,"text":"Lower"},{"score":1,"text":"Slightlylower"},{"score":2,"text":"Intermediate"},{"score":3,"text":"Slightlyhigher"},{"score":4,"text":"Higher"}],"summary":{"score":0,"text":"Lower","warnings":["thisisDEMOdatabecausethisuserdoesnothavegenomedata"]}},"body-fat-mass":{"phenotype":{"url_name":"body-fat-mass","display_name":"Bodyfatmass","category":"trait"},"population":"european","scores":[{"score":0,"text":"Lowerfatmass"},{"score":1,"text":"Slightlylower"},{"score":2,"text":"Intermediate"},{"score":3,"text":"Slightlyhigher"},{"score":4,"text":"Higherfatmass"}],"summary":{"score":1,"text":"Slightlylower","warnings":["thisisDEMOdatabecausethisuserdoesnothavegenomedata"]}},"body-fat-percentage":{"phenotype":{"url_name":"body-fat-percentage","display_name":"Bodyfatpercentage","category":"trait"},"population":"european","scores":[{"score":0,"text":"Lessbodyfat"},{"score":1,"text":"Slightlylowerfatpercentage"},{"score":2,"text":"Intermediate"},{"score":3,"text":"Slightlyhigherfatpercentage"},{"score":4,"text":"Morebodyfat"}],"summary":{"score":3,"text":"Slightlyhigherfatpercentage","warnings":["thisisDEMOdatabecausethisuserdoesnothavegenomedata"]}},"caffeine-consumption":{"phenotype":{"url_name":"caffeine-consumption","display_name":"Caffeineconsumption","category":"food_and_nutrition"},"population":"european","scores":[{"score":0,"text":"Lessconsumption"},{"score":1,"text":"Slightlylesscupofcoffee"},{"score":2,"text":"Intermediate"},{"score":3,"text":"Slightlymorecupofcoffee"},{"score":4,"text":"Moreconsumption"}],"summary":{"score":1,"text":"Slightlylesscupofcoffee","warnings":["thisisDEMOdatabecausethisuserdoesnothavegenomedata"]}},"excessive-daytime-sleepiness":{"phenotype":{"url_name":"excessive-daytime-sleepiness","display_name":"Excessivedaytimesleepiness","category":"trait"},"population":"european","scores":[{"score":0,"text":"Lessdaytimesleepiness"},{"score":1,"text":"Tendnottogetdaytimesleepiness,slightly"},{"score":2,"text":"Intermediate"},{"score":3,"text":"Slighttendencytogetdaytimesleepiness"},{"score":4,"text":"Moredaytimesleepiness"}],"summary":{"score":1,"text":"Tendnottogetdaytimesleepiness,slightly","warnings":["thisisDEMOdatabecausethisuserdoesnothavegenomedata","reliabilityislow"]}},"height":{"phenotype":{"url_name":"height","display_name":"Height","category":"trait"},"population":"european","scores":[{"score":0,"text":"Shorter"},{"score":1,"text":"Slightlyshorter"},{"score":2,"text":"Intermediate"},{"score":3,"text":"Slightlytaller"},{"score":4,"text":"Taller"}],"summary":{"score":2,"text":"Intermediate","warnings":["thisisDEMOdatabecausethisuserdoesnothavegenomedata"]}},"job-related-exhaustion":{"phenotype":{"url_name":"job-related-exhaustion","display_name":"Jobrelatedexhaustion","category":"trait"},"population":"european","scores":[{"score":0,"text":"Lessjob-relatedexhaustion"},{"score":1,"text":"Tendnottobeexhausted,slightly"},{"score":2,"text":"Intermediate"},{"score":3,"text":"Slighttendencytobeexhausted"},{"score":4,"text":"Morejob-relatedexhaustion"}],"summary":{"score":0,"text":"Lessjob-relatedexhaustion","warnings":["thisisDEMOdatabecausethisuserdoesnothavegenomedata"]}},"weight":{"phenotype":{"url_name":"weight","display_name":"Geneticweight","category":"trait"},"population":"european","scores":[{"score":0,"text":"Lowerbodyweight"},{"score":1,"text":"Tendnottohaveheavyweight,slightly"},{"score":2,"text":"Intermediate"},{"score":3,"text":"Slighttendencytohaveheavyweight"},{"score":4,"text":"Higherbodyweight"}],"summary":{"score":2,"text":"Intermediate","warnings":["thisisDEMOdatabecausethisuserdoesnothavegenomedata","reliabilityislow"]}}},"id":4}';



//-----------------------------------------------------------------------------


/**
 * Object to contain information and code for the design.
 */
var Design = {};

/**
 * Meta information about the design
 */
Design.info = {
	"name": "Mendel",
	"designer": "Amit Nambiar",
	"version": "1.0.0",
	"license": "MIT",
	"short_desc": "Reading chair with a personality.",
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
		"default": 18,
		"min": 18,
		"max": 40
	},
  "comfort": { 
    "type": "slider",
    "label": "Comfort",
    "tip": "Is it for use in a relaxed environment?",
    "default": 0,
    "min": 0,
    "max": 10
  },
	"genome-id": {
    "type": "text",
		"label": "Genome ID",
    "tip": "Read about it <a href='https://github.com/amitlzkpa/mendel' target='_blank'>here</a>. Go to <a href='https://olap-genomelink.herokuapp.com/' target='_blank'>olap-genomelink.herokuapp.com</a> to submit your genome data. Use '123456' to try it out.",
	}
}


//-----------------------------------------------------------------------------


var genomeData = JSON.parse(mockJSON).report;


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



async function getGenomeData(id) {
  let geneData = {};
  try {
    geneData = (await $.get(`https://genomedb.herokuapp.com/reports?token=${id}`))[0];
    if (geneData == null || geneData.length == 0) {
      throw "Invalid genetic data";
    }
  }
  catch (err) {
    console.log(`No genetic data found. Loading mock data`);
    geneData = JSON.parse(mockJSON);
  }
  return geneData;
}




async function updatePts() {


  // reset deltas
  m_bs_pts_delta.forEach((d, i) => { d[0] = 0; d[1] = 0; d[2] = 0; });
  m_bk_pts_delta.forEach((d, i) => { d[0] = 0; d[1] = 0; d[2] = 0; });
  m_tp_pts_delta.forEach((d, i) => { d[0] = 0; d[1] = 0; d[2] = 0; });
  m_sp_pts_delta.forEach((d, i) => { d[0] = 0; d[1] = 0; d[2] = 0; });
  m_st_pts_delta.forEach((d, i) => { d[0] = 0; d[1] = 0; d[2] = 0; });
  m_ft_pts_delta.forEach((d, i) => { d[0] = 0; d[1] = 0; d[2] = 0; });

  o_bs_pts_delta.forEach((d, i) => { d[0] = 0; d[1] = 0; d[2] = 0; });
  o_bk_pts_delta.forEach((d, i) => { d[0] = 0; d[1] = 0; d[2] = 0; });
  o_tp_pts_delta.forEach((d, i) => { d[0] = 0; d[1] = 0; d[2] = 0; });
  o_sp_pts_delta.forEach((d, i) => { d[0] = 0; d[1] = 0; d[2] = 0; });
  o_st_pts_delta.forEach((d, i) => { d[0] = 0; d[1] = 0; d[2] = 0; });
  o_ft_pts_delta.forEach((d, i) => { d[0] = 0; d[1] = 0; d[2] = 0; });

  o_bs_pts_mirr_delta.forEach((d, i) => { d[0] = 0; d[1] = 0; d[2] = 0; });
  o_bk_pts_mirr_delta.forEach((d, i) => { d[0] = 0; d[1] = 0; d[2] = 0; });
  o_tp_pts_mirr_delta.forEach((d, i) => { d[0] = 0; d[1] = 0; d[2] = 0; });
  o_sp_pts_mirr_delta.forEach((d, i) => { d[0] = 0; d[1] = 0; d[2] = 0; });
  o_st_pts_mirr_delta.forEach((d, i) => { d[0] = 0; d[1] = 0; d[2] = 0; });
  o_ft_pts_mirr_delta.forEach((d, i) => { d[0] = 0; d[1] = 0; d[2] = 0; });



  
  // --------------------------------------------



  let comfort = map_range(Design.inputState.comfort, 0, 10, 0, 1);

  // fwd bkwd leans
  m_bs_pts_delta[0][2] -= comfort * 300;
  m_bk_pts_delta[1][2] += comfort * 120;
  m_bk_pts_delta[2][2] += comfort * 250;
  m_tp_pts_delta[0][2] += comfort * 250;
  m_tp_pts_delta[1][2] += comfort * 250;
  m_tp_pts_delta[2][2] += comfort * 250;
  m_sp_pts_delta[0][2] += comfort * 250;
  m_sp_pts_delta[1][2] += comfort * 250;
  m_sp_pts_delta[2][2] += comfort * 100;
  m_st_pts_delta[0][2] += comfort * 100;
  m_st_pts_delta[2][2] -= comfort * 100;
  m_ft_pts_delta[0][2] -= comfort * 100;
  m_ft_pts_delta[1][2] -= comfort * 100;
  m_ft_pts_delta[2][2] -= comfort * 300;

  // seat height
  m_sp_pts_delta[2][1] -= comfort * 60;
  m_st_pts_delta[0][1] -= comfort * 60;
  m_st_pts_delta[1][1] -= comfort * 60;
  m_st_pts_delta[2][1] -= comfort * 60;
  m_ft_pts_delta[0][1] -= comfort * 60;
  m_ft_pts_delta[1][1] -= comfort * 60;


  // fwd bkwd leans
  o_bs_pts_delta[0][2] -= comfort * 100;
  o_bs_pts_delta[2][2] += comfort * 10;
  o_bk_pts_delta[0][2] += comfort * 10;
  o_bk_pts_delta[1][2] += comfort * 120;
  o_bk_pts_delta[2][2] += comfort * 120;
  o_tp_pts_delta[0][2] += comfort * 120;
  o_tp_pts_delta[1][2] += comfort * 120;
  o_tp_pts_delta[2][2] += comfort * 120;
  o_sp_pts_delta[0][2] += comfort * 120;
  o_sp_pts_delta[1][2] += comfort * 90;
  o_ft_pts_delta[2][2] -= comfort * 100;

  // seat height
  o_sp_pts_delta[2][1] -= comfort * 60;
  o_st_pts_delta[0][1] -= comfort * 60;
  o_st_pts_delta[1][1] -= comfort * 60;
  o_st_pts_delta[2][1] -= comfort * 60;
  o_ft_pts_delta[0][1] -= comfort * 60;
  o_ft_pts_delta[1][1] -= comfort * 60;

  // width
  o_bs_pts_delta.forEach((d, i) => { d[0] += comfort * 40; });
  o_bk_pts_delta.forEach((d, i) => { d[0] += comfort * 40; });
  o_tp_pts_delta.forEach((d, i) => { d[0] += comfort * 40; });
  o_sp_pts_delta.forEach((d, i) => { d[0] += comfort * 40; });
  o_st_pts_delta.forEach((d, i) => { d[0] += comfort * 40; });
  o_ft_pts_delta.forEach((d, i) => { d[0] += comfort * 40; });


  // mirrors
  o_bs_pts_mirr_delta[0][2] -= comfort * 100;
  o_bs_pts_mirr_delta[2][2] += comfort * 10;
  o_bk_pts_mirr_delta[0][2] += comfort * 10;
  o_bk_pts_mirr_delta[1][2] += comfort * 120;
  o_bk_pts_mirr_delta[2][2] += comfort * 120;
  o_tp_pts_mirr_delta[0][2] += comfort * 120;
  o_tp_pts_mirr_delta[1][2] += comfort * 120;
  o_tp_pts_mirr_delta[2][2] += comfort * 120;
  o_sp_pts_mirr_delta[0][2] += comfort * 120;
  o_sp_pts_mirr_delta[1][2] += comfort * 90;
  o_ft_pts_mirr_delta[2][2] -= comfort * 100;

  o_sp_pts_mirr_delta[2][1] -= comfort * 60;
  o_st_pts_mirr_delta[0][1] -= comfort * 60;
  o_st_pts_mirr_delta[1][1] -= comfort * 60;
  o_st_pts_mirr_delta[2][1] -= comfort * 60;
  o_ft_pts_mirr_delta[0][1] -= comfort * 60;
  o_ft_pts_mirr_delta[1][1] -= comfort * 60;

  o_bs_pts_mirr_delta.forEach((d, i) => { d[0] -= comfort * 40; });
  o_bk_pts_mirr_delta.forEach((d, i) => { d[0] -= comfort * 40; });
  o_tp_pts_mirr_delta.forEach((d, i) => { d[0] -= comfort * 40; });
  o_sp_pts_mirr_delta.forEach((d, i) => { d[0] -= comfort * 40; });
  o_st_pts_mirr_delta.forEach((d, i) => { d[0] -= comfort * 40; });
  o_ft_pts_mirr_delta.forEach((d, i) => { d[0] -= comfort * 40; });




  // --------------------------------------------




  var age = Design.inputState.age;
  var sc = map_range(age, 18, 40, 1, 0);
  var ageHeightRange = 90;
  var ageWidthRange = 60;

  // height changes
  m_bk_pts_delta[2][1] -= sc * ageHeightRange;
  m_tp_pts_delta[0][1] -= sc * ageHeightRange;
  m_tp_pts_delta[1][1] -= sc * ageHeightRange;
  m_tp_pts_delta[2][1] -= sc * ageHeightRange;
  m_sp_pts_delta[0][1] -= sc * ageHeightRange;
  m_sp_pts_delta[1][1] -= sc * ageHeightRange;
  m_sp_pts_delta[2][1] -= sc * ageHeightRange;
  m_st_pts_delta[0][1] -= sc * ageHeightRange;
  m_st_pts_delta[1][1] -= sc * ageHeightRange;
  m_st_pts_delta[2][1] -= sc * ageHeightRange;
  m_ft_pts_delta[0][1] -= sc * ageHeightRange;
  m_ft_pts_delta[1][1] -= sc * ageHeightRange;

  o_bk_pts_delta[2][1] -= sc * ageHeightRange;
  o_tp_pts_delta[0][1] -= sc * ageHeightRange;
  o_tp_pts_delta[1][1] -= sc * ageHeightRange;
  o_tp_pts_delta[2][1] -= sc * ageHeightRange;
  o_sp_pts_delta[0][1] -= sc * ageHeightRange;
  o_sp_pts_delta[1][1] -= sc * ageHeightRange;
  o_sp_pts_delta[2][1] -= sc * ageHeightRange;
  o_st_pts_delta[0][1] -= sc * ageHeightRange;
  o_st_pts_delta[1][1] -= sc * ageHeightRange;
  o_st_pts_delta[2][1] -= sc * ageHeightRange;
  o_ft_pts_delta[0][1] -= sc * ageHeightRange;
  o_ft_pts_delta[1][1] -= sc * ageHeightRange;

  o_bk_pts_mirr_delta[2][1] -= sc * ageHeightRange;
  o_tp_pts_mirr_delta[0][1] -= sc * ageHeightRange;
  o_tp_pts_mirr_delta[1][1] -= sc * ageHeightRange;
  o_tp_pts_mirr_delta[2][1] -= sc * ageHeightRange;
  o_sp_pts_mirr_delta[0][1] -= sc * ageHeightRange;
  o_sp_pts_mirr_delta[1][1] -= sc * ageHeightRange;
  o_sp_pts_mirr_delta[2][1] -= sc * ageHeightRange;
  o_st_pts_mirr_delta[0][1] -= sc * ageHeightRange;
  o_st_pts_mirr_delta[1][1] -= sc * ageHeightRange;
  o_st_pts_mirr_delta[2][1] -= sc * ageHeightRange;
  o_ft_pts_mirr_delta[0][1] -= sc * ageHeightRange;
  o_ft_pts_mirr_delta[1][1] -= sc * ageHeightRange;


  // width
  o_bs_pts_delta.forEach((d, i) => { d[0] += sc * ageWidthRange; });
  o_bk_pts_delta.forEach((d, i) => { d[0] += sc * ageWidthRange; });
  o_tp_pts_delta.forEach((d, i) => { d[0] += sc * ageWidthRange; });
  o_sp_pts_delta.forEach((d, i) => { d[0] += sc * ageWidthRange; });
  o_st_pts_delta.forEach((d, i) => { d[0] += sc * ageWidthRange; });
  o_ft_pts_delta.forEach((d, i) => { d[0] += sc * ageWidthRange; });

  o_bs_pts_mirr_delta.forEach((d, i) => { d[0] -= sc * ageWidthRange; });
  o_bk_pts_mirr_delta.forEach((d, i) => { d[0] -= sc * ageWidthRange; });
  o_tp_pts_mirr_delta.forEach((d, i) => { d[0] -= sc * ageWidthRange; });
  o_sp_pts_mirr_delta.forEach((d, i) => { d[0] -= sc * ageWidthRange; });
  o_st_pts_mirr_delta.forEach((d, i) => { d[0] -= sc * ageWidthRange; });
  o_ft_pts_mirr_delta.forEach((d, i) => { d[0] -= sc * ageWidthRange; });



  // --------------------------------------------


  if (typeof Design.inputState['genome-id'] !== 'undefined' && Design.inputState['genome-id'].length >= 6) {
    genomeData = (await getGenomeData(Design.inputState['genome-id'])).report;
  }

  let height_score = genomeData.height.summary.score;
  let ht_sc = map_range(height_score, 0, 5, 0, 1);
  let htLeanRange = 300;

  // height attenuation
  m_bs_pts_delta[0][2] -= ht_sc * htLeanRange / 2;
  m_bk_pts_delta[1][2] += ht_sc * htLeanRange / 4;
  m_bk_pts_delta[2][2] += ht_sc * htLeanRange;
  m_tp_pts_delta[0][2] += ht_sc * htLeanRange;
  m_tp_pts_delta[1][2] += ht_sc * htLeanRange;
  m_tp_pts_delta[2][2] += ht_sc * htLeanRange;
  m_sp_pts_delta[0][2] += ht_sc * htLeanRange;
  m_sp_pts_delta[1][2] += ht_sc * htLeanRange;
  m_sp_pts_delta[2][2] += ht_sc * htLeanRange / 4;
  m_st_pts_delta[0][2] += ht_sc * htLeanRange / 4;
  m_st_pts_delta[2][2] -= ht_sc * htLeanRange / 4;
  m_ft_pts_delta[0][2] -= ht_sc * htLeanRange / 4;
  m_ft_pts_delta[1][2] -= ht_sc * htLeanRange / 4;
  m_ft_pts_delta[2][2] -= ht_sc * htLeanRange / 2;

  o_bs_pts_delta[0][2] -= ht_sc * htLeanRange / 2;
  o_bs_pts_delta[2][2] += ht_sc * htLeanRange / 10;
  o_bk_pts_delta[0][2] += ht_sc * htLeanRange / 10;
  o_bk_pts_delta[1][2] += ht_sc * htLeanRange / 2;
  o_bk_pts_delta[2][2] += ht_sc * htLeanRange / 2;
  o_tp_pts_delta[0][2] += ht_sc * htLeanRange / 2;
  o_tp_pts_delta[1][2] += ht_sc * htLeanRange / 2;
  o_tp_pts_delta[2][2] += ht_sc * htLeanRange / 2;
  o_sp_pts_delta[0][2] += ht_sc * htLeanRange / 2;
  o_sp_pts_delta[1][2] += ht_sc * htLeanRange / 2;
  o_ft_pts_delta[2][2] -= ht_sc * htLeanRange / 2;

  o_bs_pts_mirr_delta[0][2] -= ht_sc * htLeanRange / 2;
  o_bs_pts_mirr_delta[2][2] += ht_sc * htLeanRange / 10;
  o_bk_pts_mirr_delta[0][2] += ht_sc * htLeanRange / 10;
  o_bk_pts_mirr_delta[1][2] += ht_sc * htLeanRange / 2;
  o_bk_pts_mirr_delta[2][2] += ht_sc * htLeanRange / 2;
  o_tp_pts_mirr_delta[0][2] += ht_sc * htLeanRange / 2;
  o_tp_pts_mirr_delta[1][2] += ht_sc * htLeanRange / 2;
  o_tp_pts_mirr_delta[2][2] += ht_sc * htLeanRange / 2;
  o_sp_pts_mirr_delta[0][2] += ht_sc * htLeanRange / 2;
  o_sp_pts_mirr_delta[1][2] += ht_sc * htLeanRange / 2;
  o_ft_pts_mirr_delta[2][2] -= ht_sc * htLeanRange / 2;



  
  // --------------------------------------------




  let weight_score = genomeData.weight.summary.score;
  let bmi_score = genomeData.bmi.summary.score;
  let bodyfatmass_score = genomeData['body-fat-mass'].summary.score;

  let mass_sc = map_range(((weight_score+bmi_score+bodyfatmass_score)/3), 0, 5, 0, 1);
  let massWidthRange = 60;

  // width
  o_bs_pts_delta.forEach((d, i) => { d[0] += mass_sc * massWidthRange; });
  o_bk_pts_delta.forEach((d, i) => { d[0] += mass_sc * massWidthRange; });
  o_tp_pts_delta.forEach((d, i) => { d[0] += mass_sc * massWidthRange; });
  o_sp_pts_delta.forEach((d, i) => { d[0] += mass_sc * massWidthRange; });
  o_st_pts_delta.forEach((d, i) => { d[0] += mass_sc * massWidthRange; });
  o_ft_pts_delta.forEach((d, i) => { d[0] += mass_sc * massWidthRange; });

  o_bs_pts_mirr_delta.forEach((d, i) => { d[0] -= mass_sc * massWidthRange; });
  o_bk_pts_mirr_delta.forEach((d, i) => { d[0] -= mass_sc * massWidthRange; });
  o_tp_pts_mirr_delta.forEach((d, i) => { d[0] -= mass_sc * massWidthRange; });
  o_sp_pts_mirr_delta.forEach((d, i) => { d[0] -= mass_sc * massWidthRange; });
  o_st_pts_mirr_delta.forEach((d, i) => { d[0] -= mass_sc * massWidthRange; });
  o_ft_pts_mirr_delta.forEach((d, i) => { d[0] -= mass_sc * massWidthRange; });

  // seat curvarture
  m_bk_pts_delta[1][2] += mass_sc * massWidthRange / 2;
  m_bk_pts_delta[2][2] += mass_sc * massWidthRange / 2;
  m_tp_pts_delta[0][2] += mass_sc * massWidthRange / 2;
  m_tp_pts_delta[1][2] += mass_sc * massWidthRange / 2;
  m_tp_pts_delta[2][2] += mass_sc * massWidthRange / 2;
  m_sp_pts_delta[0][2] += mass_sc * massWidthRange / 2;
  m_sp_pts_delta[1][2] += mass_sc * massWidthRange / 2;
  m_sp_pts_delta[2][1] -= mass_sc * massWidthRange / 2;
  m_st_pts_delta[0][1] -= mass_sc * massWidthRange / 2;
  m_st_pts_delta[1][1] -= mass_sc * massWidthRange / 2;
  m_st_pts_delta[2][1] -= mass_sc * massWidthRange / 2;
  m_ft_pts_delta[0][1] -= mass_sc * massWidthRange / 2;
  m_ft_pts_delta[1][1] -= mass_sc * massWidthRange / 2;



  
  // --------------------------------------------



  let exhaustion_score = genomeData['job-related-exhaustion'].summary.score;
  let excessivedaytimesleepiness_score = genomeData['excessive-daytime-sleepiness'].summary.score;

  let exh_sc = map_range(((exhaustion_score+excessivedaytimesleepiness_score)/2), 0, 5, 0, 1);

  // fwd bkwd leans
  m_bs_pts_delta[0][2] -= exh_sc * 100;
  m_bk_pts_delta[1][2] += exh_sc * 40;
  m_bk_pts_delta[2][2] += exh_sc * 80;
  m_tp_pts_delta[0][2] += exh_sc * 80;
  m_tp_pts_delta[1][2] += exh_sc * 80;
  m_tp_pts_delta[2][2] += exh_sc * 80;
  m_sp_pts_delta[0][2] += exh_sc * 80;
  m_sp_pts_delta[1][2] += exh_sc * 80;
  m_sp_pts_delta[2][2] += exh_sc * 30;
  m_st_pts_delta[0][2] += exh_sc * 30;
  m_st_pts_delta[2][2] -= exh_sc * 30;
  m_ft_pts_delta[0][2] -= exh_sc * 30;
  m_ft_pts_delta[1][2] -= exh_sc * 30;
  m_ft_pts_delta[2][2] -= exh_sc * 100;

  // seat height
  m_sp_pts_delta[2][1] -= exh_sc * 20;
  m_st_pts_delta[0][1] -= exh_sc * 20;
  m_st_pts_delta[1][1] -= exh_sc * 20;
  m_st_pts_delta[2][1] -= exh_sc * 20;
  m_ft_pts_delta[0][1] -= exh_sc * 20;
  m_ft_pts_delta[1][1] -= exh_sc * 20;


  // fwd bkwd leans
  o_bs_pts_delta[0][2] -= exh_sc * 30;
  o_bs_pts_delta[2][2] += exh_sc * 10;
  o_bk_pts_delta[0][2] += exh_sc * 10;
  o_bk_pts_delta[1][2] += exh_sc * 40;
  o_bk_pts_delta[2][2] += exh_sc * 40;
  o_tp_pts_delta[0][2] += exh_sc * 40;
  o_tp_pts_delta[1][2] += exh_sc * 40;
  o_tp_pts_delta[2][2] += exh_sc * 40;
  o_sp_pts_delta[0][2] += exh_sc * 40;
  o_sp_pts_delta[1][2] += exh_sc * 90;
  o_ft_pts_delta[2][2] -= exh_sc * 30;

  // seat height
  o_sp_pts_delta[2][1] -= exh_sc * 20;
  o_st_pts_delta[0][1] -= exh_sc * 20;
  o_st_pts_delta[1][1] -= exh_sc * 20;
  o_st_pts_delta[2][1] -= exh_sc * 20;
  o_ft_pts_delta[0][1] -= exh_sc * 20;
  o_ft_pts_delta[1][1] -= exh_sc * 20;

  // width
  o_bs_pts_delta.forEach((d, i) => { d[0] += exh_sc * 20; });
  o_bk_pts_delta.forEach((d, i) => { d[0] += exh_sc * 20; });
  o_tp_pts_delta.forEach((d, i) => { d[0] += exh_sc * 20; });
  o_sp_pts_delta.forEach((d, i) => { d[0] += exh_sc * 20; });
  o_st_pts_delta.forEach((d, i) => { d[0] += exh_sc * 20; });
  o_ft_pts_delta.forEach((d, i) => { d[0] += exh_sc * 20; });


  // mirrors
  o_bs_pts_mirr_delta[0][2] -= exh_sc * 30;
  o_bs_pts_mirr_delta[2][2] += exh_sc * 10;
  o_bk_pts_mirr_delta[0][2] += exh_sc * 10;
  o_bk_pts_mirr_delta[1][2] += exh_sc * 40;
  o_bk_pts_mirr_delta[2][2] += exh_sc * 40;
  o_tp_pts_mirr_delta[0][2] += exh_sc * 40;
  o_tp_pts_mirr_delta[1][2] += exh_sc * 40;
  o_tp_pts_mirr_delta[2][2] += exh_sc * 40;
  o_sp_pts_mirr_delta[0][2] += exh_sc * 40;
  o_sp_pts_mirr_delta[1][2] += exh_sc * 90;
  o_ft_pts_mirr_delta[2][2] -= exh_sc * 30;

  o_sp_pts_mirr_delta[2][1] -= exh_sc * 20;
  o_st_pts_mirr_delta[0][1] -= exh_sc * 20;
  o_st_pts_mirr_delta[1][1] -= exh_sc * 20;
  o_st_pts_mirr_delta[2][1] -= exh_sc * 20;
  o_ft_pts_mirr_delta[0][1] -= exh_sc * 20;
  o_ft_pts_mirr_delta[1][1] -= exh_sc * 20;

  o_bs_pts_mirr_delta.forEach((d, i) => { d[0] -= exh_sc * 20; });
  o_bk_pts_mirr_delta.forEach((d, i) => { d[0] -= exh_sc * 20; });
  o_tp_pts_mirr_delta.forEach((d, i) => { d[0] -= exh_sc * 20; });
  o_sp_pts_mirr_delta.forEach((d, i) => { d[0] -= exh_sc * 20; });
  o_st_pts_mirr_delta.forEach((d, i) => { d[0] -= exh_sc * 20; });
  o_ft_pts_mirr_delta.forEach((d, i) => { d[0] -= exh_sc * 20; });



  
  // --------------------------------------------



  
  // --------------------------------------------



  m_bs_pts.forEach((d, i) => { d[0] = m_bs_pts_start[i][0] + m_bs_pts_delta[i][0]; d[1] = m_bs_pts_start[i][1] + m_bs_pts_delta[i][1]; d[2] = m_bs_pts_start[i][2] + m_bs_pts_delta[i][2]; });
  m_bk_pts.forEach((d, i) => { d[0] = m_bk_pts_start[i][0] + m_bk_pts_delta[i][0]; d[1] = m_bk_pts_start[i][1] + m_bk_pts_delta[i][1]; d[2] = m_bk_pts_start[i][2] + m_bk_pts_delta[i][2]; });
  m_tp_pts.forEach((d, i) => { d[0] = m_tp_pts_start[i][0] + m_tp_pts_delta[i][0]; d[1] = m_tp_pts_start[i][1] + m_tp_pts_delta[i][1]; d[2] = m_tp_pts_start[i][2] + m_tp_pts_delta[i][2]; });
  m_sp_pts.forEach((d, i) => { d[0] = m_sp_pts_start[i][0] + m_sp_pts_delta[i][0]; d[1] = m_sp_pts_start[i][1] + m_sp_pts_delta[i][1]; d[2] = m_sp_pts_start[i][2] + m_sp_pts_delta[i][2]; });
  m_st_pts.forEach((d, i) => { d[0] = m_st_pts_start[i][0] + m_st_pts_delta[i][0]; d[1] = m_st_pts_start[i][1] + m_st_pts_delta[i][1]; d[2] = m_st_pts_start[i][2] + m_st_pts_delta[i][2]; });
  m_ft_pts.forEach((d, i) => { d[0] = m_ft_pts_start[i][0] + m_ft_pts_delta[i][0]; d[1] = m_ft_pts_start[i][1] + m_ft_pts_delta[i][1]; d[2] = m_ft_pts_start[i][2] + m_ft_pts_delta[i][2]; });

  o_bs_pts.forEach((d, i) => { d[0] = o_bs_pts_start[i][0] + o_bs_pts_delta[i][0]; d[1] = o_bs_pts_start[i][1] + o_bs_pts_delta[i][1]; d[2] = o_bs_pts_start[i][2] + o_bs_pts_delta[i][2]; });
  o_bk_pts.forEach((d, i) => { d[0] = o_bk_pts_start[i][0] + o_bk_pts_delta[i][0]; d[1] = o_bk_pts_start[i][1] + o_bk_pts_delta[i][1]; d[2] = o_bk_pts_start[i][2] + o_bk_pts_delta[i][2]; });
  o_tp_pts.forEach((d, i) => { d[0] = o_tp_pts_start[i][0] + o_tp_pts_delta[i][0]; d[1] = o_tp_pts_start[i][1] + o_tp_pts_delta[i][1]; d[2] = o_tp_pts_start[i][2] + o_tp_pts_delta[i][2]; });
  o_sp_pts.forEach((d, i) => { d[0] = o_sp_pts_start[i][0] + o_sp_pts_delta[i][0]; d[1] = o_sp_pts_start[i][1] + o_sp_pts_delta[i][1]; d[2] = o_sp_pts_start[i][2] + o_sp_pts_delta[i][2]; });
  o_st_pts.forEach((d, i) => { d[0] = o_st_pts_start[i][0] + o_st_pts_delta[i][0]; d[1] = o_st_pts_start[i][1] + o_st_pts_delta[i][1]; d[2] = o_st_pts_start[i][2] + o_st_pts_delta[i][2]; });
  o_ft_pts.forEach((d, i) => { d[0] = o_ft_pts_start[i][0] + o_ft_pts_delta[i][0]; d[1] = o_ft_pts_start[i][1] + o_ft_pts_delta[i][1]; d[2] = o_ft_pts_start[i][2] + o_ft_pts_delta[i][2]; });

  o_bs_pts_mirr.forEach((d, i) => { d[0] = o_bs_pts_mirr_start[i][0] + o_bs_pts_mirr_delta[i][0]; d[1] = o_bs_pts_mirr_start[i][1] + o_bs_pts_mirr_delta[i][1]; d[2] = o_bs_pts_mirr_start[i][2] + o_bs_pts_mirr_delta[i][2]; });
  o_bk_pts_mirr.forEach((d, i) => { d[0] = o_bk_pts_mirr_start[i][0] + o_bk_pts_mirr_delta[i][0]; d[1] = o_bk_pts_mirr_start[i][1] + o_bk_pts_mirr_delta[i][1]; d[2] = o_bk_pts_mirr_start[i][2] + o_bk_pts_mirr_delta[i][2]; });
  o_tp_pts_mirr.forEach((d, i) => { d[0] = o_tp_pts_mirr_start[i][0] + o_tp_pts_mirr_delta[i][0]; d[1] = o_tp_pts_mirr_start[i][1] + o_tp_pts_mirr_delta[i][1]; d[2] = o_tp_pts_mirr_start[i][2] + o_tp_pts_mirr_delta[i][2]; });
  o_sp_pts_mirr.forEach((d, i) => { d[0] = o_sp_pts_mirr_start[i][0] + o_sp_pts_mirr_delta[i][0]; d[1] = o_sp_pts_mirr_start[i][1] + o_sp_pts_mirr_delta[i][1]; d[2] = o_sp_pts_mirr_start[i][2] + o_sp_pts_mirr_delta[i][2]; });
  o_st_pts_mirr.forEach((d, i) => { d[0] = o_st_pts_mirr_start[i][0] + o_st_pts_mirr_delta[i][0]; d[1] = o_st_pts_mirr_start[i][1] + o_st_pts_mirr_delta[i][1]; d[2] = o_st_pts_mirr_start[i][2] + o_st_pts_mirr_delta[i][2]; });
  o_ft_pts_mirr.forEach((d, i) => { d[0] = o_ft_pts_mirr_start[i][0] + o_ft_pts_mirr_delta[i][0]; d[1] = o_ft_pts_mirr_start[i][1] + o_ft_pts_mirr_delta[i][1]; d[2] = o_ft_pts_mirr_start[i][2] + o_ft_pts_mirr_delta[i][2]; });


  
  // --------------------------------------------


  // console.log(m_bs_pts_delta);


}



//-----------------------------------------------------------



// inner profile
var m_bs_pts_delta =    [   [0, 0, 0],    [0, 0, 0],    [0, 0, 0]     ];
var m_bk_pts_delta =    [   [0, 0, 0],    [0, 0, 0],    [0, 0, 0]     ];
var m_tp_pts_delta =    [   [0, 0, 0],    [0, 0, 0],    [0, 0, 0]     ];
var m_sp_pts_delta =    [   [0, 0, 0],    [0, 0, 0],    [0, 0, 0]     ];
var m_st_pts_delta =    [   [0, 0, 0],    [0, 0, 0],    [0, 0, 0]     ];
var m_ft_pts_delta =    [   [0, 0, 0],    [0, 0, 0],    [0, 0, 0]     ];


// outer profiles
var o_bs_pts_delta =    [   [0, 0, 0],    [0, 0, 0],    [0, 0, 0]     ];
var o_bk_pts_delta =    [   [0, 0, 0],    [0, 0, 0],    [0, 0, 0]     ];
var o_tp_pts_delta =    [   [0, 0, 0],    [0, 0, 0],    [0, 0, 0]     ];
var o_sp_pts_delta =    [   [0, 0, 0],    [0, 0, 0],    [0, 0, 0]     ];
var o_st_pts_delta =    [   [0, 0, 0],    [0, 0, 0],    [0, 0, 0]     ];
var o_ft_pts_delta =    [   [0, 0, 0],    [0, 0, 0],    [0, 0, 0]     ];


var o_bs_pts_mirr_delta = [   [0, 0, 0],  [0, 0, 0],    [0, 0, 0]     ];
var o_bk_pts_mirr_delta = [   [0, 0, 0],  [0, 0, 0],    [0, 0, 0]     ];
var o_tp_pts_mirr_delta = [   [0, 0, 0],  [0, 0, 0],    [0, 0, 0]     ];
var o_sp_pts_mirr_delta = [   [0, 0, 0],  [0, 0, 0],    [0, 0, 0]     ];
var o_st_pts_mirr_delta = [   [0, 0, 0],  [0, 0, 0],    [0, 0, 0]     ];
var o_ft_pts_mirr_delta = [   [0, 0, 0],  [0, 0, 0],    [0, 0, 0]     ];



//-----------------------------------------------------------



var doublebedSlicingOn;



// inner profile
var m_bs_pts_start = [    [0, 0, 0],      [0, 0, 252],    [0, 0, 685]     ];
var m_bk_pts_start = [    [0, 0, 685],    [0, 400, 740],  [0, 952, 720]   ];
var m_tp_pts_start = [    [0, 952, 720],  [0, 1020, 680],  [0, 860, 552]   ];
var m_sp_pts_start = [    [0, 860, 552],  [0, 755, 530],  [0, 480, 520]    ];
var m_st_pts_start = [    [0, 480, 520],  [0, 450, 366],  [0, 480, 14]    ];
var m_ft_pts_start = [    [0, 480, 14],   [0, 456, -63],  [0, 0, 0]       ];


// outer profiles
var o_bs_pts_start = [    [380, 0, 0],      [380, 0, 240],    [380, 0, 600]     ];
var o_bk_pts_start = [    [380, 0, 600],    [380, 540, 660],  [380, 1007, 700]   ];
var o_tp_pts_start = [    [380, 1007, 700],  [380, 1065, 640],  [380, 907, 510]   ];
var o_sp_pts_start = [    [380, 907, 510],  [380, 603, 490],  [380, 520, 470]   ];
var o_st_pts_start = [    [380, 520, 470],  [380, 503, 330],  [380, 520, 13]    ];
var o_ft_pts_start = [    [380, 520, 13],   [380, 405, -75],  [380, 0, 0]       ];


var o_bs_pts_mirr_start = [   [-380, 0, 0],     [-380, 0, 240],   [-380, 0, 600 ]   ];
var o_bk_pts_mirr_start = [   [-380, 0, 600],   [-380, 540, 660], [-380, 1007, 700]  ];
var o_tp_pts_mirr_start = [   [-380, 1007, 700], [-380, 1065, 640], [-380, 907, 510]  ];
var o_sp_pts_mirr_start = [   [-380, 907, 510], [-380, 603, 490], [-380, 520, 470]  ];
var o_st_pts_mirr_start = [   [-380, 520, 470], [-380, 503, 330], [-380, 520, 13]   ];
var o_ft_pts_mirr_start = [   [-380, 520, 13],  [-380, 405, -75], [-380, 0, 0]      ];



//-----------------------------------------------------------



// inner profile
var m_bs_pts = JSON.parse(JSON.stringify(m_bs_pts_start));
var m_bk_pts = JSON.parse(JSON.stringify(m_bk_pts_start));
var m_tp_pts = JSON.parse(JSON.stringify(m_tp_pts_start));
var m_sp_pts = JSON.parse(JSON.stringify(m_sp_pts_start));
var m_st_pts = JSON.parse(JSON.stringify(m_st_pts_start));
var m_ft_pts = JSON.parse(JSON.stringify(m_ft_pts_start));


// outer profile
var o_bs_pts = JSON.parse(JSON.stringify(o_bs_pts_start));
var o_bk_pts = JSON.parse(JSON.stringify(o_bk_pts_start));
var o_tp_pts = JSON.parse(JSON.stringify(o_tp_pts_start));
var o_sp_pts = JSON.parse(JSON.stringify(o_sp_pts_start));
var o_st_pts = JSON.parse(JSON.stringify(o_st_pts_start));
var o_ft_pts = JSON.parse(JSON.stringify(o_ft_pts_start));


var o_bs_pts_mirr = JSON.parse(JSON.stringify(o_bs_pts_mirr_start));
var o_bk_pts_mirr = JSON.parse(JSON.stringify(o_bk_pts_mirr_start));
var o_tp_pts_mirr = JSON.parse(JSON.stringify(o_tp_pts_mirr_start));
var o_sp_pts_mirr = JSON.parse(JSON.stringify(o_sp_pts_mirr_start));
var o_st_pts_mirr = JSON.parse(JSON.stringify(o_st_pts_mirr_start));
var o_ft_pts_mirr = JSON.parse(JSON.stringify(o_ft_pts_mirr_start));

/**
 * Called on design initialization; called before UI is updated to show params.
 * Use for initializing values.
 */
Design.init = async function() {
}

/**
 * Called to request updates to the design.
 * @param {THREE.Object3D} group 	Object passed for adding elements.
 * 									This object is removed from the scene before
 *									this function is called and added again
 *									at the end. Called after parameters are 
 *									updated
 */
Design.updateGeom = async function(group, sliceManager) {


  await updatePts();

	var obj = new THREE.Object3D();


	// add curves
	var m_bs = verb.geom.NurbsCurve.byPoints( m_bs_pts, 1 );
	var m_bk = verb.geom.NurbsCurve.byPoints( m_bk_pts, 1 );
	var m_tp = verb.geom.NurbsCurve.byPoints( m_tp_pts, 1 );
  var m_sp = verb.geom.NurbsCurve.byPoints( m_sp_pts, 1 );
	var m_st = verb.geom.NurbsCurve.byPoints( m_st_pts, 1 );
	var m_ft = verb.geom.NurbsCurve.byPoints( m_ft_pts, 1 );

	var o_bs = verb.geom.NurbsCurve.byPoints( o_bs_pts, 1 );
	var o_bk = verb.geom.NurbsCurve.byPoints( o_bk_pts, 1 );
	var o_tp = verb.geom.NurbsCurve.byPoints( o_tp_pts, 1 );
  var o_sp = verb.geom.NurbsCurve.byPoints( o_sp_pts, 1 );
	var o_st = verb.geom.NurbsCurve.byPoints( o_st_pts, 1 );
	var o_ft = verb.geom.NurbsCurve.byPoints( o_ft_pts, 1 );

	var o_bs_mirr = verb.geom.NurbsCurve.byPoints( o_bs_pts_mirr, 1 );
	var o_bk_mirr = verb.geom.NurbsCurve.byPoints( o_bk_pts_mirr, 1 );
	var o_tp_mirr = verb.geom.NurbsCurve.byPoints( o_tp_pts_mirr, 1 );
  var o_sp_mirr = verb.geom.NurbsCurve.byPoints( o_sp_pts_mirr, 1 );
	var o_st_mirr = verb.geom.NurbsCurve.byPoints( o_st_pts_mirr, 1 );
	var o_ft_mirr = verb.geom.NurbsCurve.byPoints( o_ft_pts_mirr, 1 );


	// add surfaces
	var bs_crv, bk_crv, tp_crv, sp_crv, st_crv, ft_crv;

	var o_bk_crv = verb.geom.NurbsCurve.byPoints( o_bk_pts, 1 );
	var o_tp_crv = verb.geom.NurbsCurve.byPoints( o_tp_pts, 1 );
  var o_sp_crv = verb.geom.NurbsCurve.byPoints( o_sp_pts, 1 );
	var o_st_crv = verb.geom.NurbsCurve.byPoints( o_st_pts, 1 );
	var o_ft_crv = verb.geom.NurbsCurve.byPoints( o_ft_pts, 1 );

	bs_crv = 	[
					verb.geom.NurbsCurve.byPoints( o_bs_pts, 1 ),
					verb.geom.NurbsCurve.byPoints( m_bs_pts, 1 ),
					verb.geom.NurbsCurve.byPoints( o_bs_pts_mirr, 1 )
				];
	var srf_bs = verb.geom.NurbsSurface.byLoftingCurves( bs_crv, 1 );

	bk_crv = 	[
					o_bk_crv,
					verb.geom.NurbsCurve.byPoints( m_bk_pts, 1 ),
					verb.geom.NurbsCurve.byPoints( o_bk_pts_mirr, 1 )
				];
	var srf_bk = verb.geom.NurbsSurface.byLoftingCurves( bk_crv, 1 );

	tp_crv = 	[
					o_tp_crv,
					verb.geom.NurbsCurve.byPoints( m_tp_pts, 1 ),
					verb.geom.NurbsCurve.byPoints( o_tp_pts_mirr, 1 )
				];
	var srf_tp = verb.geom.NurbsSurface.byLoftingCurves( tp_crv, 1 );

  sp_crv =  [
          o_sp_crv,
          verb.geom.NurbsCurve.byPoints( m_sp_pts, 1 ),
          verb.geom.NurbsCurve.byPoints( o_sp_pts_mirr, 1 )
        ];
  var srf_sp = verb.geom.NurbsSurface.byLoftingCurves( sp_crv, 1 );

	st_crv = 	[
					o_st_crv,
					verb.geom.NurbsCurve.byPoints( m_st_pts, 1 ),
					verb.geom.NurbsCurve.byPoints( o_st_pts_mirr, 1 )
				];
	var srf_st = verb.geom.NurbsSurface.byLoftingCurves( st_crv, 1 );

	ft_crv = 	[
					o_ft_crv,
					verb.geom.NurbsCurve.byPoints( m_ft_pts, 1 ),
					verb.geom.NurbsCurve.byPoints( o_ft_pts_mirr, 1 )
				];
	var srf_ft = verb.geom.NurbsSurface.byLoftingCurves( ft_crv, 1 );


	var activeMat = new THREE.MeshPhongMaterial( { side: THREE.DoubleSide, color: 0xd32f2f } );

  obj.add(new THREE.Mesh( srf_bs.toThreeGeometry(), activeMat ));
  obj.add(new THREE.Mesh( srf_bk.toThreeGeometry(), activeMat ));
	obj.add(new THREE.Mesh( srf_tp.toThreeGeometry(), activeMat ));
	obj.add(new THREE.Mesh( srf_sp.toThreeGeometry(), activeMat ));
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





