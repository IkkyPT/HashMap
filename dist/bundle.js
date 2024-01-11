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
  // hash constructor
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
    value:
    //  takes a value and produces a hash code with it.
    function hash(key) {
      var hashValue = 0;
      for (var i = 0; i < key.length; i++) {
        hashValue += key.charCodeAt(i);
      }
      return hashValue % this.bucketSize;
    }

    // adds a key-value pair to a hash table, handling collisions and triggering a resize if needed.
  }, {
    key: "set",
    value: function set(key, value) {
      var index = this.hash(key);
      var bucketIndex = this.bucket[index];
      for (var i = 0; i < bucketIndex.length; i++) {
        var subBucket = bucketIndex[i];
        if (subBucket.contains(key)) {
          subBucket.append(value);
          return;
        }
        ;
      }
      ;
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

    // double bucket size, rehashing existing key-value pairs, and updating the internal state accordingly.
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

    // get method for the hash table, retrieving the string representation of a value associated with a given key if it exists; otherwise, it returns false.
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

    // checking if a given key exists in the table and returning true if found, otherwise returning false.
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

    // remove defined key from the hash table
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

    // return the amount of key that exist in the hash table
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

    // removes all the entries in the hash map
  }, {
    key: "clear",
    value: function clear() {
      var index = 0;
      var bucketData = this.bucket;
      while (bucketData.length > index) {
        if (bucketData[index][0]) {
          var key = bucketData[index][0].head.value;
          this.remove(key);
          this.bucketSize--;
        }
        index++;
      }
    }

    // returns an array containing all the keys inside the hash map.
  }, {
    key: "keys",
    value: function keys() {
      var index = 0;
      var keys = [];
      var bucketData = this.bucket;
      while (bucketData.length > index) {
        if (bucketData[index][0]) {
          var key = bucketData[index][0].head.value;
          keys.push(key);
        }
        index++;
      }
      return keys;
    }

    // returns an array containing all the values.
  }, {
    key: "values",
    value: function values() {
      var keys = this.keys();
      var values = [];
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var index = this.hash(key);
        if (this.bucket[index] && this.bucket[index].length > 0) {
          var current = this.bucket[index][0].head;
          while (current) {
            if (current.value !== key) {
              values.push(current.value);
            }
            current = current.nextNode;
          }
        }
      }
      return values;
    }

    // returns an array containing each key-value pair as [key, value] arrays
  }, {
    key: "entries",
    value: function entries() {
      var result = [];
      for (var i = 0; i < this.bucket.length; i++) {
        var bucketIndex = this.bucket[i];
        if (bucketIndex && bucketIndex.length > 0) {
          var current = bucketIndex[0].head;
          while (current) {
            var key = bucketIndex[0].head.value;
            var value = current.nextNode ? current.nextNode.value : null;
            if (value !== null) {
              result.push([key, value]);
            }
            current = current.nextNode;
          }
        }
      }
      return result;
    }
  }]);
  return HashMap;
}();
var myHashMap = new HashMap();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU07SUFDakI7RUFBQztFQUFBLE9BQUFoQyxPQUFBO0FBQUE7QUFHTCxJQUFNaUMsU0FBUyxHQUFHLElBQUlqQyxPQUFPLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSGFzaE1hcC8uL3NyYy9saW5rZWRMaXN0LmpzIiwid2VicGFjazovL0hhc2hNYXAvLi9zcmMvbm9kZS5qcyIsIndlYnBhY2s6Ly9IYXNoTWFwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0hhc2hNYXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0hhc2hNYXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9IYXNoTWFwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vSGFzaE1hcC8uL3NyYy9oYXNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVOb2RlIGZyb20gXCIuL25vZGVcIjtcblxuLy8gQ3JlYXRlIExpbmtlZCBMaXN0IGZ1bmN0aW9uXG5jb25zdCBsaW5rZWRMaXN0ID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBjcmVhdGVMaW5rZWRMaXN0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGVhZDogbnVsbCxcbiAgICAgICAgICAgIHRhaWw6IG51bGwsXG4gICAgICAgICAgICBhcHBlbmQsXG4gICAgICAgICAgICBwcmVwZW5kLFxuICAgICAgICAgICAgZ2V0U2l6ZSxcbiAgICAgICAgICAgIGdldEhlYWQsXG4gICAgICAgICAgICBnZXRUYWlsLFxuICAgICAgICAgICAgYXQsXG4gICAgICAgICAgICBjb250YWlucyxcbiAgICAgICAgICAgIGZpbmQsXG4gICAgICAgICAgICB0b1N0cmluZyxcbiAgICAgICAgICAgIGluc2VydEF0LFxuICAgICAgICAgICAgcmVtb3ZlQXQsXG4gICAgICAgICAgICB0b05vZGUsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gYWRkcyBhIG5ldyBub2RlIGNvbnRhaW5pbmcgdmFsdWUgdG8gdGhlIHN0YXJ0IG9mIHRoZSBsaXN0XG4gICAgZnVuY3Rpb24gcHJlcGVuZCh2YWx1ZSkge1xuICAgICAgICBjb25zdCBuZXdOb2RlID0gY3JlYXRlTm9kZSh2YWx1ZSwgdGhpcy5oZWFkKTtcbiAgICAgICAgdGhpcy5oZWFkID0gbmV3Tm9kZTtcbiAgICAgICAgaWYgKCF0aGlzLnRhaWwpIHtcbiAgICAgICAgICAgIHRoaXMudGFpbCA9IG5ld05vZGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGRzIGEgbmV3IG5vZGUgY29udGFpbmluZyB2YWx1ZSB0byB0aGUgZW5kIG9mIHRoZSBsaXN0XG4gICAgZnVuY3Rpb24gYXBwZW5kKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSBjcmVhdGVOb2RlKHZhbHVlKTtcblxuICAgICAgICBpZiAoIXRoaXMuaGVhZCkge1xuICAgICAgICAgICAgdGhpcy5oZWFkID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIHRoaXMudGFpbCA9IG5ld05vZGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRhaWwubmV4dE5vZGUgPSBuZXdOb2RlO1xuICAgICAgICAgICAgdGhpcy50YWlsID0gbmV3Tm9kZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJldHVybnMgdGhlIHRvdGFsIG51bWJlciBvZiBub2RlcyBpbiB0aGUgbGlzdFxuICAgIGZ1bmN0aW9uIGdldFNpemUoKSB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgICB3aGlsZSAoY3VycmVudCkge1xuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dE5vZGU7XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG5cbiAgICAvLyByZXR1cm5zIHRoZSBmaXJzdCBub2RlIGluIHRoZSBsaXN0XG4gICAgZnVuY3Rpb24gZ2V0SGVhZCgpIHtcbiAgICAgICAgY29uc3QgaGVhZE5vZGUgPSB0aGlzLmhlYWQ7XG4gICAgICAgIHJldHVybiBoZWFkTm9kZTtcbiAgICB9XG5cbiAgICAvLyByZXR1cm5zIHRoZSBsYXN0IG5vZGUgaW4gdGhlIGxpc3RcbiAgICBmdW5jdGlvbiBnZXRUYWlsKCkge1xuICAgICAgICBjb25zdCB0YWlsTm9kZSA9IHRoaXMudGFpbDtcbiAgICAgICAgcmV0dXJuIHRhaWxOb2RlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGF0KGluZGV4KSB7XG4gICAgICAgIGxldCBub2RlSW5kZXggPSAwO1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgICAgd2hpbGUoY3VycmVudCkge1xuICAgICAgICAgICAgaWYoaW5kZXggPT09IG5vZGVJbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dE5vZGU7XG4gICAgICAgICAgICBub2RlSW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyByZW1vdmVzIHRoZSBsYXN0IGVsZW1lbnQgZnJvbSB0aGUgbGlzdFxuICAgIGZ1bmN0aW9uIHBvcCgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIGxldCBwcmV2ID0gbnVsbDtcblxuICAgICAgICBpZiAoIWN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkNhbm5vdCBkZWxldGUuIExpc3QgaXMgZW1wdHkuXCI7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoY3VycmVudC5uZXh0Tm9kZSkge1xuICAgICAgICAgICAgcHJldiA9IGN1cnJlbnQ7XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0Tm9kZTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBpZiAocHJldikge1xuICAgICAgICAgICAgcHJldi5uZXh0Tm9kZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnRhaWwgPSBwcmV2O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oZWFkID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMudGFpbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQudmFsdWU7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgaW4gdmFsdWUgaXMgaW4gdGhlIGxpc3QgYW5kIG90aGVyd2lzZSByZXR1cm5zIGZhbHNlLlxuICAgIGZ1bmN0aW9uIGNvbnRhaW5zKHZhbHVlKSB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuXG4gICAgICAgIHdoaWxlKGN1cnJlbnQpe1xuICAgICAgICAgICAgaWYoY3VycmVudC52YWx1ZSA9PT0gdmFsdWUpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG5vZGUgY29udGFpbmluZyB2YWx1ZSwgb3IgbnVsbCBpZiBub3QgZm91bmRcbiAgICBmdW5jdGlvbiBmaW5kKHZhbHVlKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuXG4gICAgICAgIHdoaWxlKGN1cnJlbnQpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50LnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dE5vZGU7XG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gcmVwcmVzZW50cyBMaW5rZWRMaXN0IG9iamVjdHMgYXMgc3RyaW5ncywgc28gdXNlciBjYW4gcHJpbnQgdGhlbSBvdXQgYW5kIHByZXZpZXcgdGhlbSBpbiB0aGUgY29uc29sZS5cbiAgICBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIGxldCBub2RlU3RyaW5nID0gXCJcIjtcbiAgICBcbiAgICAgICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgICAgICAgIG5vZGVTdHJpbmcgKz0gYCggJHtjdXJyZW50LnZhbHVlfSApIC0+IGA7XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0Tm9kZTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAvLyBSZW1vdmUgdGhlIHRyYWlsaW5nIGFycm93IGFuZCBhZGQgYW4gZW1wdHkgc3RyaW5nIGlmIHRoZSBsaXN0IGlzIGVtcHR5XG4gICAgICAgIHJldHVybiBub2RlU3RyaW5nID8gbm9kZVN0cmluZy5zbGljZSgwLCAtNCkgOiBcIlwiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvTm9kZShzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgbm9kZVZhbHVlcyA9IHN0cmluZ1xuICAgICAgICAgICAgLnNwbGl0KCctPicpXG4gICAgICAgICAgICAubWFwKHZhbHVlID0+IHZhbHVlLnJlcGxhY2UoL1xcKHxcXCkvZywgJycpLnRyaW0oKSlcbiAgICAgICAgICAgIC5maWx0ZXIodmFsdWUgPT4gdmFsdWUgIT09ICcnKTtcbiAgICBcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IGNyZWF0ZUxpbmtlZExpc3QoKTtcbiAgICBcbiAgICAgICAgaWYgKG5vZGVWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbmV3TGlzdC5wcmVwZW5kKG5vZGVWYWx1ZXNbMF0pO1xuICAgIFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBub2RlVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbmV3TGlzdC5hcHBlbmQobm9kZVZhbHVlc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmV0dXJuIG5ld0xpc3Q7XG4gICAgfSAgICBcblxuICAgIC8vIGluc2VydHMgYSBuZXcgbm9kZSB3aXRoIHRoZSBwcm92aWRlZCB2YWx1ZSBhdCB0aGUgZ2l2ZW4gaW5kZXguXG4gICAgZnVuY3Rpb24gaW5zZXJ0QXQodmFsdWUsIGluZGV4KXtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIGxldCB0cmFja0luZGV4ID0gMDtcbiAgICAgICAgbGV0IHByZXYgPSBudWxsO1xuICAgICAgICBjb25zdCBuZXdOb2RlID0gY3JlYXRlTm9kZSh2YWx1ZSk7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKXtcbiAgICAgICAgICAgIG5ld05vZGUubmV4dE5vZGUgPSB0aGlzLmhlYWQ7XG4gICAgICAgICAgICB0aGlzLmhlYWQgPSBuZXdOb2RlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB3aGlsZShjdXJyZW50KXtcbiAgICAgICAgICAgIGlmICh0cmFja0luZGV4ID09PSBpbmRleCl7IFxuICAgICAgICAgICAgICAgIG5ld05vZGUubmV4dE5vZGUgPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgIHByZXYubmV4dE5vZGUgPSBuZXdOb2RlO1xuICAgICAgICAgICAgICAgIHJldHVybjsgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJldiA9IGN1cnJlbnQ7XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0Tm9kZTtcbiAgICAgICAgICAgIHRyYWNrSW5kZXgrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0cmFja0luZGV4ID09PSBpbmRleCkge1xuICAgICAgICAgICAgcHJldi5uZXh0Tm9kZSA9IG5ld05vZGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmVzIHRoZSBub2RlIGF0IHRoZSBnaXZlbiBpbmRleFxuICAgIGZ1bmN0aW9uIHJlbW92ZUF0KGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5zaXplKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIGluZGV4IGZvciByZW1vdmVBdFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgICAgbGV0IHByZXYgPSBudWxsO1xuICAgIFxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZCA9IGN1cnJlbnQubmV4dE5vZGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcbiAgICBcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50SW5kZXggPCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHByZXYgPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHROb2RlO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgcHJldi5uZXh0Tm9kZSA9IGN1cnJlbnQubmV4dE5vZGU7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IHRoaXMuc2l6ZSgpIC0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFpbCA9IHByZXY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVMaW5rZWRMaXN0LFxuICAgICAgICBhcHBlbmQsXG4gICAgICAgIHByZXBlbmQsXG4gICAgICAgIGdldFNpemUsXG4gICAgICAgIGdldEhlYWQsXG4gICAgICAgIGdldFRhaWwsXG4gICAgICAgIGF0LFxuICAgICAgICBwb3AsXG4gICAgICAgIGNvbnRhaW5zLFxuICAgICAgICBmaW5kLFxuICAgICAgICB0b1N0cmluZywgXG4gICAgICAgIGluc2VydEF0LFxuICAgICAgICByZW1vdmVBdCxcbiAgICAgICAgdG9Ob2RlLCAgIFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBsaW5rZWRMaXN0O1xuIiwiLy8gRnVuY3Rpb24gdG8gY3JlYXRlIG5ldyBOb2RlXG5mdW5jdGlvbiBjcmVhdGVOb2RlKHZhbHVlLCBuZXh0Tm9kZSA9IG51bGwpe1xuICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSB8fCBudWxsLFxuICAgICAgICBuZXh0Tm9kZSxcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5vZGU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbGlua2VkTGlzdCBmcm9tIFwiLi9saW5rZWRMaXN0XCI7XG5cbmNsYXNzIEhhc2hNYXAge1xuXG4gICAgLy8gaGFzaCBjb25zdHJ1Y3RvclxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy5idWNrZXRTaXplID0gMTY7XG4gICAgICAgICAgICB0aGlzLmxvYWRGYWN0b3IgPSAwLjc1O1xuICAgICAgICAgICAgdGhpcy5zaXplID0gMDtcbiAgICAgICAgICAgIHRoaXMuYnVja2V0ID0gQXJyYXkoMTYpLmZpbGwobnVsbCkubWFwKCgpID0+IFtdKTtcbiAgICB9O1xuICAgIFxuICAgIC8vICB0YWtlcyBhIHZhbHVlIGFuZCBwcm9kdWNlcyBhIGhhc2ggY29kZSB3aXRoIGl0LlxuICAgIGhhc2goa2V5KSB7XG4gICAgICAgIGxldCBoYXNoVmFsdWUgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaGFzaFZhbHVlICs9IGtleS5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoYXNoVmFsdWUgJSB0aGlzLmJ1Y2tldFNpemU7XG4gICAgfVxuXG4gICAgLy8gYWRkcyBhIGtleS12YWx1ZSBwYWlyIHRvIGEgaGFzaCB0YWJsZSwgaGFuZGxpbmcgY29sbGlzaW9ucyBhbmQgdHJpZ2dlcmluZyBhIHJlc2l6ZSBpZiBuZWVkZWQuXG4gICAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmhhc2goa2V5KTtcbiAgICAgICAgY29uc3QgYnVja2V0SW5kZXggPSB0aGlzLmJ1Y2tldFtpbmRleF07XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWNrZXRJbmRleC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBzdWJCdWNrZXQgPSBidWNrZXRJbmRleFtpXTtcblxuICAgICAgICAgICAgaWYoc3ViQnVja2V0LmNvbnRhaW5zKGtleSkpe1xuICAgICAgICAgICAgICAgIHN1YkJ1Y2tldC5hcHBlbmQodmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgfTtcblxuICAgICAgICBpZihidWNrZXRJbmRleCAhPT0ga2V5KSB7XG4gICAgICAgICAgICBjb25zdCBzdWJCdWNrZXQgPSBsaW5rZWRMaXN0LmNyZWF0ZUxpbmtlZExpc3QoKTtcbiAgICAgICAgICAgIGJ1Y2tldEluZGV4LnB1c2goc3ViQnVja2V0KTtcbiAgICAgICAgICAgIHN1YkJ1Y2tldC5wcmVwZW5kKGtleSk7XG4gICAgICAgICAgICBzdWJCdWNrZXQuYXBwZW5kKHZhbHVlKTtcblxuICAgICAgICAgICAgdGhpcy5zaXplKys7XG5cbiAgICAgICAgICAgIGlmKHRoaXMuc2l6ZSAvIHRoaXMuYnVja2V0U2l6ZSA+IHRoaXMubG9hZEZhY3Rvcil7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGRvdWJsZSBidWNrZXQgc2l6ZSwgcmVoYXNoaW5nIGV4aXN0aW5nIGtleS12YWx1ZSBwYWlycywgYW5kIHVwZGF0aW5nIHRoZSBpbnRlcm5hbCBzdGF0ZSBhY2NvcmRpbmdseS5cbiAgICByZXNpemUoKSB7XG4gICAgICAgIGNvbnN0IG9sZEJ1Y2tldCA9IHRoaXMuYnVja2V0O1xuICAgICAgICB0aGlzLmJ1Y2tldFNpemUgKj0gMjtcbiAgICAgICAgY29uc3QgbmV3QnVja2V0ID0gQXJyYXkodGhpcy5idWNrZXRTaXplKS5maWxsKG51bGwpLm1hcCgoKSA9PiBbXSk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgb2xkQnVja2V0Lmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBpZiAob2xkQnVja2V0W3hdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdMb2NhdGlvbiA9IHRoaXMuaGFzaChvbGRCdWNrZXRbeF1bMF0uaGVhZC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyaW5nUmVwcmVzZW50YXRpb24gPSBvbGRCdWNrZXRbeF1bMF0udG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZWNvbnN0cnVjdGVkTGlua2VkTGlzdCA9IGxpbmtlZExpc3QudG9Ob2RlKHN0cmluZ1JlcHJlc2VudGF0aW9uKTtcbiAgICAgICAgICAgICAgICBuZXdCdWNrZXRbbmV3TG9jYXRpb25dLnB1c2gocmVjb25zdHJ1Y3RlZExpbmtlZExpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIHRoaXMuYnVja2V0ID0gbmV3QnVja2V0O1xuICAgIH1cblxuICAgIC8vIGdldCBtZXRob2QgZm9yIHRoZSBoYXNoIHRhYmxlLCByZXRyaWV2aW5nIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggYSBnaXZlbiBrZXkgaWYgaXQgZXhpc3RzOyBvdGhlcndpc2UsIGl0IHJldHVybnMgZmFsc2UuXG4gICAgZ2V0KGtleSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaGFzaChrZXkpO1xuICAgICAgICBjb25zdCBidWNrZXREYXRhID0gdGhpcy5idWNrZXQ7XG4gICAgICAgIFxuICAgICAgICBpZihidWNrZXREYXRhW2luZGV4XSAmJiBidWNrZXREYXRhW2luZGV4XS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZihidWNrZXREYXRhW2luZGV4XVswXSAmJiBidWNrZXREYXRhW2luZGV4XVswXS5oZWFkLnZhbHVlID09PSBrZXkpe1xuICAgICAgICAgICAgICAgIHJldHVybiBidWNrZXREYXRhW2luZGV4XVswXS50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgLy8gY2hlY2tpbmcgaWYgYSBnaXZlbiBrZXkgZXhpc3RzIGluIHRoZSB0YWJsZSBhbmQgcmV0dXJuaW5nIHRydWUgaWYgZm91bmQsIG90aGVyd2lzZSByZXR1cm5pbmcgZmFsc2UuXG4gICAgaGFzKGtleSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaGFzaChrZXkpO1xuICAgICAgICBjb25zdCBidWNrZXREYXRhID0gdGhpcy5idWNrZXQ7XG4gICAgICAgIFxuICAgICAgICBpZihidWNrZXREYXRhW2luZGV4XSAmJiBidWNrZXREYXRhW2luZGV4XS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZihidWNrZXREYXRhW2luZGV4XVswXSAmJiBidWNrZXREYXRhW2luZGV4XVswXS5oZWFkLnZhbHVlID09PSBrZXkpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgZGVmaW5lZCBrZXkgZnJvbSB0aGUgaGFzaCB0YWJsZVxuICAgIHJlbW92ZShrZXkpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmhhc2goa2V5KTtcbiAgICAgICAgY29uc3QgYnVja2V0RGF0YSA9IHRoaXMuYnVja2V0O1xuICAgIFxuICAgICAgICBpZiAoYnVja2V0RGF0YVtpbmRleF0gJiYgYnVja2V0RGF0YVtpbmRleF0ubGVuZ3RoID4gMCkgeyAgICBcbiAgICAgICAgICAgIGlmIChidWNrZXREYXRhW2luZGV4XVswXS5oZWFkICYmIGJ1Y2tldERhdGFbaW5kZXhdWzBdLmhlYWQudmFsdWUgPT09IGtleSkge1xuICAgICAgICAgICAgICAgIGJ1Y2tldERhdGFbaW5kZXhdLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaXplLS07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBLZXkgXCIke2tleX1cIiByZW1vdmVkIHN1Y2Nlc3NmdWxseS5gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIHJldHVybiBgVGhlIGtleSBcIiR7a2V5fVwiIGRvZXNuJ3QgZXhpc3QgaW4gdGhlIGhhc2ggbWFwLmA7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIHRoZSBhbW91bnQgb2Yga2V5IHRoYXQgZXhpc3QgaW4gdGhlIGhhc2ggdGFibGVcbiAgICBsZW5ndGgoKSB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGNvbnN0IGJ1Y2tldERhdGEgPSB0aGlzLmJ1Y2tldDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1Y2tldERhdGEubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYoYnVja2V0RGF0YVtpXS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH1cblxuICAgIC8vIHJlbW92ZXMgYWxsIHRoZSBlbnRyaWVzIGluIHRoZSBoYXNoIG1hcFxuICAgIGNsZWFyKCkge1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBjb25zdCBidWNrZXREYXRhID0gdGhpcy5idWNrZXQ7XG4gICAgICAgIHdoaWxlIChidWNrZXREYXRhLmxlbmd0aCA+IGluZGV4KXtcbiAgICAgICAgICAgIGlmKGJ1Y2tldERhdGFbaW5kZXhdWzBdKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gYnVja2V0RGF0YVtpbmRleF1bMF0uaGVhZC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZShrZXkpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnVja2V0U2l6ZS0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyBhbGwgdGhlIGtleXMgaW5zaWRlIHRoZSBoYXNoIG1hcC5cbiAgICBrZXlzKCkge1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBjb25zdCBrZXlzID0gW107XG4gICAgICAgIGNvbnN0IGJ1Y2tldERhdGEgPSB0aGlzLmJ1Y2tldDtcbiAgICAgICAgd2hpbGUgKGJ1Y2tldERhdGEubGVuZ3RoID4gaW5kZXgpe1xuICAgICAgICAgICAgaWYoYnVja2V0RGF0YVtpbmRleF1bMF0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBidWNrZXREYXRhW2luZGV4XVswXS5oZWFkLnZhbHVlO1xuICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9XG5cbiAgICAvLyByZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIHRoZSB2YWx1ZXMuXG4gICAgdmFsdWVzKCkge1xuICAgICAgICBjb25zdCBrZXlzID0gdGhpcy5rZXlzKCk7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaGFzaChrZXkpO1xuICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMuYnVja2V0W2luZGV4XSAmJiB0aGlzLmJ1Y2tldFtpbmRleF0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5idWNrZXRbaW5kZXhdWzBdLmhlYWQ7XG4gICAgXG4gICAgICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQudmFsdWUgIT09IGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnB1c2goY3VycmVudC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dE5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIGVhY2gga2V5LXZhbHVlIHBhaXIgYXMgW2tleSwgdmFsdWVdIGFycmF5c1xuICAgIGVudHJpZXMoKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idWNrZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGJ1Y2tldEluZGV4ID0gdGhpcy5idWNrZXRbaV07XG5cbiAgICAgICAgICAgIGlmIChidWNrZXRJbmRleCAmJiBidWNrZXRJbmRleC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBidWNrZXRJbmRleFswXS5oZWFkO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gYnVja2V0SW5kZXhbMF0uaGVhZC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjdXJyZW50Lm5leHROb2RlID8gY3VycmVudC5uZXh0Tm9kZS52YWx1ZSA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dE5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9ICAgIFxufVxuXG5jb25zdCBteUhhc2hNYXAgPSBuZXcgSGFzaE1hcCgpO1xuXG4iXSwibmFtZXMiOlsiY3JlYXRlTm9kZSIsImxpbmtlZExpc3QiLCJjcmVhdGVMaW5rZWRMaXN0IiwiaGVhZCIsInRhaWwiLCJhcHBlbmQiLCJwcmVwZW5kIiwiZ2V0U2l6ZSIsImdldEhlYWQiLCJnZXRUYWlsIiwiYXQiLCJjb250YWlucyIsImZpbmQiLCJ0b1N0cmluZyIsImluc2VydEF0IiwicmVtb3ZlQXQiLCJ0b05vZGUiLCJ2YWx1ZSIsIm5ld05vZGUiLCJuZXh0Tm9kZSIsImNvdW50IiwiY3VycmVudCIsImhlYWROb2RlIiwidGFpbE5vZGUiLCJpbmRleCIsIm5vZGVJbmRleCIsInBvcCIsInByZXYiLCJub2RlU3RyaW5nIiwiY29uY2F0Iiwic2xpY2UiLCJzdHJpbmciLCJub2RlVmFsdWVzIiwic3BsaXQiLCJtYXAiLCJyZXBsYWNlIiwidHJpbSIsImZpbHRlciIsIm5ld0xpc3QiLCJsZW5ndGgiLCJpIiwidHJhY2tJbmRleCIsInNpemUiLCJjb25zb2xlIiwiZXJyb3IiLCJjdXJyZW50SW5kZXgiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJIYXNoTWFwIiwiX2NsYXNzQ2FsbENoZWNrIiwiYnVja2V0U2l6ZSIsImxvYWRGYWN0b3IiLCJidWNrZXQiLCJBcnJheSIsImZpbGwiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJoYXNoIiwiaGFzaFZhbHVlIiwiY2hhckNvZGVBdCIsInNldCIsImJ1Y2tldEluZGV4Iiwic3ViQnVja2V0IiwicHVzaCIsInJlc2l6ZSIsIm9sZEJ1Y2tldCIsIm5ld0J1Y2tldCIsIngiLCJuZXdMb2NhdGlvbiIsInN0cmluZ1JlcHJlc2VudGF0aW9uIiwicmVjb25zdHJ1Y3RlZExpbmtlZExpc3QiLCJnZXQiLCJidWNrZXREYXRhIiwiaGFzIiwicmVtb3ZlIiwic2hpZnQiLCJjbGVhciIsImtleXMiLCJ2YWx1ZXMiLCJlbnRyaWVzIiwicmVzdWx0IiwibXlIYXNoTWFwIl0sInNvdXJjZVJvb3QiOiIifQ==