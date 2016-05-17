function radialEffect()
{
//   var transformR=kony.ui.makeAffineTransform();
  
  if(frm1.image1.opacity==1)
  {
//     transformR.rotate(180);
    
//     frm1.hamburgerMenu.animate(
//       kony.ui.createAnimation(
//       {
//         //"0":{"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
//       "100":{"transform":transformR,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
//       }),
//         {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1,"direction":kony.anim.DIRECTION_NONE},
//      {"animationEnd":function(){}});
    
frm1.image1.animate(
      kony.ui.createAnimation(
      {
        //"0":{"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
      "100":{"opacity":0,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
      }),
        {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1,"direction":kony.anim.DIRECTION_NONE},
     {"animationEnd":function(){}});
   
frm1.image2a.animate(
      kony.ui.createAnimation(
     {
        //"0":{"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
      "100":{"opacity":0,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
      }),
        {"delay":0.25,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1,"direction":kony.anim.DIRECTION_NONE},
     {"animationEnd":function(){}});
    
frm1.image2b.animate(
      kony.ui.createAnimation(
      {
       // "0":{"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
      "100":{"opacity":0,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
      }),
        {"delay":0.25,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1,"direction":kony.anim.DIRECTION_NONE},
     {"animationEnd":function(){}});
   
frm1.image3a.animate(
      kony.ui.createAnimation(
     {
       // "0":{"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
      "100":{"opacity":0,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
      }),
        {"delay":0.5,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1,"direction":kony.anim.DIRECTION_NONE},
     {"animationEnd":function(){}});
    
frm1.image3b.animate(
      kony.ui.createAnimation(
      {
       // "0":{"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
      "100":{"opacity":0,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
      }),
        {"delay":0.5,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1,"direction":kony.anim.DIRECTION_NONE},
     {"animationEnd":function(){}});
   
frm1.image4.animate(
      kony.ui.createAnimation(
     {
        //"0":{"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
      "100":{"opacity":0,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
      }),
        {"delay":0.75,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1,"direction":kony.anim.DIRECTION_NONE},
     {"animationEnd":function(){}});
  }
  
  else
      {
        
//         transformR.rotate(-180);
        
//     frm1.hamburgerMenu.animate(
//       kony.ui.createAnimation(
//       {
//         //"0":{"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
//       "100":{"transform":transformR,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
//       }),
//         {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1,"direction":kony.anim.DIRECTION_NONE},
//      {"animationEnd":function(){}});        
        
        
frm1.image1.animate(
      kony.ui.createAnimation(
      {
        //"0":{"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
      "100":{"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
      }),
        {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1,"direction":kony.anim.DIRECTION_NONE},
     {"animationEnd":function(){}});
   
frm1.image2a.animate(
      kony.ui.createAnimation(
     {
        //"0":{"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
      "100":{"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
      }),
        {"delay":0.25,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1,"direction":kony.anim.DIRECTION_NONE},
     {"animationEnd":function(){}});
    
frm1.image2b.animate(
      kony.ui.createAnimation(
      {
       // "0":{"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
      "100":{"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
      }),
        {"delay":0.25,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1,"direction":kony.anim.DIRECTION_NONE},
     {"animationEnd":function(){}});
   
frm1.image3a.animate(
      kony.ui.createAnimation(
     {
       // "0":{"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
      "100":{"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
      }),
        {"delay":0.5,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1,"direction":kony.anim.DIRECTION_NONE},
     {"animationEnd":function(){}});
    
frm1.image3b.animate(
      kony.ui.createAnimation(
      {
       // "0":{"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
      "100":{"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
      }),
        {"delay":0.5,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1,"direction":kony.anim.DIRECTION_NONE},
     {"animationEnd":function(){}});
   
frm1.image4.animate(
      kony.ui.createAnimation(
     {
        //"0":{"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
      "100":{"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
      }),
        {"delay":0.75,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1,"direction":kony.anim.DIRECTION_NONE},
     {"animationEnd":function(){}});
  }
 
}
