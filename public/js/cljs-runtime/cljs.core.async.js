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
var G__30009 = arguments.length;
switch (G__30009) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30023 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30023 = (function (f,blockable,meta30024){
this.f = f;
this.blockable = blockable;
this.meta30024 = meta30024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30025,meta30024__$1){
var self__ = this;
var _30025__$1 = this;
return (new cljs.core.async.t_cljs$core$async30023(self__.f,self__.blockable,meta30024__$1));
}));

(cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30025){
var self__ = this;
var _30025__$1 = this;
return self__.meta30024;
}));

(cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30023.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30024","meta30024",-144604471,null)], null);
}));

(cljs.core.async.t_cljs$core$async30023.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30023");

(cljs.core.async.t_cljs$core$async30023.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30023");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30023.
 */
cljs.core.async.__GT_t_cljs$core$async30023 = (function cljs$core$async$__GT_t_cljs$core$async30023(f__$1,blockable__$1,meta30024){
return (new cljs.core.async.t_cljs$core$async30023(f__$1,blockable__$1,meta30024));
});

}

return (new cljs.core.async.t_cljs$core$async30023(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30115 = arguments.length;
switch (G__30115) {
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
var G__30133 = arguments.length;
switch (G__30133) {
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
var G__30170 = arguments.length;
switch (G__30170) {
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
var val_33079 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33079) : fn1.call(null,val_33079));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33079) : fn1.call(null,val_33079));
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
var G__30189 = arguments.length;
switch (G__30189) {
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
var n__4666__auto___33103 = n;
var x_33104 = (0);
while(true){
if((x_33104 < n__4666__auto___33103)){
(a[x_33104] = x_33104);

var G__33106 = (x_33104 + (1));
x_33104 = G__33106;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30212 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30212 = (function (flag,meta30213){
this.flag = flag;
this.meta30213 = meta30213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30214,meta30213__$1){
var self__ = this;
var _30214__$1 = this;
return (new cljs.core.async.t_cljs$core$async30212(self__.flag,meta30213__$1));
}));

(cljs.core.async.t_cljs$core$async30212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30214){
var self__ = this;
var _30214__$1 = this;
return self__.meta30213;
}));

(cljs.core.async.t_cljs$core$async30212.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30212.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30212.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30212.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30212.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30213","meta30213",-1523952859,null)], null);
}));

(cljs.core.async.t_cljs$core$async30212.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30212");

(cljs.core.async.t_cljs$core$async30212.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30212");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30212.
 */
cljs.core.async.__GT_t_cljs$core$async30212 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30212(flag__$1,meta30213){
return (new cljs.core.async.t_cljs$core$async30212(flag__$1,meta30213));
});

}

return (new cljs.core.async.t_cljs$core$async30212(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30298 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30298 = (function (flag,cb,meta30299){
this.flag = flag;
this.cb = cb;
this.meta30299 = meta30299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30300,meta30299__$1){
var self__ = this;
var _30300__$1 = this;
return (new cljs.core.async.t_cljs$core$async30298(self__.flag,self__.cb,meta30299__$1));
}));

(cljs.core.async.t_cljs$core$async30298.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30300){
var self__ = this;
var _30300__$1 = this;
return self__.meta30299;
}));

(cljs.core.async.t_cljs$core$async30298.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30298.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30298.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30298.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30298.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30299","meta30299",1357739917,null)], null);
}));

(cljs.core.async.t_cljs$core$async30298.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30298.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30298");

(cljs.core.async.t_cljs$core$async30298.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30298");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30298.
 */
cljs.core.async.__GT_t_cljs$core$async30298 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30298(flag__$1,cb__$1,meta30299){
return (new cljs.core.async.t_cljs$core$async30298(flag__$1,cb__$1,meta30299));
});

}

