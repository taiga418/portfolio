
const test = () => {true}

var AppModel = function() {
    this.navItems = ko.observableArray([
      { name:  'asdfasd'}
    ])

    this.fullName = ko.pureComputed(function() {
        // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
        return this.firstName() + " " + this.lastName();
    }, this);
};

ko.applyBindings(
  new AppModel(),
  document.getElementById('app')
); // This makes Knockout get to work
;
define("app", function(){});


define("components/nav",function(){});