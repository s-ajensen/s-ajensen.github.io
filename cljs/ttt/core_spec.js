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
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.filter.call(null,(function (p1__7049_SHARP_){
return cljs.core._EQ_.call(null,target,cljs.core.first.call(null,p1__7049_SHARP_));
}),tags),(function (){var iter__4529__auto__ = (function ttt$core_spec$get_by_type_$_iter__7050(s__7051){
return (new cljs.core.LazySeq(null,(function (){
var s__7051__$1 = s__7051;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__7051__$1);
if(temp__5804__auto__){
var s__7051__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7051__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__7051__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__7053 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__7052 = (0);
while(true){
if((i__7052 < size__4528__auto__)){
var tag = cljs.core._nth.call(null,c__4527__auto__,i__7052);
cljs.core.chunk_append.call(null,b__7053,ttt.core_spec.get_by_type.call(null,tag,target));

var G__7054 = (i__7052 + (1));
i__7052 = G__7054;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7053),ttt$core_spec$get_by_type_$_iter__7050.call(null,cljs.core.chunk_rest.call(null,s__7051__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7053),null);
}
} else {
var tag = cljs.core.first.call(null,s__7051__$2);
return cljs.core.cons.call(null,ttt.core_spec.get_by_type.call(null,tag,target),ttt$core_spec$get_by_type_$_iter__7050.call(null,cljs.core.rest.call(null,s__7051__$2)));
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
var description__6586__auto___7061 = speclj.components.new_description.call(null,"state changer",false,"ttt.core-spec");
var _STAR_parent_description_STAR__orig_val__7055_7062 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__7056_7063 = description__6586__auto___7061;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__7056_7063);

try{var seq__7057_7064 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"updates game state",((function (_STAR_parent_description_STAR__orig_val__7055_7062,_STAR_parent_description_STAR__temp_val__7056_7063,description__6586__auto___7061){
return (function (){
ttt.components.update_state_BANG_.call(null,null,new cljs.core.Keyword(null,"some-key","some-key",-1462369503),new cljs.core.Keyword(null,"some-val","some-val",-997293714));

var expected__6719__auto__ = new cljs.core.Keyword(null,"some-val","some-val",-997293714);
var actual__6720__auto__ = new cljs.core.Keyword(null,"some-key","some-key",-1462369503).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.components.state));
if(cljs.core._EQ_.call(null,expected__6719__auto__,actual__6720__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6719__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6719__auto__)),speclj.platform.endl,"     got: ",(((actual__6720__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6720__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__7055_7062,_STAR_parent_description_STAR__temp_val__7056_7063,description__6586__auto___7061))
,false)],null)));
var chunk__7058_7065 = null;
var count__7059_7066 = (0);
var i__7060_7067 = (0);
while(true){
if((i__7060_7067 < count__7059_7066)){
var component__6587__auto___7068 = cljs.core._nth.call(null,chunk__7058_7065,i__7060_7067);
speclj.components.install.call(null,component__6587__auto___7068,description__6586__auto___7061);


var G__7069 = seq__7057_7064;
var G__7070 = chunk__7058_7065;
var G__7071 = count__7059_7066;
var G__7072 = (i__7060_7067 + (1));
seq__7057_7064 = G__7069;
chunk__7058_7065 = G__7070;
count__7059_7066 = G__7071;
i__7060_7067 = G__7072;
continue;
} else {
var temp__5804__auto___7073 = cljs.core.seq.call(null,seq__7057_7064);
if(temp__5804__auto___7073){
var seq__7057_7074__$1 = temp__5804__auto___7073;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7057_7074__$1)){
var c__4556__auto___7075 = cljs.core.chunk_first.call(null,seq__7057_7074__$1);
var G__7076 = cljs.core.chunk_rest.call(null,seq__7057_7074__$1);
var G__7077 = c__4556__auto___7075;
var G__7078 = cljs.core.count.call(null,c__4556__auto___7075);
var G__7079 = (0);
seq__7057_7064 = G__7076;
chunk__7058_7065 = G__7077;
count__7059_7066 = G__7078;
i__7060_7067 = G__7079;
continue;
} else {
var component__6587__auto___7080 = cljs.core.first.call(null,seq__7057_7074__$1);
speclj.components.install.call(null,component__6587__auto___7080,description__6586__auto___7061);


var G__7081 = cljs.core.next.call(null,seq__7057_7074__$1);
var G__7082 = null;
var G__7083 = (0);
var G__7084 = (0);
seq__7057_7064 = G__7081;
chunk__7058_7065 = G__7082;
count__7059_7066 = G__7083;
i__7060_7067 = G__7084;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__7055_7062);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__6586__auto___7061);
}

var description__6586__auto___7091 = speclj.components.new_description.call(null,"radio menu component",false,"ttt.core-spec");
var _STAR_parent_description_STAR__orig_val__7085_7092 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__7086_7093 = description__6586__auto___7091;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__7086_7093);

try{var seq__7087_7094 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"labels section",((function (_STAR_parent_description_STAR__orig_val__7085_7092,_STAR_parent_description_STAR__temp_val__7086_7093,description__6586__auto___7091){
return (function (){
var menu = ttt.components.radio_menu.call(null,new cljs.core.Keyword(null,"set-id","set-id",675256473),cljs.core.PersistentVector.EMPTY);
var expected__6770__auto___7098 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"set-id","set-id",675256473)], null);
var actual__6771__auto___7099 = menu;
if((actual__6771__auto___7099 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto___7098 == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto___7098)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__6770__auto___7098 === 'string') && (typeof actual__6771__auto___7099 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__6771__auto___7099.indexOf(expected__6770__auto___7098))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto___7098 == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto___7098)),speclj.platform.endl,"to be in: ",(((actual__6771__auto___7099 == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto___7099))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__6770__auto___7098)) && (typeof actual__6771__auto___7099 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__6770__auto___7098,actual__6771__auto___7099))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__6771__auto___7099 == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto___7099)),speclj.platform.endl,"to match: ",(((expected__6770__auto___7098 == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto___7098))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__6771__auto___7099)){
if((!(cljs.core.contains_QMARK_.call(null,actual__6771__auto___7099,expected__6770__auto___7098)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto___7098 == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto___7098)),speclj.platform.endl,"to be a key in: ",(((actual__6771__auto___7099 == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto___7099))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__6771__auto___7099)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__6769__6772__auto__){
return cljs.core._EQ_.call(null,expected__6770__auto___7098,p1__6769__6772__auto__);
}),actual__6771__auto___7099))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto___7098 == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto___7098)),speclj.platform.endl,"to be in: ",(((actual__6771__auto___7099 == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto___7099))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__6700__auto__ = (((expected__6770__auto___7098 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__6770__auto___7098)));
var type_b__6701__auto__ = (((actual__6771__auto___7099 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__6771__auto___7099)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__6700__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__6701__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__6770__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null);
var actual__6771__auto__ = menu;
if((actual__6771__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__6770__auto__ === 'string') && (typeof actual__6771__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__6771__auto__.indexOf(expected__6770__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto__)),speclj.platform.endl,"to be in: ",(((actual__6771__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__6770__auto__)) && (typeof actual__6771__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__6770__auto__,actual__6771__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__6771__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto__)),speclj.platform.endl,"to match: ",(((expected__6770__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__6771__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__6771__auto__,expected__6770__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__6771__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__6771__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__6769__6772__auto__){
return cljs.core._EQ_.call(null,expected__6770__auto__,p1__6769__6772__auto__);
}),actual__6771__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto__)),speclj.platform.endl,"to be in: ",(((actual__6771__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__6700__auto__ = (((expected__6770__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__6770__auto__)));
var type_b__6701__auto__ = (((actual__6771__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__6771__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__6700__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__6701__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__7085_7092,_STAR_parent_description_STAR__temp_val__7086_7093,description__6586__auto___7091))
,false),speclj.components.new_characteristic.call(null,"sets value and name for option",((function (_STAR_parent_description_STAR__orig_val__7085_7092,_STAR_parent_description_STAR__temp_val__7086_7093,description__6586__auto___7091){
return (function (){
var menu = ttt.components.radio_menu.call(null,new cljs.core.Keyword(null,"set-id","set-id",675256473),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opt1","opt1",-577916500)], null));
var expected__6770__auto___7100 = new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816);
var actual__6771__auto___7101 = menu;
if((actual__6771__auto___7101 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto___7100 == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto___7100)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__6770__auto___7100 === 'string') && (typeof actual__6771__auto___7101 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__6771__auto___7101.indexOf(expected__6770__auto___7100))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto___7100 == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto___7100)),speclj.platform.endl,"to be in: ",(((actual__6771__auto___7101 == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto___7101))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__6770__auto___7100)) && (typeof actual__6771__auto___7101 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__6770__auto___7100,actual__6771__auto___7101))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__6771__auto___7101 == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto___7101)),speclj.platform.endl,"to match: ",(((expected__6770__auto___7100 == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto___7100))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__6771__auto___7101)){
if((!(cljs.core.contains_QMARK_.call(null,actual__6771__auto___7101,expected__6770__auto___7100)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto___7100 == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto___7100)),speclj.platform.endl,"to be a key in: ",(((actual__6771__auto___7101 == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto___7101))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__6771__auto___7101)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__6769__6772__auto__){
return cljs.core._EQ_.call(null,expected__6770__auto___7100,p1__6769__6772__auto__);
}),actual__6771__auto___7101))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto___7100 == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto___7100)),speclj.platform.endl,"to be in: ",(((actual__6771__auto___7101 == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto___7101))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__6700__auto__ = (((expected__6770__auto___7100 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__6770__auto___7100)));
var type_b__6701__auto__ = (((actual__6771__auto___7101 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__6771__auto___7101)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__6700__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__6701__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__6770__auto___7102 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"set-id","set-id",675256473)], null);
var actual__6771__auto___7103 = menu;
if((actual__6771__auto___7103 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto___7102 == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto___7102)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__6770__auto___7102 === 'string') && (typeof actual__6771__auto___7103 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__6771__auto___7103.indexOf(expected__6770__auto___7102))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto___7102 == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto___7102)),speclj.platform.endl,"to be in: ",(((actual__6771__auto___7103 == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto___7103))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__6770__auto___7102)) && (typeof actual__6771__auto___7103 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__6770__auto___7102,actual__6771__auto___7103))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__6771__auto___7103 == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto___7103)),speclj.platform.endl,"to match: ",(((expected__6770__auto___7102 == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto___7102))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__6771__auto___7103)){
if((!(cljs.core.contains_QMARK_.call(null,actual__6771__auto___7103,expected__6770__auto___7102)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto___7102 == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto___7102)),speclj.platform.endl,"to be a key in: ",(((actual__6771__auto___7103 == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto___7103))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__6771__auto___7103)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__6769__6772__auto__){
return cljs.core._EQ_.call(null,expected__6770__auto___7102,p1__6769__6772__auto__);
}),actual__6771__auto___7103))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto___7102 == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto___7102)),speclj.platform.endl,"to be in: ",(((actual__6771__auto___7103 == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto___7103))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__6700__auto__ = (((expected__6770__auto___7102 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__6770__auto___7102)));
var type_b__6701__auto__ = (((actual__6771__auto___7103 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__6771__auto___7103)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__6700__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__6701__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__6770__auto___7104 = "opt1";
var actual__6771__auto___7105 = cljs.core.last.call(null,menu);
if((actual__6771__auto___7105 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto___7104 == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto___7104)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__6770__auto___7104 === 'string') && (typeof actual__6771__auto___7105 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__6771__auto___7105.indexOf(expected__6770__auto___7104))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto___7104 == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto___7104)),speclj.platform.endl,"to be in: ",(((actual__6771__auto___7105 == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto___7105))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__6770__auto___7104)) && (typeof actual__6771__auto___7105 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__6770__auto___7104,actual__6771__auto___7105))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__6771__auto___7105 == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto___7105)),speclj.platform.endl,"to match: ",(((expected__6770__auto___7104 == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto___7104))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__6771__auto___7105)){
if((!(cljs.core.contains_QMARK_.call(null,actual__6771__auto___7105,expected__6770__auto___7104)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto___7104 == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto___7104)),speclj.platform.endl,"to be a key in: ",(((actual__6771__auto___7105 == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto___7105))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__6771__auto___7105)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__6769__6772__auto__){
return cljs.core._EQ_.call(null,expected__6770__auto___7104,p1__6769__6772__auto__);
}),actual__6771__auto___7105))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto___7104 == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto___7104)),speclj.platform.endl,"to be in: ",(((actual__6771__auto___7105 == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto___7105))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__6700__auto__ = (((expected__6770__auto___7104 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__6770__auto___7104)));
var type_b__6701__auto__ = (((actual__6771__auto___7105 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__6771__auto___7105)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__6700__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__6701__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__6770__auto__ = new cljs.core.Keyword(null,"input","input",556931961);
var actual__6771__auto__ = cljs.core.first.call(null,cljs.core.last.call(null,menu));
if((actual__6771__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__6770__auto__ === 'string') && (typeof actual__6771__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__6771__auto__.indexOf(expected__6770__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto__)),speclj.platform.endl,"to be in: ",(((actual__6771__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__6770__auto__)) && (typeof actual__6771__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__6770__auto__,actual__6771__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__6771__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto__)),speclj.platform.endl,"to match: ",(((expected__6770__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__6771__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__6771__auto__,expected__6770__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__6771__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__6771__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__6769__6772__auto__){
return cljs.core._EQ_.call(null,expected__6770__auto__,p1__6769__6772__auto__);
}),actual__6771__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto__)),speclj.platform.endl,"to be in: ",(((actual__6771__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__6700__auto__ = (((expected__6770__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__6770__auto__)));
var type_b__6701__auto__ = (((actual__6771__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__6771__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__6700__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__6701__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__7085_7092,_STAR_parent_description_STAR__temp_val__7086_7093,description__6586__auto___7091))
,false)],null)));
var chunk__7088_7095 = null;
var count__7089_7096 = (0);
var i__7090_7097 = (0);
while(true){
if((i__7090_7097 < count__7089_7096)){
var component__6587__auto___7106 = cljs.core._nth.call(null,chunk__7088_7095,i__7090_7097);
speclj.components.install.call(null,component__6587__auto___7106,description__6586__auto___7091);


var G__7107 = seq__7087_7094;
var G__7108 = chunk__7088_7095;
var G__7109 = count__7089_7096;
var G__7110 = (i__7090_7097 + (1));
seq__7087_7094 = G__7107;
chunk__7088_7095 = G__7108;
count__7089_7096 = G__7109;
i__7090_7097 = G__7110;
continue;
} else {
var temp__5804__auto___7111 = cljs.core.seq.call(null,seq__7087_7094);
if(temp__5804__auto___7111){
var seq__7087_7112__$1 = temp__5804__auto___7111;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7087_7112__$1)){
var c__4556__auto___7113 = cljs.core.chunk_first.call(null,seq__7087_7112__$1);
var G__7114 = cljs.core.chunk_rest.call(null,seq__7087_7112__$1);
var G__7115 = c__4556__auto___7113;
var G__7116 = cljs.core.count.call(null,c__4556__auto___7113);
var G__7117 = (0);
seq__7087_7094 = G__7114;
chunk__7088_7095 = G__7115;
count__7089_7096 = G__7116;
i__7090_7097 = G__7117;
continue;
} else {
var component__6587__auto___7118 = cljs.core.first.call(null,seq__7087_7112__$1);
speclj.components.install.call(null,component__6587__auto___7118,description__6586__auto___7091);


var G__7119 = cljs.core.next.call(null,seq__7087_7112__$1);
var G__7120 = null;
var G__7121 = (0);
var G__7122 = (0);
seq__7087_7094 = G__7119;
chunk__7088_7095 = G__7120;
count__7089_7096 = G__7121;
i__7090_7097 = G__7122;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__7085_7092);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__6586__auto___7091);
}

var description__6586__auto___7173 = speclj.components.new_description.call(null,"options-bar component",false,"ttt.core-spec");
var _STAR_parent_description_STAR__orig_val__7123_7174 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__7124_7175 = description__6586__auto___7173;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__7124_7175);

