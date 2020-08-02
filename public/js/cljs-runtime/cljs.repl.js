goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29506){
var map__29507 = p__29506;
var map__29507__$1 = (((((!((map__29507 == null))))?(((((map__29507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29507):map__29507);
var m = map__29507__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29507__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29507__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29526_29945 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29527_29947 = null;
var count__29528_29948 = (0);
var i__29529_29949 = (0);
while(true){
if((i__29529_29949 < count__29528_29948)){
var f_29950 = chunk__29527_29947.cljs$core$IIndexed$_nth$arity$2(null,i__29529_29949);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_29950], 0));


var G__29953 = seq__29526_29945;
var G__29954 = chunk__29527_29947;
var G__29955 = count__29528_29948;
var G__29956 = (i__29529_29949 + (1));
seq__29526_29945 = G__29953;
chunk__29527_29947 = G__29954;
count__29528_29948 = G__29955;
i__29529_29949 = G__29956;
continue;
} else {
var temp__5735__auto___29957 = cljs.core.seq(seq__29526_29945);
if(temp__5735__auto___29957){
var seq__29526_29958__$1 = temp__5735__auto___29957;
if(cljs.core.chunked_seq_QMARK_(seq__29526_29958__$1)){
var c__4609__auto___29959 = cljs.core.chunk_first(seq__29526_29958__$1);
var G__29960 = cljs.core.chunk_rest(seq__29526_29958__$1);
var G__29961 = c__4609__auto___29959;
var G__29962 = cljs.core.count(c__4609__auto___29959);
var G__29963 = (0);
seq__29526_29945 = G__29960;
chunk__29527_29947 = G__29961;
count__29528_29948 = G__29962;
i__29529_29949 = G__29963;
continue;
} else {
var f_29964 = cljs.core.first(seq__29526_29958__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_29964], 0));


var G__29965 = cljs.core.next(seq__29526_29958__$1);
var G__29966 = null;
var G__29967 = (0);
var G__29968 = (0);
seq__29526_29945 = G__29965;
chunk__29527_29947 = G__29966;
count__29528_29948 = G__29967;
i__29529_29949 = G__29968;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29974 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_29974], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_29974)))?cljs.core.second(arglists_29974):arglists_29974)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29568_29995 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29569_29996 = null;
var count__29570_29997 = (0);
var i__29571_29998 = (0);
while(true){
if((i__29571_29998 < count__29570_29997)){
var vec__29604_29999 = chunk__29569_29996.cljs$core$IIndexed$_nth$arity$2(null,i__29571_29998);
var name_30000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29604_29999,(0),null);
var map__29607_30001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29604_29999,(1),null);
var map__29607_30002__$1 = (((((!((map__29607_30001 == null))))?(((((map__29607_30001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29607_30001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29607_30001):map__29607_30001);
var doc_30003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29607_30002__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29607_30002__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_30000], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_30004], 0));

if(cljs.core.truth_(doc_30003)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_30003], 0));
} else {
}


var G__30016 = seq__29568_29995;
var G__30017 = chunk__29569_29996;
var G__30018 = count__29570_29997;
var G__30019 = (i__29571_29998 + (1));
seq__29568_29995 = G__30016;
chunk__29569_29996 = G__30017;
count__29570_29997 = G__30018;
i__29571_29998 = G__30019;
continue;
} else {
var temp__5735__auto___30022 = cljs.core.seq(seq__29568_29995);
if(temp__5735__auto___30022){
var seq__29568_30026__$1 = temp__5735__auto___30022;
if(cljs.core.chunked_seq_QMARK_(seq__29568_30026__$1)){
var c__4609__auto___30027 = cljs.core.chunk_first(seq__29568_30026__$1);
var G__30029 = cljs.core.chunk_rest(seq__29568_30026__$1);
var G__30030 = c__4609__auto___30027;
var G__30031 = cljs.core.count(c__4609__auto___30027);
var G__30032 = (0);
seq__29568_29995 = G__30029;
chunk__29569_29996 = G__30030;
count__29570_29997 = G__30031;
i__29571_29998 = G__30032;
continue;
} else {
var vec__29614_30033 = cljs.core.first(seq__29568_30026__$1);
var name_30034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29614_30033,(0),null);
var map__29617_30035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29614_30033,(1),null);
var map__29617_30036__$1 = (((((!((map__29617_30035 == null))))?(((((map__29617_30035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29617_30035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29617_30035):map__29617_30035);
var doc_30037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29617_30036__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29617_30036__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_30034], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_30038], 0));

if(cljs.core.truth_(doc_30037)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_30037], 0));
} else {
}


