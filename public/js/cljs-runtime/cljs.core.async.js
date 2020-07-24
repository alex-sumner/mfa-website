goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30136 = arguments.length;
switch (G__30136) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30144 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30144 = (function (f,blockable,meta30145){
this.f = f;
this.blockable = blockable;
this.meta30145 = meta30145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30146,meta30145__$1){
var self__ = this;
var _30146__$1 = this;
return (new cljs.core.async.t_cljs$core$async30144(self__.f,self__.blockable,meta30145__$1));
}));

(cljs.core.async.t_cljs$core$async30144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30146){
var self__ = this;
var _30146__$1 = this;
return self__.meta30145;
}));

(cljs.core.async.t_cljs$core$async30144.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30144.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30144.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30144.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30145","meta30145",-207215959,null)], null);
}));

(cljs.core.async.t_cljs$core$async30144.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30144.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30144");

(cljs.core.async.t_cljs$core$async30144.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30144");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30144.
 */
cljs.core.async.__GT_t_cljs$core$async30144 = (function cljs$core$async$__GT_t_cljs$core$async30144(f__$1,blockable__$1,meta30145){
return (new cljs.core.async.t_cljs$core$async30144(f__$1,blockable__$1,meta30145));
});

}

return (new cljs.core.async.t_cljs$core$async30144(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30190 = arguments.length;
switch (G__30190) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30219 = arguments.length;
switch (G__30219) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30249 = arguments.length;
switch (G__30249) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33242 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33242) : fn1.call(null,val_33242));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33242) : fn1.call(null,val_33242));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30309 = arguments.length;
switch (G__30309) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___33267 = n;
var x_33268 = (0);
while(true){
if((x_33268 < n__4666__auto___33267)){
(a[x_33268] = x_33268);

var G__33269 = (x_33268 + (1));
x_33268 = G__33269;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30331 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30331 = (function (flag,meta30332){
this.flag = flag;
this.meta30332 = meta30332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30333,meta30332__$1){
var self__ = this;
var _30333__$1 = this;
return (new cljs.core.async.t_cljs$core$async30331(self__.flag,meta30332__$1));
}));

(cljs.core.async.t_cljs$core$async30331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30333){
var self__ = this;
var _30333__$1 = this;
return self__.meta30332;
}));

(cljs.core.async.t_cljs$core$async30331.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30331.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30331.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30331.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30332","meta30332",1508635366,null)], null);
}));

(cljs.core.async.t_cljs$core$async30331.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30331.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30331");

(cljs.core.async.t_cljs$core$async30331.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30331");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30331.
 */
cljs.core.async.__GT_t_cljs$core$async30331 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30331(flag__$1,meta30332){
return (new cljs.core.async.t_cljs$core$async30331(flag__$1,meta30332));
});

}

return (new cljs.core.async.t_cljs$core$async30331(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30368 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30368 = (function (flag,cb,meta30369){
this.flag = flag;
this.cb = cb;
this.meta30369 = meta30369;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30370,meta30369__$1){
var self__ = this;
var _30370__$1 = this;
return (new cljs.core.async.t_cljs$core$async30368(self__.flag,self__.cb,meta30369__$1));
}));

(cljs.core.async.t_cljs$core$async30368.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30370){
var self__ = this;
var _30370__$1 = this;
return self__.meta30369;
}));

(cljs.core.async.t_cljs$core$async30368.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30368.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30368.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30368.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30368.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30369","meta30369",228398107,null)], null);
}));

(cljs.core.async.t_cljs$core$async30368.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30368.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30368");

(cljs.core.async.t_cljs$core$async30368.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30368");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30368.
 */
cljs.core.async.__GT_t_cljs$core$async30368 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30368(flag__$1,cb__$1,meta30369){
return (new cljs.core.async.t_cljs$core$async30368(flag__$1,cb__$1,meta30369));
});

}