try{var seq__7125_7176 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__6586__auto____$1 = speclj.components.new_description.call(null,"difficulty section",false,"ttt.core-spec");
var _STAR_parent_description_STAR__orig_val__7151_7180 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__7152_7181 = description__6586__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__7152_7181);

try{var seq__7153_7182 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__7151_7180,_STAR_parent_description_STAR__temp_val__7152_7181,description__6586__auto____$1,_STAR_parent_description_STAR__orig_val__7123_7174,_STAR_parent_description_STAR__temp_val__7124_7175,description__6586__auto___7173){
return (function (it__6947__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__7165 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__7166 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__7166);

try{return it__6947__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__7165);
}});})(_STAR_parent_description_STAR__orig_val__7151_7180,_STAR_parent_description_STAR__temp_val__7152_7181,description__6586__auto____$1,_STAR_parent_description_STAR__orig_val__7123_7174,_STAR_parent_description_STAR__temp_val__7124_7175,description__6586__auto___7173))
),speclj.components.new_characteristic.call(null,"creates radio menu for game modes",((function (_STAR_parent_description_STAR__orig_val__7151_7180,_STAR_parent_description_STAR__temp_val__7152_7181,description__6586__auto____$1,_STAR_parent_description_STAR__orig_val__7123_7174,_STAR_parent_description_STAR__temp_val__7124_7175,description__6586__auto___7173){
return (function (){
var radio_menu_orig_val__7167 = ttt.components.radio_menu;
var radio_menu_temp_val__7168 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"mock-radio-menu","mock-radio-menu",-601059130),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),"game mode menu"], null));
(ttt.components.radio_menu = radio_menu_temp_val__7168);

try{var expected__6770__auto__ = "game mode menu";
var actual__6771__auto__ = ttt.components.options_bar.call(null);
if((actual__6771__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__6770__auto__ === 'string') && (typeof actual__6771__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__6771__auto__.indexOf(expected__6770__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto__)),speclj.platform.endl,"to be in: ",(((actual__6771__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__6770__auto__)) && (typeof actual__6771__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__6770__auto__,actual__6771__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__6771__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto__)),speclj.platform.endl,"to match: ",(((expected__6770__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__6771__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__6771__auto__,expected__6770__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__6771__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__6771__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__6769__6772__auto__){
return cljs.core._EQ_.call(null,expected__6770__auto__,p1__6769__6772__auto__);
}),actual__6771__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto__)),speclj.platform.endl,"to be in: ",(((actual__6771__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__6700__auto__ = (((expected__6770__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__6770__auto__)));
var type_b__6701__auto__ = (((actual__6771__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__6771__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__6700__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__6701__auto__),"]"].join('');
})()));

}
}
}
}
}
}finally {(ttt.components.radio_menu = radio_menu_orig_val__7167);
}});})(_STAR_parent_description_STAR__orig_val__7151_7180,_STAR_parent_description_STAR__temp_val__7152_7181,description__6586__auto____$1,_STAR_parent_description_STAR__orig_val__7123_7174,_STAR_parent_description_STAR__temp_val__7124_7175,description__6586__auto___7173))
,false),speclj.components.new_characteristic.call(null,"creates radio menu for difficulty",((function (_STAR_parent_description_STAR__orig_val__7151_7180,_STAR_parent_description_STAR__temp_val__7152_7181,description__6586__auto____$1,_STAR_parent_description_STAR__orig_val__7123_7174,_STAR_parent_description_STAR__temp_val__7124_7175,description__6586__auto___7173){
return (function (){
var radio_menu_orig_val__7169 = ttt.components.radio_menu;
var radio_menu_temp_val__7170 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"mock-radio-menu","mock-radio-menu",-601059130),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),"difficulty menu"], null));
(ttt.components.radio_menu = radio_menu_temp_val__7170);

try{var expected__6770__auto__ = "difficulty menu";
var actual__6771__auto__ = ttt.components.options_bar.call(null);
if((actual__6771__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__6770__auto__ === 'string') && (typeof actual__6771__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__6771__auto__.indexOf(expected__6770__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto__)),speclj.platform.endl,"to be in: ",(((actual__6771__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__6770__auto__)) && (typeof actual__6771__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__6770__auto__,actual__6771__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__6771__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto__)),speclj.platform.endl,"to match: ",(((expected__6770__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__6771__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__6771__auto__,expected__6770__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__6771__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__6771__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__6769__6772__auto__){
return cljs.core._EQ_.call(null,expected__6770__auto__,p1__6769__6772__auto__);
}),actual__6771__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto__)),speclj.platform.endl,"to be in: ",(((actual__6771__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__6700__auto__ = (((expected__6770__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__6770__auto__)));
var type_b__6701__auto__ = (((actual__6771__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__6771__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__6700__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__6701__auto__),"]"].join('');
})()));

}
}
}
}
}
}finally {(ttt.components.radio_menu = radio_menu_orig_val__7169);
}});})(_STAR_parent_description_STAR__orig_val__7151_7180,_STAR_parent_description_STAR__temp_val__7152_7181,description__6586__auto____$1,_STAR_parent_description_STAR__orig_val__7123_7174,_STAR_parent_description_STAR__temp_val__7124_7175,description__6586__auto___7173))
,false),speclj.components.new_characteristic.call(null,"creates radio menu for game size",((function (_STAR_parent_description_STAR__orig_val__7151_7180,_STAR_parent_description_STAR__temp_val__7152_7181,description__6586__auto____$1,_STAR_parent_description_STAR__orig_val__7123_7174,_STAR_parent_description_STAR__temp_val__7124_7175,description__6586__auto___7173){
return (function (){
var radio_menu_orig_val__7171 = ttt.components.radio_menu;
var radio_menu_temp_val__7172 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"mock-radio-menu","mock-radio-menu",-601059130),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),"size menu"], null));
(ttt.components.radio_menu = radio_menu_temp_val__7172);

try{var expected__6770__auto__ = "size menu";
var actual__6771__auto__ = ttt.components.options_bar.call(null);
if((actual__6771__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__6770__auto__ === 'string') && (typeof actual__6771__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__6771__auto__.indexOf(expected__6770__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto__)),speclj.platform.endl,"to be in: ",(((actual__6771__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__6770__auto__)) && (typeof actual__6771__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__6770__auto__,actual__6771__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__6771__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto__)),speclj.platform.endl,"to match: ",(((expected__6770__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__6771__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__6771__auto__,expected__6770__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__6771__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__6771__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__6769__6772__auto__){
return cljs.core._EQ_.call(null,expected__6770__auto__,p1__6769__6772__auto__);
}),actual__6771__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6770__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6770__auto__)),speclj.platform.endl,"to be in: ",(((actual__6771__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6771__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__6700__auto__ = (((expected__6770__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__6770__auto__)));
var type_b__6701__auto__ = (((actual__6771__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__6771__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__6700__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__6701__auto__),"]"].join('');
})()));

}
}
}
}
}
}finally {(ttt.components.radio_menu = radio_menu_orig_val__7171);
}});})(_STAR_parent_description_STAR__orig_val__7151_7180,_STAR_parent_description_STAR__temp_val__7152_7181,description__6586__auto____$1,_STAR_parent_description_STAR__orig_val__7123_7174,_STAR_parent_description_STAR__temp_val__7124_7175,description__6586__auto___7173))
,false)],null)));
var chunk__7154_7183 = null;
var count__7155_7184 = (0);
var i__7156_7185 = (0);
while(true){
if((i__7156_7185 < count__7155_7184)){
var component__6587__auto___7186 = cljs.core._nth.call(null,chunk__7154_7183,i__7156_7185);
speclj.components.install.call(null,component__6587__auto___7186,description__6586__auto____$1);


var G__7187 = seq__7153_7182;
var G__7188 = chunk__7154_7183;
var G__7189 = count__7155_7184;
var G__7190 = (i__7156_7185 + (1));
seq__7153_7182 = G__7187;
chunk__7154_7183 = G__7188;
count__7155_7184 = G__7189;
i__7156_7185 = G__7190;
continue;
} else {
var temp__5804__auto___7191 = cljs.core.seq.call(null,seq__7153_7182);
if(temp__5804__auto___7191){
var seq__7153_7192__$1 = temp__5804__auto___7191;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7153_7192__$1)){
var c__4556__auto___7193 = cljs.core.chunk_first.call(null,seq__7153_7192__$1);
var G__7194 = cljs.core.chunk_rest.call(null,seq__7153_7192__$1);
var G__7195 = c__4556__auto___7193;
var G__7196 = cljs.core.count.call(null,c__4556__auto___7193);
var G__7197 = (0);
seq__7153_7182 = G__7194;
chunk__7154_7183 = G__7195;
count__7155_7184 = G__7196;
i__7156_7185 = G__7197;
continue;
} else {
var component__6587__auto___7198 = cljs.core.first.call(null,seq__7153_7192__$1);
speclj.components.install.call(null,component__6587__auto___7198,description__6586__auto____$1);


var G__7199 = cljs.core.next.call(null,seq__7153_7192__$1);
var G__7200 = null;
var G__7201 = (0);
var G__7202 = (0);
seq__7153_7182 = G__7199;
chunk__7154_7183 = G__7200;
count__7155_7184 = G__7201;
i__7156_7185 = G__7202;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__7151_7180);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__6586__auto____$1);
}

