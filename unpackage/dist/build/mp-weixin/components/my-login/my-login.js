(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/my-login/my-login"],{"2bf3":function(e,t,n){"use strict";n.r(t);var r=n("3ff7"),a=n("838c");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("542a");var u=n("f0c5"),c=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);t["default"]=c.exports},"3ff7":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r}));var r={uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(n.bind(null,"2a1e"))}},a=function(){var e=this.$createElement;this._self._c},o=[]},"542a":function(e,t,n){"use strict";var r=n("961e"),a=n.n(r);a.a},"838c":function(e,t,n){"use strict";n.r(t);var r=n("e4f2"),a=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=a.a},"961e":function(e,t,n){},e4f2:function(e,t,n){"use strict";(function(e){var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("2eee")),o=r(n("278c")),u=r(n("c973")),c=r(n("9523")),i=n("26cb");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,c.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={computed:f({},(0,i.mapState)("m_user",["redirectInfo"])),data:function(){return{}},methods:f(f({navigateBack:function(){var t=this;this.redirectInfo&&"switchTab"===this.redirectInfo.openType&&e.switchTab({url:this.redirectInfo.from,complete:function(){t.updateRedirectInfo(null)}})}},(0,i.mapMutations)("m_user",["updateUserInfo","updateToken","updateRedirectInfo"])),{},{getUserInfo:function(t){if("getUserInfo:fail auth deny"===t.detail.errMsg)return e.$showMsg("您取消了登录授权！");this.updateUserInfo(t.detail.userInfo),this.getToken(t.detail)},getToken:function(t){var n=this;return(0,u.default)(a.default.mark((function r(){var u,c,i,s,f,l,d;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.login().catch((function(e){return e}));case 2:if(u=r.sent,c=(0,o.default)(u,2),i=c[0],s=c[1],!i&&"login:ok"===s.errMsg){r.next=8;break}return r.abrupt("return",e.$showError("登录失败！"));case 8:return f={code:s.code,encryptedData:t.encryptedData,iv:t.iv,rawData:t.rawData,signature:t.signature},r.next=11,e.$http.post("/api/public/v1/users/wxlogin",f);case 11:if(l=r.sent,d=l.data,200===d.meta.status){r.next=15;break}return r.abrupt("return",e.$showMsg("登录成功"));case 15:n.updateToken(d.message.token),e.$showMsg("登录成功"),n.navigateBack();case 18:case"end":return r.stop()}}),r)})))()}})};t.default=l}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/my-login/my-login-create-component',
    {
        'components/my-login/my-login-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2bf3"))
        })
    },
    [['components/my-login/my-login-create-component']]
]);