/*!CK:212351707!*//*1454900973,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["ObdU\/"]); }

__d("FunnelRegistry",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={WWW_EXAMPLE_FUNNEL:true,MSITE_EXAMPLE_FUNNEL:true,WWW_FEED_SHARE_DIALOG_FUNNEL:true,MSITE_FEED_SHARE_DIALOG_FUNNEL:true,WWW_RECRUITING_SEARCH_FUNNEL:true,MSITE_COMMENT_TYPING_FUNNEL:true,WWW_CAMPFIRE_COMPOSER_UPSELL_FUNNEL:true};},null);
__d('FunnelAction',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h='name',i='relative_time',j='tag';function k(l,m,n){this.$FunnelAction1={};this.$FunnelAction1[h]=l;this.$FunnelAction1[i]=m;if(n!==undefined)this.$FunnelAction1[j]=n;}k.prototype.getData=function(){return this.$FunnelAction1;};f.exports=k;},null);
__d('Funnel',['FunnelAction','FunnelRegistry','invariant','sprintf'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l='name',m='instance_id',n='start_time',o='tags',p='actions',q='sampling_rate',r='timeout_sec',s={EXPLICIT:'explicit',TIMEOUT:'timeout',SESSION_END:'session_end',RESTART:'restart',ACTIONS_FULL:'actions_full'},t={ACTION_END:'funnel_end',ACTION_WINDOW_BLUR:'window_blur',ACTION_WINDOW_FOCUS:'window_focus'},u=600;function v(w,x,y,z){!(i[w]===true)?j(0):undefined;this.$Funnel1=w;this.$Funnel2=x;this.$Funnel3=[];this.$Funnel4={};this.$Funnel5=y;this.$Funnel6=Date.now();this.timeout_sec=u;this.shouldTrackFocus=false;this.$Funnel7=z;this.devModeLogger('Started funnel');}v.prototype.addTag=function(w){!(typeof w==='string')?j(0):undefined;this.$Funnel4[w]=true;this.devModeLogger('Added funnel tag %s',w);return this;};v.prototype.appendAction=function(w,x){this.$Funnel3.push(new h(w,Date.now()-this.$Funnel6,x));if(x){this.devModeLogger('Appended action %s with tag %s',w,x);}else this.devModeLogger('Appended action %s',w);this.$Funnel8=w;return this;};v.prototype.appendActionIfNew=function(w,x){if(w!==this.$Funnel8)this.appendAction(w,x);return this;};v.prototype.getLogData=function(){var w={};w[l]=this.$Funnel1;if(this.$Funnel2!==undefined){w[m]=this.$Funnel2;}else w[m]=Math.floor(Math.random()*65536);w[n]=this.$Funnel6;w[q]=this.$Funnel5;w[r]=this.timeout_sec;w[o]=[];for(var x in this.$Funnel4)if(this.$Funnel4[x]===true)w[o].push(x);if(this.$Funnel3.length>0){w[p]=[];for(var y=0;y<this.$Funnel3.length;y++)w[p].push(this.$Funnel3[y].getData());}return w;};v.prototype.devModeLogger=function(){};f.exports={Funnel:v,EndType:s,ActionType:t};},null);
__d('FunnelLoggerSampler',['FunnelLoggerConfig'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();function i(k){var l=j(k);if(l===0)return false;return Math.random()*l<1;}function j(k){var l=h.freq[k];if(l===undefined)l=h.freq['default'];return l;}f.exports={shouldLog:i,getSamplingRate:j};},null);
__d('FunnelLogger',['Funnel','FunnelRegistry','FunnelLoggerSampler','MarauderLogger','invariant'],function a(b,c,d,e,f,g,h,i,j,k,l){'use strict';if(c.__markCompiled)c.__markCompiled();var m={},n=false,o=true;function p(pa,qa){var ra=aa(pa,qa);oa();ja(ra);if(j.shouldLog(pa)){m[ra]=new h.Funnel(pa,qa,j.getSamplingRate(pa),false);da(ra);}}function q(pa,qa){}function r(pa,qa,ra){if(ra===undefined){ca(pa,undefined,qa);}else if(ra)ca(pa,qa,ra);}function s(pa,qa){var ra=aa(pa,qa);if(ba(ra)){m[ra].devModeLogger('Cancelled funnel');ea(ra);m[ra]=undefined;}}function t(pa,qa){var ra=aa(pa,qa);if(ba(ra)){m[ra].appendAction(h.ActionType.ACTION_END,h.EndType.EXPLICIT);ka(ra);}}function u(pa,qa,ra){if(typeof qa==='string'){fa(pa,undefined,qa);}else if(typeof qa==='number'&&ra)fa(pa,qa,ra);}function v(pa,qa,ra){if(typeof qa==='boolean'){ga(pa,undefined,qa);}else if(typeof qa==='number')ga(pa,qa,ra);}function w(pa,qa,ra){if(typeof qa==='string'){ha(pa,undefined,qa,undefined);}else if(ra)ha(pa,qa,ra,undefined);}function x(pa,qa,ra){if(typeof qa==='string'){ia(pa,undefined,qa,undefined);}else if(ra)ia(pa,qa,ra,undefined);}function y(pa,qa,ra,sa){if(typeof qa==='string'){ha(pa,undefined,qa,ra);}else ha(pa,qa,ra,sa);}function z(pa,qa,ra,sa){if(typeof qa==='string'){ia(pa,undefined,qa,ra);}else ia(pa,qa,ra,sa);}function aa(pa,qa){!(i[pa]===true)?l(0):undefined;if(qa===undefined||qa===null){return pa;}else return pa+qa.toString();}function ba(pa){return m[pa]!==undefined;}function ca(pa,qa,ra){var sa=aa(pa,qa);if(ba(sa)){m[sa].timeout_sec=ra;m[sa].devModeLogger('Timeout set to %d sec',ra);da(sa);}}function da(pa){ea(pa);m[pa].timeout_handle=setTimeout(function(){m[pa].appendAction(h.ActionType.ACTION_END,h.EndType.TIMEOUT);ka(pa);},1000*m[pa].timeout_sec);}function ea(pa){if(m[pa].timeout_handle)clearTimeout(m[pa].timeout_handle);}function fa(pa,qa,ra){var sa=aa(pa,qa);if(ba(sa)){m[sa].addTag(ra);da(sa);}}function ga(pa,qa,ra){var sa=aa(pa,qa);if(ba(sa)){m[sa].shouldTrackFocus=ra;m[sa].devModeLogger('Focus tracking %s',ra?'on':'off');}}function ha(pa,qa,ra,sa){var ta=aa(pa,qa);if(ba(ta)){m[ta].appendAction(ra,sa);da(ta);}}function ia(pa,qa,ra,sa){var ta=aa(pa,qa);if(ba(ta))m[ta].appendActionIfNew(ra,sa);}function ja(pa){if(ba(pa)){m[pa].appendAction(h.ActionType.ACTION_END,h.EndType.RESTART);ka(pa);}}function ka(pa){if(ba(pa)){var qa=m[pa].getLogData();k.log('funnel_analytics',null,qa);m[pa].devModeLogger('Logged: %s',JSON.stringify(qa));ea(pa);m[pa]=undefined;}}function la(){for(var pa in m)if(m.hasOwnProperty(pa)&&ba(pa)){m[pa].appendAction(h.ActionType.ACTION_END,h.EndType.SESSION_END);ka(pa);}}function ma(){if(o){o=false;for(var pa in m)if(m.hasOwnProperty(pa)&&ba(pa)&&m[pa].shouldTrackFocus){m[pa].appendAction(h.ActionType.ACTION_WINDOW_BLUR);ea(pa);}}}function na(){if(!o){o=true;for(var pa in m)if(m.hasOwnProperty(pa)&&ba(pa)&&m[pa].shouldTrackFocus){m[pa].appendAction(h.ActionType.ACTION_WINDOW_FOCUS);ea(pa);}}}function oa(){if(!n){n=true;if(window.addEventListener){window.addEventListener('unload',la);window.addEventListener('blur',ma);window.addEventListener('focus',na);}}}f.exports={startFunnel:p,startFunnel_DEV_MODE:q,setFunnelTimeout:r,setFunnelTrackFocus:v,addFunnelTag:u,appendAction:w,appendActionIfNew:x,appendActionWithTag:y,appendActionWithTagIfNew:z,cancelFunnel:s,endFunnel:t};},null);
__d('ReactShareDialogLoggingStore',['ReactComposerActionTypes','ReactComposerAudienceActionTypes','ReactComposerShareNowActionTypes','ReactComposerStatusActionType','ReactComposerStoreBase','ReactComposerTaggerActionType','ReactComposerTaggerType','FunnelLogger','ReactShareDialogComposerActionType'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q,r,s='WWW_FEED_SHARE_DIALOG_FUNNEL';q=babelHelpers.inherits(t,l);r=q&&q.prototype;function t(){'use strict';var u;r.constructor.call(this,function(){return null;},function(v){u.__onDispatch(v);});u=this;this.$ReactShareDialogLoggingStore1=0;this.$ReactShareDialogLoggingStore2=false;}t.prototype.__onDispatch=function(u){'use strict';switch(u.type){case j.CANCEL_SHARE:this.$ReactShareDialogLoggingStore3(u);break;case j.SHOW_SHARENOW_MENU:this.$ReactShareDialogLoggingStore4(u);break;case j.SHARE_NOW:this.$ReactShareDialogLoggingStore5(u);break;case j.OPEN_MESSAGE_DIALOG:this.$ReactShareDialogLoggingStore6(u);break;case j.OPEN_SHARE_DIALOG:this.$ReactShareDialogLoggingStore7(u);break;case m.SET_SELECTED_TAGGER:this.$ReactShareDialogLoggingStore8(u);break;case k.SET_EDITOR_STATE:this.$ReactShareDialogLoggingStore9(u);break;case m.SET_TAGGER_DATA:this.$ReactShareDialogLoggingStore10(u);break;case h.INIT_CONFIG:this.$ReactShareDialogLoggingStore11(u);break;case h.POST_INTENDED:this.$ReactShareDialogLoggingStore12(u);break;case h.POST_SUCCEEDED:this.$ReactShareDialogLoggingStore13(u);break;case h.POST_ERROR:this.$ReactShareDialogLoggingStore14(u);break;case i.SET_AUDIENCE:this.$ReactShareDialogLoggingStore15(u);break;case p.SET_SHARE_DIALOG_TARGET:this.$ReactShareDialogLoggingStore16(u);break;default:}};t.prototype.$ReactShareDialogLoggingStore17=function(u){'use strict';return this.$ReactShareDialogLoggingStore18===u.composerID;};t.prototype.$ReactShareDialogLoggingStore4=function(u){'use strict';o.startFunnel(s);};t.prototype.$ReactShareDialogLoggingStore5=function(u){'use strict';o.appendAction(s,'share_now');o.endFunnel(s);};t.prototype.$ReactShareDialogLoggingStore6=function(u){'use strict';this.$ReactShareDialogLoggingStore2=true;o.appendAction(s,'start_send_message');};t.prototype.$ReactShareDialogLoggingStore7=function(u){'use strict';this.$ReactShareDialogLoggingStore2=true;o.appendAction(s,'start_share');};t.prototype.$ReactShareDialogLoggingStore11=function(u){'use strict';if(this.$ReactShareDialogLoggingStore2){this.$ReactShareDialogLoggingStore2=false;o.appendAction(s,'load_composer');this.$ReactShareDialogLoggingStore18=u.composerID;}};t.prototype.$ReactShareDialogLoggingStore13=function(u){'use strict';if(this.$ReactShareDialogLoggingStore17(u)){o.appendAction(s,'success');o.endFunnel(s);}};t.prototype.$ReactShareDialogLoggingStore14=function(u){'use strict';if(this.$ReactShareDialogLoggingStore17(u)){o.appendAction(s,'failure');o.endFunnel(s);}};t.prototype.$ReactShareDialogLoggingStore12=function(u){'use strict';if(this.$ReactShareDialogLoggingStore17(u))o.appendAction(s,'start_post');};t.prototype.$ReactShareDialogLoggingStore9=function(u){'use strict';if(this.$ReactShareDialogLoggingStore17(u))if(u.editorState.getLastChangeType()==='insert-characters')o.appendActionIfNew(s,'edit_text');};t.prototype.$ReactShareDialogLoggingStore8=function(u){'use strict';if(this.$ReactShareDialogLoggingStore17(u))switch(u.taggerID){case n.PEOPLE:o.appendAction(s,'peopletag_click');break;case n.LOCATION:o.appendAction(s,'locationtag_click');break;case n.ACTIVITY:o.appendAction(s,'activitytag_click');break;default:}};t.prototype.$ReactShareDialogLoggingStore10=function(u){'use strict';if(this.$ReactShareDialogLoggingStore17(u))switch(u.taggerID){case n.PEOPLE:this.$ReactShareDialogLoggingStore19(u);break;case n.LOCATION:this.$ReactShareDialogLoggingStore20(u);break;case n.ACTIVITY:this.$ReactShareDialogLoggingStore21(u);break;default:}};t.prototype.$ReactShareDialogLoggingStore19=function(u){'use strict';if(u.taggerData.length>this.$ReactShareDialogLoggingStore1){o.appendActionIfNew(s,'peopletag_add');}else o.appendActionIfNew(s,'peopletag_remove');this.$ReactShareDialogLoggingStore1=u.taggerData.length;};t.prototype.$ReactShareDialogLoggingStore20=function(u){'use strict';if(u.taggerData.place){o.appendAction(s,'locationtag_add');}else o.appendAction(s,'locationtag_remove');};t.prototype.$ReactShareDialogLoggingStore21=function(u){'use strict';if(!u.taggerData.action){o.appendAction(s,'activitytag_clear');}else if(!u.taggerData.object){o.appendAction(s,'activitytag_select');}else o.appendAction(s,'activitytag_addobject');};t.prototype.$ReactShareDialogLoggingStore3=function(u){'use strict';if(this.$ReactShareDialogLoggingStore17(u)){o.appendAction(s,'cancel_post');o.endFunnel(s);}};t.prototype.$ReactShareDialogLoggingStore15=function(u){'use strict';if(this.$ReactShareDialogLoggingStore17(u))o.appendActionWithTag(s,'set_audience',u.audience||u.legacyAudience);};t.prototype.$ReactShareDialogLoggingStore16=function(u){'use strict';if(this.$ReactShareDialogLoggingStore17(u))o.appendAction(s,'set_dialog_target');};f.exports=new t();},null);
__d('ShareNowController',['ReactComposerShareNowActions','Dialog','DOM','Event','ShareNowConstants','ShareNowCounter','ShareNowCounterEvent','csx','ReactShareDialogLoggingStore'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();c('ReactShareDialogLoggingStore');var p,q={initMenu:function(r){var s=r.getTriggerElem();k.listen(s,'success',(function(event){try{var u=event.data.response.payload;if(u.share_now_succeeded)this.showSuccess(u.message);}catch(t){}}).bind(this));k.listen(s,'error',(function(event){try{this.showError(event.data.response.errorDescription);}catch(t){this.showError();}}).bind(this));r.getPopover().subscribe('show',this._logMenuShown);},showSuccess:function(r){this.showDialog(r||l.success);},showError:function(r){this.showDialog(r||l.error);},showDialog:function(r){if(p)p.destroy();p=new i().setBody(r).setAutohide(2500).setModal(true).show();},_logMenuShown:function(){m.logEvent(n.OPEN_SHARE_NOW);h.showShareNowMenu();},attachMenuItemListeners:function(r){j.find(r.getRoot(),"._2al7").addEventListener('click',h.clickShareNow);j.find(r.getRoot(),"._2al8").addEventListener('click',h.clickWritePost);j.find(r.getRoot(),"._2al9").addEventListener('click',h.clickSendMessage);}};f.exports=q;},null);