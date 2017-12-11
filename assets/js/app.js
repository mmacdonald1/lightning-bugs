/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */

//particlesJS.load('particles-js', 'particles.json', function() {
//  console.log('particles.js loaded - callback');
//});

/* Otherwise just put the config content (json): */

particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 91,
       },
     "shape":{
        "type": "image",
     "image":{
        "src":"./firefly.png",
        "width": 100,
        "height": 100
         }    
    },


        
    },
    
  }


);
