// Compiled by ClojureScript 1.10.764 {}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__3855_SHARP_){
return p1__3855_SHARP_.seconds;
}),results));
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_3856 = (function (reporter,message){
var x__4428__auto__ = (((reporter == null))?null:reporter);
var m__4429__auto__ = (speclj.reporting.report_message[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,reporter,message);
} else {
var m__4426__auto__ = (speclj.reporting.report_message["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,reporter,message);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-message",reporter);
}
}
});
speclj.reporting.report_message = (function speclj$reporting$report_message(reporter,message){
if((((!((reporter == null)))) && ((!((reporter.speclj$reporting$Reporter$report_message$arity$2 == null)))))){
return reporter.speclj$reporting$Reporter$report_message$arity$2(reporter,message);
} else {
return speclj$reporting$Reporter$report_message$dyn_3856.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_3857 = (function (this$,description){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_description[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,description);
} else {
var m__4426__auto__ = (speclj.reporting.report_description["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-description",this$);
}
}
});
speclj.reporting.report_description = (function speclj$reporting$report_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_description$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_description$arity$2(this$,description);
} else {
return speclj$reporting$Reporter$report_description$dyn_3857.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_3858 = (function (this$,result){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_pass[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,result);
} else {
var m__4426__auto__ = (speclj.reporting.report_pass["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pass",this$);
}
}
});
speclj.reporting.report_pass = (function speclj$reporting$report_pass(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pass$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pass$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pass$dyn_3858.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_3859 = (function (this$,result){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_pending[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,result);
} else {
var m__4426__auto__ = (speclj.reporting.report_pending["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pending",this$);
}
}
});
speclj.reporting.report_pending = (function speclj$reporting$report_pending(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pending$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pending$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pending$dyn_3859.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_3860 = (function (this$,result){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_fail[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,result);
} else {
var m__4426__auto__ = (speclj.reporting.report_fail["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-fail",this$);
}
}
});
speclj.reporting.report_fail = (function speclj$reporting$report_fail(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_fail$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_fail$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_fail$dyn_3860.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_3861 = (function (this$,results){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_runs[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,results);
} else {
var m__4426__auto__ = (speclj.reporting.report_runs["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,results);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-runs",this$);
}
}
});
speclj.reporting.report_runs = (function speclj$reporting$report_runs(this$,results){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_runs$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_runs$arity$2(this$,results);
} else {
return speclj$reporting$Reporter$report_runs$dyn_3861.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_3862 = (function (this$,exception){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_error[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,exception);
} else {
var m__4426__auto__ = (speclj.reporting.report_error["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,exception);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-error",this$);
}
}
});
speclj.reporting.report_error = (function speclj$reporting$report_error(this$,exception){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_error$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_error$arity$2(this$,exception);
} else {
return speclj$reporting$Reporter$report_error$dyn_3862.call(null,this$,exception);
}
});

if((typeof speclj !== 'undefined') && (typeof speclj.reporting !== 'undefined') && (typeof speclj.reporting.report_run !== 'undefined')){
} else {
speclj.reporting.report_run = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"speclj.reporting","report-run"),(function (result,reporters){
return cljs.core.type.call(null,result);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PassResult,(function (result,reporters){
var seq__3863 = cljs.core.seq.call(null,reporters);
var chunk__3864 = null;
var count__3865 = (0);
var i__3866 = (0);
while(true){
if((i__3866 < count__3865)){
var reporter = cljs.core._nth.call(null,chunk__3864,i__3866);
speclj.reporting.report_pass.call(null,reporter,result);


var G__3867 = seq__3863;
var G__3868 = chunk__3864;
var G__3869 = count__3865;
var G__3870 = (i__3866 + (1));
seq__3863 = G__3867;
chunk__3864 = G__3868;
count__3865 = G__3869;
i__3866 = G__3870;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__3863);
if(temp__5804__auto__){
var seq__3863__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3863__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__3863__$1);
var G__3871 = cljs.core.chunk_rest.call(null,seq__3863__$1);
var G__3872 = c__4556__auto__;
var G__3873 = cljs.core.count.call(null,c__4556__auto__);
var G__3874 = (0);
seq__3863 = G__3871;
chunk__3864 = G__3872;
count__3865 = G__3873;
i__3866 = G__3874;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__3863__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__3875 = cljs.core.next.call(null,seq__3863__$1);
var G__3876 = null;
var G__3877 = (0);
var G__3878 = (0);
seq__3863 = G__3875;
chunk__3864 = G__3876;
count__3865 = G__3877;
i__3866 = G__3878;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.FailResult,(function (result,reporters){
var seq__3879 = cljs.core.seq.call(null,reporters);
var chunk__3880 = null;
var count__3881 = (0);
var i__3882 = (0);
while(true){
if((i__3882 < count__3881)){
var reporter = cljs.core._nth.call(null,chunk__3880,i__3882);
speclj.reporting.report_fail.call(null,reporter,result);


var G__3883 = seq__3879;
var G__3884 = chunk__3880;
var G__3885 = count__3881;
var G__3886 = (i__3882 + (1));
seq__3879 = G__3883;
chunk__3880 = G__3884;
count__3881 = G__3885;
i__3882 = G__3886;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__3879);
if(temp__5804__auto__){
var seq__3879__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3879__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__3879__$1);
var G__3887 = cljs.core.chunk_rest.call(null,seq__3879__$1);
var G__3888 = c__4556__auto__;
var G__3889 = cljs.core.count.call(null,c__4556__auto__);
var G__3890 = (0);
seq__3879 = G__3887;
chunk__3880 = G__3888;
count__3881 = G__3889;
i__3882 = G__3890;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__3879__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__3891 = cljs.core.next.call(null,seq__3879__$1);
var G__3892 = null;
var G__3893 = (0);
var G__3894 = (0);
seq__3879 = G__3891;
chunk__3880 = G__3892;
count__3881 = G__3893;
i__3882 = G__3894;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PendingResult,(function (result,reporters){
var seq__3895 = cljs.core.seq.call(null,reporters);
var chunk__3896 = null;
var count__3897 = (0);
var i__3898 = (0);
while(true){
if((i__3898 < count__3897)){
var reporter = cljs.core._nth.call(null,chunk__3896,i__3898);
speclj.reporting.report_pending.call(null,reporter,result);


var G__3899 = seq__3895;
var G__3900 = chunk__3896;
var G__3901 = count__3897;
var G__3902 = (i__3898 + (1));
seq__3895 = G__3899;
chunk__3896 = G__3900;
count__3897 = G__3901;
i__3898 = G__3902;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__3895);
if(temp__5804__auto__){
var seq__3895__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3895__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__3895__$1);
var G__3903 = cljs.core.chunk_rest.call(null,seq__3895__$1);
var G__3904 = c__4556__auto__;
var G__3905 = cljs.core.count.call(null,c__4556__auto__);
var G__3906 = (0);
seq__3895 = G__3903;
chunk__3896 = G__3904;
count__3897 = G__3905;
i__3898 = G__3906;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__3895__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__3907 = cljs.core.next.call(null,seq__3895__$1);
var G__3908 = null;
var G__3909 = (0);
var G__3910 = (0);
seq__3895 = G__3907;
chunk__3896 = G__3908;
count__3897 = G__3909;
i__3898 = G__3910;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.ErrorResult,(function (result,reporters){
var seq__3911 = cljs.core.seq.call(null,reporters);
var chunk__3912 = null;
var count__3913 = (0);
var i__3914 = (0);
while(true){
if((i__3914 < count__3913)){
var reporter = cljs.core._nth.call(null,chunk__3912,i__3914);
speclj.reporting.report_error.call(null,reporter,result);


var G__3915 = seq__3911;
var G__3916 = chunk__3912;
var G__3917 = count__3913;
var G__3918 = (i__3914 + (1));
seq__3911 = G__3915;
chunk__3912 = G__3916;
count__3913 = G__3917;
i__3914 = G__3918;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__3911);
if(temp__5804__auto__){
var seq__3911__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3911__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__3911__$1);
var G__3919 = cljs.core.chunk_rest.call(null,seq__3911__$1);
var G__3920 = c__4556__auto__;
var G__3921 = cljs.core.count.call(null,c__4556__auto__);
var G__3922 = (0);
seq__3911 = G__3919;
chunk__3912 = G__3920;
count__3913 = G__3921;
i__3914 = G__3922;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__3911__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__3923 = cljs.core.next.call(null,seq__3911__$1);
var G__3924 = null;
var G__3925 = (0);
var G__3926 = (0);
seq__3911 = G__3923;
chunk__3912 = G__3924;
count__3913 = G__3925;
i__3914 = G__3926;
continue;
}
} else {
return null;
}
}
break;
}
}));
speclj.reporting.stylizer = (function speclj$reporting$stylizer(code){
return (function (text){
if(cljs.core.truth_(speclj.config._STAR_color_QMARK__STAR_)){
return ["\u001B[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code),"m",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\u001B[0m"].join('');
} else {
return text;
}
});
});
speclj.reporting.red = speclj.reporting.stylizer.call(null,"31");
speclj.reporting.green = speclj.reporting.stylizer.call(null,"32");
speclj.reporting.yellow = speclj.reporting.stylizer.call(null,"33");
speclj.reporting.grey = speclj.reporting.stylizer.call(null,"90");
speclj.reporting.print_elides = (function speclj$reporting$print_elides(n){
if((n > (0))){
return cljs.core.println.call(null,"\t...",n,"stack levels elided ...");
} else {
return null;
}
});
speclj.reporting.print_stack_levels = (function speclj$reporting$print_stack_levels(exception){
var levels_3927 = speclj.platform.stack_trace.call(null,exception);
var elides_3928 = (0);
while(true){
if(cljs.core.seq.call(null,levels_3927)){
var level_3929 = cljs.core.first.call(null,levels_3927);
if(speclj.platform.elide_level_QMARK_.call(null,level_3929)){
var G__3930 = cljs.core.rest.call(null,levels_3927);
var G__3931 = (elides_3928 + (1));
levels_3927 = G__3930;
elides_3928 = G__3931;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_3928);

cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_3929));

var G__3932 = cljs.core.rest.call(null,levels_3927);
var G__3933 = (0);
levels_3927 = G__3932;
elides_3928 = G__3933;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_3928);
}
break;
}

var temp__5802__auto__ = speclj.platform.cause.call(null,exception);
if(cljs.core.truth_(temp__5802__auto__)){
var cause = temp__5802__auto__;
return speclj.reporting.print_exception.call(null,"Caused by:",cause);
} else {
return null;
}
});
speclj.reporting.print_exception = (function speclj$reporting$print_exception(prefix,exception){
if(cljs.core.truth_(prefix)){
cljs.core.println.call(null,prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception));
} else {
cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception));
}

return speclj.reporting.print_stack_levels.call(null,exception);
});
speclj.reporting.stack_trace_str = (function speclj$reporting$stack_trace_str(exception){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__3934_3938 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__3935_3939 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__3936_3940 = true;
var _STAR_print_fn_STAR__temp_val__3937_3941 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__3936_3940);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__3937_3941);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__3935_3939);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__3934_3938);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__4742__auto__ = [];
var len__4736__auto___3945 = arguments.length;
var i__4737__auto___3946 = (0);
while(true){
if((i__4737__auto___3946 < len__4736__auto___3945)){
args__4742__auto__.push((arguments[i__4737__auto___3946]));

var G__3947 = (i__4737__auto___3946 + (1));
i__4737__auto___3946 = G__3947;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic = (function (pre,args){
var value = cljs.core.apply.call(null,cljs.core.str,args);
var lines = clojure.string.split.call(null,value,/[\r\n]+/);
var prefixed_lines = cljs.core.map.call(null,(function (p1__3942_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__3942_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq3943){
var G__3944 = cljs.core.first.call(null,seq3943);
var seq3943__$1 = cljs.core.next.call(null,seq3943);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3944,seq3943__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__4742__auto__ = [];
var len__4736__auto___3950 = arguments.length;
var i__4737__auto___3951 = (0);
while(true){
if((i__4737__auto___3951 < len__4736__auto___3950)){
args__4742__auto__.push((arguments[i__4737__auto___3951]));

var G__3952 = (i__4737__auto___3951 + (1));
i__4737__auto___3951 = G__3952;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic = (function (n,args){
var spaces = ((n * 2.0) | (0));
var indention = cljs.core.reduce.call(null,(function (p,_){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join('');
}),"",cljs.core.range.call(null,spaces));
return cljs.core.apply.call(null,speclj.reporting.prefix,indention,args);
}));

(speclj.reporting.indent.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq3948){
var G__3949 = cljs.core.first.call(null,seq3948);
var seq3948__$1 = cljs.core.next.call(null,seq3948);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3949,seq3948__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__3953 = cljs.core.seq.call(null,reporters);
var chunk__3954 = null;
var count__3955 = (0);
var i__3956 = (0);
while(true){
if((i__3956 < count__3955)){
var reporter = cljs.core._nth.call(null,chunk__3954,i__3956);
speclj.reporting.report_description.call(null,reporter,description);


var G__3957 = seq__3953;
var G__3958 = chunk__3954;
var G__3959 = count__3955;
var G__3960 = (i__3956 + (1));
seq__3953 = G__3957;
chunk__3954 = G__3958;
count__3955 = G__3959;
i__3956 = G__3960;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__3953);
if(temp__5804__auto__){
var seq__3953__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3953__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__3953__$1);
var G__3961 = cljs.core.chunk_rest.call(null,seq__3953__$1);
var G__3962 = c__4556__auto__;
var G__3963 = cljs.core.count.call(null,c__4556__auto__);
var G__3964 = (0);
seq__3953 = G__3961;
chunk__3954 = G__3962;
count__3955 = G__3963;
i__3956 = G__3964;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__3953__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__3965 = cljs.core.next.call(null,seq__3953__$1);
var G__3966 = null;
var G__3967 = (0);
var G__3968 = (0);
seq__3953 = G__3965;
chunk__3954 = G__3966;
count__3955 = G__3967;
i__3956 = G__3968;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_runs_STAR_ = (function speclj$reporting$report_runs_STAR_(reporters,results){
var seq__3969 = cljs.core.seq.call(null,reporters);
var chunk__3970 = null;
var count__3971 = (0);
var i__3972 = (0);
while(true){
if((i__3972 < count__3971)){
var reporter = cljs.core._nth.call(null,chunk__3970,i__3972);
speclj.reporting.report_runs.call(null,reporter,results);


var G__3973 = seq__3969;
var G__3974 = chunk__3970;
var G__3975 = count__3971;
var G__3976 = (i__3972 + (1));
seq__3969 = G__3973;
chunk__3970 = G__3974;
count__3971 = G__3975;
i__3972 = G__3976;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__3969);
if(temp__5804__auto__){
var seq__3969__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3969__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__3969__$1);
var G__3977 = cljs.core.chunk_rest.call(null,seq__3969__$1);
var G__3978 = c__4556__auto__;
var G__3979 = cljs.core.count.call(null,c__4556__auto__);
var G__3980 = (0);
seq__3969 = G__3977;
chunk__3970 = G__3978;
count__3971 = G__3979;
i__3972 = G__3980;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__3969__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__3981 = cljs.core.next.call(null,seq__3969__$1);
var G__3982 = null;
var G__3983 = (0);
var G__3984 = (0);
seq__3969 = G__3981;
chunk__3970 = G__3982;
count__3971 = G__3983;
i__3972 = G__3984;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_message_STAR_ = (function speclj$reporting$report_message_STAR_(reporters,message){
var seq__3985 = cljs.core.seq.call(null,reporters);
var chunk__3986 = null;
var count__3987 = (0);
var i__3988 = (0);
while(true){
if((i__3988 < count__3987)){
var reporter = cljs.core._nth.call(null,chunk__3986,i__3988);
speclj.reporting.report_message.call(null,reporter,message);


var G__3989 = seq__3985;
var G__3990 = chunk__3986;
var G__3991 = count__3987;
var G__3992 = (i__3988 + (1));
seq__3985 = G__3989;
chunk__3986 = G__3990;
count__3987 = G__3991;
i__3988 = G__3992;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__3985);
if(temp__5804__auto__){
var seq__3985__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3985__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__3985__$1);
var G__3993 = cljs.core.chunk_rest.call(null,seq__3985__$1);
var G__3994 = c__4556__auto__;
var G__3995 = cljs.core.count.call(null,c__4556__auto__);
var G__3996 = (0);
seq__3985 = G__3993;
chunk__3986 = G__3994;
count__3987 = G__3995;
i__3988 = G__3996;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__3985__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__3997 = cljs.core.next.call(null,seq__3985__$1);
var G__3998 = null;
var G__3999 = (0);
var G__4000 = (0);
seq__3985 = G__3997;
chunk__3986 = G__3998;
count__3987 = G__3999;
i__3988 = G__4000;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_error_STAR_ = (function speclj$reporting$report_error_STAR_(reporters,exception){
var seq__4001 = cljs.core.seq.call(null,reporters);
var chunk__4002 = null;
var count__4003 = (0);
var i__4004 = (0);
while(true){
if((i__4004 < count__4003)){
var reporter = cljs.core._nth.call(null,chunk__4002,i__4004);
speclj.reporting.report_error.call(null,reporter,exception);


var G__4005 = seq__4001;
var G__4006 = chunk__4002;
var G__4007 = count__4003;
var G__4008 = (i__4004 + (1));
seq__4001 = G__4005;
chunk__4002 = G__4006;
count__4003 = G__4007;
i__4004 = G__4008;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__4001);
if(temp__5804__auto__){
var seq__4001__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4001__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__4001__$1);
var G__4009 = cljs.core.chunk_rest.call(null,seq__4001__$1);
var G__4010 = c__4556__auto__;
var G__4011 = cljs.core.count.call(null,c__4556__auto__);
var G__4012 = (0);
seq__4001 = G__4009;
chunk__4002 = G__4010;
count__4003 = G__4011;
i__4004 = G__4012;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__4001__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__4013 = cljs.core.next.call(null,seq__4001__$1);
var G__4014 = null;
var G__4015 = (0);
var G__4016 = (0);
seq__4001 = G__4013;
chunk__4002 = G__4014;
count__4003 = G__4015;
i__4004 = G__4016;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=reporting.js.map
