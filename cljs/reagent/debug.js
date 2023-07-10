// Compiled by ClojureScript 1.10.764 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__3878__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__3878 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3879__i = 0, G__3879__a = new Array(arguments.length -  0);
while (G__3879__i < G__3879__a.length) {G__3879__a[G__3879__i] = arguments[G__3879__i + 0]; ++G__3879__i;}
  args = new cljs.core.IndexedSeq(G__3879__a,0,null);
} 
return G__3878__delegate.call(this,args);};
G__3878.cljs$lang$maxFixedArity = 0;
G__3878.cljs$lang$applyTo = (function (arglist__3880){
var args = cljs.core.seq(arglist__3880);
return G__3878__delegate(args);
});
G__3878.cljs$core$IFn$_invoke$arity$variadic = G__3878__delegate;
return G__3878;
})()
);

(o.error = (function() { 
var G__3881__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__3881 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3882__i = 0, G__3882__a = new Array(arguments.length -  0);
while (G__3882__i < G__3882__a.length) {G__3882__a[G__3882__i] = arguments[G__3882__i + 0]; ++G__3882__i;}
  args = new cljs.core.IndexedSeq(G__3882__a,0,null);
} 
return G__3881__delegate.call(this,args);};
G__3881.cljs$lang$maxFixedArity = 0;
G__3881.cljs$lang$applyTo = (function (arglist__3883){
var args = cljs.core.seq(arglist__3883);
return G__3881__delegate(args);
});
G__3881.cljs$core$IFn$_invoke$arity$variadic = G__3881__delegate;
return G__3881;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
