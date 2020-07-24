goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29593){
var map__29595 = p__29593;
var map__29595__$1 = (((((!((map__29595 == null))))?(((((map__29595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29595):map__29595);
var m = map__29595__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29595__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29595__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__29606_29935 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29607_29936 = null;
var count__29608_29937 = (0);
var i__29609_29938 = (0);
while(true){
if((i__29609_29938 < count__29608_29937)){
var f_29940 = chunk__29607_29936.cljs$core$IIndexed$_nth$arity$2(null,i__29609_29938);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_29940], 0));


var G__29941 = seq__29606_29935;
var G__29942 = chunk__29607_29936;
var G__29943 = count__29608_29937;
var G__29944 = (i__29609_29938 + (1));
seq__29606_29935 = G__29941;
chunk__29607_29936 = G__29942;
count__29608_29937 = G__29943;
i__29609_29938 = G__29944;
continue;
} else {
var temp__5735__auto___29948 = cljs.core.seq(seq__29606_29935);
if(temp__5735__auto___29948){
var seq__29606_29949__$1 = temp__5735__auto___29948;
if(cljs.core.chunked_seq_QMARK_(seq__29606_29949__$1)){
var c__4609__auto___29950 = cljs.core.chunk_first(seq__29606_29949__$1);
var G__29951 = cljs.core.chunk_rest(seq__29606_29949__$1);
var G__29952 = c__4609__auto___29950;
var G__29953 = cljs.core.count(c__4609__auto___29950);
var G__29954 = (0);
seq__29606_29935 = G__29951;
chunk__29607_29936 = G__29952;
count__29608_29937 = G__29953;
i__29609_29938 = G__29954;
continue;
} else {
var f_29958 = cljs.core.first(seq__29606_29949__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_29958], 0));


var G__29969 = cljs.core.next(seq__29606_29949__$1);
var G__29970 = null;
var G__29971 = (0);
var G__29972 = (0);
seq__29606_29935 = G__29969;
chunk__29607_29936 = G__29970;
count__29608_29937 = G__29971;
i__29609_29938 = G__29972;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29984 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_29984], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_29984)))?cljs.core.second(arglists_29984):arglists_29984)], 0));
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
var seq__29622_30041 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29623_30042 = null;
var count__29624_30043 = (0);
var i__29625_30044 = (0);
while(true){
if((i__29625_30044 < count__29624_30043)){
var vec__29653_30048 = chunk__29623_30042.cljs$core$IIndexed$_nth$arity$2(null,i__29625_30044);
var name_30049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29653_30048,(0),null);
var map__29656_30050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29653_30048,(1),null);
var map__29656_30051__$1 = (((((!((map__29656_30050 == null))))?(((((map__29656_30050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29656_30050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29656_30050):map__29656_30050);
var doc_30052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29656_30051__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30053 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29656_30051__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_30049], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_30053], 0));

if(cljs.core.truth_(doc_30052)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_30052], 0));
} else {
}


var G__30064 = seq__29622_30041;
var G__30065 = chunk__29623_30042;
var G__30066 = count__29624_30043;
var G__30067 = (i__29625_30044 + (1));
seq__29622_30041 = G__30064;
chunk__29623_30042 = G__30065;
count__29624_30043 = G__30066;
i__29625_30044 = G__30067;
continue;
} else {
var temp__5735__auto___30068 = cljs.core.seq(seq__29622_30041);
if(temp__5735__auto___30068){
var seq__29622_30069__$1 = temp__5735__auto___30068;
if(cljs.core.chunked_seq_QMARK_(seq__29622_30069__$1)){
var c__4609__auto___30072 = cljs.core.chunk_first(seq__29622_30069__$1);
var G__30075 = cljs.core.chunk_rest(seq__29622_30069__$1);
var G__30076 = c__4609__auto___30072;
var G__30077 = cljs.core.count(c__4609__auto___30072);
var G__30078 = (0);
seq__29622_30041 = G__30075;
chunk__29623_30042 = G__30076;
count__29624_30043 = G__30077;
i__29625_30044 = G__30078;
continue;
} else {
var vec__29667_30080 = cljs.core.first(seq__29622_30069__$1);
var name_30081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29667_30080,(0),null);
var map__29670_30082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29667_30080,(1),null);
var map__29670_30083__$1 = (((((!((map__29670_30082 == null))))?(((((map__29670_30082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29670_30082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29670_30082):map__29670_30082);
var doc_30084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29670_30083__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29670_30083__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_30081], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_30085], 0));

if(cljs.core.truth_(doc_30084)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_30084], 0));
} else {
}


