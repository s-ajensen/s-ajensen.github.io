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
var G__4164__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__4164 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4165__i = 0, G__4165__a = new Array(arguments.length -  0);
while (G__4165__i < G__4165__a.length) {G__4165__a[G__4165__i] = arguments[G__4165__i + 0]; ++G__4165__i;}
  args = new cljs.core.IndexedSeq(G__4165__a,0,null);
} 
return G__4164__delegate.call(this,args);};
G__4164.cljs$lang$maxFixedArity = 0;
G__4164.cljs$lang$applyTo = (function (arglist__4166){
var args = cljs.core.seq(arglist__4166);
return G__4164__delegate(args);
});
G__4164.cljs$core$IFn$_invoke$arity$variadic = G__4164__delegate;
return G__4164;
})()
);

(o.error = (function() { 
var G__4167__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__4167 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4168__i = 0, G__4168__a = new Array(arguments.length -  0);
while (G__4168__i < G__4168__a.length) {G__4168__a[G__4168__i] = arguments[G__4168__i + 0]; ++G__4168__i;}
  args = new cljs.core.IndexedSeq(G__4168__a,0,null);
} 
return G__4167__delegate.call(this,args);};
G__4167.cljs$lang$maxFixedArity = 0;
G__4167.cljs$lang$applyTo = (function (arglist__4169){
var args = cljs.core.seq(arglist__4169);
return G__4167__delegate(args);
});
G__4167.cljs$core$IFn$_invoke$arity$variadic = G__4167__delegate;
return G__4167;
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
