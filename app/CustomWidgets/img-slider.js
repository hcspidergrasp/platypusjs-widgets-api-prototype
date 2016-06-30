/* 
 *   This slider definition
 * This is not Platypus slider, it's an image slider - some pictures which changes with some interval
 */

define([/* here goes dependecies containing API */], function(Events,Orm,AnotherAPIAndEtc){
    /*
     * Here goes behaviour and markup
     * Let's assume that we wanna slider
     */
    function ImgSlider(data) {
        //Constructor contains behaviour and markup
        
        Object.defineProperty(this,'data', {
            /*
             * Here we set model entity
             */
        });
        Object.defineProperty(this,'imgField', {
            /*
             * Let's assume that widgets gets all rows from ORM entity with interval and loads img picture from field setted in imgField
             * And here must be implementation of getter and setter
             */
        });
        
        /*
         * We also wanna make widget fully customizable
         */
        
        //Interval in ms for switching pictures
        Object.defineProperty(this,'interval', {
            //Getter And Setter
        });
        
        //Sizes
        Object.defineProperty(this,'height', {
            //Getter And Setter
        });
        Object.defineProperty(this,'width', {
            //Getter And Setter
        });
        
        //Events
        Object.defineProperty(this,'onActionPerformed', {
            //Getter And Setter
        });
        Object.defineProperty(this,'onMouseMoved', {
            //Getter And Setter
        });
        
        /*
         * And maaaaaany maaaaaany other stuff
         */
        
        return ImgSlider; //Voila ^_^
        
    }
});
