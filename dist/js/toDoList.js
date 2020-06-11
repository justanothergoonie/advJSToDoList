"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var toDoList = /*#__PURE__*/function () {
  function toDoList(parameters) {
    _classCallCheck(this, toDoList);

    _defineProperty(this, "theList", document.querySelector('.todo'));

    _defineProperty(this, "item", document.querySelector('.new-item'));

    _defineProperty(this, "addBttn", document.querySelector('.add-item'));

    _defineProperty(this, "remainingCount", document.querySelector('.total'));

    _defineProperty(this, "completeCount", document.querySelector('.done-total'));

    _defineProperty(this, "importCount", document.querySelector('.import-total'));

    _defineProperty(this, "banishComplete", document.querySelector('.clear-finished'));

    _defineProperty(this, "options", {});

    console.log('toDoList()', parameters);
  }

  _createClass(toDoList, [{
    key: "addItem",
    value: function addItem(event) {}
  }]);

  return toDoList;
}();
//# sourceMappingURL=toDoList.js.map
