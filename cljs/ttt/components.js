// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('ttt.components');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('ttt.move');
goog.require('ttt.util');
goog.require('ttt.game');
if((typeof ttt !== 'undefined') && (typeof ttt.components !== 'undefined') && (typeof ttt.components.state !== 'undefined')){
} else {
ttt.components.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state,ttt.util.new_game.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$difficulty,cljs.core.cst$kw$hard,cljs.core.cst$kw$mode,cljs.core.cst$kw$pvp,cljs.core.cst$kw$size,cljs.core.cst$kw$3x3], null));
}
ttt.components.update_state_BANG_ = (function ttt$components$update_state_BANG_(_,key,val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ttt.components.state,cljs.core.assoc,key,val);
});
ttt.components.difficulties = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$easy,cljs.core.cst$kw$medium,cljs.core.cst$kw$hard], null);
ttt.components.modes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pvp,cljs.core.cst$kw$pvc,cljs.core.cst$kw$cvp], null);
ttt.components.sizes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$3x3,cljs.core.cst$kw$4x4], null);
ttt.components.check = (function ttt$components$check(attrs,opt){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([opt]),cljs.core.vals(cljs.core.deref(ttt.components.state))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.cst$kw$checked,"checked");
} else {
return attrs;
}
});
ttt.components.radio_menu = (function ttt$components$radio_menu(id,opts){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,id], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4529__auto__ = (function ttt$components$radio_menu_$_iter__8414(s__8415){
return (new cljs.core.LazySeq(null,(function (){
var s__8415__$1 = s__8415;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__8415__$1);
if(temp__5804__auto__){
var s__8415__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8415__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__8415__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__8417 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__8416 = (0);
while(true){
if((i__8416 < size__4528__auto__)){
var opt = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__8416);
cljs.core.chunk_append(b__8417,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,ttt.components.check(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$radio,cljs.core.cst$kw$value,opt,cljs.core.cst$kw$name,id,cljs.core.cst$kw$on_DASH_change,((function (i__8416,opt,c__4527__auto__,size__4528__auto__,b__8417,s__8415__$2,temp__5804__auto__){
return (function (p1__8413_SHARP_){
return ttt.components.update_state_BANG_(p1__8413_SHARP_,id,opt);
});})(i__8416,opt,c__4527__auto__,size__4528__auto__,b__8417,s__8415__$2,temp__5804__auto__))
], null),opt)], null),cljs.core.name(opt)], null));

var G__8418 = (i__8416 + (1));
i__8416 = G__8418;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8417),ttt$components$radio_menu_$_iter__8414(cljs.core.chunk_rest(s__8415__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8417),null);
}
} else {
var opt = cljs.core.first(s__8415__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,ttt.components.check(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$radio,cljs.core.cst$kw$value,opt,cljs.core.cst$kw$name,id,cljs.core.cst$kw$on_DASH_change,((function (opt,s__8415__$2,temp__5804__auto__){
return (function (p1__8413_SHARP_){
return ttt.components.update_state_BANG_(p1__8413_SHARP_,id,opt);
});})(opt,s__8415__$2,temp__5804__auto__))
], null),opt)], null),cljs.core.name(opt)], null),ttt$components$radio_menu_$_iter__8414(cljs.core.rest(s__8415__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(opts);
})())], null);
});
ttt.components.new_game = (function ttt$components$new_game(){
return ttt.components.update_state_BANG_(null,cljs.core.cst$kw$state,ttt.game.build_game(cljs.core.deref(ttt.components.state)));
});
ttt.components.options_bar = (function ttt$components$options_bar(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cljs.core.cst$kw$options], null),ttt.components.radio_menu(cljs.core.cst$kw$difficulty,ttt.components.difficulties),ttt.components.radio_menu(cljs.core.cst$kw$mode,ttt.components.modes),ttt.components.radio_menu(cljs.core.cst$kw$size,ttt.components.sizes),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return ttt.components.new_game();
})], null),"New Game"], null)], null);
});
ttt.components.progress_game = (function ttt$components$progress_game(selection){
return ttt.components.update_state_BANG_(null,cljs.core.cst$kw$state,(function (){var G__8419 = cljs.core.deref(ttt.components.state);
var G__8420 = selection;
return (ttt.game.progress_game.cljs$core$IFn$_invoke$arity$2 ? ttt.game.progress_game.cljs$core$IFn$_invoke$arity$2(G__8419,G__8420) : ttt.game.progress_game.call(null,G__8419,G__8420));
})());
});
ttt.components.board_cell = (function ttt$components$board_cell(cell){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$idx.cljs$core$IFn$_invoke$arity$1(cell),cljs.core.cst$kw$on_DASH_click,(function (){
return ttt.components.progress_game(cljs.core.cst$kw$idx.cljs$core$IFn$_invoke$arity$1(cell));
})], null),(((cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(cell) == null))?"-":cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(cell))], null);
});
ttt.components.board_row = (function ttt$components$board_row(cells){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,(function (){var iter__4529__auto__ = (function ttt$components$board_row_$_iter__8421(s__8422){
return (new cljs.core.LazySeq(null,(function (){
var s__8422__$1 = s__8422;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__8422__$1);
if(temp__5804__auto__){
var s__8422__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8422__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__8422__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__8424 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__8423 = (0);
while(true){
if((i__8423 < size__4528__auto__)){
var cell = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__8423);
cljs.core.chunk_append(b__8424,ttt.components.board_cell(cell));

var G__8425 = (i__8423 + (1));
i__8423 = G__8425;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8424),ttt$components$board_row_$_iter__8421(cljs.core.chunk_rest(s__8422__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8424),null);
}
} else {
var cell = cljs.core.first(s__8422__$2);
return cljs.core.cons(ttt.components.board_cell(cell),ttt$components$board_row_$_iter__8421(cljs.core.rest(s__8422__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cells);
})()], null);
});
ttt.components.idx_board = (function ttt$components$idx_board(board){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,val){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$idx,idx,cljs.core.cst$kw$val,val], null);
}),board);
});
ttt.components.game_board = (function ttt$components$game_board(){
var board = ttt.components.idx_board(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ttt.components.state)));
var rows = cljs.core.partition.cljs$core$IFn$_invoke$arity$2(ttt.util.length(board),board);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,(function (){var iter__4529__auto__ = (function ttt$components$game_board_$_iter__8426(s__8427){
return (new cljs.core.LazySeq(null,(function (){
var s__8427__$1 = s__8427;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__8427__$1);
if(temp__5804__auto__){
var s__8427__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8427__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__8427__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__8429 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__8428 = (0);
while(true){
if((i__8428 < size__4528__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__8428);
cljs.core.chunk_append(b__8429,ttt.components.board_row(row));

var G__8430 = (i__8428 + (1));
i__8428 = G__8430;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8429),ttt$components$game_board_$_iter__8426(cljs.core.chunk_rest(s__8427__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8429),null);
}
} else {
var row = cljs.core.first(s__8427__$2);
return cljs.core.cons(ttt.components.board_row(row),ttt$components$game_board_$_iter__8426(cljs.core.rest(s__8427__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(rows);
})()], null),(cljs.core.truth_(ttt.move.game_over_QMARK_(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ttt.components.state))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Game over!"], null):null)], null);
});
ttt.components.main = (function ttt$components$main(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(ttt.components.state)], 0));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cljs.core.cst$kw$container], null),ttt.components.options_bar(),ttt.components.game_board()], null);
});
