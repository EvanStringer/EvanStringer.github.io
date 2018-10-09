(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the platform.create() method to create platforms for the level. 
     * 
     * platform.create() takes these arguments:
     *      
     *      platform.create(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    platform.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        /*
         * ground : here, we create a floor. Given the width of of the platform 
         * asset, giving it a scaleX and scaleY of 2 will stretch it across the 
         * bottom of the game.
         */
        platform.create(0, game.world.height - 32, 3, 2);

        // example:
        platform.create(700, 625, .5, 2);
        platform.create(750, 560, .5, 10);
        platform.create(800, 450, .3, .2);
        platform.create(800, 350, .3, .2);
        platform.create(800, 250, .3, .2);
        platform.create(800, 150, .3, .2);
        platform.create(535, 0, .02, 13);
        platform.create(640, 80, .02, 14.1);
        platform.create(79, 525, 1.425, .2);
        platform.create(79, 0, .02, 16.616);
        platform.create(70, 0, .02, 16.616);
        platform.create(61, 0, .02, 16.616);
        platform.create(86, 100, .2, .2);
        platform.create(86, 445, .2, .2);
        platform.create(300, 375, .35, .2);
        platform.create(86, 305, .2, .2)
        platform.create(86, 200, .1, .2)
        platform.create(86, 0, .2, .2)
        
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);