return description__6586__auto____$1;
})()],null)));
var chunk__7126_7177 = null;
var count__7127_7178 = (0);
var i__7128_7179 = (0);
while(true){
if((i__7128_7179 < count__7127_7178)){
var component__6587__auto___7203 = cljs.core._nth.call(null,chunk__7126_7177,i__7128_7179);
speclj.components.install.call(null,component__6587__auto___7203,description__6586__auto___7173);


var G__7204 = seq__7125_7176;
var G__7205 = chunk__7126_7177;
var G__7206 = count__7127_7178;
var G__7207 = (i__7128_7179 + (1));
seq__7125_7176 = G__7204;
chunk__7126_7177 = G__7205;
count__7127_7178 = G__7206;
i__7128_7179 = G__7207;
continue;
} else {
var temp__5804__auto___7208 = cljs.core.seq.call(null,seq__7125_7176);
if(temp__5804__auto___7208){
var seq__7125_7209__$1 = temp__5804__auto___7208;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7125_7209__$1)){
var c__4556__auto___7210 = cljs.core.chunk_first.call(null,seq__7125_7209__$1);
var G__7211 = cljs.core.chunk_rest.call(null,seq__7125_7209__$1);
var G__7212 = c__4556__auto___7210;
var G__7213 = cljs.core.count.call(null,c__4556__auto___7210);
var G__7214 = (0);
seq__7125_7176 = G__7211;
chunk__7126_7177 = G__7212;
count__7127_7178 = G__7213;
i__7128_7179 = G__7214;
continue;
} else {
var component__6587__auto___7215 = cljs.core.first.call(null,seq__7125_7209__$1);
speclj.components.install.call(null,component__6587__auto___7215,description__6586__auto___7173);


var G__7216 = cljs.core.next.call(null,seq__7125_7209__$1);
var G__7217 = null;
var G__7218 = (0);
var G__7219 = (0);
seq__7125_7176 = G__7216;
chunk__7126_7177 = G__7217;
count__7127_7178 = G__7218;
i__7128_7179 = G__7219;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__7123_7174);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__6586__auto___7173);
}

