// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('ttt.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('ttt.components');
ttt.core.main = (function ttt$core$main(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.components.main], null),document.getElementById("app"));
});
goog.exportSymbol('ttt.core.main', ttt.core.main);
ttt.core.main();
