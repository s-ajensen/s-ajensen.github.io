// Compiled by ClojureScript 1.10.764 {}
goog.provide('speclj.running');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('speclj.components');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.reporting');
goog.require('speclj.results');
goog.require('speclj.tags');
speclj.running.focusable_QMARK_ = (function speclj$running$focusable_QMARK_(component){
return (((!((component == null)))) && (((speclj.components.is_description_QMARK_.call(null,component)) || (speclj.components.is_characteristic_QMARK_.call(null,component)))));
});
speclj.running.focused_QMARK_ = (function speclj$running$focused_QMARK_(component){
return cljs.core.deref.call(null,component.is_focused_QMARK_);
});
speclj.running.has_focus_QMARK_ = (function speclj$running$has_focus_QMARK_(component){
if(speclj.components.is_description_QMARK_.call(null,component)){
return cljs.core.deref.call(null,component.has_focus_QMARK_);
} else {
return false;
}
});
speclj.running.focus_mode_QMARK_ = (function speclj$running$focus_mode_QMARK_(component){
while(true){
var or__4126__auto__ = speclj.running.focused_QMARK_.call(null,component);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = speclj.running.has_focus_QMARK_.call(null,component);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var temp__5804__auto__ = cljs.core.deref.call(null,component.parent);
if(cljs.core.truth_(temp__5804__auto__)){
var parent = temp__5804__auto__;
var G__4820 = parent;
component = G__4820;
continue;
} else {
return null;
}
}
}
break;
}
});
speclj.running.can_run_QMARK_ = (function speclj$running$can_run_QMARK_(component){
var or__4126__auto__ = speclj.running.focused_QMARK_.call(null,component);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = speclj.running.has_focus_QMARK_.call(null,component);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.not.call(null,speclj.running.focus_mode_QMARK_.call(null,component));
}
}
});
speclj.running.all_children = (function speclj$running$all_children(component){
if(speclj.components.is_description_QMARK_.call(null,component)){
return cljs.core.concat.call(null,cljs.core.deref.call(null,component.characteristics),cljs.core.deref.call(null,component.children));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
speclj.running.focus_BANG_ = (function speclj$running$focus_BANG_(component){
return cljs.core.reset_BANG_.call(null,component.is_focused_QMARK_,true);
});
speclj.running.focus_characteristics_BANG_ = (function speclj$running$focus_characteristics_BANG_(component){
speclj.running.focus_BANG_.call(null,component);

return cljs.core.doall.call(null,cljs.core.map.call(null,speclj.running.focus_BANG_,cljs.core.deref.call(null,component.characteristics)));
});
speclj.running.focus_children_BANG_ = (function speclj$running$focus_children_BANG_(component){
speclj.running.focus_BANG_.call(null,component);

return cljs.core.doall.call(null,cljs.core.map.call(null,speclj.running.focus_children_BANG_,cljs.core.deref.call(null,component.children)));
});
speclj.running.enable_focus_mode_BANG_ = (function speclj$running$enable_focus_mode_BANG_(component){
while(true){
var temp__5804__auto__ = cljs.core.deref.call(null,component.parent);
if(cljs.core.truth_(temp__5804__auto__)){
var parent = temp__5804__auto__;
cljs.core.reset_BANG_.call(null,parent.has_focus_QMARK_,true);

var G__4821 = parent;
component = G__4821;
continue;
} else {
return null;
}
break;
}
});
speclj.running.track_focused_descriptions_BANG_ = (function speclj$running$track_focused_descriptions_BANG_(descriptions){
var seq__4822 = cljs.core.seq.call(null,descriptions);
var chunk__4823 = null;
var count__4824 = (0);
var i__4825 = (0);
while(true){
if((i__4825 < count__4824)){
var component = cljs.core._nth.call(null,chunk__4823,i__4825);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,component))){
speclj.running.enable_focus_mode_BANG_.call(null,component);

speclj.running.focus_children_BANG_.call(null,component);

speclj.running.focus_characteristics_BANG_.call(null,component);
} else {
}


var G__4826 = seq__4822;
var G__4827 = chunk__4823;
var G__4828 = count__4824;
var G__4829 = (i__4825 + (1));
seq__4822 = G__4826;
chunk__4823 = G__4827;
count__4824 = G__4828;
i__4825 = G__4829;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__4822);
if(temp__5804__auto__){
var seq__4822__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4822__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__4822__$1);
var G__4830 = cljs.core.chunk_rest.call(null,seq__4822__$1);
var G__4831 = c__4556__auto__;
var G__4832 = cljs.core.count.call(null,c__4556__auto__);
var G__4833 = (0);
seq__4822 = G__4830;
chunk__4823 = G__4831;
count__4824 = G__4832;
i__4825 = G__4833;
continue;
} else {
var component = cljs.core.first.call(null,seq__4822__$1);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,component))){
speclj.running.enable_focus_mode_BANG_.call(null,component);

speclj.running.focus_children_BANG_.call(null,component);

speclj.running.focus_characteristics_BANG_.call(null,component);
} else {
}


