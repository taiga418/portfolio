'use strict';

// NOTE: will use AMD modules to componetize later

// main app viewmodel
var AppModel = function AppModel() {
  var _this = this;

  this.active = ko.observable('About');
  this.navItems = ko.observableArray(['About', 'Experience', 'Blog']);

  this.selectActive = function (value) {
    _this.active(value);
  };
};

ko.applyBindings(new AppModel(), document.getElementById('app'));