// Compiled by ClojureScript 1.10.764 {}
goog.provide('ttt.core_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('reagent.core');
goog.require('ttt.components');
goog.require('ttt.util');
ttt.core_spec.contains_like_QMARK_ = (function ttt$core_spec$contains_like_QMARK_(coll,target){
return clojure.set.subset_QMARK_.call(null,clojure.set(target),clojure.set(coll));
});
ttt.core_spec.get_by_type = (function ttt$core_spec$get_by_type(coll,target){
var tags = cljs.core.filter.call(null,cljs.core.sequential_QMARK_,coll);
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.filter.call(null,(function (p1__5504_SHARP_){
return cljs.core._EQ_.call(null,target,cljs.core.first.call(null,p1__5504_SHARP_));
}),tags),(function (){var iter__4529__auto__ = (function ttt$core_spec$get_by_type_$_iter__5505(s__5506){
return (new cljs.core.LazySeq(null,(function (){
var s__5506__$1 = s__5506;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__5506__$1);
if(temp__5804__auto__){
var s__5506__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5506__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__5506__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__5508 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__5507 = (0);
while(true){
if((i__5507 < size__4528__auto__)){
var tag = cljs.core._nth.call(null,c__4527__auto__,i__5507);
cljs.core.chunk_append.call(null,b__5508,ttt.core_spec.get_by_type.call(null,tag,target));

var G__5509 = (i__5507 + (1));
i__5507 = G__5509;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5508),ttt$core_spec$get_by_type_$_iter__5505.call(null,cljs.core.chunk_rest.call(null,s__5506__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5508),null);
}
} else {
var tag = cljs.core.first.call(null,s__5506__$2);
return cljs.core.cons.call(null,ttt.core_spec.get_by_type.call(null,tag,target),ttt$core_spec$get_by_type_$_iter__5505.call(null,cljs.core.rest.call(null,s__5506__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,tags);
})());
});
var description__5041__auto___5516 = speclj.components.new_description.call(null,"state changer",false,"ttt.core-spec");
var _STAR_parent_description_STAR__orig_val__5510_5517 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__5511_5518 = description__5041__auto___5516;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__5511_5518);

try{var seq__5512_5519 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"updates game state",((function (_STAR_parent_description_STAR__orig_val__5510_5517,_STAR_parent_description_STAR__temp_val__5511_5518,description__5041__auto___5516){
return (function (){
ttt.components.update_state_BANG_.call(null,null,new cljs.core.Keyword(null,"some-key","some-key",-1462369503),new cljs.core.Keyword(null,"some-val","some-val",-997293714));

var expected__5174__auto__ = new cljs.core.Keyword(null,"some-val","some-val",-997293714);
var actual__5175__auto__ = new cljs.core.Keyword(null,"some-key","some-key",-1462369503).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.components.state));
if(cljs.core._EQ_.call(null,expected__5174__auto__,actual__5175__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5174__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5174__auto__)),speclj.platform.endl,"     got: ",(((actual__5175__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5175__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__5510_5517,_STAR_parent_description_STAR__temp_val__5511_5518,description__5041__auto___5516))
,false)],null)));
var chunk__5513_5520 = null;
var count__5514_5521 = (0);
var i__5515_5522 = (0);
while(true){
if((i__5515_5522 < count__5514_5521)){
var component__5042__auto___5523 = cljs.core._nth.call(null,chunk__5513_5520,i__5515_5522);
speclj.components.install.call(null,component__5042__auto___5523,description__5041__auto___5516);


var G__5524 = seq__5512_5519;
var G__5525 = chunk__5513_5520;
var G__5526 = count__5514_5521;
var G__5527 = (i__5515_5522 + (1));
seq__5512_5519 = G__5524;
chunk__5513_5520 = G__5525;
count__5514_5521 = G__5526;
i__5515_5522 = G__5527;
continue;
} else {
var temp__5804__auto___5528 = cljs.core.seq.call(null,seq__5512_5519);
if(temp__5804__auto___5528){
var seq__5512_5529__$1 = temp__5804__auto___5528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5512_5529__$1)){
var c__4556__auto___5530 = cljs.core.chunk_first.call(null,seq__5512_5529__$1);
var G__5531 = cljs.core.chunk_rest.call(null,seq__5512_5529__$1);
var G__5532 = c__4556__auto___5530;
var G__5533 = cljs.core.count.call(null,c__4556__auto___5530);
var G__5534 = (0);
seq__5512_5519 = G__5531;
chunk__5513_5520 = G__5532;
count__5514_5521 = G__5533;
i__5515_5522 = G__5534;
continue;
} else {
var component__5042__auto___5535 = cljs.core.first.call(null,seq__5512_5529__$1);
speclj.components.install.call(null,component__5042__auto___5535,description__5041__auto___5516);


var G__5536 = cljs.core.next.call(null,seq__5512_5529__$1);
var G__5537 = null;
var G__5538 = (0);
var G__5539 = (0);
seq__5512_5519 = G__5536;
chunk__5513_5520 = G__5537;
count__5514_5521 = G__5538;
i__5515_5522 = G__5539;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__5510_5517);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5041__auto___5516);
}

var description__5041__auto___5546 = speclj.components.new_description.call(null,"radio menu component",false,"ttt.core-spec");
var _STAR_parent_description_STAR__orig_val__5540_5547 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__5541_5548 = description__5041__auto___5546;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__5541_5548);

try{var seq__5542_5549 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"labels section",((function (_STAR_parent_description_STAR__orig_val__5540_5547,_STAR_parent_description_STAR__temp_val__5541_5548,description__5041__auto___5546){
return (function (){
var menu = ttt.components.radio_menu.call(null,new cljs.core.Keyword(null,"set-id","set-id",675256473),cljs.core.PersistentVector.EMPTY);
var expected__5225__auto___5553 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"set-id","set-id",675256473)], null);
var actual__5226__auto___5554 = menu;
if((actual__5226__auto___5554 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto___5553 == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto___5553)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5225__auto___5553 === 'string') && (typeof actual__5226__auto___5554 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5226__auto___5554.indexOf(expected__5225__auto___5553))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto___5553 == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto___5553)),speclj.platform.endl,"to be in: ",(((actual__5226__auto___5554 == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto___5554))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5225__auto___5553)) && (typeof actual__5226__auto___5554 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5225__auto___5553,actual__5226__auto___5554))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5226__auto___5554 == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto___5554)),speclj.platform.endl,"to match: ",(((expected__5225__auto___5553 == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto___5553))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5226__auto___5554)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5226__auto___5554,expected__5225__auto___5553)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto___5553 == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto___5553)),speclj.platform.endl,"to be a key in: ",(((actual__5226__auto___5554 == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto___5554))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5226__auto___5554)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5224__5227__auto__){
return cljs.core._EQ_.call(null,expected__5225__auto___5553,p1__5224__5227__auto__);
}),actual__5226__auto___5554))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto___5553 == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto___5553)),speclj.platform.endl,"to be in: ",(((actual__5226__auto___5554 == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto___5554))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__5155__auto__ = (((expected__5225__auto___5553 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5225__auto___5553)));
var type_b__5156__auto__ = (((actual__5226__auto___5554 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5226__auto___5554)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5155__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5156__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__5225__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null);
var actual__5226__auto__ = menu;
if((actual__5226__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5225__auto__ === 'string') && (typeof actual__5226__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5226__auto__.indexOf(expected__5225__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto__)),speclj.platform.endl,"to be in: ",(((actual__5226__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5225__auto__)) && (typeof actual__5226__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5225__auto__,actual__5226__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5226__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto__)),speclj.platform.endl,"to match: ",(((expected__5225__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5226__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5226__auto__,expected__5225__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__5226__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5226__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5224__5227__auto__){
return cljs.core._EQ_.call(null,expected__5225__auto__,p1__5224__5227__auto__);
}),actual__5226__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto__)),speclj.platform.endl,"to be in: ",(((actual__5226__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__5155__auto__ = (((expected__5225__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5225__auto__)));
var type_b__5156__auto__ = (((actual__5226__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5226__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5155__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5156__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__5540_5547,_STAR_parent_description_STAR__temp_val__5541_5548,description__5041__auto___5546))
,false),speclj.components.new_characteristic.call(null,"sets value and name for option",((function (_STAR_parent_description_STAR__orig_val__5540_5547,_STAR_parent_description_STAR__temp_val__5541_5548,description__5041__auto___5546){
return (function (){
var menu = ttt.components.radio_menu.call(null,new cljs.core.Keyword(null,"set-id","set-id",675256473),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opt1","opt1",-577916500)], null));
var expected__5225__auto___5555 = new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816);
var actual__5226__auto___5556 = menu;
if((actual__5226__auto___5556 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto___5555 == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto___5555)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5225__auto___5555 === 'string') && (typeof actual__5226__auto___5556 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5226__auto___5556.indexOf(expected__5225__auto___5555))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto___5555 == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto___5555)),speclj.platform.endl,"to be in: ",(((actual__5226__auto___5556 == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto___5556))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5225__auto___5555)) && (typeof actual__5226__auto___5556 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5225__auto___5555,actual__5226__auto___5556))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5226__auto___5556 == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto___5556)),speclj.platform.endl,"to match: ",(((expected__5225__auto___5555 == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto___5555))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5226__auto___5556)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5226__auto___5556,expected__5225__auto___5555)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto___5555 == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto___5555)),speclj.platform.endl,"to be a key in: ",(((actual__5226__auto___5556 == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto___5556))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5226__auto___5556)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5224__5227__auto__){
return cljs.core._EQ_.call(null,expected__5225__auto___5555,p1__5224__5227__auto__);
}),actual__5226__auto___5556))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto___5555 == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto___5555)),speclj.platform.endl,"to be in: ",(((actual__5226__auto___5556 == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto___5556))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__5155__auto__ = (((expected__5225__auto___5555 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5225__auto___5555)));
var type_b__5156__auto__ = (((actual__5226__auto___5556 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5226__auto___5556)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5155__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5156__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__5225__auto___5557 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"set-id","set-id",675256473)], null);
var actual__5226__auto___5558 = menu;
if((actual__5226__auto___5558 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto___5557 == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto___5557)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5225__auto___5557 === 'string') && (typeof actual__5226__auto___5558 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5226__auto___5558.indexOf(expected__5225__auto___5557))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto___5557 == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto___5557)),speclj.platform.endl,"to be in: ",(((actual__5226__auto___5558 == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto___5558))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5225__auto___5557)) && (typeof actual__5226__auto___5558 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5225__auto___5557,actual__5226__auto___5558))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5226__auto___5558 == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto___5558)),speclj.platform.endl,"to match: ",(((expected__5225__auto___5557 == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto___5557))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5226__auto___5558)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5226__auto___5558,expected__5225__auto___5557)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto___5557 == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto___5557)),speclj.platform.endl,"to be a key in: ",(((actual__5226__auto___5558 == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto___5558))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5226__auto___5558)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5224__5227__auto__){
return cljs.core._EQ_.call(null,expected__5225__auto___5557,p1__5224__5227__auto__);
}),actual__5226__auto___5558))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto___5557 == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto___5557)),speclj.platform.endl,"to be in: ",(((actual__5226__auto___5558 == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto___5558))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__5155__auto__ = (((expected__5225__auto___5557 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5225__auto___5557)));
var type_b__5156__auto__ = (((actual__5226__auto___5558 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5226__auto___5558)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5155__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5156__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__5225__auto___5559 = "opt1";
var actual__5226__auto___5560 = cljs.core.last.call(null,menu);
if((actual__5226__auto___5560 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto___5559 == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto___5559)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5225__auto___5559 === 'string') && (typeof actual__5226__auto___5560 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5226__auto___5560.indexOf(expected__5225__auto___5559))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto___5559 == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto___5559)),speclj.platform.endl,"to be in: ",(((actual__5226__auto___5560 == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto___5560))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5225__auto___5559)) && (typeof actual__5226__auto___5560 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5225__auto___5559,actual__5226__auto___5560))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5226__auto___5560 == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto___5560)),speclj.platform.endl,"to match: ",(((expected__5225__auto___5559 == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto___5559))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5226__auto___5560)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5226__auto___5560,expected__5225__auto___5559)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto___5559 == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto___5559)),speclj.platform.endl,"to be a key in: ",(((actual__5226__auto___5560 == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto___5560))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5226__auto___5560)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5224__5227__auto__){
return cljs.core._EQ_.call(null,expected__5225__auto___5559,p1__5224__5227__auto__);
}),actual__5226__auto___5560))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto___5559 == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto___5559)),speclj.platform.endl,"to be in: ",(((actual__5226__auto___5560 == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto___5560))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__5155__auto__ = (((expected__5225__auto___5559 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5225__auto___5559)));
var type_b__5156__auto__ = (((actual__5226__auto___5560 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5226__auto___5560)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5155__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5156__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__5225__auto__ = new cljs.core.Keyword(null,"input","input",556931961);
var actual__5226__auto__ = cljs.core.first.call(null,cljs.core.last.call(null,menu));
if((actual__5226__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5225__auto__ === 'string') && (typeof actual__5226__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5226__auto__.indexOf(expected__5225__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto__)),speclj.platform.endl,"to be in: ",(((actual__5226__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5225__auto__)) && (typeof actual__5226__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5225__auto__,actual__5226__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5226__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto__)),speclj.platform.endl,"to match: ",(((expected__5225__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5226__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5226__auto__,expected__5225__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__5226__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5226__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5224__5227__auto__){
return cljs.core._EQ_.call(null,expected__5225__auto__,p1__5224__5227__auto__);
}),actual__5226__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto__)),speclj.platform.endl,"to be in: ",(((actual__5226__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__5155__auto__ = (((expected__5225__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5225__auto__)));
var type_b__5156__auto__ = (((actual__5226__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5226__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5155__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5156__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__5540_5547,_STAR_parent_description_STAR__temp_val__5541_5548,description__5041__auto___5546))
,false)],null)));
var chunk__5543_5550 = null;
var count__5544_5551 = (0);
var i__5545_5552 = (0);
while(true){
if((i__5545_5552 < count__5544_5551)){
var component__5042__auto___5561 = cljs.core._nth.call(null,chunk__5543_5550,i__5545_5552);
speclj.components.install.call(null,component__5042__auto___5561,description__5041__auto___5546);


var G__5562 = seq__5542_5549;
var G__5563 = chunk__5543_5550;
var G__5564 = count__5544_5551;
var G__5565 = (i__5545_5552 + (1));
seq__5542_5549 = G__5562;
chunk__5543_5550 = G__5563;
count__5544_5551 = G__5564;
i__5545_5552 = G__5565;
continue;
} else {
var temp__5804__auto___5566 = cljs.core.seq.call(null,seq__5542_5549);
if(temp__5804__auto___5566){
var seq__5542_5567__$1 = temp__5804__auto___5566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5542_5567__$1)){
var c__4556__auto___5568 = cljs.core.chunk_first.call(null,seq__5542_5567__$1);
var G__5569 = cljs.core.chunk_rest.call(null,seq__5542_5567__$1);
var G__5570 = c__4556__auto___5568;
var G__5571 = cljs.core.count.call(null,c__4556__auto___5568);
var G__5572 = (0);
seq__5542_5549 = G__5569;
chunk__5543_5550 = G__5570;
count__5544_5551 = G__5571;
i__5545_5552 = G__5572;
continue;
} else {
var component__5042__auto___5573 = cljs.core.first.call(null,seq__5542_5567__$1);
speclj.components.install.call(null,component__5042__auto___5573,description__5041__auto___5546);


var G__5574 = cljs.core.next.call(null,seq__5542_5567__$1);
var G__5575 = null;
var G__5576 = (0);
var G__5577 = (0);
seq__5542_5549 = G__5574;
chunk__5543_5550 = G__5575;
count__5544_5551 = G__5576;
i__5545_5552 = G__5577;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__5540_5547);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5041__auto___5546);
}

var description__5041__auto___5628 = speclj.components.new_description.call(null,"options-bar component",false,"ttt.core-spec");
var _STAR_parent_description_STAR__orig_val__5578_5629 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__5579_5630 = description__5041__auto___5628;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__5579_5630);

