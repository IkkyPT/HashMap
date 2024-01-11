/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/linkedList.js":
/*!***************************!*\
  !*** ./src/linkedList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/node.js");


// Create Linked List function
var linkedList = function () {
  function createLinkedList() {
    return {
      head: null,
      tail: null,
      append: append,
      prepend: prepend,
      getSize: getSize,
      getHead: getHead,
      getTail: getTail,
      at: at,
      contains: contains,
      find: find,
      toString: toString,
      insertAt: insertAt,
      removeAt: removeAt,
      toNode: toNode
    };
  }

  // adds a new node containing value to the start of the list
  function prepend(value) {
    var newNode = (0,_node__WEBPACK_IMPORTED_MODULE_0__["default"])(value, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  // adds a new node containing value to the end of the list
  function append(value) {
    var newNode = (0,_node__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
  }

  // returns the total number of nodes in the list
  function getSize() {
    var count = 0;
    var current = this.head;
    while (current) {
      current = current.nextNode;
      count++;
    }
    return count;
  }

  // returns the first node in the list
  function getHead() {
    var headNode = this.head;
    return headNode;
  }

  // returns the last node in the list
  function getTail() {
    var tailNode = this.tail;
    return tailNode;
  }
  function at(index) {
    var nodeIndex = 0;
    var current = this.head;
    while (current) {
      if (index === nodeIndex) {
        return current;
      }
      current = current.nextNode;
      nodeIndex++;
    }
    return null;
  }

  // removes the last element from the list
  function pop() {
    var current = this.head;
    var prev = null;
    if (!current) {
      return "Cannot delete. List is empty.";
    }
    while (current.nextNode) {
      prev = current;
      current = current.nextNode;
    }
    if (prev) {
      prev.nextNode = null;
      this.tail = prev;
    } else {
      this.head = null;
      this.tail = null;
    }
    return current.value;
  }

  // returns true if the passed in value is in the list and otherwise returns false.
  function contains(value) {
    var current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  // returns the index of the node containing value, or null if not found
  function find(value) {
    var index = 0;
    var current = this.head;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }
    return null;
  }

  // represents LinkedList objects as strings, so user can print them out and preview them in the console.
  function toString() {
    var current = this.head;
    var nodeString = "";
    while (current) {
      nodeString += "( ".concat(current.value, " ) -> ");
      current = current.nextNode;
    }

    // Remove the trailing arrow and add an empty string if the list is empty
    return nodeString ? nodeString.slice(0, -4) : "";
  }
  function toNode(string) {
    var nodeValues = string.split('->').map(function (value) {
      return value.replace(/\(|\)/g, '').trim();
    }).filter(function (value) {
      return value !== '';
    });
    var newList = createLinkedList();
    if (nodeValues.length > 0) {
      newList.prepend(nodeValues[0]);
      for (var i = 1; i < nodeValues.length; i++) {
        newList.append(nodeValues[i]);
      }
    }
    return newList;
  }

  // inserts a new node with the provided value at the given index.
  function insertAt(value, index) {
    var current = this.head;
    var trackIndex = 0;
    var prev = null;
    var newNode = (0,_node__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      return;
    }
    while (current) {
      if (trackIndex === index) {
        newNode.nextNode = current;
        prev.nextNode = newNode;
        return;
      }
      prev = current;
      current = current.nextNode;
      trackIndex++;
    }
    if (trackIndex === index) {
      prev.nextNode = newNode;
    }
  }

  // Removes the node at the given index
  function removeAt(index) {
    if (index < 0 || index >= this.size()) {
      console.error("Invalid index for removeAt");
      return;
    }
    var current = this.head;
    var prev = null;
    if (index === 0) {
      this.head = current.nextNode;
    } else {
      var currentIndex = 0;
      while (currentIndex < index) {
        prev = current;
        current = current.nextNode;
        currentIndex++;
      }
      prev.nextNode = current.nextNode;
      if (index === this.size() - 1) {
        this.tail = prev;
      }
    }
  }
  return {
    createLinkedList: createLinkedList,
    append: append,
    prepend: prepend,
    getSize: getSize,
    getHead: getHead,
    getTail: getTail,
    at: at,
    pop: pop,
    contains: contains,
    find: find,
    toString: toString,
    insertAt: insertAt,
    removeAt: removeAt,
    toNode: toNode
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (linkedList);

/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Function to create new Node
function createNode(value) {
  var nextNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return {
    value: value || null,
    nextNode: nextNode
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNode);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/hash.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _linkedList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linkedList */ "./src/linkedList.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var HashMap = /*#__PURE__*/function () {
  function HashMap() {
    _classCallCheck(this, HashMap);
    this.bucketSize = 16;
    this.loadFactor = 0.75;
    this.size = 0;
    this.bucket = Array(16).fill(null).map(function () {
      return [];
    });
  }
  _createClass(HashMap, [{
    key: "hash",
    value: function hash(key) {
      var hashValue = 0;
      for (var i = 0; i < key.length; i++) {
        hashValue += key.charCodeAt(i);
      }
      return hashValue % this.bucketSize;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      var index = this.hash(key);
      var bucketIndex = this.bucket[index];

      // Iterate through the existing subBuckets
      for (var i = 0; i < bucketIndex.length; i++) {
        var subBucket = bucketIndex[i];
        if (subBucket.contains(key)) {
          // Check if key already contains in the subBucket, update its value otherwise
          subBucket.append(value);
          return;
        }
        ;
      }
      ;

      // Check if the bucket is empty if so append the key and value to their respective nodes
      if (bucketIndex !== key) {
        var _subBucket = _linkedList__WEBPACK_IMPORTED_MODULE_0__["default"].createLinkedList();
        bucketIndex.push(_subBucket);
        _subBucket.prepend(key);
        _subBucket.append(value);
        this.size++;
        if (this.size / this.bucketSize > this.loadFactor) {
          this.resize();
        }
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      var oldBucket = this.bucket;
      this.bucketSize *= 2;
      var newBucket = Array(this.bucketSize).fill(null).map(function () {
        return [];
      });
      this.size = 0;
      for (var x = 0; x < oldBucket.length; x++) {
        if (oldBucket[x].length > 0) {
          var newLocation = this.hash(oldBucket[x][0].head.value);
          var stringRepresentation = oldBucket[x][0].toString();
          var reconstructedLinkedList = _linkedList__WEBPACK_IMPORTED_MODULE_0__["default"].toNode(stringRepresentation);
          newBucket[newLocation].push(reconstructedLinkedList);
        }
      }
      this.bucket = newBucket;
    }
  }, {
    key: "get",
    value: function get(key) {
      var index = this.hash(key);
      var bucketData = this.bucket;
      if (bucketData[index] && bucketData[index].length > 0) {
        if (bucketData[index][0] && bucketData[index][0].head.value === key) {
          return bucketData[index][0].toString();
        }
      }
      return false;
    }
  }, {
    key: "has",
    value: function has(key) {
      var index = this.hash(key);
      var bucketData = this.bucket;
      if (bucketData[index] && bucketData[index].length > 0) {
        if (bucketData[index][0] && bucketData[index][0].head.value === key) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: "remove",
    value: function remove(key) {
      var index = this.hash(key);
      var bucketData = this.bucket;
      if (bucketData[index] && bucketData[index].length > 0) {
        if (bucketData[index][0].head && bucketData[index][0].head.value === key) {
          bucketData[index].shift();
          this.size--;
          return "Key \"".concat(key, "\" removed successfully.");
        }
      }
      return "The key \"".concat(key, "\" doesn't exist in the hash map.");
    }
  }, {
    key: "length",
    value: function length() {
      var count = 0;
      var bucketData = this.bucket;
      for (var i = 0; i < bucketData.length; i++) {
        if (bucketData[i].length > 0) {
          count++;
        }
      }
      return count;
    }
  }]);
  return HashMap;
}();
var myHashMap = new HashMap();
myHashMap.set("RC", "Ricardo Carvalho");
myHashMap.set("RC", "Ricardo Cszx");
myHashMap.set("RC", "Ricardo Csdadsa");
myHashMap.set("FC", "Ficardo Csdadsa");
myHashMap.set("FC", "Fiordsa Csdadsa");
console.log(myHashMap.bucket);
myHashMap.resize();
console.log(myHashMap.bucket);
console.log(myHashMap.has("FC"));
console.log(myHashMap.get("FC"));
console.log(myHashMap.remove("FC"));
console.log(myHashMap.bucket);
console.log(myHashMap.length());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eEIsTUFBTSxDQUFDO0FBQzdCVCxPQUFPLENBQUNrQyxHQUFHLENBQUNELFNBQVMsQ0FBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hDOUIsT0FBTyxDQUFDa0MsR0FBRyxDQUFDRCxTQUFTLENBQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoQzVCLE9BQU8sQ0FBQ2tDLEdBQUcsQ0FBQ0QsU0FBUyxDQUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkMvQixPQUFPLENBQUNrQyxHQUFHLENBQUNELFNBQVMsQ0FBQ3hCLE1BQU0sQ0FBQztBQUM3QlQsT0FBTyxDQUFDa0MsR0FBRyxDQUFDRCxTQUFTLENBQUNyQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IYXNoTWFwLy4vc3JjL2xpbmtlZExpc3QuanMiLCJ3ZWJwYWNrOi8vSGFzaE1hcC8uL3NyYy9ub2RlLmpzIiwid2VicGFjazovL0hhc2hNYXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSGFzaE1hcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vSGFzaE1hcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0hhc2hNYXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9IYXNoTWFwLy4vc3JjL2hhc2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZU5vZGUgZnJvbSBcIi4vbm9kZVwiO1xuXG4vLyBDcmVhdGUgTGlua2VkIExpc3QgZnVuY3Rpb25cbmNvbnN0IGxpbmtlZExpc3QgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZUxpbmtlZExpc3QoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZWFkOiBudWxsLFxuICAgICAgICAgICAgdGFpbDogbnVsbCxcbiAgICAgICAgICAgIGFwcGVuZCxcbiAgICAgICAgICAgIHByZXBlbmQsXG4gICAgICAgICAgICBnZXRTaXplLFxuICAgICAgICAgICAgZ2V0SGVhZCxcbiAgICAgICAgICAgIGdldFRhaWwsXG4gICAgICAgICAgICBhdCxcbiAgICAgICAgICAgIGNvbnRhaW5zLFxuICAgICAgICAgICAgZmluZCxcbiAgICAgICAgICAgIHRvU3RyaW5nLFxuICAgICAgICAgICAgaW5zZXJ0QXQsXG4gICAgICAgICAgICByZW1vdmVBdCxcbiAgICAgICAgICAgIHRvTm9kZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBhZGRzIGEgbmV3IG5vZGUgY29udGFpbmluZyB2YWx1ZSB0byB0aGUgc3RhcnQgb2YgdGhlIGxpc3RcbiAgICBmdW5jdGlvbiBwcmVwZW5kKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSBjcmVhdGVOb2RlKHZhbHVlLCB0aGlzLmhlYWQpO1xuICAgICAgICB0aGlzLmhlYWQgPSBuZXdOb2RlO1xuICAgICAgICBpZiAoIXRoaXMudGFpbCkge1xuICAgICAgICAgICAgdGhpcy50YWlsID0gbmV3Tm9kZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFkZHMgYSBuZXcgbm9kZSBjb250YWluaW5nIHZhbHVlIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3RcbiAgICBmdW5jdGlvbiBhcHBlbmQodmFsdWUpIHtcbiAgICAgICAgY29uc3QgbmV3Tm9kZSA9IGNyZWF0ZU5vZGUodmFsdWUpO1xuXG4gICAgICAgIGlmICghdGhpcy5oZWFkKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWQgPSBuZXdOb2RlO1xuICAgICAgICAgICAgdGhpcy50YWlsID0gbmV3Tm9kZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGFpbC5uZXh0Tm9kZSA9IG5ld05vZGU7XG4gICAgICAgICAgICB0aGlzLnRhaWwgPSBuZXdOb2RlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmV0dXJucyB0aGUgdG90YWwgbnVtYmVyIG9mIG5vZGVzIGluIHRoZSBsaXN0XG4gICAgZnVuY3Rpb24gZ2V0U2l6ZSgpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0Tm9kZTtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH1cblxuICAgIC8vIHJldHVybnMgdGhlIGZpcnN0IG5vZGUgaW4gdGhlIGxpc3RcbiAgICBmdW5jdGlvbiBnZXRIZWFkKCkge1xuICAgICAgICBjb25zdCBoZWFkTm9kZSA9IHRoaXMuaGVhZDtcbiAgICAgICAgcmV0dXJuIGhlYWROb2RlO1xuICAgIH1cblxuICAgIC8vIHJldHVybnMgdGhlIGxhc3Qgbm9kZSBpbiB0aGUgbGlzdFxuICAgIGZ1bmN0aW9uIGdldFRhaWwoKSB7XG4gICAgICAgIGNvbnN0IHRhaWxOb2RlID0gdGhpcy50YWlsO1xuICAgICAgICByZXR1cm4gdGFpbE5vZGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXQoaW5kZXgpIHtcbiAgICAgICAgbGV0IG5vZGVJbmRleCA9IDA7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgICB3aGlsZShjdXJyZW50KSB7XG4gICAgICAgICAgICBpZihpbmRleCA9PT0gbm9kZUluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0Tm9kZTtcbiAgICAgICAgICAgIG5vZGVJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIHJlbW92ZXMgdGhlIGxhc3QgZWxlbWVudCBmcm9tIHRoZSBsaXN0XG4gICAgZnVuY3Rpb24gcG9wKCkge1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgICAgbGV0IHByZXYgPSBudWxsO1xuXG4gICAgICAgIGlmICghY3VycmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiQ2Fubm90IGRlbGV0ZS4gTGlzdCBpcyBlbXB0eS5cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChjdXJyZW50Lm5leHROb2RlKSB7XG4gICAgICAgICAgICBwcmV2ID0gY3VycmVudDtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHROb2RlO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgICAgICBwcmV2Lm5leHROb2RlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMudGFpbCA9IHByZXY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhlYWQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy50YWlsID0gbnVsbDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZXR1cm4gY3VycmVudC52YWx1ZTtcbiAgICB9XG5cbiAgICAvLyByZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCBpbiB2YWx1ZSBpcyBpbiB0aGUgbGlzdCBhbmQgb3RoZXJ3aXNlIHJldHVybnMgZmFsc2UuXG4gICAgZnVuY3Rpb24gY29udGFpbnModmFsdWUpIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG5cbiAgICAgICAgd2hpbGUoY3VycmVudCl7XG4gICAgICAgICAgICBpZihjdXJyZW50LnZhbHVlID09PSB2YWx1ZSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbm9kZSBjb250YWluaW5nIHZhbHVlLCBvciBudWxsIGlmIG5vdCBmb3VuZFxuICAgIGZ1bmN0aW9uIGZpbmQodmFsdWUpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG5cbiAgICAgICAgd2hpbGUoY3VycmVudCkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0Tm9kZTtcbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyByZXByZXNlbnRzIExpbmtlZExpc3Qgb2JqZWN0cyBhcyBzdHJpbmdzLCBzbyB1c2VyIGNhbiBwcmludCB0aGVtIG91dCBhbmQgcHJldmlldyB0aGVtIGluIHRoZSBjb25zb2xlLlxuICAgIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgICAgbGV0IG5vZGVTdHJpbmcgPSBcIlwiO1xuICAgIFxuICAgICAgICB3aGlsZSAoY3VycmVudCkge1xuICAgICAgICAgICAgbm9kZVN0cmluZyArPSBgKCAke2N1cnJlbnQudmFsdWV9ICkgLT4gYDtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHROb2RlO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgdHJhaWxpbmcgYXJyb3cgYW5kIGFkZCBhbiBlbXB0eSBzdHJpbmcgaWYgdGhlIGxpc3QgaXMgZW1wdHlcbiAgICAgICAgcmV0dXJuIG5vZGVTdHJpbmcgPyBub2RlU3RyaW5nLnNsaWNlKDAsIC00KSA6IFwiXCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9Ob2RlKHN0cmluZykge1xuICAgICAgICBjb25zdCBub2RlVmFsdWVzID0gc3RyaW5nXG4gICAgICAgICAgICAuc3BsaXQoJy0+JylcbiAgICAgICAgICAgIC5tYXAodmFsdWUgPT4gdmFsdWUucmVwbGFjZSgvXFwofFxcKS9nLCAnJykudHJpbSgpKVxuICAgICAgICAgICAgLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSAhPT0gJycpO1xuICAgIFxuICAgICAgICBjb25zdCBuZXdMaXN0ID0gY3JlYXRlTGlua2VkTGlzdCgpO1xuICAgIFxuICAgICAgICBpZiAobm9kZVZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBuZXdMaXN0LnByZXBlbmQobm9kZVZhbHVlc1swXSk7XG4gICAgXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG5vZGVWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBuZXdMaXN0LmFwcGVuZChub2RlVmFsdWVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZXR1cm4gbmV3TGlzdDtcbiAgICB9ICAgIFxuXG4gICAgLy8gaW5zZXJ0cyBhIG5ldyBub2RlIHdpdGggdGhlIHByb3ZpZGVkIHZhbHVlIGF0IHRoZSBnaXZlbiBpbmRleC5cbiAgICBmdW5jdGlvbiBpbnNlcnRBdCh2YWx1ZSwgaW5kZXgpe1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgICAgbGV0IHRyYWNrSW5kZXggPSAwO1xuICAgICAgICBsZXQgcHJldiA9IG51bGw7XG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSBjcmVhdGVOb2RlKHZhbHVlKTtcblxuICAgICAgICBpZiAoaW5kZXggPT09IDApe1xuICAgICAgICAgICAgbmV3Tm9kZS5uZXh0Tm9kZSA9IHRoaXMuaGVhZDtcbiAgICAgICAgICAgIHRoaXMuaGVhZCA9IG5ld05vZGU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHdoaWxlKGN1cnJlbnQpe1xuICAgICAgICAgICAgaWYgKHRyYWNrSW5kZXggPT09IGluZGV4KXsgXG4gICAgICAgICAgICAgICAgbmV3Tm9kZS5uZXh0Tm9kZSA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgcHJldi5uZXh0Tm9kZSA9IG5ld05vZGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuOyAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmV2ID0gY3VycmVudDtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHROb2RlO1xuICAgICAgICAgICAgdHJhY2tJbmRleCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRyYWNrSW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgICAgICBwcmV2Lm5leHROb2RlID0gbmV3Tm9kZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZXMgdGhlIG5vZGUgYXQgdGhlIGdpdmVuIGluZGV4XG4gICAgZnVuY3Rpb24gcmVtb3ZlQXQoaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLnNpemUoKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgaW5kZXggZm9yIHJlbW92ZUF0XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgICBsZXQgcHJldiA9IG51bGw7XG4gICAgXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5oZWFkID0gY3VycmVudC5uZXh0Tm9kZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuICAgIFxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnRJbmRleCA8IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcHJldiA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dE5vZGU7XG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBwcmV2Lm5leHROb2RlID0gY3VycmVudC5uZXh0Tm9kZTtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gdGhpcy5zaXplKCkgLSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWlsID0gcHJldjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZUxpbmtlZExpc3QsXG4gICAgICAgIGFwcGVuZCxcbiAgICAgICAgcHJlcGVuZCxcbiAgICAgICAgZ2V0U2l6ZSxcbiAgICAgICAgZ2V0SGVhZCxcbiAgICAgICAgZ2V0VGFpbCxcbiAgICAgICAgYXQsXG4gICAgICAgIHBvcCxcbiAgICAgICAgY29udGFpbnMsXG4gICAgICAgIGZpbmQsXG4gICAgICAgIHRvU3RyaW5nLCBcbiAgICAgICAgaW5zZXJ0QXQsXG4gICAgICAgIHJlbW92ZUF0LFxuICAgICAgICB0b05vZGUsICAgXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGxpbmtlZExpc3Q7XG4iLCIvLyBGdW5jdGlvbiB0byBjcmVhdGUgbmV3IE5vZGVcbmZ1bmN0aW9uIGNyZWF0ZU5vZGUodmFsdWUsIG5leHROb2RlID0gbnVsbCl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlIHx8IG51bGwsXG4gICAgICAgIG5leHROb2RlLFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTm9kZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsaW5rZWRMaXN0IGZyb20gXCIuL2xpbmtlZExpc3RcIjtcblxuY2xhc3MgSGFzaE1hcCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRoaXMuYnVja2V0U2l6ZSA9IDE2O1xuICAgICAgICAgICAgdGhpcy5sb2FkRmFjdG9yID0gMC43NTtcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgICAgICAgICB0aGlzLmJ1Y2tldCA9IEFycmF5KDE2KS5maWxsKG51bGwpLm1hcCgoKSA9PiBbXSk7XG4gICAgfTtcbiAgICBcbiAgICBoYXNoKGtleSkge1xuICAgICAgICBsZXQgaGFzaFZhbHVlID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGhhc2hWYWx1ZSArPSBrZXkuY2hhckNvZGVBdChpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGFzaFZhbHVlICUgdGhpcy5idWNrZXRTaXplO1xuICAgIH1cblxuICAgIHNldChrZXksIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5oYXNoKGtleSk7XG4gICAgICAgIGNvbnN0IGJ1Y2tldEluZGV4ID0gdGhpcy5idWNrZXRbaW5kZXhdO1xuXG4gICAgICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCB0aGUgZXhpc3Rpbmcgc3ViQnVja2V0c1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1Y2tldEluZGV4Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHN1YkJ1Y2tldCA9IGJ1Y2tldEluZGV4W2ldO1xuXG4gICAgICAgICAgICBpZihzdWJCdWNrZXQuY29udGFpbnMoa2V5KSl7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYga2V5IGFscmVhZHkgY29udGFpbnMgaW4gdGhlIHN1YkJ1Y2tldCwgdXBkYXRlIGl0cyB2YWx1ZSBvdGhlcndpc2VcbiAgICAgICAgICAgICAgICBzdWJCdWNrZXQuYXBwZW5kKHZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGJ1Y2tldCBpcyBlbXB0eSBpZiBzbyBhcHBlbmQgdGhlIGtleSBhbmQgdmFsdWUgdG8gdGhlaXIgcmVzcGVjdGl2ZSBub2Rlc1xuICAgICAgICBpZihidWNrZXRJbmRleCAhPT0ga2V5KSB7XG4gICAgICAgICAgICBjb25zdCBzdWJCdWNrZXQgPSBsaW5rZWRMaXN0LmNyZWF0ZUxpbmtlZExpc3QoKTtcbiAgICAgICAgICAgIGJ1Y2tldEluZGV4LnB1c2goc3ViQnVja2V0KTtcbiAgICAgICAgICAgIHN1YkJ1Y2tldC5wcmVwZW5kKGtleSk7XG4gICAgICAgICAgICBzdWJCdWNrZXQuYXBwZW5kKHZhbHVlKTtcblxuICAgICAgICAgICAgdGhpcy5zaXplKys7XG5cbiAgICAgICAgICAgIGlmKHRoaXMuc2l6ZSAvIHRoaXMuYnVja2V0U2l6ZSA+IHRoaXMubG9hZEZhY3Rvcil7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2l6ZSgpIHtcbiAgICAgICAgY29uc3Qgb2xkQnVja2V0ID0gdGhpcy5idWNrZXQ7XG4gICAgICAgIHRoaXMuYnVja2V0U2l6ZSAqPSAyO1xuICAgICAgICBjb25zdCBuZXdCdWNrZXQgPSBBcnJheSh0aGlzLmJ1Y2tldFNpemUpLmZpbGwobnVsbCkubWFwKCgpID0+IFtdKTtcbiAgICAgICAgdGhpcy5zaXplID0gMDtcbiAgICBcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBvbGRCdWNrZXQubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgIGlmIChvbGRCdWNrZXRbeF0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0xvY2F0aW9uID0gdGhpcy5oYXNoKG9sZEJ1Y2tldFt4XVswXS5oZWFkLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJpbmdSZXByZXNlbnRhdGlvbiA9IG9sZEJ1Y2tldFt4XVswXS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlY29uc3RydWN0ZWRMaW5rZWRMaXN0ID0gbGlua2VkTGlzdC50b05vZGUoc3RyaW5nUmVwcmVzZW50YXRpb24pO1xuICAgICAgICAgICAgICAgIG5ld0J1Y2tldFtuZXdMb2NhdGlvbl0ucHVzaChyZWNvbnN0cnVjdGVkTGlua2VkTGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgdGhpcy5idWNrZXQgPSBuZXdCdWNrZXQ7XG4gICAgfVxuICAgIFxuICAgIGdldChrZXkpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmhhc2goa2V5KTtcbiAgICAgICAgY29uc3QgYnVja2V0RGF0YSA9IHRoaXMuYnVja2V0O1xuICAgICAgICBcbiAgICAgICAgaWYoYnVja2V0RGF0YVtpbmRleF0gJiYgYnVja2V0RGF0YVtpbmRleF0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYoYnVja2V0RGF0YVtpbmRleF1bMF0gJiYgYnVja2V0RGF0YVtpbmRleF1bMF0uaGVhZC52YWx1ZSA9PT0ga2V5KXtcbiAgICAgICAgICAgICAgICByZXR1cm4gYnVja2V0RGF0YVtpbmRleF1bMF0udG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIGhhcyhrZXkpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmhhc2goa2V5KTtcbiAgICAgICAgY29uc3QgYnVja2V0RGF0YSA9IHRoaXMuYnVja2V0O1xuICAgICAgICBcbiAgICAgICAgaWYoYnVja2V0RGF0YVtpbmRleF0gJiYgYnVja2V0RGF0YVtpbmRleF0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYoYnVja2V0RGF0YVtpbmRleF1bMF0gJiYgYnVja2V0RGF0YVtpbmRleF1bMF0uaGVhZC52YWx1ZSA9PT0ga2V5KXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVtb3ZlKGtleSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaGFzaChrZXkpO1xuICAgICAgICBjb25zdCBidWNrZXREYXRhID0gdGhpcy5idWNrZXQ7XG4gICAgXG4gICAgICAgIGlmIChidWNrZXREYXRhW2luZGV4XSAmJiBidWNrZXREYXRhW2luZGV4XS5sZW5ndGggPiAwKSB7ICAgIFxuICAgICAgICAgICAgaWYgKGJ1Y2tldERhdGFbaW5kZXhdWzBdLmhlYWQgJiYgYnVja2V0RGF0YVtpbmRleF1bMF0uaGVhZC52YWx1ZSA9PT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgYnVja2V0RGF0YVtpbmRleF0uc2hpZnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNpemUtLTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYEtleSBcIiR7a2V5fVwiIHJlbW92ZWQgc3VjY2Vzc2Z1bGx5LmA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmV0dXJuIGBUaGUga2V5IFwiJHtrZXl9XCIgZG9lc24ndCBleGlzdCBpbiB0aGUgaGFzaCBtYXAuYDtcbiAgICB9XG5cbiAgICBsZW5ndGgoKSB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGNvbnN0IGJ1Y2tldERhdGEgPSB0aGlzLmJ1Y2tldDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1Y2tldERhdGEubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYoYnVja2V0RGF0YVtpXS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH1cbiAgICBcbn1cblxuXG5jb25zdCBteUhhc2hNYXAgPSBuZXcgSGFzaE1hcCgpO1xuXG5teUhhc2hNYXAuc2V0KFwiUkNcIiwgXCJSaWNhcmRvIENhcnZhbGhvXCIpO1xubXlIYXNoTWFwLnNldChcIlJDXCIsIFwiUmljYXJkbyBDc3p4XCIpXG5teUhhc2hNYXAuc2V0KFwiUkNcIiwgXCJSaWNhcmRvIENzZGFkc2FcIilcbm15SGFzaE1hcC5zZXQoXCJGQ1wiLCBcIkZpY2FyZG8gQ3NkYWRzYVwiKVxubXlIYXNoTWFwLnNldChcIkZDXCIsIFwiRmlvcmRzYSBDc2RhZHNhXCIpXG5jb25zb2xlLmxvZyhteUhhc2hNYXAuYnVja2V0KTtcbm15SGFzaE1hcC5yZXNpemUoKTtcbmNvbnNvbGUubG9nKG15SGFzaE1hcC5idWNrZXQpO1xuY29uc29sZS5sb2cobXlIYXNoTWFwLmhhcyhcIkZDXCIpKTtcbmNvbnNvbGUubG9nKG15SGFzaE1hcC5nZXQoXCJGQ1wiKSk7XG5jb25zb2xlLmxvZyhteUhhc2hNYXAucmVtb3ZlKFwiRkNcIikpO1xuY29uc29sZS5sb2cobXlIYXNoTWFwLmJ1Y2tldCk7XG5jb25zb2xlLmxvZyhteUhhc2hNYXAubGVuZ3RoKCkpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZU5vZGUiLCJsaW5rZWRMaXN0IiwiY3JlYXRlTGlua2VkTGlzdCIsImhlYWQiLCJ0YWlsIiwiYXBwZW5kIiwicHJlcGVuZCIsImdldFNpemUiLCJnZXRIZWFkIiwiZ2V0VGFpbCIsImF0IiwiY29udGFpbnMiLCJmaW5kIiwidG9TdHJpbmciLCJpbnNlcnRBdCIsInJlbW92ZUF0IiwidG9Ob2RlIiwidmFsdWUiLCJuZXdOb2RlIiwibmV4dE5vZGUiLCJjb3VudCIsImN1cnJlbnQiLCJoZWFkTm9kZSIsInRhaWxOb2RlIiwiaW5kZXgiLCJub2RlSW5kZXgiLCJwb3AiLCJwcmV2Iiwibm9kZVN0cmluZyIsImNvbmNhdCIsInNsaWNlIiwic3RyaW5nIiwibm9kZVZhbHVlcyIsInNwbGl0IiwibWFwIiwicmVwbGFjZSIsInRyaW0iLCJmaWx0ZXIiLCJuZXdMaXN0IiwibGVuZ3RoIiwiaSIsInRyYWNrSW5kZXgiLCJzaXplIiwiY29uc29sZSIsImVycm9yIiwiY3VycmVudEluZGV4IiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiSGFzaE1hcCIsIl9jbGFzc0NhbGxDaGVjayIsImJ1Y2tldFNpemUiLCJsb2FkRmFjdG9yIiwiYnVja2V0IiwiQXJyYXkiLCJmaWxsIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiaGFzaCIsImhhc2hWYWx1ZSIsImNoYXJDb2RlQXQiLCJzZXQiLCJidWNrZXRJbmRleCIsInN1YkJ1Y2tldCIsInB1c2giLCJyZXNpemUiLCJvbGRCdWNrZXQiLCJuZXdCdWNrZXQiLCJ4IiwibmV3TG9jYXRpb24iLCJzdHJpbmdSZXByZXNlbnRhdGlvbiIsInJlY29uc3RydWN0ZWRMaW5rZWRMaXN0IiwiZ2V0IiwiYnVja2V0RGF0YSIsImhhcyIsInJlbW92ZSIsInNoaWZ0IiwibXlIYXNoTWFwIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==