var G__4834 = cljs.core.next.call(null,seq__4822__$1);
var G__4835 = null;
var G__4836 = (0);
var G__4837 = (0);
seq__4822 = G__4834;
chunk__4823 = G__4835;
count__4824 = G__4836;
i__4825 = G__4837;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.track_focused_characteristics_BANG_ = (function speclj$running$track_focused_characteristics_BANG_(characteristics){
var seq__4838 = cljs.core.seq.call(null,characteristics);
var chunk__4840 = null;
var count__4841 = (0);
var i__4842 = (0);
while(true){
if((i__4842 < count__4841)){
var characteristic = cljs.core._nth.call(null,chunk__4840,i__4842);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,characteristic))){
speclj.running.enable_focus_mode_BANG_.call(null,characteristic);


var G__4844 = seq__4838;
var G__4845 = chunk__4840;
var G__4846 = count__4841;
var G__4847 = (i__4842 + (1));
seq__4838 = G__4844;
chunk__4840 = G__4845;
count__4841 = G__4846;
i__4842 = G__4847;
continue;
} else {
var G__4848 = seq__4838;
var G__4849 = chunk__4840;
var G__4850 = count__4841;
var G__4851 = (i__4842 + (1));
seq__4838 = G__4848;
chunk__4840 = G__4849;
count__4841 = G__4850;
i__4842 = G__4851;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__4838);
if(temp__5804__auto__){
var seq__4838__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4838__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__4838__$1);
var G__4852 = cljs.core.chunk_rest.call(null,seq__4838__$1);
var G__4853 = c__4556__auto__;
var G__4854 = cljs.core.count.call(null,c__4556__auto__);
var G__4855 = (0);
seq__4838 = G__4852;
chunk__4840 = G__4853;
count__4841 = G__4854;
i__4842 = G__4855;
continue;
} else {
var characteristic = cljs.core.first.call(null,seq__4838__$1);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,characteristic))){
speclj.running.enable_focus_mode_BANG_.call(null,characteristic);


var G__4856 = cljs.core.next.call(null,seq__4838__$1);
var G__4857 = null;
var G__4858 = (0);
var G__4859 = (0);
seq__4838 = G__4856;
chunk__4840 = G__4857;
count__4841 = G__4858;
i__4842 = G__4859;
continue;
} else {
var G__4860 = cljs.core.next.call(null,seq__4838__$1);
var G__4861 = null;
var G__4862 = (0);
var G__4863 = (0);
seq__4838 = G__4860;
chunk__4840 = G__4861;
count__4841 = G__4862;
i__4842 = G__4863;
continue;
}
}
} else {
return null;
}
}
break;
}
});
speclj.running.scan_for_focus_BANG_ = (function speclj$running$scan_for_focus_BANG_(description){
var all = cljs.core.tree_seq.call(null,cljs.core.some_QMARK_,speclj.running.all_children,description);
speclj.running.track_focused_descriptions_BANG_.call(null,cljs.core.filter.call(null,speclj.components.is_description_QMARK_,all));

speclj.running.track_focused_characteristics_BANG_.call(null,cljs.core.filter.call(null,speclj.components.is_characteristic_QMARK_,all));

return description;
});
speclj.running.filter_focused = (function speclj$running$filter_focused(descriptions){
var seq__4864_4868 = cljs.core.seq.call(null,descriptions);
var chunk__4865_4869 = null;
var count__4866_4870 = (0);
var i__4867_4871 = (0);
while(true){
if((i__4867_4871 < count__4866_4870)){
var description_4872 = cljs.core._nth.call(null,chunk__4865_4869,i__4867_4871);
speclj.running.scan_for_focus_BANG_.call(null,description_4872);


var G__4873 = seq__4864_4868;
var G__4874 = chunk__4865_4869;
var G__4875 = count__4866_4870;
var G__4876 = (i__4867_4871 + (1));
seq__4864_4868 = G__4873;
chunk__4865_4869 = G__4874;
count__4866_4870 = G__4875;
i__4867_4871 = G__4876;
continue;
} else {
var temp__5804__auto___4877 = cljs.core.seq.call(null,seq__4864_4868);
if(temp__5804__auto___4877){
var seq__4864_4878__$1 = temp__5804__auto___4877;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4864_4878__$1)){
var c__4556__auto___4879 = cljs.core.chunk_first.call(null,seq__4864_4878__$1);
var G__4880 = cljs.core.chunk_rest.call(null,seq__4864_4878__$1);
var G__4881 = c__4556__auto___4879;
var G__4882 = cljs.core.count.call(null,c__4556__auto___4879);
var G__4883 = (0);
seq__4864_4868 = G__4880;
chunk__4865_4869 = G__4881;
count__4866_4870 = G__4882;
i__4867_4871 = G__4883;
continue;
} else {
var description_4884 = cljs.core.first.call(null,seq__4864_4878__$1);
speclj.running.scan_for_focus_BANG_.call(null,description_4884);


var G__4885 = cljs.core.next.call(null,seq__4864_4878__$1);
var G__4886 = null;
var G__4887 = (0);
var G__4888 = (0);
seq__4864_4868 = G__4885;
chunk__4865_4869 = G__4886;
count__4866_4870 = G__4887;
i__4867_4871 = G__4888;
continue;
}
} else {
}
}
break;
}

