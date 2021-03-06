var StudioHeaderView = (function () {
  function StudioHeaderView() {
    this.accountDropdown = element(
      by.css('span[data-id="StudioAccountDropdown"] a.dropdown-toggle'));
    this.logoutLink = element(by.css('[data-id="StudioLogoutLink"]'));

    this.logout = function() {
      var self = this;
      return self.accountDropdown.click()
        .then(function() {
          self.logoutLink.click();
        });
    };
  }
  return StudioHeaderView;
})();

module.exports = StudioHeaderView;
