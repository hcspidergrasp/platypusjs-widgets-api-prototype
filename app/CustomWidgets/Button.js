/**
 * 
 * @author ромашка
 */
define('Button', ['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
        
        self.show = function () {
            form.show();
        };
        
        // TODO : place your code here
       
        
        model.requery(function () {
            // TODO : place your code here
        });
         form.htmlArea.element.innerHTML = '<button class="btn btn-primary" href="#">Основная</button>';
    }
    return module_constructor;
});
