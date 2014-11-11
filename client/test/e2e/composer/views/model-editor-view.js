var ModelEditorView = (function () {
  function ModelEditorView() {
    this.modelNameInput  = element(by.css('#ModelName'));
    this.saveModelButton = element(by.css('.model-save-button'));
    this.addNewPropertyButton = element(
      by.css('.btn-new-model-property'));
    this.propertyNameInputCollection = element.all(
      by.css('.props-name-cell [data-name="name"]'));
    this.propertyCommentInputCollection = element.all(
      by.css('.props-comments-cell [data-name="comments"]'));
    this.propertyTypeSelectCollection = element.all(
      by.css('.props-data-type-cell [data-name="type"]'));
    this.parentContainer = element(
      by.css('[data-id="CommonInstanceContainer"]'));


    var selectDropdownbyNum = function ( element, optionNum ) {
      if (optionNum){
        var options = element.findElements(by.tagName('option'))
          .then(function(options){
            options[optionNum].click();
          });
      }
    };


    this.addNewProperty = function(config) {
      this.parentContainer.click();
      var filter = browser.findElement(by.css('.btn-new-model-property'));
      var scrollIntoView = function () {
        arguments[0].scrollIntoView();
      };
      browser.executeScript(scrollIntoView, filter);
      this.addNewPropertyButton.click();
      this.propertyNameInputCollection.get(0).clear();
      this.propertyNameInputCollection.get(0).sendKeys(config.name);
      if (config.type) {
        this.propertyNameInputCollection.get(0).sendKeys(config.type);
      }
      this.saveModelButton.click();
    };
    this.addCommentToProperty = function(index, comment) {
      this.propertyCommentInputCollection.get(index).clear();
      this.propertyCommentInputCollection.get(index).sendKeys(comment);
      this.saveModelButton.click();
    };
    this.getFirstComment = function() {
      return this.propertyCommentInputCollection.get(0).getAttribute('value');
    };
    this.getFirstPropertyName = function() {
      var xpc = this.propertyNameInputCollection.get(0).getAttribute('value');
      console.log('CHECK name HERE: ' + JSON.stringify(xpc));
      return this.propertyNameInputCollection.get(0).getAttribute('value');
    };
    this.getFirstPropertyType = function() {
      var xpc = this.propertyTypeSelectCollection.get(0).getAttribute('value');
      console.log('CHECK THIS HERE: ' + JSON.stringify(xpc));
      return xpc;
    };

    this.getCurrentModelName = function() {
      this.parentContainer.click();
      var filter = browser.findElement(by.css('#ModelName'));
      var scrollIntoView = function () {
        arguments[0].scrollIntoView();
      };
      browser.executeScript(scrollIntoView, filter);
      return this.modelNameInput.getAttribute('value');
    };
    this.createNewModel = function(modelName) {
      this.modelNameInput.clear();
      this.modelNameInput.sendKeys(modelName);
      this.saveModelButton.click();
    };
  }
  return ModelEditorView;
})();

module.exports = ModelEditorView;
