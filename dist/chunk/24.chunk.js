webpackJsonp([24,37],{

/***/ 102:
/*!****************************************************!*\
  !*** ./src/asset/imgs/ic_keyboard_arrow_right.svg ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/ic_keyboard_arrow_right.svg";

/***/ },

/***/ 201:
/*!****************************************!*\
  !*** ./src/js/components/empty_ad.vue ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!./../../../~/vue-loader/lib/style-rewriter.js!sass!./../../../~/vue-loader/lib/selector.js?type=style&index=0!./empty_ad.vue */ 202)
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../../~/vue-loader/lib/selector.js?type=template&index=0!./empty_ad.vue */ 204)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\Angular\\waibao2\\src\\js\\components\\empty_ad.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 202:
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/components/empty_ad.vue ***!
  \*********************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader?sourceMap!./../../../~/vue-loader/lib/style-rewriter.js!./../../../~/sass-loader!./../../../~/vue-loader/lib/selector.js?type=style&index=0!./empty_ad.vue */ 203);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/vue-style-loader/addStyles.js */ 22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./empty_ad.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./empty_ad.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 203:
/*!************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/components/empty_ad.vue ***!
  \************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, "#empty_ad {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-top: 1.7rem; }\n  #empty_ad img {\n    display: block;\n    width: 0.96rem;\n    height: 0.96rem;\n    /*margin-top*/ }\n  #empty_ad h5 {\n    margin: 0.16rem 0 0.04rem;\n    font-size: 0.15rem; }\n  #empty_ad p {\n    font-size: 0.13rem;\n    color: rgba(0, 0, 0, 0.54);\n    margin-bottom: 0.16rem; }\n  #empty_ad a {\n    /*display: block;*/\n    font-size: 0.15rem;\n    color: #ff6b00;\n    padding: 0.04rem .16rem;\n    border: 1px solid #ff6b00;\n    border-radius: .04rem; }\n", "", {"version":3,"sources":["/./src/js/components/empty_ad.vue"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,6BAAuB;EAAvB,8BAAuB;MAAvB,2BAAuB;UAAvB,uBAAuB;EACvB,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;EACxB,0BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,oBAAoB,EAAE;EACtB;IACE,eAAe;IACf,eAAe;IACf,gBAAgB;IAChB,cAAc,EAAE;EAClB;IACE,0BAA0B;IAC1B,mBAAmB,EAAE;EACvB;IACE,mBAAmB;IACnB,2BAA2B;IAC3B,uBAAuB,EAAE;EAC3B;IACE,mBAAmB;IACnB,mBAAmB;IACnB,eAAe;IACf,wBAAwB;IACxB,0BAA0B;IAC1B,sBAAsB,EAAE","file":"empty_ad.vue","sourcesContent":["#empty_ad {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 1.7rem; }\n  #empty_ad img {\n    display: block;\n    width: 0.96rem;\n    height: 0.96rem;\n    /*margin-top*/ }\n  #empty_ad h5 {\n    margin: 0.16rem 0 0.04rem;\n    font-size: 0.15rem; }\n  #empty_ad p {\n    font-size: 0.13rem;\n    color: rgba(0, 0, 0, 0.54);\n    margin-bottom: 0.16rem; }\n  #empty_ad a {\n    /*display: block;*/\n    font-size: 0.15rem;\n    color: #ff6b00;\n    padding: 0.04rem .16rem;\n    border: 1px solid #ff6b00;\n    border-radius: .04rem; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 204:
/*!*****************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/empty_ad.vue ***!
  \*****************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div id=\"empty_ad\">\n    <img src=\"" + __webpack_require__(/*! ../../asset/imgs/ic-no-address-copy.svg */ 205) + "\" alt=\"\"/>\n    <p>收货地址为空</p>\n    <a v-link=\"{name:'addAd'}\" role=\"button\">新增地址</a>\n</div>\n";

/***/ },

/***/ 205:
/*!***********************************************!*\
  !*** ./src/asset/imgs/ic-no-address-copy.svg ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/ic-no-address-copy.svg";

/***/ },

/***/ 207:
/*!******************************************!*\
  !*** ./src/asset/imgs/ic_arrow_back.svg ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/ic_arrow_back.svg";

/***/ },

/***/ 208:
/*!**********************************************!*\
  !*** ./src/js/page_vue/address/manageAd.vue ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!./../../../../~/vue-loader/lib/style-rewriter.js!sass!./../../../../~/vue-loader/lib/selector.js?type=style&index=0!./manageAd.vue */ 209)
	__vue_script__ = __webpack_require__(/*! !babel-loader!./../../../../~/vue-loader/lib/selector.js?type=script&index=0!./manageAd.vue */ 211)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\page_vue\\address\\manageAd.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../../../~/vue-loader/lib/selector.js?type=template&index=0!./manageAd.vue */ 212)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\Angular\\waibao2\\src\\js\\page_vue\\address\\manageAd.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 209:
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/page_vue/address/manageAd.vue ***!
  \***************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader?sourceMap!./../../../../~/vue-loader/lib/style-rewriter.js!./../../../../~/sass-loader!./../../../../~/vue-loader/lib/selector.js?type=style&index=0!./manageAd.vue */ 210);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/vue-style-loader/addStyles.js */ 22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./manageAd.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./manageAd.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 210:
