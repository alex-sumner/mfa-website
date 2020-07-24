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
return cljs.core.cons((coll[idx]),(function (){var G__33389 = coll;
var G__33390 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33389,G__33390) : shadow.dom.lazy_native_coll_seq.call(null,G__33389,G__33390));
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
var G__33435 = arguments.length;
switch (G__33435) {
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
var G__33460 = arguments.length;
switch (G__33460) {
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
var G__33470 = arguments.length;
switch (G__33470) {
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
var G__33476 = arguments.length;
switch (G__33476) {
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
var G__33490 = arguments.length;
switch (G__33490) {
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
var G__33498 = document;
var G__33499 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33498,G__33499);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__33505 = shadow.dom.dom_node(parent);
var G__33506 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33505,G__33506);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__33515 = shadow.dom.dom_node(el);
var G__33516 = cls;
return goog.dom.classlist.add(G__33515,G__33516);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__33523 = shadow.dom.dom_node(el);
var G__33524 = cls;
return goog.dom.classlist.remove(G__33523,G__33524);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33530 = arguments.length;
switch (G__33530) {
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
var G__33535 = shadow.dom.dom_node(el);
var G__33536 = cls;
return goog.dom.classlist.toggle(G__33535,G__33536);
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
}catch (e33550){if((e33550 instanceof Object)){
var e = e33550;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33550;

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
var seq__33560 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33561 = null;
var count__33562 = (0);
var i__33563 = (0);
while(true){
if((i__33563 < count__33562)){
var el = chunk__33561.cljs$core$IIndexed$_nth$arity$2(null,i__33563);
var handler_34905__$1 = ((function (seq__33560,chunk__33561,count__33562,i__33563,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33560,chunk__33561,count__33562,i__33563,el))
;
var G__33582_34906 = el;
var G__33583_34907 = cljs.core.name(ev);
var G__33584_34908 = handler_34905__$1;
shadow.dom.dom_listen(G__33582_34906,G__33583_34907,G__33584_34908);


var G__34909 = seq__33560;
var G__34910 = chunk__33561;
var G__34911 = count__33562;
var G__34912 = (i__33563 + (1));
seq__33560 = G__34909;
chunk__33561 = G__34910;
count__33562 = G__34911;
i__33563 = G__34912;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33560);
if(temp__5735__auto__){
var seq__33560__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33560__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33560__$1);
var G__34914 = cljs.core.chunk_rest(seq__33560__$1);
var G__34915 = c__4609__auto__;
var G__34916 = cljs.core.count(c__4609__auto__);
var G__34917 = (0);
seq__33560 = G__34914;
chunk__33561 = G__34915;
count__33562 = G__34916;
i__33563 = G__34917;
continue;
} else {
var el = cljs.core.first(seq__33560__$1);
var handler_34918__$1 = ((function (seq__33560,chunk__33561,count__33562,i__33563,el,seq__33560__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33560,chunk__33561,count__33562,i__33563,el,seq__33560__$1,temp__5735__auto__))
;
var G__33590_34922 = el;
var G__33591_34923 = cljs.core.name(ev);
var G__33592_34924 = handler_34918__$1;
shadow.dom.dom_listen(G__33590_34922,G__33591_34923,G__33592_34924);


var G__34926 = cljs.core.next(seq__33560__$1);
var G__34927 = null;
var G__34928 = (0);
var G__34929 = (0);
seq__33560 = G__34926;
chunk__33561 = G__34927;
count__33562 = G__34928;
i__33563 = G__34929;
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
var G__33597 = arguments.length;
switch (G__33597) {
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
var G__33607 = shadow.dom.dom_node(el);
var G__33608 = cljs.core.name(ev);
var G__33609 = handler__$1;
return shadow.dom.dom_listen(G__33607,G__33608,G__33609);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__33612 = shadow.dom.dom_node(el);
var G__33613 = cljs.core.name(ev);
var G__33615 = handler;
return shadow.dom.dom_listen_remove(G__33612,G__33613,G__33615);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33620 = cljs.core.seq(events);
var chunk__33621 = null;
var count__33622 = (0);
var i__33623 = (0);
while(true){
if((i__33623 < count__33622)){
var vec__33637 = chunk__33621.cljs$core$IIndexed$_nth$arity$2(null,i__33623);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33637,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33637,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34941 = seq__33620;
var G__34942 = chunk__33621;
var G__34943 = count__33622;
var G__34944 = (i__33623 + (1));
seq__33620 = G__34941;
chunk__33621 = G__34942;
count__33622 = G__34943;
i__33623 = G__34944;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33620);
if(temp__5735__auto__){
var seq__33620__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33620__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33620__$1);
var G__34946 = cljs.core.chunk_rest(seq__33620__$1);
var G__34947 = c__4609__auto__;
var G__34948 = cljs.core.count(c__4609__auto__);
var G__34949 = (0);
seq__33620 = G__34946;
chunk__33621 = G__34947;
count__33622 = G__34948;
i__33623 = G__34949;
continue;
} else {
var vec__33659 = cljs.core.first(seq__33620__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33659,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33659,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34952 = cljs.core.next(seq__33620__$1);
var G__34953 = null;
var G__34954 = (0);
var G__34955 = (0);
seq__33620 = G__34952;
chunk__33621 = G__34953;
count__33622 = G__34954;
i__33623 = G__34955;
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
var seq__33691 = cljs.core.seq(styles);
var chunk__33692 = null;
var count__33693 = (0);
var i__33694 = (0);
while(true){
if((i__33694 < count__33693)){
var vec__33729 = chunk__33692.cljs$core$IIndexed$_nth$arity$2(null,i__33694);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33729,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33729,(1),null);
var G__33741_34959 = dom;
var G__33742_34960 = cljs.core.name(k);
var G__33743_34961 = (((v == null))?"":v);
goog.style.setStyle(G__33741_34959,G__33742_34960,G__33743_34961);


var G__34964 = seq__33691;
var G__34965 = chunk__33692;
var G__34966 = count__33693;
var G__34967 = (i__33694 + (1));
seq__33691 = G__34964;
chunk__33692 = G__34965;
count__33693 = G__34966;
i__33694 = G__34967;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33691);
if(temp__5735__auto__){
var seq__33691__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33691__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33691__$1);
var G__34969 = cljs.core.chunk_rest(seq__33691__$1);
var G__34970 = c__4609__auto__;
var G__34971 = cljs.core.count(c__4609__auto__);
var G__34972 = (0);
seq__33691 = G__34969;
chunk__33692 = G__34970;
count__33693 = G__34971;
i__33694 = G__34972;
continue;
} else {
var vec__33767 = cljs.core.first(seq__33691__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33767,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33767,(1),null);
var G__33770_34974 = dom;
var G__33771_34975 = cljs.core.name(k);
var G__33772_34976 = (((v == null))?"":v);
goog.style.setStyle(G__33770_34974,G__33771_34975,G__33772_34976);


var G__34977 = cljs.core.next(seq__33691__$1);
var G__34978 = null;
var G__34979 = (0);
var G__34980 = (0);
seq__33691 = G__34977;
chunk__33692 = G__34978;
count__33693 = G__34979;
i__33694 = G__34980;
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
var G__33777_34982 = key;
var G__33777_34983__$1 = (((G__33777_34982 instanceof cljs.core.Keyword))?G__33777_34982.fqn:null);
switch (G__33777_34983__$1) {
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
var ks_34990 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_34990,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_34990,"aria-");
}
})())){
el.setAttribute(ks_34990,value);
} else {
(el[ks_34990] = value);
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
var G__33797 = shadow.dom.dom_node(el);
var G__33798 = cls;
return goog.dom.classlist.contains(G__33797,G__33798);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33823){
var map__33825 = p__33823;
var map__33825__$1 = (((((!((map__33825 == null))))?(((((map__33825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33825):map__33825);
var props = map__33825__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33825__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33835 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33835,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33835,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33835,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33845 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33845,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33845;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33857 = arguments.length;
switch (G__33857) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33871){
var vec__33872 = p__33871;
var seq__33873 = cljs.core.seq(vec__33872);
var first__33874 = cljs.core.first(seq__33873);
var seq__33873__$1 = cljs.core.next(seq__33873);
var nn = first__33874;
var first__33874__$1 = cljs.core.first(seq__33873__$1);
var seq__33873__$2 = cljs.core.next(seq__33873__$1);
var np = first__33874__$1;
var nc = seq__33873__$2;
var node = vec__33872;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33878 = nn;
var G__33879 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33878,G__33879) : create_fn.call(null,G__33878,G__33879));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33882 = nn;
var G__33883 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33882,G__33883) : create_fn.call(null,G__33882,G__33883));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33890 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33890,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33890,(1),null);
var seq__33893_35013 = cljs.core.seq(node_children);
var chunk__33894_35014 = null;
var count__33895_35015 = (0);
var i__33896_35016 = (0);
while(true){
if((i__33896_35016 < count__33895_35015)){
var child_struct_35017 = chunk__33894_35014.cljs$core$IIndexed$_nth$arity$2(null,i__33896_35016);
var children_35018 = shadow.dom.dom_node(child_struct_35017);
if(cljs.core.seq_QMARK_(children_35018)){
var seq__33967_35019 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35018));
var chunk__33969_35020 = null;
var count__33970_35021 = (0);
var i__33971_35022 = (0);
while(true){
if((i__33971_35022 < count__33970_35021)){
var child_35025 = chunk__33969_35020.cljs$core$IIndexed$_nth$arity$2(null,i__33971_35022);
if(cljs.core.truth_(child_35025)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35025);


var G__35027 = seq__33967_35019;
var G__35028 = chunk__33969_35020;
var G__35029 = count__33970_35021;
var G__35030 = (i__33971_35022 + (1));
seq__33967_35019 = G__35027;
chunk__33969_35020 = G__35028;
count__33970_35021 = G__35029;
i__33971_35022 = G__35030;
continue;
} else {
var G__35032 = seq__33967_35019;
var G__35033 = chunk__33969_35020;
var G__35034 = count__33970_35021;
var G__35035 = (i__33971_35022 + (1));
seq__33967_35019 = G__35032;
chunk__33969_35020 = G__35033;
count__33970_35021 = G__35034;
i__33971_35022 = G__35035;
continue;
}
} else {
var temp__5735__auto___35036 = cljs.core.seq(seq__33967_35019);
if(temp__5735__auto___35036){
var seq__33967_35037__$1 = temp__5735__auto___35036;
if(cljs.core.chunked_seq_QMARK_(seq__33967_35037__$1)){
var c__4609__auto___35038 = cljs.core.chunk_first(seq__33967_35037__$1);
var G__35039 = cljs.core.chunk_rest(seq__33967_35037__$1);
var G__35040 = c__4609__auto___35038;
var G__35041 = cljs.core.count(c__4609__auto___35038);
var G__35042 = (0);
seq__33967_35019 = G__35039;
chunk__33969_35020 = G__35040;
count__33970_35021 = G__35041;
i__33971_35022 = G__35042;
continue;
} else {
var child_35043 = cljs.core.first(seq__33967_35037__$1);
if(cljs.core.truth_(child_35043)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35043);


var G__35046 = cljs.core.next(seq__33967_35037__$1);
var G__35047 = null;
var G__35048 = (0);
var G__35049 = (0);
seq__33967_35019 = G__35046;
chunk__33969_35020 = G__35047;
count__33970_35021 = G__35048;
i__33971_35022 = G__35049;
continue;
} else {
var G__35050 = cljs.core.next(seq__33967_35037__$1);
var G__35051 = null;
var G__35052 = (0);
var G__35053 = (0);
seq__33967_35019 = G__35050;
chunk__33969_35020 = G__35051;
count__33970_35021 = G__35052;
i__33971_35022 = G__35053;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35018);
}


var G__35055 = seq__33893_35013;
var G__35056 = chunk__33894_35014;
var G__35057 = count__33895_35015;
var G__35058 = (i__33896_35016 + (1));
seq__33893_35013 = G__35055;
chunk__33894_35014 = G__35056;
count__33895_35015 = G__35057;
i__33896_35016 = G__35058;
continue;
} else {
var temp__5735__auto___35059 = cljs.core.seq(seq__33893_35013);
if(temp__5735__auto___35059){
var seq__33893_35060__$1 = temp__5735__auto___35059;
if(cljs.core.chunked_seq_QMARK_(seq__33893_35060__$1)){
var c__4609__auto___35062 = cljs.core.chunk_first(seq__33893_35060__$1);
var G__35063 = cljs.core.chunk_rest(seq__33893_35060__$1);
var G__35064 = c__4609__auto___35062;
var G__35065 = cljs.core.count(c__4609__auto___35062);
var G__35066 = (0);
seq__33893_35013 = G__35063;
chunk__33894_35014 = G__35064;
count__33895_35015 = G__35065;
i__33896_35016 = G__35066;
continue;
} else {
var child_struct_35067 = cljs.core.first(seq__33893_35060__$1);
var children_35068 = shadow.dom.dom_node(child_struct_35067);
if(cljs.core.seq_QMARK_(children_35068)){
var seq__33999_35069 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35068));
var chunk__34001_35070 = null;
var count__34002_35071 = (0);
var i__34003_35072 = (0);
while(true){
if((i__34003_35072 < count__34002_35071)){
var child_35074 = chunk__34001_35070.cljs$core$IIndexed$_nth$arity$2(null,i__34003_35072);
if(cljs.core.truth_(child_35074)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35074);


var G__35078 = seq__33999_35069;
var G__35079 = chunk__34001_35070;
var G__35080 = count__34002_35071;
var G__35081 = (i__34003_35072 + (1));
seq__33999_35069 = G__35078;
chunk__34001_35070 = G__35079;
count__34002_35071 = G__35080;
i__34003_35072 = G__35081;
continue;
} else {
var G__35082 = seq__33999_35069;
var G__35083 = chunk__34001_35070;
var G__35084 = count__34002_35071;
var G__35085 = (i__34003_35072 + (1));
seq__33999_35069 = G__35082;
chunk__34001_35070 = G__35083;
count__34002_35071 = G__35084;
i__34003_35072 = G__35085;
continue;
}
} else {
var temp__5735__auto___35086__$1 = cljs.core.seq(seq__33999_35069);
if(temp__5735__auto___35086__$1){
var seq__33999_35087__$1 = temp__5735__auto___35086__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33999_35087__$1)){
var c__4609__auto___35088 = cljs.core.chunk_first(seq__33999_35087__$1);
var G__35089 = cljs.core.chunk_rest(seq__33999_35087__$1);
var G__35090 = c__4609__auto___35088;
var G__35091 = cljs.core.count(c__4609__auto___35088);
var G__35092 = (0);
seq__33999_35069 = G__35089;
chunk__34001_35070 = G__35090;
count__34002_35071 = G__35091;
i__34003_35072 = G__35092;
continue;
} else {
var child_35094 = cljs.core.first(seq__33999_35087__$1);
if(cljs.core.truth_(child_35094)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35094);


var G__35096 = cljs.core.next(seq__33999_35087__$1);
var G__35097 = null;
var G__35098 = (0);
var G__35099 = (0);
seq__33999_35069 = G__35096;
chunk__34001_35070 = G__35097;
count__34002_35071 = G__35098;
i__34003_35072 = G__35099;
continue;
} else {
var G__35100 = cljs.core.next(seq__33999_35087__$1);
var G__35101 = null;
var G__35102 = (0);
var G__35103 = (0);
seq__33999_35069 = G__35100;
chunk__34001_35070 = G__35101;
count__34002_35071 = G__35102;
i__34003_35072 = G__35103;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35068);
}


var G__35108 = cljs.core.next(seq__33893_35060__$1);
var G__35109 = null;
var G__35110 = (0);
var G__35111 = (0);
seq__33893_35013 = G__35108;
chunk__33894_35014 = G__35109;
count__33895_35015 = G__35110;
i__33896_35016 = G__35111;
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
var G__34080 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__34080);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34095 = cljs.core.seq(node);
var chunk__34096 = null;
var count__34097 = (0);
var i__34098 = (0);
while(true){
if((i__34098 < count__34097)){
var n = chunk__34096.cljs$core$IIndexed$_nth$arity$2(null,i__34098);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35116 = seq__34095;
var G__35117 = chunk__34096;
var G__35118 = count__34097;
var G__35119 = (i__34098 + (1));
seq__34095 = G__35116;
chunk__34096 = G__35117;
count__34097 = G__35118;
i__34098 = G__35119;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34095);
if(temp__5735__auto__){
var seq__34095__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34095__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34095__$1);
var G__35120 = cljs.core.chunk_rest(seq__34095__$1);
var G__35121 = c__4609__auto__;
var G__35122 = cljs.core.count(c__4609__auto__);
var G__35123 = (0);
seq__34095 = G__35120;
chunk__34096 = G__35121;
count__34097 = G__35122;
i__34098 = G__35123;
continue;
} else {
var n = cljs.core.first(seq__34095__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35124 = cljs.core.next(seq__34095__$1);
var G__35125 = null;
var G__35126 = (0);
var G__35127 = (0);
seq__34095 = G__35124;
chunk__34096 = G__35125;
count__34097 = G__35126;
i__34098 = G__35127;
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
var G__34127 = shadow.dom.dom_node(new$);
var G__34128 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__34127,G__34128);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34134 = arguments.length;
switch (G__34134) {
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
var G__34145 = arguments.length;
switch (G__34145) {
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
var G__34178 = arguments.length;
switch (G__34178) {
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
var len__4789__auto___35137 = arguments.length;
var i__4790__auto___35138 = (0);
while(true){
if((i__4790__auto___35138 < len__4789__auto___35137)){
args__4795__auto__.push((arguments[i__4790__auto___35138]));

var G__35139 = (i__4790__auto___35138 + (1));
i__4790__auto___35138 = G__35139;
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
var seq__34194_35143 = cljs.core.seq(nodes);
var chunk__34195_35144 = null;
var count__34196_35145 = (0);
var i__34197_35146 = (0);
while(true){
if((i__34197_35146 < count__34196_35145)){
var node_35147 = chunk__34195_35144.cljs$core$IIndexed$_nth$arity$2(null,i__34197_35146);
fragment.appendChild(shadow.dom._to_dom(node_35147));


var G__35148 = seq__34194_35143;
var G__35149 = chunk__34195_35144;
var G__35150 = count__34196_35145;
var G__35151 = (i__34197_35146 + (1));
seq__34194_35143 = G__35148;
chunk__34195_35144 = G__35149;
count__34196_35145 = G__35150;
i__34197_35146 = G__35151;
continue;
} else {
var temp__5735__auto___35152 = cljs.core.seq(seq__34194_35143);
if(temp__5735__auto___35152){
var seq__34194_35153__$1 = temp__5735__auto___35152;
if(cljs.core.chunked_seq_QMARK_(seq__34194_35153__$1)){
var c__4609__auto___35154 = cljs.core.chunk_first(seq__34194_35153__$1);
var G__35155 = cljs.core.chunk_rest(seq__34194_35153__$1);
var G__35156 = c__4609__auto___35154;
var G__35157 = cljs.core.count(c__4609__auto___35154);
var G__35158 = (0);
seq__34194_35143 = G__35155;
chunk__34195_35144 = G__35156;
count__34196_35145 = G__35157;
i__34197_35146 = G__35158;
continue;
} else {
var node_35159 = cljs.core.first(seq__34194_35153__$1);
fragment.appendChild(shadow.dom._to_dom(node_35159));


var G__35160 = cljs.core.next(seq__34194_35153__$1);
var G__35161 = null;
var G__35162 = (0);
var G__35163 = (0);
seq__34194_35143 = G__35160;
chunk__34195_35144 = G__35161;
count__34196_35145 = G__35162;
i__34197_35146 = G__35163;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34187){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34187));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34227_35164 = cljs.core.seq(scripts);
var chunk__34228_35165 = null;
var count__34229_35166 = (0);
var i__34230_35167 = (0);
while(true){
if((i__34230_35167 < count__34229_35166)){
var vec__34238_35168 = chunk__34228_35165.cljs$core$IIndexed$_nth$arity$2(null,i__34230_35167);
var script_tag_35169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34238_35168,(0),null);
var script_body_35170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34238_35168,(1),null);
eval(script_body_35170);


var G__35171 = seq__34227_35164;
var G__35172 = chunk__34228_35165;
var G__35173 = count__34229_35166;
var G__35174 = (i__34230_35167 + (1));
seq__34227_35164 = G__35171;
chunk__34228_35165 = G__35172;
count__34229_35166 = G__35173;
i__34230_35167 = G__35174;
continue;
} else {
var temp__5735__auto___35175 = cljs.core.seq(seq__34227_35164);
if(temp__5735__auto___35175){
var seq__34227_35176__$1 = temp__5735__auto___35175;
if(cljs.core.chunked_seq_QMARK_(seq__34227_35176__$1)){
var c__4609__auto___35177 = cljs.core.chunk_first(seq__34227_35176__$1);
var G__35178 = cljs.core.chunk_rest(seq__34227_35176__$1);
var G__35179 = c__4609__auto___35177;
var G__35180 = cljs.core.count(c__4609__auto___35177);
var G__35181 = (0);
seq__34227_35164 = G__35178;
chunk__34228_35165 = G__35179;
count__34229_35166 = G__35180;
i__34230_35167 = G__35181;
continue;
} else {
var vec__34244_35182 = cljs.core.first(seq__34227_35176__$1);
var script_tag_35183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34244_35182,(0),null);
var script_body_35184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34244_35182,(1),null);
eval(script_body_35184);


var G__35185 = cljs.core.next(seq__34227_35176__$1);
var G__35186 = null;
var G__35187 = (0);
var G__35188 = (0);
seq__34227_35164 = G__35185;
chunk__34228_35165 = G__35186;
count__34229_35166 = G__35187;
i__34230_35167 = G__35188;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34248){
var vec__34249 = p__34248;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34249,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34249,(1),null);
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
var G__34265 = shadow.dom.dom_node(el);
var G__34266 = cls;
return goog.dom.getAncestorByClass(G__34265,G__34266);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34269 = arguments.length;
switch (G__34269) {
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
var G__34272 = shadow.dom.dom_node(el);
var G__34273 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__34272,G__34273);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__34275 = shadow.dom.dom_node(el);
var G__34276 = cljs.core.name(tag);
var G__34277 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__34275,G__34276,G__34277);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__34280 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__34280);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__34282 = shadow.dom.dom_node(dom);
var G__34283 = value;
return goog.dom.forms.setValue(G__34282,G__34283);
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
var seq__34308 = cljs.core.seq(style_keys);
var chunk__34309 = null;
var count__34310 = (0);
var i__34311 = (0);
while(true){
if((i__34311 < count__34310)){
var it = chunk__34309.cljs$core$IIndexed$_nth$arity$2(null,i__34311);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35205 = seq__34308;
var G__35206 = chunk__34309;
var G__35207 = count__34310;
var G__35208 = (i__34311 + (1));
seq__34308 = G__35205;
chunk__34309 = G__35206;
count__34310 = G__35207;
i__34311 = G__35208;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34308);
if(temp__5735__auto__){
var seq__34308__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34308__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34308__$1);
var G__35209 = cljs.core.chunk_rest(seq__34308__$1);
var G__35210 = c__4609__auto__;
var G__35211 = cljs.core.count(c__4609__auto__);
var G__35212 = (0);
seq__34308 = G__35209;
chunk__34309 = G__35210;
count__34310 = G__35211;
i__34311 = G__35212;
continue;
} else {
var it = cljs.core.first(seq__34308__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35213 = cljs.core.next(seq__34308__$1);
var G__35214 = null;
var G__35215 = (0);
var G__35216 = (0);
seq__34308 = G__35213;
chunk__34309 = G__35214;
count__34310 = G__35215;
i__34311 = G__35216;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k34318,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__34330 = k34318;
var G__34330__$1 = (((G__34330 instanceof cljs.core.Keyword))?G__34330.fqn:null);
switch (G__34330__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34318,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__34336){
var vec__34337 = p__34336;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34337,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34337,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34317){
var self__ = this;
var G__34317__$1 = this;
return (new cljs.core.RecordIter((0),G__34317__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__34368 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__34368(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34319,other34320){
var self__ = this;
var this34319__$1 = this;
return (((!((other34320 == null)))) && ((this34319__$1.constructor === other34320.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34319__$1.x,other34320.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34319__$1.y,other34320.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34319__$1.__extmap,other34320.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__34317){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__34389 = cljs.core.keyword_identical_QMARK_;
var expr__34390 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__34392 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__34393 = expr__34390;
return (pred__34389.cljs$core$IFn$_invoke$arity$2 ? pred__34389.cljs$core$IFn$_invoke$arity$2(G__34392,G__34393) : pred__34389.call(null,G__34392,G__34393));
})())){
return (new shadow.dom.Coordinate(G__34317,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34397 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__34398 = expr__34390;
return (pred__34389.cljs$core$IFn$_invoke$arity$2 ? pred__34389.cljs$core$IFn$_invoke$arity$2(G__34397,G__34398) : pred__34389.call(null,G__34397,G__34398));
})())){
return (new shadow.dom.Coordinate(self__.x,G__34317,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__34317),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__34317){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34317,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34321){
var extmap__4478__auto__ = (function (){var G__34407 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34321,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34321)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34407);
} else {
return G__34407;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34321),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34321),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__34408 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__34408);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__34409 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__34409);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__34414 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__34414);
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k34416,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__34425 = k34416;
var G__34425__$1 = (((G__34425 instanceof cljs.core.Keyword))?G__34425.fqn:null);
switch (G__34425__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34416,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__34426){
var vec__34427 = p__34426;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34427,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34427,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34415){
var self__ = this;
var G__34415__$1 = this;
return (new cljs.core.RecordIter((0),G__34415__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__34439 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__34439(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34417,other34418){
var self__ = this;
var this34417__$1 = this;
return (((!((other34418 == null)))) && ((this34417__$1.constructor === other34418.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34417__$1.w,other34418.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34417__$1.h,other34418.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34417__$1.__extmap,other34418.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__34415){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__34457 = cljs.core.keyword_identical_QMARK_;
var expr__34458 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__34460 = new cljs.core.Keyword(null,"w","w",354169001);
var G__34461 = expr__34458;
return (pred__34457.cljs$core$IFn$_invoke$arity$2 ? pred__34457.cljs$core$IFn$_invoke$arity$2(G__34460,G__34461) : pred__34457.call(null,G__34460,G__34461));
})())){
return (new shadow.dom.Size(G__34415,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34463 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__34464 = expr__34458;
return (pred__34457.cljs$core$IFn$_invoke$arity$2 ? pred__34457.cljs$core$IFn$_invoke$arity$2(G__34463,G__34464) : pred__34457.call(null,G__34463,G__34464));
})())){
return (new shadow.dom.Size(self__.w,G__34415,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__34415),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__34415){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34415,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34419){
var extmap__4478__auto__ = (function (){var G__34482 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34419,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34419)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34482);
} else {
return G__34482;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34419),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34419),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__34486 = shadow.dom.dom_node(el);
return goog.style.getSize(G__34486);
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
var G__35294 = (i + (1));
var G__35295 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35294;
ret = G__35295;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34541){
var vec__34542 = p__34541;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34542,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34542,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34553 = arguments.length;
switch (G__34553) {
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
var G__34572_35299 = new_node;
var G__34573_35300 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__34572_35299,G__34573_35300);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__34578_35301 = new_node;
var G__34579_35302 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__34578_35301,G__34579_35302);

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
var G__35303 = ps;
var G__35304 = (i + (1));
el__$1 = G__35303;
i = G__35304;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__34599 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__34599);
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
var G__34603 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__34603);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__34608 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__34608);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34613 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34613,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34613,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34613,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34617_35305 = cljs.core.seq(props);
var chunk__34618_35306 = null;
var count__34619_35307 = (0);
var i__34620_35308 = (0);
while(true){
if((i__34620_35308 < count__34619_35307)){
var vec__34656_35309 = chunk__34618_35306.cljs$core$IIndexed$_nth$arity$2(null,i__34620_35308);
var k_35310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34656_35309,(0),null);
var v_35311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34656_35309,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_35310);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35310),v_35311);


var G__35312 = seq__34617_35305;
var G__35313 = chunk__34618_35306;
var G__35314 = count__34619_35307;
var G__35315 = (i__34620_35308 + (1));
seq__34617_35305 = G__35312;
chunk__34618_35306 = G__35313;
count__34619_35307 = G__35314;
i__34620_35308 = G__35315;
continue;
} else {
var temp__5735__auto___35316 = cljs.core.seq(seq__34617_35305);
if(temp__5735__auto___35316){
var seq__34617_35317__$1 = temp__5735__auto___35316;
if(cljs.core.chunked_seq_QMARK_(seq__34617_35317__$1)){
var c__4609__auto___35318 = cljs.core.chunk_first(seq__34617_35317__$1);
var G__35319 = cljs.core.chunk_rest(seq__34617_35317__$1);
var G__35320 = c__4609__auto___35318;
var G__35321 = cljs.core.count(c__4609__auto___35318);
var G__35322 = (0);
seq__34617_35305 = G__35319;
chunk__34618_35306 = G__35320;
count__34619_35307 = G__35321;
i__34620_35308 = G__35322;
continue;
} else {
var vec__34677_35327 = cljs.core.first(seq__34617_35317__$1);
var k_35328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34677_35327,(0),null);
var v_35329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34677_35327,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_35328);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35328),v_35329);


var G__35332 = cljs.core.next(seq__34617_35317__$1);
var G__35333 = null;
var G__35334 = (0);
var G__35335 = (0);
seq__34617_35305 = G__35332;
chunk__34618_35306 = G__35333;
count__34619_35307 = G__35334;
i__34620_35308 = G__35335;
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
var vec__34699 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34699,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34699,(1),null);
var seq__34703_35338 = cljs.core.seq(node_children);
var chunk__34705_35339 = null;
var count__34706_35340 = (0);
var i__34707_35341 = (0);
while(true){
if((i__34707_35341 < count__34706_35340)){
var child_struct_35342 = chunk__34705_35339.cljs$core$IIndexed$_nth$arity$2(null,i__34707_35341);
if((!((child_struct_35342 == null)))){
if(typeof child_struct_35342 === 'string'){
var text_35343 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35343),child_struct_35342].join(''));
} else {
var children_35345 = shadow.dom.svg_node(child_struct_35342);
if(cljs.core.seq_QMARK_(children_35345)){
var seq__34754_35347 = cljs.core.seq(children_35345);
var chunk__34757_35348 = null;
var count__34758_35349 = (0);
var i__34759_35350 = (0);
while(true){
if((i__34759_35350 < count__34758_35349)){
var child_35351 = chunk__34757_35348.cljs$core$IIndexed$_nth$arity$2(null,i__34759_35350);
if(cljs.core.truth_(child_35351)){
node.appendChild(child_35351);


var G__35352 = seq__34754_35347;
var G__35353 = chunk__34757_35348;
var G__35354 = count__34758_35349;
var G__35355 = (i__34759_35350 + (1));
seq__34754_35347 = G__35352;
chunk__34757_35348 = G__35353;
count__34758_35349 = G__35354;
i__34759_35350 = G__35355;
continue;
} else {
var G__35356 = seq__34754_35347;
var G__35357 = chunk__34757_35348;
var G__35358 = count__34758_35349;
var G__35359 = (i__34759_35350 + (1));
seq__34754_35347 = G__35356;
chunk__34757_35348 = G__35357;
count__34758_35349 = G__35358;
i__34759_35350 = G__35359;
continue;
}
} else {
var temp__5735__auto___35360 = cljs.core.seq(seq__34754_35347);
if(temp__5735__auto___35360){
var seq__34754_35362__$1 = temp__5735__auto___35360;
if(cljs.core.chunked_seq_QMARK_(seq__34754_35362__$1)){
var c__4609__auto___35364 = cljs.core.chunk_first(seq__34754_35362__$1);
var G__35365 = cljs.core.chunk_rest(seq__34754_35362__$1);
var G__35366 = c__4609__auto___35364;
var G__35367 = cljs.core.count(c__4609__auto___35364);
var G__35368 = (0);
seq__34754_35347 = G__35365;
chunk__34757_35348 = G__35366;
count__34758_35349 = G__35367;
i__34759_35350 = G__35368;
continue;
} else {
var child_35369 = cljs.core.first(seq__34754_35362__$1);
if(cljs.core.truth_(child_35369)){
node.appendChild(child_35369);


var G__35370 = cljs.core.next(seq__34754_35362__$1);
var G__35371 = null;
var G__35372 = (0);
var G__35373 = (0);
seq__34754_35347 = G__35370;
chunk__34757_35348 = G__35371;
count__34758_35349 = G__35372;
i__34759_35350 = G__35373;
continue;
} else {
var G__35374 = cljs.core.next(seq__34754_35362__$1);
var G__35375 = null;
var G__35376 = (0);
var G__35377 = (0);
seq__34754_35347 = G__35374;
chunk__34757_35348 = G__35375;
count__34758_35349 = G__35376;
i__34759_35350 = G__35377;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35345);
}
}


var G__35378 = seq__34703_35338;
var G__35379 = chunk__34705_35339;
var G__35380 = count__34706_35340;
var G__35381 = (i__34707_35341 + (1));
seq__34703_35338 = G__35378;
chunk__34705_35339 = G__35379;
count__34706_35340 = G__35380;
i__34707_35341 = G__35381;
continue;
} else {
var G__35386 = seq__34703_35338;
var G__35387 = chunk__34705_35339;
var G__35388 = count__34706_35340;
var G__35389 = (i__34707_35341 + (1));
seq__34703_35338 = G__35386;
chunk__34705_35339 = G__35387;
count__34706_35340 = G__35388;
i__34707_35341 = G__35389;
continue;
}
} else {
var temp__5735__auto___35390 = cljs.core.seq(seq__34703_35338);
if(temp__5735__auto___35390){
var seq__34703_35391__$1 = temp__5735__auto___35390;
if(cljs.core.chunked_seq_QMARK_(seq__34703_35391__$1)){
var c__4609__auto___35392 = cljs.core.chunk_first(seq__34703_35391__$1);
var G__35393 = cljs.core.chunk_rest(seq__34703_35391__$1);
var G__35394 = c__4609__auto___35392;
var G__35395 = cljs.core.count(c__4609__auto___35392);
var G__35396 = (0);
seq__34703_35338 = G__35393;
chunk__34705_35339 = G__35394;
count__34706_35340 = G__35395;
i__34707_35341 = G__35396;
continue;
} else {
var child_struct_35397 = cljs.core.first(seq__34703_35391__$1);
if((!((child_struct_35397 == null)))){
if(typeof child_struct_35397 === 'string'){
var text_35398 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35398),child_struct_35397].join(''));
} else {
var children_35399 = shadow.dom.svg_node(child_struct_35397);
if(cljs.core.seq_QMARK_(children_35399)){
var seq__34770_35400 = cljs.core.seq(children_35399);
var chunk__34772_35401 = null;
var count__34773_35402 = (0);
var i__34774_35403 = (0);
while(true){
if((i__34774_35403 < count__34773_35402)){
var child_35404 = chunk__34772_35401.cljs$core$IIndexed$_nth$arity$2(null,i__34774_35403);
if(cljs.core.truth_(child_35404)){
node.appendChild(child_35404);


var G__35405 = seq__34770_35400;
var G__35406 = chunk__34772_35401;
var G__35407 = count__34773_35402;
var G__35408 = (i__34774_35403 + (1));
seq__34770_35400 = G__35405;
chunk__34772_35401 = G__35406;
count__34773_35402 = G__35407;
i__34774_35403 = G__35408;
continue;
} else {
var G__35409 = seq__34770_35400;
var G__35410 = chunk__34772_35401;
var G__35411 = count__34773_35402;
var G__35412 = (i__34774_35403 + (1));
seq__34770_35400 = G__35409;
chunk__34772_35401 = G__35410;
count__34773_35402 = G__35411;
i__34774_35403 = G__35412;
continue;
}
} else {
var temp__5735__auto___35413__$1 = cljs.core.seq(seq__34770_35400);
if(temp__5735__auto___35413__$1){
var seq__34770_35414__$1 = temp__5735__auto___35413__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34770_35414__$1)){
var c__4609__auto___35415 = cljs.core.chunk_first(seq__34770_35414__$1);
var G__35416 = cljs.core.chunk_rest(seq__34770_35414__$1);
var G__35417 = c__4609__auto___35415;
var G__35418 = cljs.core.count(c__4609__auto___35415);
var G__35419 = (0);
seq__34770_35400 = G__35416;
chunk__34772_35401 = G__35417;
count__34773_35402 = G__35418;
i__34774_35403 = G__35419;
continue;
} else {
var child_35420 = cljs.core.first(seq__34770_35414__$1);
if(cljs.core.truth_(child_35420)){
node.appendChild(child_35420);


var G__35421 = cljs.core.next(seq__34770_35414__$1);
var G__35422 = null;
var G__35423 = (0);
var G__35424 = (0);
seq__34770_35400 = G__35421;
chunk__34772_35401 = G__35422;
count__34773_35402 = G__35423;
i__34774_35403 = G__35424;
continue;
} else {
var G__35425 = cljs.core.next(seq__34770_35414__$1);
var G__35426 = null;
var G__35427 = (0);
var G__35428 = (0);
seq__34770_35400 = G__35425;
chunk__34772_35401 = G__35426;
count__34773_35402 = G__35427;
i__34774_35403 = G__35428;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35399);
}
}


var G__35429 = cljs.core.next(seq__34703_35391__$1);
var G__35430 = null;
var G__35431 = (0);
var G__35432 = (0);
seq__34703_35338 = G__35429;
chunk__34705_35339 = G__35430;
count__34706_35340 = G__35431;
i__34707_35341 = G__35432;
continue;
} else {
var G__35433 = cljs.core.next(seq__34703_35391__$1);
var G__35434 = null;
var G__35435 = (0);
var G__35436 = (0);
seq__34703_35338 = G__35433;
chunk__34705_35339 = G__35434;
count__34706_35340 = G__35435;
i__34707_35341 = G__35436;
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

var G__34781_35437 = shadow.dom._to_svg;
var G__34782_35438 = "string";
var G__34783_35439 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__34781_35437,G__34782_35438,G__34783_35439);

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

var G__34790_35440 = shadow.dom._to_svg;
var G__34791_35441 = "null";
var G__34792_35442 = (function (_){
return null;
});
goog.object.set(G__34790_35440,G__34791_35441,G__34792_35442);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35443 = arguments.length;
var i__4790__auto___35444 = (0);
while(true){
if((i__4790__auto___35444 < len__4789__auto___35443)){
args__4795__auto__.push((arguments[i__4790__auto___35444]));

var G__35445 = (i__4790__auto___35444 + (1));
i__4790__auto___35444 = G__35445;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34793){
var G__34794 = cljs.core.first(seq34793);
var seq34793__$1 = cljs.core.next(seq34793);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34794,seq34793__$1);
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
var G__34801 = arguments.length;
switch (G__34801) {
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
var G__34814_35451 = shadow.dom.dom_node(el);
var G__34815_35452 = cljs.core.name(event);
var G__34816_35453 = event_fn;
shadow.dom.dom_listen(G__34814_35451,G__34815_35452,G__34816_35453);

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__29902__auto___35454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29903__auto__ = (function (){var switch__29561__auto__ = (function (state_34821){
var state_val_34823 = (state_34821[(1)]);
if((state_val_34823 === (1))){
var state_34821__$1 = state_34821;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34821__$1,(2),once_or_cleanup);
} else {
if((state_val_34823 === (2))){
var inst_34818 = (state_34821[(2)]);
var inst_34819 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34821__$1 = (function (){var statearr_34827 = state_34821;
(statearr_34827[(7)] = inst_34818);

return statearr_34827;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34821__$1,inst_34819);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29562__auto__ = null;
var shadow$dom$state_machine__29562__auto____0 = (function (){
var statearr_34832 = [null,null,null,null,null,null,null,null];
(statearr_34832[(0)] = shadow$dom$state_machine__29562__auto__);

(statearr_34832[(1)] = (1));

return statearr_34832;
});
var shadow$dom$state_machine__29562__auto____1 = (function (state_34821){
while(true){
var ret_value__29563__auto__ = (function (){try{while(true){
var result__29564__auto__ = switch__29561__auto__(state_34821);
if(cljs.core.keyword_identical_QMARK_(result__29564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29564__auto__;
}
break;
}
}catch (e34833){if((e34833 instanceof Object)){
var ex__29565__auto__ = e34833;
var statearr_34834_35456 = state_34821;
(statearr_34834_35456[(5)] = ex__29565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34833;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35457 = state_34821;
state_34821 = G__35457;
continue;
} else {
return ret_value__29563__auto__;
}
break;
}
});
shadow$dom$state_machine__29562__auto__ = function(state_34821){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29562__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29562__auto____1.call(this,state_34821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29562__auto____0;
shadow$dom$state_machine__29562__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29562__auto____1;
return shadow$dom$state_machine__29562__auto__;
})()
})();
var state__29904__auto__ = (function (){var statearr_34839 = f__29903__auto__();
(statearr_34839[(6)] = c__29902__auto___35454);

return statearr_34839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29904__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
