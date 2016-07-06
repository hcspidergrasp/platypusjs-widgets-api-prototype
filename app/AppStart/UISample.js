/**
 * 
 * @author jskonst
 */
define('UISample', ['orm', 'forms', 'ui','FancyWidget', 'Button'], function (Orm, Forms, Ui,FancyWidget, Button, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
        
        self.show = function () {
            form.show();
        };
        
        var fancyWidget = new FancyWidget();
//        form.pnlPlaceholder1.height = null;
//        form.pnlPlaceholder2.height = null;
//        form.pnlPlaceholder3.height = null;
        fancyWidget.showOn(form.pnlPlaceholder1);
        
        var btn = new Button();
        btn.showOn(form.pnlPlaceholder3);
        
//        form.pnlPlaceholder2.element.innerHTML ='<p> this plcae can be replaced</p>';
        
        model.requery(function () {
            // TODO : place your code here
        });
        
    }
    return module_constructor;
});