var G__30097 = cljs.core.next(seq__29622_30069__$1);
var G__30098 = null;
var G__30099 = (0);
var G__30100 = (0);
seq__29622_30041 = G__30097;
chunk__29623_30042 = G__30098;
count__29624_30043 = G__30099;
i__29625_30044 = G__30100;
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

var seq__29677 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29678 = null;
var count__29679 = (0);
var i__29680 = (0);
while(true){
if((i__29680 < count__29679)){
var role = chunk__29678.cljs$core$IIndexed$_nth$arity$2(null,i__29680);
var temp__5735__auto___30110__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___30110__$1)){
var spec_30112 = temp__5735__auto___30110__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_30112)], 0));
} else {
}


var G__30115 = seq__29677;
var G__30116 = chunk__29678;
var G__30117 = count__29679;
var G__30118 = (i__29680 + (1));
seq__29677 = G__30115;
chunk__29678 = G__30116;
count__29679 = G__30117;
i__29680 = G__30118;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__29677);
if(temp__5735__auto____$1){
var seq__29677__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__29677__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__29677__$1);
var G__30121 = cljs.core.chunk_rest(seq__29677__$1);
var G__30122 = c__4609__auto__;
var G__30123 = cljs.core.count(c__4609__auto__);
var G__30124 = (0);
seq__29677 = G__30121;
chunk__29678 = G__30122;
count__29679 = G__30123;
i__29680 = G__30124;
continue;
} else {
var role = cljs.core.first(seq__29677__$1);
var temp__5735__auto___30126__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___30126__$2)){
var spec_30127 = temp__5735__auto___30126__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_30127)], 0));
} else {
}


