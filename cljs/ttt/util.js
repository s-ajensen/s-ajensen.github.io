// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('ttt.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
ttt.util.start_time = Date.now();
ttt.util.new_game = (function ttt$util$new_game(var_args){
var G__7895 = arguments.length;
switch (G__7895) {
case 0:
return ttt.util.new_game.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___7897 = arguments.length;
var i__4737__auto___7898 = (0);
while(true){
if((i__4737__auto___7898 < len__4736__auto___7897)){
args_arr__4757__auto__.push((arguments[i__4737__auto___7898]));

var G__7899 = (i__4737__auto___7898 + (1));
i__4737__auto___7898 = G__7899;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((0)),(0),null));
return ttt.util.new_game.cljs$core$IFn$_invoke$arity$variadic(argseq__4758__auto__);

}
});

(ttt.util.new_game.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((9),null));
}));

(ttt.util.new_game.cljs$core$IFn$_invoke$arity$variadic = (function (moves){
return cljs.core.vec(cljs.core.flatten(moves));
}));

/** @this {Function} */
(ttt.util.new_game.cljs$lang$applyTo = (function (seq7894){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7894));
}));

(ttt.util.new_game.cljs$lang$maxFixedArity = (0));

ttt.util.length = (function ttt$util$length(board){
return ((function (){var G__7900 = cljs.core.count(board);
return Math.sqrt(G__7900);
})() | (0));
});
ttt.util.as_string = (function ttt$util$as_string(board){
return [clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7901_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [null,"-"], null),p1__7901_SHARP_));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(ttt.util.length(board),board))),"\n"].join('');
});
ttt.util.as_board = (function ttt$util$as_board(string){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7904_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",p1__7904_SHARP_)){
return null;
} else {
return p1__7904_SHARP_;
}
}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7903_SHARP_){
return ((1) < cljs.core.count(p1__7903_SHARP_));
}),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2((function (p1__7902_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",p1__7902_SHARP_);
}),cljs.core.seq(string))))));
});
ttt.util.as_map = (function ttt$util$as_map(string){
return (ttt.util.read_string.cljs$core$IFn$_invoke$arity$1 ? ttt.util.read_string.cljs$core$IFn$_invoke$arity$1(string) : ttt.util.read_string.call(null,string));
});