try{var seq__5580_5631 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__5041__auto____$1 = speclj.components.new_description.call(null,"difficulty section",false,"ttt.core-spec");
var _STAR_parent_description_STAR__orig_val__5606_5635 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__5607_5636 = description__5041__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__5607_5636);

try{var seq__5608_5637 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__5606_5635,_STAR_parent_description_STAR__temp_val__5607_5636,description__5041__auto____$1,_STAR_parent_description_STAR__orig_val__5578_5629,_STAR_parent_description_STAR__temp_val__5579_5630,description__5041__auto___5628){
return (function (it__5402__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__5620 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__5621 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__5621);

try{return it__5402__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__5620);
}});})(_STAR_parent_description_STAR__orig_val__5606_5635,_STAR_parent_description_STAR__temp_val__5607_5636,description__5041__auto____$1,_STAR_parent_description_STAR__orig_val__5578_5629,_STAR_parent_description_STAR__temp_val__5579_5630,description__5041__auto___5628))
),speclj.components.new_characteristic.call(null,"creates radio menu for game modes",((function (_STAR_parent_description_STAR__orig_val__5606_5635,_STAR_parent_description_STAR__temp_val__5607_5636,description__5041__auto____$1,_STAR_parent_description_STAR__orig_val__5578_5629,_STAR_parent_description_STAR__temp_val__5579_5630,description__5041__auto___5628){
return (function (){
var radio_menu_orig_val__5622 = ttt.components.radio_menu;
var radio_menu_temp_val__5623 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"mock-radio-menu","mock-radio-menu",-601059130),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),"game mode menu"], null));
(ttt.components.radio_menu = radio_menu_temp_val__5623);

try{var expected__5225__auto__ = "game mode menu";
var actual__5226__auto__ = ttt.components.options_bar.call(null);
if((actual__5226__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5225__auto__ === 'string') && (typeof actual__5226__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5226__auto__.indexOf(expected__5225__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto__)),speclj.platform.endl,"to be in: ",(((actual__5226__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5225__auto__)) && (typeof actual__5226__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5225__auto__,actual__5226__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5226__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto__)),speclj.platform.endl,"to match: ",(((expected__5225__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5226__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5226__auto__,expected__5225__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__5226__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5226__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5224__5227__auto__){
return cljs.core._EQ_.call(null,expected__5225__auto__,p1__5224__5227__auto__);
}),actual__5226__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto__)),speclj.platform.endl,"to be in: ",(((actual__5226__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__5155__auto__ = (((expected__5225__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5225__auto__)));
var type_b__5156__auto__ = (((actual__5226__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5226__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5155__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5156__auto__),"]"].join('');
})()));

}
}
}
}
}
}finally {(ttt.components.radio_menu = radio_menu_orig_val__5622);
}});})(_STAR_parent_description_STAR__orig_val__5606_5635,_STAR_parent_description_STAR__temp_val__5607_5636,description__5041__auto____$1,_STAR_parent_description_STAR__orig_val__5578_5629,_STAR_parent_description_STAR__temp_val__5579_5630,description__5041__auto___5628))
,false),speclj.components.new_characteristic.call(null,"creates radio menu for difficulty",((function (_STAR_parent_description_STAR__orig_val__5606_5635,_STAR_parent_description_STAR__temp_val__5607_5636,description__5041__auto____$1,_STAR_parent_description_STAR__orig_val__5578_5629,_STAR_parent_description_STAR__temp_val__5579_5630,description__5041__auto___5628){
return (function (){
var radio_menu_orig_val__5624 = ttt.components.radio_menu;
var radio_menu_temp_val__5625 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"mock-radio-menu","mock-radio-menu",-601059130),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),"difficulty menu"], null));
(ttt.components.radio_menu = radio_menu_temp_val__5625);

try{var expected__5225__auto__ = "difficulty menu";
var actual__5226__auto__ = ttt.components.options_bar.call(null);
if((actual__5226__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5225__auto__ === 'string') && (typeof actual__5226__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5226__auto__.indexOf(expected__5225__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto__)),speclj.platform.endl,"to be in: ",(((actual__5226__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5225__auto__)) && (typeof actual__5226__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5225__auto__,actual__5226__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5226__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto__)),speclj.platform.endl,"to match: ",(((expected__5225__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5226__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5226__auto__,expected__5225__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__5226__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5226__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5224__5227__auto__){
return cljs.core._EQ_.call(null,expected__5225__auto__,p1__5224__5227__auto__);
}),actual__5226__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto__)),speclj.platform.endl,"to be in: ",(((actual__5226__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__5155__auto__ = (((expected__5225__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5225__auto__)));
var type_b__5156__auto__ = (((actual__5226__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5226__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5155__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5156__auto__),"]"].join('');
})()));

}
}
}
}
}
}finally {(ttt.components.radio_menu = radio_menu_orig_val__5624);
}});})(_STAR_parent_description_STAR__orig_val__5606_5635,_STAR_parent_description_STAR__temp_val__5607_5636,description__5041__auto____$1,_STAR_parent_description_STAR__orig_val__5578_5629,_STAR_parent_description_STAR__temp_val__5579_5630,description__5041__auto___5628))
,false),speclj.components.new_characteristic.call(null,"creates radio menu for game size",((function (_STAR_parent_description_STAR__orig_val__5606_5635,_STAR_parent_description_STAR__temp_val__5607_5636,description__5041__auto____$1,_STAR_parent_description_STAR__orig_val__5578_5629,_STAR_parent_description_STAR__temp_val__5579_5630,description__5041__auto___5628){
return (function (){
var radio_menu_orig_val__5626 = ttt.components.radio_menu;
var radio_menu_temp_val__5627 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"mock-radio-menu","mock-radio-menu",-601059130),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),"size menu"], null));
(ttt.components.radio_menu = radio_menu_temp_val__5627);

try{var expected__5225__auto__ = "size menu";
var actual__5226__auto__ = ttt.components.options_bar.call(null);
if((actual__5226__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5225__auto__ === 'string') && (typeof actual__5226__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5226__auto__.indexOf(expected__5225__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto__)),speclj.platform.endl,"to be in: ",(((actual__5226__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5225__auto__)) && (typeof actual__5226__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5225__auto__,actual__5226__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5226__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto__)),speclj.platform.endl,"to match: ",(((expected__5225__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5226__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5226__auto__,expected__5225__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__5226__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5226__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5224__5227__auto__){
return cljs.core._EQ_.call(null,expected__5225__auto__,p1__5224__5227__auto__);
}),actual__5226__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5225__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5225__auto__)),speclj.platform.endl,"to be in: ",(((actual__5226__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5226__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__5155__auto__ = (((expected__5225__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5225__auto__)));
var type_b__5156__auto__ = (((actual__5226__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5226__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5155__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5156__auto__),"]"].join('');
})()));

}
}
}
}
}
}finally {(ttt.components.radio_menu = radio_menu_orig_val__5626);
}});})(_STAR_parent_description_STAR__orig_val__5606_5635,_STAR_parent_description_STAR__temp_val__5607_5636,description__5041__auto____$1,_STAR_parent_description_STAR__orig_val__5578_5629,_STAR_parent_description_STAR__temp_val__5579_5630,description__5041__auto___5628))
,false)],null)));
var chunk__5609_5638 = null;
var count__5610_5639 = (0);
var i__5611_5640 = (0);
while(true){
if((i__5611_5640 < count__5610_5639)){
var component__5042__auto___5641 = cljs.core._nth.call(null,chunk__5609_5638,i__5611_5640);
speclj.components.install.call(null,component__5042__auto___5641,description__5041__auto____$1);


var G__5642 = seq__5608_5637;
var G__5643 = chunk__5609_5638;
var G__5644 = count__5610_5639;
var G__5645 = (i__5611_5640 + (1));
seq__5608_5637 = G__5642;
chunk__5609_5638 = G__5643;
count__5610_5639 = G__5644;
i__5611_5640 = G__5645;
continue;
} else {
var temp__5804__auto___5646 = cljs.core.seq.call(null,seq__5608_5637);
if(temp__5804__auto___5646){
var seq__5608_5647__$1 = temp__5804__auto___5646;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5608_5647__$1)){
var c__4556__auto___5648 = cljs.core.chunk_first.call(null,seq__5608_5647__$1);
var G__5649 = cljs.core.chunk_rest.call(null,seq__5608_5647__$1);
var G__5650 = c__4556__auto___5648;
var G__5651 = cljs.core.count.call(null,c__4556__auto___5648);
var G__5652 = (0);
seq__5608_5637 = G__5649;
chunk__5609_5638 = G__5650;
count__5610_5639 = G__5651;
i__5611_5640 = G__5652;
continue;
} else {
var component__5042__auto___5653 = cljs.core.first.call(null,seq__5608_5647__$1);
speclj.components.install.call(null,component__5042__auto___5653,description__5041__auto____$1);


var G__5654 = cljs.core.next.call(null,seq__5608_5647__$1);
var G__5655 = null;
var G__5656 = (0);
var G__5657 = (0);
seq__5608_5637 = G__5654;
chunk__5609_5638 = G__5655;
count__5610_5639 = G__5656;
i__5611_5640 = G__5657;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__5606_5635);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5041__auto____$1);
}