return (new cljs.core.async.t_cljs$core$async30298(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30345_SHARP_){
var G__30354 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30345_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30354) : fret.call(null,G__30354));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30346_SHARP_){
var G__30355 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30346_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30355) : fret.call(null,G__30355));
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
var G__33122 = (i + (1));
i = G__33122;
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
var len__4789__auto___33133 = arguments.length;
var i__4790__auto___33134 = (0);
while(true){
if((i__4790__auto___33134 < len__4789__auto___33133)){
args__4795__auto__.push((arguments[i__4790__auto___33134]));

var G__33135 = (i__4790__auto___33134 + (1));
i__4790__auto___33134 = G__33135;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30381){
var map__30382 = p__30381;
var map__30382__$1 = (((((!((map__30382 == null))))?(((((map__30382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30382):map__30382);
var opts = map__30382__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30366){
var G__30367 = cljs.core.first(seq30366);
var seq30366__$1 = cljs.core.next(seq30366);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30367,seq30366__$1);
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
var G__30407 = arguments.length;
switch (G__30407) {
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
var c__29839__auto___33145 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29840__auto__ = (function (){var switch__29434__auto__ = (function (state_30491){
var state_val_30492 = (state_30491[(1)]);
if((state_val_30492 === (7))){
var inst_30485 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
var statearr_30497_33150 = state_30491__$1;
(statearr_30497_33150[(2)] = inst_30485);

(statearr_30497_33150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (1))){
var state_30491__$1 = state_30491;
var statearr_30498_33152 = state_30491__$1;
(statearr_30498_33152[(2)] = null);

(statearr_30498_33152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (4))){
var inst_30465 = (state_30491[(7)]);
var inst_30465__$1 = (state_30491[(2)]);
var inst_30466 = (inst_30465__$1 == null);
var state_30491__$1 = (function (){var statearr_30506 = state_30491;
(statearr_30506[(7)] = inst_30465__$1);

return statearr_30506;
})();
if(cljs.core.truth_(inst_30466)){
var statearr_30507_33155 = state_30491__$1;
(statearr_30507_33155[(1)] = (5));

} else {
var statearr_30509_33156 = state_30491__$1;
(statearr_30509_33156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (13))){
var state_30491__$1 = state_30491;
var statearr_30518_33157 = state_30491__$1;
(statearr_30518_33157[(2)] = null);

(statearr_30518_33157[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (6))){
var inst_30465 = (state_30491[(7)]);
var state_30491__$1 = state_30491;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30491__$1,(11),to,inst_30465);
} else {
if((state_val_30492 === (3))){
var inst_30487 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30491__$1,inst_30487);
} else {
if((state_val_30492 === (12))){
var state_30491__$1 = state_30491;
var statearr_30532_33159 = state_30491__$1;
(statearr_30532_33159[(2)] = null);

(statearr_30532_33159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (2))){
var state_30491__$1 = state_30491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30491__$1,(4),from);
} else {
if((state_val_30492 === (11))){
var inst_30477 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
if(cljs.core.truth_(inst_30477)){
var statearr_30541_33162 = state_30491__$1;
(statearr_30541_33162[(1)] = (12));

} else {
var statearr_30543_33164 = state_30491__$1;
(statearr_30543_33164[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (9))){
var state_30491__$1 = state_30491;
var statearr_30545_33165 = state_30491__$1;
(statearr_30545_33165[(2)] = null);

(statearr_30545_33165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (5))){
var state_30491__$1 = state_30491;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30553_33166 = state_30491__$1;
(statearr_30553_33166[(1)] = (8));

} else {
var statearr_30554_33167 = state_30491__$1;
(statearr_30554_33167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (14))){
var inst_30483 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
var statearr_30558_33169 = state_30491__$1;
(statearr_30558_33169[(2)] = inst_30483);

(statearr_30558_33169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (10))){
var inst_30474 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
var statearr_30564_33173 = state_30491__$1;
(statearr_30564_33173[(2)] = inst_30474);

(statearr_30564_33173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (8))){
var inst_30471 = cljs.core.async.close_BANG_(to);
var state_30491__$1 = state_30491;
var statearr_30572_33181 = state_30491__$1;
(statearr_30572_33181[(2)] = inst_30471);

(statearr_30572_33181[(1)] = (10));


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
var cljs$core$async$state_machine__29435__auto__ = null;
var cljs$core$async$state_machine__29435__auto____0 = (function (){
var statearr_30582 = [null,null,null,null,null,null,null,null];
(statearr_30582[(0)] = cljs$core$async$state_machine__29435__auto__);

(statearr_30582[(1)] = (1));

return statearr_30582;
});
var cljs$core$async$state_machine__29435__auto____1 = (function (state_30491){
while(true){
var ret_value__29436__auto__ = (function (){try{while(true){
var result__29437__auto__ = switch__29434__auto__(state_30491);
if(cljs.core.keyword_identical_QMARK_(result__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29437__auto__;
}
break;
}
}catch (e30586){if((e30586 instanceof Object)){
var ex__29438__auto__ = e30586;
var statearr_30592_33188 = state_30491;
(statearr_30592_33188[(5)] = ex__29438__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30586;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33189 = state_30491;
state_30491 = G__33189;
continue;
} else {
return ret_value__29436__auto__;
}
break;
}
});
cljs$core$async$state_machine__29435__auto__ = function(state_30491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29435__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29435__auto____1.call(this,state_30491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29435__auto____0;
cljs$core$async$state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29435__auto____1;
return cljs$core$async$state_machine__29435__auto__;
})()
})();
var state__29842__auto__ = (function (){var statearr_30596 = f__29840__auto__();
(statearr_30596[(6)] = c__29839__auto___33145);

return statearr_30596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29842__auto__);
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
var process = (function (p__30613){
var vec__30614 = p__30613;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30614,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30614,(1),null);
var job = vec__30614;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29839__auto___33205 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29840__auto__ = (function (){var switch__29434__auto__ = (function (state_30623){
var state_val_30624 = (state_30623[(1)]);
if((state_val_30624 === (1))){
var state_30623__$1 = state_30623;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30623__$1,(2),res,v);
} else {
if((state_val_30624 === (2))){
var inst_30620 = (state_30623[(2)]);
var inst_30621 = cljs.core.async.close_BANG_(res);
var state_30623__$1 = (function (){var statearr_30636 = state_30623;
(statearr_30636[(7)] = inst_30620);

return statearr_30636;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30623__$1,inst_30621);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29435__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29435__auto____0 = (function (){
var statearr_30641 = [null,null,null,null,null,null,null,null];
(statearr_30641[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29435__auto__);

(statearr_30641[(1)] = (1));

return statearr_30641;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29435__auto____1 = (function (state_30623){
while(true){
var ret_value__29436__auto__ = (function (){try{while(true){
var result__29437__auto__ = switch__29434__auto__(state_30623);
if(cljs.core.keyword_identical_QMARK_(result__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29437__auto__;
}
break;
}
}catch (e30644){if((e30644 instanceof Object)){
var ex__29438__auto__ = e30644;
var statearr_30648_33216 = state_30623;
(statearr_30648_33216[(5)] = ex__29438__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30644;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33219 = state_30623;
state_30623 = G__33219;
continue;
} else {
return ret_value__29436__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29435__auto__ = function(state_30623){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29435__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29435__auto____1.call(this,state_30623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29435__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29435__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29435__auto__;
})()
})();
var state__29842__auto__ = (function (){var statearr_30654 = f__29840__auto__();
(statearr_30654[(6)] = c__29839__auto___33205);

return statearr_30654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29842__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30661){
var vec__30662 = p__30661;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30662,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30662,(1),null);
var job = vec__30662;
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
var n__4666__auto___33228 = n;
var __33229 = (0);
while(true){
if((__33229 < n__4666__auto___33228)){
var G__30671_33230 = type;
var G__30671_33231__$1 = (((G__30671_33230 instanceof cljs.core.Keyword))?G__30671_33230.fqn:null);
switch (G__30671_33231__$1) {
case "compute":
var c__29839__auto___33237 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33229,c__29839__auto___33237,G__30671_33230,G__30671_33231__$1,n__4666__auto___33228,jobs,results,process,async){
return (function (){
var f__29840__auto__ = (function (){var switch__29434__auto__ = ((function (__33229,c__29839__auto___33237,G__30671_33230,G__30671_33231__$1,n__4666__auto___33228,jobs,results,process,async){
return (function (state_30684){
var state_val_30685 = (state_30684[(1)]);
if((state_val_30685 === (1))){
var state_30684__$1 = state_30684;
var statearr_30686_33243 = state_30684__$1;
(statearr_30686_33243[(2)] = null);

(statearr_30686_33243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30685 === (2))){
var state_30684__$1 = state_30684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30684__$1,(4),jobs);
} else {
if((state_val_30685 === (3))){
var inst_30682 = (state_30684[(2)]);
var state_30684__$1 = state_30684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30684__$1,inst_30682);
} else {
if((state_val_30685 === (4))){
var inst_30674 = (state_30684[(2)]);
var inst_30675 = process(inst_30674);
var state_30684__$1 = state_30684;
if(cljs.core.truth_(inst_30675)){
var statearr_30688_33260 = state_30684__$1;
(statearr_30688_33260[(1)] = (5));

} else {
var statearr_30689_33262 = state_30684__$1;
(statearr_30689_33262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30685 === (5))){
var state_30684__$1 = state_30684;
var statearr_30697_33264 = state_30684__$1;
(statearr_30697_33264[(2)] = null);

(statearr_30697_33264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30685 === (6))){
var state_30684__$1 = state_30684;
var statearr_30698_33265 = state_30684__$1;
(statearr_30698_33265[(2)] = null);

(statearr_30698_33265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30685 === (7))){
var inst_30680 = (state_30684[(2)]);
var state_30684__$1 = state_30684;
var statearr_30699_33270 = state_30684__$1;
(statearr_30699_33270[(2)] = inst_30680);

(statearr_30699_33270[(1)] = (3));


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
});})(__33229,c__29839__auto___33237,G__30671_33230,G__30671_33231__$1,n__4666__auto___33228,jobs,results,process,async))
;
return ((function (__33229,switch__29434__auto__,c__29839__auto___33237,G__30671_33230,G__30671_33231__$1,n__4666__auto___33228,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29435__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29435__auto____0 = (function (){
var statearr_30700 = [null,null,null,null,null,null,null];
(statearr_30700[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29435__auto__);

(statearr_30700[(1)] = (1));

return statearr_30700;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29435__auto____1 = (function (state_30684){
while(true){
var ret_value__29436__auto__ = (function (){try{while(true){
var result__29437__auto__ = switch__29434__auto__(state_30684);
if(cljs.core.keyword_identical_QMARK_(result__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29437__auto__;
}
break;
}
}catch (e30703){if((e30703 instanceof Object)){
var ex__29438__auto__ = e30703;
var statearr_30704_33280 = state_30684;
(statearr_30704_33280[(5)] = ex__29438__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33286 = state_30684;
state_30684 = G__33286;
continue;
} else {
return ret_value__29436__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29435__auto__ = function(state_30684){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29435__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29435__auto____1.call(this,state_30684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29435__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29435__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29435__auto__;
})()
;})(__33229,switch__29434__auto__,c__29839__auto___33237,G__30671_33230,G__30671_33231__$1,n__4666__auto___33228,jobs,results,process,async))
})();
var state__29842__auto__ = (function (){var statearr_30707 = f__29840__auto__();
(statearr_30707[(6)] = c__29839__auto___33237);

return statearr_30707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29842__auto__);
});})(__33229,c__29839__auto___33237,G__30671_33230,G__30671_33231__$1,n__4666__auto___33228,jobs,results,process,async))
);


break;
case "async":
var c__29839__auto___33287 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33229,c__29839__auto___33287,G__30671_33230,G__30671_33231__$1,n__4666__auto___33228,jobs,results,process,async){
return (function (){
var f__29840__auto__ = (function (){var switch__29434__auto__ = ((function (__33229,c__29839__auto___33287,G__30671_33230,G__30671_33231__$1,n__4666__auto___33228,jobs,results,process,async){
return (function (state_30720){
var state_val_30722 = (state_30720[(1)]);
if((state_val_30722 === (1))){
var state_30720__$1 = state_30720;
var statearr_30726_33294 = state_30720__$1;
(statearr_30726_33294[(2)] = null);

(statearr_30726_33294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (2))){
var state_30720__$1 = state_30720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30720__$1,(4),jobs);
} else {
if((state_val_30722 === (3))){
var inst_30718 = (state_30720[(2)]);
var state_30720__$1 = state_30720;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30720__$1,inst_30718);
} else {
if((state_val_30722 === (4))){
var inst_30710 = (state_30720[(2)]);
var inst_30711 = async(inst_30710);
var state_30720__$1 = state_30720;
if(cljs.core.truth_(inst_30711)){
var statearr_30728_33297 = state_30720__$1;
(statearr_30728_33297[(1)] = (5));

} else {
var statearr_30729_33298 = state_30720__$1;
(statearr_30729_33298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (5))){
var state_30720__$1 = state_30720;
var statearr_30730_33299 = state_30720__$1;
(statearr_30730_33299[(2)] = null);

(statearr_30730_33299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (6))){
var state_30720__$1 = state_30720;
var statearr_30732_33301 = state_30720__$1;
(statearr_30732_33301[(2)] = null);

(statearr_30732_33301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (7))){
var inst_30716 = (state_30720[(2)]);
var state_30720__$1 = state_30720;
var statearr_30734_33302 = state_30720__$1;
(statearr_30734_33302[(2)] = inst_30716);

(statearr_30734_33302[(1)] = (3));


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
});})(__33229,c__29839__auto___33287,G__30671_33230,G__30671_33231__$1,n__4666__auto___33228,jobs,results,process,async))
;
return ((function (__33229,switch__29434__auto__,c__29839__auto___33287,G__30671_33230,G__30671_33231__$1,n__4666__auto___33228,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29435__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29435__auto____0 = (function (){
var statearr_30737 = [null,null,null,null,null,null,null];
(statearr_30737[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29435__auto__);

(statearr_30737[(1)] = (1));

return statearr_30737;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29435__auto____1 = (function (state_30720){
while(true){
var ret_value__29436__auto__ = (function (){try{while(true){
var result__29437__auto__ = switch__29434__auto__(state_30720);
if(cljs.core.keyword_identical_QMARK_(result__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29437__auto__;
}
break;
}
}catch (e30738){if((e30738 instanceof Object)){
var ex__29438__auto__ = e30738;
var statearr_30739_33306 = state_30720;
(statearr_30739_33306[(5)] = ex__29438__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30738;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33308 = state_30720;
state_30720 = G__33308;
continue;
} else {
return ret_value__29436__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29435__auto__ = function(state_30720){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29435__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29435__auto____1.call(this,state_30720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29435__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29435__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29435__auto__;
})()
;})(__33229,switch__29434__auto__,c__29839__auto___33287,G__30671_33230,G__30671_33231__$1,n__4666__auto___33228,jobs,results,process,async))
})();
var state__29842__auto__ = (function (){var statearr_30742 = f__29840__auto__();
(statearr_30742[(6)] = c__29839__auto___33287);

return statearr_30742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29842__auto__);
});})(__33229,c__29839__auto___33287,G__30671_33230,G__30671_33231__$1,n__4666__auto___33228,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30671_33231__$1)].join('')));

}

var G__33310 = (__33229 + (1));
__33229 = G__33310;
continue;
} else {
}
break;
}

var c__29839__auto___33311 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29840__auto__ = (function (){var switch__29434__auto__ = (function (state_30772){
var state_val_30773 = (state_30772[(1)]);
if((state_val_30773 === (7))){
var inst_30767 = (state_30772[(2)]);
var state_30772__$1 = state_30772;
var statearr_30781_33312 = state_30772__$1;
(statearr_30781_33312[(2)] = inst_30767);

(statearr_30781_33312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (1))){
var state_30772__$1 = state_30772;
var statearr_30790_33314 = state_30772__$1;
(statearr_30790_33314[(2)] = null);

(statearr_30790_33314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (4))){
var inst_30751 = (state_30772[(7)]);
var inst_30751__$1 = (state_30772[(2)]);
var inst_30752 = (inst_30751__$1 == null);
var state_30772__$1 = (function (){var statearr_30797 = state_30772;
(statearr_30797[(7)] = inst_30751__$1);

return statearr_30797;
})();
if(cljs.core.truth_(inst_30752)){
var statearr_30798_33316 = state_30772__$1;
(statearr_30798_33316[(1)] = (5));

} else {
var statearr_30799_33317 = state_30772__$1;
(statearr_30799_33317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (6))){
var inst_30757 = (state_30772[(8)]);
var inst_30751 = (state_30772[(7)]);
var inst_30757__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30758 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30759 = [inst_30751,inst_30757__$1];
var inst_30760 = (new cljs.core.PersistentVector(null,2,(5),inst_30758,inst_30759,null));
var state_30772__$1 = (function (){var statearr_30802 = state_30772;
(statearr_30802[(8)] = inst_30757__$1);

return statearr_30802;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30772__$1,(8),jobs,inst_30760);
} else {
if((state_val_30773 === (3))){
var inst_30769 = (state_30772[(2)]);
var state_30772__$1 = state_30772;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30772__$1,inst_30769);
} else {
if((state_val_30773 === (2))){
var state_30772__$1 = state_30772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30772__$1,(4),from);
} else {
if((state_val_30773 === (9))){
var inst_30764 = (state_30772[(2)]);
var state_30772__$1 = (function (){var statearr_30816 = state_30772;
(statearr_30816[(9)] = inst_30764);

return statearr_30816;
})();
var statearr_30817_33320 = state_30772__$1;
(statearr_30817_33320[(2)] = null);

(statearr_30817_33320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (5))){
var inst_30754 = cljs.core.async.close_BANG_(jobs);
var state_30772__$1 = state_30772;
var statearr_30818_33333 = state_30772__$1;
(statearr_30818_33333[(2)] = inst_30754);

(statearr_30818_33333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (8))){
var inst_30757 = (state_30772[(8)]);
var inst_30762 = (state_30772[(2)]);
var state_30772__$1 = (function (){var statearr_30820 = state_30772;
(statearr_30820[(10)] = inst_30762);

return statearr_30820;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30772__$1,(9),results,inst_30757);
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
var cljs$core$async$pipeline_STAR__$_state_machine__29435__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29435__auto____0 = (function (){
var statearr_30821 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30821[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29435__auto__);

(statearr_30821[(1)] = (1));

return statearr_30821;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29435__auto____1 = (function (state_30772){
while(true){
var ret_value__29436__auto__ = (function (){try{while(true){
var result__29437__auto__ = switch__29434__auto__(state_30772);
if(cljs.core.keyword_identical_QMARK_(result__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29437__auto__;
}
break;
}
}catch (e30822){if((e30822 instanceof Object)){
var ex__29438__auto__ = e30822;
var statearr_30823_33335 = state_30772;
(statearr_30823_33335[(5)] = ex__29438__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30822;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33338 = state_30772;
state_30772 = G__33338;
continue;
} else {
return ret_value__29436__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29435__auto__ = function(state_30772){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29435__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29435__auto____1.call(this,state_30772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29435__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29435__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29435__auto__;
})()
})();
var state__29842__auto__ = (function (){var statearr_30824 = f__29840__auto__();
(statearr_30824[(6)] = c__29839__auto___33311);

return statearr_30824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29842__auto__);
}));


var c__29839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29840__auto__ = (function (){var switch__29434__auto__ = (function (state_30867){
var state_val_30868 = (state_30867[(1)]);
if((state_val_30868 === (7))){
var inst_30863 = (state_30867[(2)]);
var state_30867__$1 = state_30867;
var statearr_30872_33343 = state_30867__$1;
(statearr_30872_33343[(2)] = inst_30863);

(statearr_30872_33343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (20))){
var state_30867__$1 = state_30867;
var statearr_30873_33347 = state_30867__$1;
(statearr_30873_33347[(2)] = null);

(statearr_30873_33347[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (1))){
var state_30867__$1 = state_30867;
var statearr_30874_33349 = state_30867__$1;
(statearr_30874_33349[(2)] = null);

(statearr_30874_33349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (4))){
var inst_30827 = (state_30867[(7)]);
var inst_30827__$1 = (state_30867[(2)]);
var inst_30830 = (inst_30827__$1 == null);
var state_30867__$1 = (function (){var statearr_30875 = state_30867;
(statearr_30875[(7)] = inst_30827__$1);

return statearr_30875;
})();
if(cljs.core.truth_(inst_30830)){
var statearr_30877_33359 = state_30867__$1;
(statearr_30877_33359[(1)] = (5));

} else {
var statearr_30878_33360 = state_30867__$1;
(statearr_30878_33360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (15))){
var inst_30844 = (state_30867[(8)]);
var state_30867__$1 = state_30867;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30867__$1,(18),to,inst_30844);
} else {
if((state_val_30868 === (21))){
var inst_30858 = (state_30867[(2)]);
var state_30867__$1 = state_30867;
var statearr_30879_33366 = state_30867__$1;
(statearr_30879_33366[(2)] = inst_30858);

(statearr_30879_33366[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (13))){
var inst_30860 = (state_30867[(2)]);
var state_30867__$1 = (function (){var statearr_30881 = state_30867;
(statearr_30881[(9)] = inst_30860);

return statearr_30881;
})();
var statearr_30882_33369 = state_30867__$1;
(statearr_30882_33369[(2)] = null);

(statearr_30882_33369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (6))){
var inst_30827 = (state_30867[(7)]);
var state_30867__$1 = state_30867;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30867__$1,(11),inst_30827);
} else {
if((state_val_30868 === (17))){
var inst_30853 = (state_30867[(2)]);
var state_30867__$1 = state_30867;
if(cljs.core.truth_(inst_30853)){
var statearr_30883_33370 = state_30867__$1;
(statearr_30883_33370[(1)] = (19));

} else {
var statearr_30884_33373 = state_30867__$1;
(statearr_30884_33373[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (3))){
var inst_30865 = (state_30867[(2)]);
var state_30867__$1 = state_30867;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30867__$1,inst_30865);
} else {
if((state_val_30868 === (12))){
var inst_30840 = (state_30867[(10)]);
var state_30867__$1 = state_30867;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30867__$1,(14),inst_30840);
} else {
if((state_val_30868 === (2))){
var state_30867__$1 = state_30867;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30867__$1,(4),results);
} else {
if((state_val_30868 === (19))){
var state_30867__$1 = state_30867;
var statearr_30887_33378 = state_30867__$1;
(statearr_30887_33378[(2)] = null);

(statearr_30887_33378[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (11))){
var inst_30840 = (state_30867[(2)]);
var state_30867__$1 = (function (){var statearr_30888 = state_30867;
(statearr_30888[(10)] = inst_30840);

return statearr_30888;
})();
var statearr_30889_33383 = state_30867__$1;
(statearr_30889_33383[(2)] = null);

(statearr_30889_33383[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (9))){
var state_30867__$1 = state_30867;
var statearr_30891_33385 = state_30867__$1;
(statearr_30891_33385[(2)] = null);

(statearr_30891_33385[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (5))){
var state_30867__$1 = state_30867;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30893_33390 = state_30867__$1;
(statearr_30893_33390[(1)] = (8));

} else {
var statearr_30897_33392 = state_30867__$1;
(statearr_30897_33392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (14))){
var inst_30844 = (state_30867[(8)]);
var inst_30844__$1 = (state_30867[(2)]);
var inst_30845 = (inst_30844__$1 == null);
var inst_30846 = cljs.core.not(inst_30845);
var state_30867__$1 = (function (){var statearr_30898 = state_30867;
(statearr_30898[(8)] = inst_30844__$1);

return statearr_30898;
})();
if(inst_30846){
var statearr_30899_33396 = state_30867__$1;
(statearr_30899_33396[(1)] = (15));

} else {
var statearr_30908_33397 = state_30867__$1;
(statearr_30908_33397[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (16))){
var state_30867__$1 = state_30867;
var statearr_30909_33399 = state_30867__$1;
(statearr_30909_33399[(2)] = false);

(statearr_30909_33399[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (10))){
var inst_30837 = (state_30867[(2)]);
var state_30867__$1 = state_30867;
var statearr_30911_33403 = state_30867__$1;
(statearr_30911_33403[(2)] = inst_30837);

(statearr_30911_33403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (18))){
var inst_30850 = (state_30867[(2)]);
var state_30867__$1 = state_30867;
var statearr_30912_33405 = state_30867__$1;
(statearr_30912_33405[(2)] = inst_30850);

(statearr_30912_33405[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (8))){
var inst_30833 = cljs.core.async.close_BANG_(to);
var state_30867__$1 = state_30867;
var statearr_30914_33407 = state_30867__$1;
(statearr_30914_33407[(2)] = inst_30833);

(statearr_30914_33407[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__29435__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29435__auto____0 = (function (){
var statearr_30918 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30918[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29435__auto__);

(statearr_30918[(1)] = (1));

return statearr_30918;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29435__auto____1 = (function (state_30867){
while(true){
var ret_value__29436__auto__ = (function (){try{while(true){
var result__29437__auto__ = switch__29434__auto__(state_30867);
if(cljs.core.keyword_identical_QMARK_(result__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29437__auto__;
}
break;
}
}catch (e30919){if((e30919 instanceof Object)){
var ex__29438__auto__ = e30919;
var statearr_30920_33409 = state_30867;
(statearr_30920_33409[(5)] = ex__29438__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30919;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33410 = state_30867;
state_30867 = G__33410;
continue;
} else {
return ret_value__29436__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29435__auto__ = function(state_30867){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29435__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29435__auto____1.call(this,state_30867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29435__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29435__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29435__auto__;
})()
})();
var state__29842__auto__ = (function (){var statearr_30921 = f__29840__auto__();
(statearr_30921[(6)] = c__29839__auto__);

return statearr_30921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29842__auto__);
}));

return c__29839__auto__;
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
var G__30927 = arguments.length;
switch (G__30927) {
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
var G__30935 = arguments.length;
switch (G__30935) {
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
var G__30952 = arguments.length;
switch (G__30952) {
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
var c__29839__auto___33449 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29840__auto__ = (function (){var switch__29434__auto__ = (function (state_30985){
var state_val_30986 = (state_30985[(1)]);
if((state_val_30986 === (7))){
var inst_30980 = (state_30985[(2)]);
var state_30985__$1 = state_30985;
var statearr_30988_33454 = state_30985__$1;
(statearr_30988_33454[(2)] = inst_30980);

(statearr_30988_33454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (1))){
var state_30985__$1 = state_30985;
var statearr_30989_33458 = state_30985__$1;
(statearr_30989_33458[(2)] = null);

(statearr_30989_33458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (4))){
var inst_30957 = (state_30985[(7)]);
var inst_30957__$1 = (state_30985[(2)]);
var inst_30958 = (inst_30957__$1 == null);
var state_30985__$1 = (function (){var statearr_30992 = state_30985;
(statearr_30992[(7)] = inst_30957__$1);

return statearr_30992;
})();
if(cljs.core.truth_(inst_30958)){
var statearr_30993_33459 = state_30985__$1;
(statearr_30993_33459[(1)] = (5));

} else {
var statearr_30994_33460 = state_30985__$1;
(statearr_30994_33460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (13))){
var state_30985__$1 = state_30985;
var statearr_30996_33462 = state_30985__$1;
(statearr_30996_33462[(2)] = null);

(statearr_30996_33462[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (6))){
var inst_30957 = (state_30985[(7)]);
var inst_30967 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30957) : p.call(null,inst_30957));
var state_30985__$1 = state_30985;
if(cljs.core.truth_(inst_30967)){
var statearr_30997_33464 = state_30985__$1;
(statearr_30997_33464[(1)] = (9));

} else {
var statearr_31004_33465 = state_30985__$1;
(statearr_31004_33465[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (3))){
var inst_30982 = (state_30985[(2)]);
var state_30985__$1 = state_30985;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30985__$1,inst_30982);
} else {
if((state_val_30986 === (12))){
var state_30985__$1 = state_30985;
var statearr_31006_33468 = state_30985__$1;
(statearr_31006_33468[(2)] = null);

(statearr_31006_33468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (2))){
var state_30985__$1 = state_30985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30985__$1,(4),ch);
} else {
if((state_val_30986 === (11))){
var inst_30957 = (state_30985[(7)]);
var inst_30971 = (state_30985[(2)]);
var state_30985__$1 = state_30985;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30985__$1,(8),inst_30971,inst_30957);
} else {
if((state_val_30986 === (9))){
var state_30985__$1 = state_30985;
var statearr_31007_33469 = state_30985__$1;
(statearr_31007_33469[(2)] = tc);

(statearr_31007_33469[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (5))){
var inst_30960 = cljs.core.async.close_BANG_(tc);
var inst_30961 = cljs.core.async.close_BANG_(fc);
var state_30985__$1 = (function (){var statearr_31008 = state_30985;
(statearr_31008[(8)] = inst_30960);

return statearr_31008;
})();
var statearr_31009_33473 = state_30985__$1;
(statearr_31009_33473[(2)] = inst_30961);

(statearr_31009_33473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (14))){
var inst_30978 = (state_30985[(2)]);
var state_30985__$1 = state_30985;
var statearr_31010_33474 = state_30985__$1;
(statearr_31010_33474[(2)] = inst_30978);

(statearr_31010_33474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (10))){
var state_30985__$1 = state_30985;
var statearr_31012_33475 = state_30985__$1;
(statearr_31012_33475[(2)] = fc);

(statearr_31012_33475[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (8))){
var inst_30973 = (state_30985[(2)]);
var state_30985__$1 = state_30985;
if(cljs.core.truth_(inst_30973)){
var statearr_31013_33476 = state_30985__$1;
(statearr_31013_33476[(1)] = (12));

} else {
var statearr_31017_33477 = state_30985__$1;
(statearr_31017_33477[(1)] = (13));

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
var cljs$core$async$state_machine__29435__auto__ = null;
var cljs$core$async$state_machine__29435__auto____0 = (function (){
var statearr_31019 = [null,null,null,null,null,null,null,null,null];
(statearr_31019[(0)] = cljs$core$async$state_machine__29435__auto__);

(statearr_31019[(1)] = (1));

return statearr_31019;
});
var cljs$core$async$state_machine__29435__auto____1 = (function (state_30985){
while(true){
var ret_value__29436__auto__ = (function (){try{while(true){
var result__29437__auto__ = switch__29434__auto__(state_30985);
if(cljs.core.keyword_identical_QMARK_(result__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29437__auto__;
}
break;
}
}catch (e31020){if((e31020 instanceof Object)){
var ex__29438__auto__ = e31020;
var statearr_31021_33482 = state_30985;
(statearr_31021_33482[(5)] = ex__29438__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31020;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33483 = state_30985;
state_30985 = G__33483;
continue;
} else {
return ret_value__29436__auto__;
}
break;
}
});
cljs$core$async$state_machine__29435__auto__ = function(state_30985){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29435__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29435__auto____1.call(this,state_30985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29435__auto____0;
cljs$core$async$state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29435__auto____1;
return cljs$core$async$state_machine__29435__auto__;
})()
})();
var state__29842__auto__ = (function (){var statearr_31023 = f__29840__auto__();
(statearr_31023[(6)] = c__29839__auto___33449);

return statearr_31023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29842__auto__);
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
var c__29839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29840__auto__ = (function (){var switch__29434__auto__ = (function (state_31057){
var state_val_31058 = (state_31057[(1)]);
if((state_val_31058 === (7))){
var inst_31051 = (state_31057[(2)]);
var state_31057__$1 = state_31057;
var statearr_31059_33492 = state_31057__$1;
(statearr_31059_33492[(2)] = inst_31051);

(statearr_31059_33492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (1))){
var inst_31029 = init;
var state_31057__$1 = (function (){var statearr_31060 = state_31057;
(statearr_31060[(7)] = inst_31029);

return statearr_31060;
})();
var statearr_31061_33498 = state_31057__$1;
(statearr_31061_33498[(2)] = null);

(statearr_31061_33498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (4))){
var inst_31034 = (state_31057[(8)]);
var inst_31034__$1 = (state_31057[(2)]);
var inst_31035 = (inst_31034__$1 == null);
var state_31057__$1 = (function (){var statearr_31065 = state_31057;
(statearr_31065[(8)] = inst_31034__$1);

return statearr_31065;
})();
if(cljs.core.truth_(inst_31035)){
var statearr_31067_33504 = state_31057__$1;
(statearr_31067_33504[(1)] = (5));

} else {
var statearr_31068_33507 = state_31057__$1;
(statearr_31068_33507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (6))){
var inst_31034 = (state_31057[(8)]);
var inst_31029 = (state_31057[(7)]);
var inst_31042 = (state_31057[(9)]);
var inst_31042__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31029,inst_31034) : f.call(null,inst_31029,inst_31034));
var inst_31043 = cljs.core.reduced_QMARK_(inst_31042__$1);
var state_31057__$1 = (function (){var statearr_31069 = state_31057;
(statearr_31069[(9)] = inst_31042__$1);

return statearr_31069;
})();
if(inst_31043){
var statearr_31070_33510 = state_31057__$1;
(statearr_31070_33510[(1)] = (8));

} else {
var statearr_31071_33515 = state_31057__$1;
(statearr_31071_33515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (3))){
var inst_31055 = (state_31057[(2)]);
var state_31057__$1 = state_31057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31057__$1,inst_31055);
} else {
if((state_val_31058 === (2))){
var state_31057__$1 = state_31057;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31057__$1,(4),ch);
} else {
if((state_val_31058 === (9))){
var inst_31042 = (state_31057[(9)]);
var inst_31029 = inst_31042;
var state_31057__$1 = (function (){var statearr_31078 = state_31057;
(statearr_31078[(7)] = inst_31029);

return statearr_31078;
})();
var statearr_31080_33522 = state_31057__$1;
(statearr_31080_33522[(2)] = null);

(statearr_31080_33522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (5))){
var inst_31029 = (state_31057[(7)]);
var state_31057__$1 = state_31057;
var statearr_31083_33527 = state_31057__$1;
(statearr_31083_33527[(2)] = inst_31029);

(statearr_31083_33527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (10))){
var inst_31049 = (state_31057[(2)]);
var state_31057__$1 = state_31057;
var statearr_31084_33531 = state_31057__$1;
(statearr_31084_33531[(2)] = inst_31049);

(statearr_31084_33531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (8))){
var inst_31042 = (state_31057[(9)]);
var inst_31045 = cljs.core.deref(inst_31042);
var state_31057__$1 = state_31057;
var statearr_31085_33536 = state_31057__$1;
(statearr_31085_33536[(2)] = inst_31045);

(statearr_31085_33536[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__29435__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29435__auto____0 = (function (){
var statearr_31088 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31088[(0)] = cljs$core$async$reduce_$_state_machine__29435__auto__);

(statearr_31088[(1)] = (1));

return statearr_31088;
});
var cljs$core$async$reduce_$_state_machine__29435__auto____1 = (function (state_31057){
while(true){
var ret_value__29436__auto__ = (function (){try{while(true){
var result__29437__auto__ = switch__29434__auto__(state_31057);
if(cljs.core.keyword_identical_QMARK_(result__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29437__auto__;
}
break;
}
}catch (e31092){if((e31092 instanceof Object)){
var ex__29438__auto__ = e31092;
var statearr_31093_33541 = state_31057;
(statearr_31093_33541[(5)] = ex__29438__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31092;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33546 = state_31057;
state_31057 = G__33546;
continue;
} else {
return ret_value__29436__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29435__auto__ = function(state_31057){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29435__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29435__auto____1.call(this,state_31057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29435__auto____0;
cljs$core$async$reduce_$_state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29435__auto____1;
return cljs$core$async$reduce_$_state_machine__29435__auto__;
})()
})();
var state__29842__auto__ = (function (){var statearr_31095 = f__29840__auto__();
(statearr_31095[(6)] = c__29839__auto__);

return statearr_31095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29842__auto__);
}));

return c__29839__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29840__auto__ = (function (){var switch__29434__auto__ = (function (state_31105){
var state_val_31106 = (state_31105[(1)]);
if((state_val_31106 === (1))){
var inst_31100 = cljs.core.async.reduce(f__$1,init,ch);
var state_31105__$1 = state_31105;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31105__$1,(2),inst_31100);
} else {
if((state_val_31106 === (2))){
var inst_31102 = (state_31105[(2)]);
var inst_31103 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31102) : f__$1.call(null,inst_31102));
var state_31105__$1 = state_31105;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31105__$1,inst_31103);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29435__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29435__auto____0 = (function (){
var statearr_31119 = [null,null,null,null,null,null,null];
(statearr_31119[(0)] = cljs$core$async$transduce_$_state_machine__29435__auto__);

(statearr_31119[(1)] = (1));

return statearr_31119;
});
var cljs$core$async$transduce_$_state_machine__29435__auto____1 = (function (state_31105){
while(true){
var ret_value__29436__auto__ = (function (){try{while(true){
var result__29437__auto__ = switch__29434__auto__(state_31105);
if(cljs.core.keyword_identical_QMARK_(result__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29437__auto__;
}
break;
}
}catch (e31120){if((e31120 instanceof Object)){
var ex__29438__auto__ = e31120;
var statearr_31121_33564 = state_31105;
(statearr_31121_33564[(5)] = ex__29438__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31120;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33565 = state_31105;
state_31105 = G__33565;
continue;
} else {
return ret_value__29436__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29435__auto__ = function(state_31105){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29435__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29435__auto____1.call(this,state_31105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29435__auto____0;
cljs$core$async$transduce_$_state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29435__auto____1;
return cljs$core$async$transduce_$_state_machine__29435__auto__;
})()
})();
var state__29842__auto__ = (function (){var statearr_31123 = f__29840__auto__();
(statearr_31123[(6)] = c__29839__auto__);

return statearr_31123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29842__auto__);
}));

return c__29839__auto__;
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
var G__31127 = arguments.length;
switch (G__31127) {
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
var c__29839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29840__auto__ = (function (){var switch__29434__auto__ = (function (state_31164){
var state_val_31165 = (state_31164[(1)]);
if((state_val_31165 === (7))){
var inst_31145 = (state_31164[(2)]);
var state_31164__$1 = state_31164;
var statearr_31170_33577 = state_31164__$1;
(statearr_31170_33577[(2)] = inst_31145);

(statearr_31170_33577[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (1))){
var inst_31138 = cljs.core.seq(coll);
var inst_31139 = inst_31138;
var state_31164__$1 = (function (){var statearr_31171 = state_31164;
(statearr_31171[(7)] = inst_31139);

return statearr_31171;
})();
var statearr_31172_33582 = state_31164__$1;
(statearr_31172_33582[(2)] = null);

(statearr_31172_33582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (4))){
var inst_31139 = (state_31164[(7)]);
var inst_31143 = cljs.core.first(inst_31139);
var state_31164__$1 = state_31164;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31164__$1,(7),ch,inst_31143);
} else {
if((state_val_31165 === (13))){
var inst_31158 = (state_31164[(2)]);
var state_31164__$1 = state_31164;
var statearr_31174_33583 = state_31164__$1;
(statearr_31174_33583[(2)] = inst_31158);

(statearr_31174_33583[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (6))){
var inst_31148 = (state_31164[(2)]);
var state_31164__$1 = state_31164;
if(cljs.core.truth_(inst_31148)){
var statearr_31175_33584 = state_31164__$1;
(statearr_31175_33584[(1)] = (8));

} else {
var statearr_31177_33585 = state_31164__$1;
(statearr_31177_33585[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (3))){
var inst_31162 = (state_31164[(2)]);
var state_31164__$1 = state_31164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31164__$1,inst_31162);
} else {
if((state_val_31165 === (12))){
var state_31164__$1 = state_31164;
var statearr_31178_33589 = state_31164__$1;
(statearr_31178_33589[(2)] = null);

(statearr_31178_33589[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (2))){
var inst_31139 = (state_31164[(7)]);
var state_31164__$1 = state_31164;
if(cljs.core.truth_(inst_31139)){
var statearr_31179_33591 = state_31164__$1;
(statearr_31179_33591[(1)] = (4));

} else {
var statearr_31180_33592 = state_31164__$1;
(statearr_31180_33592[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (11))){
var inst_31155 = cljs.core.async.close_BANG_(ch);
var state_31164__$1 = state_31164;
var statearr_31182_33594 = state_31164__$1;
(statearr_31182_33594[(2)] = inst_31155);

(statearr_31182_33594[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (9))){
var state_31164__$1 = state_31164;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31183_33596 = state_31164__$1;
(statearr_31183_33596[(1)] = (11));

} else {
var statearr_31184_33597 = state_31164__$1;
(statearr_31184_33597[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (5))){
var inst_31139 = (state_31164[(7)]);
var state_31164__$1 = state_31164;
var statearr_31194_33598 = state_31164__$1;
(statearr_31194_33598[(2)] = inst_31139);

(statearr_31194_33598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (10))){
var inst_31160 = (state_31164[(2)]);
var state_31164__$1 = state_31164;
var statearr_31195_33599 = state_31164__$1;
(statearr_31195_33599[(2)] = inst_31160);

(statearr_31195_33599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (8))){
var inst_31139 = (state_31164[(7)]);
var inst_31150 = cljs.core.next(inst_31139);
var inst_31139__$1 = inst_31150;
var state_31164__$1 = (function (){var statearr_31196 = state_31164;
(statearr_31196[(7)] = inst_31139__$1);

return statearr_31196;
})();
var statearr_31201_33601 = state_31164__$1;
(statearr_31201_33601[(2)] = null);

(statearr_31201_33601[(1)] = (2));


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
var cljs$core$async$state_machine__29435__auto__ = null;
var cljs$core$async$state_machine__29435__auto____0 = (function (){
var statearr_31202 = [null,null,null,null,null,null,null,null];
(statearr_31202[(0)] = cljs$core$async$state_machine__29435__auto__);

(statearr_31202[(1)] = (1));

return statearr_31202;
});
var cljs$core$async$state_machine__29435__auto____1 = (function (state_31164){
while(true){
var ret_value__29436__auto__ = (function (){try{while(true){
var result__29437__auto__ = switch__29434__auto__(state_31164);
if(cljs.core.keyword_identical_QMARK_(result__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29437__auto__;
}
break;
}
}catch (e31204){if((e31204 instanceof Object)){
var ex__29438__auto__ = e31204;
var statearr_31205_33608 = state_31164;
(statearr_31205_33608[(5)] = ex__29438__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31204;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33610 = state_31164;
state_31164 = G__33610;
continue;
} else {
return ret_value__29436__auto__;
}
break;
}
});
cljs$core$async$state_machine__29435__auto__ = function(state_31164){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29435__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29435__auto____1.call(this,state_31164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29435__auto____0;
cljs$core$async$state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29435__auto____1;
return cljs$core$async$state_machine__29435__auto__;
})()
})();
var state__29842__auto__ = (function (){var statearr_31206 = f__29840__auto__();
(statearr_31206[(6)] = c__29839__auto__);

return statearr_31206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29842__auto__);
}));

return c__29839__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31221 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31221 = (function (ch,cs,meta31222){
this.ch = ch;
this.cs = cs;
this.meta31222 = meta31222;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31223,meta31222__$1){
var self__ = this;
var _31223__$1 = this;
return (new cljs.core.async.t_cljs$core$async31221(self__.ch,self__.cs,meta31222__$1));
}));

(cljs.core.async.t_cljs$core$async31221.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31223){
var self__ = this;
var _31223__$1 = this;
return self__.meta31222;
}));

(cljs.core.async.t_cljs$core$async31221.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31221.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31221.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31221.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31221.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31221.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31221.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31222","meta31222",-1259991936,null)], null);
}));

(cljs.core.async.t_cljs$core$async31221.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31221.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31221");

(cljs.core.async.t_cljs$core$async31221.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31221");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31221.
 */
cljs.core.async.__GT_t_cljs$core$async31221 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31221(ch__$1,cs__$1,meta31222){
return (new cljs.core.async.t_cljs$core$async31221(ch__$1,cs__$1,meta31222));
});

}

return (new cljs.core.async.t_cljs$core$async31221(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29839__auto___33670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29840__auto__ = (function (){var switch__29434__auto__ = (function (state_31385){
var state_val_31390 = (state_31385[(1)]);
if((state_val_31390 === (7))){
var inst_31381 = (state_31385[(2)]);
var state_31385__$1 = state_31385;
var statearr_31396_33671 = state_31385__$1;
(statearr_31396_33671[(2)] = inst_31381);

(statearr_31396_33671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (20))){
var inst_31282 = (state_31385[(7)]);
var inst_31294 = cljs.core.first(inst_31282);
var inst_31295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31294,(0),null);
var inst_31296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31294,(1),null);
var state_31385__$1 = (function (){var statearr_31397 = state_31385;
(statearr_31397[(8)] = inst_31295);

return statearr_31397;
})();
if(cljs.core.truth_(inst_31296)){
var statearr_31400_33672 = state_31385__$1;
(statearr_31400_33672[(1)] = (22));

} else {
var statearr_31401_33673 = state_31385__$1;
(statearr_31401_33673[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (27))){
var inst_31325 = (state_31385[(9)]);
var inst_31243 = (state_31385[(10)]);
var inst_31332 = (state_31385[(11)]);
var inst_31327 = (state_31385[(12)]);
var inst_31332__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31325,inst_31327);
var inst_31333 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31332__$1,inst_31243,done);
var state_31385__$1 = (function (){var statearr_31402 = state_31385;
(statearr_31402[(11)] = inst_31332__$1);

return statearr_31402;
})();
if(cljs.core.truth_(inst_31333)){
var statearr_31403_33679 = state_31385__$1;
(statearr_31403_33679[(1)] = (30));

} else {
var statearr_31404_33680 = state_31385__$1;
(statearr_31404_33680[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (1))){
var state_31385__$1 = state_31385;
var statearr_31405_33681 = state_31385__$1;
(statearr_31405_33681[(2)] = null);

(statearr_31405_33681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (24))){
var inst_31282 = (state_31385[(7)]);
var inst_31302 = (state_31385[(2)]);
var inst_31303 = cljs.core.next(inst_31282);
var inst_31256 = inst_31303;
var inst_31257 = null;
var inst_31258 = (0);
var inst_31259 = (0);
var state_31385__$1 = (function (){var statearr_31410 = state_31385;
(statearr_31410[(13)] = inst_31302);

(statearr_31410[(14)] = inst_31258);

(statearr_31410[(15)] = inst_31259);

(statearr_31410[(16)] = inst_31256);

(statearr_31410[(17)] = inst_31257);

return statearr_31410;
})();
var statearr_31413_33688 = state_31385__$1;
(statearr_31413_33688[(2)] = null);

(statearr_31413_33688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (39))){
var state_31385__$1 = state_31385;
var statearr_31417_33695 = state_31385__$1;
(statearr_31417_33695[(2)] = null);

(statearr_31417_33695[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (4))){
var inst_31243 = (state_31385[(10)]);
var inst_31243__$1 = (state_31385[(2)]);
var inst_31248 = (inst_31243__$1 == null);
var state_31385__$1 = (function (){var statearr_31420 = state_31385;
(statearr_31420[(10)] = inst_31243__$1);

return statearr_31420;
})();
if(cljs.core.truth_(inst_31248)){
var statearr_31422_33696 = state_31385__$1;
(statearr_31422_33696[(1)] = (5));

} else {
var statearr_31423_33697 = state_31385__$1;
(statearr_31423_33697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (15))){
var inst_31258 = (state_31385[(14)]);
var inst_31259 = (state_31385[(15)]);
var inst_31256 = (state_31385[(16)]);
var inst_31257 = (state_31385[(17)]);
var inst_31277 = (state_31385[(2)]);
var inst_31279 = (inst_31259 + (1));
var tmp31414 = inst_31258;
var tmp31415 = inst_31256;
var tmp31416 = inst_31257;
var inst_31256__$1 = tmp31415;
var inst_31257__$1 = tmp31416;
var inst_31258__$1 = tmp31414;
var inst_31259__$1 = inst_31279;
var state_31385__$1 = (function (){var statearr_31424 = state_31385;
(statearr_31424[(18)] = inst_31277);

(statearr_31424[(14)] = inst_31258__$1);

(statearr_31424[(15)] = inst_31259__$1);

(statearr_31424[(16)] = inst_31256__$1);

(statearr_31424[(17)] = inst_31257__$1);

return statearr_31424;
})();
var statearr_31425_33701 = state_31385__$1;
(statearr_31425_33701[(2)] = null);

(statearr_31425_33701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (21))){
var inst_31306 = (state_31385[(2)]);
var state_31385__$1 = state_31385;
var statearr_31429_33702 = state_31385__$1;
(statearr_31429_33702[(2)] = inst_31306);

(statearr_31429_33702[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (31))){
var inst_31332 = (state_31385[(11)]);
var inst_31336 = done(null);
var inst_31337 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31332);
var state_31385__$1 = (function (){var statearr_31432 = state_31385;
(statearr_31432[(19)] = inst_31336);

return statearr_31432;
})();
var statearr_31433_33706 = state_31385__$1;
(statearr_31433_33706[(2)] = inst_31337);

(statearr_31433_33706[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (32))){
var inst_31326 = (state_31385[(20)]);
var inst_31325 = (state_31385[(9)]);
var inst_31324 = (state_31385[(21)]);
var inst_31327 = (state_31385[(12)]);
var inst_31339 = (state_31385[(2)]);
var inst_31341 = (inst_31327 + (1));
var tmp31426 = inst_31326;
var tmp31427 = inst_31325;
var tmp31428 = inst_31324;
var inst_31324__$1 = tmp31428;
var inst_31325__$1 = tmp31427;
var inst_31326__$1 = tmp31426;
var inst_31327__$1 = inst_31341;
var state_31385__$1 = (function (){var statearr_31434 = state_31385;
(statearr_31434[(22)] = inst_31339);

(statearr_31434[(20)] = inst_31326__$1);

(statearr_31434[(9)] = inst_31325__$1);

(statearr_31434[(21)] = inst_31324__$1);

(statearr_31434[(12)] = inst_31327__$1);

return statearr_31434;
})();
var statearr_31435_33716 = state_31385__$1;
(statearr_31435_33716[(2)] = null);

(statearr_31435_33716[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (40))){
var inst_31353 = (state_31385[(23)]);
var inst_31357 = done(null);
var inst_31358 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31353);
var state_31385__$1 = (function (){var statearr_31436 = state_31385;
(statearr_31436[(24)] = inst_31357);

return statearr_31436;
})();
var statearr_31437_33717 = state_31385__$1;
(statearr_31437_33717[(2)] = inst_31358);

(statearr_31437_33717[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (33))){
var inst_31344 = (state_31385[(25)]);
var inst_31346 = cljs.core.chunked_seq_QMARK_(inst_31344);
var state_31385__$1 = state_31385;
if(inst_31346){
var statearr_31439_33720 = state_31385__$1;
(statearr_31439_33720[(1)] = (36));

} else {
var statearr_31440_33721 = state_31385__$1;
(statearr_31440_33721[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (13))){
var inst_31270 = (state_31385[(26)]);
var inst_31274 = cljs.core.async.close_BANG_(inst_31270);
var state_31385__$1 = state_31385;
var statearr_31445_33722 = state_31385__$1;
(statearr_31445_33722[(2)] = inst_31274);

(statearr_31445_33722[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (22))){
var inst_31295 = (state_31385[(8)]);
var inst_31299 = cljs.core.async.close_BANG_(inst_31295);
var state_31385__$1 = state_31385;
var statearr_31450_33731 = state_31385__$1;
(statearr_31450_33731[(2)] = inst_31299);

(statearr_31450_33731[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (36))){
var inst_31344 = (state_31385[(25)]);
var inst_31348 = cljs.core.chunk_first(inst_31344);
var inst_31349 = cljs.core.chunk_rest(inst_31344);
var inst_31350 = cljs.core.count(inst_31348);
var inst_31324 = inst_31349;
var inst_31325 = inst_31348;
var inst_31326 = inst_31350;
var inst_31327 = (0);
var state_31385__$1 = (function (){var statearr_31453 = state_31385;
(statearr_31453[(20)] = inst_31326);

(statearr_31453[(9)] = inst_31325);

(statearr_31453[(21)] = inst_31324);

(statearr_31453[(12)] = inst_31327);

return statearr_31453;
})();
var statearr_31454_33734 = state_31385__$1;
(statearr_31454_33734[(2)] = null);

(statearr_31454_33734[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (41))){
var inst_31344 = (state_31385[(25)]);
var inst_31360 = (state_31385[(2)]);
var inst_31361 = cljs.core.next(inst_31344);
var inst_31324 = inst_31361;
var inst_31325 = null;
var inst_31326 = (0);
var inst_31327 = (0);
var state_31385__$1 = (function (){var statearr_31460 = state_31385;
(statearr_31460[(27)] = inst_31360);

(statearr_31460[(20)] = inst_31326);

(statearr_31460[(9)] = inst_31325);

(statearr_31460[(21)] = inst_31324);

(statearr_31460[(12)] = inst_31327);

return statearr_31460;
})();
var statearr_31462_33735 = state_31385__$1;
(statearr_31462_33735[(2)] = null);

(statearr_31462_33735[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (43))){
var state_31385__$1 = state_31385;
var statearr_31463_33739 = state_31385__$1;
(statearr_31463_33739[(2)] = null);

(statearr_31463_33739[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (29))){
var inst_31369 = (state_31385[(2)]);
var state_31385__$1 = state_31385;
var statearr_31464_33747 = state_31385__$1;
(statearr_31464_33747[(2)] = inst_31369);

(statearr_31464_33747[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (44))){
var inst_31378 = (state_31385[(2)]);
var state_31385__$1 = (function (){var statearr_31465 = state_31385;
(statearr_31465[(28)] = inst_31378);

return statearr_31465;
})();
var statearr_31466_33751 = state_31385__$1;
(statearr_31466_33751[(2)] = null);

(statearr_31466_33751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (6))){
var inst_31316 = (state_31385[(29)]);
var inst_31315 = cljs.core.deref(cs);
var inst_31316__$1 = cljs.core.keys(inst_31315);
var inst_31317 = cljs.core.count(inst_31316__$1);
var inst_31318 = cljs.core.reset_BANG_(dctr,inst_31317);
var inst_31323 = cljs.core.seq(inst_31316__$1);
var inst_31324 = inst_31323;
var inst_31325 = null;
var inst_31326 = (0);
var inst_31327 = (0);
var state_31385__$1 = (function (){var statearr_31467 = state_31385;
(statearr_31467[(29)] = inst_31316__$1);

(statearr_31467[(30)] = inst_31318);

(statearr_31467[(20)] = inst_31326);

(statearr_31467[(9)] = inst_31325);

(statearr_31467[(21)] = inst_31324);

(statearr_31467[(12)] = inst_31327);

return statearr_31467;
})();
var statearr_31468_33759 = state_31385__$1;
(statearr_31468_33759[(2)] = null);

(statearr_31468_33759[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (28))){
var inst_31344 = (state_31385[(25)]);
var inst_31324 = (state_31385[(21)]);
var inst_31344__$1 = cljs.core.seq(inst_31324);
var state_31385__$1 = (function (){var statearr_31472 = state_31385;
(statearr_31472[(25)] = inst_31344__$1);

return statearr_31472;
})();
if(inst_31344__$1){
var statearr_31473_33760 = state_31385__$1;
(statearr_31473_33760[(1)] = (33));

} else {
var statearr_31474_33761 = state_31385__$1;
(statearr_31474_33761[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (25))){
var inst_31326 = (state_31385[(20)]);
var inst_31327 = (state_31385[(12)]);
var inst_31329 = (inst_31327 < inst_31326);
var inst_31330 = inst_31329;
var state_31385__$1 = state_31385;
if(cljs.core.truth_(inst_31330)){
var statearr_31479_33762 = state_31385__$1;
(statearr_31479_33762[(1)] = (27));

} else {
var statearr_31480_33763 = state_31385__$1;
(statearr_31480_33763[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (34))){
var state_31385__$1 = state_31385;
var statearr_31481_33764 = state_31385__$1;
(statearr_31481_33764[(2)] = null);

(statearr_31481_33764[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (17))){
var state_31385__$1 = state_31385;
var statearr_31483_33765 = state_31385__$1;
(statearr_31483_33765[(2)] = null);

(statearr_31483_33765[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (3))){
var inst_31383 = (state_31385[(2)]);
var state_31385__$1 = state_31385;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31385__$1,inst_31383);
} else {
if((state_val_31390 === (12))){
var inst_31311 = (state_31385[(2)]);
var state_31385__$1 = state_31385;
var statearr_31489_33766 = state_31385__$1;
(statearr_31489_33766[(2)] = inst_31311);

(statearr_31489_33766[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (2))){
var state_31385__$1 = state_31385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31385__$1,(4),ch);
} else {
if((state_val_31390 === (23))){
var state_31385__$1 = state_31385;
var statearr_31491_33768 = state_31385__$1;
(statearr_31491_33768[(2)] = null);

(statearr_31491_33768[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (35))){
var inst_31367 = (state_31385[(2)]);
var state_31385__$1 = state_31385;
var statearr_31492_33769 = state_31385__$1;
(statearr_31492_33769[(2)] = inst_31367);

(statearr_31492_33769[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (19))){
var inst_31282 = (state_31385[(7)]);
var inst_31286 = cljs.core.chunk_first(inst_31282);
var inst_31287 = cljs.core.chunk_rest(inst_31282);
var inst_31288 = cljs.core.count(inst_31286);
var inst_31256 = inst_31287;
var inst_31257 = inst_31286;
var inst_31258 = inst_31288;
var inst_31259 = (0);
var state_31385__$1 = (function (){var statearr_31493 = state_31385;
(statearr_31493[(14)] = inst_31258);

(statearr_31493[(15)] = inst_31259);

(statearr_31493[(16)] = inst_31256);

(statearr_31493[(17)] = inst_31257);

return statearr_31493;
})();
var statearr_31494_33773 = state_31385__$1;
(statearr_31494_33773[(2)] = null);

(statearr_31494_33773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (11))){
var inst_31256 = (state_31385[(16)]);
var inst_31282 = (state_31385[(7)]);
var inst_31282__$1 = cljs.core.seq(inst_31256);
var state_31385__$1 = (function (){var statearr_31499 = state_31385;
(statearr_31499[(7)] = inst_31282__$1);

return statearr_31499;
})();
if(inst_31282__$1){
var statearr_31502_33778 = state_31385__$1;
(statearr_31502_33778[(1)] = (16));

} else {
var statearr_31503_33779 = state_31385__$1;
(statearr_31503_33779[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (9))){
var inst_31313 = (state_31385[(2)]);
var state_31385__$1 = state_31385;
var statearr_31506_33780 = state_31385__$1;
(statearr_31506_33780[(2)] = inst_31313);

(statearr_31506_33780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (5))){
var inst_31254 = cljs.core.deref(cs);
var inst_31255 = cljs.core.seq(inst_31254);
var inst_31256 = inst_31255;
var inst_31257 = null;
var inst_31258 = (0);
var inst_31259 = (0);
var state_31385__$1 = (function (){var statearr_31507 = state_31385;
(statearr_31507[(14)] = inst_31258);

(statearr_31507[(15)] = inst_31259);

(statearr_31507[(16)] = inst_31256);

(statearr_31507[(17)] = inst_31257);

return statearr_31507;
})();
var statearr_31508_33785 = state_31385__$1;
(statearr_31508_33785[(2)] = null);

(statearr_31508_33785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (14))){
var state_31385__$1 = state_31385;
var statearr_31509_33788 = state_31385__$1;
(statearr_31509_33788[(2)] = null);

(statearr_31509_33788[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (45))){
var inst_31375 = (state_31385[(2)]);
var state_31385__$1 = state_31385;
var statearr_31511_33792 = state_31385__$1;
(statearr_31511_33792[(2)] = inst_31375);

(statearr_31511_33792[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (26))){
var inst_31316 = (state_31385[(29)]);
var inst_31371 = (state_31385[(2)]);
var inst_31372 = cljs.core.seq(inst_31316);
var state_31385__$1 = (function (){var statearr_31512 = state_31385;
(statearr_31512[(31)] = inst_31371);

return statearr_31512;
})();
if(inst_31372){
var statearr_31513_33797 = state_31385__$1;
(statearr_31513_33797[(1)] = (42));

} else {
var statearr_31514_33798 = state_31385__$1;
(statearr_31514_33798[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (16))){
var inst_31282 = (state_31385[(7)]);
var inst_31284 = cljs.core.chunked_seq_QMARK_(inst_31282);
var state_31385__$1 = state_31385;
if(inst_31284){
var statearr_31515_33800 = state_31385__$1;
(statearr_31515_33800[(1)] = (19));

} else {
var statearr_31516_33801 = state_31385__$1;
(statearr_31516_33801[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (38))){
var inst_31364 = (state_31385[(2)]);
var state_31385__$1 = state_31385;
var statearr_31521_33806 = state_31385__$1;
(statearr_31521_33806[(2)] = inst_31364);

(statearr_31521_33806[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (30))){
var state_31385__$1 = state_31385;
var statearr_31523_33808 = state_31385__$1;
(statearr_31523_33808[(2)] = null);

(statearr_31523_33808[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (10))){
var inst_31259 = (state_31385[(15)]);
var inst_31257 = (state_31385[(17)]);
var inst_31269 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31257,inst_31259);
var inst_31270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31269,(0),null);
var inst_31271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31269,(1),null);
var state_31385__$1 = (function (){var statearr_31524 = state_31385;
(statearr_31524[(26)] = inst_31270);

return statearr_31524;
})();
if(cljs.core.truth_(inst_31271)){
var statearr_31525_33814 = state_31385__$1;
(statearr_31525_33814[(1)] = (13));

} else {
var statearr_31526_33815 = state_31385__$1;
(statearr_31526_33815[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (18))){
var inst_31309 = (state_31385[(2)]);
var state_31385__$1 = state_31385;
var statearr_31527_33820 = state_31385__$1;
(statearr_31527_33820[(2)] = inst_31309);

(statearr_31527_33820[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (42))){
var state_31385__$1 = state_31385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31385__$1,(45),dchan);
} else {
if((state_val_31390 === (37))){
var inst_31353 = (state_31385[(23)]);
var inst_31243 = (state_31385[(10)]);
var inst_31344 = (state_31385[(25)]);
var inst_31353__$1 = cljs.core.first(inst_31344);
var inst_31354 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31353__$1,inst_31243,done);
var state_31385__$1 = (function (){var statearr_31532 = state_31385;
(statearr_31532[(23)] = inst_31353__$1);

return statearr_31532;
})();
if(cljs.core.truth_(inst_31354)){
var statearr_31533_33826 = state_31385__$1;
(statearr_31533_33826[(1)] = (39));

} else {
var statearr_31534_33827 = state_31385__$1;
(statearr_31534_33827[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (8))){
var inst_31258 = (state_31385[(14)]);
var inst_31259 = (state_31385[(15)]);
var inst_31261 = (inst_31259 < inst_31258);
var inst_31262 = inst_31261;
var state_31385__$1 = state_31385;
if(cljs.core.truth_(inst_31262)){
var statearr_31536_33831 = state_31385__$1;
(statearr_31536_33831[(1)] = (10));

} else {
var statearr_31537_33832 = state_31385__$1;
(statearr_31537_33832[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__29435__auto__ = null;
var cljs$core$async$mult_$_state_machine__29435__auto____0 = (function (){
var statearr_31543 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31543[(0)] = cljs$core$async$mult_$_state_machine__29435__auto__);

(statearr_31543[(1)] = (1));

return statearr_31543;
});
var cljs$core$async$mult_$_state_machine__29435__auto____1 = (function (state_31385){
while(true){
var ret_value__29436__auto__ = (function (){try{while(true){
var result__29437__auto__ = switch__29434__auto__(state_31385);
if(cljs.core.keyword_identical_QMARK_(result__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29437__auto__;
}
break;
}
}catch (e31544){if((e31544 instanceof Object)){
var ex__29438__auto__ = e31544;
var statearr_31548_33838 = state_31385;
(statearr_31548_33838[(5)] = ex__29438__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31544;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33840 = state_31385;
state_31385 = G__33840;
continue;
} else {
return ret_value__29436__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29435__auto__ = function(state_31385){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29435__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29435__auto____1.call(this,state_31385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29435__auto____0;
cljs$core$async$mult_$_state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29435__auto____1;
return cljs$core$async$mult_$_state_machine__29435__auto__;
})()
})();
var state__29842__auto__ = (function (){var statearr_31549 = f__29840__auto__();
(statearr_31549[(6)] = c__29839__auto___33670);

return statearr_31549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29842__auto__);
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
var G__31558 = arguments.length;
switch (G__31558) {
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
var len__4789__auto___33867 = arguments.length;
var i__4790__auto___33868 = (0);
while(true){
if((i__4790__auto___33868 < len__4789__auto___33867)){
args__4795__auto__.push((arguments[i__4790__auto___33868]));

var G__33870 = (i__4790__auto___33868 + (1));
i__4790__auto___33868 = G__33870;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31595){
var map__31596 = p__31595;
var map__31596__$1 = (((((!((map__31596 == null))))?(((((map__31596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31596):map__31596);
var opts = map__31596__$1;
var statearr_31598_33873 = state;
(statearr_31598_33873[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31602_33874 = state;
(statearr_31602_33874[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31606_33875 = state;
(statearr_31606_33875[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31584){
var G__31585 = cljs.core.first(seq31584);
var seq31584__$1 = cljs.core.next(seq31584);
var G__31586 = cljs.core.first(seq31584__$1);
var seq31584__$2 = cljs.core.next(seq31584__$1);
var G__31587 = cljs.core.first(seq31584__$2);
var seq31584__$3 = cljs.core.next(seq31584__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31585,G__31586,G__31587,seq31584__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31618 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31618 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31619){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31619 = meta31619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31620,meta31619__$1){
var self__ = this;
var _31620__$1 = this;
return (new cljs.core.async.t_cljs$core$async31618(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31619__$1));
}));

(cljs.core.async.t_cljs$core$async31618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31620){
var self__ = this;
var _31620__$1 = this;
return self__.meta31619;
}));

(cljs.core.async.t_cljs$core$async31618.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31618.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31618.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31618.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31618.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31618.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31618.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31618.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31618.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31619","meta31619",-1774813902,null)], null);
}));

(cljs.core.async.t_cljs$core$async31618.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31618.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31618");

(cljs.core.async.t_cljs$core$async31618.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31618");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31618.
 */
cljs.core.async.__GT_t_cljs$core$async31618 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31618(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31619){
return (new cljs.core.async.t_cljs$core$async31618(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31619));
});

}

return (new cljs.core.async.t_cljs$core$async31618(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29839__auto___33924 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29840__auto__ = (function (){var switch__29434__auto__ = (function (state_31747){
var state_val_31748 = (state_31747[(1)]);
if((state_val_31748 === (7))){
var inst_31651 = (state_31747[(2)]);
var state_31747__$1 = state_31747;
var statearr_31751_33927 = state_31747__$1;
(statearr_31751_33927[(2)] = inst_31651);

(statearr_31751_33927[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (20))){
var inst_31663 = (state_31747[(7)]);
var state_31747__$1 = state_31747;
var statearr_31753_33933 = state_31747__$1;
(statearr_31753_33933[(2)] = inst_31663);

(statearr_31753_33933[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (27))){
var state_31747__$1 = state_31747;
var statearr_31754_33938 = state_31747__$1;
(statearr_31754_33938[(2)] = null);

(statearr_31754_33938[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (1))){
var inst_31638 = (state_31747[(8)]);
var inst_31638__$1 = calc_state();
var inst_31640 = (inst_31638__$1 == null);
var inst_31641 = cljs.core.not(inst_31640);
var state_31747__$1 = (function (){var statearr_31756 = state_31747;
(statearr_31756[(8)] = inst_31638__$1);

return statearr_31756;
})();
if(inst_31641){
var statearr_31757_33939 = state_31747__$1;
(statearr_31757_33939[(1)] = (2));

} else {
var statearr_31758_33940 = state_31747__$1;
(statearr_31758_33940[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (24))){
var inst_31690 = (state_31747[(9)]);
var inst_31715 = (state_31747[(10)]);
var inst_31701 = (state_31747[(11)]);
var inst_31715__$1 = (inst_31690.cljs$core$IFn$_invoke$arity$1 ? inst_31690.cljs$core$IFn$_invoke$arity$1(inst_31701) : inst_31690.call(null,inst_31701));
var state_31747__$1 = (function (){var statearr_31763 = state_31747;
(statearr_31763[(10)] = inst_31715__$1);

return statearr_31763;
})();
if(cljs.core.truth_(inst_31715__$1)){
var statearr_31765_33948 = state_31747__$1;
(statearr_31765_33948[(1)] = (29));

} else {
var statearr_31766_33949 = state_31747__$1;
(statearr_31766_33949[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (4))){
var inst_31654 = (state_31747[(2)]);
var state_31747__$1 = state_31747;
if(cljs.core.truth_(inst_31654)){
var statearr_31772_33955 = state_31747__$1;
(statearr_31772_33955[(1)] = (8));

} else {
var statearr_31773_33956 = state_31747__$1;
(statearr_31773_33956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (15))){
var inst_31684 = (state_31747[(2)]);
var state_31747__$1 = state_31747;
if(cljs.core.truth_(inst_31684)){
var statearr_31775_33959 = state_31747__$1;
(statearr_31775_33959[(1)] = (19));

} else {
var statearr_31776_33961 = state_31747__$1;
(statearr_31776_33961[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (21))){
var inst_31689 = (state_31747[(12)]);
var inst_31689__$1 = (state_31747[(2)]);
var inst_31690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31689__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31689__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31689__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31747__$1 = (function (){var statearr_31778 = state_31747;
(statearr_31778[(9)] = inst_31690);

(statearr_31778[(13)] = inst_31691);

(statearr_31778[(12)] = inst_31689__$1);

return statearr_31778;
})();
return cljs.core.async.ioc_alts_BANG_(state_31747__$1,(22),inst_31692);
} else {
if((state_val_31748 === (31))){
var inst_31725 = (state_31747[(2)]);
var state_31747__$1 = state_31747;
if(cljs.core.truth_(inst_31725)){
var statearr_31781_33974 = state_31747__$1;
(statearr_31781_33974[(1)] = (32));

} else {
var statearr_31782_33975 = state_31747__$1;
(statearr_31782_33975[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (32))){
var inst_31700 = (state_31747[(14)]);
var state_31747__$1 = state_31747;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31747__$1,(35),out,inst_31700);
} else {
if((state_val_31748 === (33))){
var inst_31689 = (state_31747[(12)]);
var inst_31663 = inst_31689;
var state_31747__$1 = (function (){var statearr_31783 = state_31747;
(statearr_31783[(7)] = inst_31663);

return statearr_31783;
})();
var statearr_31784_33980 = state_31747__$1;
(statearr_31784_33980[(2)] = null);

(statearr_31784_33980[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (13))){
var inst_31663 = (state_31747[(7)]);
var inst_31673 = inst_31663.cljs$lang$protocol_mask$partition0$;
var inst_31674 = (inst_31673 & (64));
var inst_31675 = inst_31663.cljs$core$ISeq$;
var inst_31676 = (cljs.core.PROTOCOL_SENTINEL === inst_31675);
var inst_31677 = ((inst_31674) || (inst_31676));
var state_31747__$1 = state_31747;
if(cljs.core.truth_(inst_31677)){
var statearr_31786_33985 = state_31747__$1;
(statearr_31786_33985[(1)] = (16));

} else {
var statearr_31789_33986 = state_31747__$1;
(statearr_31789_33986[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (22))){
var inst_31700 = (state_31747[(14)]);
var inst_31701 = (state_31747[(11)]);
var inst_31699 = (state_31747[(2)]);
var inst_31700__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31699,(0),null);
var inst_31701__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31699,(1),null);
var inst_31702 = (inst_31700__$1 == null);
var inst_31703 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31701__$1,change);
var inst_31704 = ((inst_31702) || (inst_31703));
var state_31747__$1 = (function (){var statearr_31791 = state_31747;
(statearr_31791[(14)] = inst_31700__$1);

(statearr_31791[(11)] = inst_31701__$1);

return statearr_31791;
})();
if(cljs.core.truth_(inst_31704)){
var statearr_31792_33995 = state_31747__$1;
(statearr_31792_33995[(1)] = (23));

} else {
var statearr_31793_33997 = state_31747__$1;
(statearr_31793_33997[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (36))){
var inst_31689 = (state_31747[(12)]);
var inst_31663 = inst_31689;
var state_31747__$1 = (function (){var statearr_31795 = state_31747;
(statearr_31795[(7)] = inst_31663);

return statearr_31795;
})();
var statearr_31796_34000 = state_31747__$1;
(statearr_31796_34000[(2)] = null);

(statearr_31796_34000[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (29))){
var inst_31715 = (state_31747[(10)]);
var state_31747__$1 = state_31747;
var statearr_31797_34004 = state_31747__$1;
(statearr_31797_34004[(2)] = inst_31715);

(statearr_31797_34004[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (6))){
var state_31747__$1 = state_31747;
var statearr_31800_34006 = state_31747__$1;
(statearr_31800_34006[(2)] = false);

(statearr_31800_34006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (28))){
var inst_31711 = (state_31747[(2)]);
var inst_31712 = calc_state();
var inst_31663 = inst_31712;
var state_31747__$1 = (function (){var statearr_31802 = state_31747;
(statearr_31802[(7)] = inst_31663);

(statearr_31802[(15)] = inst_31711);

return statearr_31802;
})();
var statearr_31803_34012 = state_31747__$1;
(statearr_31803_34012[(2)] = null);

(statearr_31803_34012[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (25))){
var inst_31739 = (state_31747[(2)]);
var state_31747__$1 = state_31747;
var statearr_31804_34016 = state_31747__$1;
(statearr_31804_34016[(2)] = inst_31739);

(statearr_31804_34016[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (34))){
var inst_31737 = (state_31747[(2)]);
var state_31747__$1 = state_31747;
var statearr_31805_34019 = state_31747__$1;
(statearr_31805_34019[(2)] = inst_31737);

(statearr_31805_34019[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (17))){
var state_31747__$1 = state_31747;
var statearr_31808_34027 = state_31747__$1;
(statearr_31808_34027[(2)] = false);

(statearr_31808_34027[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (3))){
var state_31747__$1 = state_31747;
var statearr_31812_34029 = state_31747__$1;
(statearr_31812_34029[(2)] = false);

(statearr_31812_34029[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (12))){
var inst_31741 = (state_31747[(2)]);
var state_31747__$1 = state_31747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31747__$1,inst_31741);
} else {
if((state_val_31748 === (2))){
var inst_31638 = (state_31747[(8)]);
var inst_31643 = inst_31638.cljs$lang$protocol_mask$partition0$;
var inst_31644 = (inst_31643 & (64));
var inst_31645 = inst_31638.cljs$core$ISeq$;
var inst_31646 = (cljs.core.PROTOCOL_SENTINEL === inst_31645);
var inst_31647 = ((inst_31644) || (inst_31646));
var state_31747__$1 = state_31747;
if(cljs.core.truth_(inst_31647)){
var statearr_31815_34033 = state_31747__$1;
(statearr_31815_34033[(1)] = (5));

} else {
var statearr_31816_34035 = state_31747__$1;
(statearr_31816_34035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (23))){
var inst_31700 = (state_31747[(14)]);
var inst_31706 = (inst_31700 == null);
var state_31747__$1 = state_31747;
if(cljs.core.truth_(inst_31706)){
var statearr_31818_34038 = state_31747__$1;
(statearr_31818_34038[(1)] = (26));

} else {
var statearr_31819_34041 = state_31747__$1;
(statearr_31819_34041[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (35))){
var inst_31728 = (state_31747[(2)]);
var state_31747__$1 = state_31747;
if(cljs.core.truth_(inst_31728)){
var statearr_31820_34046 = state_31747__$1;
(statearr_31820_34046[(1)] = (36));

} else {
var statearr_31821_34047 = state_31747__$1;
(statearr_31821_34047[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (19))){
var inst_31663 = (state_31747[(7)]);
var inst_31686 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31663);
var state_31747__$1 = state_31747;
var statearr_31822_34050 = state_31747__$1;
(statearr_31822_34050[(2)] = inst_31686);

(statearr_31822_34050[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (11))){
var inst_31663 = (state_31747[(7)]);
var inst_31670 = (inst_31663 == null);
var inst_31671 = cljs.core.not(inst_31670);
var state_31747__$1 = state_31747;
if(inst_31671){
var statearr_31828_34055 = state_31747__$1;
(statearr_31828_34055[(1)] = (13));

} else {
var statearr_31829_34058 = state_31747__$1;
(statearr_31829_34058[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (9))){
var inst_31638 = (state_31747[(8)]);
var state_31747__$1 = state_31747;
var statearr_31831_34059 = state_31747__$1;
(statearr_31831_34059[(2)] = inst_31638);

(statearr_31831_34059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (5))){
var state_31747__$1 = state_31747;
var statearr_31833_34060 = state_31747__$1;
(statearr_31833_34060[(2)] = true);

(statearr_31833_34060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (14))){
var state_31747__$1 = state_31747;
var statearr_31835_34063 = state_31747__$1;
(statearr_31835_34063[(2)] = false);

(statearr_31835_34063[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (26))){
var inst_31701 = (state_31747[(11)]);
var inst_31708 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31701);
var state_31747__$1 = state_31747;
var statearr_31837_34064 = state_31747__$1;
(statearr_31837_34064[(2)] = inst_31708);

(statearr_31837_34064[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (16))){
var state_31747__$1 = state_31747;
var statearr_31840_34072 = state_31747__$1;
(statearr_31840_34072[(2)] = true);

(statearr_31840_34072[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (38))){
var inst_31733 = (state_31747[(2)]);
var state_31747__$1 = state_31747;
var statearr_31841_34073 = state_31747__$1;
(statearr_31841_34073[(2)] = inst_31733);

(statearr_31841_34073[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (30))){
var inst_31690 = (state_31747[(9)]);
var inst_31691 = (state_31747[(13)]);
var inst_31701 = (state_31747[(11)]);
var inst_31720 = cljs.core.empty_QMARK_(inst_31690);
var inst_31721 = (inst_31691.cljs$core$IFn$_invoke$arity$1 ? inst_31691.cljs$core$IFn$_invoke$arity$1(inst_31701) : inst_31691.call(null,inst_31701));
var inst_31722 = cljs.core.not(inst_31721);
var inst_31723 = ((inst_31720) && (inst_31722));
var state_31747__$1 = state_31747;
var statearr_31843_34082 = state_31747__$1;
(statearr_31843_34082[(2)] = inst_31723);

(statearr_31843_34082[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (10))){
var inst_31638 = (state_31747[(8)]);
var inst_31659 = (state_31747[(2)]);
var inst_31660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31659,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31659,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31659,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31663 = inst_31638;
var state_31747__$1 = (function (){var statearr_31844 = state_31747;
(statearr_31844[(16)] = inst_31661);

(statearr_31844[(7)] = inst_31663);

(statearr_31844[(17)] = inst_31662);

(statearr_31844[(18)] = inst_31660);

return statearr_31844;
})();
var statearr_31846_34089 = state_31747__$1;
(statearr_31846_34089[(2)] = null);

(statearr_31846_34089[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (18))){
var inst_31681 = (state_31747[(2)]);
var state_31747__$1 = state_31747;
var statearr_31850_34090 = state_31747__$1;
(statearr_31850_34090[(2)] = inst_31681);

(statearr_31850_34090[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (37))){
var state_31747__$1 = state_31747;
var statearr_31852_34093 = state_31747__$1;
(statearr_31852_34093[(2)] = null);

(statearr_31852_34093[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (8))){
var inst_31638 = (state_31747[(8)]);
var inst_31656 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31638);
var state_31747__$1 = state_31747;
var statearr_31853_34094 = state_31747__$1;
(statearr_31853_34094[(2)] = inst_31656);

(statearr_31853_34094[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__29435__auto__ = null;
var cljs$core$async$mix_$_state_machine__29435__auto____0 = (function (){
var statearr_31854 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31854[(0)] = cljs$core$async$mix_$_state_machine__29435__auto__);

(statearr_31854[(1)] = (1));

return statearr_31854;
});
var cljs$core$async$mix_$_state_machine__29435__auto____1 = (function (state_31747){
while(true){
var ret_value__29436__auto__ = (function (){try{while(true){
var result__29437__auto__ = switch__29434__auto__(state_31747);
if(cljs.core.keyword_identical_QMARK_(result__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29437__auto__;
}
break;
}
}catch (e31855){if((e31855 instanceof Object)){
var ex__29438__auto__ = e31855;
var statearr_31858_34100 = state_31747;
(statearr_31858_34100[(5)] = ex__29438__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31855;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34104 = state_31747;
state_31747 = G__34104;
continue;
} else {
return ret_value__29436__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29435__auto__ = function(state_31747){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29435__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29435__auto____1.call(this,state_31747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29435__auto____0;
cljs$core$async$mix_$_state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29435__auto____1;
return cljs$core$async$mix_$_state_machine__29435__auto__;
})()
})();
var state__29842__auto__ = (function (){var statearr_31860 = f__29840__auto__();
(statearr_31860[(6)] = c__29839__auto___33924);

return statearr_31860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29842__auto__);
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
var G__31891 = arguments.length;
switch (G__31891) {
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
var G__31897 = arguments.length;
switch (G__31897) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31895_SHARP_){
if(cljs.core.truth_((p1__31895_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31895_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31895_SHARP_.call(null,topic)))){
return p1__31895_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31895_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31907 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31907 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31908){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31908 = meta31908;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31909,meta31908__$1){
var self__ = this;
var _31909__$1 = this;
return (new cljs.core.async.t_cljs$core$async31907(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31908__$1));
}));

(cljs.core.async.t_cljs$core$async31907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31909){
var self__ = this;
var _31909__$1 = this;
return self__.meta31908;
}));

(cljs.core.async.t_cljs$core$async31907.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31907.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31907.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31907.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31907.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async31907.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31907.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31907.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31908","meta31908",-522566899,null)], null);
}));

(cljs.core.async.t_cljs$core$async31907.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31907.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31907");

(cljs.core.async.t_cljs$core$async31907.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31907");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31907.
 */
cljs.core.async.__GT_t_cljs$core$async31907 = (function cljs$core$async$__GT_t_cljs$core$async31907(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31908){
return (new cljs.core.async.t_cljs$core$async31907(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31908));
});

}

return (new cljs.core.async.t_cljs$core$async31907(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29839__auto___34137 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29840__auto__ = (function (){var switch__29434__auto__ = (function (state_31996){
var state_val_31997 = (state_31996[(1)]);
if((state_val_31997 === (7))){
var inst_31992 = (state_31996[(2)]);
var state_31996__$1 = state_31996;
var statearr_31999_34142 = state_31996__$1;
(statearr_31999_34142[(2)] = inst_31992);

(statearr_31999_34142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (20))){
var state_31996__$1 = state_31996;
var statearr_32000_34144 = state_31996__$1;
(statearr_32000_34144[(2)] = null);

(statearr_32000_34144[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (1))){
var state_31996__$1 = state_31996;
var statearr_32001_34145 = state_31996__$1;
(statearr_32001_34145[(2)] = null);

(statearr_32001_34145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (24))){
var inst_31975 = (state_31996[(7)]);
var inst_31984 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31975);
var state_31996__$1 = state_31996;
var statearr_32003_34149 = state_31996__$1;
(statearr_32003_34149[(2)] = inst_31984);

(statearr_32003_34149[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (4))){
var inst_31926 = (state_31996[(8)]);
var inst_31926__$1 = (state_31996[(2)]);
var inst_31927 = (inst_31926__$1 == null);
var state_31996__$1 = (function (){var statearr_32005 = state_31996;
(statearr_32005[(8)] = inst_31926__$1);

return statearr_32005;
})();
if(cljs.core.truth_(inst_31927)){
var statearr_32006_34151 = state_31996__$1;
(statearr_32006_34151[(1)] = (5));

} else {
var statearr_32007_34155 = state_31996__$1;
(statearr_32007_34155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (15))){
var inst_31969 = (state_31996[(2)]);
var state_31996__$1 = state_31996;
var statearr_32008_34157 = state_31996__$1;
(statearr_32008_34157[(2)] = inst_31969);

(statearr_32008_34157[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (21))){
var inst_31989 = (state_31996[(2)]);
var state_31996__$1 = (function (){var statearr_32009 = state_31996;
(statearr_32009[(9)] = inst_31989);

return statearr_32009;
})();
var statearr_32010_34159 = state_31996__$1;
(statearr_32010_34159[(2)] = null);

(statearr_32010_34159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (13))){
var inst_31951 = (state_31996[(10)]);
var inst_31953 = cljs.core.chunked_seq_QMARK_(inst_31951);
var state_31996__$1 = state_31996;
if(inst_31953){
var statearr_32011_34164 = state_31996__$1;
(statearr_32011_34164[(1)] = (16));

} else {
var statearr_32012_34165 = state_31996__$1;
(statearr_32012_34165[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (22))){
var inst_31981 = (state_31996[(2)]);
var state_31996__$1 = state_31996;
if(cljs.core.truth_(inst_31981)){
var statearr_32013_34171 = state_31996__$1;
(statearr_32013_34171[(1)] = (23));

} else {
var statearr_32014_34173 = state_31996__$1;
(statearr_32014_34173[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (6))){
var inst_31975 = (state_31996[(7)]);
var inst_31977 = (state_31996[(11)]);
var inst_31926 = (state_31996[(8)]);
var inst_31975__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31926) : topic_fn.call(null,inst_31926));
var inst_31976 = cljs.core.deref(mults);
var inst_31977__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31976,inst_31975__$1);
var state_31996__$1 = (function (){var statearr_32015 = state_31996;
(statearr_32015[(7)] = inst_31975__$1);

(statearr_32015[(11)] = inst_31977__$1);

return statearr_32015;
})();
if(cljs.core.truth_(inst_31977__$1)){
var statearr_32016_34182 = state_31996__$1;
(statearr_32016_34182[(1)] = (19));

} else {
var statearr_32017_34183 = state_31996__$1;
(statearr_32017_34183[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (25))){
var inst_31986 = (state_31996[(2)]);
var state_31996__$1 = state_31996;
var statearr_32018_34186 = state_31996__$1;
(statearr_32018_34186[(2)] = inst_31986);

(statearr_32018_34186[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (17))){
var inst_31951 = (state_31996[(10)]);
var inst_31960 = cljs.core.first(inst_31951);
var inst_31961 = cljs.core.async.muxch_STAR_(inst_31960);
var inst_31962 = cljs.core.async.close_BANG_(inst_31961);
var inst_31963 = cljs.core.next(inst_31951);
var inst_31936 = inst_31963;
var inst_31937 = null;
var inst_31938 = (0);
var inst_31939 = (0);
var state_31996__$1 = (function (){var statearr_32023 = state_31996;
(statearr_32023[(12)] = inst_31937);

(statearr_32023[(13)] = inst_31936);

(statearr_32023[(14)] = inst_31939);

(statearr_32023[(15)] = inst_31962);

(statearr_32023[(16)] = inst_31938);

return statearr_32023;
})();
var statearr_32024_34191 = state_31996__$1;
(statearr_32024_34191[(2)] = null);

(statearr_32024_34191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (3))){
var inst_31994 = (state_31996[(2)]);
var state_31996__$1 = state_31996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31996__$1,inst_31994);
} else {
if((state_val_31997 === (12))){
var inst_31971 = (state_31996[(2)]);
var state_31996__$1 = state_31996;
var statearr_32034_34193 = state_31996__$1;
(statearr_32034_34193[(2)] = inst_31971);

(statearr_32034_34193[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (2))){
var state_31996__$1 = state_31996;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31996__$1,(4),ch);
} else {
if((state_val_31997 === (23))){
var state_31996__$1 = state_31996;
var statearr_32036_34198 = state_31996__$1;
(statearr_32036_34198[(2)] = null);

(statearr_32036_34198[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (19))){
var inst_31977 = (state_31996[(11)]);
var inst_31926 = (state_31996[(8)]);
var inst_31979 = cljs.core.async.muxch_STAR_(inst_31977);
var state_31996__$1 = state_31996;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31996__$1,(22),inst_31979,inst_31926);
} else {
if((state_val_31997 === (11))){
var inst_31936 = (state_31996[(13)]);
var inst_31951 = (state_31996[(10)]);
var inst_31951__$1 = cljs.core.seq(inst_31936);
var state_31996__$1 = (function (){var statearr_32043 = state_31996;
(statearr_32043[(10)] = inst_31951__$1);

return statearr_32043;
})();
if(inst_31951__$1){
var statearr_32044_34201 = state_31996__$1;
(statearr_32044_34201[(1)] = (13));

} else {
var statearr_32046_34202 = state_31996__$1;
(statearr_32046_34202[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (9))){
var inst_31973 = (state_31996[(2)]);
var state_31996__$1 = state_31996;
var statearr_32051_34205 = state_31996__$1;
(statearr_32051_34205[(2)] = inst_31973);

(statearr_32051_34205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (5))){
var inst_31933 = cljs.core.deref(mults);
var inst_31934 = cljs.core.vals(inst_31933);
var inst_31935 = cljs.core.seq(inst_31934);
var inst_31936 = inst_31935;
var inst_31937 = null;
var inst_31938 = (0);
var inst_31939 = (0);
var state_31996__$1 = (function (){var statearr_32058 = state_31996;
(statearr_32058[(12)] = inst_31937);

(statearr_32058[(13)] = inst_31936);

(statearr_32058[(14)] = inst_31939);

(statearr_32058[(16)] = inst_31938);

return statearr_32058;
})();
var statearr_32060_34209 = state_31996__$1;
(statearr_32060_34209[(2)] = null);

(statearr_32060_34209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (14))){
var state_31996__$1 = state_31996;
var statearr_32064_34213 = state_31996__$1;
(statearr_32064_34213[(2)] = null);

(statearr_32064_34213[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (16))){
var inst_31951 = (state_31996[(10)]);
var inst_31955 = cljs.core.chunk_first(inst_31951);
var inst_31956 = cljs.core.chunk_rest(inst_31951);
var inst_31957 = cljs.core.count(inst_31955);
var inst_31936 = inst_31956;
var inst_31937 = inst_31955;
var inst_31938 = inst_31957;
var inst_31939 = (0);
var state_31996__$1 = (function (){var statearr_32067 = state_31996;
(statearr_32067[(12)] = inst_31937);

(statearr_32067[(13)] = inst_31936);

(statearr_32067[(14)] = inst_31939);

(statearr_32067[(16)] = inst_31938);

return statearr_32067;
})();
var statearr_32068_34218 = state_31996__$1;
(statearr_32068_34218[(2)] = null);

(statearr_32068_34218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (10))){
var inst_31937 = (state_31996[(12)]);
var inst_31936 = (state_31996[(13)]);
var inst_31939 = (state_31996[(14)]);
var inst_31938 = (state_31996[(16)]);
var inst_31944 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31937,inst_31939);
var inst_31946 = cljs.core.async.muxch_STAR_(inst_31944);
var inst_31947 = cljs.core.async.close_BANG_(inst_31946);
var inst_31948 = (inst_31939 + (1));
var tmp32061 = inst_31937;
var tmp32062 = inst_31936;
var tmp32063 = inst_31938;
var inst_31936__$1 = tmp32062;
var inst_31937__$1 = tmp32061;
var inst_31938__$1 = tmp32063;
var inst_31939__$1 = inst_31948;
var state_31996__$1 = (function (){var statearr_32071 = state_31996;
(statearr_32071[(12)] = inst_31937__$1);

(statearr_32071[(13)] = inst_31936__$1);

(statearr_32071[(14)] = inst_31939__$1);

(statearr_32071[(16)] = inst_31938__$1);

(statearr_32071[(17)] = inst_31947);

return statearr_32071;
})();
var statearr_32073_34228 = state_31996__$1;
(statearr_32073_34228[(2)] = null);

(statearr_32073_34228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (18))){
var inst_31966 = (state_31996[(2)]);
var state_31996__$1 = state_31996;
var statearr_32074_34230 = state_31996__$1;
(statearr_32074_34230[(2)] = inst_31966);

(statearr_32074_34230[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (8))){
var inst_31939 = (state_31996[(14)]);
var inst_31938 = (state_31996[(16)]);
var inst_31941 = (inst_31939 < inst_31938);
var inst_31942 = inst_31941;
var state_31996__$1 = state_31996;
if(cljs.core.truth_(inst_31942)){
var statearr_32075_34235 = state_31996__$1;
(statearr_32075_34235[(1)] = (10));

} else {
var statearr_32076_34236 = state_31996__$1;
(statearr_32076_34236[(1)] = (11));

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
var cljs$core$async$state_machine__29435__auto__ = null;
var cljs$core$async$state_machine__29435__auto____0 = (function (){
var statearr_32077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32077[(0)] = cljs$core$async$state_machine__29435__auto__);

(statearr_32077[(1)] = (1));

return statearr_32077;
});
var cljs$core$async$state_machine__29435__auto____1 = (function (state_31996){
while(true){
var ret_value__29436__auto__ = (function (){try{while(true){
var result__29437__auto__ = switch__29434__auto__(state_31996);
if(cljs.core.keyword_identical_QMARK_(result__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29437__auto__;
}
break;
}
}catch (e32078){if((e32078 instanceof Object)){
var ex__29438__auto__ = e32078;
var statearr_32079_34238 = state_31996;
(statearr_32079_34238[(5)] = ex__29438__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32078;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34240 = state_31996;
state_31996 = G__34240;
continue;
} else {
return ret_value__29436__auto__;
}
break;
}
});
cljs$core$async$state_machine__29435__auto__ = function(state_31996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29435__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29435__auto____1.call(this,state_31996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29435__auto____0;
cljs$core$async$state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29435__auto____1;
return cljs$core$async$state_machine__29435__auto__;
})()
})();
var state__29842__auto__ = (function (){var statearr_32080 = f__29840__auto__();
(statearr_32080[(6)] = c__29839__auto___34137);

return statearr_32080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29842__auto__);
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
var G__32083 = arguments.length;
switch (G__32083) {
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
var G__32087 = arguments.length;
switch (G__32087) {
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
var G__32093 = arguments.length;
switch (G__32093) {
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
var c__29839__auto___34262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29840__auto__ = (function (){var switch__29434__auto__ = (function (state_32144){
var state_val_32145 = (state_32144[(1)]);
if((state_val_32145 === (7))){
var state_32144__$1 = state_32144;
var statearr_32146_34266 = state_32144__$1;
(statearr_32146_34266[(2)] = null);

(statearr_32146_34266[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (1))){
var state_32144__$1 = state_32144;
var statearr_32149_34267 = state_32144__$1;
(statearr_32149_34267[(2)] = null);

(statearr_32149_34267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (4))){
var inst_32096 = (state_32144[(7)]);
var inst_32102 = (inst_32096 < cnt);
var state_32144__$1 = state_32144;
if(cljs.core.truth_(inst_32102)){
var statearr_32150_34268 = state_32144__$1;
(statearr_32150_34268[(1)] = (6));

} else {
var statearr_32151_34269 = state_32144__$1;
(statearr_32151_34269[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (15))){
var inst_32140 = (state_32144[(2)]);
var state_32144__$1 = state_32144;
var statearr_32152_34270 = state_32144__$1;
(statearr_32152_34270[(2)] = inst_32140);

(statearr_32152_34270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (13))){
var inst_32129 = cljs.core.async.close_BANG_(out);
var state_32144__$1 = state_32144;
var statearr_32153_34274 = state_32144__$1;
(statearr_32153_34274[(2)] = inst_32129);

(statearr_32153_34274[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (6))){
var state_32144__$1 = state_32144;
var statearr_32154_34277 = state_32144__$1;
(statearr_32154_34277[(2)] = null);

(statearr_32154_34277[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (3))){
var inst_32142 = (state_32144[(2)]);
var state_32144__$1 = state_32144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32144__$1,inst_32142);
} else {
if((state_val_32145 === (12))){
var inst_32126 = (state_32144[(8)]);
var inst_32126__$1 = (state_32144[(2)]);
var inst_32127 = cljs.core.some(cljs.core.nil_QMARK_,inst_32126__$1);
var state_32144__$1 = (function (){var statearr_32156 = state_32144;
(statearr_32156[(8)] = inst_32126__$1);

return statearr_32156;
})();
if(cljs.core.truth_(inst_32127)){
var statearr_32157_34283 = state_32144__$1;
(statearr_32157_34283[(1)] = (13));

} else {
var statearr_32158_34284 = state_32144__$1;
(statearr_32158_34284[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (2))){
var inst_32095 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32096 = (0);
var state_32144__$1 = (function (){var statearr_32162 = state_32144;
(statearr_32162[(7)] = inst_32096);

(statearr_32162[(9)] = inst_32095);

return statearr_32162;
})();
var statearr_32163_34288 = state_32144__$1;
(statearr_32163_34288[(2)] = null);

(statearr_32163_34288[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (11))){
var inst_32096 = (state_32144[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32144,(10),Object,null,(9));
var inst_32113 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32096) : chs__$1.call(null,inst_32096));
var inst_32114 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32096) : done.call(null,inst_32096));
var inst_32115 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32113,inst_32114);
var state_32144__$1 = state_32144;
var statearr_32166_34291 = state_32144__$1;
(statearr_32166_34291[(2)] = inst_32115);


cljs.core.async.impl.ioc_helpers.process_exception(state_32144__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (9))){
var inst_32096 = (state_32144[(7)]);
var inst_32117 = (state_32144[(2)]);
var inst_32118 = (inst_32096 + (1));
var inst_32096__$1 = inst_32118;
var state_32144__$1 = (function (){var statearr_32167 = state_32144;
(statearr_32167[(10)] = inst_32117);

(statearr_32167[(7)] = inst_32096__$1);

return statearr_32167;
})();
var statearr_32168_34296 = state_32144__$1;
(statearr_32168_34296[(2)] = null);

(statearr_32168_34296[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (5))){
var inst_32124 = (state_32144[(2)]);
var state_32144__$1 = (function (){var statearr_32169 = state_32144;
(statearr_32169[(11)] = inst_32124);

return statearr_32169;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32144__$1,(12),dchan);
} else {
if((state_val_32145 === (14))){
var inst_32126 = (state_32144[(8)]);
var inst_32135 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32126);
var state_32144__$1 = state_32144;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32144__$1,(16),out,inst_32135);
} else {
if((state_val_32145 === (16))){
var inst_32137 = (state_32144[(2)]);
var state_32144__$1 = (function (){var statearr_32170 = state_32144;
(statearr_32170[(12)] = inst_32137);

return statearr_32170;
})();
var statearr_32171_34306 = state_32144__$1;
(statearr_32171_34306[(2)] = null);

(statearr_32171_34306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (10))){
var inst_32104 = (state_32144[(2)]);
var inst_32105 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32144__$1 = (function (){var statearr_32172 = state_32144;
(statearr_32172[(13)] = inst_32104);

return statearr_32172;
})();
var statearr_32173_34308 = state_32144__$1;
(statearr_32173_34308[(2)] = inst_32105);


cljs.core.async.impl.ioc_helpers.process_exception(state_32144__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (8))){
var inst_32122 = (state_32144[(2)]);
var state_32144__$1 = state_32144;
var statearr_32174_34309 = state_32144__$1;
(statearr_32174_34309[(2)] = inst_32122);

(statearr_32174_34309[(1)] = (5));


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
var cljs$core$async$state_machine__29435__auto__ = null;
var cljs$core$async$state_machine__29435__auto____0 = (function (){
var statearr_32179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32179[(0)] = cljs$core$async$state_machine__29435__auto__);

(statearr_32179[(1)] = (1));

return statearr_32179;
});
var cljs$core$async$state_machine__29435__auto____1 = (function (state_32144){
while(true){
var ret_value__29436__auto__ = (function (){try{while(true){
var result__29437__auto__ = switch__29434__auto__(state_32144);
if(cljs.core.keyword_identical_QMARK_(result__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29437__auto__;
}
break;
}
}catch (e32180){if((e32180 instanceof Object)){
var ex__29438__auto__ = e32180;
var statearr_32182_34311 = state_32144;
(statearr_32182_34311[(5)] = ex__29438__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32180;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34312 = state_32144;
state_32144 = G__34312;
continue;
} else {
return ret_value__29436__auto__;
}
break;
}
});
cljs$core$async$state_machine__29435__auto__ = function(state_32144){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29435__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29435__auto____1.call(this,state_32144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29435__auto____0;
cljs$core$async$state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29435__auto____1;
return cljs$core$async$state_machine__29435__auto__;
})()
})();
var state__29842__auto__ = (function (){var statearr_32186 = f__29840__auto__();
(statearr_32186[(6)] = c__29839__auto___34262);

return statearr_32186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29842__auto__);
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
var G__32190 = arguments.length;
switch (G__32190) {
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
var c__29839__auto___34317 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29840__auto__ = (function (){var switch__29434__auto__ = (function (state_32234){
var state_val_32235 = (state_32234[(1)]);
if((state_val_32235 === (7))){
var inst_32207 = (state_32234[(7)]);
var inst_32206 = (state_32234[(8)]);
var inst_32206__$1 = (state_32234[(2)]);
var inst_32207__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32206__$1,(0),null);
var inst_32208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32206__$1,(1),null);
var inst_32212 = (inst_32207__$1 == null);
var state_32234__$1 = (function (){var statearr_32249 = state_32234;
(statearr_32249[(9)] = inst_32208);

(statearr_32249[(7)] = inst_32207__$1);

(statearr_32249[(8)] = inst_32206__$1);

return statearr_32249;
})();
if(cljs.core.truth_(inst_32212)){
var statearr_32251_34324 = state_32234__$1;
(statearr_32251_34324[(1)] = (8));

} else {
var statearr_32253_34328 = state_32234__$1;
(statearr_32253_34328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (1))){
var inst_32195 = cljs.core.vec(chs);
var inst_32196 = inst_32195;
var state_32234__$1 = (function (){var statearr_32257 = state_32234;
(statearr_32257[(10)] = inst_32196);

return statearr_32257;
})();
var statearr_32258_34329 = state_32234__$1;
(statearr_32258_34329[(2)] = null);

(statearr_32258_34329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (4))){
var inst_32196 = (state_32234[(10)]);
var state_32234__$1 = state_32234;
return cljs.core.async.ioc_alts_BANG_(state_32234__$1,(7),inst_32196);
} else {
if((state_val_32235 === (6))){
var inst_32228 = (state_32234[(2)]);
var state_32234__$1 = state_32234;
var statearr_32262_34331 = state_32234__$1;
(statearr_32262_34331[(2)] = inst_32228);

(statearr_32262_34331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (3))){
var inst_32230 = (state_32234[(2)]);
var state_32234__$1 = state_32234;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32234__$1,inst_32230);
} else {
if((state_val_32235 === (2))){
var inst_32196 = (state_32234[(10)]);
var inst_32198 = cljs.core.count(inst_32196);
var inst_32199 = (inst_32198 > (0));
var state_32234__$1 = state_32234;
if(cljs.core.truth_(inst_32199)){
var statearr_32265_34334 = state_32234__$1;
(statearr_32265_34334[(1)] = (4));

} else {
var statearr_32266_34335 = state_32234__$1;
(statearr_32266_34335[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (11))){
var inst_32196 = (state_32234[(10)]);
var inst_32220 = (state_32234[(2)]);
var tmp32264 = inst_32196;
var inst_32196__$1 = tmp32264;
var state_32234__$1 = (function (){var statearr_32270 = state_32234;
(statearr_32270[(10)] = inst_32196__$1);

(statearr_32270[(11)] = inst_32220);

return statearr_32270;
})();
var statearr_32271_34336 = state_32234__$1;
(statearr_32271_34336[(2)] = null);

(statearr_32271_34336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (9))){
var inst_32207 = (state_32234[(7)]);
var state_32234__$1 = state_32234;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32234__$1,(11),out,inst_32207);
} else {
if((state_val_32235 === (5))){
var inst_32226 = cljs.core.async.close_BANG_(out);
var state_32234__$1 = state_32234;
var statearr_32277_34337 = state_32234__$1;
(statearr_32277_34337[(2)] = inst_32226);

(statearr_32277_34337[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (10))){
var inst_32224 = (state_32234[(2)]);
var state_32234__$1 = state_32234;
var statearr_32280_34338 = state_32234__$1;
(statearr_32280_34338[(2)] = inst_32224);

(statearr_32280_34338[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (8))){
var inst_32208 = (state_32234[(9)]);
var inst_32207 = (state_32234[(7)]);
var inst_32196 = (state_32234[(10)]);
var inst_32206 = (state_32234[(8)]);
var inst_32215 = (function (){var cs = inst_32196;
var vec__32202 = inst_32206;
var v = inst_32207;
var c = inst_32208;
return (function (p1__32188_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32188_SHARP_);
});
})();
var inst_32216 = cljs.core.filterv(inst_32215,inst_32196);
var inst_32196__$1 = inst_32216;
var state_32234__$1 = (function (){var statearr_32286 = state_32234;
(statearr_32286[(10)] = inst_32196__$1);

return statearr_32286;
})();
var statearr_32289_34343 = state_32234__$1;
(statearr_32289_34343[(2)] = null);

(statearr_32289_34343[(1)] = (2));


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
var cljs$core$async$state_machine__29435__auto__ = null;
var cljs$core$async$state_machine__29435__auto____0 = (function (){
var statearr_32297 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32297[(0)] = cljs$core$async$state_machine__29435__auto__);

(statearr_32297[(1)] = (1));

return statearr_32297;
});
var cljs$core$async$state_machine__29435__auto____1 = (function (state_32234){
while(true){
var ret_value__29436__auto__ = (function (){try{while(true){
var result__29437__auto__ = switch__29434__auto__(state_32234);
if(cljs.core.keyword_identical_QMARK_(result__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29437__auto__;
}
break;
}
}catch (e32299){if((e32299 instanceof Object)){
var ex__29438__auto__ = e32299;
var statearr_32302_34376 = state_32234;
(statearr_32302_34376[(5)] = ex__29438__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32299;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34381 = state_32234;
state_32234 = G__34381;
continue;
} else {
return ret_value__29436__auto__;
}
break;
}
});
cljs$core$async$state_machine__29435__auto__ = function(state_32234){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29435__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29435__auto____1.call(this,state_32234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29435__auto____0;
cljs$core$async$state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29435__auto____1;
return cljs$core$async$state_machine__29435__auto__;
})()
})();
var state__29842__auto__ = (function (){var statearr_32311 = f__29840__auto__();
(statearr_32311[(6)] = c__29839__auto___34317);

return statearr_32311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29842__auto__);
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
var G__32326 = arguments.length;
switch (G__32326) {
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
var c__29839__auto___34400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29840__auto__ = (function (){var switch__29434__auto__ = (function (state_32371){
var state_val_32373 = (state_32371[(1)]);
if((state_val_32373 === (7))){
var inst_32346 = (state_32371[(7)]);
var inst_32346__$1 = (state_32371[(2)]);
var inst_32347 = (inst_32346__$1 == null);
var inst_32348 = cljs.core.not(inst_32347);
var state_32371__$1 = (function (){var statearr_32382 = state_32371;
(statearr_32382[(7)] = inst_32346__$1);

return statearr_32382;
})();
if(inst_32348){
var statearr_32385_34403 = state_32371__$1;
(statearr_32385_34403[(1)] = (8));

} else {
var statearr_32386_34405 = state_32371__$1;
(statearr_32386_34405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (1))){
var inst_32337 = (0);
var state_32371__$1 = (function (){var statearr_32387 = state_32371;
(statearr_32387[(8)] = inst_32337);

return statearr_32387;
})();
var statearr_32393_34407 = state_32371__$1;
(statearr_32393_34407[(2)] = null);

(statearr_32393_34407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (4))){
var state_32371__$1 = state_32371;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32371__$1,(7),ch);
} else {
if((state_val_32373 === (6))){
var inst_32361 = (state_32371[(2)]);
var state_32371__$1 = state_32371;
var statearr_32400_34412 = state_32371__$1;
(statearr_32400_34412[(2)] = inst_32361);

(statearr_32400_34412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (3))){
var inst_32363 = (state_32371[(2)]);
var inst_32364 = cljs.core.async.close_BANG_(out);
var state_32371__$1 = (function (){var statearr_32401 = state_32371;
(statearr_32401[(9)] = inst_32363);

return statearr_32401;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32371__$1,inst_32364);
} else {
if((state_val_32373 === (2))){
var inst_32337 = (state_32371[(8)]);
var inst_32339 = (inst_32337 < n);
var state_32371__$1 = state_32371;
if(cljs.core.truth_(inst_32339)){
var statearr_32403_34417 = state_32371__$1;
(statearr_32403_34417[(1)] = (4));

} else {
var statearr_32406_34419 = state_32371__$1;
(statearr_32406_34419[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (11))){
var inst_32337 = (state_32371[(8)]);
var inst_32353 = (state_32371[(2)]);
var inst_32354 = (inst_32337 + (1));
var inst_32337__$1 = inst_32354;
var state_32371__$1 = (function (){var statearr_32409 = state_32371;
(statearr_32409[(8)] = inst_32337__$1);

(statearr_32409[(10)] = inst_32353);

return statearr_32409;
})();
var statearr_32410_34426 = state_32371__$1;
(statearr_32410_34426[(2)] = null);

(statearr_32410_34426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (9))){
var state_32371__$1 = state_32371;
var statearr_32414_34429 = state_32371__$1;
(statearr_32414_34429[(2)] = null);

(statearr_32414_34429[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (5))){
var state_32371__$1 = state_32371;
var statearr_32417_34430 = state_32371__$1;
(statearr_32417_34430[(2)] = null);

(statearr_32417_34430[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (10))){
var inst_32358 = (state_32371[(2)]);
var state_32371__$1 = state_32371;
var statearr_32418_34432 = state_32371__$1;
(statearr_32418_34432[(2)] = inst_32358);

(statearr_32418_34432[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (8))){
var inst_32346 = (state_32371[(7)]);
var state_32371__$1 = state_32371;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32371__$1,(11),out,inst_32346);
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
var cljs$core$async$state_machine__29435__auto__ = null;
var cljs$core$async$state_machine__29435__auto____0 = (function (){
var statearr_32422 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32422[(0)] = cljs$core$async$state_machine__29435__auto__);

(statearr_32422[(1)] = (1));

return statearr_32422;
});
var cljs$core$async$state_machine__29435__auto____1 = (function (state_32371){
while(true){
var ret_value__29436__auto__ = (function (){try{while(true){
var result__29437__auto__ = switch__29434__auto__(state_32371);
if(cljs.core.keyword_identical_QMARK_(result__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29437__auto__;
}
break;
}
}catch (e32425){if((e32425 instanceof Object)){
var ex__29438__auto__ = e32425;
var statearr_32427_34442 = state_32371;
(statearr_32427_34442[(5)] = ex__29438__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32425;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34444 = state_32371;
state_32371 = G__34444;
continue;
} else {
return ret_value__29436__auto__;
}
break;
}
});
cljs$core$async$state_machine__29435__auto__ = function(state_32371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29435__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29435__auto____1.call(this,state_32371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29435__auto____0;
cljs$core$async$state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29435__auto____1;
return cljs$core$async$state_machine__29435__auto__;
})()
})();
var state__29842__auto__ = (function (){var statearr_32428 = f__29840__auto__();
(statearr_32428[(6)] = c__29839__auto___34400);

return statearr_32428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29842__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32440 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32440 = (function (f,ch,meta32441){
this.f = f;
this.ch = ch;
this.meta32441 = meta32441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32442,meta32441__$1){
var self__ = this;
var _32442__$1 = this;
return (new cljs.core.async.t_cljs$core$async32440(self__.f,self__.ch,meta32441__$1));
}));

(cljs.core.async.t_cljs$core$async32440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32442){
var self__ = this;
var _32442__$1 = this;
return self__.meta32441;
}));

(cljs.core.async.t_cljs$core$async32440.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32440.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32440.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32440.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32440.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32450 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32450 = (function (f,ch,meta32441,_,fn1,meta32451){
this.f = f;
this.ch = ch;
this.meta32441 = meta32441;
this._ = _;
this.fn1 = fn1;
this.meta32451 = meta32451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32452,meta32451__$1){
var self__ = this;
var _32452__$1 = this;
return (new cljs.core.async.t_cljs$core$async32450(self__.f,self__.ch,self__.meta32441,self__._,self__.fn1,meta32451__$1));
}));

(cljs.core.async.t_cljs$core$async32450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32452){
var self__ = this;
var _32452__$1 = this;
return self__.meta32451;
}));

(cljs.core.async.t_cljs$core$async32450.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32450.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32450.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32450.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32434_SHARP_){
var G__32468 = (((p1__32434_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32434_SHARP_) : self__.f.call(null,p1__32434_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32468) : f1.call(null,G__32468));
});
}));

(cljs.core.async.t_cljs$core$async32450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32441","meta32441",831004470,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32440","cljs.core.async/t_cljs$core$async32440",1209563073,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32451","meta32451",-1627425637,null)], null);
}));

(cljs.core.async.t_cljs$core$async32450.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32450");

(cljs.core.async.t_cljs$core$async32450.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32450");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32450.
 */
cljs.core.async.__GT_t_cljs$core$async32450 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32450(f__$1,ch__$1,meta32441__$1,___$2,fn1__$1,meta32451){
return (new cljs.core.async.t_cljs$core$async32450(f__$1,ch__$1,meta32441__$1,___$2,fn1__$1,meta32451));
});

}

return (new cljs.core.async.t_cljs$core$async32450(self__.f,self__.ch,self__.meta32441,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32495 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32495) : self__.f.call(null,G__32495));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32440.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32440.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32441","meta32441",831004470,null)], null);
}));

(cljs.core.async.t_cljs$core$async32440.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32440");

(cljs.core.async.t_cljs$core$async32440.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32440");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32440.
 */
cljs.core.async.__GT_t_cljs$core$async32440 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32440(f__$1,ch__$1,meta32441){
return (new cljs.core.async.t_cljs$core$async32440(f__$1,ch__$1,meta32441));
});

}

return (new cljs.core.async.t_cljs$core$async32440(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32507 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32507 = (function (f,ch,meta32508){
this.f = f;
this.ch = ch;
this.meta32508 = meta32508;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32509,meta32508__$1){
var self__ = this;
var _32509__$1 = this;
return (new cljs.core.async.t_cljs$core$async32507(self__.f,self__.ch,meta32508__$1));
}));

(cljs.core.async.t_cljs$core$async32507.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32509){
var self__ = this;
var _32509__$1 = this;
return self__.meta32508;
}));

(cljs.core.async.t_cljs$core$async32507.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32507.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32507.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32507.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32507.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32507.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32507.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32508","meta32508",1029110579,null)], null);
}));

(cljs.core.async.t_cljs$core$async32507.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32507.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32507");

(cljs.core.async.t_cljs$core$async32507.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32507");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32507.
 */
cljs.core.async.__GT_t_cljs$core$async32507 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32507(f__$1,ch__$1,meta32508){
return (new cljs.core.async.t_cljs$core$async32507(f__$1,ch__$1,meta32508));
});

}

return (new cljs.core.async.t_cljs$core$async32507(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32523 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32523 = (function (p,ch,meta32524){
this.p = p;
this.ch = ch;
this.meta32524 = meta32524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32525,meta32524__$1){
var self__ = this;
var _32525__$1 = this;
return (new cljs.core.async.t_cljs$core$async32523(self__.p,self__.ch,meta32524__$1));
}));

(cljs.core.async.t_cljs$core$async32523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32525){
var self__ = this;
var _32525__$1 = this;
return self__.meta32524;
}));

(cljs.core.async.t_cljs$core$async32523.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32523.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32523.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32523.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32523.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32523.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32523.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32523.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32524","meta32524",-656397240,null)], null);
}));

(cljs.core.async.t_cljs$core$async32523.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32523.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32523");

(cljs.core.async.t_cljs$core$async32523.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32523");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32523.
 */
cljs.core.async.__GT_t_cljs$core$async32523 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32523(p__$1,ch__$1,meta32524){
return (new cljs.core.async.t_cljs$core$async32523(p__$1,ch__$1,meta32524));
});

}

return (new cljs.core.async.t_cljs$core$async32523(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32543 = arguments.length;
switch (G__32543) {
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
var c__29839__auto___34531 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29840__auto__ = (function (){var switch__29434__auto__ = (function (state_32565){
var state_val_32566 = (state_32565[(1)]);
if((state_val_32566 === (7))){
var inst_32561 = (state_32565[(2)]);
var state_32565__$1 = state_32565;
var statearr_32570_34535 = state_32565__$1;
(statearr_32570_34535[(2)] = inst_32561);

(statearr_32570_34535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (1))){
var state_32565__$1 = state_32565;
var statearr_32572_34537 = state_32565__$1;
(statearr_32572_34537[(2)] = null);

(statearr_32572_34537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (4))){
var inst_32547 = (state_32565[(7)]);
var inst_32547__$1 = (state_32565[(2)]);
var inst_32548 = (inst_32547__$1 == null);
var state_32565__$1 = (function (){var statearr_32573 = state_32565;
(statearr_32573[(7)] = inst_32547__$1);

return statearr_32573;
})();
if(cljs.core.truth_(inst_32548)){
var statearr_32574_34540 = state_32565__$1;
(statearr_32574_34540[(1)] = (5));

} else {
var statearr_32575_34541 = state_32565__$1;
(statearr_32575_34541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (6))){
var inst_32547 = (state_32565[(7)]);
var inst_32552 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32547) : p.call(null,inst_32547));
var state_32565__$1 = state_32565;
if(cljs.core.truth_(inst_32552)){
var statearr_32576_34542 = state_32565__$1;
(statearr_32576_34542[(1)] = (8));

} else {
var statearr_32577_34543 = state_32565__$1;
(statearr_32577_34543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (3))){
var inst_32563 = (state_32565[(2)]);
var state_32565__$1 = state_32565;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32565__$1,inst_32563);
} else {
if((state_val_32566 === (2))){
var state_32565__$1 = state_32565;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32565__$1,(4),ch);
} else {
if((state_val_32566 === (11))){
var inst_32555 = (state_32565[(2)]);
var state_32565__$1 = state_32565;
var statearr_32583_34544 = state_32565__$1;
(statearr_32583_34544[(2)] = inst_32555);

(statearr_32583_34544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (9))){
var state_32565__$1 = state_32565;
var statearr_32587_34545 = state_32565__$1;
(statearr_32587_34545[(2)] = null);

(statearr_32587_34545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (5))){
var inst_32550 = cljs.core.async.close_BANG_(out);
var state_32565__$1 = state_32565;
var statearr_32588_34546 = state_32565__$1;
(statearr_32588_34546[(2)] = inst_32550);

(statearr_32588_34546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (10))){
var inst_32558 = (state_32565[(2)]);
var state_32565__$1 = (function (){var statearr_32589 = state_32565;
(statearr_32589[(8)] = inst_32558);

return statearr_32589;
})();
var statearr_32591_34554 = state_32565__$1;
(statearr_32591_34554[(2)] = null);

(statearr_32591_34554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (8))){
var inst_32547 = (state_32565[(7)]);
var state_32565__$1 = state_32565;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32565__$1,(11),out,inst_32547);
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
var cljs$core$async$state_machine__29435__auto__ = null;
var cljs$core$async$state_machine__29435__auto____0 = (function (){
var statearr_32594 = [null,null,null,null,null,null,null,null,null];
(statearr_32594[(0)] = cljs$core$async$state_machine__29435__auto__);

(statearr_32594[(1)] = (1));

return statearr_32594;
});
var cljs$core$async$state_machine__29435__auto____1 = (function (state_32565){
while(true){
var ret_value__29436__auto__ = (function (){try{while(true){
var result__29437__auto__ = switch__29434__auto__(state_32565);
if(cljs.core.keyword_identical_QMARK_(result__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29437__auto__;
}
break;
}
}catch (e32595){if((e32595 instanceof Object)){
var ex__29438__auto__ = e32595;
var statearr_32596_34556 = state_32565;
(statearr_32596_34556[(5)] = ex__29438__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32595;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34558 = state_32565;
state_32565 = G__34558;
continue;
} else {
return ret_value__29436__auto__;
}
break;
}
});
cljs$core$async$state_machine__29435__auto__ = function(state_32565){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29435__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29435__auto____1.call(this,state_32565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29435__auto____0;
cljs$core$async$state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29435__auto____1;
return cljs$core$async$state_machine__29435__auto__;
})()
})();
var state__29842__auto__ = (function (){var statearr_32597 = f__29840__auto__();
(statearr_32597[(6)] = c__29839__auto___34531);

return statearr_32597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29842__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32602 = arguments.length;
switch (G__32602) {
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
var c__29839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29840__auto__ = (function (){var switch__29434__auto__ = (function (state_32673){
var state_val_32674 = (state_32673[(1)]);
if((state_val_32674 === (7))){
var inst_32669 = (state_32673[(2)]);
var state_32673__$1 = state_32673;
var statearr_32675_34562 = state_32673__$1;
(statearr_32675_34562[(2)] = inst_32669);

(statearr_32675_34562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (20))){
var inst_32639 = (state_32673[(7)]);
var inst_32650 = (state_32673[(2)]);
var inst_32651 = cljs.core.next(inst_32639);
var inst_32624 = inst_32651;
var inst_32625 = null;
var inst_32626 = (0);
var inst_32627 = (0);
var state_32673__$1 = (function (){var statearr_32676 = state_32673;
(statearr_32676[(8)] = inst_32627);

(statearr_32676[(9)] = inst_32626);

(statearr_32676[(10)] = inst_32624);

(statearr_32676[(11)] = inst_32625);

(statearr_32676[(12)] = inst_32650);

return statearr_32676;
})();
var statearr_32680_34571 = state_32673__$1;
(statearr_32680_34571[(2)] = null);

(statearr_32680_34571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (1))){
var state_32673__$1 = state_32673;
var statearr_32681_34572 = state_32673__$1;
(statearr_32681_34572[(2)] = null);

(statearr_32681_34572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (4))){
var inst_32612 = (state_32673[(13)]);
var inst_32612__$1 = (state_32673[(2)]);
var inst_32614 = (inst_32612__$1 == null);
var state_32673__$1 = (function (){var statearr_32683 = state_32673;
(statearr_32683[(13)] = inst_32612__$1);

return statearr_32683;
})();
if(cljs.core.truth_(inst_32614)){
var statearr_32684_34573 = state_32673__$1;
(statearr_32684_34573[(1)] = (5));

} else {
var statearr_32685_34574 = state_32673__$1;
(statearr_32685_34574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (15))){
var state_32673__$1 = state_32673;
var statearr_32689_34575 = state_32673__$1;
(statearr_32689_34575[(2)] = null);

(statearr_32689_34575[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (21))){
var state_32673__$1 = state_32673;
var statearr_32692_34576 = state_32673__$1;
(statearr_32692_34576[(2)] = null);

(statearr_32692_34576[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (13))){
var inst_32627 = (state_32673[(8)]);
var inst_32626 = (state_32673[(9)]);
var inst_32624 = (state_32673[(10)]);
var inst_32625 = (state_32673[(11)]);
var inst_32635 = (state_32673[(2)]);
var inst_32636 = (inst_32627 + (1));
var tmp32686 = inst_32626;
var tmp32687 = inst_32624;
var tmp32688 = inst_32625;
var inst_32624__$1 = tmp32687;
var inst_32625__$1 = tmp32688;
var inst_32626__$1 = tmp32686;
var inst_32627__$1 = inst_32636;
var state_32673__$1 = (function (){var statearr_32693 = state_32673;
(statearr_32693[(8)] = inst_32627__$1);

(statearr_32693[(14)] = inst_32635);

(statearr_32693[(9)] = inst_32626__$1);

(statearr_32693[(10)] = inst_32624__$1);

(statearr_32693[(11)] = inst_32625__$1);

return statearr_32693;
})();
var statearr_32694_34581 = state_32673__$1;
(statearr_32694_34581[(2)] = null);

(statearr_32694_34581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (22))){
var state_32673__$1 = state_32673;
var statearr_32695_34583 = state_32673__$1;
(statearr_32695_34583[(2)] = null);

(statearr_32695_34583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (6))){
var inst_32612 = (state_32673[(13)]);
var inst_32622 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32612) : f.call(null,inst_32612));
var inst_32623 = cljs.core.seq(inst_32622);
var inst_32624 = inst_32623;
var inst_32625 = null;
var inst_32626 = (0);
var inst_32627 = (0);
var state_32673__$1 = (function (){var statearr_32696 = state_32673;
(statearr_32696[(8)] = inst_32627);

(statearr_32696[(9)] = inst_32626);

(statearr_32696[(10)] = inst_32624);

(statearr_32696[(11)] = inst_32625);

return statearr_32696;
})();
var statearr_32697_34589 = state_32673__$1;
(statearr_32697_34589[(2)] = null);

(statearr_32697_34589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (17))){
var inst_32639 = (state_32673[(7)]);
var inst_32643 = cljs.core.chunk_first(inst_32639);
var inst_32644 = cljs.core.chunk_rest(inst_32639);
var inst_32645 = cljs.core.count(inst_32643);
var inst_32624 = inst_32644;
var inst_32625 = inst_32643;
var inst_32626 = inst_32645;
var inst_32627 = (0);
var state_32673__$1 = (function (){var statearr_32698 = state_32673;
(statearr_32698[(8)] = inst_32627);

(statearr_32698[(9)] = inst_32626);

(statearr_32698[(10)] = inst_32624);

(statearr_32698[(11)] = inst_32625);

return statearr_32698;
})();
var statearr_32699_34591 = state_32673__$1;
(statearr_32699_34591[(2)] = null);

(statearr_32699_34591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (3))){
var inst_32671 = (state_32673[(2)]);
var state_32673__$1 = state_32673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32673__$1,inst_32671);
} else {
if((state_val_32674 === (12))){
var inst_32659 = (state_32673[(2)]);
var state_32673__$1 = state_32673;
var statearr_32701_34592 = state_32673__$1;
(statearr_32701_34592[(2)] = inst_32659);

(statearr_32701_34592[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (2))){
var state_32673__$1 = state_32673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32673__$1,(4),in$);
} else {
if((state_val_32674 === (23))){
var inst_32667 = (state_32673[(2)]);
var state_32673__$1 = state_32673;
var statearr_32702_34596 = state_32673__$1;
(statearr_32702_34596[(2)] = inst_32667);

(statearr_32702_34596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (19))){
var inst_32654 = (state_32673[(2)]);
var state_32673__$1 = state_32673;
var statearr_32707_34599 = state_32673__$1;
(statearr_32707_34599[(2)] = inst_32654);

(statearr_32707_34599[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (11))){
var inst_32639 = (state_32673[(7)]);
var inst_32624 = (state_32673[(10)]);
var inst_32639__$1 = cljs.core.seq(inst_32624);
var state_32673__$1 = (function (){var statearr_32712 = state_32673;
(statearr_32712[(7)] = inst_32639__$1);

return statearr_32712;
})();
if(inst_32639__$1){
var statearr_32713_34603 = state_32673__$1;
(statearr_32713_34603[(1)] = (14));

} else {
var statearr_32718_34604 = state_32673__$1;
(statearr_32718_34604[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (9))){
var inst_32661 = (state_32673[(2)]);
var inst_32662 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32673__$1 = (function (){var statearr_32719 = state_32673;
(statearr_32719[(15)] = inst_32661);

return statearr_32719;
})();
if(cljs.core.truth_(inst_32662)){
var statearr_32720_34606 = state_32673__$1;
(statearr_32720_34606[(1)] = (21));

} else {
var statearr_32721_34607 = state_32673__$1;
(statearr_32721_34607[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (5))){
var inst_32616 = cljs.core.async.close_BANG_(out);
var state_32673__$1 = state_32673;
var statearr_32722_34608 = state_32673__$1;
(statearr_32722_34608[(2)] = inst_32616);

(statearr_32722_34608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (14))){
var inst_32639 = (state_32673[(7)]);
var inst_32641 = cljs.core.chunked_seq_QMARK_(inst_32639);
var state_32673__$1 = state_32673;
if(inst_32641){
var statearr_32723_34612 = state_32673__$1;
(statearr_32723_34612[(1)] = (17));

} else {
var statearr_32724_34613 = state_32673__$1;
(statearr_32724_34613[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (16))){
var inst_32657 = (state_32673[(2)]);
var state_32673__$1 = state_32673;
var statearr_32725_34614 = state_32673__$1;
(statearr_32725_34614[(2)] = inst_32657);

(statearr_32725_34614[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (10))){
var inst_32627 = (state_32673[(8)]);
var inst_32625 = (state_32673[(11)]);
var inst_32633 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32625,inst_32627);
var state_32673__$1 = state_32673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32673__$1,(13),out,inst_32633);
} else {
if((state_val_32674 === (18))){
var inst_32639 = (state_32673[(7)]);
var inst_32648 = cljs.core.first(inst_32639);
var state_32673__$1 = state_32673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32673__$1,(20),out,inst_32648);
} else {
if((state_val_32674 === (8))){
var inst_32627 = (state_32673[(8)]);
var inst_32626 = (state_32673[(9)]);
var inst_32630 = (inst_32627 < inst_32626);
var inst_32631 = inst_32630;
var state_32673__$1 = state_32673;
if(cljs.core.truth_(inst_32631)){
var statearr_32728_34621 = state_32673__$1;
(statearr_32728_34621[(1)] = (10));

} else {
var statearr_32729_34622 = state_32673__$1;
(statearr_32729_34622[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__29435__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29435__auto____0 = (function (){
var statearr_32730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32730[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29435__auto__);

(statearr_32730[(1)] = (1));

return statearr_32730;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29435__auto____1 = (function (state_32673){
while(true){
var ret_value__29436__auto__ = (function (){try{while(true){
var result__29437__auto__ = switch__29434__auto__(state_32673);
if(cljs.core.keyword_identical_QMARK_(result__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29437__auto__;
}
break;
}
}catch (e32731){if((e32731 instanceof Object)){
var ex__29438__auto__ = e32731;
var statearr_32732_34627 = state_32673;
(statearr_32732_34627[(5)] = ex__29438__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32731;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34629 = state_32673;
state_32673 = G__34629;
continue;
} else {
return ret_value__29436__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29435__auto__ = function(state_32673){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29435__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29435__auto____1.call(this,state_32673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29435__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29435__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29435__auto__;
})()
})();
var state__29842__auto__ = (function (){var statearr_32733 = f__29840__auto__();
(statearr_32733[(6)] = c__29839__auto__);

return statearr_32733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29842__auto__);
}));

return c__29839__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32735 = arguments.length;
switch (G__32735) {
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
var G__32741 = arguments.length;
switch (G__32741) {
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
var G__32758 = arguments.length;
switch (G__32758) {
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
var c__29839__auto___34636 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29840__auto__ = (function (){var switch__29434__auto__ = (function (state_32790){
var state_val_32791 = (state_32790[(1)]);
if((state_val_32791 === (7))){
var inst_32785 = (state_32790[(2)]);
var state_32790__$1 = state_32790;
var statearr_32797_34637 = state_32790__$1;
(statearr_32797_34637[(2)] = inst_32785);

(statearr_32797_34637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32791 === (1))){
var inst_32763 = null;
var state_32790__$1 = (function (){var statearr_32798 = state_32790;
(statearr_32798[(7)] = inst_32763);

return statearr_32798;
})();
var statearr_32799_34638 = state_32790__$1;
(statearr_32799_34638[(2)] = null);

(statearr_32799_34638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32791 === (4))){
var inst_32766 = (state_32790[(8)]);
var inst_32766__$1 = (state_32790[(2)]);
var inst_32771 = (inst_32766__$1 == null);
var inst_32772 = cljs.core.not(inst_32771);
var state_32790__$1 = (function (){var statearr_32800 = state_32790;
(statearr_32800[(8)] = inst_32766__$1);

return statearr_32800;
})();
if(inst_32772){
var statearr_32805_34639 = state_32790__$1;
(statearr_32805_34639[(1)] = (5));

} else {
var statearr_32806_34641 = state_32790__$1;
(statearr_32806_34641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32791 === (6))){
var state_32790__$1 = state_32790;
var statearr_32811_34644 = state_32790__$1;
(statearr_32811_34644[(2)] = null);

(statearr_32811_34644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32791 === (3))){
var inst_32787 = (state_32790[(2)]);
var inst_32788 = cljs.core.async.close_BANG_(out);
var state_32790__$1 = (function (){var statearr_32813 = state_32790;
(statearr_32813[(9)] = inst_32787);

return statearr_32813;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32790__$1,inst_32788);
} else {
if((state_val_32791 === (2))){
var state_32790__$1 = state_32790;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32790__$1,(4),ch);
} else {
if((state_val_32791 === (11))){
var inst_32766 = (state_32790[(8)]);
var inst_32779 = (state_32790[(2)]);
var inst_32763 = inst_32766;
var state_32790__$1 = (function (){var statearr_32817 = state_32790;
(statearr_32817[(7)] = inst_32763);

(statearr_32817[(10)] = inst_32779);

return statearr_32817;
})();
var statearr_32818_34645 = state_32790__$1;
(statearr_32818_34645[(2)] = null);

(statearr_32818_34645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32791 === (9))){
var inst_32766 = (state_32790[(8)]);
var state_32790__$1 = state_32790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32790__$1,(11),out,inst_32766);
} else {
if((state_val_32791 === (5))){
var inst_32763 = (state_32790[(7)]);
var inst_32766 = (state_32790[(8)]);
var inst_32774 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32766,inst_32763);
var state_32790__$1 = state_32790;
if(inst_32774){
var statearr_32824_34647 = state_32790__$1;
(statearr_32824_34647[(1)] = (8));

} else {
var statearr_32829_34648 = state_32790__$1;
(statearr_32829_34648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32791 === (10))){
var inst_32782 = (state_32790[(2)]);
var state_32790__$1 = state_32790;
var statearr_32830_34650 = state_32790__$1;
(statearr_32830_34650[(2)] = inst_32782);

(statearr_32830_34650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32791 === (8))){
var inst_32763 = (state_32790[(7)]);
var tmp32820 = inst_32763;
var inst_32763__$1 = tmp32820;
var state_32790__$1 = (function (){var statearr_32831 = state_32790;
(statearr_32831[(7)] = inst_32763__$1);

return statearr_32831;
})();
var statearr_32832_34651 = state_32790__$1;
(statearr_32832_34651[(2)] = null);

(statearr_32832_34651[(1)] = (2));


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
var cljs$core$async$state_machine__29435__auto__ = null;
var cljs$core$async$state_machine__29435__auto____0 = (function (){
var statearr_32836 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32836[(0)] = cljs$core$async$state_machine__29435__auto__);

(statearr_32836[(1)] = (1));

return statearr_32836;
});
var cljs$core$async$state_machine__29435__auto____1 = (function (state_32790){
while(true){
var ret_value__29436__auto__ = (function (){try{while(true){
var result__29437__auto__ = switch__29434__auto__(state_32790);
if(cljs.core.keyword_identical_QMARK_(result__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29437__auto__;
}
break;
}
}catch (e32837){if((e32837 instanceof Object)){
var ex__29438__auto__ = e32837;
var statearr_32839_34653 = state_32790;
(statearr_32839_34653[(5)] = ex__29438__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32837;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34654 = state_32790;
state_32790 = G__34654;
continue;
} else {
return ret_value__29436__auto__;
}
break;
}
});
cljs$core$async$state_machine__29435__auto__ = function(state_32790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29435__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29435__auto____1.call(this,state_32790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29435__auto____0;
cljs$core$async$state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29435__auto____1;
return cljs$core$async$state_machine__29435__auto__;
})()
})();
var state__29842__auto__ = (function (){var statearr_32841 = f__29840__auto__();
(statearr_32841[(6)] = c__29839__auto___34636);

return statearr_32841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29842__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32847 = arguments.length;
switch (G__32847) {
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
var c__29839__auto___34659 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29840__auto__ = (function (){var switch__29434__auto__ = (function (state_32890){
var state_val_32891 = (state_32890[(1)]);
if((state_val_32891 === (7))){
var inst_32886 = (state_32890[(2)]);
var state_32890__$1 = state_32890;
var statearr_32892_34661 = state_32890__$1;
(statearr_32892_34661[(2)] = inst_32886);

(statearr_32892_34661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32891 === (1))){
var inst_32850 = (new Array(n));
var inst_32851 = inst_32850;
var inst_32852 = (0);
var state_32890__$1 = (function (){var statearr_32893 = state_32890;
(statearr_32893[(7)] = inst_32851);

(statearr_32893[(8)] = inst_32852);

return statearr_32893;
})();
var statearr_32894_34663 = state_32890__$1;
(statearr_32894_34663[(2)] = null);

(statearr_32894_34663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32891 === (4))){
var inst_32856 = (state_32890[(9)]);
var inst_32856__$1 = (state_32890[(2)]);
var inst_32857 = (inst_32856__$1 == null);
var inst_32858 = cljs.core.not(inst_32857);
var state_32890__$1 = (function (){var statearr_32895 = state_32890;
(statearr_32895[(9)] = inst_32856__$1);

return statearr_32895;
})();
if(inst_32858){
var statearr_32896_34665 = state_32890__$1;
(statearr_32896_34665[(1)] = (5));

} else {
var statearr_32897_34666 = state_32890__$1;
(statearr_32897_34666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32891 === (15))){
var inst_32880 = (state_32890[(2)]);
var state_32890__$1 = state_32890;
var statearr_32898_34668 = state_32890__$1;
(statearr_32898_34668[(2)] = inst_32880);

(statearr_32898_34668[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32891 === (13))){
var state_32890__$1 = state_32890;
var statearr_32900_34673 = state_32890__$1;
(statearr_32900_34673[(2)] = null);

(statearr_32900_34673[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32891 === (6))){
var inst_32852 = (state_32890[(8)]);
var inst_32876 = (inst_32852 > (0));
var state_32890__$1 = state_32890;
if(cljs.core.truth_(inst_32876)){
var statearr_32901_34675 = state_32890__$1;
(statearr_32901_34675[(1)] = (12));

} else {
var statearr_32902_34676 = state_32890__$1;
(statearr_32902_34676[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32891 === (3))){
var inst_32888 = (state_32890[(2)]);
var state_32890__$1 = state_32890;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32890__$1,inst_32888);
} else {
if((state_val_32891 === (12))){
var inst_32851 = (state_32890[(7)]);
var inst_32878 = cljs.core.vec(inst_32851);
var state_32890__$1 = state_32890;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32890__$1,(15),out,inst_32878);
} else {
if((state_val_32891 === (2))){
var state_32890__$1 = state_32890;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32890__$1,(4),ch);
} else {
if((state_val_32891 === (11))){
var inst_32869 = (state_32890[(2)]);
var inst_32870 = (new Array(n));
var inst_32851 = inst_32870;
var inst_32852 = (0);
var state_32890__$1 = (function (){var statearr_32903 = state_32890;
(statearr_32903[(7)] = inst_32851);

(statearr_32903[(8)] = inst_32852);

(statearr_32903[(10)] = inst_32869);

return statearr_32903;
})();
var statearr_32904_34679 = state_32890__$1;
(statearr_32904_34679[(2)] = null);

(statearr_32904_34679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32891 === (9))){
var inst_32851 = (state_32890[(7)]);
var inst_32867 = cljs.core.vec(inst_32851);
var state_32890__$1 = state_32890;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32890__$1,(11),out,inst_32867);
} else {
if((state_val_32891 === (5))){
var inst_32856 = (state_32890[(9)]);
var inst_32851 = (state_32890[(7)]);
var inst_32852 = (state_32890[(8)]);
var inst_32862 = (state_32890[(11)]);
var inst_32860 = (inst_32851[inst_32852] = inst_32856);
var inst_32862__$1 = (inst_32852 + (1));
var inst_32863 = (inst_32862__$1 < n);
var state_32890__$1 = (function (){var statearr_32906 = state_32890;
(statearr_32906[(12)] = inst_32860);

(statearr_32906[(11)] = inst_32862__$1);

return statearr_32906;
})();
if(cljs.core.truth_(inst_32863)){
var statearr_32907_34681 = state_32890__$1;
(statearr_32907_34681[(1)] = (8));

} else {
var statearr_32908_34682 = state_32890__$1;
(statearr_32908_34682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32891 === (14))){
var inst_32883 = (state_32890[(2)]);
var inst_32884 = cljs.core.async.close_BANG_(out);
var state_32890__$1 = (function (){var statearr_32910 = state_32890;
(statearr_32910[(13)] = inst_32883);

return statearr_32910;
})();
var statearr_32911_34684 = state_32890__$1;
(statearr_32911_34684[(2)] = inst_32884);

(statearr_32911_34684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32891 === (10))){
var inst_32873 = (state_32890[(2)]);
var state_32890__$1 = state_32890;
var statearr_32915_34685 = state_32890__$1;
(statearr_32915_34685[(2)] = inst_32873);

(statearr_32915_34685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32891 === (8))){
var inst_32851 = (state_32890[(7)]);
var inst_32862 = (state_32890[(11)]);
var tmp32909 = inst_32851;
var inst_32851__$1 = tmp32909;
var inst_32852 = inst_32862;
var state_32890__$1 = (function (){var statearr_32916 = state_32890;
(statearr_32916[(7)] = inst_32851__$1);

(statearr_32916[(8)] = inst_32852);

return statearr_32916;
})();
var statearr_32917_34688 = state_32890__$1;
(statearr_32917_34688[(2)] = null);

(statearr_32917_34688[(1)] = (2));


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
var cljs$core$async$state_machine__29435__auto__ = null;
var cljs$core$async$state_machine__29435__auto____0 = (function (){
var statearr_32919 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32919[(0)] = cljs$core$async$state_machine__29435__auto__);

(statearr_32919[(1)] = (1));

return statearr_32919;
});
var cljs$core$async$state_machine__29435__auto____1 = (function (state_32890){
while(true){
var ret_value__29436__auto__ = (function (){try{while(true){
var result__29437__auto__ = switch__29434__auto__(state_32890);
if(cljs.core.keyword_identical_QMARK_(result__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29437__auto__;
}
break;
}
}catch (e32921){if((e32921 instanceof Object)){
var ex__29438__auto__ = e32921;
var statearr_32922_34700 = state_32890;
(statearr_32922_34700[(5)] = ex__29438__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32921;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34702 = state_32890;
state_32890 = G__34702;
continue;
} else {
return ret_value__29436__auto__;
}
break;
}
});
cljs$core$async$state_machine__29435__auto__ = function(state_32890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29435__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29435__auto____1.call(this,state_32890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29435__auto____0;
cljs$core$async$state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29435__auto____1;
return cljs$core$async$state_machine__29435__auto__;
})()
})();
var state__29842__auto__ = (function (){var statearr_32929 = f__29840__auto__();
(statearr_32929[(6)] = c__29839__auto___34659);

return statearr_32929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29842__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32931 = arguments.length;
switch (G__32931) {
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
var c__29839__auto___34717 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29840__auto__ = (function (){var switch__29434__auto__ = (function (state_33001){
var state_val_33002 = (state_33001[(1)]);
if((state_val_33002 === (7))){
var inst_32997 = (state_33001[(2)]);
var state_33001__$1 = state_33001;
var statearr_33008_34718 = state_33001__$1;
(statearr_33008_34718[(2)] = inst_32997);

(statearr_33008_34718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (1))){
var inst_32960 = [];
var inst_32961 = inst_32960;
var inst_32962 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33001__$1 = (function (){var statearr_33009 = state_33001;
(statearr_33009[(7)] = inst_32961);

(statearr_33009[(8)] = inst_32962);

return statearr_33009;
})();
var statearr_33010_34719 = state_33001__$1;
(statearr_33010_34719[(2)] = null);

(statearr_33010_34719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (4))){
var inst_32965 = (state_33001[(9)]);
var inst_32965__$1 = (state_33001[(2)]);
var inst_32966 = (inst_32965__$1 == null);
var inst_32967 = cljs.core.not(inst_32966);
var state_33001__$1 = (function (){var statearr_33012 = state_33001;
(statearr_33012[(9)] = inst_32965__$1);

return statearr_33012;
})();
if(inst_32967){
var statearr_33013_34723 = state_33001__$1;
(statearr_33013_34723[(1)] = (5));

} else {
var statearr_33014_34724 = state_33001__$1;
(statearr_33014_34724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (15))){
var inst_32991 = (state_33001[(2)]);
var state_33001__$1 = state_33001;
var statearr_33015_34727 = state_33001__$1;
(statearr_33015_34727[(2)] = inst_32991);

(statearr_33015_34727[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (13))){
var state_33001__$1 = state_33001;
var statearr_33016_34733 = state_33001__$1;
(statearr_33016_34733[(2)] = null);

(statearr_33016_34733[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (6))){
var inst_32961 = (state_33001[(7)]);
var inst_32986 = inst_32961.length;
var inst_32987 = (inst_32986 > (0));
var state_33001__$1 = state_33001;
if(cljs.core.truth_(inst_32987)){
var statearr_33017_34739 = state_33001__$1;
(statearr_33017_34739[(1)] = (12));

} else {
var statearr_33018_34740 = state_33001__$1;
(statearr_33018_34740[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (3))){
var inst_32999 = (state_33001[(2)]);
var state_33001__$1 = state_33001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33001__$1,inst_32999);
} else {
if((state_val_33002 === (12))){
var inst_32961 = (state_33001[(7)]);
var inst_32989 = cljs.core.vec(inst_32961);
var state_33001__$1 = state_33001;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33001__$1,(15),out,inst_32989);
} else {
if((state_val_33002 === (2))){
var state_33001__$1 = state_33001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33001__$1,(4),ch);
} else {
if((state_val_33002 === (11))){
var inst_32969 = (state_33001[(10)]);
var inst_32965 = (state_33001[(9)]);
var inst_32979 = (state_33001[(2)]);
var inst_32980 = [];
var inst_32981 = inst_32980.push(inst_32965);
var inst_32961 = inst_32980;
var inst_32962 = inst_32969;
var state_33001__$1 = (function (){var statearr_33024 = state_33001;
(statearr_33024[(7)] = inst_32961);

(statearr_33024[(11)] = inst_32979);

(statearr_33024[(12)] = inst_32981);

(statearr_33024[(8)] = inst_32962);

return statearr_33024;
})();
var statearr_33025_34753 = state_33001__$1;
(statearr_33025_34753[(2)] = null);

(statearr_33025_34753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (9))){
var inst_32961 = (state_33001[(7)]);
var inst_32977 = cljs.core.vec(inst_32961);
var state_33001__$1 = state_33001;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33001__$1,(11),out,inst_32977);
} else {
if((state_val_33002 === (5))){
var inst_32969 = (state_33001[(10)]);
var inst_32965 = (state_33001[(9)]);
var inst_32962 = (state_33001[(8)]);
var inst_32969__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32965) : f.call(null,inst_32965));
var inst_32970 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32969__$1,inst_32962);
var inst_32971 = cljs.core.keyword_identical_QMARK_(inst_32962,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32972 = ((inst_32970) || (inst_32971));
var state_33001__$1 = (function (){var statearr_33027 = state_33001;
(statearr_33027[(10)] = inst_32969__$1);

return statearr_33027;
})();
if(cljs.core.truth_(inst_32972)){
var statearr_33028_34777 = state_33001__$1;
(statearr_33028_34777[(1)] = (8));

} else {
var statearr_33029_34778 = state_33001__$1;
(statearr_33029_34778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (14))){
var inst_32994 = (state_33001[(2)]);
var inst_32995 = cljs.core.async.close_BANG_(out);
var state_33001__$1 = (function (){var statearr_33032 = state_33001;
(statearr_33032[(13)] = inst_32994);

return statearr_33032;
})();
var statearr_33034_34779 = state_33001__$1;
(statearr_33034_34779[(2)] = inst_32995);

(statearr_33034_34779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (10))){
var inst_32984 = (state_33001[(2)]);
var state_33001__$1 = state_33001;
var statearr_33036_34781 = state_33001__$1;
(statearr_33036_34781[(2)] = inst_32984);

(statearr_33036_34781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (8))){
var inst_32969 = (state_33001[(10)]);
var inst_32961 = (state_33001[(7)]);
var inst_32965 = (state_33001[(9)]);
var inst_32974 = inst_32961.push(inst_32965);
var tmp33031 = inst_32961;
var inst_32961__$1 = tmp33031;
var inst_32962 = inst_32969;
var state_33001__$1 = (function (){var statearr_33039 = state_33001;
(statearr_33039[(7)] = inst_32961__$1);

(statearr_33039[(8)] = inst_32962);

(statearr_33039[(14)] = inst_32974);

return statearr_33039;
})();
var statearr_33040_34784 = state_33001__$1;
(statearr_33040_34784[(2)] = null);

(statearr_33040_34784[(1)] = (2));


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
var cljs$core$async$state_machine__29435__auto__ = null;
var cljs$core$async$state_machine__29435__auto____0 = (function (){
var statearr_33041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33041[(0)] = cljs$core$async$state_machine__29435__auto__);

(statearr_33041[(1)] = (1));

return statearr_33041;
});
var cljs$core$async$state_machine__29435__auto____1 = (function (state_33001){
while(true){
var ret_value__29436__auto__ = (function (){try{while(true){
var result__29437__auto__ = switch__29434__auto__(state_33001);
if(cljs.core.keyword_identical_QMARK_(result__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29437__auto__;
}
break;
}
}catch (e33046){if((e33046 instanceof Object)){
var ex__29438__auto__ = e33046;
var statearr_33047_34795 = state_33001;
(statearr_33047_34795[(5)] = ex__29438__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33046;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34800 = state_33001;
state_33001 = G__34800;
continue;
} else {
return ret_value__29436__auto__;
}
break;
}
});
cljs$core$async$state_machine__29435__auto__ = function(state_33001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29435__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29435__auto____1.call(this,state_33001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29435__auto____0;
cljs$core$async$state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29435__auto____1;
return cljs$core$async$state_machine__29435__auto__;
})()
})();
var state__29842__auto__ = (function (){var statearr_33052 = f__29840__auto__();
(statearr_33052[(6)] = c__29839__auto___34717);

return statearr_33052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29842__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
