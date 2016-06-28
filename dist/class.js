"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: "sayHello",
    value: function sayHello() {
      console.log("Hello I'm " + this.name);
    }
  }]);

  return Person;
}();

var alice = new Person("Alice", 7);
alice.sayHello();

var Designer = function (_Person) {
  _inherits(Designer, _Person);

  function Designer(name, age, skill) {
    _classCallCheck(this, Designer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Designer).call(this, name, age));

    _this.skill = skill;
    return _this;
  }

  _createClass(Designer, [{
    key: "showSkill",
    value: function showSkill() {
      console.log("スキルは" + this.skill + "です。");
    }
  }]);

  return Designer;
}(Person);

var designer = new Designer("maoda", 31, "JavaScript");
designer.showSkill();
designer.sayHello();