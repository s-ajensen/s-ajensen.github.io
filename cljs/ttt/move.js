// Compiled by ClojureScript 1.10.764 {}
goog.provide('ttt.move');
goog.require('cljs.core');
goog.require('ttt.util');
ttt.move.move = (function ttt$move$move(n,t,board){
if((cljs.core.nth.call(null,board,n) == null)){
return cljs.core.assoc.call(null,board,n,t);
} else {
throw cljs.core.ex_info.call(null,["tile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"is already occupied!"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.str.cljs$core$IFn$_invoke$arity$1(board)], null));
}
});
ttt.move.cur_token = (function ttt$move$cur_token(board){
var x = cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__3808_SHARP_){
return cljs.core._EQ_.call(null,"X",p1__3808_SHARP_);
}),board));
var y = cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__3809_SHARP_){
return cljs.core._EQ_.call(null,"O",p1__3809_SHARP_);
}),board));
if(cljs.core._EQ_.call(null,x,y)){
return "X";
} else {
return "O";
}
});
ttt.move.next_token = (function ttt$move$next_token(board){
if(cljs.core._EQ_.call(null,ttt.move.cur_token.call(null,board),"X")){
return "O";
} else {
return "X";
}
});
ttt.move.open_moves = (function ttt$move$open_moves(board){
return cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,(function (p1__3810_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,p1__3810_SHARP_),null);
}),cljs.core.map_indexed.call(null,cljs.core.vector,board)));
});
ttt.move.reverse_diag = (function ttt$move$reverse_diag(board){
return cljs.core.flatten.call(null,cljs.core.reverse.call(null,cljs.core.partition.call(null,ttt.util.length.call(null,board),board)));
});
ttt.move.winnable_lines = (function ttt$move$winnable_lines(board){
var length = ttt.util.length.call(null,board);
var rows = cljs.core.partition.call(null,length,board);
var cols = cljs.core.map.call(null,(function (p1__3811_SHARP_){
return cljs.core.take_nth.call(null,length,p1__3811_SHARP_);
}),cljs.core.take.call(null,length,cljs.core.iterate.call(null,cljs.core.rest,board)));
var diag = (new cljs.core.List(null,cljs.core.take_nth.call(null,(length + (1)),board),(new cljs.core.List(null,cljs.core.take_nth.call(null,(length + (1)),ttt.move.reverse_diag.call(null,board)),null,(1),null)),(2),null));
return cljs.core.concat.call(null,rows,cols,diag);
});
ttt.move.win_QMARK_ = (function ttt$move$win_QMARK_(board){
return cljs.core.some.call(null,(function (p1__3815_SHARP_){
return (!(cljs.core.every_QMARK_.call(null,cljs.core.nil_QMARK_,p1__3815_SHARP_)));
}),cljs.core.map.call(null,(function (p1__3814_SHARP_){
return cljs.core.flatten.call(null,p1__3814_SHARP_);
}),cljs.core.filter.call(null,(function (p1__3813_SHARP_){
return cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,p1__3813_SHARP_));
}),cljs.core.map.call(null,(function (p1__3812_SHARP_){
return cljs.core.partition_by.call(null,cljs.core.identity,p1__3812_SHARP_);
}),ttt.move.winnable_lines.call(null,board)))));
});
ttt.move.tie_QMARK_ = (function ttt$move$tie_QMARK_(board){
return ((cljs.core.not.call(null,ttt.move.win_QMARK_.call(null,board))) && (cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,cljs.core.nil_QMARK_,board))));
});
ttt.move.game_over_QMARK_ = (function ttt$move$game_over_QMARK_(board){
var or__4126__auto__ = ttt.move.win_QMARK_.call(null,board);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ttt.move.tie_QMARK_.call(null,board);
}
});
ttt.move.winner = (function ttt$move$winner(board){
if(ttt.move.tie_QMARK_.call(null,board)){
return new cljs.core.Keyword(null,"tie","tie",-487201694);
} else {
if(cljs.core.not.call(null,ttt.move.win_QMARK_.call(null,board))){
return null;
} else {
return ttt.move.next_token.call(null,board);

}
}
});
ttt.move.possible_moves = (function ttt$move$possible_moves(board){
return cljs.core.map.call(null,(function (p1__3816_SHARP_){
return ttt.move.move.call(null,p1__3816_SHARP_,ttt.move.cur_token.call(null,board),board);
}),ttt.move.open_moves.call(null,board));
});
ttt.move.eval_pos = (function ttt$move$eval_pos(board,depth,maximizing_QMARK_){
if(cljs.core.truth_(ttt.move.win_QMARK_.call(null,board))){
return ((cljs.core.truth_(maximizing_QMARK_)?(1):(-1)) * (depth + (10)));
} else {
if(ttt.move.tie_QMARK_.call(null,board)){
return (0);
} else {
return null;
}
}
});
ttt.move.minimax = (function ttt$move$minimax(board,depth,maximizing_QMARK_){
if(cljs.core.truth_(ttt.move.game_over_QMARK_.call(null,board))){
return ttt.move.eval_pos.call(null,board,depth,maximizing_QMARK_);
} else {
if((depth === (0))){
return (0);
} else {
if(cljs.core.truth_(maximizing_QMARK_)){
return cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,(function (p1__3817_SHARP_){
return ttt.move.minimax.call(null,p1__3817_SHARP_,(depth - (1)),false);
}),ttt.move.possible_moves.call(null,board)));
} else {
return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__3818_SHARP_){
return ttt.move.minimax.call(null,p1__3818_SHARP_,(depth - (1)),true);
}),ttt.move.possible_moves.call(null,board)));

}
}
}
});
ttt.move.full_depth = (10);
ttt.move.performant_depth = (4);
ttt.move.get_depth = (function ttt$move$get_depth(board){
if(cljs.core._EQ_.call(null,(3),ttt.util.length.call(null,board))){
return ttt.move.full_depth;
} else {
return ttt.move.performant_depth;
}
});
if((typeof ttt !== 'undefined') && (typeof ttt.move !== 'undefined') && (typeof ttt.move.next_move !== 'undefined')){
} else {
ttt.move.next_move = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ttt.move","next-move"),(function (difficulty,board){
return difficulty;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,ttt.move.next_move,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,board){
return cljs.core.apply.call(null,cljs.core.max_key,(function (p1__3819_SHARP_){
return ttt.move.minimax.call(null,p1__3819_SHARP_,ttt.move.get_depth.call(null,board),true);
}),ttt.move.possible_moves.call(null,board));
}));
cljs.core._add_method.call(null,ttt.move.next_move,new cljs.core.Keyword(null,"easy","easy",315769928),(function (_,board){
return cljs.core.apply.call(null,cljs.core.min_key,(function (p1__3820_SHARP_){
return ttt.move.minimax.call(null,p1__3820_SHARP_,ttt.move.get_depth.call(null,board),true);
}),ttt.move.possible_moves.call(null,board));
}));
cljs.core._add_method.call(null,ttt.move.next_move,new cljs.core.Keyword(null,"med","med",-1154404524),(function (_,board){
return cljs.core.apply.call(null,cljs.core.max_key,(function (p1__3821_SHARP_){
return ttt.move.minimax.call(null,p1__3821_SHARP_,(2),true);
}),ttt.move.possible_moves.call(null,board));
}));

//# sourceMappingURL=move.js.map
