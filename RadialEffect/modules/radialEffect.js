var visibilityFlag=0;

/*****************************

Function: disappearImages

Description: This function gets invoked when the button is clicked on the screen it animates, the images on the screen disappear radially

******************************/







function disappearImages()
{
  frm1.hamburgerMenu.setEnabled(false);  
    frm1.image1.animate(
      kony.ui.createAnimation(
      {
           "100":{"opacity":0,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
      }
      ),{
           "delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1,"direction":kony.anim.DIRECTION_NONE
        },
     {"animationEnd":function(){}}
    );
   
frm1.image2a.animate(
      kony.ui.createAnimation(
      { 
           "100":{"opacity":0,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
      }
      ),{
           "delay":0.25,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1,"direction":kony.anim.DIRECTION_NONE
      },
     {"animationEnd":function(){}}
   );
    
frm1.image2b.animate(
      kony.ui.createAnimation(
      {
      "100":{"opacity":0,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
      }
      ),{
        "delay":0.25,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1,"direction":kony.anim.DIRECTION_NONE
      },
     {"animationEnd":function(){}});
   
frm1.image3a.animate(
      kony.ui.createAnimation(
     {
      
      "100":{"opacity":0,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
      }
      ),{
        "delay":0.5,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1,"direction":kony.anim.DIRECTION_NONE
        },
     {"animationEnd":function(){}});
    
frm1.image3b.animate(
      kony.ui.createAnimation(
      {
       
      "100":{"opacity":0,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
      }
      ),{
        "delay":0.5,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1,"direction":kony.anim.DIRECTION_NONE
      },
     {"animationEnd":function(){}});
   
frm1.image4.animate(
      kony.ui.createAnimation(
     {
       
      "100":{"opacity":0,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
      }
      ),{
        "delay":0.75,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1,"direction":kony.anim.DIRECTION_NONE
      },
     {"animationEnd":function(){
       frm1.hamburgerMenu.onClick = radialEffect;
       frm1.hamburgerMenu.setEnabled(true);
     }}
    );
   
}



/*****************************

Function: displayImage

Description: This function gets invoked when the button is clicked on the screen it animates, the images on the screen display radially

******************************/

function displayImage()
{
  frm1.image1.animate(
      kony.ui.createAnimation(
      {
      "100":{"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
      }
      ),{
        "delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1,"direction":kony.anim.DIRECTION_NONE
      },
     {"animationEnd":function(){}});
   
frm1.image2a.animate(
      kony.ui.createAnimation(
     {
      "100":{"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
      }
      ),{
        "delay":0.25,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1,"direction":kony.anim.DIRECTION_NONE
      },
     {"animationEnd":function(){}});
    
frm1.image2b.animate(
      kony.ui.createAnimation(
      {
      "100":{"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
      }
      ),{
        "delay":0.25,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1,"direction":kony.anim.DIRECTION_NONE
      },
     {"animationEnd":function(){}});
   
frm1.image3a.animate(
      kony.ui.createAnimation(
     {
      "100":{"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
      }
      ),{"delay":0.5,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1,"direction":kony.anim.DIRECTION_NONE
        },
     {"animationEnd":function(){}});
    
frm1.image3b.animate(
      kony.ui.createAnimation(
      {
      "100":{"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
      }
      ),{"delay":0.5,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1,"direction":kony.anim.DIRECTION_NONE
        },
     {"animationEnd":function(){}});
   
frm1.image4.animate(
      kony.ui.createAnimation(
     {
      "100":{"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
      }
      ), {
        "delay":0.75,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1,"direction":kony.anim.DIRECTION_NONE
      },
     {"animationEnd":function(){frm1.hamburgerMenu.onClick = radialEffect; frm1.hamburgerMenu.setEnabled(true);}});
  }


/*****************************

Function: radialEffect

Description: This function gets invoked when the button is clicked on the screen has the animate functions in it.

******************************/

function radialEffect()
{

  if(visibilityFlag==0)//frm1.image1.opacity==1)
  {
    visibilityFlag=1;
    frm1.hamburgerMenu.onClick = null;
    frm1.hamburgerMenu.setEnabled(false);  
    disappearImages();

  }
  
  else
  {
    visibilityFlag=0;
    frm1.hamburgerMenu.onClick = null;
    frm1.hamburgerMenu.setEnabled(false);   
    displayImage();
        
   }
  
}
