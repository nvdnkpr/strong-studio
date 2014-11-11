var StudioViews = require('../studio/views/');
var ComposerViews = require('../composer/views/');

describe('model-definition-interactions', function() {
  it('should login navigate to api composer,' +
    ' create a model,' +
    ' add a property,' +
    ' add a comment, ' +
    ' edit the comment, ' +
    ' delete the model,' +
    ' logout',
    function() {

      var loginView = new StudioViews.LoginView();
      var landingView = new StudioViews.LandingView();
      var mainTreeNavView = new ComposerViews.MainTreeNavView();
      var modelEditorView = new ComposerViews.ModelEditorView();
      var headerView = new StudioViews.HeaderView();

      loginView.loginToLandingView();

      landingView.openComposerView();

      expect(mainTreeNavView.modelNavRows.count === 0);

      mainTreeNavView.openNewModelView();

      expect(modelEditorView.getCurrentModelName() === 'newModel');

      modelEditorView.createNewModel('mynewmodel');

      browser.waitForAngular();

      expect(modelEditorView.getCurrentModelName() === 'mynewmodel');
      expect(mainTreeNavView.modelNavRows.count === 1);

      modelEditorView.addNewProperty({name:'mynewproperty'});

      browser.waitForAngular();

      expect(modelEditorView.getFirstPropertyName() === 'mynewproperty');

      modelEditorView.addCommentToProperty(0, 'comment1');

      expect(modelEditorView.getFirstComment() === 'comment1');

      modelEditorView.addCommentToProperty(0, 'comment2');

      expect(modelEditorView.getFirstComment() === 'comment2');

      mainTreeNavView.deleteFirstModel();

      expect(mainTreeNavView.modelNavRows.count === 0);

      headerView.logout();
    }
  );

});
<<<<<<< HEAD

=======
/**
 *
 * Complex Model Property Type Tests
 *
 *
 * eg:
 * - array of anonymous objects
 *
     "type": [
       {
         "x": {
           "type": "number"
         },
         "y": {
           "type": "number"
         }
       }
     ]
 *
 * - an anonymous object
 *
     "type": {
          "x": {
            "type": "number"
          },
          "y": {
            "type": "number"
          }
        }
 *
 * - array of model instances
 *
     "type": [
       "xtra1"
     ]
 *
 * - array of system type
 *
     "type": [
      "string"
     ]
 *
 *
 *
 *
 * */
describe('complex-model-property-datatype', function() {
  it('should login,' +
    ' use the services to add a model,' +
    ' add a property with a data type of array of number,' +
    ' navigate to model view,' +
    ' verify correct display,' +
    ' delete property,' +
    ' add a property with a data type of array of anonymous object pattern,' +
    ' navigate to model view,' +
    ' verify correct display,' +
    ' delete property,' +
    ' add a property with a data type of anonymous object pattern,' +
    ' navigate to model view,' +
    ' verify correct display,' +
    ' delete property,' +
    ' delete the model,' +
    ' logout',
    function() {

      var loginView = new StudioViews.LoginView();
      var landingView = new StudioViews.LandingView();
      var mainTreeNavView = new ComposerViews.MainTreeNavView();
      var modelEditorView = new ComposerViews.ModelEditorView();
      var headerView = new StudioViews.HeaderView();

      loginView.loginToLandingView();

      landingView.openComposerView();

      expect(mainTreeNavView.modelNavRows.count === 0);

      mainTreeNavView.openNewModelView();

      expect(modelEditorView.getCurrentModelName() === 'newModel');

      modelEditorView.createNewModel('mynewmodel');

      browser.waitForAngular();

      expect(modelEditorView.getCurrentModelName() === 'mynewmodel');
      expect(mainTreeNavView.modelNavRows.count === 1);

      modelEditorView.addNewProperty({
        name:'mynewproperty',
        type:'number'
      });

      browser.waitForAngular();

      expect(modelEditorView.getFirstPropertyType() === 'asdfasdf');

      mainTreeNavView.deleteFirstModel();

      expect(mainTreeNavView.modelNavRows.count === 0);

      headerView.logout();
    }
  );

});
>>>>>>> fully functional - incomplete tests