var or__4126__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,speclj.running.focus_mode_QMARK_,descriptions));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return descriptions;
}
});
speclj.running.eval_components = (function speclj$running$eval_components(components){
var seq__4889 = cljs.core.seq.call(null,components);
var chunk__4890 = null;
var count__4891 = (0);
var i__4892 = (0);
while(true){
if((i__4892 < count__4891)){
var component = cljs.core._nth.call(null,chunk__4890,i__4892);
component.body.call(null);


var G__4893 = seq__4889;
var G__4894 = chunk__4890;
var G__4895 = count__4891;
var G__4896 = (i__4892 + (1));
seq__4889 = G__4893;
chunk__4890 = G__4894;
count__4891 = G__4895;
i__4892 = G__4896;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__4889);
if(temp__5804__auto__){
var seq__4889__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4889__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__4889__$1);
var G__4897 = cljs.core.chunk_rest.call(null,seq__4889__$1);
var G__4898 = c__4556__auto__;
var G__4899 = cljs.core.count.call(null,c__4556__auto__);
var G__4900 = (0);
seq__4889 = G__4897;
chunk__4890 = G__4898;
count__4891 = G__4899;
i__4892 = G__4900;
continue;
} else {
var component = cljs.core.first.call(null,seq__4889__$1);
component.body.call(null);


var G__4901 = cljs.core.next.call(null,seq__4889__$1);
var G__4902 = null;
var G__4903 = (0);
var G__4904 = (0);
seq__4889 = G__4901;
chunk__4890 = G__4902;
count__4891 = G__4903;
i__4892 = G__4904;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.nested_fns = (function speclj$running$nested_fns(base,fns){
if(cljs.core.seq.call(null,fns)){
return cljs.core.partial.call(null,cljs.core.first.call(null,fns),speclj.running.nested_fns.call(null,base,cljs.core.rest.call(null,fns)));
} else {
return base;
}
});
speclj.running.eval_characteristic = (function speclj$running$eval_characteristic(befores,body,afters){
speclj.running.eval_components.call(null,befores);

try{return body.call(null);
}finally {speclj.running.eval_components.call(null,afters);
}});
speclj.running.reset_withs = (function speclj$running$reset_withs(withs){
var seq__4905 = cljs.core.seq.call(null,withs);
var chunk__4906 = null;
var count__4907 = (0);
var i__4908 = (0);
while(true){
if((i__4908 < count__4907)){
var with$ = cljs.core._nth.call(null,chunk__4906,i__4908);
speclj.components.reset_with.call(null,with$);


var G__4909 = seq__4905;
var G__4910 = chunk__4906;
var G__4911 = count__4907;
var G__4912 = (i__4908 + (1));
seq__4905 = G__4909;
chunk__4906 = G__4910;
count__4907 = G__4911;
i__4908 = G__4912;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__4905);
if(temp__5804__auto__){
var seq__4905__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4905__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__4905__$1);
var G__4913 = cljs.core.chunk_rest.call(null,seq__4905__$1);
var G__4914 = c__4556__auto__;
var G__4915 = cljs.core.count.call(null,c__4556__auto__);
var G__4916 = (0);
seq__4905 = G__4913;
chunk__4906 = G__4914;
count__4907 = G__4915;
i__4908 = G__4916;
continue;
} else {
var with$ = cljs.core.first.call(null,seq__4905__$1);
speclj.components.reset_with.call(null,with$);


var G__4917 = cljs.core.next.call(null,seq__4905__$1);
var G__4918 = null;
var G__4919 = (0);
var G__4920 = (0);
seq__4905 = G__4917;
chunk__4906 = G__4918;
count__4907 = G__4919;
i__4908 = G__4920;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.collect_components = (function speclj$running$collect_components(getter,description){
var description__$1 = description;
var components = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(description__$1)){
var G__4921 = cljs.core.deref.call(null,description__$1.parent);
var G__4922 = cljs.core.concat.call(null,getter.call(null,description__$1),components);
description__$1 = G__4921;
components = G__4922;
continue;
} else {
return components;
}
break;
}
});
speclj.running.report_result = (function speclj$running$report_result(result_constructor,characteristic,start_time,reporters,failure){
var present_args = cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [characteristic,speclj.platform.secs_since.call(null,start_time),failure], null));
var result = cljs.core.apply.call(null,result_constructor,present_args);
speclj.reporting.report_run.call(null,result,reporters);

return result;
});
speclj.running.do_characteristic = (function speclj$running$do_characteristic(characteristic,reporters){
var description = cljs.core.deref.call(null,characteristic.parent);
var befores = speclj.running.collect_components.call(null,(function (p1__4923_SHARP_){
return cljs.core.deref.call(null,p1__4923_SHARP_.befores);
}),description);
var afters = speclj.running.collect_components.call(null,(function (p1__4924_SHARP_){
return cljs.core.deref.call(null,p1__4924_SHARP_.afters);
}),description);
var core_body = characteristic.body;
var before_and_after_body = (function (){
return speclj.running.eval_characteristic.call(null,befores,core_body,afters);
});
var arounds = speclj.running.collect_components.call(null,(function (p1__4925_SHARP_){
return cljs.core.deref.call(null,p1__4925_SHARP_.arounds);
}),description);
var full_body = speclj.running.nested_fns.call(null,before_and_after_body,cljs.core.map.call(null,(function (p1__4926_SHARP_){
return p1__4926_SHARP_.body;
}),arounds));
var withs = speclj.running.collect_components.call(null,(function (p1__4927_SHARP_){
return cljs.core.deref.call(null,p1__4927_SHARP_.withs);
}),description);
var start_time = speclj.platform.current_time.call(null);
try{full_body.call(null);

return speclj.running.report_result.call(null,speclj.results.pass_result,characteristic,start_time,reporters,null);
}catch (e4928){var e = e4928;
if(speclj.platform.pending_QMARK_.call(null,e)){
return speclj.running.report_result.call(null,speclj.results.pending_result,characteristic,start_time,reporters,e);
} else {
return speclj.running.report_result.call(null,speclj.results.fail_result,characteristic,start_time,reporters,e);
}
}finally {speclj.running.reset_withs.call(null,withs);
}});
speclj.running.do_characteristics = (function speclj$running$do_characteristics(characteristics,reporters){
return cljs.core.doall.call(null,(function (){var iter__4529__auto__ = (function speclj$running$do_characteristics_$_iter__4929(s__4930){
return (new cljs.core.LazySeq(null,(function (){
var s__4930__$1 = s__4930;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__4930__$1);
if(temp__5804__auto__){
var s__4930__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4930__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__4930__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__4932 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__4931 = (0);
while(true){
if((i__4931 < size__4528__auto__)){
var characteristic = cljs.core._nth.call(null,c__4527__auto__,i__4931);
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,characteristic))){
cljs.core.chunk_append.call(null,b__4932,speclj.running.do_characteristic.call(null,characteristic,reporters));

var G__4933 = (i__4931 + (1));
i__4931 = G__4933;
continue;
} else {
var G__4934 = (i__4931 + (1));
i__4931 = G__4934;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4932),speclj$running$do_characteristics_$_iter__4929.call(null,cljs.core.chunk_rest.call(null,s__4930__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4932),null);
}
} else {
var characteristic = cljs.core.first.call(null,s__4930__$2);
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,characteristic))){
return cljs.core.cons.call(null,speclj.running.do_characteristic.call(null,characteristic,reporters),speclj$running$do_characteristics_$_iter__4929.call(null,cljs.core.rest.call(null,s__4930__$2)));
} else {
var G__4935 = cljs.core.rest.call(null,s__4930__$2);
s__4930__$1 = G__4935;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,characteristics);
})());
});
speclj.running.do_child_contexts = (function speclj$running$do_child_contexts(context,results,reporters){
var results__$1 = results;
var children = cljs.core.deref.call(null,context.children);
while(true){
if(cljs.core.seq.call(null,children)){
var G__4936 = cljs.core.concat.call(null,results__$1,speclj.running.do_description.call(null,cljs.core.first.call(null,children),reporters));
var G__4937 = cljs.core.rest.call(null,children);
results__$1 = G__4936;
children = G__4937;
continue;
} else {
speclj.running.eval_components.call(null,cljs.core.deref.call(null,context.after_alls));

return results__$1;
}
break;
}
});
speclj.running.results_for_context = (function speclj$running$results_for_context(context,reporters){
if(cljs.core.truth_(speclj.tags.pass_tag_filter_QMARK_.call(null,speclj.tags.tags_for.call(null,context)))){
return speclj.running.do_characteristics.call(null,cljs.core.deref.call(null,context.characteristics),reporters);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
speclj.running.with_withs_bound = (function speclj$running$with_withs_bound(description,body){
var withs = cljs.core.concat.call(null,cljs.core.deref.call(null,description.withs),cljs.core.deref.call(null,description.with_alls));
var ns = clojure.string.replace.call(null,description.ns,"-","_");
var var_names = cljs.core.map.call(null,(function (p1__4940_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__4940_SHARP_.name)].join('');
}),withs);
var unique_names = cljs.core.map.call(null,(function (p1__4941_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__4941_SHARP_.unique_name)].join('');
}),withs);
var seq__4942_4974 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,var_names,unique_names)));
var chunk__4943_4975 = null;
var count__4944_4976 = (0);
var i__4945_4977 = (0);
while(true){
if((i__4945_4977 < count__4944_4976)){
var vec__4952_4978 = cljs.core._nth.call(null,chunk__4943_4975,i__4945_4977);
var n_4979 = cljs.core.nth.call(null,vec__4952_4978,(0),null);
var un_4980 = cljs.core.nth.call(null,vec__4952_4978,(1),null);
var code_4981 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_4979)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_4980),";"].join('');
eval(code_4981);


