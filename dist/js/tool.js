/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ActionDropdownWithButtons.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ActionDropdownWithButtons.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'laravel-nova-ui'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/composables/useActions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/Dropdowns/DropdownMenuHeading.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'ActionDropdownWithButtons',
  props: {
    resource: {},
    resourceName: {},
    viaResource: {},
    viaResourceId: {},
    viaRelationship: {},
    relationshipType: {},
    actions: {
      type: Array,
      "default": []
    },
    selectedResources: {
      type: [Array, String],
      "default": function _default() {
        return [];
      }
    },
    endpoint: {
      type: String,
      "default": null
    },
    triggerDuskAttribute: {
      type: String,
      "default": null
    },
    showHeadings: {
      type: Boolean,
      "default": false
    }
  },
  emits: ['actionExecuted'],
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose,
      __emit = _ref.emit;
    __expose();
    var emitter = __emit;
    var props = __props;
    var store = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    var _useActions = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/composables/useActions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(props, emitter, store),
      errors = _useActions.errors,
      actionModalVisible = _useActions.actionModalVisible,
      responseModalVisible = _useActions.responseModalVisible,
      openConfirmationModal = _useActions.openConfirmationModal,
      closeConfirmationModal = _useActions.closeConfirmationModal,
      closeResponseModal = _useActions.closeResponseModal,
      handleActionClick = _useActions.handleActionClick,
      selectedAction = _useActions.selectedAction,
      working = _useActions.working,
      executeAction = _useActions.executeAction,
      actionModalReponseData = _useActions.actionModalReponseData;
    var runAction = function runAction() {
      return executeAction(function () {
        return emitter('actionExecuted');
      });
    };
    var dropdownActions = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {
      return props.actions.filter(function (action) {
        return !(action !== null && action !== void 0 && action.showAsButton);
      });
    });
    var buttonActions = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {
      return props.actions.filter(function (action) {
        return (action === null || action === void 0 ? void 0 : action.showAsButton) && (!(action !== null && action !== void 0 && action.hideIfCantRun) || (action === null || action === void 0 ? void 0 : action.authorizedToRun));
      });
    });
    var handleClick = function handleClick(action) {
      if (action.authorizedToRun !== false) {
        handleActionClick(action.uriKey);
      }
    };
    var handleResponseModalConfirm = function handleResponseModalConfirm() {
      closeResponseModal();
      emitter('actionExecuted');
    };
    var handleResponseModalClose = function handleResponseModalClose() {
      closeResponseModal();
      emitter('actionExecuted');
    };
    var __returned__ = {
      emitter: emitter,
      props: props,
      store: store,
      errors: errors,
      actionModalVisible: actionModalVisible,
      responseModalVisible: responseModalVisible,
      openConfirmationModal: openConfirmationModal,
      closeConfirmationModal: closeConfirmationModal,
      closeResponseModal: closeResponseModal,
      handleActionClick: handleActionClick,
      selectedAction: selectedAction,
      working: working,
      executeAction: executeAction,
      actionModalReponseData: actionModalReponseData,
      runAction: runAction,
      dropdownActions: dropdownActions,
      buttonActions: buttonActions,
      handleClick: handleClick,
      handleResponseModalConfirm: handleResponseModalConfirm,
      handleResponseModalClose: handleResponseModalClose,
      get Button() {
        return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'laravel-nova-ui'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
      },
      get useStore() {
        return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
      },
      get useActions() {
        return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/composables/useActions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
      },
      DropdownMenuHeading: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/Dropdowns/DropdownMenuHeading.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
      computed: vue__WEBPACK_IMPORTED_MODULE_1__.computed
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ActionDropdownWithButtons.vue?vue&type=template&id=6b095319":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ActionDropdownWithButtons.vue?vue&type=template&id=6b095319 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  "class": "flex items-center justify-end gap-2"
};
var _hoisted_2 = {
  "class": "px-1 divide-y divide-gray-100 dark:divide-gray-800 divide-solid"
};
var _hoisted_3 = {
  key: 0
};
var _hoisted_4 = {
  "class": "py-1"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$setup$selectedActio, _$setup$actionModalRe, _$setup$actionModalRe2, _$setup$actionModalRe3;
  var _component_DropdownMenuItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DropdownMenuItem");
  var _component_ScrollWrap = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ScrollWrap");
  var _component_DropdownMenu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DropdownMenu");
  var _component_Dropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Dropdown");
  var _directive_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("tooltip");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Confirm Action Modal "), $setup.actionModalVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)((_$setup$selectedActio = $setup.selectedAction) === null || _$setup$selectedActio === void 0 ? void 0 : _$setup$selectedActio.component), {
    key: 0,
    show: $setup.actionModalVisible,
    "class": "text-left",
    working: $setup.working,
    "selected-resources": $props.selectedResources,
    "resource-name": $props.resourceName,
    action: $setup.selectedAction,
    errors: $setup.errors,
    onConfirm: $setup.runAction,
    onClose: $setup.closeConfirmationModal
  }, null, 40 /* PROPS, NEED_HYDRATION */, ["show", "working", "selected-resources", "resource-name", "action", "errors", "onClose"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.responseModalVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)((_$setup$actionModalRe = $setup.actionModalReponseData) === null || _$setup$actionModalRe === void 0 ? void 0 : _$setup$actionModalRe.component), {
    key: 1,
    show: $setup.responseModalVisible,
    onConfirm: $setup.handleResponseModalConfirm,
    onClose: $setup.handleResponseModalClose,
    data: (_$setup$actionModalRe2 = (_$setup$actionModalRe3 = $setup.actionModalReponseData) === null || _$setup$actionModalRe3 === void 0 ? void 0 : _$setup$actionModalRe3.payload) !== null && _$setup$actionModalRe2 !== void 0 ? _$setup$actionModalRe2 : {}
  }, null, 40 /* PROPS, NEED_HYDRATION */, ["show", "data"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.buttonActions, function (action) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($setup.Button), {
      key: action.uriKey,
      "data-action-id": action.uriKey,
      innerHTML: action.name,
      onClick: function onClick() {
        return $setup.handleClick(action);
      },
      title: action.name,
      disabled: action.authorizedToRun === false
    }, null, 8 /* PROPS */, ["data-action-id", "innerHTML", "onClick", "title", "disabled"]);
  }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dropdown, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "trigger", {}, function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Button"], {
          onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["stop"])),
          dusk: $props.triggerDuskAttribute,
          variant: "ghost",
          icon: "ellipsis-horizontal"
        }, null, 8 /* PROPS */, ["dusk"]), [[_directive_tooltip, _ctx.__('Actions')]])];
      })];
    }),
    menu: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DropdownMenu, {
        width: "auto"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ScrollWrap, {
            height: 250
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "menu"), $setup.dropdownActions.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [$props.showHeadings ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["DropdownMenuHeading"], {
                key: 0
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('User Actions')), 1 /* TEXT */)];
                }),
                _: 1 /* STABLE */
              })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.dropdownActions, function (action) {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DropdownMenuItem, {
                  key: action.uriKey,
                  "data-action-id": action.uriKey,
                  as: "button",
                  "class": "border-none",
                  onClick: function onClick() {
                    return $setup.handleClick(action);
                  },
                  title: action.name,
                  disabled: action.authorizedToRun === false
                }, {
                  "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                    return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(action.name), 1 /* TEXT */)];
                  }),
                  _: 2 /* DYNAMIC */
                }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["data-action-id", "onClick", "title", "disabled"]);
              }), 128 /* KEYED_FRAGMENT */))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])];
            }),
            _: 3 /* FORWARDED */
          })];
        }),
        _: 3 /* FORWARDED */
      })];
    }),
    _: 3 /* FORWARDED */
  })])]);
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./resources/js/components/ActionDropdownWithButtons.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/ActionDropdownWithButtons.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ActionDropdownWithButtons_vue_vue_type_template_id_6b095319__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionDropdownWithButtons.vue?vue&type=template&id=6b095319 */ "./resources/js/components/ActionDropdownWithButtons.vue?vue&type=template&id=6b095319");
/* harmony import */ var _ActionDropdownWithButtons_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActionDropdownWithButtons.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/ActionDropdownWithButtons.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_pcorrick_nova_action_buttons_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_pcorrick_nova_action_buttons_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ActionDropdownWithButtons_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ActionDropdownWithButtons_vue_vue_type_template_id_6b095319__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/ActionDropdownWithButtons.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/ActionDropdownWithButtons.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/ActionDropdownWithButtons.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ActionDropdownWithButtons_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ActionDropdownWithButtons_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ActionDropdownWithButtons.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ActionDropdownWithButtons.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/ActionDropdownWithButtons.vue?vue&type=template&id=6b095319":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/ActionDropdownWithButtons.vue?vue&type=template&id=6b095319 ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ActionDropdownWithButtons_vue_vue_type_template_id_6b095319__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ActionDropdownWithButtons_vue_vue_type_template_id_6b095319__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ActionDropdownWithButtons.vue?vue&type=template&id=6b095319 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ActionDropdownWithButtons.vue?vue&type=template&id=6b095319");


/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/***/ ((module) => {

module.exports = Vue;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./resources/js/tool.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ActionDropdownWithButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ActionDropdownWithButtons */ "./resources/js/components/ActionDropdownWithButtons.vue");

Nova.booting(function (app, store) {
  app.component('ActionDropdown', _components_ActionDropdownWithButtons__WEBPACK_IMPORTED_MODULE_0__["default"]);
});
})();

/******/ })()
;