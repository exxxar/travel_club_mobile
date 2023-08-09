(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Chat.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Chat.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/* harmony default export */ __webpack_exports__["default"] = ({
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Chat.vue?vue&type=template&id=115e42b4&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Chat.vue?vue&type=template&id=115e42b4&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Chat.vue?vue&type=style&index=0&id=115e42b4&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Chat.vue?vue&type=style&index=0&id=115e42b4&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.form-control[data-v-115e42b4]:focus {\n    color: #495057;\n    background-color: #fff;\n    border-color: #f08b23;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(240, 139, 35, 0.25);\n}\n.last_message[data-v-115e42b4]{\n    max-height: 50px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.active[data-v-115e42b4] {\n    background: #f08b23 !important;\n    border-color: #f08b23 !important;\n}\n.scrollable[data-v-115e42b4] {\n    overflow-y: auto;\n    max-height:calc(100vh - 6.9rem);\n    /*max-height:70vh;*/\n}\n.typer[data-v-115e42b4]{\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    bottom: 0;\n    height: 4.9rem;\n    width: 100%;\n    background-color: #fff;\n    /*box-shadow: 0 -5px 10px -5px rgba(0,0,0,.2);*/\n    border: 2px solid #f08b23;\n    border-radius: 5px;\n}\n.typer input[type=text][data-v-115e42b4]{\n    position: absolute;\n    left: 2.5rem;\n    padding: 1rem;\n    width: 80%;\n    background-color: transparent;\n    border: none;\n    outline: none;\n    font-size: 1.25rem;\n}\n/*.typer button {*/\n/*    color: #fff;*/\n/*    background-color: #f8a105;*/\n/*    border-color: #f8a105;*/\n/*    outline: none !important;*/\n/*}*/\n/*.typer button:hover{*/\n/*    color: #fff;*/\n/*    background-color: #063065;*/\n/*    border-color: #063065;*/\n/*}*/\n.chat-container[data-v-115e42b4]{\n    box-sizing: border-box;\n    height: calc(95vh - 9.5rem);\n    overflow-y: auto;\n    padding: 10px;\n    /*background-color: #f2f2f2;*/\n    background-color: #fff;\n}\n.message[data-v-115e42b4]{\n    margin-bottom: 8px;\n}\n.message.own[data-v-115e42b4]{\n    text-align: right;\n}\n.message.own .content[data-v-115e42b4]{\n    background-color: #ffc890;\n}\n.chat-container .username[data-v-115e42b4]{\n    font-size: 18px;\n    font-weight: bold;\n}\n.chat-container .content[data-v-115e42b4]{\n    padding: 8px;\n    /*background-color: lightgreen;*/\n    background-color: lightskyblue;\n    border-radius: 10px;\n    display:inline-block;\n    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12);\n    max-width: 50%;\n    word-wrap: break-word;\n}\n@media (max-width: 480px) {\n.chat-container .content[data-v-115e42b4]{\n        max-width: 60%;\n}\n}\n@media screen and (max-width: 576px) {\n.chat-container[data-v-115e42b4] {\n        height: calc(95vh - 6.8rem);\n}\n}\n[data-v-115e42b4]::-webkit-file-upload-button {\n    cursor:pointer;\n}\ninput[type=\"file\"][data-v-115e42b4]{\n    /*opacity: 0;*/\n    /*width: 100%;*/\n    /*height: 70px;*/\n    /*position: absolute;*/\n    /*cursor: pointer;*/\n    opacity: 0;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n}\n.preview[data-v-115e42b4]{\n    height: 100%;\n    max-width: 90%;\n}\n.paperclip-button[data-v-115e42b4] {\n    position: relative;\n    max-width: 45px;\n    max-height: 45px;\n    width: 100%;\n    height: 100%;\n    background: transparent;\n    color: #f08b23;\n    border-color: #f08b23 !important;\n    overflow: hidden;\n}\n.paperclip-button[data-v-115e42b4]:hover {\n    color: #f08b23;\n    border-color: #f08b23 !important;\n}\n.paperclip-button[data-v-115e42b4]:active {\n    background: #f08b23 !important;\n    color: #fff !important;\n}\n.paperclip-button[data-v-115e42b4]:focus {\n    background: #f08b23 !important;\n    color: #fff !important;\n    outline: none !important;\n}\n.audio-button[data-v-115e42b4] {\n    max-width: 45px;\n    max-height: 45px;\n    height: 100%;\n    width: 100%;\n    background-color: #f08b23;\n}\n.audio-button[data-v-115e42b4]:hover {\n    background-color: #f08b23 !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Chat.vue?vue&type=style&index=1&id=115e42b4&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Chat.vue?vue&type=style&index=1&id=115e42b4&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.loading-wave-dots .wave-item:nth-child(2) {\n    margin-left: -20px;\n    animation-delay: .14s !important;\n}\n.loading-wave-dots[data-v-46b20d22] .wave-item:nth-child(3) {\n    margin-left: -4px;\n    animation-delay: .28s !important;\n}\n.loading-wave-dots[data-v-46b20d22] .wave-item:nth-child(4) {\n    margin-left: 12px;\n    animation-delay: .42s !important;\n}\n.loading-wave-dots[data-v-46b20d22] .wave-item:last-child {\n    margin-left: 28px;\n    animation-delay: .56s !important;\n}\n.loading-wave-dots .wave-item {\n    animation: wave-dots linear 2.8s infinite !important;\n}\n@keyframes wave-dots {\n0% {\n        transform: translateY(0);\n        background: #5b43f3;\n}\n10% {\n        transform: translateY(-6px);\n        background: #5b43f3;\n}\n20% {\n        transform: translateY(0);\n        background: #f3434b;\n}\n100% {\n        transform: translateY(0);\n        background: #5b43f3;\n}\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Chat.vue?vue&type=style&index=0&id=115e42b4&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Chat.vue?vue&type=style&index=0&id=115e42b4&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--8-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=style&index=0&id=115e42b4&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Chat.vue?vue&type=style&index=0&id=115e42b4&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Chat.vue?vue&type=style&index=1&id=115e42b4&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Chat.vue?vue&type=style&index=1&id=115e42b4&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--8-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=style&index=1&id=115e42b4&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Chat.vue?vue&type=style&index=1&id=115e42b4&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/desktop/pages/Chat.vue":
/*!*********************************************!*\
  !*** ./resources/js/desktop/pages/Chat.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chat_vue_vue_type_template_id_115e42b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chat.vue?vue&type=template&id=115e42b4&scoped=true& */ "./resources/js/desktop/pages/Chat.vue?vue&type=template&id=115e42b4&scoped=true&");
/* harmony import */ var _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chat.vue?vue&type=script&lang=js& */ "./resources/js/desktop/pages/Chat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Chat_vue_vue_type_style_index_0_id_115e42b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chat.vue?vue&type=style&index=0&id=115e42b4&scoped=true&lang=css& */ "./resources/js/desktop/pages/Chat.vue?vue&type=style&index=0&id=115e42b4&scoped=true&lang=css&");
/* harmony import */ var _Chat_vue_vue_type_style_index_1_id_115e42b4_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Chat.vue?vue&type=style&index=1&id=115e42b4&lang=css& */ "./resources/js/desktop/pages/Chat.vue?vue&type=style&index=1&id=115e42b4&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chat_vue_vue_type_template_id_115e42b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Chat_vue_vue_type_template_id_115e42b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "115e42b4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/Chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/Chat.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/desktop/pages/Chat.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Chat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/Chat.vue?vue&type=style&index=0&id=115e42b4&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Chat.vue?vue&type=style&index=0&id=115e42b4&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_115e42b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--8-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=style&index=0&id=115e42b4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Chat.vue?vue&type=style&index=0&id=115e42b4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_115e42b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_115e42b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_115e42b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_115e42b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/desktop/pages/Chat.vue?vue&type=style&index=1&id=115e42b4&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Chat.vue?vue&type=style&index=1&id=115e42b4&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_1_id_115e42b4_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--8-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=style&index=1&id=115e42b4&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Chat.vue?vue&type=style&index=1&id=115e42b4&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_1_id_115e42b4_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_1_id_115e42b4_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_1_id_115e42b4_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_1_id_115e42b4_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/desktop/pages/Chat.vue?vue&type=template&id=115e42b4&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Chat.vue?vue&type=template&id=115e42b4&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_115e42b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=template&id=115e42b4&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Chat.vue?vue&type=template&id=115e42b4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_115e42b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_115e42b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);