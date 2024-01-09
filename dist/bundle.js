/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!***************************!*\
  !*** ./src/linkedList.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
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
      removeAt: removeAt
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
    nodeString += "null";
    return nodeString;
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
    removeAt: removeAt
  };
}();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQ0h0QixnQkFBZ0IsRUFBaEJBLGdCQUFnQjtJQUNoQkcsTUFBTSxFQUFOQSxNQUFNO0lBQ05DLE9BQU8sRUFBUEEsT0FBTztJQUNQQyxPQUFPLEVBQVBBLE9BQU87SUFDUEMsT0FBTyxFQUFQQSxPQUFPO0lBQ1BDLE9BQU8sRUFBUEEsT0FBTztJQUNQQyxFQUFFLEVBQUZBLEVBQUU7SUFDRmEsR0FBRyxFQUFIQSxHQUFHO0lBQ0haLFFBQVEsRUFBUkEsUUFBUTtJQUNSQyxJQUFJLEVBQUpBLElBQUk7SUFDSkMsUUFBUSxFQUFSQSxRQUFRO0lBQ1JDLFFBQVEsRUFBUkEsUUFBUTtJQUNSQyxRQUFRLEVBQVJBO0VBQ0osQ0FBQztBQUNMLENBQUMsQ0FBRSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MaW5rZWRMaXN0cy8uL3NyYy9ub2RlLmpzIiwid2VicGFjazovL0xpbmtlZExpc3RzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0xpbmtlZExpc3RzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9MaW5rZWRMaXN0cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0xpbmtlZExpc3RzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vTGlua2VkTGlzdHMvLi9zcmMvbGlua2VkTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGdW5jdGlvbiB0byBjcmVhdGUgbmV3IE5vZGVcbmZ1bmN0aW9uIGNyZWF0ZU5vZGUodmFsdWUsIG5leHROb2RlID0gbnVsbCl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlIHx8IG51bGwsXG4gICAgICAgIG5leHROb2RlLFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTm9kZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVOb2RlIGZyb20gXCIuL25vZGVcIjtcblxuLy8gQ3JlYXRlIExpbmtlZCBMaXN0IGZ1bmN0aW9uXG5jb25zdCBsaW5rZWRMaXN0ID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBjcmVhdGVMaW5rZWRMaXN0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGVhZDogbnVsbCxcbiAgICAgICAgICAgIHRhaWw6IG51bGwsXG4gICAgICAgICAgICBhcHBlbmQsXG4gICAgICAgICAgICBwcmVwZW5kLFxuICAgICAgICAgICAgZ2V0U2l6ZSxcbiAgICAgICAgICAgIGdldEhlYWQsXG4gICAgICAgICAgICBnZXRUYWlsLFxuICAgICAgICAgICAgYXQsXG4gICAgICAgICAgICBjb250YWlucyxcbiAgICAgICAgICAgIGZpbmQsXG4gICAgICAgICAgICB0b1N0cmluZyxcbiAgICAgICAgICAgIGluc2VydEF0LFxuICAgICAgICAgICAgcmVtb3ZlQXQsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gYWRkcyBhIG5ldyBub2RlIGNvbnRhaW5pbmcgdmFsdWUgdG8gdGhlIHN0YXJ0IG9mIHRoZSBsaXN0XG4gICAgZnVuY3Rpb24gcHJlcGVuZCh2YWx1ZSkge1xuICAgICAgICBjb25zdCBuZXdOb2RlID0gY3JlYXRlTm9kZSh2YWx1ZSwgdGhpcy5oZWFkKTtcbiAgICAgICAgdGhpcy5oZWFkID0gbmV3Tm9kZTtcbiAgICAgICAgaWYgKCF0aGlzLnRhaWwpIHtcbiAgICAgICAgICAgIHRoaXMudGFpbCA9IG5ld05vZGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGRzIGEgbmV3IG5vZGUgY29udGFpbmluZyB2YWx1ZSB0byB0aGUgZW5kIG9mIHRoZSBsaXN0XG4gICAgZnVuY3Rpb24gYXBwZW5kKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSBjcmVhdGVOb2RlKHZhbHVlKTtcblxuICAgICAgICBpZiAoIXRoaXMuaGVhZCkge1xuICAgICAgICAgICAgdGhpcy5oZWFkID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIHRoaXMudGFpbCA9IG5ld05vZGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRhaWwubmV4dE5vZGUgPSBuZXdOb2RlO1xuICAgICAgICAgICAgdGhpcy50YWlsID0gbmV3Tm9kZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJldHVybnMgdGhlIHRvdGFsIG51bWJlciBvZiBub2RlcyBpbiB0aGUgbGlzdFxuICAgIGZ1bmN0aW9uIGdldFNpemUoKSB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgICB3aGlsZSAoY3VycmVudCkge1xuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dE5vZGU7XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG5cbiAgICAvLyByZXR1cm5zIHRoZSBmaXJzdCBub2RlIGluIHRoZSBsaXN0XG4gICAgZnVuY3Rpb24gZ2V0SGVhZCgpIHtcbiAgICAgICAgY29uc3QgaGVhZE5vZGUgPSB0aGlzLmhlYWQ7XG4gICAgICAgIHJldHVybiBoZWFkTm9kZTtcbiAgICB9XG5cbiAgICAvLyByZXR1cm5zIHRoZSBsYXN0IG5vZGUgaW4gdGhlIGxpc3RcbiAgICBmdW5jdGlvbiBnZXRUYWlsKCkge1xuICAgICAgICBjb25zdCB0YWlsTm9kZSA9IHRoaXMudGFpbDtcbiAgICAgICAgcmV0dXJuIHRhaWxOb2RlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGF0KGluZGV4KSB7XG4gICAgICAgIGxldCBub2RlSW5kZXggPSAwO1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgICAgd2hpbGUoY3VycmVudCkge1xuICAgICAgICAgICAgaWYoaW5kZXggPT09IG5vZGVJbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dE5vZGU7XG4gICAgICAgICAgICBub2RlSW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyByZW1vdmVzIHRoZSBsYXN0IGVsZW1lbnQgZnJvbSB0aGUgbGlzdFxuICAgIGZ1bmN0aW9uIHBvcCgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIGxldCBwcmV2ID0gbnVsbDtcblxuICAgICAgICBpZiAoIWN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkNhbm5vdCBkZWxldGUuIExpc3QgaXMgZW1wdHkuXCI7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoY3VycmVudC5uZXh0Tm9kZSkge1xuICAgICAgICAgICAgcHJldiA9IGN1cnJlbnQ7XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0Tm9kZTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBpZiAocHJldikge1xuICAgICAgICAgICAgcHJldi5uZXh0Tm9kZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnRhaWwgPSBwcmV2O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oZWFkID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMudGFpbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQudmFsdWU7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgaW4gdmFsdWUgaXMgaW4gdGhlIGxpc3QgYW5kIG90aGVyd2lzZSByZXR1cm5zIGZhbHNlLlxuICAgIGZ1bmN0aW9uIGNvbnRhaW5zKHZhbHVlKSB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuXG4gICAgICAgIHdoaWxlKGN1cnJlbnQpe1xuICAgICAgICAgICAgaWYoY3VycmVudC52YWx1ZSA9PT0gdmFsdWUpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG5vZGUgY29udGFpbmluZyB2YWx1ZSwgb3IgbnVsbCBpZiBub3QgZm91bmRcbiAgICBmdW5jdGlvbiBmaW5kKHZhbHVlKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuXG4gICAgICAgIHdoaWxlKGN1cnJlbnQpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50LnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dE5vZGU7XG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gcmVwcmVzZW50cyBMaW5rZWRMaXN0IG9iamVjdHMgYXMgc3RyaW5ncywgc28gdXNlciBjYW4gcHJpbnQgdGhlbSBvdXQgYW5kIHByZXZpZXcgdGhlbSBpbiB0aGUgY29uc29sZS5cbiAgICBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgICAgbGV0IG5vZGVTdHJpbmcgPSBcIlwiO1xuXG4gICAgICAgIHdoaWxlKGN1cnJlbnQpe1xuICAgICAgICAgICAgbm9kZVN0cmluZyArPSBgKCAke2N1cnJlbnQudmFsdWV9ICkgLT4gYDtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9kZVN0cmluZyArPSBcIm51bGxcIjtcbiAgICAgICAgcmV0dXJuIG5vZGVTdHJpbmc7XG4gICAgfVxuXG4gICAgLy8gaW5zZXJ0cyBhIG5ldyBub2RlIHdpdGggdGhlIHByb3ZpZGVkIHZhbHVlIGF0IHRoZSBnaXZlbiBpbmRleC5cbiAgICBmdW5jdGlvbiBpbnNlcnRBdCh2YWx1ZSwgaW5kZXgpe1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgICAgbGV0IHRyYWNrSW5kZXggPSAwO1xuICAgICAgICBsZXQgcHJldiA9IG51bGw7XG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSBjcmVhdGVOb2RlKHZhbHVlKTtcblxuICAgICAgICBpZiAoaW5kZXggPT09IDApe1xuICAgICAgICAgICAgbmV3Tm9kZS5uZXh0Tm9kZSA9IHRoaXMuaGVhZDtcbiAgICAgICAgICAgIHRoaXMuaGVhZCA9IG5ld05vZGU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHdoaWxlKGN1cnJlbnQpe1xuICAgICAgICAgICAgaWYgKHRyYWNrSW5kZXggPT09IGluZGV4KXsgXG4gICAgICAgICAgICAgICAgbmV3Tm9kZS5uZXh0Tm9kZSA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgcHJldi5uZXh0Tm9kZSA9IG5ld05vZGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuOyAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmV2ID0gY3VycmVudDtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHROb2RlO1xuICAgICAgICAgICAgdHJhY2tJbmRleCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRyYWNrSW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgICAgICBwcmV2Lm5leHROb2RlID0gbmV3Tm9kZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZXMgdGhlIG5vZGUgYXQgdGhlIGdpdmVuIGluZGV4XG4gICAgZnVuY3Rpb24gcmVtb3ZlQXQoaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLnNpemUoKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgaW5kZXggZm9yIHJlbW92ZUF0XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgICBsZXQgcHJldiA9IG51bGw7XG4gICAgXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5oZWFkID0gY3VycmVudC5uZXh0Tm9kZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuICAgIFxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnRJbmRleCA8IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcHJldiA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dE5vZGU7XG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBwcmV2Lm5leHROb2RlID0gY3VycmVudC5uZXh0Tm9kZTtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gdGhpcy5zaXplKCkgLSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWlsID0gcHJldjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZUxpbmtlZExpc3QsXG4gICAgICAgIGFwcGVuZCxcbiAgICAgICAgcHJlcGVuZCxcbiAgICAgICAgZ2V0U2l6ZSxcbiAgICAgICAgZ2V0SGVhZCxcbiAgICAgICAgZ2V0VGFpbCxcbiAgICAgICAgYXQsXG4gICAgICAgIHBvcCxcbiAgICAgICAgY29udGFpbnMsXG4gICAgICAgIGZpbmQsXG4gICAgICAgIHRvU3RyaW5nLCBcbiAgICAgICAgaW5zZXJ0QXQsXG4gICAgICAgIHJlbW92ZUF0LCAgIFxuICAgIH07XG59KSgpO1xuXG4iXSwibmFtZXMiOlsiY3JlYXRlTm9kZSIsInZhbHVlIiwibmV4dE5vZGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJsaW5rZWRMaXN0IiwiY3JlYXRlTGlua2VkTGlzdCIsImhlYWQiLCJ0YWlsIiwiYXBwZW5kIiwicHJlcGVuZCIsImdldFNpemUiLCJnZXRIZWFkIiwiZ2V0VGFpbCIsImF0IiwiY29udGFpbnMiLCJmaW5kIiwidG9TdHJpbmciLCJpbnNlcnRBdCIsInJlbW92ZUF0IiwibmV3Tm9kZSIsImNvdW50IiwiY3VycmVudCIsImhlYWROb2RlIiwidGFpbE5vZGUiLCJpbmRleCIsIm5vZGVJbmRleCIsInBvcCIsInByZXYiLCJub2RlU3RyaW5nIiwiY29uY2F0IiwidHJhY2tJbmRleCIsInNpemUiLCJjb25zb2xlIiwiZXJyb3IiLCJjdXJyZW50SW5kZXgiXSwic291cmNlUm9vdCI6IiJ9