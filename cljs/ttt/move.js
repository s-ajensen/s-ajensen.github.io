// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('ttt.move');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ttt.util');
ttt.move.move = (function ttt$move$move(n,t,board){
if((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board,n) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board,n,t);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["tile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"is already occupied!"].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.str.cljs$core$IFn$_invoke$arity$1(board)], null));
}
});
ttt.move.cur_token = (function ttt$move$cur_token(board){
var x = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7907_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("X",p1__7907_SHARP_);
}),board));
var y = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7908_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("O",p1__7908_SHARP_);
}),board));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return "X";
} else {
return "O";
}
});
ttt.move.next_token = (function ttt$move$next_token(board){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ttt.move.cur_token(board),"X")){
return "O";
} else {
return "X";
}
});
ttt.move.open_moves = (function ttt$move$open_moves(board){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7909_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__7909_SHARP_),null);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,board)));
});
ttt.move.reverse_diag = (function ttt$move$reverse_diag(board){
return cljs.core.flatten(cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(ttt.util.length(board),board)));
});
ttt.move.winnable_lines = (function ttt$move$winnable_lines(board){
var length = ttt.util.length(board);
var rows = cljs.core.partition.cljs$core$IFn$_invoke$arity$2(length,board);
var cols = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7910_SHARP_){
return cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2(length,p1__7910_SHARP_);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(length,cljs.core.iterate(cljs.core.rest,board)));
var diag = (new cljs.core.List(null,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((length + (1)),board),(new cljs.core.List(null,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((length + (1)),ttt.move.reverse_diag(board)),null,(1),null)),(2),null));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(rows,cols,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([diag], 0));
});
ttt.move.win_QMARK_ = (function ttt$move$win_QMARK_(board){
return cljs.core.some((function (p1__7914_SHARP_){
return (!(cljs.core.every_QMARK_(cljs.core.nil_QMARK_,p1__7914_SHARP_)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7913_SHARP_){
return cljs.core.flatten(p1__7913_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7912_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(p1__7912_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7911_SHARP_){
return cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,p1__7911_SHARP_);
}),ttt.move.winnable_lines(board)))));
});
ttt.move.tie_QMARK_ = (function ttt$move$tie_QMARK_(board){
return ((cljs.core.not(ttt.move.win_QMARK_(board))) && (cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,board))));
});
ttt.move.game_over_QMARK_ = (function ttt$move$game_over_QMARK_(board){
var or__4126__auto__ = ttt.move.win_QMARK_(board);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ttt.move.tie_QMARK_(board);
}
});
ttt.move.winner = (function ttt$move$winner(board){
if(ttt.move.tie_QMARK_(board)){
return cljs.core.cst$kw$tie;
} else {
if(cljs.core.not(ttt.move.win_QMARK_(board))){
return null;
} else {
return ttt.move.next_token(board);

}
}
});
ttt.move.possible_moves = (function ttt$move$possible_moves(board){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7915_SHARP_){
return ttt.move.move(p1__7915_SHARP_,ttt.move.cur_token(board),board);
}),ttt.move.open_moves(board));
});
ttt.move.eval_pos = (function ttt$move$eval_pos(board,depth,maximizing_QMARK_){
if(cljs.core.truth_(ttt.move.win_QMARK_(board))){
return ((cljs.core.truth_(maximizing_QMARK_)?(1):(-1)) * (depth + (10)));
} else {
if(ttt.move.tie_QMARK_(board)){
return (0);
} else {
return null;
}
}
});
ttt.move.minimax = (function ttt$move$minimax(board,depth,maximizing_QMARK_){
if(cljs.core.truth_(ttt.move.game_over_QMARK_(board))){
return ttt.move.eval_pos(board,depth,maximizing_QMARK_);
} else {
if((depth === (0))){
return (0);
} else {
if(cljs.core.truth_(maximizing_QMARK_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7916_SHARP_){
var G__7918 = p1__7916_SHARP_;
var G__7919 = (depth - (1));
var G__7920 = false;
return (ttt.move.minimax.cljs$core$IFn$_invoke$arity$3 ? ttt.move.minimax.cljs$core$IFn$_invoke$arity$3(G__7918,G__7919,G__7920) : ttt.move.minimax.call(null,G__7918,G__7919,G__7920));
}),ttt.move.possible_moves(board)));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7917_SHARP_){
var G__7921 = p1__7917_SHARP_;
var G__7922 = (depth - (1));
var G__7923 = true;
return (ttt.move.minimax.cljs$core$IFn$_invoke$arity$3 ? ttt.move.minimax.cljs$core$IFn$_invoke$arity$3(G__7921,G__7922,G__7923) : ttt.move.minimax.call(null,G__7921,G__7922,G__7923));
}),ttt.move.possible_moves(board)));

}
}
}
});
ttt.move.full_depth = (10);
ttt.move.performant_depth = (4);
ttt.move.get_depth = (function ttt$move$get_depth(board){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),ttt.util.length(board))){
return ttt.move.full_depth;
} else {
return ttt.move.performant_depth;
}
});
if((typeof ttt !== 'undefined') && (typeof ttt.move !== 'undefined') && (typeof ttt.move.next_move !== 'undefined')){
} else {
ttt.move.next_move = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__7924 = cljs.core.get_global_hierarchy;
return (fexpr__7924.cljs$core$IFn$_invoke$arity$0 ? fexpr__7924.cljs$core$IFn$_invoke$arity$0() : fexpr__7924.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("ttt.move","next-move"),(function (difficulty,board){
return difficulty;
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
ttt.move.next_move.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,board){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,(function (p1__7925_SHARP_){
return ttt.move.minimax(p1__7925_SHARP_,ttt.move.get_depth(board),true);
}),ttt.move.possible_moves(board));
}));
ttt.move.next_move.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$easy,(function (_,board){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.min_key,(function (p1__7926_SHARP_){
return ttt.move.minimax(p1__7926_SHARP_,ttt.move.get_depth(board),true);
}),ttt.move.possible_moves(board));
}));
ttt.move.next_move.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$med,(function (_,board){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,(function (p1__7927_SHARP_){
return ttt.move.minimax(p1__7927_SHARP_,(2),true);
}),ttt.move.possible_moves(board));
}));