var description__6586__auto___7228 = speclj.components.new_description.call(null,"game board component",false,"ttt.core-spec");
var _STAR_parent_description_STAR__orig_val__7222_7229 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__7223_7230 = description__6586__auto___7228;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__7223_7230);

try{var seq__7224_7231 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"indexes each position on board",((function (_STAR_parent_description_STAR__orig_val__7222_7229,_STAR_parent_description_STAR__temp_val__7223_7230,description__6586__auto___7228){
return (function (){
var expected__6719__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),(0),new cljs.core.Keyword(null,"val","val",128701612),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),(1),new cljs.core.Keyword(null,"val","val",128701612),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),(2),new cljs.core.Keyword(null,"val","val",128701612),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),(3),new cljs.core.Keyword(null,"val","val",128701612),null], null)], null);
var actual__6720__auto__ = ttt.components.idx_board.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null], null));
if(cljs.core._EQ_.call(null,expected__6719__auto__,actual__6720__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6719__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6719__auto__)),speclj.platform.endl,"     got: ",(((actual__6720__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6720__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__7222_7229,_STAR_parent_description_STAR__temp_val__7223_7230,description__6586__auto___7228))
,false),speclj.components.new_characteristic.call(null,"creates buttons with appropriate id for index",((function (_STAR_parent_description_STAR__orig_val__7222_7229,_STAR_parent_description_STAR__temp_val__7223_7230,description__6586__auto___7228){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.components.state,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),ttt.util.new_game.call(null));

var buttons = ttt.core_spec.get_by_type.call(null,ttt.components.game_board.call(null),new cljs.core.Keyword(null,"button","button",1456579943));
var expected__6719__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null);
var actual__6720__auto__ = cljs.core.map.call(null,(function (p1__7220_SHARP_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__7220_SHARP_));
}),buttons);
if(cljs.core._EQ_.call(null,expected__6719__auto__,actual__6720__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6719__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6719__auto__)),speclj.platform.endl,"     got: ",(((actual__6720__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6720__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__7222_7229,_STAR_parent_description_STAR__temp_val__7223_7230,description__6586__auto___7228))
,false),speclj.components.new_characteristic.call(null,"progresses game state",((function (_STAR_parent_description_STAR__orig_val__7222_7229,_STAR_parent_description_STAR__temp_val__7223_7230,description__6586__auto___7228){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.components.state,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),ttt.util.new_game.call(null));

ttt.components.progress_game.call(null,(0));

var expected__6719__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",null,null,null,null,null,null,null,null], null);
var actual__6720__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.components.state));
if(cljs.core._EQ_.call(null,expected__6719__auto__,actual__6720__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6719__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6719__auto__)),speclj.platform.endl,"     got: ",(((actual__6720__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6720__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__7222_7229,_STAR_parent_description_STAR__temp_val__7223_7230,description__6586__auto___7228))
,false),speclj.components.new_characteristic.call(null,"sets on-click event for button click",((function (_STAR_parent_description_STAR__orig_val__7222_7229,_STAR_parent_description_STAR__temp_val__7223_7230,description__6586__auto___7228){
return (function (){
var buttons = ttt.core_spec.get_by_type.call(null,ttt.components.game_board.call(null),new cljs.core.Keyword(null,"button","button",1456579943));
var expected__6779__auto__ = null;
var actual__6780__auto__ = cljs.core.map.call(null,(function (p1__7221_SHARP_){
return new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__7221_SHARP_));
}),buttons);
if((actual__6780__auto__ == null)){
return null;
} else {
if(((typeof expected__6779__auto__ === 'string') && (typeof actual__6780__auto__ === 'string'))){
if((!(cljs.core._EQ_.call(null,(-1),actual__6780__auto__.indexOf(expected__6779__auto__))))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6779__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6779__auto__)),speclj.platform.endl,"not to be in: ",(((actual__6780__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6780__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__6779__auto__)) && (typeof actual__6780__auto__ === 'string'))){
if((!(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__6779__auto__,actual__6780__auto__))))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__6780__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6780__auto__)),speclj.platform.endl,"not to match: ",(((expected__6779__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6779__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__6780__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__6780__auto__,expected__6779__auto__)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6779__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6779__auto__)),speclj.platform.endl,"not to be a key in: ",(((actual__6780__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6780__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__6780__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__6778__6781__auto__){
return cljs.core._EQ_.call(null,expected__6779__auto__,p1__6778__6781__auto__);
}),actual__6780__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6779__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6779__auto__)),speclj.platform.endl,"not to be in: ",(((actual__6780__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6780__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__6700__auto__ = (((expected__6779__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__6779__auto__)));
var type_b__6701__auto__ = (((actual__6780__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__6780__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__6700__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__6701__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__7222_7229,_STAR_parent_description_STAR__temp_val__7223_7230,description__6586__auto___7228))
,false),speclj.components.new_characteristic.call(null,"displays game over message when appropriate",((function (_STAR_parent_description_STAR__orig_val__7222_7229,_STAR_parent_description_STAR__temp_val__7223_7230,description__6586__auto___7228){
return (function (){
var headers_7235 = ttt.core_spec.get_by_type.call(null,ttt.components.game_board.call(null),new cljs.core.Keyword(null,"h2","h2",-372662728));
var expected__6719__auto___7236 = cljs.core.PersistentVector.EMPTY;
var actual__6720__auto___7237 = headers_7235;
if(cljs.core._EQ_.call(null,expected__6719__auto___7236,actual__6720__auto___7237)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6719__auto___7236 == null))?"nil":cljs.core.pr_str.call(null,expected__6719__auto___7236)),speclj.platform.endl,"     got: ",(((actual__6720__auto___7237 == null))?"nil":cljs.core.pr_str.call(null,actual__6720__auto___7237))," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,ttt.components.state,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O",null,"X","O",null,"X",null,null], null));

var headers = ttt.core_spec.get_by_type.call(null,ttt.components.game_board.call(null),new cljs.core.Keyword(null,"h2","h2",-372662728));
var expected__6719__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Game over!"], null)], null);
var actual__6720__auto__ = headers;
if(cljs.core._EQ_.call(null,expected__6719__auto__,actual__6720__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6719__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6719__auto__)),speclj.platform.endl,"     got: ",(((actual__6720__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6720__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__7222_7229,_STAR_parent_description_STAR__temp_val__7223_7230,description__6586__auto___7228))
,false)],null)));
var chunk__7225_7232 = null;
var count__7226_7233 = (0);
var i__7227_7234 = (0);
while(true){
if((i__7227_7234 < count__7226_7233)){
var component__6587__auto___7238 = cljs.core._nth.call(null,chunk__7225_7232,i__7227_7234);
speclj.components.install.call(null,component__6587__auto___7238,description__6586__auto___7228);


var G__7239 = seq__7224_7231;
var G__7240 = chunk__7225_7232;
var G__7241 = count__7226_7233;
var G__7242 = (i__7227_7234 + (1));
seq__7224_7231 = G__7239;
chunk__7225_7232 = G__7240;
count__7226_7233 = G__7241;
i__7227_7234 = G__7242;
continue;
} else {
var temp__5804__auto___7243 = cljs.core.seq.call(null,seq__7224_7231);
if(temp__5804__auto___7243){
var seq__7224_7244__$1 = temp__5804__auto___7243;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7224_7244__$1)){
var c__4556__auto___7245 = cljs.core.chunk_first.call(null,seq__7224_7244__$1);
var G__7246 = cljs.core.chunk_rest.call(null,seq__7224_7244__$1);
var G__7247 = c__4556__auto___7245;
var G__7248 = cljs.core.count.call(null,c__4556__auto___7245);
var G__7249 = (0);
seq__7224_7231 = G__7246;
chunk__7225_7232 = G__7247;
count__7226_7233 = G__7248;
i__7227_7234 = G__7249;
continue;
} else {
var component__6587__auto___7250 = cljs.core.first.call(null,seq__7224_7244__$1);
speclj.components.install.call(null,component__6587__auto___7250,description__6586__auto___7228);


var G__7251 = cljs.core.next.call(null,seq__7224_7244__$1);
var G__7252 = null;
var G__7253 = (0);
var G__7254 = (0);
seq__7224_7231 = G__7251;
chunk__7225_7232 = G__7252;
count__7226_7233 = G__7253;
i__7227_7234 = G__7254;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__7222_7229);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__6586__auto___7228);
}


//# sourceMappingURL=core_spec.js.map