/*!******************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/page_vue/address/manageAd.vue ***!
  \******************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, "#manageAd .item {\n  padding: 0.12rem 0.16rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  background: #fff;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n  #manageAd .item img {\n    margin-left: 0.16rem; }\n  #manageAd .item .ad_left {\n    -webkit-box-flex: 1;\n        -ms-flex: auto;\n            flex: auto; }\n  #manageAd .item .use_ad_msg {\n    font-weight: bold;\n    margin-bottom: 0.06rem; }\n    #manageAd .item .use_ad_msg .ad_r {\n      float: right; }\n", "", {"version":3,"sources":["/./src/js/page_vue/address/manageAd.vue"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,0BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,0BAA+B;MAA/B,uBAA+B;UAA/B,+BAA+B;EAC/B,iBAAiB;EACjB,6CAA6C,EAAE;EAC/C;IACE,qBAAqB,EAAE;EACzB;IACE,oBAAW;QAAX,eAAW;YAAX,WAAW,EAAE;EACf;IACE,kBAAkB;IAClB,uBAAuB,EAAE;IACzB;MACE,aAAa,EAAE","file":"manageAd.vue","sourcesContent":["#manageAd .item {\n  padding: 0.12rem 0.16rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #fff;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n  #manageAd .item img {\n    margin-left: 0.16rem; }\n  #manageAd .item .ad_left {\n    flex: auto; }\n  #manageAd .item .use_ad_msg {\n    font-weight: bold;\n    margin-bottom: 0.06rem; }\n    #manageAd .item .use_ad_msg .ad_r {\n      float: right; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 211:
/*!******************************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/js/page_vue/address/manageAd.vue ***!
  \******************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _base_data = __webpack_require__(/*! ../../store/base_data.js */ 12);
	
	var _base_data2 = _interopRequireDefault(_base_data);
	
	var _empty_ad = __webpack_require__(/*! ../../components/empty_ad.vue */ 201);
	
	var _empty_ad2 = _interopRequireDefault(_empty_ad);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	// <!--管理收货地址-->
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            currentView: ''
	        };
	    },
	
	    components: {
	        emptyAd: _empty_ad2.default
	    },
	    methods: {
	        get_allAd: function get_allAd() {
	            this.$http.post(_base_data2.default.store.state.baseUrl + 'Address/getAllAddress', { "token": "xtongtong", "openid": _base_data2.default.store.state.openId }, { "emulateJSON": true, "emulateHTTP": true }).then(function (res) {
	                var res = JSON.parse(res.data);
	                if (res.resp_code == 100) {
	                    if (res.address[0]) {
	                        this.currentView = '';
	                        this.$set('manage_address', res);
	                    } else {
	                        this.currentView = 'emptyAd';
	                    }
	                }
	            }, function (err) {
	                console.log(err);
	            });
	        },
	        goChooseAd: function goChooseAd() {
	            this.$route.router.go({ name: "chooseAd" });
	        }
	    },
	    ready: function ready() {
	        this.get_allAd();
	    }
	};
	// </script>
	//
	// <template>
	//     <div id="manageAd">
	//         <header class="common_header">
	//             <img @click="goChooseAd" src="../../../asset/imgs/ic_arrow_back.svg" class="s_icon" alt=""/>
	//             <span>收货地址管理</span>
	//             <a v-link="{ name: 'addAd'}">新增</a>
	//         </header>
	//
	//         <component :is="currentView" >
	//
	//         </component>
	//
	//         <a v-link="{name:'changeAd',params:{addressId:address_item.address_id} }"  class="item" v-for="address_item in manage_address.address">
	//             <div class="ad_left">
	//                 <p class="use_ad_msg">
	//                     <span class="ad_l">{{address_item.name}}</span>
	//                     <span class="ad_r">{{address_item.mobile}}</span>
	//                 </p>
	//                 <p>{{address_item.address}}</p>
	//             </div>
	//
	//             <img src="../../../asset/imgs/ic_keyboard_arrow_right.svg" class="s_icon" alt=""/>
	//         </a>
	//     </div>
	// </template>
	//
	// <style lang="sass">
	//     #manageAd{
	//
	//
	//
	//         .item{
	//             padding:0.12rem 0.16rem;
	//             display: flex;
	//             align-items:center;
	//             justify-content:space-between;
	//             background:#fff;
	//             border-bottom:1px solid rgba(0,0,0,.12);
	//             img{
	//                 margin-left: 0.16rem;
	//             }
	//
	//             .ad_left{
	//                 flex: auto;
	//             }
	//
	//             .use_ad_msg{
	//                 font-weight: bold;
	//                 margin-bottom:0.06rem;
	//                 .ad_r{
	//                     float: right;
	//                 }
	//             }
	//         }
	//     }
	// </style>
	/* generated by vue-loader */

/***/ },

/***/ 212:
/*!***********************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/js/page_vue/address/manageAd.vue ***!
  \***********************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div id=\"manageAd\">\n    <header class=\"common_header\">\n        <img @click=\"goChooseAd\" src=\"" + __webpack_require__(/*! ../../../asset/imgs/ic_arrow_back.svg */ 207) + "\" class=\"s_icon\" alt=\"\"/>\n        <span>收货地址管理</span>\n        <a v-link=\"{ name: 'addAd'}\">新增</a>\n    </header>\n\n    <component :is=\"currentView\" >\n\n    </component>\n\n    <a v-link=\"{name:'changeAd',params:{addressId:address_item.address_id} }\"  class=\"item\" v-for=\"address_item in manage_address.address\">\n        <div class=\"ad_left\">\n            <p class=\"use_ad_msg\">\n                <span class=\"ad_l\">{{address_item.name}}</span>\n                <span class=\"ad_r\">{{address_item.mobile}}</span>\n            </p>\n            <p>{{address_item.address}}</p>\n        </div>\n\n        <img src=\"" + __webpack_require__(/*! ../../../asset/imgs/ic_keyboard_arrow_right.svg */ 102) + "\" class=\"s_icon\" alt=\"\"/>\n    </a>\n</div>\n";

/***/ }

});
//# sourceMappingURL=24.chunk.js.map