return description__5041__auto____$1;
})()],null)));
var chunk__5581_5632 = null;
var count__5582_5633 = (0);
var i__5583_5634 = (0);
while(true){
if((i__5583_5634 < count__5582_5633)){
var component__5042__auto___5658 = cljs.core._nth.call(null,chunk__5581_5632,i__5583_5634);
speclj.components.install.call(null,component__5042__auto___5658,description__5041__auto___5628);


var G__5659 = seq__5580_5631;
var G__5660 = chunk__5581_5632;
var G__5661 = count__5582_5633;
var G__5662 = (i__5583_5634 + (1));
seq__5580_5631 = G__5659;
chunk__5581_5632 = G__5660;
count__5582_5633 = G__5661;
i__5583_5634 = G__5662;
continue;
} else {
var temp__5804__auto___5663 = cljs.core.seq.call(null,seq__5580_5631);
if(temp__5804__auto___5663){
var seq__5580_5664__$1 = temp__5804__auto___5663;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5580_5664__$1)){
var c__4556__auto___5665 = cljs.core.chunk_first.call(null,seq__5580_5664__$1);
var G__5666 = cljs.core.chunk_rest.call(null,seq__5580_5664__$1);
var G__5667 = c__4556__auto___5665;
var G__5668 = cljs.core.count.call(null,c__4556__auto___5665);
var G__5669 = (0);
seq__5580_5631 = G__5666;
chunk__5581_5632 = G__5667;
count__5582_5633 = G__5668;
i__5583_5634 = G__5669;
continue;
} else {
var component__5042__auto___5670 = cljs.core.first.call(null,seq__5580_5664__$1);
speclj.components.install.call(null,component__5042__auto___5670,description__5041__auto___5628);


var G__5671 = cljs.core.next.call(null,seq__5580_5664__$1);
var G__5672 = null;
var G__5673 = (0);
var G__5674 = (0);
seq__5580_5631 = G__5671;
chunk__5581_5632 = G__5672;
count__5582_5633 = G__5673;
i__5583_5634 = G__5674;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__5578_5629);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5041__auto___5628);
}

