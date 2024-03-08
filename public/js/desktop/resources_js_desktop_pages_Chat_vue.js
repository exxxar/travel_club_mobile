"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_desktop_pages_Chat_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Chat.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Chat.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      message_text: '',
      audio_record: null,
      image_record: null,
      file_record: null,
      message_mode: 'text',
      preview: '',
      message_loading: false,
      flag: false,
      seconds: 0,
      interval: '',
      files: [],
      currentChat: {},
      chatMessages: [],
      emojiPanel: false,
      currentRef: {},
      loading: false,
      totalChatHeight: 0,
      search: '',
      results: [],
      options: {
        // minMatchCharLength: 2,
        shouldSort: true,
        threshold: 0.2,
        keys: ['manager_title', 'client_title']
      },
      new_chat: {
        name: '',
        user: null
      },
      load: false
    };
  },
  mounted: function mounted() {
    this.chatMessages = [];
    // this.$store.dispatch('loadUserChats').then(()=>{
    //     this.loadChat()
    // })
    this.loadChat();
    this.getUser();
    console.log('this.chatMessages', this.chatMessages);
    console.log('this.currentChat', this.currentChat);
  },
  computed: {
    messages: function messages() {
      return this.chatMessages;
    },
    chats: function chats() {
      return this.$store.getters.chats;
    },
    user: function user() {
      return this.$store.getters.user;
    },
    available_users: function available_users() {
      return this.$store.getters.available_users;
    },
    filteredChats: function filteredChats() {
      if (this.search.trim() === '') {
        return this.chats;
      } else {
        return this.results;
      }
    } // onNewMessageAdded () {
    //     const that = this
    //     let onNewMessageAdded = function (snapshot, newMessage = true) {
    //         let message = {};
    //         /*eslint-disable */
    //         var urlPattern = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig
    //         /*eslint-enable */
    //         message.message_text = message.message_text
    //             .replace(/&/g, '&amp;')
    //             .replace(/</g, '&lt;')
    //             .replace(/>/g, '&gt;')
    //             .replace(/"/g, '&quot;')
    //             .replace(/'/g, '&#039;')
    //         message.message_text = message.message_text.replace(urlPattern, "<a href='$1'>$1</a>")
    //         if (!newMessage) {
    //             // that.chatMessages.unshift(that.processMessage(message))
    //             that.chatMessages.unshift(message)
    //             that.scrollTo()
    //         } else {
    //             that.chatMessages.push(message)
    //             that.scrollToEnd()
    //         }
    //     }
    //     return onNewMessageAdded
    // }
  },
  watch: {
    '$route.params.id': function $routeParamsId(newId, oldId) {
      // this.currentRef.off('child_added', this.onNewMessageAdded)
      console.log('here wattch');
      this.loadChat();
    }
  },
  methods: {
    toChat: function toChat(id) {
      this.$router.push('/' + this.user.role + '/chat/' + id);
    },
    getUser: function getUser() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (_this.user) {
                _context.next = 3;
                break;
              }
              _context.next = 3;
              return _this.$store.dispatch('getUser').then(function () {});
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    loadChat: function loadChat() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(_this2.chats.length <= 0)) {
                _context2.next = 5;
                break;
              }
              _context2.next = 3;
              return _this2.$store.dispatch('loadUserChats').then(function () {
                _this2.totalChatHeight = _this2.$refs.chatContainer.scrollHeight;
                _this2.loading = false;
                _this2.load = true;
                if (_this2.$route.params.id !== undefined) {
                  _this2.chatMessages = [];
                  _this2.currentChat = _this2.chats.find(function (chat) {
                    if (chat.id == _this2.$route.params.id) {
                      return true;
                    }
                  });
                  // this.chatMessages = this.currentChat.messages;
                  _this2.currentChat.messages.forEach(function (item) {
                    _this2.onNewMessageAdded(item, false);
                  });
                  // let chatID = this.id
                  // this.currentRef = firebase.database().ref('messages').child(chatID).child('messages').limitToLast(20)
                  // this.currentRef.on('child_added', this.onNewMessageAdded)
                }
              });
            case 3:
              _context2.next = 8;
              break;
            case 5:
              _this2.totalChatHeight = _this2.$refs.chatContainer.scrollHeight;
              _this2.loading = false;
              if (_this2.$route.params.id !== undefined) {
                _this2.chatMessages = [];
                _this2.currentChat = _this2.chats.find(function (chat) {
                  if (chat.id == _this2.$route.params.id) {
                    return true;
                  }
                });
                _this2.currentChat.messages.forEach(function (item) {
                  _this2.onNewMessageAdded(item, false);
                });
              }
            case 8:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    onScroll: function onScroll() {
      var scrollValue = this.$refs.chatContainer.scrollTop;
      var that = this;
      if (scrollValue < 100 && !this.loading) {
        this.totalChatHeight = this.$refs.chatContainer.scrollHeight;
        this.loading = true;
        // let chatID = this.id
        var currentTopMessage = this.chatMessages[0];
        if (currentTopMessage === undefined) {
          this.loading = false;
          return;
        }
        // firebase.database().ref('messages').child(chatID).child('messages').orderByKey().endAt(currentTopMessage.key).limitToLast(20).once('value').then(
        //     function (snapshot) {
        //         let tempArray = []
        //         snapshot.forEach(function (item) {
        //             tempArray.push(item)
        //         })
        //         if (tempArray[0].key === tempArray[1].key) return
        //         tempArray.reverse()
        //         tempArray.forEach(function (child) { that.onNewMessageAdded(child, false) })
        that.loading = false;
        //     }
        // )
      }
    },
    processMessage: function processMessage(message) {
      /*eslint-disable */
      var imageRegex = /([^\s\']+).(?:jpg|jpeg|gif|png)/i;
      /*eslint-enable */
      if (imageRegex.test(message.message_text)) {
        message.image = imageRegex.exec(message.message_text)[0];
      }
      var emojiRegex = /((?:[\u2600-\u27BF\u2934-\uD7FF\uE000-\uFFFF]|[\uD800-\uD83B][\uDC00-\uDFFF]|\uD83C[\uDC00-\uDD8E\uDD91-\uDE51\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEFF]|\uD83E[\uDD00-\uDDFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]))/g;
      if (emojiRegex.test(message.message_text)) {
        message.message_text = message.message_text.replace(emojiRegex, '<span class="emoji">$1</span>');
      }
      return message;
    },
    onNewMessageAdded: function onNewMessageAdded(message) {
      var newMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      /*eslint-disable */
      var urlPattern = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
      /*eslint-enable */
      message.message_text = message.message_text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
      message.message_text = message.message_text.replace(urlPattern, "<a href='$1'>$1</a>");
      if (!newMessage) {
        // that.chatMessages.unshift(that.processMessage(message))
        // this.chatMessages.unshift(message)
        this.chatMessages.push(message);
        console.log('!newMessage');
        this.scrollTo();
      } else {
        this.chatMessages.push(message);
        console.log('newMessage');
        this.scrollToEnd();
      }
    },
    sendChatMessage: function sendChatMessage(type) {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var message, formData, i, file;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this3.message_loading = true;
              // if (this.message_text !== '') {
              if (_this3.audio_record != null) {
                _this3.files.push(_this3.audio_record);
              }
              if (_this3.image_record != null) {
                _this3.files.push(_this3.image_record);
              }
              if (_this3.file_record != null) {
                _this3.files.push(_this3.file_record);
              }
              message = {
                message_text: _this3.message_text,
                date: new Date().toString(),
                conversation_id: _this3.currentChat.id,
                sender_id: _this3.user.id,
                type: type,
                files: _this3.files,
                senderInfo: _this3.user.info,
                selfMessage: true
              };
              formData = new FormData();
              formData.append("message", JSON.stringify(message));
              for (i = 0; i < _this3.files.length; i++) {
                file = _this3.files[i].data;
                formData.append('files[' + i + ']', file);
              }
              _context3.next = 10;
              return _this3.$store.dispatch('sendMessage', formData).then(function (resp) {
                _this3.onNewMessageAdded(resp.data.message, true);
                _this3.$store.commit('addChatMessage', resp.data.message);
                _this3.message_loading = false;
              });
            case 10:
              _this3.clearMessage();
              // }
            case 11:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    scrollToEnd: function scrollToEnd() {
      var _this4 = this;
      this.$nextTick(function () {
        var container = _this4.$el.querySelector('.chat-container');
        container.scrollTop = container.scrollHeight;
      });
    },
    scrollTo: function scrollTo() {
      var _this5 = this;
      this.$nextTick(function () {
        var currentHeight = _this5.$refs.chatContainer.scrollHeight;
        var difference = currentHeight - _this5.totalChatHeight;
        var container = _this5.$el.querySelector('.chat-container');
        container.scrollTop = difference;
      });
    },
    addEmojiToMessage: function addEmojiToMessage(emoji) {
      this.message_text += emoji.value;
    },
    toggleEmojiPanel: function toggleEmojiPanel() {
      this.emojiPanel = !this.emojiPanel;
    },
    onStream: function onStream(stream) {
      console.log('before countSeconds');
      this.countSeconds();
      console.log('after countSeconds');
      console.log('Got a stream object:', stream);
      console.log('after stream object');
    },
    onResult: function onResult(data) {
      var time = Date.now();
      var date = new Date();
      // this.files.push({
      //     type: 'audio',
      //     name: 'record-'+time+'.mp3',
      //     src: window.URL.createObjectURL(data),
      //     data: data,
      //     date: date,
      // })
      this.audio_record = {
        type: 'audio',
        name: 'record-' + time + '.mp3',
        src: window.URL.createObjectURL(data),
        data: data,
        date: date,
        seconds: this.seconds
      };
      this.countSeconds();
      this.message_mode = 'audio';
    },
    handleFile: function handleFile() {
      var time = Date.now();
      var date = new Date();
      var uploadedFile = this.$refs.file.files;
      if (/\.(jpe?g|png|svg)$/i.test(uploadedFile[0].name)) {
        var reader = new FileReader();
        reader.addEventListener("load", function () {
          this.preview = reader.result;
        }.bind(this), false);
        reader.readAsDataURL(uploadedFile[0]);
        // this.image_record = uploadedFile[0];
        this.image_record = {
          type: 'image',
          name: uploadedFile[0].name,
          data: uploadedFile[0],
          date: date
        };
        this.message_mode = 'image';
      } else if (/\.(pdf|txt|docx|doc)$/i.test(uploadedFile[0].name)) {
        // let reader = new FileReader();
        // reader.addEventListener("load", function() {
        //     this.preview = reader.result;
        // }.bind(this), false);
        // reader.readAsDataURL(uploadedFile[0]);
        // this.file_record = uploadedFile[0];
        this.file_record = {
          type: 'file',
          name: uploadedFile[0].name,
          data: uploadedFile[0],
          date: date
        };
        this.message_mode = 'file';
        this.$nextTick(function () {
          this.preview = '/images/LOGO-1.png';
        });
      } else {
        // this.$nextTick(function() {
        //     this.preview = '/images/LOGO-1.png';
        // });
        this.sendMessage('Неверный формат файла');
        this.clearMessage();
      }
    },
    clearMessage: function clearMessage() {
      this.message_text = '';
      this.image_record = null;
      this.audio_record = null;
      this.file_record = null;
      this.message_mode = 'text';
    },
    countSeconds: function countSeconds() {
      console.log('this.flag 1', this.flag);
      this.flag = !this.flag;
      console.log('this.flag ', this.flag);
      if (this.flag == true) {
        this.seconds = 0;
        this.interval = setInterval(this.incrementSeconds, 1000);
      } else {
        clearInterval(this.interval);
        this.audio_record.seconds = this.seconds;
      }
    },
    incrementSeconds: function incrementSeconds() {
      this.seconds += 1;
    },
    runSearch: function runSearch() {
      var _this6 = this;
      if (this.search.trim() === '') {
        this.results = this.chats;
      } else {
        // if(this.search.length > 2){
        //     this.options.minMatchCharLength=this.search.length
        // }
        this.$search(this.search, this.chats, this.options).then(function (result) {
          _this6.results = [];
          result.forEach(function (item) {
            _this6.results.push(item);
          });
        });
      }
      console.log(this.results);
    },
    open: function open() {
      this.$bvModal.show("new-chat");
    },
    cancel: function cancel() {
      this.$bvModal.hide("new-chat");
    },
    createChat: function createChat() {
      var _this7 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var payload;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this7.loading = true;
              payload = {
                user_id: _this7.new_chat.user.id,
                name: _this7.new_chat.user.info.FullName
              };
              _context4.next = 4;
              return _this7.$store.dispatch('createChat', payload).then(function (resp) {
                _this7.$store.commit('addChat', resp.data.chat);
                _this7.$store.commit('removeAvailableUser', _this7.new_chat.user.id);
                _this7.loading = false;
                _this7.new_chat = {
                  name: '',
                  user: null
                };
                _this7.cancel();
              });
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    sendMessage: function sendMessage(message) {
      this.$notify({
        group: 'info',
        type: 'travel',
        title: 'Сообщение от TravelClub',
        text: message
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Chat.vue?vue&type=template&id=115e42b4&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Chat.vue?vue&type=template&id=115e42b4&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "container-fluid",
    staticStyle: {
      padding: "0"
    }
  }, [_c("b-modal", {
    attrs: {
      id: "new-chat",
      title: "Создать чат"
    },
    scopedSlots: _vm._u([{
      key: "modal-footer",
      fn: function fn() {
        return [_c("div", {
          staticClass: "w-100"
        }, [_c("b-button", {
          staticClass: "float-right",
          staticStyle: {
            background: "linear-gradient(0deg, #ffbf00 0%, #f08b23 100%)",
            "background-color": "#f08b23 !important",
            "border-color": "#f08b23 !important"
          },
          attrs: {
            disabled: _vm.new_chat.user == null || _vm.new_chat.user == "" || _vm.loading
          },
          on: {
            click: _vm.createChat
          }
        }, [_vm.loading ? _c("b-spinner", {
          attrs: {
            small: ""
          }
        }) : _vm._e(), _vm._v(" "), _vm.loading ? _c("span", {
          staticClass: "sr-only"
        }, [_vm._v("Loading...")]) : _vm._e(), _vm._v("\n                    Создать\n                ")], 1), _vm._v(" "), _c("b-button", {
          staticClass: "float-right mr-2",
          staticStyle: {
            background: "linear-gradient(0deg, #ffbf00 0%, #f08b23 100%)",
            "background-color": "#f08b23 !important",
            "border-color": "#f08b23 !important"
          },
          on: {
            click: _vm.cancel
          }
        }, [_vm._v("\n                    Отмена\n                ")])], 1)];
      },
      proxy: true
    }])
  }, [_c("div", {
    staticClass: "row w-100 mt-2 mx-auto"
  }, [_c("multiselect", {
    staticStyle: {
      "line-height": "1.5",
      "font-size": "0.765625rem",
      margin: "auto"
    },
    attrs: {
      placeholder: "Начать чат с...",
      optionHeight: 29,
      showLabels: false,
      options: _vm.available_users,
      multiple: false,
      label: "info.FullName",
      "track-by": "id",
      taggable: true,
      searchable: true,
      hideSelected: true
    },
    scopedSlots: _vm._u([{
      key: "singleLabel",
      fn: function fn(props) {
        return [_c("span", {
          staticClass: "option__title"
        }, [_vm._v(_vm._s(props.option.info.FullName))])];
      }
    }, {
      key: "option",
      fn: function fn(props) {
        return [_c("span", {
          staticClass: "option__title"
        }, [_vm._v(_vm._s(props.option.info.FullName))])];
      }
    }]),
    model: {
      value: _vm.new_chat.user,
      callback: function callback($$v) {
        _vm.$set(_vm.new_chat, "user", $$v);
      },
      expression: "new_chat.user"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row w-100 m-auto align-items-start justify-content-center"
  }, [_c("div", {
    staticClass: "col-sm-4 desktop scrollable",
    staticStyle: {
      position: "relative"
    }
  }, [_c("div", {
    staticClass: "row w-100 m-auto"
  }, [_c("div", {
    staticClass: "col-12 pt-3 px-0"
  }, [_c("div", {
    staticClass: "row w-100 mx-auto",
    staticStyle: {
      position: "sticky",
      "z-index": "3",
      top: "0px"
    }
  }, [_c("div", {
    staticClass: "col-12 p-0"
  }, [_c("div", {
    staticClass: "row w-100 m-auto justify-content-center align-items-center py-2",
    staticStyle: {
      background: "#f08b23",
      color: "white",
      "border-radius": "5px"
    }
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-sm-6"
  }, [_vm.available_users.length > 0 && _vm.user.role != "client" ? _c("span", {
    staticClass: "chat-name ml-auto mr-0",
    staticStyle: {
      "font-size": "25px",
      "float": "right"
    },
    on: {
      click: _vm.open
    }
  }, [_c("b-icon", {
    attrs: {
      icon: "plus-circle-fill"
    }
  })], 1) : _vm._e()])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 p-0"
  }, [_c("div", {
    staticClass: "row w-100 mx-auto mt-2"
  }, [_c("b-form-input", {
    staticClass: "mb-0 travel-input",
    attrs: {
      placeholder: "Поиск чата"
    },
    on: {
      input: _vm.runSearch
    },
    model: {
      value: _vm.search,
      callback: function callback($$v) {
        _vm.search = $$v;
      },
      expression: "search"
    }
  })], 1)])])]), _vm._v(" "), _vm.chats.length <= 0 && _vm.load == false ? _c("div", {
    staticClass: "col-12 pt-2 px-0"
  }, [_c("div", {
    staticClass: "row w-100 m-auto"
  }, _vm._l(5, function (n) {
    return _c("div", {
      key: n,
      staticClass: "col-12 skeleton-tr pt-2 px-0"
    }, [_c("div", {
      staticClass: "list-group"
    }, [_c("div", {
      staticClass: "list-group-item list-group-item-action flex-column align-items-start"
    }, [_c("div", {
      staticClass: "d-flex w-100 justify-content-between"
    }, [_c("div", {
      staticClass: "row m-auto w-100"
    }, [_c("div", {
      staticClass: "col-8 skeleton-tr p-2 mr-auto"
    }, [_c("tb-skeleton", {
      attrs: {
        height: 15,
        theme: "opacity",
        "bg-color": "#dcdbdc",
        shape: "radius"
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "col-2 skeleton-tr p-2 ml-auto float-right"
    }, [_c("tb-skeleton", {
      attrs: {
        height: 15,
        theme: "opacity",
        "bg-color": "#dcdbdc",
        shape: "radius"
      }
    })], 1)])]), _vm._v(" "), _c("div", [_c("div", {
      staticClass: "row m-auto w-100"
    }, [_c("div", {
      staticClass: "col-4 skeleton-tr p-2"
    }, [_c("tb-skeleton", {
      attrs: {
        height: 10,
        theme: "opacity",
        "bg-color": "#dcdbdc",
        shape: "radius"
      }
    })], 1)]), _vm._v(" "), _c("div", {
      staticClass: "row m-auto w-100"
    }, [_c("div", {
      staticClass: "col-2 skeleton-tr p-2"
    }, [_c("tb-skeleton", {
      attrs: {
        height: 5,
        theme: "opacity",
        "bg-color": "#dcdbdc",
        shape: "radius"
      }
    })], 1)])])])])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.chats.length <= 0 && _vm.load == true ? _c("div", {
    staticClass: "col-12 pt-2 px-0"
  }, [_vm._m(1)]) : _vm._e(), _vm._v(" "), _vm._l(_vm.filteredChats, function (chat) {
    return _c("div", {
      key: chat.id,
      staticClass: "col-12 pt-2 px-0"
    }, [_c("div", {
      staticClass: "list-group"
    }, [_c("div", {
      staticClass: "list-group-item list-group-item-action flex-column align-items-start",
      "class": {
        active: chat.id == _vm.$route.params.id
      },
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.toChat(chat.id);
        }
      }
    }, [_c("div", {
      staticClass: "d-flex w-100 justify-content-between"
    }, [chat.creator_id == _vm.user.id ? _c("h5", {
      staticClass: "mb-1"
    }, [_vm._v(_vm._s(chat.manager_title))]) : _c("h5", {
      staticClass: "mb-1"
    }, [_vm._v(_vm._s(chat.client_title))]), _vm._v(" "), chat.messages.length > 0 ? _c("small", [_vm._v(_vm._s(_vm._f("moment")(chat.messages[chat.messages.length - 1].created_at, "from", "now")))]) : _vm._e()]), _vm._v(" "), chat.messages.length > 0 ? _c("div", [_c("p", {
      staticClass: "mb-1 last_message"
    }, [_vm._v(_vm._s(chat.messages[chat.messages.length - 1].message_text))]), _vm._v(" "), _c("small", [_vm._v(_vm._s(chat.messages[chat.messages.length - 1].senderInfo.FirstName) + "\n                                    "), chat.messages[chat.messages.length - 1].senderInfo.MiddleName != "" || chat.messages[chat.messages.length - 1].senderInfo.MiddleName != null ? _c("span", [_vm._v("\n                                        " + _vm._s(chat.messages[chat.messages.length - 1].senderInfo.MiddleName) + "\n                                    ")]) : _vm._e()])]) : _c("div", [_c("p", {
      staticClass: "mb-1 last_message"
    }, [_vm._v("В этой беседе ещё нет сообщений")])])])])]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-8",
    staticStyle: {
      position: "relative"
    }
  }, [_c("div", {
    ref: "chatContainer",
    staticClass: "chat-container",
    on: {
      scroll: _vm.onScroll
    }
  }, [_c("message", {
    attrs: {
      messages: _vm.chatMessages
    }
  })], 1), _vm._v(" "), _vm.message_mode == "text" ? _c("div", {
    staticClass: "typer"
  }, [_c("b-button", {
    staticClass: "rounded-circle border p-0 mx-1 paperclip-button",
    attrs: {
      disabled: _vm.message_loading
    }
  }, [_c("input", {
    ref: "file",
    attrs: {
      type: "file",
      id: "file"
    },
    on: {
      change: function change($event) {
        return _vm.handleFile();
      }
    }
  }), _vm._v(" "), _c("b-icon", {
    attrs: {
      icon: "paperclip",
      scale: "2",
      "aria-hidden": "true"
    }
  })], 1), _vm._v(" "), _c("b-form-textarea", {
    staticClass: "mx-1",
    attrs: {
      id: "textarea",
      size: "sm",
      placeholder: "Напишите сообщение...",
      rows: "1",
      "max-rows": "2",
      "no-resize": ""
    },
    on: {
      keydown: function keydown($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        if ($event.ctrlKey || $event.shiftKey || $event.altKey || $event.metaKey) return null;
        $event.preventDefault();
        return _vm.sendChatMessage("text");
      }
    },
    model: {
      value: _vm.message_text,
      callback: function callback($$v) {
        _vm.message_text = $$v;
      },
      expression: "message_text"
    }
  }), _vm._v(" "), _vm.message_text.trim() == "" && _vm.message_mode == "text" ? _c("vue-record-audio", {
    staticClass: "audio-button mx-1",
    attrs: {
      mode: "press"
    },
    on: {
      stream: _vm.onStream,
      result: _vm.onResult
    }
  }) : _c("b-button", {
    staticClass: "audio-button rounded-circle p-2 mx-1 text-white border-0",
    attrs: {
      disabled: _vm.message_loading
    },
    on: {
      click: function click($event) {
        return _vm.sendChatMessage("text");
      }
    }
  }, [!_vm.message_loading ? _c("i", {
    staticClass: "bi-blank icon-send b-icon bi m-0 w-auto h-auto",
    staticStyle: {
      "font-size": "25px"
    }
  }) : _vm._e(), _vm._v(" "), _vm.message_loading ? _c("b-spinner", {
    attrs: {
      small: ""
    }
  }) : _vm._e(), _vm._v(" "), _vm.message_loading ? _c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Loading...")]) : _vm._e()], 1)], 1) : _vm._e(), _vm._v(" "), _vm.message_mode == "image" ? _c("div", {
    staticClass: "typer"
  }, [_c("b-button", {
    staticClass: "rounded-circle border p-0 mx-1 paperclip-button",
    attrs: {
      disabled: _vm.message_loading
    },
    on: {
      click: _vm.clearMessage
    }
  }, [_c("b-icon", {
    attrs: {
      icon: "x",
      scale: "2",
      "aria-hidden": "true"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "row m-auto p-2 w-100 h-100 align-items-center justify-content-center"
  }, [_c("div", {
    staticClass: "col-4 h-100 text-center"
  }, [_c("img", {
    staticClass: "preview",
    attrs: {
      src: _vm.preview
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-8 p-0 p-sm-1 p-md-2 h-100"
  }, [_c("div", {
    staticStyle: {
      "text-overflow": "ellipsis",
      overflow: "hidden",
      width: "100%",
      height: "100%"
    }
  }, [_vm._v(_vm._s(_vm.image_record.name))])])]), _vm._v(" "), _c("b-button", {
    staticClass: "audio-button rounded-circle p-2 mx-1 text-white border-0",
    attrs: {
      disabled: _vm.message_loading
    },
    on: {
      click: function click($event) {
        return _vm.sendChatMessage("image");
      }
    }
  }, [!_vm.message_loading ? _c("i", {
    staticClass: "bi-blank icon-send b-icon bi m-0 w-auto h-auto",
    staticStyle: {
      "font-size": "25px"
    }
  }) : _vm._e(), _vm._v(" "), _vm.message_loading ? _c("b-spinner", {
    attrs: {
      small: ""
    }
  }) : _vm._e(), _vm._v(" "), _vm.message_loading ? _c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Loading...")]) : _vm._e()], 1)], 1) : _vm._e(), _vm._v(" "), _vm.message_mode == "file" ? _c("div", {
    staticClass: "typer"
  }, [_c("b-button", {
    staticClass: "rounded-circle border p-0 mx-1 paperclip-button",
    attrs: {
      disabled: _vm.message_loading
    },
    on: {
      click: _vm.clearMessage
    }
  }, [_c("b-icon", {
    attrs: {
      icon: "x",
      scale: "2",
      "aria-hidden": "true"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "row m-auto p-2 w-100 h-100 align-items-center justify-content-center"
  }, [_c("div", {
    staticClass: "col-4 h-100 text-center"
  }, [_c("img", {
    staticClass: "preview",
    attrs: {
      src: _vm.preview
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-8 p-0 p-sm-1 p-md-2 h-100"
  }, [_c("div", {
    staticStyle: {
      "text-overflow": "ellipsis",
      overflow: "hidden",
      width: "100%",
      height: "100%"
    }
  }, [_vm._v(_vm._s(_vm.file_record.name))])])]), _vm._v(" "), _c("b-button", {
    staticClass: "audio-button rounded-circle p-2 mx-1 text-white border-0",
    attrs: {
      disabled: _vm.message_loading
    },
    on: {
      click: function click($event) {
        return _vm.sendChatMessage("file");
      }
    }
  }, [!_vm.message_loading ? _c("i", {
    staticClass: "bi-blank icon-send b-icon bi m-0 w-auto h-auto",
    staticStyle: {
      "font-size": "25px"
    }
  }) : _vm._e(), _vm._v(" "), _vm.message_loading ? _c("b-spinner", {
    attrs: {
      small: ""
    }
  }) : _vm._e(), _vm._v(" "), _vm.message_loading ? _c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Loading...")]) : _vm._e()], 1)], 1) : _vm._e(), _vm._v(" "), _vm.message_mode == "audio" ? _c("div", {
    staticClass: "typer justify-content-between"
  }, [_c("b-button", {
    staticClass: "rounded-circle border p-0 mx-1 paperclip-button",
    attrs: {
      disabled: _vm.message_loading
    },
    on: {
      click: _vm.clearMessage
    }
  }, [_c("b-icon", {
    attrs: {
      icon: "x",
      scale: "2",
      "aria-hidden": "true"
    }
  })], 1), _vm._v(" "), _c("audio-player", {
    staticStyle: {
      width: "60%"
    },
    attrs: {
      audio: _vm.audio_record,
      type: "file"
    }
  }), _vm._v(" "), _c("b-button", {
    staticClass: "audio-button rounded-circle p-2 mx-1 text-white border-0",
    attrs: {
      disabled: _vm.message_loading
    },
    on: {
      click: function click($event) {
        return _vm.sendChatMessage("audio");
      }
    }
  }, [!_vm.message_loading ? _c("i", {
    staticClass: "bi-blank icon-send b-icon bi m-0 w-auto h-auto",
    staticStyle: {
      "font-size": "25px"
    }
  }) : _vm._e(), _vm._v(" "), _vm.message_loading ? _c("b-spinner", {
    attrs: {
      small: ""
    }
  }) : _vm._e(), _vm._v(" "), _vm.message_loading ? _c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Loading...")]) : _vm._e()], 1)], 1) : _vm._e()])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-6 col-sm-6"
  }, [_c("p", {
    staticClass: "my-auto"
  }, [_c("span", {
    staticClass: "chat-name"
  }, [_vm._v("Чаты")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row w-100 mx-auto mb-2"
  }, [_c("p", [_vm._v("Пока у Вас нет никаких чатов")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Chat.vue?vue&type=style&index=0&id=115e42b4&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Chat.vue?vue&type=style&index=0&id=115e42b4&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.form-control[data-v-115e42b4]:focus {\n    color: #495057;\n    background-color: #fff;\n    border-color: #f08b23;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(240, 139, 35, 0.25);\n}\n.last_message[data-v-115e42b4]{\n    max-height: 50px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.active[data-v-115e42b4] {\n    background: #f08b23 !important;\n    border-color: #f08b23 !important;\n}\n.scrollable[data-v-115e42b4] {\n    overflow-y: auto;\n    max-height:calc(100vh - 6.9rem);\n    /*max-height:70vh;*/\n}\n.typer[data-v-115e42b4]{\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    bottom: 0;\n    height: 4.9rem;\n    width: 100%;\n    background-color: #fff;\n    /*box-shadow: 0 -5px 10px -5px rgba(0,0,0,.2);*/\n    border: 2px solid #f08b23;\n    border-radius: 5px;\n}\n.typer input[type=text][data-v-115e42b4]{\n    position: absolute;\n    left: 2.5rem;\n    padding: 1rem;\n    width: 80%;\n    background-color: transparent;\n    border: none;\n    outline: none;\n    font-size: 1.25rem;\n}\n/*.typer button {*/\n/*    color: #fff;*/\n/*    background-color: #f8a105;*/\n/*    border-color: #f8a105;*/\n/*    outline: none !important;*/\n/*}*/\n/*.typer button:hover{*/\n/*    color: #fff;*/\n/*    background-color: #063065;*/\n/*    border-color: #063065;*/\n/*}*/\n.chat-container[data-v-115e42b4]{\n    box-sizing: border-box;\n    height: calc(95vh - 9.5rem);\n    overflow-y: auto;\n    padding: 10px;\n    /*background-color: #f2f2f2;*/\n    background-color: #fff;\n}\n.message[data-v-115e42b4]{\n    margin-bottom: 8px;\n}\n.message.own[data-v-115e42b4]{\n    text-align: right;\n}\n.message.own .content[data-v-115e42b4]{\n    background-color: #ffc890;\n}\n.chat-container .username[data-v-115e42b4]{\n    font-size: 18px;\n    font-weight: bold;\n}\n.chat-container .content[data-v-115e42b4]{\n    padding: 8px;\n    /*background-color: lightgreen;*/\n    background-color: lightskyblue;\n    border-radius: 10px;\n    display:inline-block;\n    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12);\n    max-width: 50%;\n    word-wrap: break-word;\n}\n@media (max-width: 480px) {\n.chat-container .content[data-v-115e42b4]{\n        max-width: 60%;\n}\n}\n@media screen and (max-width: 576px) {\n.chat-container[data-v-115e42b4] {\n        height: calc(95vh - 6.8rem);\n}\n}\n[data-v-115e42b4]::-webkit-file-upload-button {\n    cursor:pointer;\n}\ninput[type=\"file\"][data-v-115e42b4]{\n    /*opacity: 0;*/\n    /*width: 100%;*/\n    /*height: 70px;*/\n    /*position: absolute;*/\n    /*cursor: pointer;*/\n    opacity: 0;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n}\n.preview[data-v-115e42b4]{\n    height: 100%;\n    max-width: 90%;\n}\n.paperclip-button[data-v-115e42b4] {\n    position: relative;\n    max-width: 45px;\n    max-height: 45px;\n    width: 100%;\n    height: 100%;\n    background: transparent;\n    color: #f08b23;\n    border-color: #f08b23 !important;\n    overflow: hidden;\n}\n.paperclip-button[data-v-115e42b4]:hover {\n    color: #f08b23;\n    border-color: #f08b23 !important;\n}\n.paperclip-button[data-v-115e42b4]:active {\n    background: #f08b23 !important;\n    color: #fff !important;\n}\n.paperclip-button[data-v-115e42b4]:focus {\n    background: #f08b23 !important;\n    color: #fff !important;\n    outline: none !important;\n}\n.audio-button[data-v-115e42b4] {\n    max-width: 45px;\n    max-height: 45px;\n    height: 100%;\n    width: 100%;\n    background-color: #f08b23;\n}\n.audio-button[data-v-115e42b4]:hover {\n    background-color: #f08b23 !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Chat.vue?vue&type=style&index=1&id=115e42b4&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Chat.vue?vue&type=style&index=1&id=115e42b4&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.loading-wave-dots .wave-item:nth-child(2) {\n    margin-left: -20px;\n    animation-delay: .14s !important;\n}\n.loading-wave-dots[data-v-46b20d22] .wave-item:nth-child(3) {\n    margin-left: -4px;\n    animation-delay: .28s !important;\n}\n.loading-wave-dots[data-v-46b20d22] .wave-item:nth-child(4) {\n    margin-left: 12px;\n    animation-delay: .42s !important;\n}\n.loading-wave-dots[data-v-46b20d22] .wave-item:last-child {\n    margin-left: 28px;\n    animation-delay: .56s !important;\n}\n.loading-wave-dots .wave-item {\n    animation: wave-dots linear 2.8s infinite !important;\n}\n@keyframes wave-dots {\n0% {\n        transform: translateY(0);\n        background: #5b43f3;\n}\n10% {\n        transform: translateY(-6px);\n        background: #5b43f3;\n}\n20% {\n        transform: translateY(0);\n        background: #f3434b;\n}\n100% {\n        transform: translateY(0);\n        background: #5b43f3;\n}\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Chat.vue?vue&type=style&index=0&id=115e42b4&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Chat.vue?vue&type=style&index=0&id=115e42b4&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_115e42b4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chat.vue?vue&type=style&index=0&id=115e42b4&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Chat.vue?vue&type=style&index=0&id=115e42b4&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_115e42b4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_115e42b4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Chat.vue?vue&type=style&index=1&id=115e42b4&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Chat.vue?vue&type=style&index=1&id=115e42b4&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_1_id_115e42b4_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chat.vue?vue&type=style&index=1&id=115e42b4&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Chat.vue?vue&type=style&index=1&id=115e42b4&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_1_id_115e42b4_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_1_id_115e42b4_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/desktop/pages/Chat.vue":
/*!*********************************************!*\
  !*** ./resources/js/desktop/pages/Chat.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Chat_vue_vue_type_template_id_115e42b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chat.vue?vue&type=template&id=115e42b4&scoped=true */ "./resources/js/desktop/pages/Chat.vue?vue&type=template&id=115e42b4&scoped=true");
/* harmony import */ var _Chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chat.vue?vue&type=script&lang=js */ "./resources/js/desktop/pages/Chat.vue?vue&type=script&lang=js");
/* harmony import */ var _Chat_vue_vue_type_style_index_0_id_115e42b4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chat.vue?vue&type=style&index=0&id=115e42b4&scoped=true&lang=css */ "./resources/js/desktop/pages/Chat.vue?vue&type=style&index=0&id=115e42b4&scoped=true&lang=css");
/* harmony import */ var _Chat_vue_vue_type_style_index_1_id_115e42b4_lang_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Chat.vue?vue&type=style&index=1&id=115e42b4&lang=css */ "./resources/js/desktop/pages/Chat.vue?vue&type=style&index=1&id=115e42b4&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chat_vue_vue_type_template_id_115e42b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Chat_vue_vue_type_template_id_115e42b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "115e42b4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/Chat.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/Chat.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/desktop/pages/Chat.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chat.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Chat.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/Chat.vue?vue&type=template&id=115e42b4&scoped=true":
/*!***************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Chat.vue?vue&type=template&id=115e42b4&scoped=true ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_115e42b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_115e42b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_115e42b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chat.vue?vue&type=template&id=115e42b4&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Chat.vue?vue&type=template&id=115e42b4&scoped=true");


/***/ }),

/***/ "./resources/js/desktop/pages/Chat.vue?vue&type=style&index=0&id=115e42b4&scoped=true&lang=css":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Chat.vue?vue&type=style&index=0&id=115e42b4&scoped=true&lang=css ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_115e42b4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chat.vue?vue&type=style&index=0&id=115e42b4&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Chat.vue?vue&type=style&index=0&id=115e42b4&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/desktop/pages/Chat.vue?vue&type=style&index=1&id=115e42b4&lang=css":
/*!*****************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Chat.vue?vue&type=style&index=1&id=115e42b4&lang=css ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_1_id_115e42b4_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chat.vue?vue&type=style&index=1&id=115e42b4&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Chat.vue?vue&type=style&index=1&id=115e42b4&lang=css");


/***/ })

}]);