var G__30129 = cljs.core.next(seq__29677__$1);
var G__30130 = null;
var G__30131 = (0);
var G__30132 = (0);
seq__29677 = G__30129;
chunk__29678 = G__30130;
count__29679 = G__30131;
i__29680 = G__30132;
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
var G__30154 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__30155 = cljs.core.ex_cause(t);
via = G__30154;
t = G__30155;
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
var map__29732 = datafied_throwable;
var map__29732__$1 = (((((!((map__29732 == null))))?(((((map__29732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29732):map__29732);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29732__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29732__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29732__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__29733 = cljs.core.last(via);
var map__29733__$1 = (((((!((map__29733 == null))))?(((((map__29733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29733):map__29733);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29733__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29733__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29733__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__29734 = data;
var map__29734__$1 = (((((!((map__29734 == null))))?(((((map__29734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29734):map__29734);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29734__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29734__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29734__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__29735 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__29735__$1 = (((((!((map__29735 == null))))?(((((map__29735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29735):map__29735);
var top_data = map__29735__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29735__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__29756 = phase;
var G__29756__$1 = (((G__29756 instanceof cljs.core.Keyword))?G__29756.fqn:null);
switch (G__29756__$1) {
case "read-source":
var map__29761 = data;
var map__29761__$1 = (((((!((map__29761 == null))))?(((((map__29761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29761):map__29761);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29761__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29761__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__29770 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__29770__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29770,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29770);
var G__29770__$2 = (cljs.core.truth_((function (){var fexpr__29772 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__29772.cljs$core$IFn$_invoke$arity$1 ? fexpr__29772.cljs$core$IFn$_invoke$arity$1(source) : fexpr__29772.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__29770__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29770__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29770__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29770__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__29777 = top_data;
var G__29777__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29777,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29777);
var G__29777__$2 = (cljs.core.truth_((function (){var fexpr__29779 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__29779.cljs$core$IFn$_invoke$arity$1 ? fexpr__29779.cljs$core$IFn$_invoke$arity$1(source) : fexpr__29779.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__29777__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29777__$1);
var G__29777__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29777__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29777__$2);
var G__29777__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29777__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29777__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29777__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29777__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__29784 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29784,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29784,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29784,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29784,(3),null);
var G__29792 = top_data;
var G__29792__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29792,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__29792);
var G__29792__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29792__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__29792__$1);
var G__29792__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29792__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__29792__$2);
var G__29792__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29792__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29792__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29792__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29792__$4;
}

break;
case "execution":
var vec__29804 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29804,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29804,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29804,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29804,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__29720_SHARP_){
var or__4185__auto__ = (p1__29720_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__29810 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__29810.cljs$core$IFn$_invoke$arity$1 ? fexpr__29810.cljs$core$IFn$_invoke$arity$1(p1__29720_SHARP_) : fexpr__29810.call(null,p1__29720_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__29811 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__29811__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29811,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__29811);
var G__29811__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29811__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29811__$1);
var G__29811__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29811__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__29811__$2);
var G__29811__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29811__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__29811__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29811__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29811__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29756__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__29825){
var map__29826 = p__29825;
var map__29826__$1 = (((((!((map__29826 == null))))?(((((map__29826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29826):map__29826);
var triage_data = map__29826__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29826__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29826__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29826__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29826__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29826__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29826__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29826__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29826__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__29834 = phase;
var G__29834__$1 = (((G__29834 instanceof cljs.core.Keyword))?G__29834.fqn:null);
switch (G__29834__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__29838 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__29839 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29840 = loc;
var G__29841 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29846_30269 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29847_30270 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29848_30271 = true;
var _STAR_print_fn_STAR__temp_val__29849_30272 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29848_30271);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29849_30272);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29823_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__29823_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29847_30270);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29846_30269);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__29838,G__29839,G__29840,G__29841) : format.call(null,G__29838,G__29839,G__29840,G__29841));

break;
case "macroexpansion":
var G__29861 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__29862 = cause_type;
var G__29863 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29864 = loc;
var G__29865 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29861,G__29862,G__29863,G__29864,G__29865) : format.call(null,G__29861,G__29862,G__29863,G__29864,G__29865));

break;
case "compile-syntax-check":
var G__29869 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__29870 = cause_type;
var G__29871 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29872 = loc;
var G__29873 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29869,G__29870,G__29871,G__29872,G__29873) : format.call(null,G__29869,G__29870,G__29871,G__29872,G__29873));

break;
case "compilation":
var G__29876 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__29877 = cause_type;
var G__29878 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29879 = loc;
var G__29880 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29876,G__29877,G__29878,G__29879,G__29880) : format.call(null,G__29876,G__29877,G__29878,G__29879,G__29880));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__29887 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__29888 = symbol;
var G__29889 = loc;
var G__29890 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29896_30297 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29897_30298 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29898_30299 = true;
var _STAR_print_fn_STAR__temp_val__29900_30300 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29898_30299);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29900_30300);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29824_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__29824_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29897_30298);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29896_30297);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__29887,G__29888,G__29889,G__29890) : format.call(null,G__29887,G__29888,G__29889,G__29890));
} else {
var G__29906 = "Execution error%s at %s(%s).\n%s\n";
var G__29907 = cause_type;
var G__29908 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29909 = loc;
var G__29910 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29906,G__29907,G__29908,G__29909,G__29910) : format.call(null,G__29906,G__29907,G__29908,G__29909,G__29910));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29834__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
