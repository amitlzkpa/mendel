###### O-LAP Design Page
###### Code and design for [O-LAP](https://o-lap.com)  
---
![Mendel](https://raw.githubusercontent.com/amitlzkpa/mendel/master/design/display.jpg)
# Mendel  
###### Reading chair with a personality.  
---

This document describes the design logic for a script which creates furniture designs customised for a person using their genetic information.  
It uses uses the services and information provided by [geomelink.io](https://geomelink.io). It was developed as part of a hackathon and is a proof of concept for the idea of design customized with a person's genetic information.   
You can submit your data at the following link if you have used genomelink's services and would like to customise the furniture with your genetic information.  
**Submit you data:** [https://olap-genomelink.herokuapp.com/](https://olap-genomelink.herokuapp.com/)  

## [DEMO](https://o-lap.org/app.html?a=amitlzkpa&r=o-lap_mendel)
The design is a script that accepts inputs from users and uses an internal algorithm to create vector drawings which can be used to make the design from plywood. The fabricated pieces interlock into each other and can be assembled easily.  

The design process starts by setting a rough framework of the desired output, understanding the variables that lead to desired designs and shaping the user's inputs to align with these desired variables.  

![Identifying the parametric components.](https://github.com/amitlzkpa/mendel/blob/master/data/concept_profiles.jpg?raw=true)  

The above sketch shows what the proportions of a chair would look like in side elevation. Each line represents a surface which acts as a support or cushion for the seated body. The sizes of these lines correspond to parts of the human body.  
Identifying these parameters we can try to describe the designs for the chair based on these parameters. For this demo we base it on a simple study of the human anatomy.  

![Relating the human proportions to the above parameters.](https://github.com/amitlzkpa/mendel/blob/master/data/concept_ratios.jpg?raw=true)  

The above sketch shows the quick study and their interpretation as design parameters.  
To summarize it collapses the layout and proportion of the lines to two variables labeled `x` and `p` in the sketch. `x` corresponds to 'height' of the person in design and `p` corresponds to an abstract factor named 'personality'.  

For the user we present 3 input variables to be provided by them - `age`, `comfort` and `genome_id`. All three are used to compute height(`x`) and personality(`p`) for the design. The `genome_id` is used to fetch genetic information about the person. The demo uses the services and information provided by [geomelink.io](https://geomelink.io). They provide genetic data analysis.  

The design script uses this information along with age and comfort provided by the user to set guidelines in 3d vector space. It does a translation of the lines described above but customises it with the person's age, comfort preference and genetic information.  

![here](https://github.com/amitlzkpa/mendel/blob/master/data/concept_design3.jpg?raw=true)

The age parameter adjusts the seat height and width. The comfort level affects how upright or laidback the chair is. The genetic information changes certain proportions in the design in a finer way adjusting it as per the relevent genetic trait. The following genetic traits are considered.  
* Caffeine consumption
* Excessive daytime sleepiness
* Job related exhaustion
* Body fat mass
* Body fat percentage
* BMI
* Weight
* Height

The design is passed into the O-LAP framework to extract the design drawings. Read about that [here](https://github.com/O-LAP/home).  


*Big thanks to my friend Narhari Banavlikar for the help with sketches.*
