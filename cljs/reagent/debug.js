// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__7771__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__7771 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7772__i = 0, G__7772__a = new Array(arguments.length -  0);
while (G__7772__i < G__7772__a.length) {G__7772__a[G__7772__i] = arguments[G__7772__i + 0]; ++G__7772__i;}
  args = new cljs.core.IndexedSeq(G__7772__a,0,null);
} 
return G__7771__delegate.call(this,args);};
G__7771.cljs$lang$maxFixedArity = 0;
G__7771.cljs$lang$applyTo = (function (arglist__7773){
var args = cljs.core.seq(arglist__7773);
return G__7771__delegate(args);
});
G__7771.cljs$core$IFn$_invoke$arity$variadic = G__7771__delegate;
return G__7771;
})()
);

(o.error = (function() { 
var G__7774__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__7774 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7775__i = 0, G__7775__a = new Array(arguments.length -  0);
while (G__7775__i < G__7775__a.length) {G__7775__a[G__7775__i] = arguments[G__7775__i + 0]; ++G__7775__i;}
  args = new cljs.core.IndexedSeq(G__7775__a,0,null);
} 
return G__7774__delegate.call(this,args);};
G__7774.cljs$lang$maxFixedArity = 0;
G__7774.cljs$lang$applyTo = (function (arglist__7776){
var args = cljs.core.seq(arglist__7776);
return G__7774__delegate(args);
});
G__7774.cljs$core$IFn$_invoke$arity$variadic = G__7774__delegate;
return G__7774;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