var G__4982 = seq__4942_4974;
var G__4983 = chunk__4943_4975;
var G__4984 = count__4944_4976;
var G__4985 = (i__4945_4977 + (1));
seq__4942_4974 = G__4982;
chunk__4943_4975 = G__4983;
count__4944_4976 = G__4984;
i__4945_4977 = G__4985;
continue;
} else {
var temp__5804__auto___4986 = cljs.core.seq.call(null,seq__4942_4974);
if(temp__5804__auto___4986){
var seq__4942_4987__$1 = temp__5804__auto___4986;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4942_4987__$1)){
var c__4556__auto___4988 = cljs.core.chunk_first.call(null,seq__4942_4987__$1);
var G__4989 = cljs.core.chunk_rest.call(null,seq__4942_4987__$1);
var G__4990 = c__4556__auto___4988;
var G__4991 = cljs.core.count.call(null,c__4556__auto___4988);
var G__4992 = (0);
seq__4942_4974 = G__4989;
chunk__4943_4975 = G__4990;
count__4944_4976 = G__4991;
i__4945_4977 = G__4992;
continue;
} else {
var vec__4955_4993 = cljs.core.first.call(null,seq__4942_4987__$1);
var n_4994 = cljs.core.nth.call(null,vec__4955_4993,(0),null);
var un_4995 = cljs.core.nth.call(null,vec__4955_4993,(1),null);
var code_4996 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_4994)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_4995),";"].join('');
eval(code_4996);


