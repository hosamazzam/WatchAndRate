/*!CK:1723133161!*//*1454913536,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["WVTdc"]); }

__d("CampfireLoggerEvents",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={CONSUME_READER_DRAFT:"consume_reader_draft",CONSUME_READER_PUBLISHED_NOTE:"consume_reader_published_note",CONSUME_READER_EXIT_DRAFT:"consume_reader_exit_draft",CONSUME_READER_EXIT_PUBLISHED:"consume_reader_exit_published",CONSUME_PERMALINK_DRAFT:"consume_permalink_draft",CONSUME_PERMALINK_PUBLISHED_NOTE:"consume_permalink_published_note",CONSUME_PERMALINK_EXIT_DRAFT:"consume_permalink_exit_draft",CONSUME_PERMALINK_EXIT_PUBLISHED:"consume_permalink_exit_published",CONSUME_AS_INSTANT_ARTICLE:"consume_as_instant_article",COMPOSE_CREATE_DRAFT:"compose_create_draft",COMPOSE_EDIT_DRAFT:"compose_edit_draft",COMPOSE_DELETE_DRAFT:"compose_delete_draft",COMPOSE_PUBLISH_DRAFT:"compose_publish_draft",COMPOSE_EDIT_PUBLISHED_NOTE:"compose_edit_published_note",COMPOSE_UPDATE_PUBLISHED_NOTE:"compose_update_published_note",COMPOSE_DELETE_PUBLISHED_NOTE:"compose_delete_published_note",COMPOSE_EXIT_COMPOSER:"compose_exit_composer"};},null);
__d("CampfireLoggerNoteTypes",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={CAMPFIRE:"campfire",MOBILE_CAMPFIRE:"mobile_campfire",OLD:"old"};},null);
__d('CampfireTimeSpentMonitor',['BanzaiLogger','CampfireLoggerEvents','CampfireLoggerNoteTypes','Run'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();function l(m,n){this.$CampfireTimeSpentMonitor1=m;this.$CampfireTimeSpentMonitor2=n;k.onBeforeUnload(this.$CampfireTimeSpentMonitor3.bind(this));this.$CampfireTimeSpentMonitor4=Date.now();}l.prototype.$CampfireTimeSpentMonitor3=function(){var m=Date.now(),n=Math.round((m-this.$CampfireTimeSpentMonitor4)/1000);h.log('CampfireNotesLoggerConfig',{event:i.CONSUME_PERMALINK_EXIT_PUBLISHED,event_time:m,note_id:Number(this.$CampfireTimeSpentMonitor1),note_type:j.CAMPFIRE,author_id:Number(this.$CampfireTimeSpentMonitor2.ownerID),is_author_verified:this.$CampfireTimeSpentMonitor2.isAuthorVerified,is_author_page:this.$CampfireTimeSpentMonitor2.isAuthorPage,time_spent_reading_sec:n});};f.exports=l;},null);
__d("XBrowserPushDisabledController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/notifications\/client\/push\/disabled\/",{});},null);
__d("XBrowserPushXOutController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/notifications\/client\/push\/xout\/",{});},null);
__d("XServiceWorkerSessionChangeController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/service_workers\/session\/persist\/",{});},null);
__d('BrowserPushSessionChange.react',['AsyncRequest','BanzaiLogger','Image.react','ImageBlock.react','LayerFadeOnHide','React','ReactLayeredComponentMixin','ReloadPage','XBrowserPushDisabledController','XBrowserPushXOutController','XServiceWorkerSessionChangeController','XUIDialog.react','XUIDialogBody.react','XUIDialogButton.react','XUIDialogFooter.react','XUIDialogOkayButton.react','XUIDialogTitle.react','XUISpinner.react','XUIText.react','cx','fbt','ix'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca){if(c.__markCompiled)c.__markCompiled();var da=m.PropTypes,ea=m.createClass({displayName:'BrowserPushSessionChange',mixins:[n],propTypes:{onHide:da.func.isRequired,push:da.object.isRequired},getInitialState:function(){return {dialogShown:true,spin:false};},_onToggle:function(fa){if(fa)return;this.setState({dialogShown:false});this._logEvent('session_keep');var ga=r.getURIBuilder().getURI();new h().setURI(ga).setMethod('post').setData({app_id:this.props.push.appID}).setAllowCrossPageTransition(true).setHandler((function(ha){this.props.onHide();}).bind(this)).send();},_logEvent:function(event){var fa={event:event,appid:this.props.push.appID,surface:'session_change'};i.log('BrowserPushLoggerConfig',fa);},_doNotPersist:function(){this.setState({spin:true});this._logEvent('session_uninstall');this._logEvent('xout');var fa=q.getURIBuilder().getURI(),ga=(function(){this.props.push.unregisterPushAndSW(p,h).then(function(ha){o.now();})['catch'](function(ha){throw ha;});}).bind(this);new h().setURI(fa).setMethod('post').setHandler(ga).setAllowCrossPageTransition(true).send();},componentDidMount:function(){this._logEvent('session_change_prompt');},renderLayers:function(){if(!this.state.dialogShown)return {};var fa=ca('/images/notifications/potsy_jump.png');return {dialog:m.createElement(s,{shown:true,behaviors:{LayerFadeOnHide:l},onToggle:this._onToggle,width:445},m.createElement(x,null,ba._("Desktop Notifications Are On")),m.createElement(t,null,this.state.spin?m.createElement(y,{size:'large'}):m.createElement(k,{spacing:'medium'},m.createElement(j,{src:fa,alt:ba._("Desktop Notifications Are On")}),m.createElement('div',null,m.createElement('div',{className:"_3-8h"},m.createElement(z,{size:'large'},ba._("When you get a new notification, you'll see it in the corner of your screen."))),m.createElement('div',{className:"_3-8h"},m.createElement(z,{size:'small'},ba._("To be sure you get notifications, you'll now stay logged into Facebook on this computer. If you're using a public computer or don't want to stay logged in, click Undo to turn off desktop notifications.")))))),m.createElement(v,null,m.createElement(u,{action:'button',label:ba._("Undo"),onClick:this._doNotPersist}),m.createElement(w,{use:'confirm',action:'cancel'})))};},render:function(){return (m.createElement('span',null));}});f.exports=ea;},null);
__d('NotificationPermissionNotice.react',['Event','Keys','React','ReactLayeredComponentMixin','XUIAmbientNUX.react','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=[],p=j.PropTypes,q=j.createClass({displayName:'NotificationPermissionNotice',mixins:[k],propTypes:{onHide:p.func.isRequired,shortText:p.bool},componentDidMount:function(){o.push(h.listen(window,'mousedown',this.props.onHide));o.push(h.listen(window,'keydown',(function(event){if(event.keyCode===i.ESC)this.props.onHide();}).bind(this)));},componentWillUnmount:function(){while(o.length>0){var r=o.pop();r.remove();}},renderLayers:function(){var r=this.props.shortText?n._("Click the lock to give Chrome permission to send you desktop notifications."):n._("If you change your mind, click the lock to give Chrome permission to send you desktop notifications.");return {nux:j.createElement(l,{contextRef:(function(){return this.refs.noticeAnchor;}).bind(this),shown:true,position:'below',onCloseButtonClick:this.props.onHide},r)};},render:function(){return (j.createElement('span',{ref:'noticeAnchor',className:"_1_i1"}));}});f.exports=q;},null);
__d('Spotlight.react',['LayerHideOnBlur','LayerHideOnEscape','ReactLayer','Spotlight'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=j.createClass({getDefaultEnabledBehaviors:function(){return {hideOnBlur:h,hideOnEscape:i};},createLayer:function(m){var n=this.enumerateBehaviors(this.props.behaviors),o={addedBehaviors:n,rootClassName:this.props.rootClassName},p=new k(o,m);p.conditionShow(this.props.shown);if(this.props.onBeforeHide)p.subscribe('beforehide',this.props.onBeforeHide);if(this.props.onHide)p.subscribe('hide',this.props.onHide);return p;},receiveProps:function(m){this.layer.conditionShow(m.shown);}});f.exports=l;},null);
__d('NotificationPermissionRequest.react',['Spotlight.react','React','ReactLayeredComponentMixin','cx'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=i.PropTypes,m=i.createClass({displayName:'NotificationPermissionRequest',mixins:[j],propTypes:{onHide:l.func.isRequired},renderLayers:function(){return {spotlight:i.createElement(h,{shown:true,onHide:this.props.onHide},i.createElement('div',{className:"_n3"}))};},render:function(){return i.createElement('span',null);}});f.exports=m;},null);
__d('BrowserPushDirectPromptInstaller',['Arbiter','AsyncRequest','BanzaiLogger','BrowserPushSessionChange.react','DOM','NotificationPermissionNotice.react','NotificationPermissionRequest.react','PushRegistration','React','ReactDOM','XBrowserPushDisabledController','XBrowserPushXOutController','XPushRegisterServiceWorkerController'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){if(c.__markCompiled)c.__markCompiled();var u=false;function v(event,z){var aa={event:event,appid:z,surface:'prompt'};j.log('BrowserPushLoggerConfig',aa);}function w(z){if(!u){u=true;q.unmountComponentAtNode(z);}}function x(z,aa){var ba=l.insertBefore(z,l.create('span')),ca=ba.pop();q.render(p.createElement(k,{onHide:function(){q.unmountComponentAtNode(z);},push:aa}),ca);}var y={installPush:function(z,aa,ba,ca,da,ea){var fa=o.get(z,aa);fa.isPushRegistered(ca,t,r,i,!!ea,function(){x(ba,fa);}).then(function(ga){if(ga||da)return;if(o.pushPermissionIsPending())q.render(p.createElement(n,{onHide:function(){w(ba);}}),ba);v('turn_on',aa);fa.registerPush(t,i,function(){x(ba,fa);}).then(function(){w(ba);v('install',aa);h.inform('BrowserPushInstall/installed');})['catch'](function(ha){w(ba);if(window.Notification&&window.Notification.permission==='denied'){q.render(p.createElement(m,{onHide:function(){q.unmountComponentAtNode(ba);}}),ba);v('deny',aa);}else v('install_ignore',aa);var ia=s.getURIBuilder().getURI();new i().setURI(ia).setMethod('post').send();v('xout',aa);});})['catch'](function(){});}};f.exports=y;},null);