return (new cljs.core.async.t_cljs$core$async30368(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30464_SHARP_){
var G__30472 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30464_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30472) : fret.call(null,G__30472));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30465_SHARP_){
var G__30473 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30465_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30473) : fret.call(null,G__30473));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33309 = (i + (1));
i = G__33309;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33310 = arguments.length;
var i__4790__auto___33313 = (0);
while(true){
if((i__4790__auto___33313 < len__4789__auto___33310)){
args__4795__auto__.push((arguments[i__4790__auto___33313]));

var G__33314 = (i__4790__auto___33313 + (1));
i__4790__auto___33313 = G__33314;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30486){
var map__30487 = p__30486;
var map__30487__$1 = (((((!((map__30487 == null))))?(((((map__30487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30487):map__30487);
var opts = map__30487__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30479){
var G__30480 = cljs.core.first(seq30479);
var seq30479__$1 = cljs.core.next(seq30479);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30480,seq30479__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30532 = arguments.length;
switch (G__30532) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29902__auto___33339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29903__auto__ = (function (){var switch__29561__auto__ = (function (state_30597){
var state_val_30598 = (state_30597[(1)]);
if((state_val_30598 === (7))){
var inst_30589 = (state_30597[(2)]);
var state_30597__$1 = state_30597;
var statearr_30608_33346 = state_30597__$1;
(statearr_30608_33346[(2)] = inst_30589);

(statearr_30608_33346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30598 === (1))){
var state_30597__$1 = state_30597;
var statearr_30611_33351 = state_30597__$1;
(statearr_30611_33351[(2)] = null);

(statearr_30611_33351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30598 === (4))){
var inst_30563 = (state_30597[(7)]);
var inst_30563__$1 = (state_30597[(2)]);
var inst_30570 = (inst_30563__$1 == null);
var state_30597__$1 = (function (){var statearr_30616 = state_30597;
(statearr_30616[(7)] = inst_30563__$1);

return statearr_30616;
})();
if(cljs.core.truth_(inst_30570)){
var statearr_30617_33357 = state_30597__$1;
(statearr_30617_33357[(1)] = (5));

} else {
var statearr_30618_33359 = state_30597__$1;
(statearr_30618_33359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30598 === (13))){
var state_30597__$1 = state_30597;
var statearr_30619_33362 = state_30597__$1;
(statearr_30619_33362[(2)] = null);

(statearr_30619_33362[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30598 === (6))){
var inst_30563 = (state_30597[(7)]);
var state_30597__$1 = state_30597;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30597__$1,(11),to,inst_30563);
} else {
if((state_val_30598 === (3))){
var inst_30595 = (state_30597[(2)]);
var state_30597__$1 = state_30597;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30597__$1,inst_30595);
} else {
if((state_val_30598 === (12))){
var state_30597__$1 = state_30597;
var statearr_30636_33365 = state_30597__$1;
(statearr_30636_33365[(2)] = null);

(statearr_30636_33365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30598 === (2))){
var state_30597__$1 = state_30597;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30597__$1,(4),from);
} else {
if((state_val_30598 === (11))){
var inst_30582 = (state_30597[(2)]);
var state_30597__$1 = state_30597;
if(cljs.core.truth_(inst_30582)){
var statearr_30638_33374 = state_30597__$1;
(statearr_30638_33374[(1)] = (12));

} else {
var statearr_30639_33375 = state_30597__$1;
(statearr_30639_33375[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30598 === (9))){
var state_30597__$1 = state_30597;
var statearr_30642_33377 = state_30597__$1;
(statearr_30642_33377[(2)] = null);

(statearr_30642_33377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30598 === (5))){
var state_30597__$1 = state_30597;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30643_33378 = state_30597__$1;
(statearr_30643_33378[(1)] = (8));

} else {
var statearr_30644_33379 = state_30597__$1;
(statearr_30644_33379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30598 === (14))){
var inst_30587 = (state_30597[(2)]);
var state_30597__$1 = state_30597;
var statearr_30652_33380 = state_30597__$1;
(statearr_30652_33380[(2)] = inst_30587);

(statearr_30652_33380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30598 === (10))){
var inst_30576 = (state_30597[(2)]);
var state_30597__$1 = state_30597;
var statearr_30654_33381 = state_30597__$1;
(statearr_30654_33381[(2)] = inst_30576);

(statearr_30654_33381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30598 === (8))){
var inst_30573 = cljs.core.async.close_BANG_(to);
var state_30597__$1 = state_30597;
var statearr_30661_33382 = state_30597__$1;
(statearr_30661_33382[(2)] = inst_30573);

(statearr_30661_33382[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29562__auto__ = null;
var cljs$core$async$state_machine__29562__auto____0 = (function (){
var statearr_30675 = [null,null,null,null,null,null,null,null];
(statearr_30675[(0)] = cljs$core$async$state_machine__29562__auto__);

(statearr_30675[(1)] = (1));

return statearr_30675;
});
var cljs$core$async$state_machine__29562__auto____1 = (function (state_30597){
while(true){
var ret_value__29563__auto__ = (function (){try{while(true){
var result__29564__auto__ = switch__29561__auto__(state_30597);
if(cljs.core.keyword_identical_QMARK_(result__29564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29564__auto__;
}
break;
}
}catch (e30684){if((e30684 instanceof Object)){
var ex__29565__auto__ = e30684;
var statearr_30694_33384 = state_30597;
(statearr_30694_33384[(5)] = ex__29565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30684;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33385 = state_30597;
state_30597 = G__33385;
continue;
} else {
return ret_value__29563__auto__;
}
break;
}
});
cljs$core$async$state_machine__29562__auto__ = function(state_30597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29562__auto____1.call(this,state_30597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29562__auto____0;
cljs$core$async$state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29562__auto____1;
return cljs$core$async$state_machine__29562__auto__;
})()
})();
var state__29904__auto__ = (function (){var statearr_30706 = f__29903__auto__();
(statearr_30706[(6)] = c__29902__auto___33339);

return statearr_30706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29904__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30739){
var vec__30743 = p__30739;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30743,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30743,(1),null);
var job = vec__30743;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29902__auto___33388 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29903__auto__ = (function (){var switch__29561__auto__ = (function (state_30759){
var state_val_30760 = (state_30759[(1)]);
if((state_val_30760 === (1))){
var state_30759__$1 = state_30759;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30759__$1,(2),res,v);
} else {
if((state_val_30760 === (2))){
var inst_30753 = (state_30759[(2)]);
var inst_30754 = cljs.core.async.close_BANG_(res);
var state_30759__$1 = (function (){var statearr_30762 = state_30759;
(statearr_30762[(7)] = inst_30753);

return statearr_30762;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30759__$1,inst_30754);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29562__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29562__auto____0 = (function (){
var statearr_30768 = [null,null,null,null,null,null,null,null];
(statearr_30768[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29562__auto__);

(statearr_30768[(1)] = (1));

return statearr_30768;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29562__auto____1 = (function (state_30759){
while(true){
var ret_value__29563__auto__ = (function (){try{while(true){
var result__29564__auto__ = switch__29561__auto__(state_30759);
if(cljs.core.keyword_identical_QMARK_(result__29564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29564__auto__;
}
break;
}
}catch (e30775){if((e30775 instanceof Object)){
var ex__29565__auto__ = e30775;
var statearr_30776_33396 = state_30759;
(statearr_30776_33396[(5)] = ex__29565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30775;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33399 = state_30759;
state_30759 = G__33399;
continue;
} else {
return ret_value__29563__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29562__auto__ = function(state_30759){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29562__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29562__auto____1.call(this,state_30759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29562__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29562__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29562__auto__;
})()
})();
var state__29904__auto__ = (function (){var statearr_30787 = f__29903__auto__();
(statearr_30787[(6)] = c__29902__auto___33388);

return statearr_30787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29904__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30791){
var vec__30795 = p__30791;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30795,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30795,(1),null);
var job = vec__30795;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___33408 = n;
var __33409 = (0);
while(true){
if((__33409 < n__4666__auto___33408)){
var G__30806_33410 = type;
var G__30806_33411__$1 = (((G__30806_33410 instanceof cljs.core.Keyword))?G__30806_33410.fqn:null);
switch (G__30806_33411__$1) {
case "compute":
var c__29902__auto___33413 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33409,c__29902__auto___33413,G__30806_33410,G__30806_33411__$1,n__4666__auto___33408,jobs,results,process,async){
return (function (){
var f__29903__auto__ = (function (){var switch__29561__auto__ = ((function (__33409,c__29902__auto___33413,G__30806_33410,G__30806_33411__$1,n__4666__auto___33408,jobs,results,process,async){
return (function (state_30820){
var state_val_30821 = (state_30820[(1)]);
if((state_val_30821 === (1))){
var state_30820__$1 = state_30820;
var statearr_30830_33414 = state_30820__$1;
(statearr_30830_33414[(2)] = null);

(statearr_30830_33414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30821 === (2))){
var state_30820__$1 = state_30820;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30820__$1,(4),jobs);
} else {
if((state_val_30821 === (3))){
var inst_30818 = (state_30820[(2)]);
var state_30820__$1 = state_30820;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30820__$1,inst_30818);
} else {
if((state_val_30821 === (4))){
var inst_30810 = (state_30820[(2)]);
var inst_30811 = process(inst_30810);
var state_30820__$1 = state_30820;
if(cljs.core.truth_(inst_30811)){
var statearr_30836_33416 = state_30820__$1;
(statearr_30836_33416[(1)] = (5));

} else {
var statearr_30837_33417 = state_30820__$1;
(statearr_30837_33417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30821 === (5))){
var state_30820__$1 = state_30820;
var statearr_30843_33418 = state_30820__$1;
(statearr_30843_33418[(2)] = null);

(statearr_30843_33418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30821 === (6))){
var state_30820__$1 = state_30820;
var statearr_30844_33420 = state_30820__$1;
(statearr_30844_33420[(2)] = null);

(statearr_30844_33420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30821 === (7))){
var inst_30816 = (state_30820[(2)]);
var state_30820__$1 = state_30820;
var statearr_30846_33422 = state_30820__$1;
(statearr_30846_33422[(2)] = inst_30816);

(statearr_30846_33422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33409,c__29902__auto___33413,G__30806_33410,G__30806_33411__$1,n__4666__auto___33408,jobs,results,process,async))
;
return ((function (__33409,switch__29561__auto__,c__29902__auto___33413,G__30806_33410,G__30806_33411__$1,n__4666__auto___33408,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29562__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29562__auto____0 = (function (){
var statearr_30850 = [null,null,null,null,null,null,null];
(statearr_30850[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29562__auto__);

(statearr_30850[(1)] = (1));

return statearr_30850;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29562__auto____1 = (function (state_30820){
while(true){
var ret_value__29563__auto__ = (function (){try{while(true){
var result__29564__auto__ = switch__29561__auto__(state_30820);
if(cljs.core.keyword_identical_QMARK_(result__29564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29564__auto__;
}
break;
}
}catch (e30851){if((e30851 instanceof Object)){
var ex__29565__auto__ = e30851;
var statearr_30853_33425 = state_30820;
(statearr_30853_33425[(5)] = ex__29565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30851;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33427 = state_30820;
state_30820 = G__33427;
continue;
} else {
return ret_value__29563__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29562__auto__ = function(state_30820){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29562__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29562__auto____1.call(this,state_30820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29562__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29562__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29562__auto__;
})()
;})(__33409,switch__29561__auto__,c__29902__auto___33413,G__30806_33410,G__30806_33411__$1,n__4666__auto___33408,jobs,results,process,async))
})();
var state__29904__auto__ = (function (){var statearr_30856 = f__29903__auto__();
(statearr_30856[(6)] = c__29902__auto___33413);

return statearr_30856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29904__auto__);
});})(__33409,c__29902__auto___33413,G__30806_33410,G__30806_33411__$1,n__4666__auto___33408,jobs,results,process,async))
);


break;
case "async":
var c__29902__auto___33428 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33409,c__29902__auto___33428,G__30806_33410,G__30806_33411__$1,n__4666__auto___33408,jobs,results,process,async){
return (function (){
var f__29903__auto__ = (function (){var switch__29561__auto__ = ((function (__33409,c__29902__auto___33428,G__30806_33410,G__30806_33411__$1,n__4666__auto___33408,jobs,results,process,async){
return (function (state_30869){
var state_val_30870 = (state_30869[(1)]);
if((state_val_30870 === (1))){
var state_30869__$1 = state_30869;
var statearr_30874_33432 = state_30869__$1;
(statearr_30874_33432[(2)] = null);

(statearr_30874_33432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30870 === (2))){
var state_30869__$1 = state_30869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30869__$1,(4),jobs);
} else {
if((state_val_30870 === (3))){
var inst_30867 = (state_30869[(2)]);
var state_30869__$1 = state_30869;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30869__$1,inst_30867);
} else {
if((state_val_30870 === (4))){
var inst_30859 = (state_30869[(2)]);
var inst_30860 = async(inst_30859);
var state_30869__$1 = state_30869;
if(cljs.core.truth_(inst_30860)){
var statearr_30877_33436 = state_30869__$1;
(statearr_30877_33436[(1)] = (5));

} else {
var statearr_30878_33439 = state_30869__$1;
(statearr_30878_33439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30870 === (5))){
var state_30869__$1 = state_30869;
var statearr_30879_33443 = state_30869__$1;
(statearr_30879_33443[(2)] = null);

(statearr_30879_33443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30870 === (6))){
var state_30869__$1 = state_30869;
var statearr_30881_33449 = state_30869__$1;
(statearr_30881_33449[(2)] = null);

(statearr_30881_33449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30870 === (7))){
var inst_30865 = (state_30869[(2)]);
var state_30869__$1 = state_30869;
var statearr_30882_33454 = state_30869__$1;
(statearr_30882_33454[(2)] = inst_30865);

(statearr_30882_33454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33409,c__29902__auto___33428,G__30806_33410,G__30806_33411__$1,n__4666__auto___33408,jobs,results,process,async))
;
return ((function (__33409,switch__29561__auto__,c__29902__auto___33428,G__30806_33410,G__30806_33411__$1,n__4666__auto___33408,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29562__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29562__auto____0 = (function (){
var statearr_30883 = [null,null,null,null,null,null,null];
(statearr_30883[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29562__auto__);

(statearr_30883[(1)] = (1));

return statearr_30883;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29562__auto____1 = (function (state_30869){
while(true){
var ret_value__29563__auto__ = (function (){try{while(true){
var result__29564__auto__ = switch__29561__auto__(state_30869);
if(cljs.core.keyword_identical_QMARK_(result__29564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29564__auto__;
}
break;
}
}catch (e30884){if((e30884 instanceof Object)){
var ex__29565__auto__ = e30884;
var statearr_30885_33464 = state_30869;
(statearr_30885_33464[(5)] = ex__29565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30884;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33465 = state_30869;
state_30869 = G__33465;
continue;
} else {
return ret_value__29563__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29562__auto__ = function(state_30869){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29562__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29562__auto____1.call(this,state_30869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29562__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29562__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29562__auto__;
})()
;})(__33409,switch__29561__auto__,c__29902__auto___33428,G__30806_33410,G__30806_33411__$1,n__4666__auto___33408,jobs,results,process,async))
})();
var state__29904__auto__ = (function (){var statearr_30886 = f__29903__auto__();
(statearr_30886[(6)] = c__29902__auto___33428);

return statearr_30886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29904__auto__);
});})(__33409,c__29902__auto___33428,G__30806_33410,G__30806_33411__$1,n__4666__auto___33408,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30806_33411__$1)].join('')));

}

var G__33466 = (__33409 + (1));
__33409 = G__33466;
continue;
} else {
}
break;
}

var c__29902__auto___33467 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29903__auto__ = (function (){var switch__29561__auto__ = (function (state_30920){
var state_val_30921 = (state_30920[(1)]);
if((state_val_30921 === (7))){
var inst_30916 = (state_30920[(2)]);
var state_30920__$1 = state_30920;
var statearr_30924_33469 = state_30920__$1;
(statearr_30924_33469[(2)] = inst_30916);

(statearr_30924_33469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (1))){
var state_30920__$1 = state_30920;
var statearr_30925_33471 = state_30920__$1;
(statearr_30925_33471[(2)] = null);

(statearr_30925_33471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (4))){
var inst_30891 = (state_30920[(7)]);
var inst_30891__$1 = (state_30920[(2)]);
var inst_30892 = (inst_30891__$1 == null);
var state_30920__$1 = (function (){var statearr_30929 = state_30920;
(statearr_30929[(7)] = inst_30891__$1);

return statearr_30929;
})();
if(cljs.core.truth_(inst_30892)){
var statearr_30931_33472 = state_30920__$1;
(statearr_30931_33472[(1)] = (5));

} else {
var statearr_30932_33473 = state_30920__$1;
(statearr_30932_33473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (6))){
var inst_30896 = (state_30920[(8)]);
var inst_30891 = (state_30920[(7)]);
var inst_30896__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30903 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30908 = [inst_30891,inst_30896__$1];
var inst_30909 = (new cljs.core.PersistentVector(null,2,(5),inst_30903,inst_30908,null));
var state_30920__$1 = (function (){var statearr_30939 = state_30920;
(statearr_30939[(8)] = inst_30896__$1);

return statearr_30939;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30920__$1,(8),jobs,inst_30909);
} else {
if((state_val_30921 === (3))){
var inst_30918 = (state_30920[(2)]);
var state_30920__$1 = state_30920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30920__$1,inst_30918);
} else {
if((state_val_30921 === (2))){
var state_30920__$1 = state_30920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30920__$1,(4),from);
} else {
if((state_val_30921 === (9))){
var inst_30913 = (state_30920[(2)]);
var state_30920__$1 = (function (){var statearr_30944 = state_30920;
(statearr_30944[(9)] = inst_30913);

return statearr_30944;
})();
var statearr_30945_33477 = state_30920__$1;
(statearr_30945_33477[(2)] = null);

(statearr_30945_33477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (5))){
var inst_30894 = cljs.core.async.close_BANG_(jobs);
var state_30920__$1 = state_30920;
var statearr_30946_33478 = state_30920__$1;
(statearr_30946_33478[(2)] = inst_30894);

(statearr_30946_33478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (8))){
var inst_30896 = (state_30920[(8)]);
var inst_30911 = (state_30920[(2)]);
var state_30920__$1 = (function (){var statearr_30947 = state_30920;
(statearr_30947[(10)] = inst_30911);

return statearr_30947;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30920__$1,(9),results,inst_30896);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29562__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29562__auto____0 = (function (){
var statearr_30952 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30952[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29562__auto__);

(statearr_30952[(1)] = (1));

return statearr_30952;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29562__auto____1 = (function (state_30920){
while(true){
var ret_value__29563__auto__ = (function (){try{while(true){
var result__29564__auto__ = switch__29561__auto__(state_30920);
if(cljs.core.keyword_identical_QMARK_(result__29564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29564__auto__;
}
break;
}
}catch (e30955){if((e30955 instanceof Object)){
var ex__29565__auto__ = e30955;
var statearr_30956_33483 = state_30920;
(statearr_30956_33483[(5)] = ex__29565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30955;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33485 = state_30920;
state_30920 = G__33485;
continue;
} else {
return ret_value__29563__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29562__auto__ = function(state_30920){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29562__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29562__auto____1.call(this,state_30920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29562__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29562__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29562__auto__;
})()
})();
var state__29904__auto__ = (function (){var statearr_30957 = f__29903__auto__();
(statearr_30957[(6)] = c__29902__auto___33467);

return statearr_30957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29904__auto__);
}));


var c__29902__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29903__auto__ = (function (){var switch__29561__auto__ = (function (state_31002){
var state_val_31003 = (state_31002[(1)]);
if((state_val_31003 === (7))){
var inst_30998 = (state_31002[(2)]);
var state_31002__$1 = state_31002;
var statearr_31007_33492 = state_31002__$1;
(statearr_31007_33492[(2)] = inst_30998);

(statearr_31007_33492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (20))){
var state_31002__$1 = state_31002;
var statearr_31008_33495 = state_31002__$1;
(statearr_31008_33495[(2)] = null);

(statearr_31008_33495[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (1))){
var state_31002__$1 = state_31002;
var statearr_31009_33497 = state_31002__$1;
(statearr_31009_33497[(2)] = null);

(statearr_31009_33497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (4))){
var inst_30961 = (state_31002[(7)]);
var inst_30961__$1 = (state_31002[(2)]);
var inst_30962 = (inst_30961__$1 == null);
var state_31002__$1 = (function (){var statearr_31011 = state_31002;
(statearr_31011[(7)] = inst_30961__$1);

return statearr_31011;
})();
if(cljs.core.truth_(inst_30962)){
var statearr_31012_33504 = state_31002__$1;
(statearr_31012_33504[(1)] = (5));

} else {
var statearr_31013_33507 = state_31002__$1;
(statearr_31013_33507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (15))){
var inst_30974 = (state_31002[(8)]);
var state_31002__$1 = state_31002;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31002__$1,(18),to,inst_30974);
} else {
if((state_val_31003 === (21))){
var inst_30993 = (state_31002[(2)]);
var state_31002__$1 = state_31002;
var statearr_31014_33513 = state_31002__$1;
(statearr_31014_33513[(2)] = inst_30993);

(statearr_31014_33513[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (13))){
var inst_30995 = (state_31002[(2)]);
var state_31002__$1 = (function (){var statearr_31015 = state_31002;
(statearr_31015[(9)] = inst_30995);

return statearr_31015;
})();
var statearr_31016_33517 = state_31002__$1;
(statearr_31016_33517[(2)] = null);

(statearr_31016_33517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (6))){
var inst_30961 = (state_31002[(7)]);
var state_31002__$1 = state_31002;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31002__$1,(11),inst_30961);
} else {
if((state_val_31003 === (17))){
var inst_30988 = (state_31002[(2)]);
var state_31002__$1 = state_31002;
if(cljs.core.truth_(inst_30988)){
var statearr_31021_33521 = state_31002__$1;
(statearr_31021_33521[(1)] = (19));

} else {
var statearr_31031_33525 = state_31002__$1;
(statearr_31031_33525[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (3))){
var inst_31000 = (state_31002[(2)]);
var state_31002__$1 = state_31002;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31002__$1,inst_31000);
} else {
if((state_val_31003 === (12))){
var inst_30971 = (state_31002[(10)]);
var state_31002__$1 = state_31002;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31002__$1,(14),inst_30971);
} else {
if((state_val_31003 === (2))){
var state_31002__$1 = state_31002;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31002__$1,(4),results);
} else {
if((state_val_31003 === (19))){
var state_31002__$1 = state_31002;
var statearr_31036_33527 = state_31002__$1;
(statearr_31036_33527[(2)] = null);

(statearr_31036_33527[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (11))){
var inst_30971 = (state_31002[(2)]);
var state_31002__$1 = (function (){var statearr_31037 = state_31002;
(statearr_31037[(10)] = inst_30971);

return statearr_31037;
})();
var statearr_31040_33532 = state_31002__$1;
(statearr_31040_33532[(2)] = null);

(statearr_31040_33532[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (9))){
var state_31002__$1 = state_31002;
var statearr_31042_33533 = state_31002__$1;
(statearr_31042_33533[(2)] = null);

(statearr_31042_33533[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (5))){
var state_31002__$1 = state_31002;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31043_33534 = state_31002__$1;
(statearr_31043_33534[(1)] = (8));

} else {
var statearr_31044_33537 = state_31002__$1;
(statearr_31044_33537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (14))){
var inst_30974 = (state_31002[(8)]);
var inst_30974__$1 = (state_31002[(2)]);
var inst_30979 = (inst_30974__$1 == null);
var inst_30980 = cljs.core.not(inst_30979);
var state_31002__$1 = (function (){var statearr_31045 = state_31002;
(statearr_31045[(8)] = inst_30974__$1);

return statearr_31045;
})();
if(inst_30980){
var statearr_31046_33542 = state_31002__$1;
(statearr_31046_33542[(1)] = (15));

} else {
var statearr_31048_33543 = state_31002__$1;
(statearr_31048_33543[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (16))){
var state_31002__$1 = state_31002;
var statearr_31049_33544 = state_31002__$1;
(statearr_31049_33544[(2)] = false);

(statearr_31049_33544[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (10))){
var inst_30968 = (state_31002[(2)]);
var state_31002__$1 = state_31002;
var statearr_31050_33545 = state_31002__$1;
(statearr_31050_33545[(2)] = inst_30968);

(statearr_31050_33545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (18))){
var inst_30985 = (state_31002[(2)]);
var state_31002__$1 = state_31002;
var statearr_31051_33546 = state_31002__$1;
(statearr_31051_33546[(2)] = inst_30985);

(statearr_31051_33546[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (8))){
var inst_30965 = cljs.core.async.close_BANG_(to);
var state_31002__$1 = state_31002;
var statearr_31058_33551 = state_31002__$1;
(statearr_31058_33551[(2)] = inst_30965);

(statearr_31058_33551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29562__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29562__auto____0 = (function (){
var statearr_31060 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31060[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29562__auto__);

(statearr_31060[(1)] = (1));

return statearr_31060;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29562__auto____1 = (function (state_31002){
while(true){
var ret_value__29563__auto__ = (function (){try{while(true){
var result__29564__auto__ = switch__29561__auto__(state_31002);
if(cljs.core.keyword_identical_QMARK_(result__29564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29564__auto__;
}
break;
}
}catch (e31061){if((e31061 instanceof Object)){
var ex__29565__auto__ = e31061;
var statearr_31062_33554 = state_31002;
(statearr_31062_33554[(5)] = ex__29565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31061;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33555 = state_31002;
state_31002 = G__33555;
continue;
} else {
return ret_value__29563__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29562__auto__ = function(state_31002){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29562__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29562__auto____1.call(this,state_31002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29562__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29562__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29562__auto__;
})()
})();
var state__29904__auto__ = (function (){var statearr_31065 = f__29903__auto__();
(statearr_31065[(6)] = c__29902__auto__);

return statearr_31065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29904__auto__);
}));

return c__29902__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31069 = arguments.length;
switch (G__31069) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31076 = arguments.length;
switch (G__31076) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31081 = arguments.length;
switch (G__31081) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29902__auto___33587 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29903__auto__ = (function (){var switch__29561__auto__ = (function (state_31123){
var state_val_31124 = (state_31123[(1)]);
if((state_val_31124 === (7))){
var inst_31119 = (state_31123[(2)]);
var state_31123__$1 = state_31123;
var statearr_31126_33588 = state_31123__$1;
(statearr_31126_33588[(2)] = inst_31119);

(statearr_31126_33588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (1))){
var state_31123__$1 = state_31123;
var statearr_31127_33589 = state_31123__$1;
(statearr_31127_33589[(2)] = null);

(statearr_31127_33589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (4))){
var inst_31096 = (state_31123[(7)]);
var inst_31096__$1 = (state_31123[(2)]);
var inst_31097 = (inst_31096__$1 == null);
var state_31123__$1 = (function (){var statearr_31130 = state_31123;
(statearr_31130[(7)] = inst_31096__$1);

return statearr_31130;
})();
if(cljs.core.truth_(inst_31097)){
var statearr_31131_33593 = state_31123__$1;
(statearr_31131_33593[(1)] = (5));

} else {
var statearr_31132_33594 = state_31123__$1;
(statearr_31132_33594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (13))){
var state_31123__$1 = state_31123;
var statearr_31133_33596 = state_31123__$1;
(statearr_31133_33596[(2)] = null);

(statearr_31133_33596[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (6))){
var inst_31096 = (state_31123[(7)]);
var inst_31106 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31096) : p.call(null,inst_31096));
var state_31123__$1 = state_31123;
if(cljs.core.truth_(inst_31106)){
var statearr_31135_33599 = state_31123__$1;
(statearr_31135_33599[(1)] = (9));

} else {
var statearr_31136_33600 = state_31123__$1;
(statearr_31136_33600[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (3))){
var inst_31121 = (state_31123[(2)]);
var state_31123__$1 = state_31123;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31123__$1,inst_31121);
} else {
if((state_val_31124 === (12))){
var state_31123__$1 = state_31123;
var statearr_31137_33604 = state_31123__$1;
(statearr_31137_33604[(2)] = null);

(statearr_31137_33604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (2))){
var state_31123__$1 = state_31123;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31123__$1,(4),ch);
} else {
if((state_val_31124 === (11))){
var inst_31096 = (state_31123[(7)]);
var inst_31110 = (state_31123[(2)]);
var state_31123__$1 = state_31123;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31123__$1,(8),inst_31110,inst_31096);
} else {
if((state_val_31124 === (9))){
var state_31123__$1 = state_31123;
var statearr_31138_33606 = state_31123__$1;
(statearr_31138_33606[(2)] = tc);

(statearr_31138_33606[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (5))){
var inst_31099 = cljs.core.async.close_BANG_(tc);
var inst_31100 = cljs.core.async.close_BANG_(fc);
var state_31123__$1 = (function (){var statearr_31140 = state_31123;
(statearr_31140[(8)] = inst_31099);

return statearr_31140;
})();
var statearr_31145_33610 = state_31123__$1;
(statearr_31145_33610[(2)] = inst_31100);

(statearr_31145_33610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (14))){
var inst_31117 = (state_31123[(2)]);
var state_31123__$1 = state_31123;
var statearr_31150_33611 = state_31123__$1;
(statearr_31150_33611[(2)] = inst_31117);

(statearr_31150_33611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (10))){
var state_31123__$1 = state_31123;
var statearr_31155_33614 = state_31123__$1;
(statearr_31155_33614[(2)] = fc);

(statearr_31155_33614[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (8))){
var inst_31112 = (state_31123[(2)]);
var state_31123__$1 = state_31123;
if(cljs.core.truth_(inst_31112)){
var statearr_31156_33616 = state_31123__$1;
(statearr_31156_33616[(1)] = (12));

} else {
var statearr_31157_33618 = state_31123__$1;
(statearr_31157_33618[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29562__auto__ = null;
var cljs$core$async$state_machine__29562__auto____0 = (function (){
var statearr_31158 = [null,null,null,null,null,null,null,null,null];
(statearr_31158[(0)] = cljs$core$async$state_machine__29562__auto__);

(statearr_31158[(1)] = (1));

return statearr_31158;
});
var cljs$core$async$state_machine__29562__auto____1 = (function (state_31123){
while(true){
var ret_value__29563__auto__ = (function (){try{while(true){
var result__29564__auto__ = switch__29561__auto__(state_31123);
if(cljs.core.keyword_identical_QMARK_(result__29564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29564__auto__;
}
break;
}
}catch (e31160){if((e31160 instanceof Object)){
var ex__29565__auto__ = e31160;
var statearr_31161_33630 = state_31123;
(statearr_31161_33630[(5)] = ex__29565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31160;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33631 = state_31123;
state_31123 = G__33631;
continue;
} else {
return ret_value__29563__auto__;
}
break;
}
});
cljs$core$async$state_machine__29562__auto__ = function(state_31123){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29562__auto____1.call(this,state_31123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29562__auto____0;
cljs$core$async$state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29562__auto____1;
return cljs$core$async$state_machine__29562__auto__;
})()
})();
var state__29904__auto__ = (function (){var statearr_31165 = f__29903__auto__();
(statearr_31165[(6)] = c__29902__auto___33587);

return statearr_31165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29904__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29902__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29903__auto__ = (function (){var switch__29561__auto__ = (function (state_31191){
var state_val_31192 = (state_31191[(1)]);
if((state_val_31192 === (7))){
var inst_31187 = (state_31191[(2)]);
var state_31191__$1 = state_31191;
var statearr_31195_33636 = state_31191__$1;
(statearr_31195_33636[(2)] = inst_31187);

(statearr_31195_33636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31192 === (1))){
var inst_31171 = init;
var state_31191__$1 = (function (){var statearr_31196 = state_31191;
(statearr_31196[(7)] = inst_31171);

return statearr_31196;
})();
var statearr_31197_33644 = state_31191__$1;
(statearr_31197_33644[(2)] = null);

(statearr_31197_33644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31192 === (4))){
var inst_31174 = (state_31191[(8)]);
var inst_31174__$1 = (state_31191[(2)]);
var inst_31175 = (inst_31174__$1 == null);
var state_31191__$1 = (function (){var statearr_31198 = state_31191;
(statearr_31198[(8)] = inst_31174__$1);

return statearr_31198;
})();
if(cljs.core.truth_(inst_31175)){
var statearr_31199_33657 = state_31191__$1;
(statearr_31199_33657[(1)] = (5));

} else {
var statearr_31200_33663 = state_31191__$1;
(statearr_31200_33663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31192 === (6))){
var inst_31171 = (state_31191[(7)]);
var inst_31174 = (state_31191[(8)]);
var inst_31178 = (state_31191[(9)]);
var inst_31178__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31171,inst_31174) : f.call(null,inst_31171,inst_31174));
var inst_31179 = cljs.core.reduced_QMARK_(inst_31178__$1);
var state_31191__$1 = (function (){var statearr_31201 = state_31191;
(statearr_31201[(9)] = inst_31178__$1);

return statearr_31201;
})();
if(inst_31179){
var statearr_31202_33683 = state_31191__$1;
(statearr_31202_33683[(1)] = (8));

} else {
var statearr_31203_33686 = state_31191__$1;
(statearr_31203_33686[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31192 === (3))){
var inst_31189 = (state_31191[(2)]);
var state_31191__$1 = state_31191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31191__$1,inst_31189);
} else {
if((state_val_31192 === (2))){
var state_31191__$1 = state_31191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31191__$1,(4),ch);
} else {
if((state_val_31192 === (9))){
var inst_31178 = (state_31191[(9)]);
var inst_31171 = inst_31178;
var state_31191__$1 = (function (){var statearr_31205 = state_31191;
(statearr_31205[(7)] = inst_31171);

return statearr_31205;
})();
var statearr_31206_33708 = state_31191__$1;
(statearr_31206_33708[(2)] = null);

(statearr_31206_33708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31192 === (5))){
var inst_31171 = (state_31191[(7)]);
var state_31191__$1 = state_31191;
var statearr_31210_33711 = state_31191__$1;
(statearr_31210_33711[(2)] = inst_31171);

(statearr_31210_33711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31192 === (10))){
var inst_31185 = (state_31191[(2)]);
var state_31191__$1 = state_31191;
var statearr_31215_33712 = state_31191__$1;
(statearr_31215_33712[(2)] = inst_31185);

(statearr_31215_33712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31192 === (8))){
var inst_31178 = (state_31191[(9)]);
var inst_31181 = cljs.core.deref(inst_31178);
var state_31191__$1 = state_31191;
var statearr_31216_33719 = state_31191__$1;
(statearr_31216_33719[(2)] = inst_31181);

(statearr_31216_33719[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29562__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29562__auto____0 = (function (){
var statearr_31222 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31222[(0)] = cljs$core$async$reduce_$_state_machine__29562__auto__);

(statearr_31222[(1)] = (1));

return statearr_31222;
});
var cljs$core$async$reduce_$_state_machine__29562__auto____1 = (function (state_31191){
while(true){
var ret_value__29563__auto__ = (function (){try{while(true){
var result__29564__auto__ = switch__29561__auto__(state_31191);
if(cljs.core.keyword_identical_QMARK_(result__29564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29564__auto__;
}
break;
}
}catch (e31223){if((e31223 instanceof Object)){
var ex__29565__auto__ = e31223;
var statearr_31224_33728 = state_31191;
(statearr_31224_33728[(5)] = ex__29565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31223;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33746 = state_31191;
state_31191 = G__33746;
continue;
} else {
return ret_value__29563__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29562__auto__ = function(state_31191){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29562__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29562__auto____1.call(this,state_31191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29562__auto____0;
cljs$core$async$reduce_$_state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29562__auto____1;
return cljs$core$async$reduce_$_state_machine__29562__auto__;
})()
})();
var state__29904__auto__ = (function (){var statearr_31225 = f__29903__auto__();
(statearr_31225[(6)] = c__29902__auto__);

return statearr_31225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29904__auto__);
}));

return c__29902__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29902__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29903__auto__ = (function (){var switch__29561__auto__ = (function (state_31235){
var state_val_31236 = (state_31235[(1)]);
if((state_val_31236 === (1))){
var inst_31230 = cljs.core.async.reduce(f__$1,init,ch);
var state_31235__$1 = state_31235;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31235__$1,(2),inst_31230);
} else {
if((state_val_31236 === (2))){
var inst_31232 = (state_31235[(2)]);
var inst_31233 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31232) : f__$1.call(null,inst_31232));
var state_31235__$1 = state_31235;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31235__$1,inst_31233);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29562__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29562__auto____0 = (function (){
var statearr_31244 = [null,null,null,null,null,null,null];
(statearr_31244[(0)] = cljs$core$async$transduce_$_state_machine__29562__auto__);

(statearr_31244[(1)] = (1));

return statearr_31244;
});
var cljs$core$async$transduce_$_state_machine__29562__auto____1 = (function (state_31235){
while(true){
var ret_value__29563__auto__ = (function (){try{while(true){
var result__29564__auto__ = switch__29561__auto__(state_31235);
if(cljs.core.keyword_identical_QMARK_(result__29564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29564__auto__;
}
break;
}
}catch (e31247){if((e31247 instanceof Object)){
var ex__29565__auto__ = e31247;
var statearr_31250_33778 = state_31235;
(statearr_31250_33778[(5)] = ex__29565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31247;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33779 = state_31235;
state_31235 = G__33779;
continue;
} else {
return ret_value__29563__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29562__auto__ = function(state_31235){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29562__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29562__auto____1.call(this,state_31235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29562__auto____0;
cljs$core$async$transduce_$_state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29562__auto____1;
return cljs$core$async$transduce_$_state_machine__29562__auto__;
})()
})();
var state__29904__auto__ = (function (){var statearr_31253 = f__29903__auto__();
(statearr_31253[(6)] = c__29902__auto__);

return statearr_31253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29904__auto__);
}));

return c__29902__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31257 = arguments.length;
switch (G__31257) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29902__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29903__auto__ = (function (){var switch__29561__auto__ = (function (state_31289){
var state_val_31290 = (state_31289[(1)]);
if((state_val_31290 === (7))){
var inst_31271 = (state_31289[(2)]);
var state_31289__$1 = state_31289;
var statearr_31291_33793 = state_31289__$1;
(statearr_31291_33793[(2)] = inst_31271);

(statearr_31291_33793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31290 === (1))){
var inst_31263 = cljs.core.seq(coll);
var inst_31265 = inst_31263;
var state_31289__$1 = (function (){var statearr_31299 = state_31289;
(statearr_31299[(7)] = inst_31265);

return statearr_31299;
})();
var statearr_31300_33794 = state_31289__$1;
(statearr_31300_33794[(2)] = null);

(statearr_31300_33794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31290 === (4))){
var inst_31265 = (state_31289[(7)]);
var inst_31269 = cljs.core.first(inst_31265);
var state_31289__$1 = state_31289;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31289__$1,(7),ch,inst_31269);
} else {
if((state_val_31290 === (13))){
var inst_31283 = (state_31289[(2)]);
var state_31289__$1 = state_31289;
var statearr_31301_33800 = state_31289__$1;
(statearr_31301_33800[(2)] = inst_31283);

(statearr_31301_33800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31290 === (6))){
var inst_31274 = (state_31289[(2)]);
var state_31289__$1 = state_31289;
if(cljs.core.truth_(inst_31274)){
var statearr_31303_33802 = state_31289__$1;
(statearr_31303_33802[(1)] = (8));

} else {
var statearr_31304_33803 = state_31289__$1;
(statearr_31304_33803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31290 === (3))){
var inst_31287 = (state_31289[(2)]);
var state_31289__$1 = state_31289;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31289__$1,inst_31287);
} else {
if((state_val_31290 === (12))){
var state_31289__$1 = state_31289;
var statearr_31306_33804 = state_31289__$1;
(statearr_31306_33804[(2)] = null);

(statearr_31306_33804[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31290 === (2))){
var inst_31265 = (state_31289[(7)]);
var state_31289__$1 = state_31289;
if(cljs.core.truth_(inst_31265)){
var statearr_31308_33805 = state_31289__$1;
(statearr_31308_33805[(1)] = (4));

} else {
var statearr_31309_33810 = state_31289__$1;
(statearr_31309_33810[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31290 === (11))){
var inst_31280 = cljs.core.async.close_BANG_(ch);
var state_31289__$1 = state_31289;
var statearr_31313_33812 = state_31289__$1;
(statearr_31313_33812[(2)] = inst_31280);

(statearr_31313_33812[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31290 === (9))){
var state_31289__$1 = state_31289;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31314_33817 = state_31289__$1;
(statearr_31314_33817[(1)] = (11));

} else {
var statearr_31315_33819 = state_31289__$1;
(statearr_31315_33819[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31290 === (5))){
var inst_31265 = (state_31289[(7)]);
var state_31289__$1 = state_31289;
var statearr_31316_33821 = state_31289__$1;
(statearr_31316_33821[(2)] = inst_31265);

(statearr_31316_33821[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31290 === (10))){
var inst_31285 = (state_31289[(2)]);
var state_31289__$1 = state_31289;
var statearr_31321_33828 = state_31289__$1;
(statearr_31321_33828[(2)] = inst_31285);

(statearr_31321_33828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31290 === (8))){
var inst_31265 = (state_31289[(7)]);
var inst_31276 = cljs.core.next(inst_31265);
var inst_31265__$1 = inst_31276;
var state_31289__$1 = (function (){var statearr_31322 = state_31289;
(statearr_31322[(7)] = inst_31265__$1);

return statearr_31322;
})();
var statearr_31323_33834 = state_31289__$1;
(statearr_31323_33834[(2)] = null);

(statearr_31323_33834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29562__auto__ = null;
var cljs$core$async$state_machine__29562__auto____0 = (function (){
var statearr_31325 = [null,null,null,null,null,null,null,null];
(statearr_31325[(0)] = cljs$core$async$state_machine__29562__auto__);

(statearr_31325[(1)] = (1));

return statearr_31325;
});
var cljs$core$async$state_machine__29562__auto____1 = (function (state_31289){
while(true){
var ret_value__29563__auto__ = (function (){try{while(true){
var result__29564__auto__ = switch__29561__auto__(state_31289);
if(cljs.core.keyword_identical_QMARK_(result__29564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29564__auto__;
}
break;
}
}catch (e31326){if((e31326 instanceof Object)){
var ex__29565__auto__ = e31326;
var statearr_31327_33851 = state_31289;
(statearr_31327_33851[(5)] = ex__29565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31326;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33856 = state_31289;
state_31289 = G__33856;
continue;
} else {
return ret_value__29563__auto__;
}
break;
}
});
cljs$core$async$state_machine__29562__auto__ = function(state_31289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29562__auto____1.call(this,state_31289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29562__auto____0;
cljs$core$async$state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29562__auto____1;
return cljs$core$async$state_machine__29562__auto__;
})()
})();
var state__29904__auto__ = (function (){var statearr_31328 = f__29903__auto__();
(statearr_31328[(6)] = c__29902__auto__);

return statearr_31328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29904__auto__);
}));

return c__29902__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31357 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31357 = (function (ch,cs,meta31358){
this.ch = ch;
this.cs = cs;
this.meta31358 = meta31358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31359,meta31358__$1){
var self__ = this;
var _31359__$1 = this;
return (new cljs.core.async.t_cljs$core$async31357(self__.ch,self__.cs,meta31358__$1));
}));

(cljs.core.async.t_cljs$core$async31357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31359){
var self__ = this;
var _31359__$1 = this;
return self__.meta31358;
}));

(cljs.core.async.t_cljs$core$async31357.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31357.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31357.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31357.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31357.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31357.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31357.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31358","meta31358",1834870815,null)], null);
}));

(cljs.core.async.t_cljs$core$async31357.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31357");

(cljs.core.async.t_cljs$core$async31357.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31357");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31357.
 */
cljs.core.async.__GT_t_cljs$core$async31357 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31357(ch__$1,cs__$1,meta31358){
return (new cljs.core.async.t_cljs$core$async31357(ch__$1,cs__$1,meta31358));
});

}

return (new cljs.core.async.t_cljs$core$async31357(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29902__auto___33920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29903__auto__ = (function (){var switch__29561__auto__ = (function (state_31526){
var state_val_31527 = (state_31526[(1)]);
if((state_val_31527 === (7))){
var inst_31522 = (state_31526[(2)]);
var state_31526__$1 = state_31526;
var statearr_31537_33923 = state_31526__$1;
(statearr_31537_33923[(2)] = inst_31522);

(statearr_31537_33923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (20))){
var inst_31419 = (state_31526[(7)]);
var inst_31431 = cljs.core.first(inst_31419);
var inst_31432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31431,(0),null);
var inst_31433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31431,(1),null);
var state_31526__$1 = (function (){var statearr_31538 = state_31526;
(statearr_31538[(8)] = inst_31432);

return statearr_31538;
})();
if(cljs.core.truth_(inst_31433)){
var statearr_31539_33936 = state_31526__$1;
(statearr_31539_33936[(1)] = (22));

} else {
var statearr_31542_33938 = state_31526__$1;
(statearr_31542_33938[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (27))){
var inst_31461 = (state_31526[(9)]);
var inst_31384 = (state_31526[(10)]);
var inst_31468 = (state_31526[(11)]);
var inst_31463 = (state_31526[(12)]);
var inst_31468__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31461,inst_31463);
var inst_31469 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31468__$1,inst_31384,done);
var state_31526__$1 = (function (){var statearr_31543 = state_31526;
(statearr_31543[(11)] = inst_31468__$1);

return statearr_31543;
})();
if(cljs.core.truth_(inst_31469)){
var statearr_31544_33944 = state_31526__$1;
(statearr_31544_33944[(1)] = (30));

} else {
var statearr_31545_33945 = state_31526__$1;
(statearr_31545_33945[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (1))){
var state_31526__$1 = state_31526;
var statearr_31546_33948 = state_31526__$1;
(statearr_31546_33948[(2)] = null);

(statearr_31546_33948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (24))){
var inst_31419 = (state_31526[(7)]);
var inst_31438 = (state_31526[(2)]);
var inst_31439 = cljs.core.next(inst_31419);
var inst_31393 = inst_31439;
var inst_31394 = null;
var inst_31395 = (0);
var inst_31396 = (0);
var state_31526__$1 = (function (){var statearr_31549 = state_31526;
(statearr_31549[(13)] = inst_31394);

(statearr_31549[(14)] = inst_31393);

(statearr_31549[(15)] = inst_31396);

(statearr_31549[(16)] = inst_31395);

(statearr_31549[(17)] = inst_31438);

return statearr_31549;
})();
var statearr_31555_33953 = state_31526__$1;
(statearr_31555_33953[(2)] = null);

(statearr_31555_33953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (39))){
var state_31526__$1 = state_31526;
var statearr_31559_33955 = state_31526__$1;
(statearr_31559_33955[(2)] = null);

(statearr_31559_33955[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (4))){
var inst_31384 = (state_31526[(10)]);
var inst_31384__$1 = (state_31526[(2)]);
var inst_31385 = (inst_31384__$1 == null);
var state_31526__$1 = (function (){var statearr_31561 = state_31526;
(statearr_31561[(10)] = inst_31384__$1);

return statearr_31561;
})();
if(cljs.core.truth_(inst_31385)){
var statearr_31562_33960 = state_31526__$1;
(statearr_31562_33960[(1)] = (5));

} else {
var statearr_31564_33961 = state_31526__$1;
(statearr_31564_33961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (15))){
var inst_31394 = (state_31526[(13)]);
var inst_31393 = (state_31526[(14)]);
var inst_31396 = (state_31526[(15)]);
var inst_31395 = (state_31526[(16)]);
var inst_31412 = (state_31526[(2)]);
var inst_31414 = (inst_31396 + (1));
var tmp31556 = inst_31394;
var tmp31557 = inst_31393;
var tmp31558 = inst_31395;
var inst_31393__$1 = tmp31557;
var inst_31394__$1 = tmp31556;
var inst_31395__$1 = tmp31558;
var inst_31396__$1 = inst_31414;
var state_31526__$1 = (function (){var statearr_31568 = state_31526;
(statearr_31568[(13)] = inst_31394__$1);

(statearr_31568[(14)] = inst_31393__$1);

(statearr_31568[(15)] = inst_31396__$1);

(statearr_31568[(16)] = inst_31395__$1);

(statearr_31568[(18)] = inst_31412);

return statearr_31568;
})();
var statearr_31570_33976 = state_31526__$1;
(statearr_31570_33976[(2)] = null);

(statearr_31570_33976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (21))){
var inst_31442 = (state_31526[(2)]);
var state_31526__$1 = state_31526;
var statearr_31574_33978 = state_31526__$1;
(statearr_31574_33978[(2)] = inst_31442);

(statearr_31574_33978[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (31))){
var inst_31468 = (state_31526[(11)]);
var inst_31472 = done(null);
var inst_31473 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31468);
var state_31526__$1 = (function (){var statearr_31577 = state_31526;
(statearr_31577[(19)] = inst_31472);

return statearr_31577;
})();
var statearr_31578_33981 = state_31526__$1;
(statearr_31578_33981[(2)] = inst_31473);

(statearr_31578_33981[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (32))){
var inst_31461 = (state_31526[(9)]);
var inst_31462 = (state_31526[(20)]);
var inst_31460 = (state_31526[(21)]);
var inst_31463 = (state_31526[(12)]);
var inst_31475 = (state_31526[(2)]);
var inst_31476 = (inst_31463 + (1));
var tmp31571 = inst_31461;
var tmp31572 = inst_31462;
var tmp31573 = inst_31460;
var inst_31460__$1 = tmp31573;
var inst_31461__$1 = tmp31571;
var inst_31462__$1 = tmp31572;
var inst_31463__$1 = inst_31476;
var state_31526__$1 = (function (){var statearr_31579 = state_31526;
(statearr_31579[(9)] = inst_31461__$1);

(statearr_31579[(22)] = inst_31475);

(statearr_31579[(20)] = inst_31462__$1);

(statearr_31579[(21)] = inst_31460__$1);

(statearr_31579[(12)] = inst_31463__$1);

return statearr_31579;
})();
var statearr_31580_33989 = state_31526__$1;
(statearr_31580_33989[(2)] = null);

(statearr_31580_33989[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (40))){
var inst_31493 = (state_31526[(23)]);
var inst_31498 = done(null);
var inst_31499 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31493);
var state_31526__$1 = (function (){var statearr_31583 = state_31526;
(statearr_31583[(24)] = inst_31498);

return statearr_31583;
})();
var statearr_31585_33990 = state_31526__$1;
(statearr_31585_33990[(2)] = inst_31499);

(statearr_31585_33990[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (33))){
var inst_31481 = (state_31526[(25)]);
var inst_31484 = cljs.core.chunked_seq_QMARK_(inst_31481);
var state_31526__$1 = state_31526;
if(inst_31484){
var statearr_31588_33991 = state_31526__$1;
(statearr_31588_33991[(1)] = (36));

} else {
var statearr_31589_33996 = state_31526__$1;
(statearr_31589_33996[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (13))){
var inst_31406 = (state_31526[(26)]);
var inst_31409 = cljs.core.async.close_BANG_(inst_31406);
var state_31526__$1 = state_31526;
var statearr_31590_33997 = state_31526__$1;
(statearr_31590_33997[(2)] = inst_31409);

(statearr_31590_33997[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (22))){
var inst_31432 = (state_31526[(8)]);
var inst_31435 = cljs.core.async.close_BANG_(inst_31432);
var state_31526__$1 = state_31526;
var statearr_31591_34006 = state_31526__$1;
(statearr_31591_34006[(2)] = inst_31435);

(statearr_31591_34006[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (36))){
var inst_31481 = (state_31526[(25)]);
var inst_31486 = cljs.core.chunk_first(inst_31481);
var inst_31487 = cljs.core.chunk_rest(inst_31481);
var inst_31488 = cljs.core.count(inst_31486);
var inst_31460 = inst_31487;
var inst_31461 = inst_31486;
var inst_31462 = inst_31488;
var inst_31463 = (0);
var state_31526__$1 = (function (){var statearr_31592 = state_31526;
(statearr_31592[(9)] = inst_31461);

(statearr_31592[(20)] = inst_31462);

(statearr_31592[(21)] = inst_31460);

(statearr_31592[(12)] = inst_31463);

return statearr_31592;
})();
var statearr_31594_34012 = state_31526__$1;
(statearr_31594_34012[(2)] = null);

(statearr_31594_34012[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (41))){
var inst_31481 = (state_31526[(25)]);
var inst_31501 = (state_31526[(2)]);
var inst_31502 = cljs.core.next(inst_31481);
var inst_31460 = inst_31502;
var inst_31461 = null;
var inst_31462 = (0);
var inst_31463 = (0);
var state_31526__$1 = (function (){var statearr_31597 = state_31526;
(statearr_31597[(9)] = inst_31461);

(statearr_31597[(27)] = inst_31501);

(statearr_31597[(20)] = inst_31462);

(statearr_31597[(21)] = inst_31460);

(statearr_31597[(12)] = inst_31463);

return statearr_31597;
})();
var statearr_31599_34018 = state_31526__$1;
(statearr_31599_34018[(2)] = null);

(statearr_31599_34018[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (43))){
var state_31526__$1 = state_31526;
var statearr_31600_34020 = state_31526__$1;
(statearr_31600_34020[(2)] = null);

(statearr_31600_34020[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (29))){
var inst_31510 = (state_31526[(2)]);
var state_31526__$1 = state_31526;
var statearr_31606_34022 = state_31526__$1;
(statearr_31606_34022[(2)] = inst_31510);

(statearr_31606_34022[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (44))){
var inst_31519 = (state_31526[(2)]);
var state_31526__$1 = (function (){var statearr_31609 = state_31526;
(statearr_31609[(28)] = inst_31519);

return statearr_31609;
})();
var statearr_31610_34027 = state_31526__$1;
(statearr_31610_34027[(2)] = null);

(statearr_31610_34027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (6))){
var inst_31452 = (state_31526[(29)]);
var inst_31451 = cljs.core.deref(cs);
var inst_31452__$1 = cljs.core.keys(inst_31451);
var inst_31453 = cljs.core.count(inst_31452__$1);
var inst_31454 = cljs.core.reset_BANG_(dctr,inst_31453);
var inst_31459 = cljs.core.seq(inst_31452__$1);
var inst_31460 = inst_31459;
var inst_31461 = null;
var inst_31462 = (0);
var inst_31463 = (0);
var state_31526__$1 = (function (){var statearr_31612 = state_31526;
(statearr_31612[(9)] = inst_31461);

(statearr_31612[(20)] = inst_31462);

(statearr_31612[(30)] = inst_31454);

(statearr_31612[(21)] = inst_31460);

(statearr_31612[(12)] = inst_31463);

(statearr_31612[(29)] = inst_31452__$1);

return statearr_31612;
})();
var statearr_31613_34038 = state_31526__$1;
(statearr_31613_34038[(2)] = null);

(statearr_31613_34038[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (28))){
var inst_31460 = (state_31526[(21)]);
var inst_31481 = (state_31526[(25)]);
var inst_31481__$1 = cljs.core.seq(inst_31460);
var state_31526__$1 = (function (){var statearr_31622 = state_31526;
(statearr_31622[(25)] = inst_31481__$1);

return statearr_31622;
})();
if(inst_31481__$1){
var statearr_31625_34042 = state_31526__$1;
(statearr_31625_34042[(1)] = (33));

} else {
var statearr_31626_34043 = state_31526__$1;
(statearr_31626_34043[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (25))){
var inst_31462 = (state_31526[(20)]);
var inst_31463 = (state_31526[(12)]);
var inst_31465 = (inst_31463 < inst_31462);
var inst_31466 = inst_31465;
var state_31526__$1 = state_31526;
if(cljs.core.truth_(inst_31466)){
var statearr_31634_34047 = state_31526__$1;
(statearr_31634_34047[(1)] = (27));

} else {
var statearr_31635_34048 = state_31526__$1;
(statearr_31635_34048[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (34))){
var state_31526__$1 = state_31526;
var statearr_31638_34053 = state_31526__$1;
(statearr_31638_34053[(2)] = null);

(statearr_31638_34053[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (17))){
var state_31526__$1 = state_31526;
var statearr_31640_34055 = state_31526__$1;
(statearr_31640_34055[(2)] = null);

(statearr_31640_34055[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (3))){
var inst_31524 = (state_31526[(2)]);
var state_31526__$1 = state_31526;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31526__$1,inst_31524);
} else {
if((state_val_31527 === (12))){
var inst_31447 = (state_31526[(2)]);
var state_31526__$1 = state_31526;
var statearr_31641_34061 = state_31526__$1;
(statearr_31641_34061[(2)] = inst_31447);

(statearr_31641_34061[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (2))){
var state_31526__$1 = state_31526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31526__$1,(4),ch);
} else {
if((state_val_31527 === (23))){
var state_31526__$1 = state_31526;
var statearr_31642_34066 = state_31526__$1;
(statearr_31642_34066[(2)] = null);

(statearr_31642_34066[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (35))){
var inst_31508 = (state_31526[(2)]);
var state_31526__$1 = state_31526;
var statearr_31645_34069 = state_31526__$1;
(statearr_31645_34069[(2)] = inst_31508);

(statearr_31645_34069[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (19))){
var inst_31419 = (state_31526[(7)]);
var inst_31423 = cljs.core.chunk_first(inst_31419);
var inst_31424 = cljs.core.chunk_rest(inst_31419);
var inst_31425 = cljs.core.count(inst_31423);
var inst_31393 = inst_31424;
var inst_31394 = inst_31423;
var inst_31395 = inst_31425;
var inst_31396 = (0);
var state_31526__$1 = (function (){var statearr_31647 = state_31526;
(statearr_31647[(13)] = inst_31394);

(statearr_31647[(14)] = inst_31393);

(statearr_31647[(15)] = inst_31396);

(statearr_31647[(16)] = inst_31395);

return statearr_31647;
})();
var statearr_31648_34082 = state_31526__$1;
(statearr_31648_34082[(2)] = null);

(statearr_31648_34082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (11))){
var inst_31419 = (state_31526[(7)]);
var inst_31393 = (state_31526[(14)]);
var inst_31419__$1 = cljs.core.seq(inst_31393);
var state_31526__$1 = (function (){var statearr_31649 = state_31526;
(statearr_31649[(7)] = inst_31419__$1);

return statearr_31649;
})();
if(inst_31419__$1){
var statearr_31650_34088 = state_31526__$1;
(statearr_31650_34088[(1)] = (16));

} else {
var statearr_31651_34093 = state_31526__$1;
(statearr_31651_34093[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (9))){
var inst_31449 = (state_31526[(2)]);
var state_31526__$1 = state_31526;
var statearr_31655_34099 = state_31526__$1;
(statearr_31655_34099[(2)] = inst_31449);

(statearr_31655_34099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (5))){
var inst_31391 = cljs.core.deref(cs);
var inst_31392 = cljs.core.seq(inst_31391);
var inst_31393 = inst_31392;
var inst_31394 = null;
var inst_31395 = (0);
var inst_31396 = (0);
var state_31526__$1 = (function (){var statearr_31662 = state_31526;
(statearr_31662[(13)] = inst_31394);

(statearr_31662[(14)] = inst_31393);

(statearr_31662[(15)] = inst_31396);

(statearr_31662[(16)] = inst_31395);

return statearr_31662;
})();
var statearr_31663_34102 = state_31526__$1;
(statearr_31663_34102[(2)] = null);

(statearr_31663_34102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (14))){
var state_31526__$1 = state_31526;
var statearr_31664_34108 = state_31526__$1;
(statearr_31664_34108[(2)] = null);

(statearr_31664_34108[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (45))){
var inst_31516 = (state_31526[(2)]);
var state_31526__$1 = state_31526;
var statearr_31665_34110 = state_31526__$1;
(statearr_31665_34110[(2)] = inst_31516);

(statearr_31665_34110[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (26))){
var inst_31452 = (state_31526[(29)]);
var inst_31512 = (state_31526[(2)]);
var inst_31513 = cljs.core.seq(inst_31452);
var state_31526__$1 = (function (){var statearr_31666 = state_31526;
(statearr_31666[(31)] = inst_31512);

return statearr_31666;
})();
if(inst_31513){
var statearr_31667_34121 = state_31526__$1;
(statearr_31667_34121[(1)] = (42));

} else {
var statearr_31668_34126 = state_31526__$1;
(statearr_31668_34126[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (16))){
var inst_31419 = (state_31526[(7)]);
var inst_31421 = cljs.core.chunked_seq_QMARK_(inst_31419);
var state_31526__$1 = state_31526;
if(inst_31421){
var statearr_31670_34130 = state_31526__$1;
(statearr_31670_34130[(1)] = (19));

} else {
var statearr_31674_34131 = state_31526__$1;
(statearr_31674_34131[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (38))){
var inst_31505 = (state_31526[(2)]);
var state_31526__$1 = state_31526;
var statearr_31679_34133 = state_31526__$1;
(statearr_31679_34133[(2)] = inst_31505);

(statearr_31679_34133[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (30))){
var state_31526__$1 = state_31526;
var statearr_31680_34138 = state_31526__$1;
(statearr_31680_34138[(2)] = null);

(statearr_31680_34138[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (10))){
var inst_31394 = (state_31526[(13)]);
var inst_31396 = (state_31526[(15)]);
var inst_31405 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31394,inst_31396);
var inst_31406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31405,(0),null);
var inst_31407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31405,(1),null);
var state_31526__$1 = (function (){var statearr_31685 = state_31526;
(statearr_31685[(26)] = inst_31406);

return statearr_31685;
})();
if(cljs.core.truth_(inst_31407)){
var statearr_31689_34140 = state_31526__$1;
(statearr_31689_34140[(1)] = (13));

} else {
var statearr_31691_34141 = state_31526__$1;
(statearr_31691_34141[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (18))){
var inst_31445 = (state_31526[(2)]);
var state_31526__$1 = state_31526;
var statearr_31692_34142 = state_31526__$1;
(statearr_31692_34142[(2)] = inst_31445);

(statearr_31692_34142[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (42))){
var state_31526__$1 = state_31526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31526__$1,(45),dchan);
} else {
if((state_val_31527 === (37))){
var inst_31384 = (state_31526[(10)]);
var inst_31481 = (state_31526[(25)]);
var inst_31493 = (state_31526[(23)]);
var inst_31493__$1 = cljs.core.first(inst_31481);
var inst_31494 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31493__$1,inst_31384,done);
var state_31526__$1 = (function (){var statearr_31697 = state_31526;
(statearr_31697[(23)] = inst_31493__$1);

return statearr_31697;
})();
if(cljs.core.truth_(inst_31494)){
var statearr_31698_34150 = state_31526__$1;
(statearr_31698_34150[(1)] = (39));

} else {
var statearr_31699_34151 = state_31526__$1;
(statearr_31699_34151[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (8))){
var inst_31396 = (state_31526[(15)]);
var inst_31395 = (state_31526[(16)]);
var inst_31399 = (inst_31396 < inst_31395);
var inst_31400 = inst_31399;
var state_31526__$1 = state_31526;
if(cljs.core.truth_(inst_31400)){
var statearr_31700_34157 = state_31526__$1;
(statearr_31700_34157[(1)] = (10));

} else {
var statearr_31701_34160 = state_31526__$1;
(statearr_31701_34160[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29562__auto__ = null;
var cljs$core$async$mult_$_state_machine__29562__auto____0 = (function (){
var statearr_31702 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31702[(0)] = cljs$core$async$mult_$_state_machine__29562__auto__);

(statearr_31702[(1)] = (1));

return statearr_31702;
});
var cljs$core$async$mult_$_state_machine__29562__auto____1 = (function (state_31526){
while(true){
var ret_value__29563__auto__ = (function (){try{while(true){
var result__29564__auto__ = switch__29561__auto__(state_31526);
if(cljs.core.keyword_identical_QMARK_(result__29564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29564__auto__;
}
break;
}
}catch (e31703){if((e31703 instanceof Object)){
var ex__29565__auto__ = e31703;
var statearr_31708_34167 = state_31526;
(statearr_31708_34167[(5)] = ex__29565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34168 = state_31526;
state_31526 = G__34168;
continue;
} else {
return ret_value__29563__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29562__auto__ = function(state_31526){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29562__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29562__auto____1.call(this,state_31526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29562__auto____0;
cljs$core$async$mult_$_state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29562__auto____1;
return cljs$core$async$mult_$_state_machine__29562__auto__;
})()
})();
var state__29904__auto__ = (function (){var statearr_31709 = f__29903__auto__();
(statearr_31709[(6)] = c__29902__auto___33920);

return statearr_31709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29904__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31712 = arguments.length;
switch (G__31712) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34188 = arguments.length;
var i__4790__auto___34189 = (0);
while(true){
if((i__4790__auto___34189 < len__4789__auto___34188)){
args__4795__auto__.push((arguments[i__4790__auto___34189]));

var G__34190 = (i__4790__auto___34189 + (1));
i__4790__auto___34189 = G__34190;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31771){
var map__31772 = p__31771;
var map__31772__$1 = (((((!((map__31772 == null))))?(((((map__31772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31772):map__31772);
var opts = map__31772__$1;
var statearr_31783_34205 = state;
(statearr_31783_34205[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31789_34206 = state;
(statearr_31789_34206[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31796_34209 = state;
(statearr_31796_34209[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31751){
var G__31752 = cljs.core.first(seq31751);
var seq31751__$1 = cljs.core.next(seq31751);
var G__31753 = cljs.core.first(seq31751__$1);
var seq31751__$2 = cljs.core.next(seq31751__$1);
var G__31754 = cljs.core.first(seq31751__$2);
var seq31751__$3 = cljs.core.next(seq31751__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31752,G__31753,G__31754,seq31751__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31822 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31822 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31823){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31823 = meta31823;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31824,meta31823__$1){
var self__ = this;
var _31824__$1 = this;
return (new cljs.core.async.t_cljs$core$async31822(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31823__$1));
}));

(cljs.core.async.t_cljs$core$async31822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31824){
var self__ = this;
var _31824__$1 = this;
return self__.meta31823;
}));

(cljs.core.async.t_cljs$core$async31822.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31822.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31822.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31822.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31822.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31822.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31822.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31822.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31822.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31823","meta31823",1596121919,null)], null);
}));

(cljs.core.async.t_cljs$core$async31822.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31822.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31822");

(cljs.core.async.t_cljs$core$async31822.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31822");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31822.
 */
cljs.core.async.__GT_t_cljs$core$async31822 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31822(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31823){
return (new cljs.core.async.t_cljs$core$async31822(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31823));
});

}

return (new cljs.core.async.t_cljs$core$async31822(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29902__auto___34271 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29903__auto__ = (function (){var switch__29561__auto__ = (function (state_31968){
var state_val_31969 = (state_31968[(1)]);
if((state_val_31969 === (7))){
var inst_31870 = (state_31968[(2)]);
var state_31968__$1 = state_31968;
var statearr_31972_34274 = state_31968__$1;
(statearr_31972_34274[(2)] = inst_31870);

(statearr_31972_34274[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (20))){
var inst_31882 = (state_31968[(7)]);
var state_31968__$1 = state_31968;
var statearr_31975_34278 = state_31968__$1;
(statearr_31975_34278[(2)] = inst_31882);

(statearr_31975_34278[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (27))){
var state_31968__$1 = state_31968;
var statearr_31979_34279 = state_31968__$1;
(statearr_31979_34279[(2)] = null);

(statearr_31979_34279[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (1))){
var inst_31853 = (state_31968[(8)]);
var inst_31853__$1 = calc_state();
var inst_31855 = (inst_31853__$1 == null);
var inst_31856 = cljs.core.not(inst_31855);
var state_31968__$1 = (function (){var statearr_31982 = state_31968;
(statearr_31982[(8)] = inst_31853__$1);

return statearr_31982;
})();
if(inst_31856){
var statearr_31983_34281 = state_31968__$1;
(statearr_31983_34281[(1)] = (2));

} else {
var statearr_31984_34284 = state_31968__$1;
(statearr_31984_34284[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (24))){
var inst_31937 = (state_31968[(9)]);
var inst_31922 = (state_31968[(10)]);
var inst_31909 = (state_31968[(11)]);
var inst_31937__$1 = (inst_31909.cljs$core$IFn$_invoke$arity$1 ? inst_31909.cljs$core$IFn$_invoke$arity$1(inst_31922) : inst_31909.call(null,inst_31922));
var state_31968__$1 = (function (){var statearr_31987 = state_31968;
(statearr_31987[(9)] = inst_31937__$1);

return statearr_31987;
})();
if(cljs.core.truth_(inst_31937__$1)){
var statearr_31989_34285 = state_31968__$1;
(statearr_31989_34285[(1)] = (29));

} else {
var statearr_31990_34286 = state_31968__$1;
(statearr_31990_34286[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (4))){
var inst_31873 = (state_31968[(2)]);
var state_31968__$1 = state_31968;
if(cljs.core.truth_(inst_31873)){
var statearr_31992_34290 = state_31968__$1;
(statearr_31992_34290[(1)] = (8));

} else {
var statearr_31993_34291 = state_31968__$1;
(statearr_31993_34291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (15))){
var inst_31901 = (state_31968[(2)]);
var state_31968__$1 = state_31968;
if(cljs.core.truth_(inst_31901)){
var statearr_31994_34292 = state_31968__$1;
(statearr_31994_34292[(1)] = (19));

} else {
var statearr_31995_34293 = state_31968__$1;
(statearr_31995_34293[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (21))){
var inst_31907 = (state_31968[(12)]);
var inst_31907__$1 = (state_31968[(2)]);
var inst_31909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31907__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31907__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31907__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31968__$1 = (function (){var statearr_31996 = state_31968;
(statearr_31996[(12)] = inst_31907__$1);

(statearr_31996[(13)] = inst_31910);

(statearr_31996[(11)] = inst_31909);

return statearr_31996;
})();
return cljs.core.async.ioc_alts_BANG_(state_31968__$1,(22),inst_31912);
} else {
if((state_val_31969 === (31))){
var inst_31947 = (state_31968[(2)]);
var state_31968__$1 = state_31968;
if(cljs.core.truth_(inst_31947)){
var statearr_31997_34307 = state_31968__$1;
(statearr_31997_34307[(1)] = (32));

} else {
var statearr_31998_34312 = state_31968__$1;
(statearr_31998_34312[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (32))){
var inst_31919 = (state_31968[(14)]);
var state_31968__$1 = state_31968;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31968__$1,(35),out,inst_31919);
} else {
if((state_val_31969 === (33))){
var inst_31907 = (state_31968[(12)]);
var inst_31882 = inst_31907;
var state_31968__$1 = (function (){var statearr_31999 = state_31968;
(statearr_31999[(7)] = inst_31882);

return statearr_31999;
})();
var statearr_32000_34313 = state_31968__$1;
(statearr_32000_34313[(2)] = null);

(statearr_32000_34313[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (13))){
var inst_31882 = (state_31968[(7)]);
var inst_31890 = inst_31882.cljs$lang$protocol_mask$partition0$;
var inst_31891 = (inst_31890 & (64));
var inst_31892 = inst_31882.cljs$core$ISeq$;
var inst_31893 = (cljs.core.PROTOCOL_SENTINEL === inst_31892);
var inst_31894 = ((inst_31891) || (inst_31893));
var state_31968__$1 = state_31968;
if(cljs.core.truth_(inst_31894)){
var statearr_32001_34314 = state_31968__$1;
(statearr_32001_34314[(1)] = (16));

} else {
var statearr_32002_34315 = state_31968__$1;
(statearr_32002_34315[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (22))){
var inst_31922 = (state_31968[(10)]);
var inst_31919 = (state_31968[(14)]);
var inst_31917 = (state_31968[(2)]);
var inst_31919__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31917,(0),null);
var inst_31922__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31917,(1),null);
var inst_31923 = (inst_31919__$1 == null);
var inst_31924 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31922__$1,change);
var inst_31925 = ((inst_31923) || (inst_31924));
var state_31968__$1 = (function (){var statearr_32004 = state_31968;
(statearr_32004[(10)] = inst_31922__$1);

(statearr_32004[(14)] = inst_31919__$1);

return statearr_32004;
})();
if(cljs.core.truth_(inst_31925)){
var statearr_32005_34322 = state_31968__$1;
(statearr_32005_34322[(1)] = (23));

} else {
var statearr_32007_34324 = state_31968__$1;
(statearr_32007_34324[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (36))){
var inst_31907 = (state_31968[(12)]);
var inst_31882 = inst_31907;
var state_31968__$1 = (function (){var statearr_32009 = state_31968;
(statearr_32009[(7)] = inst_31882);

return statearr_32009;
})();
var statearr_32011_34327 = state_31968__$1;
(statearr_32011_34327[(2)] = null);

(statearr_32011_34327[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (29))){
var inst_31937 = (state_31968[(9)]);
var state_31968__$1 = state_31968;
var statearr_32014_34328 = state_31968__$1;
(statearr_32014_34328[(2)] = inst_31937);

(statearr_32014_34328[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (6))){
var state_31968__$1 = state_31968;
var statearr_32015_34329 = state_31968__$1;
(statearr_32015_34329[(2)] = false);

(statearr_32015_34329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (28))){
var inst_31933 = (state_31968[(2)]);
var inst_31934 = calc_state();
var inst_31882 = inst_31934;
var state_31968__$1 = (function (){var statearr_32016 = state_31968;
(statearr_32016[(15)] = inst_31933);

(statearr_32016[(7)] = inst_31882);

return statearr_32016;
})();
var statearr_32017_34334 = state_31968__$1;
(statearr_32017_34334[(2)] = null);

(statearr_32017_34334[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (25))){
var inst_31961 = (state_31968[(2)]);
var state_31968__$1 = state_31968;
var statearr_32019_34335 = state_31968__$1;
(statearr_32019_34335[(2)] = inst_31961);

(statearr_32019_34335[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (34))){
var inst_31959 = (state_31968[(2)]);
var state_31968__$1 = state_31968;
var statearr_32022_34340 = state_31968__$1;
(statearr_32022_34340[(2)] = inst_31959);

(statearr_32022_34340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (17))){
var state_31968__$1 = state_31968;
var statearr_32023_34343 = state_31968__$1;
(statearr_32023_34343[(2)] = false);

(statearr_32023_34343[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (3))){
var state_31968__$1 = state_31968;
var statearr_32027_34345 = state_31968__$1;
(statearr_32027_34345[(2)] = false);

(statearr_32027_34345[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (12))){
var inst_31963 = (state_31968[(2)]);
var state_31968__$1 = state_31968;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31968__$1,inst_31963);
} else {
if((state_val_31969 === (2))){
var inst_31853 = (state_31968[(8)]);
var inst_31861 = inst_31853.cljs$lang$protocol_mask$partition0$;
var inst_31862 = (inst_31861 & (64));
var inst_31864 = inst_31853.cljs$core$ISeq$;
var inst_31865 = (cljs.core.PROTOCOL_SENTINEL === inst_31864);
var inst_31866 = ((inst_31862) || (inst_31865));
var state_31968__$1 = state_31968;
if(cljs.core.truth_(inst_31866)){
var statearr_32029_34349 = state_31968__$1;
(statearr_32029_34349[(1)] = (5));

} else {
var statearr_32030_34352 = state_31968__$1;
(statearr_32030_34352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (23))){
var inst_31919 = (state_31968[(14)]);
var inst_31927 = (inst_31919 == null);
var state_31968__$1 = state_31968;
if(cljs.core.truth_(inst_31927)){
var statearr_32031_34354 = state_31968__$1;
(statearr_32031_34354[(1)] = (26));

} else {
var statearr_32033_34355 = state_31968__$1;
(statearr_32033_34355[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (35))){
var inst_31950 = (state_31968[(2)]);
var state_31968__$1 = state_31968;
if(cljs.core.truth_(inst_31950)){
var statearr_32036_34358 = state_31968__$1;
(statearr_32036_34358[(1)] = (36));

} else {
var statearr_32038_34360 = state_31968__$1;
(statearr_32038_34360[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (19))){
var inst_31882 = (state_31968[(7)]);
var inst_31904 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31882);
var state_31968__$1 = state_31968;
var statearr_32040_34361 = state_31968__$1;
(statearr_32040_34361[(2)] = inst_31904);

(statearr_32040_34361[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (11))){
var inst_31882 = (state_31968[(7)]);
var inst_31886 = (inst_31882 == null);
var inst_31888 = cljs.core.not(inst_31886);
var state_31968__$1 = state_31968;
if(inst_31888){
var statearr_32042_34366 = state_31968__$1;
(statearr_32042_34366[(1)] = (13));

} else {
var statearr_32043_34367 = state_31968__$1;
(statearr_32043_34367[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (9))){
var inst_31853 = (state_31968[(8)]);
var state_31968__$1 = state_31968;
var statearr_32045_34369 = state_31968__$1;
(statearr_32045_34369[(2)] = inst_31853);

(statearr_32045_34369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (5))){
var state_31968__$1 = state_31968;
var statearr_32046_34372 = state_31968__$1;
(statearr_32046_34372[(2)] = true);

(statearr_32046_34372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (14))){
var state_31968__$1 = state_31968;
var statearr_32048_34374 = state_31968__$1;
(statearr_32048_34374[(2)] = false);

(statearr_32048_34374[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (26))){
var inst_31922 = (state_31968[(10)]);
var inst_31929 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31922);
var state_31968__$1 = state_31968;
var statearr_32049_34376 = state_31968__$1;
(statearr_32049_34376[(2)] = inst_31929);

(statearr_32049_34376[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (16))){
var state_31968__$1 = state_31968;
var statearr_32050_34378 = state_31968__$1;
(statearr_32050_34378[(2)] = true);

(statearr_32050_34378[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (38))){
var inst_31955 = (state_31968[(2)]);
var state_31968__$1 = state_31968;
var statearr_32051_34379 = state_31968__$1;
(statearr_32051_34379[(2)] = inst_31955);

(statearr_32051_34379[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (30))){
var inst_31910 = (state_31968[(13)]);
var inst_31922 = (state_31968[(10)]);
var inst_31909 = (state_31968[(11)]);
var inst_31941 = cljs.core.empty_QMARK_(inst_31909);
var inst_31943 = (inst_31910.cljs$core$IFn$_invoke$arity$1 ? inst_31910.cljs$core$IFn$_invoke$arity$1(inst_31922) : inst_31910.call(null,inst_31922));
var inst_31944 = cljs.core.not(inst_31943);
var inst_31945 = ((inst_31941) && (inst_31944));
var state_31968__$1 = state_31968;
var statearr_32052_34385 = state_31968__$1;
(statearr_32052_34385[(2)] = inst_31945);

(statearr_32052_34385[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (10))){
var inst_31853 = (state_31968[(8)]);
var inst_31878 = (state_31968[(2)]);
var inst_31879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31878,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31878,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31878,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31882 = inst_31853;
var state_31968__$1 = (function (){var statearr_32057 = state_31968;
(statearr_32057[(16)] = inst_31879);

(statearr_32057[(17)] = inst_31880);

(statearr_32057[(18)] = inst_31881);

(statearr_32057[(7)] = inst_31882);

return statearr_32057;
})();
var statearr_32058_34399 = state_31968__$1;
(statearr_32058_34399[(2)] = null);

(statearr_32058_34399[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (18))){
var inst_31898 = (state_31968[(2)]);
var state_31968__$1 = state_31968;
var statearr_32059_34400 = state_31968__$1;
(statearr_32059_34400[(2)] = inst_31898);

(statearr_32059_34400[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (37))){
var state_31968__$1 = state_31968;
var statearr_32060_34401 = state_31968__$1;
(statearr_32060_34401[(2)] = null);

(statearr_32060_34401[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (8))){
var inst_31853 = (state_31968[(8)]);
var inst_31875 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31853);
var state_31968__$1 = state_31968;
var statearr_32064_34402 = state_31968__$1;
(statearr_32064_34402[(2)] = inst_31875);

(statearr_32064_34402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29562__auto__ = null;
var cljs$core$async$mix_$_state_machine__29562__auto____0 = (function (){
var statearr_32066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32066[(0)] = cljs$core$async$mix_$_state_machine__29562__auto__);

(statearr_32066[(1)] = (1));

return statearr_32066;
});
var cljs$core$async$mix_$_state_machine__29562__auto____1 = (function (state_31968){
while(true){
var ret_value__29563__auto__ = (function (){try{while(true){
var result__29564__auto__ = switch__29561__auto__(state_31968);
if(cljs.core.keyword_identical_QMARK_(result__29564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29564__auto__;
}
break;
}
}catch (e32070){if((e32070 instanceof Object)){
var ex__29565__auto__ = e32070;
var statearr_32071_34404 = state_31968;
(statearr_32071_34404[(5)] = ex__29565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32070;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34405 = state_31968;
state_31968 = G__34405;
continue;
} else {
return ret_value__29563__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29562__auto__ = function(state_31968){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29562__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29562__auto____1.call(this,state_31968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29562__auto____0;
cljs$core$async$mix_$_state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29562__auto____1;
return cljs$core$async$mix_$_state_machine__29562__auto__;
})()
})();
var state__29904__auto__ = (function (){var statearr_32076 = f__29903__auto__();
(statearr_32076[(6)] = c__29902__auto___34271);

return statearr_32076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29904__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32103 = arguments.length;
switch (G__32103) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32115 = arguments.length;
switch (G__32115) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32110_SHARP_){
if(cljs.core.truth_((p1__32110_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32110_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32110_SHARP_.call(null,topic)))){
return p1__32110_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32110_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32122 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32122 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32123){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32123 = meta32123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32124,meta32123__$1){
var self__ = this;
var _32124__$1 = this;
return (new cljs.core.async.t_cljs$core$async32122(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32123__$1));
}));

(cljs.core.async.t_cljs$core$async32122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32124){
var self__ = this;
var _32124__$1 = this;
return self__.meta32123;
}));

(cljs.core.async.t_cljs$core$async32122.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32122.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32122.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32122.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32122.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async32122.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32122.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32122.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32123","meta32123",-134938015,null)], null);
}));

(cljs.core.async.t_cljs$core$async32122.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32122");

(cljs.core.async.t_cljs$core$async32122.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32122");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32122.
 */
cljs.core.async.__GT_t_cljs$core$async32122 = (function cljs$core$async$__GT_t_cljs$core$async32122(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32123){
return (new cljs.core.async.t_cljs$core$async32122(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32123));
});

}

return (new cljs.core.async.t_cljs$core$async32122(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29902__auto___34433 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29903__auto__ = (function (){var switch__29561__auto__ = (function (state_32246){
var state_val_32247 = (state_32246[(1)]);
if((state_val_32247 === (7))){
var inst_32242 = (state_32246[(2)]);
var state_32246__$1 = state_32246;
var statearr_32249_34434 = state_32246__$1;
(statearr_32249_34434[(2)] = inst_32242);

(statearr_32249_34434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (20))){
var state_32246__$1 = state_32246;
var statearr_32250_34435 = state_32246__$1;
(statearr_32250_34435[(2)] = null);

(statearr_32250_34435[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (1))){
var state_32246__$1 = state_32246;
var statearr_32251_34437 = state_32246__$1;
(statearr_32251_34437[(2)] = null);

(statearr_32251_34437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (24))){
var inst_32221 = (state_32246[(7)]);
var inst_32233 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32221);
var state_32246__$1 = state_32246;
var statearr_32254_34441 = state_32246__$1;
(statearr_32254_34441[(2)] = inst_32233);

(statearr_32254_34441[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (4))){
var inst_32161 = (state_32246[(8)]);
var inst_32161__$1 = (state_32246[(2)]);
var inst_32162 = (inst_32161__$1 == null);
var state_32246__$1 = (function (){var statearr_32255 = state_32246;
(statearr_32255[(8)] = inst_32161__$1);

return statearr_32255;
})();
if(cljs.core.truth_(inst_32162)){
var statearr_32256_34444 = state_32246__$1;
(statearr_32256_34444[(1)] = (5));

} else {
var statearr_32257_34448 = state_32246__$1;
(statearr_32257_34448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (15))){
var inst_32214 = (state_32246[(2)]);
var state_32246__$1 = state_32246;
var statearr_32258_34451 = state_32246__$1;
(statearr_32258_34451[(2)] = inst_32214);

(statearr_32258_34451[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (21))){
var inst_32238 = (state_32246[(2)]);
var state_32246__$1 = (function (){var statearr_32259 = state_32246;
(statearr_32259[(9)] = inst_32238);

return statearr_32259;
})();
var statearr_32260_34452 = state_32246__$1;
(statearr_32260_34452[(2)] = null);

(statearr_32260_34452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (13))){
var inst_32191 = (state_32246[(10)]);
var inst_32194 = cljs.core.chunked_seq_QMARK_(inst_32191);
var state_32246__$1 = state_32246;
if(inst_32194){
var statearr_32262_34453 = state_32246__$1;
(statearr_32262_34453[(1)] = (16));

} else {
var statearr_32264_34454 = state_32246__$1;
(statearr_32264_34454[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (22))){
var inst_32230 = (state_32246[(2)]);
var state_32246__$1 = state_32246;
if(cljs.core.truth_(inst_32230)){
var statearr_32266_34455 = state_32246__$1;
(statearr_32266_34455[(1)] = (23));

} else {
var statearr_32267_34456 = state_32246__$1;
(statearr_32267_34456[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (6))){
var inst_32221 = (state_32246[(7)]);
var inst_32223 = (state_32246[(11)]);
var inst_32161 = (state_32246[(8)]);
var inst_32221__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32161) : topic_fn.call(null,inst_32161));
var inst_32222 = cljs.core.deref(mults);
var inst_32223__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32222,inst_32221__$1);
var state_32246__$1 = (function (){var statearr_32268 = state_32246;
(statearr_32268[(7)] = inst_32221__$1);

(statearr_32268[(11)] = inst_32223__$1);

return statearr_32268;
})();
if(cljs.core.truth_(inst_32223__$1)){
var statearr_32269_34465 = state_32246__$1;
(statearr_32269_34465[(1)] = (19));

} else {
var statearr_32270_34467 = state_32246__$1;
(statearr_32270_34467[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (25))){
var inst_32235 = (state_32246[(2)]);
var state_32246__$1 = state_32246;
var statearr_32271_34470 = state_32246__$1;
(statearr_32271_34470[(2)] = inst_32235);

(statearr_32271_34470[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (17))){
var inst_32191 = (state_32246[(10)]);
var inst_32204 = cljs.core.first(inst_32191);
var inst_32206 = cljs.core.async.muxch_STAR_(inst_32204);
var inst_32207 = cljs.core.async.close_BANG_(inst_32206);
var inst_32208 = cljs.core.next(inst_32191);
var inst_32175 = inst_32208;
var inst_32176 = null;
var inst_32177 = (0);
var inst_32178 = (0);
var state_32246__$1 = (function (){var statearr_32274 = state_32246;
(statearr_32274[(12)] = inst_32176);

(statearr_32274[(13)] = inst_32175);

(statearr_32274[(14)] = inst_32207);

(statearr_32274[(15)] = inst_32177);

(statearr_32274[(16)] = inst_32178);

return statearr_32274;
})();
var statearr_32275_34472 = state_32246__$1;
(statearr_32275_34472[(2)] = null);

(statearr_32275_34472[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (3))){
var inst_32244 = (state_32246[(2)]);
var state_32246__$1 = state_32246;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32246__$1,inst_32244);
} else {
if((state_val_32247 === (12))){
var inst_32216 = (state_32246[(2)]);
var state_32246__$1 = state_32246;
var statearr_32278_34473 = state_32246__$1;
(statearr_32278_34473[(2)] = inst_32216);

(statearr_32278_34473[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (2))){
var state_32246__$1 = state_32246;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32246__$1,(4),ch);
} else {
if((state_val_32247 === (23))){
var state_32246__$1 = state_32246;
var statearr_32279_34474 = state_32246__$1;
(statearr_32279_34474[(2)] = null);

(statearr_32279_34474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (19))){
var inst_32223 = (state_32246[(11)]);
var inst_32161 = (state_32246[(8)]);
var inst_32228 = cljs.core.async.muxch_STAR_(inst_32223);
var state_32246__$1 = state_32246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32246__$1,(22),inst_32228,inst_32161);
} else {
if((state_val_32247 === (11))){
var inst_32175 = (state_32246[(13)]);
var inst_32191 = (state_32246[(10)]);
var inst_32191__$1 = cljs.core.seq(inst_32175);
var state_32246__$1 = (function (){var statearr_32286 = state_32246;
(statearr_32286[(10)] = inst_32191__$1);

return statearr_32286;
})();
if(inst_32191__$1){
var statearr_32287_34480 = state_32246__$1;
(statearr_32287_34480[(1)] = (13));

} else {
var statearr_32289_34481 = state_32246__$1;
(statearr_32289_34481[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (9))){
var inst_32218 = (state_32246[(2)]);
var state_32246__$1 = state_32246;
var statearr_32295_34483 = state_32246__$1;
(statearr_32295_34483[(2)] = inst_32218);

(statearr_32295_34483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (5))){
var inst_32172 = cljs.core.deref(mults);
var inst_32173 = cljs.core.vals(inst_32172);
var inst_32174 = cljs.core.seq(inst_32173);
var inst_32175 = inst_32174;
var inst_32176 = null;
var inst_32177 = (0);
var inst_32178 = (0);
var state_32246__$1 = (function (){var statearr_32302 = state_32246;
(statearr_32302[(12)] = inst_32176);

(statearr_32302[(13)] = inst_32175);

(statearr_32302[(15)] = inst_32177);

(statearr_32302[(16)] = inst_32178);

return statearr_32302;
})();
var statearr_32303_34484 = state_32246__$1;
(statearr_32303_34484[(2)] = null);

(statearr_32303_34484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (14))){
var state_32246__$1 = state_32246;
var statearr_32312_34485 = state_32246__$1;
(statearr_32312_34485[(2)] = null);

(statearr_32312_34485[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (16))){
var inst_32191 = (state_32246[(10)]);
var inst_32199 = cljs.core.chunk_first(inst_32191);
var inst_32200 = cljs.core.chunk_rest(inst_32191);
var inst_32201 = cljs.core.count(inst_32199);
var inst_32175 = inst_32200;
var inst_32176 = inst_32199;
var inst_32177 = inst_32201;
var inst_32178 = (0);
var state_32246__$1 = (function (){var statearr_32313 = state_32246;
(statearr_32313[(12)] = inst_32176);

(statearr_32313[(13)] = inst_32175);

(statearr_32313[(15)] = inst_32177);

(statearr_32313[(16)] = inst_32178);

return statearr_32313;
})();
var statearr_32314_34488 = state_32246__$1;
(statearr_32314_34488[(2)] = null);

(statearr_32314_34488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (10))){
var inst_32176 = (state_32246[(12)]);
var inst_32175 = (state_32246[(13)]);
var inst_32177 = (state_32246[(15)]);
var inst_32178 = (state_32246[(16)]);
var inst_32184 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32176,inst_32178);
var inst_32185 = cljs.core.async.muxch_STAR_(inst_32184);
var inst_32186 = cljs.core.async.close_BANG_(inst_32185);
var inst_32187 = (inst_32178 + (1));
var tmp32305 = inst_32176;
var tmp32306 = inst_32175;
var tmp32307 = inst_32177;
var inst_32175__$1 = tmp32306;
var inst_32176__$1 = tmp32305;
var inst_32177__$1 = tmp32307;
var inst_32178__$1 = inst_32187;
var state_32246__$1 = (function (){var statearr_32315 = state_32246;
(statearr_32315[(12)] = inst_32176__$1);

(statearr_32315[(13)] = inst_32175__$1);

(statearr_32315[(15)] = inst_32177__$1);

(statearr_32315[(16)] = inst_32178__$1);

(statearr_32315[(17)] = inst_32186);

return statearr_32315;
})();
var statearr_32318_34491 = state_32246__$1;
(statearr_32318_34491[(2)] = null);

(statearr_32318_34491[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (18))){
var inst_32211 = (state_32246[(2)]);
var state_32246__$1 = state_32246;
var statearr_32319_34495 = state_32246__$1;
(statearr_32319_34495[(2)] = inst_32211);

(statearr_32319_34495[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (8))){
var inst_32177 = (state_32246[(15)]);
var inst_32178 = (state_32246[(16)]);
var inst_32180 = (inst_32178 < inst_32177);
var inst_32181 = inst_32180;
var state_32246__$1 = state_32246;
if(cljs.core.truth_(inst_32181)){
var statearr_32320_34504 = state_32246__$1;
(statearr_32320_34504[(1)] = (10));

} else {
var statearr_32321_34510 = state_32246__$1;
(statearr_32321_34510[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29562__auto__ = null;
var cljs$core$async$state_machine__29562__auto____0 = (function (){
var statearr_32322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32322[(0)] = cljs$core$async$state_machine__29562__auto__);

(statearr_32322[(1)] = (1));

return statearr_32322;
});
var cljs$core$async$state_machine__29562__auto____1 = (function (state_32246){
while(true){
var ret_value__29563__auto__ = (function (){try{while(true){
var result__29564__auto__ = switch__29561__auto__(state_32246);
if(cljs.core.keyword_identical_QMARK_(result__29564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29564__auto__;
}
break;
}
}catch (e32323){if((e32323 instanceof Object)){
var ex__29565__auto__ = e32323;
var statearr_32324_34525 = state_32246;
(statearr_32324_34525[(5)] = ex__29565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32323;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34527 = state_32246;
state_32246 = G__34527;
continue;
} else {
return ret_value__29563__auto__;
}
break;
}
});
cljs$core$async$state_machine__29562__auto__ = function(state_32246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29562__auto____1.call(this,state_32246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29562__auto____0;
cljs$core$async$state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29562__auto____1;
return cljs$core$async$state_machine__29562__auto__;
})()
})();
var state__29904__auto__ = (function (){var statearr_32325 = f__29903__auto__();
(statearr_32325[(6)] = c__29902__auto___34433);

return statearr_32325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29904__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32327 = arguments.length;
switch (G__32327) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32330 = arguments.length;
switch (G__32330) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32334 = arguments.length;
switch (G__32334) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29902__auto___34567 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29903__auto__ = (function (){var switch__29561__auto__ = (function (state_32388){
var state_val_32389 = (state_32388[(1)]);
if((state_val_32389 === (7))){
var state_32388__$1 = state_32388;
var statearr_32392_34568 = state_32388__$1;
(statearr_32392_34568[(2)] = null);

(statearr_32392_34568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32389 === (1))){
var state_32388__$1 = state_32388;
var statearr_32394_34570 = state_32388__$1;
(statearr_32394_34570[(2)] = null);

(statearr_32394_34570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32389 === (4))){
var inst_32348 = (state_32388[(7)]);
var inst_32350 = (inst_32348 < cnt);
var state_32388__$1 = state_32388;
if(cljs.core.truth_(inst_32350)){
var statearr_32397_34574 = state_32388__$1;
(statearr_32397_34574[(1)] = (6));

} else {
var statearr_32398_34575 = state_32388__$1;
(statearr_32398_34575[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32389 === (15))){
var inst_32380 = (state_32388[(2)]);
var state_32388__$1 = state_32388;
var statearr_32399_34576 = state_32388__$1;
(statearr_32399_34576[(2)] = inst_32380);

(statearr_32399_34576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32389 === (13))){
var inst_32373 = cljs.core.async.close_BANG_(out);
var state_32388__$1 = state_32388;
var statearr_32400_34577 = state_32388__$1;
(statearr_32400_34577[(2)] = inst_32373);

(statearr_32400_34577[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32389 === (6))){
var state_32388__$1 = state_32388;
var statearr_32401_34583 = state_32388__$1;
(statearr_32401_34583[(2)] = null);

(statearr_32401_34583[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32389 === (3))){
var inst_32382 = (state_32388[(2)]);
var state_32388__$1 = state_32388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32388__$1,inst_32382);
} else {
if((state_val_32389 === (12))){
var inst_32370 = (state_32388[(8)]);
var inst_32370__$1 = (state_32388[(2)]);
var inst_32371 = cljs.core.some(cljs.core.nil_QMARK_,inst_32370__$1);
var state_32388__$1 = (function (){var statearr_32404 = state_32388;
(statearr_32404[(8)] = inst_32370__$1);

return statearr_32404;
})();
if(cljs.core.truth_(inst_32371)){
var statearr_32405_34594 = state_32388__$1;
(statearr_32405_34594[(1)] = (13));

} else {
var statearr_32406_34595 = state_32388__$1;
(statearr_32406_34595[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32389 === (2))){
var inst_32347 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32348 = (0);
var state_32388__$1 = (function (){var statearr_32411 = state_32388;
(statearr_32411[(9)] = inst_32347);

(statearr_32411[(7)] = inst_32348);

return statearr_32411;
})();
var statearr_32414_34596 = state_32388__$1;
(statearr_32414_34596[(2)] = null);

(statearr_32414_34596[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32389 === (11))){
var inst_32348 = (state_32388[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32388,(10),Object,null,(9));
var inst_32357 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32348) : chs__$1.call(null,inst_32348));
var inst_32358 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32348) : done.call(null,inst_32348));
var inst_32359 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32357,inst_32358);
var state_32388__$1 = state_32388;
var statearr_32415_34598 = state_32388__$1;
(statearr_32415_34598[(2)] = inst_32359);


cljs.core.async.impl.ioc_helpers.process_exception(state_32388__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32389 === (9))){
var inst_32348 = (state_32388[(7)]);
var inst_32361 = (state_32388[(2)]);
var inst_32362 = (inst_32348 + (1));
var inst_32348__$1 = inst_32362;
var state_32388__$1 = (function (){var statearr_32416 = state_32388;
(statearr_32416[(10)] = inst_32361);

(statearr_32416[(7)] = inst_32348__$1);

return statearr_32416;
})();
var statearr_32421_34600 = state_32388__$1;
(statearr_32421_34600[(2)] = null);

(statearr_32421_34600[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32389 === (5))){
var inst_32368 = (state_32388[(2)]);
var state_32388__$1 = (function (){var statearr_32426 = state_32388;
(statearr_32426[(11)] = inst_32368);

return statearr_32426;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32388__$1,(12),dchan);
} else {
if((state_val_32389 === (14))){
var inst_32370 = (state_32388[(8)]);
var inst_32375 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32370);
var state_32388__$1 = state_32388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32388__$1,(16),out,inst_32375);
} else {
if((state_val_32389 === (16))){
var inst_32377 = (state_32388[(2)]);
var state_32388__$1 = (function (){var statearr_32429 = state_32388;
(statearr_32429[(12)] = inst_32377);

return statearr_32429;
})();
var statearr_32430_34602 = state_32388__$1;
(statearr_32430_34602[(2)] = null);

(statearr_32430_34602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32389 === (10))){
var inst_32352 = (state_32388[(2)]);
var inst_32353 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32388__$1 = (function (){var statearr_32431 = state_32388;
(statearr_32431[(13)] = inst_32352);

return statearr_32431;
})();
var statearr_32432_34604 = state_32388__$1;
(statearr_32432_34604[(2)] = inst_32353);


cljs.core.async.impl.ioc_helpers.process_exception(state_32388__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32389 === (8))){
var inst_32366 = (state_32388[(2)]);
var state_32388__$1 = state_32388;
var statearr_32433_34606 = state_32388__$1;
(statearr_32433_34606[(2)] = inst_32366);

(statearr_32433_34606[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29562__auto__ = null;
var cljs$core$async$state_machine__29562__auto____0 = (function (){
var statearr_32435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32435[(0)] = cljs$core$async$state_machine__29562__auto__);

(statearr_32435[(1)] = (1));

return statearr_32435;
});
var cljs$core$async$state_machine__29562__auto____1 = (function (state_32388){
while(true){
var ret_value__29563__auto__ = (function (){try{while(true){
var result__29564__auto__ = switch__29561__auto__(state_32388);
if(cljs.core.keyword_identical_QMARK_(result__29564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29564__auto__;
}
break;
}
}catch (e32436){if((e32436 instanceof Object)){
var ex__29565__auto__ = e32436;
var statearr_32437_34612 = state_32388;
(statearr_32437_34612[(5)] = ex__29565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32436;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34616 = state_32388;
state_32388 = G__34616;
continue;
} else {
return ret_value__29563__auto__;
}
break;
}
});
cljs$core$async$state_machine__29562__auto__ = function(state_32388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29562__auto____1.call(this,state_32388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29562__auto____0;
cljs$core$async$state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29562__auto____1;
return cljs$core$async$state_machine__29562__auto__;
})()
})();
var state__29904__auto__ = (function (){var statearr_32440 = f__29903__auto__();
(statearr_32440[(6)] = c__29902__auto___34567);

return statearr_32440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29904__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32449 = arguments.length;
switch (G__32449) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29902__auto___34629 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29903__auto__ = (function (){var switch__29561__auto__ = (function (state_32482){
var state_val_32483 = (state_32482[(1)]);
if((state_val_32483 === (7))){
var inst_32462 = (state_32482[(7)]);
var inst_32461 = (state_32482[(8)]);
var inst_32461__$1 = (state_32482[(2)]);
var inst_32462__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32461__$1,(0),null);
var inst_32463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32461__$1,(1),null);
var inst_32464 = (inst_32462__$1 == null);
var state_32482__$1 = (function (){var statearr_32485 = state_32482;
(statearr_32485[(7)] = inst_32462__$1);

(statearr_32485[(8)] = inst_32461__$1);

(statearr_32485[(9)] = inst_32463);

return statearr_32485;
})();
if(cljs.core.truth_(inst_32464)){
var statearr_32486_34644 = state_32482__$1;
(statearr_32486_34644[(1)] = (8));

} else {
var statearr_32487_34645 = state_32482__$1;
(statearr_32487_34645[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32483 === (1))){
var inst_32450 = cljs.core.vec(chs);
var inst_32451 = inst_32450;
var state_32482__$1 = (function (){var statearr_32488 = state_32482;
(statearr_32488[(10)] = inst_32451);

return statearr_32488;
})();
var statearr_32489_34653 = state_32482__$1;
(statearr_32489_34653[(2)] = null);

(statearr_32489_34653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32483 === (4))){
var inst_32451 = (state_32482[(10)]);
var state_32482__$1 = state_32482;
return cljs.core.async.ioc_alts_BANG_(state_32482__$1,(7),inst_32451);
} else {
if((state_val_32483 === (6))){
var inst_32478 = (state_32482[(2)]);
var state_32482__$1 = state_32482;
var statearr_32490_34666 = state_32482__$1;
(statearr_32490_34666[(2)] = inst_32478);

(statearr_32490_34666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32483 === (3))){
var inst_32480 = (state_32482[(2)]);
var state_32482__$1 = state_32482;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32482__$1,inst_32480);
} else {
if((state_val_32483 === (2))){
var inst_32451 = (state_32482[(10)]);
var inst_32453 = cljs.core.count(inst_32451);
var inst_32454 = (inst_32453 > (0));
var state_32482__$1 = state_32482;
if(cljs.core.truth_(inst_32454)){
var statearr_32492_34672 = state_32482__$1;
(statearr_32492_34672[(1)] = (4));

} else {
var statearr_32493_34680 = state_32482__$1;
(statearr_32493_34680[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32483 === (11))){
var inst_32451 = (state_32482[(10)]);
var inst_32471 = (state_32482[(2)]);
var tmp32491 = inst_32451;
var inst_32451__$1 = tmp32491;
var state_32482__$1 = (function (){var statearr_32494 = state_32482;
(statearr_32494[(10)] = inst_32451__$1);

(statearr_32494[(11)] = inst_32471);

return statearr_32494;
})();
var statearr_32495_34688 = state_32482__$1;
(statearr_32495_34688[(2)] = null);

(statearr_32495_34688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32483 === (9))){
var inst_32462 = (state_32482[(7)]);
var state_32482__$1 = state_32482;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32482__$1,(11),out,inst_32462);
} else {
if((state_val_32483 === (5))){
var inst_32476 = cljs.core.async.close_BANG_(out);
var state_32482__$1 = state_32482;
var statearr_32498_34694 = state_32482__$1;
(statearr_32498_34694[(2)] = inst_32476);

(statearr_32498_34694[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32483 === (10))){
var inst_32474 = (state_32482[(2)]);
var state_32482__$1 = state_32482;
var statearr_32501_34696 = state_32482__$1;
(statearr_32501_34696[(2)] = inst_32474);

(statearr_32501_34696[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32483 === (8))){
var inst_32462 = (state_32482[(7)]);
var inst_32451 = (state_32482[(10)]);
var inst_32461 = (state_32482[(8)]);
var inst_32463 = (state_32482[(9)]);
var inst_32466 = (function (){var cs = inst_32451;
var vec__32456 = inst_32461;
var v = inst_32462;
var c = inst_32463;
return (function (p1__32447_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32447_SHARP_);
});
})();
var inst_32467 = cljs.core.filterv(inst_32466,inst_32451);
var inst_32451__$1 = inst_32467;
var state_32482__$1 = (function (){var statearr_32502 = state_32482;
(statearr_32502[(10)] = inst_32451__$1);

return statearr_32502;
})();
var statearr_32504_34702 = state_32482__$1;
(statearr_32504_34702[(2)] = null);

(statearr_32504_34702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29562__auto__ = null;
var cljs$core$async$state_machine__29562__auto____0 = (function (){
var statearr_32506 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32506[(0)] = cljs$core$async$state_machine__29562__auto__);

(statearr_32506[(1)] = (1));

return statearr_32506;
});
var cljs$core$async$state_machine__29562__auto____1 = (function (state_32482){
while(true){
var ret_value__29563__auto__ = (function (){try{while(true){
var result__29564__auto__ = switch__29561__auto__(state_32482);
if(cljs.core.keyword_identical_QMARK_(result__29564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29564__auto__;
}
break;
}
}catch (e32507){if((e32507 instanceof Object)){
var ex__29565__auto__ = e32507;
var statearr_32508_34719 = state_32482;
(statearr_32508_34719[(5)] = ex__29565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32507;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34720 = state_32482;
state_32482 = G__34720;
continue;
} else {
return ret_value__29563__auto__;
}
break;
}
});
cljs$core$async$state_machine__29562__auto__ = function(state_32482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29562__auto____1.call(this,state_32482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29562__auto____0;
cljs$core$async$state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29562__auto____1;
return cljs$core$async$state_machine__29562__auto__;
})()
})();
var state__29904__auto__ = (function (){var statearr_32509 = f__29903__auto__();
(statearr_32509[(6)] = c__29902__auto___34629);

return statearr_32509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29904__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32512 = arguments.length;
switch (G__32512) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29902__auto___34722 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29903__auto__ = (function (){var switch__29561__auto__ = (function (state_32538){
var state_val_32539 = (state_32538[(1)]);
if((state_val_32539 === (7))){
var inst_32519 = (state_32538[(7)]);
var inst_32519__$1 = (state_32538[(2)]);
var inst_32520 = (inst_32519__$1 == null);
var inst_32521 = cljs.core.not(inst_32520);
var state_32538__$1 = (function (){var statearr_32540 = state_32538;
(statearr_32540[(7)] = inst_32519__$1);

return statearr_32540;
})();
if(inst_32521){
var statearr_32541_34723 = state_32538__$1;
(statearr_32541_34723[(1)] = (8));

} else {
var statearr_32542_34724 = state_32538__$1;
(statearr_32542_34724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (1))){
var inst_32514 = (0);
var state_32538__$1 = (function (){var statearr_32543 = state_32538;
(statearr_32543[(8)] = inst_32514);

return statearr_32543;
})();
var statearr_32544_34728 = state_32538__$1;
(statearr_32544_34728[(2)] = null);

(statearr_32544_34728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (4))){
var state_32538__$1 = state_32538;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32538__$1,(7),ch);
} else {
if((state_val_32539 === (6))){
var inst_32532 = (state_32538[(2)]);
var state_32538__$1 = state_32538;
var statearr_32545_34736 = state_32538__$1;
(statearr_32545_34736[(2)] = inst_32532);

(statearr_32545_34736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (3))){
var inst_32534 = (state_32538[(2)]);
var inst_32536 = cljs.core.async.close_BANG_(out);
var state_32538__$1 = (function (){var statearr_32546 = state_32538;
(statearr_32546[(9)] = inst_32534);

return statearr_32546;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32538__$1,inst_32536);
} else {
if((state_val_32539 === (2))){
var inst_32514 = (state_32538[(8)]);
var inst_32516 = (inst_32514 < n);
var state_32538__$1 = state_32538;
if(cljs.core.truth_(inst_32516)){
var statearr_32547_34740 = state_32538__$1;
(statearr_32547_34740[(1)] = (4));

} else {
var statearr_32548_34741 = state_32538__$1;
(statearr_32548_34741[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (11))){
var inst_32514 = (state_32538[(8)]);
var inst_32524 = (state_32538[(2)]);
var inst_32525 = (inst_32514 + (1));
var inst_32514__$1 = inst_32525;
var state_32538__$1 = (function (){var statearr_32550 = state_32538;
(statearr_32550[(10)] = inst_32524);

(statearr_32550[(8)] = inst_32514__$1);

return statearr_32550;
})();
var statearr_32551_34748 = state_32538__$1;
(statearr_32551_34748[(2)] = null);

(statearr_32551_34748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (9))){
var state_32538__$1 = state_32538;
var statearr_32552_34749 = state_32538__$1;
(statearr_32552_34749[(2)] = null);

(statearr_32552_34749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (5))){
var state_32538__$1 = state_32538;
var statearr_32553_34751 = state_32538__$1;
(statearr_32553_34751[(2)] = null);

(statearr_32553_34751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (10))){
var inst_32529 = (state_32538[(2)]);
var state_32538__$1 = state_32538;
var statearr_32557_34752 = state_32538__$1;
(statearr_32557_34752[(2)] = inst_32529);

(statearr_32557_34752[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (8))){
var inst_32519 = (state_32538[(7)]);
var state_32538__$1 = state_32538;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32538__$1,(11),out,inst_32519);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29562__auto__ = null;
var cljs$core$async$state_machine__29562__auto____0 = (function (){
var statearr_32559 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32559[(0)] = cljs$core$async$state_machine__29562__auto__);

(statearr_32559[(1)] = (1));

return statearr_32559;
});
var cljs$core$async$state_machine__29562__auto____1 = (function (state_32538){
while(true){
var ret_value__29563__auto__ = (function (){try{while(true){
var result__29564__auto__ = switch__29561__auto__(state_32538);
if(cljs.core.keyword_identical_QMARK_(result__29564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29564__auto__;
}
break;
}
}catch (e32560){if((e32560 instanceof Object)){
var ex__29565__auto__ = e32560;
var statearr_32561_34762 = state_32538;
(statearr_32561_34762[(5)] = ex__29565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32560;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34763 = state_32538;
state_32538 = G__34763;
continue;
} else {
return ret_value__29563__auto__;
}
break;
}
});
cljs$core$async$state_machine__29562__auto__ = function(state_32538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29562__auto____1.call(this,state_32538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29562__auto____0;
cljs$core$async$state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29562__auto____1;
return cljs$core$async$state_machine__29562__auto__;
})()
})();
var state__29904__auto__ = (function (){var statearr_32564 = f__29903__auto__();
(statearr_32564[(6)] = c__29902__auto___34722);

return statearr_32564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29904__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32567 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32567 = (function (f,ch,meta32569){
this.f = f;
this.ch = ch;
this.meta32569 = meta32569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32570,meta32569__$1){
var self__ = this;
var _32570__$1 = this;
return (new cljs.core.async.t_cljs$core$async32567(self__.f,self__.ch,meta32569__$1));
}));

(cljs.core.async.t_cljs$core$async32567.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32570){
var self__ = this;
var _32570__$1 = this;
return self__.meta32569;
}));

(cljs.core.async.t_cljs$core$async32567.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32567.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32567.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32567.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32567.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32573 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32573 = (function (f,ch,meta32569,_,fn1,meta32574){
this.f = f;
this.ch = ch;
this.meta32569 = meta32569;
this._ = _;
this.fn1 = fn1;
this.meta32574 = meta32574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32575,meta32574__$1){
var self__ = this;
var _32575__$1 = this;
return (new cljs.core.async.t_cljs$core$async32573(self__.f,self__.ch,self__.meta32569,self__._,self__.fn1,meta32574__$1));
}));

(cljs.core.async.t_cljs$core$async32573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32575){
var self__ = this;
var _32575__$1 = this;
return self__.meta32574;
}));

(cljs.core.async.t_cljs$core$async32573.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32573.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32573.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32573.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32566_SHARP_){
var G__32587 = (((p1__32566_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32566_SHARP_) : self__.f.call(null,p1__32566_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32587) : f1.call(null,G__32587));
});
}));

(cljs.core.async.t_cljs$core$async32573.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32569","meta32569",701507788,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32567","cljs.core.async/t_cljs$core$async32567",1799939648,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32574","meta32574",1708100369,null)], null);
}));

(cljs.core.async.t_cljs$core$async32573.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32573.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32573");

(cljs.core.async.t_cljs$core$async32573.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32573");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32573.
 */
cljs.core.async.__GT_t_cljs$core$async32573 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32573(f__$1,ch__$1,meta32569__$1,___$2,fn1__$1,meta32574){
return (new cljs.core.async.t_cljs$core$async32573(f__$1,ch__$1,meta32569__$1,___$2,fn1__$1,meta32574));
});

}

return (new cljs.core.async.t_cljs$core$async32573(self__.f,self__.ch,self__.meta32569,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32596 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32596) : self__.f.call(null,G__32596));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32567.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32567.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32567.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32569","meta32569",701507788,null)], null);
}));

(cljs.core.async.t_cljs$core$async32567.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32567.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32567");

(cljs.core.async.t_cljs$core$async32567.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32567");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32567.
 */
cljs.core.async.__GT_t_cljs$core$async32567 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32567(f__$1,ch__$1,meta32569){
return (new cljs.core.async.t_cljs$core$async32567(f__$1,ch__$1,meta32569));
});

}

return (new cljs.core.async.t_cljs$core$async32567(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32606 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32606 = (function (f,ch,meta32607){
this.f = f;
this.ch = ch;
this.meta32607 = meta32607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32608,meta32607__$1){
var self__ = this;
var _32608__$1 = this;
return (new cljs.core.async.t_cljs$core$async32606(self__.f,self__.ch,meta32607__$1));
}));

(cljs.core.async.t_cljs$core$async32606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32608){
var self__ = this;
var _32608__$1 = this;
return self__.meta32607;
}));

(cljs.core.async.t_cljs$core$async32606.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32606.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32606.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32606.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32606.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32606.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32606.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32607","meta32607",-241971937,null)], null);
}));

(cljs.core.async.t_cljs$core$async32606.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32606");

(cljs.core.async.t_cljs$core$async32606.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32606");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32606.
 */
cljs.core.async.__GT_t_cljs$core$async32606 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32606(f__$1,ch__$1,meta32607){
return (new cljs.core.async.t_cljs$core$async32606(f__$1,ch__$1,meta32607));
});

}

return (new cljs.core.async.t_cljs$core$async32606(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32638 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32638 = (function (p,ch,meta32639){
this.p = p;
this.ch = ch;
this.meta32639 = meta32639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32640,meta32639__$1){
var self__ = this;
var _32640__$1 = this;
return (new cljs.core.async.t_cljs$core$async32638(self__.p,self__.ch,meta32639__$1));
}));

(cljs.core.async.t_cljs$core$async32638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32640){
var self__ = this;
var _32640__$1 = this;
return self__.meta32639;
}));

(cljs.core.async.t_cljs$core$async32638.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32638.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32638.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32638.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32638.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32638.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32638.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32638.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32639","meta32639",966848652,null)], null);
}));

(cljs.core.async.t_cljs$core$async32638.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32638.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32638");

(cljs.core.async.t_cljs$core$async32638.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32638");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32638.
 */
cljs.core.async.__GT_t_cljs$core$async32638 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32638(p__$1,ch__$1,meta32639){
return (new cljs.core.async.t_cljs$core$async32638(p__$1,ch__$1,meta32639));
});

}

return (new cljs.core.async.t_cljs$core$async32638(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32665 = arguments.length;
switch (G__32665) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29902__auto___34798 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29903__auto__ = (function (){var switch__29561__auto__ = (function (state_32699){
var state_val_32700 = (state_32699[(1)]);
if((state_val_32700 === (7))){
var inst_32692 = (state_32699[(2)]);
var state_32699__$1 = state_32699;
var statearr_32705_34800 = state_32699__$1;
(statearr_32705_34800[(2)] = inst_32692);

(statearr_32705_34800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (1))){
var state_32699__$1 = state_32699;
var statearr_32706_34802 = state_32699__$1;
(statearr_32706_34802[(2)] = null);

(statearr_32706_34802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (4))){
var inst_32677 = (state_32699[(7)]);
var inst_32677__$1 = (state_32699[(2)]);
var inst_32678 = (inst_32677__$1 == null);
var state_32699__$1 = (function (){var statearr_32707 = state_32699;
(statearr_32707[(7)] = inst_32677__$1);

return statearr_32707;
})();
if(cljs.core.truth_(inst_32678)){
var statearr_32709_34803 = state_32699__$1;
(statearr_32709_34803[(1)] = (5));

} else {
var statearr_32710_34804 = state_32699__$1;
(statearr_32710_34804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (6))){
var inst_32677 = (state_32699[(7)]);
var inst_32682 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32677) : p.call(null,inst_32677));
var state_32699__$1 = state_32699;
if(cljs.core.truth_(inst_32682)){
var statearr_32713_34805 = state_32699__$1;
(statearr_32713_34805[(1)] = (8));

} else {
var statearr_32714_34806 = state_32699__$1;
(statearr_32714_34806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (3))){
var inst_32694 = (state_32699[(2)]);
var state_32699__$1 = state_32699;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32699__$1,inst_32694);
} else {
if((state_val_32700 === (2))){
var state_32699__$1 = state_32699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32699__$1,(4),ch);
} else {
if((state_val_32700 === (11))){
var inst_32685 = (state_32699[(2)]);
var state_32699__$1 = state_32699;
var statearr_32717_34809 = state_32699__$1;
(statearr_32717_34809[(2)] = inst_32685);

(statearr_32717_34809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (9))){
var state_32699__$1 = state_32699;
var statearr_32722_34810 = state_32699__$1;
(statearr_32722_34810[(2)] = null);

(statearr_32722_34810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (5))){
var inst_32680 = cljs.core.async.close_BANG_(out);
var state_32699__$1 = state_32699;
var statearr_32724_34811 = state_32699__$1;
(statearr_32724_34811[(2)] = inst_32680);

(statearr_32724_34811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (10))){
var inst_32688 = (state_32699[(2)]);
var state_32699__$1 = (function (){var statearr_32726 = state_32699;
(statearr_32726[(8)] = inst_32688);

return statearr_32726;
})();
var statearr_32727_34813 = state_32699__$1;
(statearr_32727_34813[(2)] = null);

(statearr_32727_34813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (8))){
var inst_32677 = (state_32699[(7)]);
var state_32699__$1 = state_32699;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32699__$1,(11),out,inst_32677);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29562__auto__ = null;
var cljs$core$async$state_machine__29562__auto____0 = (function (){
var statearr_32728 = [null,null,null,null,null,null,null,null,null];
(statearr_32728[(0)] = cljs$core$async$state_machine__29562__auto__);

(statearr_32728[(1)] = (1));

return statearr_32728;
});
var cljs$core$async$state_machine__29562__auto____1 = (function (state_32699){
while(true){
var ret_value__29563__auto__ = (function (){try{while(true){
var result__29564__auto__ = switch__29561__auto__(state_32699);
if(cljs.core.keyword_identical_QMARK_(result__29564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29564__auto__;
}
break;
}
}catch (e32729){if((e32729 instanceof Object)){
var ex__29565__auto__ = e32729;
var statearr_32730_34822 = state_32699;
(statearr_32730_34822[(5)] = ex__29565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32729;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34824 = state_32699;
state_32699 = G__34824;
continue;
} else {
return ret_value__29563__auto__;
}
break;
}
});
cljs$core$async$state_machine__29562__auto__ = function(state_32699){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29562__auto____1.call(this,state_32699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29562__auto____0;
cljs$core$async$state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29562__auto____1;
return cljs$core$async$state_machine__29562__auto__;
})()
})();
var state__29904__auto__ = (function (){var statearr_32733 = f__29903__auto__();
(statearr_32733[(6)] = c__29902__auto___34798);

return statearr_32733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29904__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32739 = arguments.length;
switch (G__32739) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29902__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29903__auto__ = (function (){var switch__29561__auto__ = (function (state_32804){
var state_val_32805 = (state_32804[(1)]);
if((state_val_32805 === (7))){
var inst_32799 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
var statearr_32806_34831 = state_32804__$1;
(statearr_32806_34831[(2)] = inst_32799);

(statearr_32806_34831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (20))){
var inst_32767 = (state_32804[(7)]);
var inst_32778 = (state_32804[(2)]);
var inst_32779 = cljs.core.next(inst_32767);
var inst_32753 = inst_32779;
var inst_32754 = null;
var inst_32755 = (0);
var inst_32756 = (0);
var state_32804__$1 = (function (){var statearr_32807 = state_32804;
(statearr_32807[(8)] = inst_32755);

(statearr_32807[(9)] = inst_32754);

(statearr_32807[(10)] = inst_32756);

(statearr_32807[(11)] = inst_32778);

(statearr_32807[(12)] = inst_32753);

return statearr_32807;
})();
var statearr_32808_34836 = state_32804__$1;
(statearr_32808_34836[(2)] = null);

(statearr_32808_34836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (1))){
var state_32804__$1 = state_32804;
var statearr_32809_34837 = state_32804__$1;
(statearr_32809_34837[(2)] = null);

(statearr_32809_34837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (4))){
var inst_32742 = (state_32804[(13)]);
var inst_32742__$1 = (state_32804[(2)]);
var inst_32743 = (inst_32742__$1 == null);
var state_32804__$1 = (function (){var statearr_32815 = state_32804;
(statearr_32815[(13)] = inst_32742__$1);

return statearr_32815;
})();
if(cljs.core.truth_(inst_32743)){
var statearr_32816_34840 = state_32804__$1;
(statearr_32816_34840[(1)] = (5));

} else {
var statearr_32817_34841 = state_32804__$1;
(statearr_32817_34841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (15))){
var state_32804__$1 = state_32804;
var statearr_32821_34842 = state_32804__$1;
(statearr_32821_34842[(2)] = null);

(statearr_32821_34842[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (21))){
var state_32804__$1 = state_32804;
var statearr_32824_34843 = state_32804__$1;
(statearr_32824_34843[(2)] = null);

(statearr_32824_34843[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (13))){
var inst_32755 = (state_32804[(8)]);
var inst_32754 = (state_32804[(9)]);
var inst_32756 = (state_32804[(10)]);
var inst_32753 = (state_32804[(12)]);
var inst_32763 = (state_32804[(2)]);
var inst_32764 = (inst_32756 + (1));
var tmp32818 = inst_32755;
var tmp32819 = inst_32754;
var tmp32820 = inst_32753;
var inst_32753__$1 = tmp32820;
var inst_32754__$1 = tmp32819;
var inst_32755__$1 = tmp32818;
var inst_32756__$1 = inst_32764;
var state_32804__$1 = (function (){var statearr_32827 = state_32804;
(statearr_32827[(8)] = inst_32755__$1);

(statearr_32827[(14)] = inst_32763);

(statearr_32827[(9)] = inst_32754__$1);

(statearr_32827[(10)] = inst_32756__$1);

(statearr_32827[(12)] = inst_32753__$1);

return statearr_32827;
})();
var statearr_32828_34845 = state_32804__$1;
(statearr_32828_34845[(2)] = null);

(statearr_32828_34845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (22))){
var state_32804__$1 = state_32804;
var statearr_32829_34846 = state_32804__$1;
(statearr_32829_34846[(2)] = null);

(statearr_32829_34846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (6))){
var inst_32742 = (state_32804[(13)]);
var inst_32751 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32742) : f.call(null,inst_32742));
var inst_32752 = cljs.core.seq(inst_32751);
var inst_32753 = inst_32752;
var inst_32754 = null;
var inst_32755 = (0);
var inst_32756 = (0);
var state_32804__$1 = (function (){var statearr_32836 = state_32804;
(statearr_32836[(8)] = inst_32755);

(statearr_32836[(9)] = inst_32754);

(statearr_32836[(10)] = inst_32756);

(statearr_32836[(12)] = inst_32753);

return statearr_32836;
})();
var statearr_32838_34847 = state_32804__$1;
(statearr_32838_34847[(2)] = null);

(statearr_32838_34847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (17))){
var inst_32767 = (state_32804[(7)]);
var inst_32771 = cljs.core.chunk_first(inst_32767);
var inst_32772 = cljs.core.chunk_rest(inst_32767);
var inst_32773 = cljs.core.count(inst_32771);
var inst_32753 = inst_32772;
var inst_32754 = inst_32771;
var inst_32755 = inst_32773;
var inst_32756 = (0);
var state_32804__$1 = (function (){var statearr_32843 = state_32804;
(statearr_32843[(8)] = inst_32755);

(statearr_32843[(9)] = inst_32754);

(statearr_32843[(10)] = inst_32756);

(statearr_32843[(12)] = inst_32753);

return statearr_32843;
})();
var statearr_32864_34849 = state_32804__$1;
(statearr_32864_34849[(2)] = null);

(statearr_32864_34849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (3))){
var inst_32801 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32804__$1,inst_32801);
} else {
if((state_val_32805 === (12))){
var inst_32788 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
var statearr_32865_34850 = state_32804__$1;
(statearr_32865_34850[(2)] = inst_32788);

(statearr_32865_34850[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (2))){
var state_32804__$1 = state_32804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32804__$1,(4),in$);
} else {
if((state_val_32805 === (23))){
var inst_32797 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
var statearr_32867_34851 = state_32804__$1;
(statearr_32867_34851[(2)] = inst_32797);

(statearr_32867_34851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (19))){
var inst_32783 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
var statearr_32868_34853 = state_32804__$1;
(statearr_32868_34853[(2)] = inst_32783);

(statearr_32868_34853[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (11))){
var inst_32767 = (state_32804[(7)]);
var inst_32753 = (state_32804[(12)]);
var inst_32767__$1 = cljs.core.seq(inst_32753);
var state_32804__$1 = (function (){var statearr_32869 = state_32804;
(statearr_32869[(7)] = inst_32767__$1);

return statearr_32869;
})();
if(inst_32767__$1){
var statearr_32870_34858 = state_32804__$1;
(statearr_32870_34858[(1)] = (14));

} else {
var statearr_32874_34859 = state_32804__$1;
(statearr_32874_34859[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (9))){
var inst_32790 = (state_32804[(2)]);
var inst_32792 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32804__$1 = (function (){var statearr_32875 = state_32804;
(statearr_32875[(15)] = inst_32790);

return statearr_32875;
})();
if(cljs.core.truth_(inst_32792)){
var statearr_32876_34860 = state_32804__$1;
(statearr_32876_34860[(1)] = (21));

} else {
var statearr_32877_34863 = state_32804__$1;
(statearr_32877_34863[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (5))){
var inst_32745 = cljs.core.async.close_BANG_(out);
var state_32804__$1 = state_32804;
var statearr_32878_34864 = state_32804__$1;
(statearr_32878_34864[(2)] = inst_32745);

(statearr_32878_34864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (14))){
var inst_32767 = (state_32804[(7)]);
var inst_32769 = cljs.core.chunked_seq_QMARK_(inst_32767);
var state_32804__$1 = state_32804;
if(inst_32769){
var statearr_32882_34865 = state_32804__$1;
(statearr_32882_34865[(1)] = (17));

} else {
var statearr_32883_34866 = state_32804__$1;
(statearr_32883_34866[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (16))){
var inst_32786 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
var statearr_32889_34868 = state_32804__$1;
(statearr_32889_34868[(2)] = inst_32786);

(statearr_32889_34868[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (10))){
var inst_32754 = (state_32804[(9)]);
var inst_32756 = (state_32804[(10)]);
var inst_32761 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32754,inst_32756);
var state_32804__$1 = state_32804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32804__$1,(13),out,inst_32761);
} else {
if((state_val_32805 === (18))){
var inst_32767 = (state_32804[(7)]);
var inst_32776 = cljs.core.first(inst_32767);
var state_32804__$1 = state_32804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32804__$1,(20),out,inst_32776);
} else {
if((state_val_32805 === (8))){
var inst_32755 = (state_32804[(8)]);
var inst_32756 = (state_32804[(10)]);
var inst_32758 = (inst_32756 < inst_32755);
var inst_32759 = inst_32758;
var state_32804__$1 = state_32804;
if(cljs.core.truth_(inst_32759)){
var statearr_32892_34874 = state_32804__$1;
(statearr_32892_34874[(1)] = (10));

} else {
var statearr_32893_34875 = state_32804__$1;
(statearr_32893_34875[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29562__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29562__auto____0 = (function (){
var statearr_32895 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32895[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29562__auto__);

(statearr_32895[(1)] = (1));

return statearr_32895;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29562__auto____1 = (function (state_32804){
while(true){
var ret_value__29563__auto__ = (function (){try{while(true){
var result__29564__auto__ = switch__29561__auto__(state_32804);
if(cljs.core.keyword_identical_QMARK_(result__29564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29564__auto__;
}
break;
}
}catch (e32896){if((e32896 instanceof Object)){
var ex__29565__auto__ = e32896;
var statearr_32897_34877 = state_32804;
(statearr_32897_34877[(5)] = ex__29565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32896;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34879 = state_32804;
state_32804 = G__34879;
continue;
} else {
return ret_value__29563__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29562__auto__ = function(state_32804){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29562__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29562__auto____1.call(this,state_32804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29562__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29562__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29562__auto__;
})()
})();
var state__29904__auto__ = (function (){var statearr_32899 = f__29903__auto__();
(statearr_32899[(6)] = c__29902__auto__);

return statearr_32899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29904__auto__);
}));

return c__29902__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32901 = arguments.length;
switch (G__32901) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32908 = arguments.length;
switch (G__32908) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32912 = arguments.length;
switch (G__32912) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29902__auto___34896 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29903__auto__ = (function (){var switch__29561__auto__ = (function (state_32936){
var state_val_32937 = (state_32936[(1)]);
if((state_val_32937 === (7))){
var inst_32931 = (state_32936[(2)]);
var state_32936__$1 = state_32936;
var statearr_32938_34897 = state_32936__$1;
(statearr_32938_34897[(2)] = inst_32931);

(statearr_32938_34897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32937 === (1))){
var inst_32913 = null;
var state_32936__$1 = (function (){var statearr_32939 = state_32936;
(statearr_32939[(7)] = inst_32913);

return statearr_32939;
})();
var statearr_32940_34898 = state_32936__$1;
(statearr_32940_34898[(2)] = null);

(statearr_32940_34898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32937 === (4))){
var inst_32916 = (state_32936[(8)]);
var inst_32916__$1 = (state_32936[(2)]);
var inst_32917 = (inst_32916__$1 == null);
var inst_32918 = cljs.core.not(inst_32917);
var state_32936__$1 = (function (){var statearr_32941 = state_32936;
(statearr_32941[(8)] = inst_32916__$1);

return statearr_32941;
})();
if(inst_32918){
var statearr_32945_34900 = state_32936__$1;
(statearr_32945_34900[(1)] = (5));

} else {
var statearr_32946_34902 = state_32936__$1;
(statearr_32946_34902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32937 === (6))){
var state_32936__$1 = state_32936;
var statearr_32947_34904 = state_32936__$1;
(statearr_32947_34904[(2)] = null);

(statearr_32947_34904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32937 === (3))){
var inst_32933 = (state_32936[(2)]);
var inst_32934 = cljs.core.async.close_BANG_(out);
var state_32936__$1 = (function (){var statearr_32948 = state_32936;
(statearr_32948[(9)] = inst_32933);

return statearr_32948;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32936__$1,inst_32934);
} else {
if((state_val_32937 === (2))){
var state_32936__$1 = state_32936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32936__$1,(4),ch);
} else {
if((state_val_32937 === (11))){
var inst_32916 = (state_32936[(8)]);
var inst_32925 = (state_32936[(2)]);
var inst_32913 = inst_32916;
var state_32936__$1 = (function (){var statearr_32949 = state_32936;
(statearr_32949[(7)] = inst_32913);

(statearr_32949[(10)] = inst_32925);

return statearr_32949;
})();
var statearr_32950_34913 = state_32936__$1;
(statearr_32950_34913[(2)] = null);

(statearr_32950_34913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32937 === (9))){
var inst_32916 = (state_32936[(8)]);
var state_32936__$1 = state_32936;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32936__$1,(11),out,inst_32916);
} else {
if((state_val_32937 === (5))){
var inst_32913 = (state_32936[(7)]);
var inst_32916 = (state_32936[(8)]);
var inst_32920 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32916,inst_32913);
var state_32936__$1 = state_32936;
if(inst_32920){
var statearr_32955_34919 = state_32936__$1;
(statearr_32955_34919[(1)] = (8));

} else {
var statearr_32956_34920 = state_32936__$1;
(statearr_32956_34920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32937 === (10))){
var inst_32928 = (state_32936[(2)]);
var state_32936__$1 = state_32936;
var statearr_32958_34925 = state_32936__$1;
(statearr_32958_34925[(2)] = inst_32928);

(statearr_32958_34925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32937 === (8))){
var inst_32913 = (state_32936[(7)]);
var tmp32954 = inst_32913;
var inst_32913__$1 = tmp32954;
var state_32936__$1 = (function (){var statearr_32959 = state_32936;
(statearr_32959[(7)] = inst_32913__$1);

return statearr_32959;
})();
var statearr_32960_34931 = state_32936__$1;
(statearr_32960_34931[(2)] = null);

(statearr_32960_34931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29562__auto__ = null;
var cljs$core$async$state_machine__29562__auto____0 = (function (){
var statearr_32961 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32961[(0)] = cljs$core$async$state_machine__29562__auto__);

(statearr_32961[(1)] = (1));

return statearr_32961;
});
var cljs$core$async$state_machine__29562__auto____1 = (function (state_32936){
while(true){
var ret_value__29563__auto__ = (function (){try{while(true){
var result__29564__auto__ = switch__29561__auto__(state_32936);
if(cljs.core.keyword_identical_QMARK_(result__29564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29564__auto__;
}
break;
}
}catch (e32963){if((e32963 instanceof Object)){
var ex__29565__auto__ = e32963;
var statearr_32964_34936 = state_32936;
(statearr_32964_34936[(5)] = ex__29565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32963;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34938 = state_32936;
state_32936 = G__34938;
continue;
} else {
return ret_value__29563__auto__;
}
break;
}
});
cljs$core$async$state_machine__29562__auto__ = function(state_32936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29562__auto____1.call(this,state_32936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29562__auto____0;
cljs$core$async$state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29562__auto____1;
return cljs$core$async$state_machine__29562__auto__;
})()
})();
var state__29904__auto__ = (function (){var statearr_32967 = f__29903__auto__();
(statearr_32967[(6)] = c__29902__auto___34896);

return statearr_32967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29904__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32975 = arguments.length;
switch (G__32975) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29902__auto___34940 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29903__auto__ = (function (){var switch__29561__auto__ = (function (state_33016){
var state_val_33017 = (state_33016[(1)]);
if((state_val_33017 === (7))){
var inst_33012 = (state_33016[(2)]);
var state_33016__$1 = state_33016;
var statearr_33018_34945 = state_33016__$1;
(statearr_33018_34945[(2)] = inst_33012);

(statearr_33018_34945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (1))){
var inst_32977 = (new Array(n));
var inst_32978 = inst_32977;
var inst_32979 = (0);
var state_33016__$1 = (function (){var statearr_33019 = state_33016;
(statearr_33019[(7)] = inst_32978);

(statearr_33019[(8)] = inst_32979);

return statearr_33019;
})();
var statearr_33020_34950 = state_33016__$1;
(statearr_33020_34950[(2)] = null);

(statearr_33020_34950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (4))){
var inst_32982 = (state_33016[(9)]);
var inst_32982__$1 = (state_33016[(2)]);
var inst_32983 = (inst_32982__$1 == null);
var inst_32984 = cljs.core.not(inst_32983);
var state_33016__$1 = (function (){var statearr_33022 = state_33016;
(statearr_33022[(9)] = inst_32982__$1);

return statearr_33022;
})();
if(inst_32984){
var statearr_33026_34951 = state_33016__$1;
(statearr_33026_34951[(1)] = (5));

} else {
var statearr_33027_34956 = state_33016__$1;
(statearr_33027_34956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (15))){
var inst_33006 = (state_33016[(2)]);
var state_33016__$1 = state_33016;
var statearr_33029_34957 = state_33016__$1;
(statearr_33029_34957[(2)] = inst_33006);

(statearr_33029_34957[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (13))){
var state_33016__$1 = state_33016;
var statearr_33030_34958 = state_33016__$1;
(statearr_33030_34958[(2)] = null);

(statearr_33030_34958[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (6))){
var inst_32979 = (state_33016[(8)]);
var inst_33002 = (inst_32979 > (0));
var state_33016__$1 = state_33016;
if(cljs.core.truth_(inst_33002)){
var statearr_33031_34962 = state_33016__$1;
(statearr_33031_34962[(1)] = (12));

} else {
var statearr_33032_34963 = state_33016__$1;
(statearr_33032_34963[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (3))){
var inst_33014 = (state_33016[(2)]);
var state_33016__$1 = state_33016;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33016__$1,inst_33014);
} else {
if((state_val_33017 === (12))){
var inst_32978 = (state_33016[(7)]);
var inst_33004 = cljs.core.vec(inst_32978);
var state_33016__$1 = state_33016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33016__$1,(15),out,inst_33004);
} else {
if((state_val_33017 === (2))){
var state_33016__$1 = state_33016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33016__$1,(4),ch);
} else {
if((state_val_33017 === (11))){
var inst_32996 = (state_33016[(2)]);
var inst_32997 = (new Array(n));
var inst_32978 = inst_32997;
var inst_32979 = (0);
var state_33016__$1 = (function (){var statearr_33033 = state_33016;
(statearr_33033[(7)] = inst_32978);

(statearr_33033[(8)] = inst_32979);

(statearr_33033[(10)] = inst_32996);

return statearr_33033;
})();
var statearr_33036_34981 = state_33016__$1;
(statearr_33036_34981[(2)] = null);

(statearr_33036_34981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (9))){
var inst_32978 = (state_33016[(7)]);
var inst_32994 = cljs.core.vec(inst_32978);
var state_33016__$1 = state_33016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33016__$1,(11),out,inst_32994);
} else {
if((state_val_33017 === (5))){
var inst_32989 = (state_33016[(11)]);
var inst_32978 = (state_33016[(7)]);
var inst_32982 = (state_33016[(9)]);
var inst_32979 = (state_33016[(8)]);
var inst_32986 = (inst_32978[inst_32979] = inst_32982);
var inst_32989__$1 = (inst_32979 + (1));
var inst_32990 = (inst_32989__$1 < n);
var state_33016__$1 = (function (){var statearr_33049 = state_33016;
(statearr_33049[(12)] = inst_32986);

(statearr_33049[(11)] = inst_32989__$1);

return statearr_33049;
})();
if(cljs.core.truth_(inst_32990)){
var statearr_33050_34986 = state_33016__$1;
(statearr_33050_34986[(1)] = (8));

} else {
var statearr_33051_34988 = state_33016__$1;
(statearr_33051_34988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (14))){
var inst_33009 = (state_33016[(2)]);
var inst_33010 = cljs.core.async.close_BANG_(out);
var state_33016__$1 = (function (){var statearr_33053 = state_33016;
(statearr_33053[(13)] = inst_33009);

return statearr_33053;
})();
var statearr_33054_34989 = state_33016__$1;
(statearr_33054_34989[(2)] = inst_33010);

(statearr_33054_34989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (10))){
var inst_33000 = (state_33016[(2)]);
var state_33016__$1 = state_33016;
var statearr_33055_34991 = state_33016__$1;
(statearr_33055_34991[(2)] = inst_33000);

(statearr_33055_34991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (8))){
var inst_32989 = (state_33016[(11)]);
var inst_32978 = (state_33016[(7)]);
var tmp33052 = inst_32978;
var inst_32978__$1 = tmp33052;
var inst_32979 = inst_32989;
var state_33016__$1 = (function (){var statearr_33059 = state_33016;
(statearr_33059[(7)] = inst_32978__$1);

(statearr_33059[(8)] = inst_32979);

return statearr_33059;
})();
var statearr_33062_34992 = state_33016__$1;
(statearr_33062_34992[(2)] = null);

(statearr_33062_34992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29562__auto__ = null;
var cljs$core$async$state_machine__29562__auto____0 = (function (){
var statearr_33063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33063[(0)] = cljs$core$async$state_machine__29562__auto__);

(statearr_33063[(1)] = (1));

return statearr_33063;
});
var cljs$core$async$state_machine__29562__auto____1 = (function (state_33016){
while(true){
var ret_value__29563__auto__ = (function (){try{while(true){
var result__29564__auto__ = switch__29561__auto__(state_33016);
if(cljs.core.keyword_identical_QMARK_(result__29564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29564__auto__;
}
break;
}
}catch (e33064){if((e33064 instanceof Object)){
var ex__29565__auto__ = e33064;
var statearr_33065_34993 = state_33016;
(statearr_33065_34993[(5)] = ex__29565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33064;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34994 = state_33016;
state_33016 = G__34994;
continue;
} else {
return ret_value__29563__auto__;
}
break;
}
});
cljs$core$async$state_machine__29562__auto__ = function(state_33016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29562__auto____1.call(this,state_33016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29562__auto____0;
cljs$core$async$state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29562__auto____1;
return cljs$core$async$state_machine__29562__auto__;
})()
})();
var state__29904__auto__ = (function (){var statearr_33066 = f__29903__auto__();
(statearr_33066[(6)] = c__29902__auto___34940);

return statearr_33066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29904__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33068 = arguments.length;
switch (G__33068) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29902__auto___34997 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29903__auto__ = (function (){var switch__29561__auto__ = (function (state_33117){
var state_val_33118 = (state_33117[(1)]);
if((state_val_33118 === (7))){
var inst_33113 = (state_33117[(2)]);
var state_33117__$1 = state_33117;
var statearr_33125_35000 = state_33117__$1;
(statearr_33125_35000[(2)] = inst_33113);

(statearr_33125_35000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33118 === (1))){
var inst_33069 = [];
var inst_33070 = inst_33069;
var inst_33071 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33117__$1 = (function (){var statearr_33128 = state_33117;
(statearr_33128[(7)] = inst_33071);

(statearr_33128[(8)] = inst_33070);

return statearr_33128;
})();
var statearr_33133_35002 = state_33117__$1;
(statearr_33133_35002[(2)] = null);

(statearr_33133_35002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33118 === (4))){
var inst_33074 = (state_33117[(9)]);
var inst_33074__$1 = (state_33117[(2)]);
var inst_33075 = (inst_33074__$1 == null);
var inst_33076 = cljs.core.not(inst_33075);
var state_33117__$1 = (function (){var statearr_33140 = state_33117;
(statearr_33140[(9)] = inst_33074__$1);

return statearr_33140;
})();
if(inst_33076){
var statearr_33141_35003 = state_33117__$1;
(statearr_33141_35003[(1)] = (5));

} else {
var statearr_33142_35004 = state_33117__$1;
(statearr_33142_35004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33118 === (15))){
var inst_33107 = (state_33117[(2)]);
var state_33117__$1 = state_33117;
var statearr_33143_35006 = state_33117__$1;
(statearr_33143_35006[(2)] = inst_33107);

(statearr_33143_35006[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33118 === (13))){
var state_33117__$1 = state_33117;
var statearr_33147_35007 = state_33117__$1;
(statearr_33147_35007[(2)] = null);

(statearr_33147_35007[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33118 === (6))){
var inst_33070 = (state_33117[(8)]);
var inst_33102 = inst_33070.length;
var inst_33103 = (inst_33102 > (0));
var state_33117__$1 = state_33117;
if(cljs.core.truth_(inst_33103)){
var statearr_33151_35008 = state_33117__$1;
(statearr_33151_35008[(1)] = (12));

} else {
var statearr_33152_35009 = state_33117__$1;
(statearr_33152_35009[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33118 === (3))){
var inst_33115 = (state_33117[(2)]);
var state_33117__$1 = state_33117;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33117__$1,inst_33115);
} else {
if((state_val_33118 === (12))){
var inst_33070 = (state_33117[(8)]);
var inst_33105 = cljs.core.vec(inst_33070);
var state_33117__$1 = state_33117;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33117__$1,(15),out,inst_33105);
} else {
if((state_val_33118 === (2))){
var state_33117__$1 = state_33117;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33117__$1,(4),ch);
} else {
if((state_val_33118 === (11))){
var inst_33074 = (state_33117[(9)]);
var inst_33078 = (state_33117[(10)]);
var inst_33094 = (state_33117[(2)]);
var inst_33095 = [];
var inst_33096 = inst_33095.push(inst_33074);
var inst_33070 = inst_33095;
var inst_33071 = inst_33078;
var state_33117__$1 = (function (){var statearr_33162 = state_33117;
(statearr_33162[(7)] = inst_33071);

(statearr_33162[(8)] = inst_33070);

(statearr_33162[(11)] = inst_33096);

(statearr_33162[(12)] = inst_33094);

return statearr_33162;
})();
var statearr_33163_35024 = state_33117__$1;
(statearr_33163_35024[(2)] = null);

(statearr_33163_35024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33118 === (9))){
var inst_33070 = (state_33117[(8)]);
var inst_33092 = cljs.core.vec(inst_33070);
var state_33117__$1 = state_33117;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33117__$1,(11),out,inst_33092);
} else {
if((state_val_33118 === (5))){
var inst_33071 = (state_33117[(7)]);
var inst_33074 = (state_33117[(9)]);
var inst_33078 = (state_33117[(10)]);
var inst_33078__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33074) : f.call(null,inst_33074));
var inst_33081 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33078__$1,inst_33071);
var inst_33082 = cljs.core.keyword_identical_QMARK_(inst_33071,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33083 = ((inst_33081) || (inst_33082));
var state_33117__$1 = (function (){var statearr_33167 = state_33117;
(statearr_33167[(10)] = inst_33078__$1);

return statearr_33167;
})();
if(cljs.core.truth_(inst_33083)){
var statearr_33171_35044 = state_33117__$1;
(statearr_33171_35044[(1)] = (8));

} else {
var statearr_33173_35045 = state_33117__$1;
(statearr_33173_35045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33118 === (14))){
var inst_33110 = (state_33117[(2)]);
var inst_33111 = cljs.core.async.close_BANG_(out);
var state_33117__$1 = (function (){var statearr_33178 = state_33117;
(statearr_33178[(13)] = inst_33110);

return statearr_33178;
})();
var statearr_33180_35054 = state_33117__$1;
(statearr_33180_35054[(2)] = inst_33111);

(statearr_33180_35054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33118 === (10))){
var inst_33100 = (state_33117[(2)]);
var state_33117__$1 = state_33117;
var statearr_33181_35061 = state_33117__$1;
(statearr_33181_35061[(2)] = inst_33100);

(statearr_33181_35061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33118 === (8))){
var inst_33074 = (state_33117[(9)]);
var inst_33078 = (state_33117[(10)]);
var inst_33070 = (state_33117[(8)]);
var inst_33089 = inst_33070.push(inst_33074);
var tmp33175 = inst_33070;
var inst_33070__$1 = tmp33175;
var inst_33071 = inst_33078;
var state_33117__$1 = (function (){var statearr_33186 = state_33117;
(statearr_33186[(7)] = inst_33071);

(statearr_33186[(14)] = inst_33089);

(statearr_33186[(8)] = inst_33070__$1);

return statearr_33186;
})();
var statearr_33189_35073 = state_33117__$1;
(statearr_33189_35073[(2)] = null);

(statearr_33189_35073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29562__auto__ = null;
var cljs$core$async$state_machine__29562__auto____0 = (function (){
var statearr_33192 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33192[(0)] = cljs$core$async$state_machine__29562__auto__);

(statearr_33192[(1)] = (1));

return statearr_33192;
});
var cljs$core$async$state_machine__29562__auto____1 = (function (state_33117){
while(true){
var ret_value__29563__auto__ = (function (){try{while(true){
var result__29564__auto__ = switch__29561__auto__(state_33117);
if(cljs.core.keyword_identical_QMARK_(result__29564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29564__auto__;
}
break;
}
}catch (e33195){if((e33195 instanceof Object)){
var ex__29565__auto__ = e33195;
var statearr_33196_35093 = state_33117;
(statearr_33196_35093[(5)] = ex__29565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33195;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35095 = state_33117;
state_33117 = G__35095;
continue;
} else {
return ret_value__29563__auto__;
}
break;
}
});
cljs$core$async$state_machine__29562__auto__ = function(state_33117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29562__auto____1.call(this,state_33117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29562__auto____0;
cljs$core$async$state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29562__auto____1;
return cljs$core$async$state_machine__29562__auto__;
})()
})();
var state__29904__auto__ = (function (){var statearr_33197 = f__29903__auto__();
(statearr_33197[(6)] = c__29902__auto___34997);

return statearr_33197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29904__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