var G__4997 = cljs.core.next.call(null,seq__4942_4987__$1);
var G__4998 = null;
var G__4999 = (0);
var G__5000 = (0);
seq__4942_4974 = G__4997;
chunk__4943_4975 = G__4998;
count__4944_4976 = G__4999;
i__4945_4977 = G__5000;
continue;
}
} else {
}
}
break;
}

try{return body.call(null);
}finally {var seq__4958_5001 = cljs.core.seq.call(null,var_names);
var chunk__4959_5002 = null;
var count__4960_5003 = (0);
var i__4961_5004 = (0);
while(true){
if((i__4961_5004 < count__4960_5003)){
var vec__4968_5005 = cljs.core._nth.call(null,chunk__4959_5002,i__4961_5004);
var n_5006 = cljs.core.nth.call(null,vec__4968_5005,(0),null);
var code_5007 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_5006)," = null;"].join('');
eval(code_5007);


var G__5008 = seq__4958_5001;
var G__5009 = chunk__4959_5002;
var G__5010 = count__4960_5003;
var G__5011 = (i__4961_5004 + (1));
seq__4958_5001 = G__5008;
chunk__4959_5002 = G__5009;
count__4960_5003 = G__5010;
i__4961_5004 = G__5011;
continue;
} else {
var temp__5804__auto___5012 = cljs.core.seq.call(null,seq__4958_5001);
if(temp__5804__auto___5012){
var seq__4958_5013__$1 = temp__5804__auto___5012;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4958_5013__$1)){
var c__4556__auto___5014 = cljs.core.chunk_first.call(null,seq__4958_5013__$1);
var G__5015 = cljs.core.chunk_rest.call(null,seq__4958_5013__$1);
var G__5016 = c__4556__auto___5014;
var G__5017 = cljs.core.count.call(null,c__4556__auto___5014);
var G__5018 = (0);
seq__4958_5001 = G__5015;
chunk__4959_5002 = G__5016;
count__4960_5003 = G__5017;
i__4961_5004 = G__5018;
continue;
} else {
var vec__4971_5019 = cljs.core.first.call(null,seq__4958_5013__$1);
var n_5020 = cljs.core.nth.call(null,vec__4971_5019,(0),null);
var code_5021 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_5020)," = null;"].join('');
eval(code_5021);