var G__30051 = cljs.core.next(seq__29568_30026__$1);
var G__30052 = null;
var G__30053 = (0);
var G__30054 = (0);
seq__29568_29995 = G__30051;
chunk__29569_29996 = G__30052;
count__29570_29997 = G__30053;
i__29571_29998 = G__30054;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__29633 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29634 = null;
var count__29635 = (0);
var i__29636 = (0);
while(true){
if((i__29636 < count__29635)){
var role = chunk__29634.cljs$core$IIndexed$_nth$arity$2(null,i__29636);
var temp__5735__auto___30060__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___30060__$1)){
var spec_30061 = temp__5735__auto___30060__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_30061)], 0));
} else {
}


var G__30063 = seq__29633;
var G__30064 = chunk__29634;
var G__30065 = count__29635;
var G__30066 = (i__29636 + (1));
seq__29633 = G__30063;
chunk__29634 = G__30064;
count__29635 = G__30065;
i__29636 = G__30066;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__29633);
if(temp__5735__auto____$1){
var seq__29633__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__29633__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__29633__$1);
var G__30068 = cljs.core.chunk_rest(seq__29633__$1);
var G__30069 = c__4609__auto__;
var G__30070 = cljs.core.count(c__4609__auto__);
var G__30071 = (0);
seq__29633 = G__30068;
chunk__29634 = G__30069;
count__29635 = G__30070;
i__29636 = G__30071;
continue;
} else {
var role = cljs.core.first(seq__29633__$1);
var temp__5735__auto___30077__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___30077__$2)){
var spec_30080 = temp__5735__auto___30077__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_30080)], 0));
} else {
}


