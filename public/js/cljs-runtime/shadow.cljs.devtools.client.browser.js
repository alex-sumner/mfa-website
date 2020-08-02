goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36368 = arguments.length;
var i__4790__auto___36369 = (0);
while(true){
if((i__4790__auto___36369 < len__4789__auto___36368)){
args__4795__auto__.push((arguments[i__4790__auto___36369]));

var G__36370 = (i__4790__auto___36369 + (1));
i__4790__auto___36369 = G__36370;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36204){
var G__36205 = cljs.core.first(seq36204);
var seq36204__$1 = cljs.core.next(seq36204);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36205,seq36204__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__36214){
var map__36215 = p__36214;
var map__36215__$1 = (((((!((map__36215 == null))))?(((((map__36215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36215):map__36215);
var src = map__36215__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36215__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36215__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36218 = cljs.core.seq(sources);
var chunk__36219 = null;
var count__36220 = (0);
var i__36221 = (0);
while(true){
if((i__36221 < count__36220)){
var map__36228 = chunk__36219.cljs$core$IIndexed$_nth$arity$2(null,i__36221);
var map__36228__$1 = (((((!((map__36228 == null))))?(((((map__36228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36228):map__36228);
var src = map__36228__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36228__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36228__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36228__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36228__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e36230){var e_36371 = e36230;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36371);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36371.message)].join('')));
}

var G__36372 = seq__36218;
var G__36373 = chunk__36219;
var G__36374 = count__36220;
var G__36375 = (i__36221 + (1));
seq__36218 = G__36372;
chunk__36219 = G__36373;
count__36220 = G__36374;
i__36221 = G__36375;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36218);
if(temp__5735__auto__){
var seq__36218__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36218__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36218__$1);
var G__36376 = cljs.core.chunk_rest(seq__36218__$1);
var G__36377 = c__4609__auto__;
var G__36378 = cljs.core.count(c__4609__auto__);
var G__36379 = (0);
seq__36218 = G__36376;
chunk__36219 = G__36377;
count__36220 = G__36378;
i__36221 = G__36379;
continue;
} else {
var map__36231 = cljs.core.first(seq__36218__$1);
var map__36231__$1 = (((((!((map__36231 == null))))?(((((map__36231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36231):map__36231);
var src = map__36231__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36231__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36231__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36231__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36231__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e36233){var e_36380 = e36233;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36380);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36380.message)].join('')));
}

var G__36381 = cljs.core.next(seq__36218__$1);
var G__36382 = null;
var G__36383 = (0);
var G__36384 = (0);
seq__36218 = G__36381;
chunk__36219 = G__36382;
count__36220 = G__36383;
i__36221 = G__36384;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36236 = cljs.core.seq(js_requires);
var chunk__36237 = null;
var count__36238 = (0);
var i__36239 = (0);
while(true){
if((i__36239 < count__36238)){
var js_ns = chunk__36237.cljs$core$IIndexed$_nth$arity$2(null,i__36239);
var require_str_36385 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36385);


var G__36386 = seq__36236;
var G__36387 = chunk__36237;
var G__36388 = count__36238;
var G__36389 = (i__36239 + (1));
seq__36236 = G__36386;
chunk__36237 = G__36387;
count__36238 = G__36388;
i__36239 = G__36389;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36236);
if(temp__5735__auto__){
var seq__36236__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36236__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36236__$1);
var G__36390 = cljs.core.chunk_rest(seq__36236__$1);
var G__36391 = c__4609__auto__;
var G__36392 = cljs.core.count(c__4609__auto__);
var G__36393 = (0);
seq__36236 = G__36390;
chunk__36237 = G__36391;
count__36238 = G__36392;
i__36239 = G__36393;
continue;
} else {
var js_ns = cljs.core.first(seq__36236__$1);
var require_str_36394 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36394);


var G__36395 = cljs.core.next(seq__36236__$1);
var G__36396 = null;
var G__36397 = (0);
var G__36398 = (0);
seq__36236 = G__36395;
chunk__36237 = G__36396;
count__36238 = G__36397;
i__36239 = G__36398;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__36242 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__36242) : callback.call(null,G__36242));
} else {
var G__36243 = shadow.cljs.devtools.client.env.files_url();
var G__36244 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__36245 = "POST";
var G__36246 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__36247 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__36243,G__36244,G__36245,G__36246,G__36247);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__36249){
var map__36250 = p__36249;
var map__36250__$1 = (((((!((map__36250 == null))))?(((((map__36250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36250):map__36250);
var msg = map__36250__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36250__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36250__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__36252 = info;
var map__36252__$1 = (((((!((map__36252 == null))))?(((((map__36252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36252):map__36252);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36252__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36252__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36254(s__36255){
return (new cljs.core.LazySeq(null,(function (){
var s__36255__$1 = s__36255;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36255__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__36260 = cljs.core.first(xs__6292__auto__);
var map__36260__$1 = (((((!((map__36260 == null))))?(((((map__36260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36260):map__36260);
var src = map__36260__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36260__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36260__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__36255__$1,map__36260,map__36260__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36252,map__36252__$1,sources,compiled,map__36250,map__36250__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36254_$_iter__36256(s__36257){
return (new cljs.core.LazySeq(null,((function (s__36255__$1,map__36260,map__36260__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36252,map__36252__$1,sources,compiled,map__36250,map__36250__$1,msg,info,reload_info){
return (function (){
var s__36257__$1 = s__36257;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36257__$1);
if(temp__5735__auto____$1){
var s__36257__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36257__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__36257__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__36259 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__36258 = (0);
while(true){
if((i__36258 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__36258);
cljs.core.chunk_append(b__36259,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36399 = (i__36258 + (1));
i__36258 = G__36399;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36259),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36254_$_iter__36256(cljs.core.chunk_rest(s__36257__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36259),null);
}
} else {
var warning = cljs.core.first(s__36257__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36254_$_iter__36256(cljs.core.rest(s__36257__$2)));
}
} else {
return null;
}
break;
}
});})(s__36255__$1,map__36260,map__36260__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36252,map__36252__$1,sources,compiled,map__36250,map__36250__$1,msg,info,reload_info))
,null,null));
});})(s__36255__$1,map__36260,map__36260__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36252,map__36252__$1,sources,compiled,map__36250,map__36250__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36254(cljs.core.rest(s__36255__$1)));
} else {
var G__36400 = cljs.core.rest(s__36255__$1);
s__36255__$1 = G__36400;
continue;
}
} else {
var G__36401 = cljs.core.rest(s__36255__$1);
s__36255__$1 = G__36401;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__36262_36402 = cljs.core.seq(warnings);
var chunk__36263_36403 = null;
var count__36264_36404 = (0);
var i__36265_36405 = (0);
while(true){
if((i__36265_36405 < count__36264_36404)){
var map__36270_36406 = chunk__36263_36403.cljs$core$IIndexed$_nth$arity$2(null,i__36265_36405);
var map__36270_36407__$1 = (((((!((map__36270_36406 == null))))?(((((map__36270_36406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36270_36406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36270_36406):map__36270_36406);
var w_36408 = map__36270_36407__$1;
var msg_36409__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36270_36407__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36270_36407__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36270_36407__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36270_36407__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36412)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36410),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36411),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36409__$1)].join(''));


var G__36413 = seq__36262_36402;
var G__36414 = chunk__36263_36403;
var G__36415 = count__36264_36404;
var G__36416 = (i__36265_36405 + (1));
seq__36262_36402 = G__36413;
chunk__36263_36403 = G__36414;
count__36264_36404 = G__36415;
i__36265_36405 = G__36416;
continue;
} else {
var temp__5735__auto___36417 = cljs.core.seq(seq__36262_36402);
if(temp__5735__auto___36417){
var seq__36262_36418__$1 = temp__5735__auto___36417;
if(cljs.core.chunked_seq_QMARK_(seq__36262_36418__$1)){
var c__4609__auto___36419 = cljs.core.chunk_first(seq__36262_36418__$1);
var G__36420 = cljs.core.chunk_rest(seq__36262_36418__$1);
var G__36421 = c__4609__auto___36419;
var G__36422 = cljs.core.count(c__4609__auto___36419);
var G__36423 = (0);
seq__36262_36402 = G__36420;
chunk__36263_36403 = G__36421;
count__36264_36404 = G__36422;
i__36265_36405 = G__36423;
continue;
} else {
var map__36273_36424 = cljs.core.first(seq__36262_36418__$1);
var map__36273_36425__$1 = (((((!((map__36273_36424 == null))))?(((((map__36273_36424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36273_36424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36273_36424):map__36273_36424);
var w_36426 = map__36273_36425__$1;
var msg_36427__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36273_36425__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36273_36425__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36273_36425__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36273_36425__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36430)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36428),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36429),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36427__$1)].join(''));


var G__36431 = cljs.core.next(seq__36262_36418__$1);
var G__36432 = null;
var G__36433 = (0);
var G__36434 = (0);
seq__36262_36402 = G__36431;
chunk__36263_36403 = G__36432;
count__36264_36404 = G__36433;
i__36265_36405 = G__36434;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__36276){
var map__36277 = p__36276;
var map__36277__$1 = (((((!((map__36277 == null))))?(((((map__36277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36277):map__36277);
var src = map__36277__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36277__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36277__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36279){
var map__36280 = p__36279;
var map__36280__$1 = (((((!((map__36280 == null))))?(((((map__36280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36280):map__36280);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36280__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__36282){
var map__36283 = p__36282;
var map__36283__$1 = (((((!((map__36283 == null))))?(((((map__36283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36283):map__36283);
var rc = map__36283__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36283__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__36248_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36248_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__36285){
var map__36286 = p__36285;
var map__36286__$1 = (((((!((map__36286 == null))))?(((((map__36286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36286):map__36286);
var msg = map__36286__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36286__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36288 = cljs.core.seq(updates);
var chunk__36290 = null;
var count__36291 = (0);
var i__36292 = (0);
while(true){
if((i__36292 < count__36291)){
var path = chunk__36290.cljs$core$IIndexed$_nth$arity$2(null,i__36292);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36318_36435 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36321_36436 = null;
var count__36322_36437 = (0);
var i__36323_36438 = (0);
while(true){
if((i__36323_36438 < count__36322_36437)){
var node_36439 = chunk__36321_36436.cljs$core$IIndexed$_nth$arity$2(null,i__36323_36438);
var path_match_36440 = shadow.cljs.devtools.client.browser.match_paths(node_36439.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36440)){
var new_link_36441 = (function (){var G__36328 = node_36439.cloneNode(true);
G__36328.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36440),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36328;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36440], 0));

goog.dom.insertSiblingAfter(new_link_36441,node_36439);

goog.dom.removeNode(node_36439);


var G__36442 = seq__36318_36435;
var G__36443 = chunk__36321_36436;
var G__36444 = count__36322_36437;
var G__36445 = (i__36323_36438 + (1));
seq__36318_36435 = G__36442;
chunk__36321_36436 = G__36443;
count__36322_36437 = G__36444;
i__36323_36438 = G__36445;
continue;
} else {
var G__36446 = seq__36318_36435;
var G__36447 = chunk__36321_36436;
var G__36448 = count__36322_36437;
var G__36449 = (i__36323_36438 + (1));
seq__36318_36435 = G__36446;
chunk__36321_36436 = G__36447;
count__36322_36437 = G__36448;
i__36323_36438 = G__36449;
continue;
}
} else {
var temp__5735__auto___36450 = cljs.core.seq(seq__36318_36435);
if(temp__5735__auto___36450){
var seq__36318_36451__$1 = temp__5735__auto___36450;
if(cljs.core.chunked_seq_QMARK_(seq__36318_36451__$1)){
var c__4609__auto___36452 = cljs.core.chunk_first(seq__36318_36451__$1);
var G__36453 = cljs.core.chunk_rest(seq__36318_36451__$1);
var G__36454 = c__4609__auto___36452;
var G__36455 = cljs.core.count(c__4609__auto___36452);
var G__36456 = (0);
seq__36318_36435 = G__36453;
chunk__36321_36436 = G__36454;
count__36322_36437 = G__36455;
i__36323_36438 = G__36456;
continue;
} else {
var node_36457 = cljs.core.first(seq__36318_36451__$1);
var path_match_36458 = shadow.cljs.devtools.client.browser.match_paths(node_36457.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36458)){
var new_link_36459 = (function (){var G__36329 = node_36457.cloneNode(true);
G__36329.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36458),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36329;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36458], 0));

goog.dom.insertSiblingAfter(new_link_36459,node_36457);

goog.dom.removeNode(node_36457);


var G__36460 = cljs.core.next(seq__36318_36451__$1);
var G__36461 = null;
var G__36462 = (0);
var G__36463 = (0);
seq__36318_36435 = G__36460;
chunk__36321_36436 = G__36461;
count__36322_36437 = G__36462;
i__36323_36438 = G__36463;
continue;
} else {
var G__36464 = cljs.core.next(seq__36318_36451__$1);
var G__36465 = null;
var G__36466 = (0);
var G__36467 = (0);
seq__36318_36435 = G__36464;
chunk__36321_36436 = G__36465;
count__36322_36437 = G__36466;
i__36323_36438 = G__36467;
continue;
}
}
} else {
}
}
break;
}


var G__36468 = seq__36288;
var G__36469 = chunk__36290;
var G__36470 = count__36291;
var G__36471 = (i__36292 + (1));
seq__36288 = G__36468;
chunk__36290 = G__36469;
count__36291 = G__36470;
i__36292 = G__36471;
continue;
} else {
var G__36472 = seq__36288;
var G__36473 = chunk__36290;
var G__36474 = count__36291;
var G__36475 = (i__36292 + (1));
seq__36288 = G__36472;
chunk__36290 = G__36473;
count__36291 = G__36474;
i__36292 = G__36475;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36288);
if(temp__5735__auto__){
var seq__36288__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36288__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36288__$1);
var G__36476 = cljs.core.chunk_rest(seq__36288__$1);
var G__36477 = c__4609__auto__;
var G__36478 = cljs.core.count(c__4609__auto__);
var G__36479 = (0);
seq__36288 = G__36476;
chunk__36290 = G__36477;
count__36291 = G__36478;
i__36292 = G__36479;
continue;
} else {
var path = cljs.core.first(seq__36288__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36330_36480 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36333_36481 = null;
var count__36334_36482 = (0);
var i__36335_36483 = (0);
while(true){
if((i__36335_36483 < count__36334_36482)){
var node_36484 = chunk__36333_36481.cljs$core$IIndexed$_nth$arity$2(null,i__36335_36483);
var path_match_36485 = shadow.cljs.devtools.client.browser.match_paths(node_36484.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36485)){
var new_link_36486 = (function (){var G__36340 = node_36484.cloneNode(true);
G__36340.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36485),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36340;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36485], 0));

goog.dom.insertSiblingAfter(new_link_36486,node_36484);

goog.dom.removeNode(node_36484);


var G__36487 = seq__36330_36480;
var G__36488 = chunk__36333_36481;
var G__36489 = count__36334_36482;
var G__36490 = (i__36335_36483 + (1));
seq__36330_36480 = G__36487;
chunk__36333_36481 = G__36488;
count__36334_36482 = G__36489;
i__36335_36483 = G__36490;
continue;
} else {
var G__36491 = seq__36330_36480;
var G__36492 = chunk__36333_36481;
var G__36493 = count__36334_36482;
var G__36494 = (i__36335_36483 + (1));
seq__36330_36480 = G__36491;
chunk__36333_36481 = G__36492;
count__36334_36482 = G__36493;
i__36335_36483 = G__36494;
continue;
}
} else {
var temp__5735__auto___36495__$1 = cljs.core.seq(seq__36330_36480);
if(temp__5735__auto___36495__$1){
var seq__36330_36496__$1 = temp__5735__auto___36495__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36330_36496__$1)){
var c__4609__auto___36497 = cljs.core.chunk_first(seq__36330_36496__$1);
var G__36498 = cljs.core.chunk_rest(seq__36330_36496__$1);
var G__36499 = c__4609__auto___36497;
var G__36500 = cljs.core.count(c__4609__auto___36497);
var G__36501 = (0);
seq__36330_36480 = G__36498;
chunk__36333_36481 = G__36499;
count__36334_36482 = G__36500;
i__36335_36483 = G__36501;
continue;
} else {
var node_36502 = cljs.core.first(seq__36330_36496__$1);
var path_match_36503 = shadow.cljs.devtools.client.browser.match_paths(node_36502.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36503)){
var new_link_36504 = (function (){var G__36341 = node_36502.cloneNode(true);
G__36341.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36503),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36341;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36503], 0));

goog.dom.insertSiblingAfter(new_link_36504,node_36502);

goog.dom.removeNode(node_36502);


var G__36505 = cljs.core.next(seq__36330_36496__$1);
var G__36506 = null;
var G__36507 = (0);
var G__36508 = (0);
seq__36330_36480 = G__36505;
chunk__36333_36481 = G__36506;
count__36334_36482 = G__36507;
i__36335_36483 = G__36508;
continue;
} else {
var G__36509 = cljs.core.next(seq__36330_36496__$1);
var G__36510 = null;
var G__36511 = (0);
var G__36512 = (0);
seq__36330_36480 = G__36509;
chunk__36333_36481 = G__36510;
count__36334_36482 = G__36511;
i__36335_36483 = G__36512;
continue;
}
}
} else {
}
}
break;
}


var G__36513 = cljs.core.next(seq__36288__$1);
var G__36514 = null;
var G__36515 = (0);
var G__36516 = (0);
seq__36288 = G__36513;
chunk__36290 = G__36514;
count__36291 = G__36515;
i__36292 = G__36516;
continue;
} else {
var G__36517 = cljs.core.next(seq__36288__$1);
var G__36518 = null;
var G__36519 = (0);
var G__36520 = (0);
seq__36288 = G__36517;
chunk__36290 = G__36518;
count__36291 = G__36519;
i__36292 = G__36520;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__36342){
var map__36343 = p__36342;
var map__36343__$1 = (((((!((map__36343 == null))))?(((((map__36343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36343):map__36343);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36343__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36343__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__36345,done){
var map__36346 = p__36345;
var map__36346__$1 = (((((!((map__36346 == null))))?(((((map__36346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36346):map__36346);
var msg = map__36346__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36346__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36346__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36346__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36346__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36348){
var map__36349 = p__36348;
var map__36349__$1 = (((((!((map__36349 == null))))?(((((map__36349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36349):map__36349);
var src = map__36349__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36349__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e36351){var e = e36351;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__36352,done){
var map__36353 = p__36352;
var map__36353__$1 = (((((!((map__36353 == null))))?(((((map__36353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36353):map__36353);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36353__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36353__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__36355){
var map__36356 = p__36355;
var map__36356__$1 = (((((!((map__36356 == null))))?(((((map__36356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36356):map__36356);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36356__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36356__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__36358,done){
var map__36359 = p__36358;
var map__36359__$1 = (((((!((map__36359 == null))))?(((((map__36359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36359):map__36359);
var msg = map__36359__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36359__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__36361_36521 = type;
var G__36361_36522__$1 = (((G__36361_36521 instanceof cljs.core.Keyword))?G__36361_36521.fqn:null);
switch (G__36361_36522__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__36362 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__36363 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__36364 = "POST";
var G__36365 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__36366 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__36362,G__36363,G__36364,G__36365,G__36366);
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e36367){var e = e36367;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___36524 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___36524)){
var s_36525 = temp__5735__auto___36524;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_36525.onclose = (function (e){
return null;
}));

s_36525.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