var description__5041__auto___5683 = speclj.components.new_description.call(null,"game board component",false,"ttt.core-spec");
var _STAR_parent_description_STAR__orig_val__5677_5684 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__5678_5685 = description__5041__auto___5683;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__5678_5685);

try{var seq__5679_5686 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"indexes each position on board",((function (_STAR_parent_description_STAR__orig_val__5677_5684,_STAR_parent_description_STAR__temp_val__5678_5685,description__5041__auto___5683){
return (function (){
var expected__5174__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),(0),new cljs.core.Keyword(null,"val","val",128701612),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),(1),new cljs.core.Keyword(null,"val","val",128701612),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),(2),new cljs.core.Keyword(null,"val","val",128701612),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),(3),new cljs.core.Keyword(null,"val","val",128701612),null], null)], null);
var actual__5175__auto__ = ttt.components.idx_board.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null], null));
if(cljs.core._EQ_.call(null,expected__5174__auto__,actual__5175__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5174__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5174__auto__)),speclj.platform.endl,"     got: ",(((actual__5175__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5175__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__5677_5684,_STAR_parent_description_STAR__temp_val__5678_5685,description__5041__auto___5683))
,false),speclj.components.new_characteristic.call(null,"creates buttons with appropriate id for index",((function (_STAR_parent_description_STAR__orig_val__5677_5684,_STAR_parent_description_STAR__temp_val__5678_5685,description__5041__auto___5683){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.components.state,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),ttt.util.new_game.call(null));

var buttons = ttt.core_spec.get_by_type.call(null,ttt.components.game_board.call(null),new cljs.core.Keyword(null,"button","button",1456579943));
var expected__5174__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null);
var actual__5175__auto__ = cljs.core.map.call(null,(function (p1__5675_SHARP_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__5675_SHARP_));
}),buttons);
if(cljs.core._EQ_.call(null,expected__5174__auto__,actual__5175__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5174__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5174__auto__)),speclj.platform.endl,"     got: ",(((actual__5175__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5175__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__5677_5684,_STAR_parent_description_STAR__temp_val__5678_5685,description__5041__auto___5683))
,false),speclj.components.new_characteristic.call(null,"progresses game state",((function (_STAR_parent_description_STAR__orig_val__5677_5684,_STAR_parent_description_STAR__temp_val__5678_5685,description__5041__auto___5683){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.components.state,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),ttt.util.new_game.call(null));

ttt.components.progress_game.call(null,(0));

var expected__5174__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",null,null,null,null,null,null,null,null], null);
var actual__5175__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.components.state));
if(cljs.core._EQ_.call(null,expected__5174__auto__,actual__5175__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5174__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5174__auto__)),speclj.platform.endl,"     got: ",(((actual__5175__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5175__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__5677_5684,_STAR_parent_description_STAR__temp_val__5678_5685,description__5041__auto___5683))
,false),speclj.components.new_characteristic.call(null,"sets on-click event for button click",((function (_STAR_parent_description_STAR__orig_val__5677_5684,_STAR_parent_description_STAR__temp_val__5678_5685,description__5041__auto___5683){
return (function (){
var buttons = ttt.core_spec.get_by_type.call(null,ttt.components.game_board.call(null),new cljs.core.Keyword(null,"button","button",1456579943));
var expected__5234__auto__ = null;
var actual__5235__auto__ = cljs.core.map.call(null,(function (p1__5676_SHARP_){
return new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__5676_SHARP_));
}),buttons);
if((actual__5235__auto__ == null)){
return null;
} else {
if(((typeof expected__5234__auto__ === 'string') && (typeof actual__5235__auto__ === 'string'))){
if((!(cljs.core._EQ_.call(null,(-1),actual__5235__auto__.indexOf(expected__5234__auto__))))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5234__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5234__auto__)),speclj.platform.endl,"not to be in: ",(((actual__5235__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5235__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5234__auto__)) && (typeof actual__5235__auto__ === 'string'))){
if((!(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5234__auto__,actual__5235__auto__))))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5235__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5235__auto__)),speclj.platform.endl,"not to match: ",(((expected__5234__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5234__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5235__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__5235__auto__,expected__5234__auto__)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5234__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5234__auto__)),speclj.platform.endl,"not to be a key in: ",(((actual__5235__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5235__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5235__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5233__5236__auto__){
return cljs.core._EQ_.call(null,expected__5234__auto__,p1__5233__5236__auto__);
}),actual__5235__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5234__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5234__auto__)),speclj.platform.endl,"not to be in: ",(((actual__5235__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5235__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__5155__auto__ = (((expected__5234__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5234__auto__)));
var type_b__5156__auto__ = (((actual__5235__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5235__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5155__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5156__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__5677_5684,_STAR_parent_description_STAR__temp_val__5678_5685,description__5041__auto___5683))
,false),speclj.components.new_characteristic.call(null,"displays game over message when appropriate",((function (_STAR_parent_description_STAR__orig_val__5677_5684,_STAR_parent_description_STAR__temp_val__5678_5685,description__5041__auto___5683){
return (function (){
var headers_5690 = ttt.core_spec.get_by_type.call(null,ttt.components.game_board.call(null),new cljs.core.Keyword(null,"h2","h2",-372662728));
var expected__5174__auto___5691 = cljs.core.PersistentVector.EMPTY;
var actual__5175__auto___5692 = headers_5690;
if(cljs.core._EQ_.call(null,expected__5174__auto___5691,actual__5175__auto___5692)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5174__auto___5691 == null))?"nil":cljs.core.pr_str.call(null,expected__5174__auto___5691)),speclj.platform.endl,"     got: ",(((actual__5175__auto___5692 == null))?"nil":cljs.core.pr_str.call(null,actual__5175__auto___5692))," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,ttt.components.state,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O",null,"X","O",null,"X",null,null], null));

var headers = ttt.core_spec.get_by_type.call(null,ttt.components.game_board.call(null),new cljs.core.Keyword(null,"h2","h2",-372662728));
var expected__5174__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Game over!"], null)], null);
var actual__5175__auto__ = headers;
if(cljs.core._EQ_.call(null,expected__5174__auto__,actual__5175__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5174__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5174__auto__)),speclj.platform.endl,"     got: ",(((actual__5175__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5175__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__5677_5684,_STAR_parent_description_STAR__temp_val__5678_5685,description__5041__auto___5683))
,false)],null)));
var chunk__5680_5687 = null;
var count__5681_5688 = (0);
var i__5682_5689 = (0);
while(true){
if((i__5682_5689 < count__5681_5688)){
var component__5042__auto___5693 = cljs.core._nth.call(null,chunk__5680_5687,i__5682_5689);
speclj.components.install.call(null,component__5042__auto___5693,description__5041__auto___5683);


var G__5694 = seq__5679_5686;
var G__5695 = chunk__5680_5687;
var G__5696 = count__5681_5688;
var G__5697 = (i__5682_5689 + (1));
seq__5679_5686 = G__5694;
chunk__5680_5687 = G__5695;
count__5681_5688 = G__5696;
i__5682_5689 = G__5697;
continue;
} else {
var temp__5804__auto___5698 = cljs.core.seq.call(null,seq__5679_5686);
if(temp__5804__auto___5698){
var seq__5679_5699__$1 = temp__5804__auto___5698;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5679_5699__$1)){
var c__4556__auto___5700 = cljs.core.chunk_first.call(null,seq__5679_5699__$1);
var G__5701 = cljs.core.chunk_rest.call(null,seq__5679_5699__$1);
var G__5702 = c__4556__auto___5700;
var G__5703 = cljs.core.count.call(null,c__4556__auto___5700);
var G__5704 = (0);
seq__5679_5686 = G__5701;
chunk__5680_5687 = G__5702;
count__5681_5688 = G__5703;
i__5682_5689 = G__5704;
continue;
} else {
var component__5042__auto___5705 = cljs.core.first.call(null,seq__5679_5699__$1);
speclj.components.install.call(null,component__5042__auto___5705,description__5041__auto___5683);


var G__5706 = cljs.core.next.call(null,seq__5679_5699__$1);
var G__5707 = null;
var G__5708 = (0);
var G__5709 = (0);
seq__5679_5686 = G__5706;
chunk__5680_5687 = G__5707;
count__5681_5688 = G__5708;
i__5682_5689 = G__5709;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__5677_5684);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5041__auto___5683);
}


//# sourceMappingURL=core_spec.js.map