var G__30082 = cljs.core.next(seq__29633__$1);
var G__30083 = null;
var G__30084 = (0);
var G__30085 = (0);
seq__29633 = G__30082;
chunk__29634 = G__30083;
count__29635 = G__30084;
i__29636 = G__30085;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__30089 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__30090 = cljs.core.ex_cause(t);
via = G__30089;
t = G__30090;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__29691 = datafied_throwable;
var map__29691__$1 = (((((!((map__29691 == null))))?(((((map__29691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29691):map__29691);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29691__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29691__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29691__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__29692 = cljs.core.last(via);
var map__29692__$1 = (((((!((map__29692 == null))))?(((((map__29692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29692):map__29692);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29692__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29692__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29692__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__29694 = data;
var map__29694__$1 = (((((!((map__29694 == null))))?(((((map__29694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29694):map__29694);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29694__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29694__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29694__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__29696 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__29696__$1 = (((((!((map__29696 == null))))?(((((map__29696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29696):map__29696);
var top_data = map__29696__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29696__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__29714 = phase;
var G__29714__$1 = (((G__29714 instanceof cljs.core.Keyword))?G__29714.fqn:null);
switch (G__29714__$1) {
case "read-source":
var map__29717 = data;
var map__29717__$1 = (((((!((map__29717 == null))))?(((((map__29717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29717):map__29717);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29717__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29717__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__29722 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__29722__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29722,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29722);
var G__29722__$2 = (cljs.core.truth_((function (){var fexpr__29731 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__29731.cljs$core$IFn$_invoke$arity$1 ? fexpr__29731.cljs$core$IFn$_invoke$arity$1(source) : fexpr__29731.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__29722__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29722__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29722__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29722__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__29734 = top_data;
var G__29734__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29734,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29734);
var G__29734__$2 = (cljs.core.truth_((function (){var fexpr__29736 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__29736.cljs$core$IFn$_invoke$arity$1 ? fexpr__29736.cljs$core$IFn$_invoke$arity$1(source) : fexpr__29736.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__29734__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29734__$1);
var G__29734__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29734__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29734__$2);
var G__29734__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29734__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29734__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29734__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29734__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__29741 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29741,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29741,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29741,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29741,(3),null);
var G__29748 = top_data;
var G__29748__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29748,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__29748);
var G__29748__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29748__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__29748__$1);
var G__29748__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29748__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__29748__$2);
var G__29748__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29748__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29748__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29748__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29748__$4;
}

break;
case "execution":
var vec__29759 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29759,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29759,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29759,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29759,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__29678_SHARP_){
var or__4185__auto__ = (p1__29678_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__29765 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__29765.cljs$core$IFn$_invoke$arity$1 ? fexpr__29765.cljs$core$IFn$_invoke$arity$1(p1__29678_SHARP_) : fexpr__29765.call(null,p1__29678_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__29774 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__29774__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29774,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__29774);
var G__29774__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29774__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29774__$1);
var G__29774__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29774__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__29774__$2);
var G__29774__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29774__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__29774__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29774__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29774__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29714__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__29802){
var map__29803 = p__29802;
var map__29803__$1 = (((((!((map__29803 == null))))?(((((map__29803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29803):map__29803);
var triage_data = map__29803__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29803__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29803__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29803__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29803__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29803__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29803__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29803__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29803__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__29836 = phase;
var G__29836__$1 = (((G__29836 instanceof cljs.core.Keyword))?G__29836.fqn:null);
switch (G__29836__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__29843 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__29844 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29845 = loc;
var G__29846 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29851_30222 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29852_30223 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29853_30224 = true;
var _STAR_print_fn_STAR__temp_val__29854_30225 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29853_30224);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29854_30225);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29787_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__29787_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29852_30223);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29851_30222);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__29843,G__29844,G__29845,G__29846) : format.call(null,G__29843,G__29844,G__29845,G__29846));

break;
case "macroexpansion":
var G__29865 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__29866 = cause_type;
var G__29867 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29868 = loc;
var G__29869 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29865,G__29866,G__29867,G__29868,G__29869) : format.call(null,G__29865,G__29866,G__29867,G__29868,G__29869));

break;
case "compile-syntax-check":
var G__29872 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__29873 = cause_type;
var G__29874 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29875 = loc;
var G__29876 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29872,G__29873,G__29874,G__29875,G__29876) : format.call(null,G__29872,G__29873,G__29874,G__29875,G__29876));

break;
case "compilation":
var G__29879 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__29880 = cause_type;
var G__29881 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29882 = loc;
var G__29883 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29879,G__29880,G__29881,G__29882,G__29883) : format.call(null,G__29879,G__29880,G__29881,G__29882,G__29883));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__29886 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__29887 = symbol;
var G__29888 = loc;
var G__29889 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29897_30248 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29898_30249 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29899_30250 = true;
var _STAR_print_fn_STAR__temp_val__29900_30251 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29899_30250);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29900_30251);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29793_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__29793_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29898_30249);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29897_30248);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__29886,G__29887,G__29888,G__29889) : format.call(null,G__29886,G__29887,G__29888,G__29889));
} else {
var G__29917 = "Execution error%s at %s(%s).\n%s\n";
var G__29918 = cause_type;
var G__29919 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29920 = loc;
var G__29921 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29917,G__29918,G__29919,G__29920,G__29921) : format.call(null,G__29917,G__29918,G__29919,G__29920,G__29921));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29836__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