var G__5022 = cljs.core.next.call(null,seq__4958_5013__$1);
var G__5023 = null;
var G__5024 = (0);
var G__5025 = (0);
seq__4958_5001 = G__5022;
chunk__4959_5002 = G__5023;
count__4960_5003 = G__5024;
i__4961_5004 = G__5025;
continue;
}
} else {
}
}
break;
}
}});
speclj.running.nested_results_for_context = (function speclj$running$nested_results_for_context(description,reporters){
var results = speclj.running.results_for_context.call(null,description,reporters);
return speclj.running.do_child_contexts.call(null,description,results,reporters);
});
speclj.running.with_around_alls = (function speclj$running$with_around_alls(description,run_characteristics_fn){
return speclj.running.nested_fns.call(null,run_characteristics_fn,cljs.core.map.call(null,(function (p1__5026_SHARP_){
return p1__5026_SHARP_.body;
}),cljs.core.deref.call(null,description.around_alls))).call(null);
});
speclj.running.do_description = (function speclj$running$do_description(description,reporters){
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,description))){
var tag_sets = speclj.tags.tag_sets_for.call(null,description);
if(cljs.core.truth_(cljs.core.some.call(null,speclj.tags.pass_tag_filter_QMARK_,tag_sets))){
speclj.reporting.report_description_STAR_.call(null,reporters,description);

return speclj.running.with_withs_bound.call(null,description,(function (){
speclj.running.eval_components.call(null,cljs.core.deref.call(null,description.before_alls));

try{return speclj.running.with_around_alls.call(null,description,cljs.core.partial.call(null,speclj.running.nested_results_for_context,description,reporters));
}finally {speclj.running.reset_withs.call(null,cljs.core.deref.call(null,description.with_alls));
}}));
} else {
return null;
}
} else {
return null;
}
});
speclj.running.process_compile_error = (function speclj$running$process_compile_error(runner,e){
var error_result = speclj.results.error_result.call(null,e);
cljs.core.swap_BANG_.call(null,runner.results,cljs.core.conj,error_result);

return speclj.reporting.report_run.call(null,error_result,speclj.config.active_reporters.call(null));
});

