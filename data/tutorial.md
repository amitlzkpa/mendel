This is a tutorial to make a parametric bed.  
Before we make the design lets think about the design briefly.  
This will help us determine the parts of the design which are dyanmic and are dependent on the parameters and parts which are fixed.  

Single/Double bed
Age
Headrest
Sidetable
Sleep Style

Geometrically a bed is essentially a box which is approximately the size of a human body. The top surface is raised above the ground to a height convenient to sit on.  
For an adult male:  
- The shoulder to shoulder width for an adult is 495mm. We shall consider about 30% more than this to allow for a convenient width (540 mm).  
- The height is close to 1905mm. Again we shall account for 10% extra (2100 mm).  
- We see the knee is 400mm off the ground. We consider the knee height as it will allow someone to sit on the bed and still have the feet on ground.  

As said above we considered a male human adult body for the measurements. Similarly we can find measurements for people of different ages and gender.  
Refer [this]().  
We can use the Age, Weight and the chart above to build an association and map the parameter values to an appropirate number. (We will use linear interpolation between all values.)   
The headrest and sidetable parameters will determine if the bed has a headrest and a sidetable respectively.  

A box by itself might be a little too hard to sleep comfortaby on. So we will use the above box size to contain a more smoother shape and make it more ergonomic.  
It useful to think of how we want the design to look first. I came up with this sketch to have a general idea of that.  
[Image]
Based on the sketch I drew up the side elevation of the bed.  
[Image]
I use this side elevation to extract a set of control points. The control points are what I will move for changes to `age` and `headrest` parameters.  
[Image]

Before moving forward let us quickly try to make the long section as a line so we can start visualizing things.  




