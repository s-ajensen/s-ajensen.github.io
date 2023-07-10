// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('ttt.game');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ttt.move');
goog.require('ttt.util');
ttt.game.build_board = (function ttt$game$build_board(state){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$3x3,ttt.util.new_game.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$4x4,ttt.util.new_game.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((16),null)], 0))], null),cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(state));
});
ttt.game.build_game = (function ttt$game$build_game(state){
var board = ttt.game.build_board(state);
var mode = cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(state);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cvp,mode)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cvc,mode)))){
return ttt.move.move((0),"X",board);
} else {
return board;
}
});
if((typeof ttt !== 'undefined') && (typeof ttt.game !== 'undefined') && (typeof ttt.game.progress_game !== 'undefined')){
} else {
ttt.game.progress_game = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__7930 = cljs.core.get_global_hierarchy;
return (fexpr__7930.cljs$core$IFn$_invoke$arity$0 ? fexpr__7930.cljs$core$IFn$_invoke$arity$0() : fexpr__7930.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("ttt.game","progress-game"),cljs.core.cst$kw$mode,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
ttt.game.progress_game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$pvp,(function (state,selection){
var board = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(state);
return ttt.move.move(selection,ttt.move.cur_token(board),board);
}));
ttt.game.progress_ai = (function ttt$game$progress_ai(state,selection){
var board = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(state);
var new_board = ttt.move.move(selection,ttt.move.cur_token(board),board);
if(cljs.core.not(ttt.move.game_over_QMARK_(new_board))){
var G__7931 = cljs.core.cst$kw$difficulty.cljs$core$IFn$_invoke$arity$1(state);
var G__7932 = new_board;
return (ttt.move.next_move.cljs$core$IFn$_invoke$arity$2 ? ttt.move.next_move.cljs$core$IFn$_invoke$arity$2(G__7931,G__7932) : ttt.move.next_move.call(null,G__7931,G__7932));
} else {
return new_board;
}
});
ttt.game.progress_game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$pvc,(function (state,selection){
return ttt.game.progress_ai(state,selection);
}));
ttt.game.progress_game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$cvp,(function (state,selection){
return ttt.game.progress_ai(state,selection);
}));
ttt.game.progress_game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$cvc,(function (state,selection){
var board = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(state);
while(true){
if(cljs.core.truth_(ttt.move.game_over_QMARK_(board))){
return board;
} else {
var G__7935 = (function (){var G__7933 = cljs.core.cst$kw$difficulty.cljs$core$IFn$_invoke$arity$1(state);
var G__7934 = board;
return (ttt.move.next_move.cljs$core$IFn$_invoke$arity$2 ? ttt.move.next_move.cljs$core$IFn$_invoke$arity$2(G__7933,G__7934) : ttt.move.next_move.call(null,G__7933,G__7934));
})();
board = G__7935;
continue;
}
break;
}
}));
