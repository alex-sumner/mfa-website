goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33199 = coll;
var G__33200 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33199,G__33200) : shadow.dom.lazy_native_coll_seq.call(null,G__33199,G__33200));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33296 = arguments.length;
switch (G__33296) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33307 = arguments.length;
switch (G__33307) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33315 = arguments.length;
switch (G__33315) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33331 = arguments.length;
switch (G__33331) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33344 = arguments.length;
switch (G__33344) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__33352 = document;
var G__33353 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33352,G__33353);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__33361 = shadow.dom.dom_node(parent);
var G__33362 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33361,G__33362);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__33367 = shadow.dom.dom_node(el);
var G__33368 = cls;
return goog.dom.classlist.add(G__33367,G__33368);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__33371 = shadow.dom.dom_node(el);
var G__33372 = cls;
return goog.dom.classlist.remove(G__33371,G__33372);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33379 = arguments.length;
switch (G__33379) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__33387 = shadow.dom.dom_node(el);
var G__33388 = cls;
return goog.dom.classlist.toggle(G__33387,G__33388);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33404){if((e33404 instanceof Object)){
var e = e33404;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33404;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33414 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33415 = null;
var count__33416 = (0);
var i__33417 = (0);
while(true){
if((i__33417 < count__33416)){
var el = chunk__33415.cljs$core$IIndexed$_nth$arity$2(null,i__33417);
var handler_34687__$1 = ((function (seq__33414,chunk__33415,count__33416,i__33417,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33414,chunk__33415,count__33416,i__33417,el))
;
var G__33436_34689 = el;
var G__33437_34690 = cljs.core.name(ev);
var G__33438_34691 = handler_34687__$1;
shadow.dom.dom_listen(G__33436_34689,G__33437_34690,G__33438_34691);


var G__34692 = seq__33414;
var G__34693 = chunk__33415;
var G__34694 = count__33416;
var G__34695 = (i__33417 + (1));
seq__33414 = G__34692;
chunk__33415 = G__34693;
count__33416 = G__34694;
i__33417 = G__34695;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33414);
if(temp__5735__auto__){
var seq__33414__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33414__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33414__$1);
var G__34696 = cljs.core.chunk_rest(seq__33414__$1);
var G__34697 = c__4609__auto__;
var G__34698 = cljs.core.count(c__4609__auto__);
var G__34699 = (0);
seq__33414 = G__34696;
chunk__33415 = G__34697;
count__33416 = G__34698;
i__33417 = G__34699;
continue;
} else {
var el = cljs.core.first(seq__33414__$1);
var handler_34701__$1 = ((function (seq__33414,chunk__33415,count__33416,i__33417,el,seq__33414__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33414,chunk__33415,count__33416,i__33417,el,seq__33414__$1,temp__5735__auto__))
;
var G__33455_34704 = el;
var G__33456_34705 = cljs.core.name(ev);
var G__33457_34706 = handler_34701__$1;
shadow.dom.dom_listen(G__33455_34704,G__33456_34705,G__33457_34706);


var G__34707 = cljs.core.next(seq__33414__$1);
var G__34708 = null;
var G__34709 = (0);
var G__34710 = (0);
seq__33414 = G__34707;
chunk__33415 = G__34708;
count__33416 = G__34709;
i__33417 = G__34710;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33463 = arguments.length;
switch (G__33463) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__33470 = shadow.dom.dom_node(el);
var G__33471 = cljs.core.name(ev);
var G__33472 = handler__$1;
return shadow.dom.dom_listen(G__33470,G__33471,G__33472);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__33478 = shadow.dom.dom_node(el);
var G__33479 = cljs.core.name(ev);
var G__33480 = handler;
return shadow.dom.dom_listen_remove(G__33478,G__33479,G__33480);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33484 = cljs.core.seq(events);
var chunk__33485 = null;
var count__33486 = (0);
var i__33487 = (0);
while(true){
if((i__33487 < count__33486)){
var vec__33501 = chunk__33485.cljs$core$IIndexed$_nth$arity$2(null,i__33487);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33501,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33501,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34729 = seq__33484;
var G__34730 = chunk__33485;
var G__34731 = count__33486;
var G__34732 = (i__33487 + (1));
seq__33484 = G__34729;
chunk__33485 = G__34730;
count__33486 = G__34731;
i__33487 = G__34732;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33484);
if(temp__5735__auto__){
var seq__33484__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33484__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33484__$1);
var G__34735 = cljs.core.chunk_rest(seq__33484__$1);
var G__34736 = c__4609__auto__;
var G__34737 = cljs.core.count(c__4609__auto__);
var G__34738 = (0);
seq__33484 = G__34735;
chunk__33485 = G__34736;
count__33486 = G__34737;
i__33487 = G__34738;
continue;
} else {
var vec__33511 = cljs.core.first(seq__33484__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33511,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33511,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34741 = cljs.core.next(seq__33484__$1);
var G__34742 = null;
var G__34743 = (0);
var G__34744 = (0);
seq__33484 = G__34741;
chunk__33485 = G__34742;
count__33486 = G__34743;
i__33487 = G__34744;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33523 = cljs.core.seq(styles);
var chunk__33524 = null;
var count__33525 = (0);
var i__33526 = (0);
while(true){
if((i__33526 < count__33525)){
var vec__33549 = chunk__33524.cljs$core$IIndexed$_nth$arity$2(null,i__33526);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33549,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33549,(1),null);
var G__33552_34745 = dom;
var G__33553_34746 = cljs.core.name(k);
var G__33554_34747 = (((v == null))?"":v);
goog.style.setStyle(G__33552_34745,G__33553_34746,G__33554_34747);


var G__34749 = seq__33523;
var G__34750 = chunk__33524;
var G__34751 = count__33525;
var G__34752 = (i__33526 + (1));
seq__33523 = G__34749;
chunk__33524 = G__34750;
count__33525 = G__34751;
i__33526 = G__34752;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33523);
if(temp__5735__auto__){
var seq__33523__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33523__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33523__$1);
var G__34754 = cljs.core.chunk_rest(seq__33523__$1);
var G__34755 = c__4609__auto__;
var G__34756 = cljs.core.count(c__4609__auto__);
var G__34757 = (0);
seq__33523 = G__34754;
chunk__33524 = G__34755;
count__33525 = G__34756;
i__33526 = G__34757;
continue;
} else {
var vec__33558 = cljs.core.first(seq__33523__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33558,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33558,(1),null);
var G__33561_34761 = dom;
var G__33562_34762 = cljs.core.name(k);
var G__33563_34763 = (((v == null))?"":v);
goog.style.setStyle(G__33561_34761,G__33562_34762,G__33563_34763);


var G__34765 = cljs.core.next(seq__33523__$1);
var G__34766 = null;
var G__34767 = (0);
var G__34768 = (0);
seq__33523 = G__34765;
chunk__33524 = G__34766;
count__33525 = G__34767;
i__33526 = G__34768;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33567_34773 = key;
var G__33567_34774__$1 = (((G__33567_34773 instanceof cljs.core.Keyword))?G__33567_34773.fqn:null);
switch (G__33567_34774__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34782 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_34782,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_34782,"aria-");
}
})())){
el.setAttribute(ks_34782,value);
} else {
(el[ks_34782] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__33587 = shadow.dom.dom_node(el);
var G__33588 = cls;
return goog.dom.classlist.contains(G__33587,G__33588);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33602){
var map__33603 = p__33602;
var map__33603__$1 = (((((!((map__33603 == null))))?(((((map__33603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33603):map__33603);
var props = map__33603__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33603__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33605 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33605,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33605,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33605,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33609 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33609,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33609;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33612 = arguments.length;
switch (G__33612) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33628){
var vec__33630 = p__33628;
var seq__33631 = cljs.core.seq(vec__33630);
var first__33632 = cljs.core.first(seq__33631);
var seq__33631__$1 = cljs.core.next(seq__33631);
var nn = first__33632;
var first__33632__$1 = cljs.core.first(seq__33631__$1);
var seq__33631__$2 = cljs.core.next(seq__33631__$1);
var np = first__33632__$1;
var nc = seq__33631__$2;
var node = vec__33630;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33642 = nn;
var G__33643 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33642,G__33643) : create_fn.call(null,G__33642,G__33643));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33644 = nn;
var G__33645 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33644,G__33645) : create_fn.call(null,G__33644,G__33645));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33652 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33652,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33652,(1),null);
var seq__33655_34850 = cljs.core.seq(node_children);
var chunk__33656_34851 = null;
var count__33657_34852 = (0);
var i__33658_34853 = (0);
while(true){
if((i__33658_34853 < count__33657_34852)){
var child_struct_34854 = chunk__33656_34851.cljs$core$IIndexed$_nth$arity$2(null,i__33658_34853);
var children_34855 = shadow.dom.dom_node(child_struct_34854);
if(cljs.core.seq_QMARK_(children_34855)){
var seq__33710_34856 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34855));
var chunk__33712_34857 = null;
var count__33713_34858 = (0);
var i__33714_34859 = (0);
while(true){
if((i__33714_34859 < count__33713_34858)){
var child_34860 = chunk__33712_34857.cljs$core$IIndexed$_nth$arity$2(null,i__33714_34859);
if(cljs.core.truth_(child_34860)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34860);


var G__34861 = seq__33710_34856;
var G__34862 = chunk__33712_34857;
var G__34863 = count__33713_34858;
var G__34864 = (i__33714_34859 + (1));
seq__33710_34856 = G__34861;
chunk__33712_34857 = G__34862;
count__33713_34858 = G__34863;
i__33714_34859 = G__34864;
continue;
} else {
var G__34866 = seq__33710_34856;
var G__34867 = chunk__33712_34857;
var G__34868 = count__33713_34858;
var G__34869 = (i__33714_34859 + (1));
seq__33710_34856 = G__34866;
chunk__33712_34857 = G__34867;
count__33713_34858 = G__34868;
i__33714_34859 = G__34869;
continue;
}
} else {
var temp__5735__auto___34870 = cljs.core.seq(seq__33710_34856);
if(temp__5735__auto___34870){
var seq__33710_34872__$1 = temp__5735__auto___34870;
if(cljs.core.chunked_seq_QMARK_(seq__33710_34872__$1)){
var c__4609__auto___34873 = cljs.core.chunk_first(seq__33710_34872__$1);
var G__34875 = cljs.core.chunk_rest(seq__33710_34872__$1);
var G__34876 = c__4609__auto___34873;
var G__34877 = cljs.core.count(c__4609__auto___34873);
var G__34878 = (0);
seq__33710_34856 = G__34875;
chunk__33712_34857 = G__34876;
count__33713_34858 = G__34877;
i__33714_34859 = G__34878;
continue;
} else {
var child_34879 = cljs.core.first(seq__33710_34872__$1);
if(cljs.core.truth_(child_34879)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34879);


var G__34880 = cljs.core.next(seq__33710_34872__$1);
var G__34881 = null;
var G__34882 = (0);
var G__34883 = (0);
seq__33710_34856 = G__34880;
chunk__33712_34857 = G__34881;
count__33713_34858 = G__34882;
i__33714_34859 = G__34883;
continue;
} else {
var G__34884 = cljs.core.next(seq__33710_34872__$1);
var G__34885 = null;
var G__34886 = (0);
var G__34887 = (0);
seq__33710_34856 = G__34884;
chunk__33712_34857 = G__34885;
count__33713_34858 = G__34886;
i__33714_34859 = G__34887;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34855);
}


var G__34888 = seq__33655_34850;
var G__34889 = chunk__33656_34851;
var G__34890 = count__33657_34852;
var G__34891 = (i__33658_34853 + (1));
seq__33655_34850 = G__34888;
chunk__33656_34851 = G__34889;
count__33657_34852 = G__34890;
i__33658_34853 = G__34891;
continue;
} else {
var temp__5735__auto___34892 = cljs.core.seq(seq__33655_34850);
if(temp__5735__auto___34892){
var seq__33655_34893__$1 = temp__5735__auto___34892;
if(cljs.core.chunked_seq_QMARK_(seq__33655_34893__$1)){
var c__4609__auto___34894 = cljs.core.chunk_first(seq__33655_34893__$1);
var G__34895 = cljs.core.chunk_rest(seq__33655_34893__$1);
var G__34896 = c__4609__auto___34894;
var G__34897 = cljs.core.count(c__4609__auto___34894);
var G__34898 = (0);
seq__33655_34850 = G__34895;
chunk__33656_34851 = G__34896;
count__33657_34852 = G__34897;
i__33658_34853 = G__34898;
continue;
} else {
var child_struct_34899 = cljs.core.first(seq__33655_34893__$1);
var children_34900 = shadow.dom.dom_node(child_struct_34899);
if(cljs.core.seq_QMARK_(children_34900)){
var seq__33740_34901 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34900));
var chunk__33742_34902 = null;
var count__33743_34903 = (0);
var i__33744_34904 = (0);
while(true){
if((i__33744_34904 < count__33743_34903)){
var child_34906 = chunk__33742_34902.cljs$core$IIndexed$_nth$arity$2(null,i__33744_34904);
if(cljs.core.truth_(child_34906)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34906);


var G__34911 = seq__33740_34901;
var G__34912 = chunk__33742_34902;
var G__34913 = count__33743_34903;
var G__34914 = (i__33744_34904 + (1));
seq__33740_34901 = G__34911;
chunk__33742_34902 = G__34912;
count__33743_34903 = G__34913;
i__33744_34904 = G__34914;
continue;
} else {
var G__34915 = seq__33740_34901;
var G__34916 = chunk__33742_34902;
var G__34917 = count__33743_34903;
var G__34918 = (i__33744_34904 + (1));
seq__33740_34901 = G__34915;
chunk__33742_34902 = G__34916;
count__33743_34903 = G__34917;
i__33744_34904 = G__34918;
continue;
}
} else {
var temp__5735__auto___34920__$1 = cljs.core.seq(seq__33740_34901);
if(temp__5735__auto___34920__$1){
var seq__33740_34921__$1 = temp__5735__auto___34920__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33740_34921__$1)){
var c__4609__auto___34922 = cljs.core.chunk_first(seq__33740_34921__$1);
var G__34923 = cljs.core.chunk_rest(seq__33740_34921__$1);
var G__34924 = c__4609__auto___34922;
var G__34925 = cljs.core.count(c__4609__auto___34922);
var G__34926 = (0);
seq__33740_34901 = G__34923;
chunk__33742_34902 = G__34924;
count__33743_34903 = G__34925;
i__33744_34904 = G__34926;
continue;
} else {
var child_34927 = cljs.core.first(seq__33740_34921__$1);
if(cljs.core.truth_(child_34927)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34927);


var G__34928 = cljs.core.next(seq__33740_34921__$1);
var G__34929 = null;
var G__34930 = (0);
var G__34931 = (0);
seq__33740_34901 = G__34928;
chunk__33742_34902 = G__34929;
count__33743_34903 = G__34930;
i__33744_34904 = G__34931;
continue;
} else {
var G__34932 = cljs.core.next(seq__33740_34921__$1);
var G__34933 = null;
var G__34934 = (0);
var G__34935 = (0);
seq__33740_34901 = G__34932;
chunk__33742_34902 = G__34933;
count__33743_34903 = G__34934;
i__33744_34904 = G__34935;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34900);
}


var G__34937 = cljs.core.next(seq__33655_34893__$1);
var G__34938 = null;
var G__34939 = (0);
var G__34940 = (0);
seq__33655_34850 = G__34937;
chunk__33656_34851 = G__34938;
count__33657_34852 = G__34939;
i__33658_34853 = G__34940;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__33784 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__33784);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33793 = cljs.core.seq(node);
var chunk__33794 = null;
var count__33795 = (0);
var i__33796 = (0);
while(true){
if((i__33796 < count__33795)){
var n = chunk__33794.cljs$core$IIndexed$_nth$arity$2(null,i__33796);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34952 = seq__33793;
var G__34953 = chunk__33794;
var G__34954 = count__33795;
var G__34955 = (i__33796 + (1));
seq__33793 = G__34952;
chunk__33794 = G__34953;
count__33795 = G__34954;
i__33796 = G__34955;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33793);
if(temp__5735__auto__){
var seq__33793__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33793__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33793__$1);
var G__34957 = cljs.core.chunk_rest(seq__33793__$1);
var G__34958 = c__4609__auto__;
var G__34959 = cljs.core.count(c__4609__auto__);
var G__34960 = (0);
seq__33793 = G__34957;
chunk__33794 = G__34958;
count__33795 = G__34959;
i__33796 = G__34960;
continue;
} else {
var n = cljs.core.first(seq__33793__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34964 = cljs.core.next(seq__33793__$1);
var G__34965 = null;
var G__34966 = (0);
var G__34967 = (0);
seq__33793 = G__34964;
chunk__33794 = G__34965;
count__33795 = G__34966;
i__33796 = G__34967;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__33828 = shadow.dom.dom_node(new$);
var G__33829 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__33828,G__33829);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33835 = arguments.length;
switch (G__33835) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33844 = arguments.length;
switch (G__33844) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33862 = arguments.length;
switch (G__33862) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34982 = arguments.length;
var i__4790__auto___34983 = (0);
while(true){
if((i__4790__auto___34983 < len__4789__auto___34982)){
args__4795__auto__.push((arguments[i__4790__auto___34983]));

var G__34985 = (i__4790__auto___34983 + (1));
i__4790__auto___34983 = G__34985;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33902_34992 = cljs.core.seq(nodes);
var chunk__33903_34993 = null;
var count__33904_34994 = (0);
var i__33905_34995 = (0);
while(true){
if((i__33905_34995 < count__33904_34994)){
var node_34996 = chunk__33903_34993.cljs$core$IIndexed$_nth$arity$2(null,i__33905_34995);
fragment.appendChild(shadow.dom._to_dom(node_34996));


var G__34997 = seq__33902_34992;
var G__34998 = chunk__33903_34993;
var G__34999 = count__33904_34994;
var G__35000 = (i__33905_34995 + (1));
seq__33902_34992 = G__34997;
chunk__33903_34993 = G__34998;
count__33904_34994 = G__34999;
i__33905_34995 = G__35000;
continue;
} else {
var temp__5735__auto___35003 = cljs.core.seq(seq__33902_34992);
if(temp__5735__auto___35003){
var seq__33902_35004__$1 = temp__5735__auto___35003;
if(cljs.core.chunked_seq_QMARK_(seq__33902_35004__$1)){
var c__4609__auto___35007 = cljs.core.chunk_first(seq__33902_35004__$1);
var G__35008 = cljs.core.chunk_rest(seq__33902_35004__$1);
var G__35009 = c__4609__auto___35007;
var G__35010 = cljs.core.count(c__4609__auto___35007);
var G__35011 = (0);
seq__33902_34992 = G__35008;
chunk__33903_34993 = G__35009;
count__33904_34994 = G__35010;
i__33905_34995 = G__35011;
continue;
} else {
var node_35016 = cljs.core.first(seq__33902_35004__$1);
fragment.appendChild(shadow.dom._to_dom(node_35016));


var G__35017 = cljs.core.next(seq__33902_35004__$1);
var G__35018 = null;
var G__35019 = (0);
var G__35020 = (0);
seq__33902_34992 = G__35017;
chunk__33903_34993 = G__35018;
count__33904_34994 = G__35019;
i__33905_34995 = G__35020;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33892){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33892));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33929_35023 = cljs.core.seq(scripts);
var chunk__33930_35024 = null;
var count__33931_35025 = (0);
var i__33932_35026 = (0);
while(true){
if((i__33932_35026 < count__33931_35025)){
var vec__33951_35030 = chunk__33930_35024.cljs$core$IIndexed$_nth$arity$2(null,i__33932_35026);
var script_tag_35031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33951_35030,(0),null);
var script_body_35032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33951_35030,(1),null);
eval(script_body_35032);


var G__35034 = seq__33929_35023;
var G__35035 = chunk__33930_35024;
var G__35036 = count__33931_35025;
var G__35037 = (i__33932_35026 + (1));
seq__33929_35023 = G__35034;
chunk__33930_35024 = G__35035;
count__33931_35025 = G__35036;
i__33932_35026 = G__35037;
continue;
} else {
var temp__5735__auto___35038 = cljs.core.seq(seq__33929_35023);
if(temp__5735__auto___35038){
var seq__33929_35039__$1 = temp__5735__auto___35038;
if(cljs.core.chunked_seq_QMARK_(seq__33929_35039__$1)){
var c__4609__auto___35040 = cljs.core.chunk_first(seq__33929_35039__$1);
var G__35041 = cljs.core.chunk_rest(seq__33929_35039__$1);
var G__35042 = c__4609__auto___35040;
var G__35043 = cljs.core.count(c__4609__auto___35040);
var G__35044 = (0);
seq__33929_35023 = G__35041;
chunk__33930_35024 = G__35042;
count__33931_35025 = G__35043;
i__33932_35026 = G__35044;
continue;
} else {
var vec__33963_35045 = cljs.core.first(seq__33929_35039__$1);
var script_tag_35046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33963_35045,(0),null);
var script_body_35047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33963_35045,(1),null);
eval(script_body_35047);


var G__35051 = cljs.core.next(seq__33929_35039__$1);
var G__35052 = null;
var G__35053 = (0);
var G__35054 = (0);
seq__33929_35023 = G__35051;
chunk__33930_35024 = G__35052;
count__33931_35025 = G__35053;
i__33932_35026 = G__35054;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33969){
var vec__33971 = p__33969;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33971,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33971,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__33993 = shadow.dom.dom_node(el);
var G__33994 = cls;
return goog.dom.getAncestorByClass(G__33993,G__33994);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34005 = arguments.length;
switch (G__34005) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__34014 = shadow.dom.dom_node(el);
var G__34015 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__34014,G__34015);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__34024 = shadow.dom.dom_node(el);
var G__34025 = cljs.core.name(tag);
var G__34026 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__34024,G__34025,G__34026);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__34032 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__34032);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__34039 = shadow.dom.dom_node(dom);
var G__34040 = value;
return goog.dom.forms.setValue(G__34039,G__34040);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34074 = cljs.core.seq(style_keys);
var chunk__34075 = null;
var count__34076 = (0);
var i__34078 = (0);
while(true){
if((i__34078 < count__34076)){
var it = chunk__34075.cljs$core$IIndexed$_nth$arity$2(null,i__34078);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35069 = seq__34074;
var G__35070 = chunk__34075;
var G__35071 = count__34076;
var G__35072 = (i__34078 + (1));
seq__34074 = G__35069;
chunk__34075 = G__35070;
count__34076 = G__35071;
i__34078 = G__35072;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34074);
if(temp__5735__auto__){
var seq__34074__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34074__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34074__$1);
var G__35073 = cljs.core.chunk_rest(seq__34074__$1);
var G__35074 = c__4609__auto__;
var G__35075 = cljs.core.count(c__4609__auto__);
var G__35076 = (0);
seq__34074 = G__35073;
chunk__34075 = G__35074;
count__34076 = G__35075;
i__34078 = G__35076;
continue;
} else {
var it = cljs.core.first(seq__34074__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35077 = cljs.core.next(seq__34074__$1);
var G__35078 = null;
var G__35079 = (0);
var G__35080 = (0);
seq__34074 = G__35077;
chunk__34075 = G__35078;
count__34076 = G__35079;
i__34078 = G__35080;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k34097,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__34116 = k34097;
var G__34116__$1 = (((G__34116 instanceof cljs.core.Keyword))?G__34116.fqn:null);
switch (G__34116__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34097,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__34120){
var vec__34121 = p__34120;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34121,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34121,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34096){
var self__ = this;
var G__34096__$1 = this;
return (new cljs.core.RecordIter((0),G__34096__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__34126 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__34126(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34098,other34099){
var self__ = this;
var this34098__$1 = this;
return (((!((other34099 == null)))) && ((this34098__$1.constructor === other34099.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34098__$1.x,other34099.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34098__$1.y,other34099.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34098__$1.__extmap,other34099.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__34096){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__34134 = cljs.core.keyword_identical_QMARK_;
var expr__34135 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__34138 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__34139 = expr__34135;
return (pred__34134.cljs$core$IFn$_invoke$arity$2 ? pred__34134.cljs$core$IFn$_invoke$arity$2(G__34138,G__34139) : pred__34134.call(null,G__34138,G__34139));
})())){
return (new shadow.dom.Coordinate(G__34096,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34140 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__34141 = expr__34135;
return (pred__34134.cljs$core$IFn$_invoke$arity$2 ? pred__34134.cljs$core$IFn$_invoke$arity$2(G__34140,G__34141) : pred__34134.call(null,G__34140,G__34141));
})())){
return (new shadow.dom.Coordinate(self__.x,G__34096,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__34096),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__34096){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34096,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34106){
var extmap__4478__auto__ = (function (){var G__34174 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34106,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34106)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34174);
} else {
return G__34174;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34106),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34106),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__34185 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__34185);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__34190 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__34190);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__34192 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__34192);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k34195,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__34208 = k34195;
var G__34208__$1 = (((G__34208 instanceof cljs.core.Keyword))?G__34208.fqn:null);
switch (G__34208__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34195,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__34217){
var vec__34220 = p__34217;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34220,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34220,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34194){
var self__ = this;
var G__34194__$1 = this;
return (new cljs.core.RecordIter((0),G__34194__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__34243 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__34243(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34196,other34197){
var self__ = this;
var this34196__$1 = this;
return (((!((other34197 == null)))) && ((this34196__$1.constructor === other34197.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34196__$1.w,other34197.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34196__$1.h,other34197.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34196__$1.__extmap,other34197.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__34194){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__34253 = cljs.core.keyword_identical_QMARK_;
var expr__34254 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__34256 = new cljs.core.Keyword(null,"w","w",354169001);
var G__34257 = expr__34254;
return (pred__34253.cljs$core$IFn$_invoke$arity$2 ? pred__34253.cljs$core$IFn$_invoke$arity$2(G__34256,G__34257) : pred__34253.call(null,G__34256,G__34257));
})())){
return (new shadow.dom.Size(G__34194,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34258 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__34259 = expr__34254;
return (pred__34253.cljs$core$IFn$_invoke$arity$2 ? pred__34253.cljs$core$IFn$_invoke$arity$2(G__34258,G__34259) : pred__34253.call(null,G__34258,G__34259));
})())){
return (new shadow.dom.Size(self__.w,G__34194,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__34194),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__34194){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34194,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34199){
var extmap__4478__auto__ = (function (){var G__34285 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34199,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34199)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34285);
} else {
return G__34285;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34199),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34199),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__34301 = shadow.dom.dom_node(el);
return goog.style.getSize(G__34301);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__35173 = (i + (1));
var G__35174 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35173;
ret = G__35174;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34323){
var vec__34325 = p__34323;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34325,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34325,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34332 = arguments.length;
switch (G__34332) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__34349_35178 = new_node;
var G__34350_35179 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__34349_35178,G__34350_35179);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__34367_35180 = new_node;
var G__34368_35181 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__34367_35180,G__34368_35181);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35183 = ps;
var G__35184 = (i + (1));
el__$1 = G__35183;
i = G__35184;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__34374 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__34374);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__34387 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__34387);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__34398 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__34398);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34408 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34408,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34408,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34408,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34413_35185 = cljs.core.seq(props);
var chunk__34414_35186 = null;
var count__34415_35187 = (0);
var i__34416_35188 = (0);
while(true){
if((i__34416_35188 < count__34415_35187)){
var vec__34447_35190 = chunk__34414_35186.cljs$core$IIndexed$_nth$arity$2(null,i__34416_35188);
var k_35191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34447_35190,(0),null);
var v_35192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34447_35190,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_35191);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35191),v_35192);


var G__35194 = seq__34413_35185;
var G__35195 = chunk__34414_35186;
var G__35196 = count__34415_35187;
var G__35197 = (i__34416_35188 + (1));
seq__34413_35185 = G__35194;
chunk__34414_35186 = G__35195;
count__34415_35187 = G__35196;
i__34416_35188 = G__35197;
continue;
} else {
var temp__5735__auto___35198 = cljs.core.seq(seq__34413_35185);
if(temp__5735__auto___35198){
var seq__34413_35199__$1 = temp__5735__auto___35198;
if(cljs.core.chunked_seq_QMARK_(seq__34413_35199__$1)){
var c__4609__auto___35200 = cljs.core.chunk_first(seq__34413_35199__$1);
var G__35201 = cljs.core.chunk_rest(seq__34413_35199__$1);
var G__35202 = c__4609__auto___35200;
var G__35203 = cljs.core.count(c__4609__auto___35200);
var G__35204 = (0);
seq__34413_35185 = G__35201;
chunk__34414_35186 = G__35202;
count__34415_35187 = G__35203;
i__34416_35188 = G__35204;
continue;
} else {
var vec__34471_35205 = cljs.core.first(seq__34413_35199__$1);
var k_35206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34471_35205,(0),null);
var v_35207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34471_35205,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_35206);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35206),v_35207);


var G__35209 = cljs.core.next(seq__34413_35199__$1);
var G__35210 = null;
var G__35211 = (0);
var G__35212 = (0);
seq__34413_35185 = G__35209;
chunk__34414_35186 = G__35210;
count__34415_35187 = G__35211;
i__34416_35188 = G__35212;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34494 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34494,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34494,(1),null);
var seq__34497_35217 = cljs.core.seq(node_children);
var chunk__34499_35218 = null;
var count__34500_35219 = (0);
var i__34501_35220 = (0);
while(true){
if((i__34501_35220 < count__34500_35219)){
var child_struct_35221 = chunk__34499_35218.cljs$core$IIndexed$_nth$arity$2(null,i__34501_35220);
if((!((child_struct_35221 == null)))){
if(typeof child_struct_35221 === 'string'){
var text_35223 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35223),child_struct_35221].join(''));
} else {
var children_35226 = shadow.dom.svg_node(child_struct_35221);
if(cljs.core.seq_QMARK_(children_35226)){
var seq__34547_35227 = cljs.core.seq(children_35226);
var chunk__34549_35228 = null;
var count__34550_35229 = (0);
var i__34551_35230 = (0);
while(true){
if((i__34551_35230 < count__34550_35229)){
var child_35231 = chunk__34549_35228.cljs$core$IIndexed$_nth$arity$2(null,i__34551_35230);
if(cljs.core.truth_(child_35231)){
node.appendChild(child_35231);


var G__35232 = seq__34547_35227;
var G__35233 = chunk__34549_35228;
var G__35234 = count__34550_35229;
var G__35235 = (i__34551_35230 + (1));
seq__34547_35227 = G__35232;
chunk__34549_35228 = G__35233;
count__34550_35229 = G__35234;
i__34551_35230 = G__35235;
continue;
} else {
var G__35236 = seq__34547_35227;
var G__35237 = chunk__34549_35228;
var G__35238 = count__34550_35229;
var G__35239 = (i__34551_35230 + (1));
seq__34547_35227 = G__35236;
chunk__34549_35228 = G__35237;
count__34550_35229 = G__35238;
i__34551_35230 = G__35239;
continue;
}
} else {
var temp__5735__auto___35240 = cljs.core.seq(seq__34547_35227);
if(temp__5735__auto___35240){
var seq__34547_35241__$1 = temp__5735__auto___35240;
if(cljs.core.chunked_seq_QMARK_(seq__34547_35241__$1)){
var c__4609__auto___35242 = cljs.core.chunk_first(seq__34547_35241__$1);
var G__35243 = cljs.core.chunk_rest(seq__34547_35241__$1);
var G__35244 = c__4609__auto___35242;
var G__35245 = cljs.core.count(c__4609__auto___35242);
var G__35246 = (0);
seq__34547_35227 = G__35243;
chunk__34549_35228 = G__35244;
count__34550_35229 = G__35245;
i__34551_35230 = G__35246;
continue;
} else {
var child_35247 = cljs.core.first(seq__34547_35241__$1);
if(cljs.core.truth_(child_35247)){
node.appendChild(child_35247);


var G__35249 = cljs.core.next(seq__34547_35241__$1);
var G__35250 = null;
var G__35251 = (0);
var G__35252 = (0);
seq__34547_35227 = G__35249;
chunk__34549_35228 = G__35250;
count__34550_35229 = G__35251;
i__34551_35230 = G__35252;
continue;
} else {
var G__35253 = cljs.core.next(seq__34547_35241__$1);
var G__35254 = null;
var G__35255 = (0);
var G__35256 = (0);
seq__34547_35227 = G__35253;
chunk__34549_35228 = G__35254;
count__34550_35229 = G__35255;
i__34551_35230 = G__35256;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35226);
}
}


var G__35257 = seq__34497_35217;
var G__35258 = chunk__34499_35218;
var G__35259 = count__34500_35219;
var G__35260 = (i__34501_35220 + (1));
seq__34497_35217 = G__35257;
chunk__34499_35218 = G__35258;
count__34500_35219 = G__35259;
i__34501_35220 = G__35260;
continue;
} else {
var G__35262 = seq__34497_35217;
var G__35263 = chunk__34499_35218;
var G__35264 = count__34500_35219;
var G__35265 = (i__34501_35220 + (1));
seq__34497_35217 = G__35262;
chunk__34499_35218 = G__35263;
count__34500_35219 = G__35264;
i__34501_35220 = G__35265;
continue;
}
} else {
var temp__5735__auto___35269 = cljs.core.seq(seq__34497_35217);
if(temp__5735__auto___35269){
var seq__34497_35270__$1 = temp__5735__auto___35269;
if(cljs.core.chunked_seq_QMARK_(seq__34497_35270__$1)){
var c__4609__auto___35271 = cljs.core.chunk_first(seq__34497_35270__$1);
var G__35272 = cljs.core.chunk_rest(seq__34497_35270__$1);
var G__35273 = c__4609__auto___35271;
var G__35274 = cljs.core.count(c__4609__auto___35271);
var G__35275 = (0);
seq__34497_35217 = G__35272;
chunk__34499_35218 = G__35273;
count__34500_35219 = G__35274;
i__34501_35220 = G__35275;
continue;
} else {
var child_struct_35276 = cljs.core.first(seq__34497_35270__$1);
if((!((child_struct_35276 == null)))){
if(typeof child_struct_35276 === 'string'){
var text_35277 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35277),child_struct_35276].join(''));
} else {
var children_35278 = shadow.dom.svg_node(child_struct_35276);
if(cljs.core.seq_QMARK_(children_35278)){
var seq__34564_35279 = cljs.core.seq(children_35278);
var chunk__34566_35280 = null;
var count__34567_35281 = (0);
var i__34568_35282 = (0);
while(true){
if((i__34568_35282 < count__34567_35281)){
var child_35283 = chunk__34566_35280.cljs$core$IIndexed$_nth$arity$2(null,i__34568_35282);
if(cljs.core.truth_(child_35283)){
node.appendChild(child_35283);


var G__35284 = seq__34564_35279;
var G__35285 = chunk__34566_35280;
var G__35286 = count__34567_35281;
var G__35287 = (i__34568_35282 + (1));
seq__34564_35279 = G__35284;
chunk__34566_35280 = G__35285;
count__34567_35281 = G__35286;
i__34568_35282 = G__35287;
continue;
} else {
var G__35288 = seq__34564_35279;
var G__35289 = chunk__34566_35280;
var G__35290 = count__34567_35281;
var G__35291 = (i__34568_35282 + (1));
seq__34564_35279 = G__35288;
chunk__34566_35280 = G__35289;
count__34567_35281 = G__35290;
i__34568_35282 = G__35291;
continue;
}
} else {
var temp__5735__auto___35292__$1 = cljs.core.seq(seq__34564_35279);
if(temp__5735__auto___35292__$1){
var seq__34564_35293__$1 = temp__5735__auto___35292__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34564_35293__$1)){
var c__4609__auto___35294 = cljs.core.chunk_first(seq__34564_35293__$1);
var G__35295 = cljs.core.chunk_rest(seq__34564_35293__$1);
var G__35296 = c__4609__auto___35294;
var G__35297 = cljs.core.count(c__4609__auto___35294);
var G__35298 = (0);
seq__34564_35279 = G__35295;
chunk__34566_35280 = G__35296;
count__34567_35281 = G__35297;
i__34568_35282 = G__35298;
continue;
} else {
var child_35299 = cljs.core.first(seq__34564_35293__$1);
if(cljs.core.truth_(child_35299)){
node.appendChild(child_35299);


var G__35300 = cljs.core.next(seq__34564_35293__$1);
var G__35301 = null;
var G__35302 = (0);
var G__35303 = (0);
seq__34564_35279 = G__35300;
chunk__34566_35280 = G__35301;
count__34567_35281 = G__35302;
i__34568_35282 = G__35303;
continue;
} else {
var G__35305 = cljs.core.next(seq__34564_35293__$1);
var G__35306 = null;
var G__35307 = (0);
var G__35308 = (0);
seq__34564_35279 = G__35305;
chunk__34566_35280 = G__35306;
count__34567_35281 = G__35307;
i__34568_35282 = G__35308;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35278);
}
}


var G__35309 = cljs.core.next(seq__34497_35270__$1);
var G__35310 = null;
var G__35311 = (0);
var G__35312 = (0);
seq__34497_35217 = G__35309;
chunk__34499_35218 = G__35310;
count__34500_35219 = G__35311;
i__34501_35220 = G__35312;
continue;
} else {
var G__35313 = cljs.core.next(seq__34497_35270__$1);
var G__35314 = null;
var G__35315 = (0);
var G__35316 = (0);
seq__34497_35217 = G__35313;
chunk__34499_35218 = G__35314;
count__34500_35219 = G__35315;
i__34501_35220 = G__35316;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__34577_35317 = shadow.dom._to_svg;
var G__34578_35318 = "string";
var G__34579_35319 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__34577_35317,G__34578_35318,G__34579_35319);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__34584_35329 = shadow.dom._to_svg;
var G__34585_35330 = "null";
var G__34586_35331 = (function (_){
return null;
});
goog.object.set(G__34584_35329,G__34585_35330,G__34586_35331);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35334 = arguments.length;
var i__4790__auto___35335 = (0);
while(true){
if((i__4790__auto___35335 < len__4789__auto___35334)){
args__4795__auto__.push((arguments[i__4790__auto___35335]));

var G__35336 = (i__4790__auto___35335 + (1));
i__4790__auto___35335 = G__35336;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34587){
var G__34588 = cljs.core.first(seq34587);
var seq34587__$1 = cljs.core.next(seq34587);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34588,seq34587__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34598 = arguments.length;
switch (G__34598) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__34609_35341 = shadow.dom.dom_node(el);
var G__34610_35342 = cljs.core.name(event);
var G__34611_35343 = event_fn;
shadow.dom.dom_listen(G__34609_35341,G__34610_35342,G__34611_35343);

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__29839__auto___35345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29840__auto__ = (function (){var switch__29434__auto__ = (function (state_34619){
var state_val_34620 = (state_34619[(1)]);
if((state_val_34620 === (1))){
var state_34619__$1 = state_34619;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34619__$1,(2),once_or_cleanup);
} else {
if((state_val_34620 === (2))){
var inst_34616 = (state_34619[(2)]);
var inst_34617 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34619__$1 = (function (){var statearr_34623 = state_34619;
(statearr_34623[(7)] = inst_34616);

return statearr_34623;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34619__$1,inst_34617);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29435__auto__ = null;
var shadow$dom$state_machine__29435__auto____0 = (function (){
var statearr_34628 = [null,null,null,null,null,null,null,null];
(statearr_34628[(0)] = shadow$dom$state_machine__29435__auto__);

(statearr_34628[(1)] = (1));

return statearr_34628;
});
var shadow$dom$state_machine__29435__auto____1 = (function (state_34619){
while(true){
var ret_value__29436__auto__ = (function (){try{while(true){
var result__29437__auto__ = switch__29434__auto__(state_34619);
if(cljs.core.keyword_identical_QMARK_(result__29437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29437__auto__;
}
break;
}
}catch (e34630){if((e34630 instanceof Object)){
var ex__29438__auto__ = e34630;
var statearr_34631_35348 = state_34619;
(statearr_34631_35348[(5)] = ex__29438__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34630;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35349 = state_34619;
state_34619 = G__35349;
continue;
} else {
return ret_value__29436__auto__;
}
break;
}
});
shadow$dom$state_machine__29435__auto__ = function(state_34619){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29435__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29435__auto____1.call(this,state_34619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29435__auto____0;
shadow$dom$state_machine__29435__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29435__auto____1;
return shadow$dom$state_machine__29435__auto__;
})()
})();
var state__29842__auto__ = (function (){var statearr_34633 = f__29840__auto__();
(statearr_34633[(6)] = c__29839__auto___35345);

return statearr_34633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29842__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
