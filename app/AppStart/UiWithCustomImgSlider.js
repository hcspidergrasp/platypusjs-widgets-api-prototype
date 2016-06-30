/**
 * 
 * @author spidergrasp
 */
define(['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);

        self.show = function () {
            form.show();
        };

        /*
         * Here we have browser executable module using our custom widget - ImgSlider
         * Note that in module dependencies we did not writen anything about it (like usualy Platypus UI widgets work the same way)
         * Also we have not any code for ImgSlider cause we already have it in layout (open it with text editor to see XML
         */
        
        /*
         * We can use ImgSlider events
         * banner is instance of ImgSlider
         */
        
        form.banner.onActionPerformed = function(evt) {
            //do smth
        };

    }
    return module_constructor;
});
