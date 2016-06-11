// NOTE: will use AMD modules to componetize later

// main app viewmodel
var AppModel = function() {
  this.active = ko.observable('About');
  this.navItems = ko.observableArray([ 'About', 'Experience', 'Blog']);

  this.selectActive = (value) => {
    this.active(value)
  }
};

ko.applyBindings(
  new AppModel(),
  document.getElementById('app')
);
