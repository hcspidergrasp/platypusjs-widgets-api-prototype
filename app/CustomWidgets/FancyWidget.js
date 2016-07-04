/**
 * 
 * @author jskonst
 */
define('FancyWidget', ['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
    function FancyButton() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);


        self.show = function () {
            form.show();
        };

        model.requery(function () {
            // TODO : place your code here
        });

        self.showOn = function (aPanel) {
            aPanel.add(form.view);
        };
        
        form.button.onActionPerformed = function(){
            alert("Here");
        };

    }
    return FancyButton;
});