/**
 * @interface
 */
speclj.running.Runner = function(){};

var speclj$running$Runner$run_directories$dyn_5027 = (function (this$,directories,reporters){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.run_directories[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,directories,reporters);
} else {
var m__4426__auto__ = (speclj.running.run_directories["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,directories,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-directories",this$);
}
}
});
speclj.running.run_directories = (function speclj$running$run_directories(this$,directories,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_directories$arity$3 == null)))))){
return this$.speclj$running$Runner$run_directories$arity$3(this$,directories,reporters);
} else {
return speclj$running$Runner$run_directories$dyn_5027.call(null,this$,directories,reporters);
}
});

var speclj$running$Runner$submit_description$dyn_5028 = (function (this$,description){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.submit_description[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,description);
} else {
var m__4426__auto__ = (speclj.running.submit_description["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.submit-description",this$);
}
}
});
speclj.running.submit_description = (function speclj$running$submit_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$submit_description$arity$2 == null)))))){
return this$.speclj$running$Runner$submit_description$arity$2(this$,description);
} else {
return speclj$running$Runner$submit_description$dyn_5028.call(null,this$,description);
}
});

var speclj$running$Runner$run_description$dyn_5029 = (function (this$,description,reporters){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.run_description[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,description,reporters);
} else {
var m__4426__auto__ = (speclj.running.run_description["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,description,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-description",this$);
}
}
});
speclj.running.run_description = (function speclj$running$run_description(this$,description,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_description$arity$3 == null)))))){
return this$.speclj$running$Runner$run_description$arity$3(this$,description,reporters);
} else {
return speclj$running$Runner$run_description$dyn_5029.call(null,this$,description,reporters);
}
});

var speclj$running$Runner$run_and_report$dyn_5030 = (function (this$,reporters){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.run_and_report[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,reporters);
} else {
var m__4426__auto__ = (speclj.running.run_and_report["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-and-report",this$);
}
}
});
speclj.running.run_and_report = (function speclj$running$run_and_report(this$,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_and_report$arity$2 == null)))))){
return this$.speclj$running$Runner$run_and_report$arity$2(this$,reporters);
} else {
return speclj$running$Runner$run_and_report$dyn_5030.call(null,this$,reporters);
}
});


//# sourceMappingURL=running.js.map
