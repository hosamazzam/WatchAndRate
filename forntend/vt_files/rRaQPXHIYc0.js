/*!CK:3786585710!*//*1454902928,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["y6Q+C"]); }

__d("P2PPaymentRequestStatus",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={INITED:1,DECLINED:2,TRANSFER_INITED:3,TRANSFER_COMPLETED:4,TRANSFER_FAILED:5,CANCELED:6,EXPIRED:7};},null);
__d("P2PTransferStatus",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={PENDING_SENDER_MANUAL_REVIEW:1,PENDING_SENDER_VERIFICATION:2,CANCELED_SENDER_RISK:3,PENDING_RECIPIENT_NUX:4,CANCELED_DECLINED:5,PENDING_RECIPIENT_VERIFICATION:6,PENDING_RECIPIENT_MANUAL_REVIEW:7,PENDING_RECIPIENT_PROCESSING:8,PENDING_PUSH_FAIL:9,CANCELED_RECIPIENT_RISK:10,CANCELED_SYSTEM_FAIL:11,CANCELED_EXPIRED:12,COMPLETED:13,INTERMEDIATE_PROCESSING:14,PENDING_SENDER_INITED:15,CANCELED_SAME_CARD:16,PENDING_SENDER_VERIFICATION_PROCESSING:17,PENDING_RECIPIENT_VERIFICATION_PROCESSING:18};},null);
__d('MercuryAttachmentError.react',['XUINotice.react','XUIText.react','React','fbt'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l=j.createClass({displayName:'MercuryAttachmentError',render:function(){return (j.createElement(h,{use:'warn'},j.createElement(i,{size:'small'},k._("This attachment could not be loaded."))));}});f.exports=l;},null);
__d('BanzaiScribe',['Banzai'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(k){return {log:function(l,m,n){var o=[m];if(n!=null)o.push(n);h.post('scribe:'+l,o,k);}};}var j=i({});j.create=i;f.exports=j;},null);
__d('MessengerButton.react',['Link.react','ReactComponentWithPureRenderMixin','React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l){'use strict';if(c.__markCompiled)c.__markCompiled();var m=j.PropTypes,n=j.createClass({displayName:'MessengerButton',mixins:[i],propTypes:{label:m.string.isRequired,type:m.oneOf(['primary','secondary']).isRequired,use:m.oneOf(['default','danger']).isRequired},getDefaultProps:function(){return {use:'default'};},handleLinkClick:function(o){if(this.props.disabled){o.preventDefault();}else if(this.props.onClick)this.props.onClick(o);},render:function(){var o=this.props,p=o.className,q=o.label,r=babelHelpers.objectWithoutProperties(o,['className','label']),s=babelHelpers._extends({className:l("_3quh"+(' '+"_30yy")+(this.props.type==='primary'?' '+"_2t_":'')+(this.props.type==='secondary'?' '+"_2u0":'')+(this.props.use==='danger'?' '+"_3ay_":'')+(this.props.disabled?' '+"_4zab":''),p)},r,{onClick:this.handleLinkClick});return (this.props.href?j.createElement(h,s,q):j.createElement('button',s,q));}});f.exports=n;},null);
__d('MessengerDialog.react',['LayerFadeOnHide','LayerHideOnEscape','React','XUIDialog.react','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n=j.PropTypes,o=j.createClass({displayName:'MessengerDialog',propTypes:{onToggle:n.func.isRequired,repositionOnUpdate:n.bool,shown:n.bool,type:n.oneOf(['alert','default']),width:n.number},getDefaultProps:function(){return {repositionOnUpdate:false,shown:true,type:'alert',width:400};},componentDidUpdate:function(){if(this.props.repositionOnUpdate)setTimeout((function(){if(this.isMounted()&&this.refs.dialog&&this.refs.dialog.layer)this.refs.dialog.layer.updatePosition();}).bind(this),0);},render:function(){return (j.createElement(k,babelHelpers._extends({behaviors:{LayerFadeOnHide:h,LayerHideOnEscape:i}},this.props,{className:m("_4ebx",this.props.className),ref:'dialog'}),j.createElement('div',{className:"_4eby"+(this.props.type==='alert'?' '+"_2c9g":'')+(this.props.type==='default'?' '+"_2c9i":'')},this.props.children)));}});f.exports=o;},null);
__d('MessengerDialogBody.react',['React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();var k=h.createClass({displayName:'MessengerDialogBody',render:function(){return (h.createElement('div',{className:j("_4eb-",this.props.className)},this.props.children));}});f.exports=k;},null);
__d('MessengerDialogButton.react',['MessengerButton.react','ReactComponentWithPureRenderMixin','React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l){'use strict';if(c.__markCompiled)c.__markCompiled();var m=j.PropTypes,n=j.createClass({displayName:'MessengerDialogButton',mixins:[i],propTypes:{action:m.oneOf(['button','cancel','confirm'])},render:function(){var o=this.props,p=o.action,q=o.className,r=babelHelpers.objectWithoutProperties(o,['action','className']);return (j.createElement(h,babelHelpers._extends({className:l(q,"_5ixy"+(p==='button'?' '+"layerButton":'')+(p==='cancel'?' '+"layerCancel":'')+(p==='confirm'?' '+"layerConfirm":''))},r)));}});f.exports=n;},null);
__d('MessengerDialogFooter.react',['LeftRight.react','React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l=i.PropTypes,m=i.createClass({displayName:'MessengerDialogFooter',propTypes:{leftContent:l.object},render:function(){return (i.createElement('div',{className:k("_4eb_",this.props.className)},i.createElement(h,null,i.createElement('div',{className:"_2_d1"},this.props.leftContent),i.createElement('div',null,this.props.children))));}});f.exports=m;},null);
__d('MessengerDialogHeader.react',['React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();var k=h.createClass({displayName:'MessengerDialogHeader',render:function(){return (h.createElement('h2',{className:j("_4ebz",this.props.className),id:this.props.id},this.props.children));}});f.exports=k;},null);
__d('SamplingPolicyBase',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){'use strict';throw 'Tried to instantiate SamplingPolicyBase';}h.prototype.getName=function(){'use strict';return this.name;};h.prototype.isSampled=function(){'use strict';if(typeof this.sampled=='undefined')this.sampled=this.decideIfSampled();return this.sampled;};f.exports=h;},null);
__d('FbtraceForcedByServerPolicy',['FbtraceForcedByServer','SamplingPolicyBase'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j;function k(){this.name='FbtraceForcedByServerPolicy';}k.get=function(){if(typeof j=='undefined')j=new k();return j;};function l(){return h.forced;}Object.assign(k.prototype,i.prototype,{decideIfSampled:l});f.exports=k;},null);
__d("guardFunction",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k){return function(){if(i.apply(k||this,arguments))j.apply(k||this,arguments);};}f.exports=h;},null);
__d('Fbtrace',['Arbiter','BanzaiScribe','ErrorUtils','FbtraceForcedByServer','FbtraceForcedByServerPolicy','Random','SiteData','guardFunction'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p,q;'use strict';var r='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',s='AAAAAAAAAAA';p=babelHelpers.inherits(t,Error);q=p&&p.prototype;function t(ia){q.constructor.call(this,ia);}function u(ia){j.reportError(new t(ia));}function v(){var ia=function(){var la=0,ma=0,na='';for(var oa=10;oa>=0;oa--){if(la<6){ma=m.uint32();la=32;}if(oa===0)ma=ma&7;na=r.charAt(ma&63)+na;ma>>=6;la-=6;}return na;},ja,ka;for(ja=3;ja>0;ja--){ka=ia();if(ka!=s)return ka;}u('failed to generate valid Fbtrace id');return s;}function w(){Object.assign(this,w);}Object.assign(w,{isOn:function(){return false;},replySend:function(ia,ja){},requestSend:function(ia,ja,ka){ca(ia,ja);return {metadata:function(){return undefined;},replyReceive:function(la){}};}});var x=new w();function y(ia,ja,ka){if(!ia)throw {name:'ArgumentError',message:'no valid service name specified'};if(!ja)throw {name:'ArgumentError',message:'no valid version specified'};var la=i,ma=0,na=v(),oa=v(),pa=ba(na),qa={service:ia,version:ja},ra=function(wa){if(typeof wa=='undefined')return 'undefined';if(typeof wa!='string')wa=ra(JSON.stringify(wa));return wa;},sa=function(wa){var xa='';for(var ya in wa){if(xa.length>0)xa+='\x02';xa+=ra(ya)+'\x03'+ra(wa[ya]);}return xa;},ta=function(wa,xa,event,ya,za){ma++;return [za,ma,na,wa,xa,ra(event),sa(ya)].join('\x01');},ua=function(wa,xa,event,ya,za){if(!za&&typeof za=='undefined')za=Date.now()*1000;var ab=ta(wa,xa,event,ya,za);la.log('fbtrace',ab,pa);},va=function(){return oa;};ua(s,oa,'#rqrecv',Object.assign(ka||{},qa));Object.assign(this,y,{replySend:function(wa,xa){xa=babelHelpers._extends({},xa,qa,{success:wa?'true':'false'});ua(s,oa,'#rpsend',xa);},requestSend:function(wa,xa,ya){ca(wa,xa);var za=va(),ab=v();ya=babelHelpers._extends({},ya,qa,{op:wa,'remote:service':xa});ua(za,ab,'#rqsend',ya);return {metadata:function(){return na+ab;},replyReceive:function(bb){ua(za,ab,'#rprecv',Object.assign(bb||{},qa));},parentNode:this};}});}Object.assign(y,{isOn:function(){return true;}});function z(){return x;}function aa(ia,ja,ka){ka=ka||{};ka.init=true;var la=l.get();if(la.isSampled()){return new y(ia,ja,ka);}else return new w();}function ba(ia){var ja=ia.charAt(ia.length-1);return r.indexOf(ja)%32;}function ca(ia,ja){if(!ia)throw {name:'ArgumentError',message:'no valid operation specified'};if(!ja)throw {name:'ArgumentError',message:'no valid remote:service specified'};}function da(ia,ja){var ka=x,la;x=ia;try{la=ja();}finally{x=ka;}return la;}var ea=function(ia,ja){var ka=z(),la=ja.request,ma=false;if(!ka.isOn()&&k.forced&&/\/upload\/(?:composer|photos)\/|\/ajax\/composerx\/attachment\/media\//.test(la.uri.toString())){ka=aa('photo_upload_kludge',String(n.revision||'dev'),{policy:'PhotoUpload'});ma=true;}if(ka.isOn()){var na=ma?{policy:'PhotoUpload'}:{};if(la.userActionId)na.user_action_id=la.userActionId;var oa=ka.requestSend(la.uri.toString(),'www',na);la.fbtraceRemoteNode=oa;la.transport.setRequestHeader('X-Fbtrace-Meta',oa.metadata());}},fa=function(ia,ja){ja.request.fbtraceRemoteNode.replyReceive({is_last:ja.response.is_last,success:true});setTimeout(function(){ja.request.fbtraceRemoteNode.parentNode.replySend(true,{});},0);},ga=function(ia,ja){ja.request.fbtraceRemoteNode.replyReceive({is_last:ja.response.is_last,success:false,error_code:ja.response.error,error_summary:ja.response.errorSummary,error_description:ja.response.errorDescription});setTimeout(function(){ja.request.fbtraceRemoteNode.parentNode.replySend(false,{});},0);},ha=function(ia,ja){return ja.request.fbtraceRemoteNode;};h.subscribe('AsyncRequest/will_send',ea);h.subscribe('AsyncRequest/response',o(ha,fa));h.subscribe('AsyncRequest/error',o(ha,ga));f.exports={defaultNode:z,requestReceive:aa,withDefaultNode:da};},null);
__d('FileFormResetOnSubmit',['DOMQuery','Event','emptyFunction'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();function k(m,n){var o=i.listen(m,'change',j.thatReturnsFalse,i.Priority.URGENT);try{n();}catch(p){throw p;}finally{o.remove();}}function l(m){'use strict';this._form=m;}l.prototype.enable=function(){'use strict';var m=this._reset.bind(this);this._subscription=this._form.subscribe('submit',function(){setTimeout(m,0);});};l.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;};l.prototype._reset=function(){'use strict';var m=this._form.getRoot();k(m,function(){var n=h.scry(m,'input[type="file"]');n.forEach(function(o){o.value='';});});};f.exports=l;},null);
__d('Token',['CSS','DataStore','DOM','Locale','UnicodeBidi','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();function n(o,p){'use strict';this.info=o;this.paramName=p;}n.prototype.getInfo=function(){'use strict';return this.info;};n.prototype.getText=function(){'use strict';return this.info.text;};n.prototype.getValue=function(){'use strict';return this.info.uid;};n.prototype.isFreeform=function(){'use strict';return !!this.info.freeform;};n.prototype.setSelected=function(o){'use strict';h.conditionClass(this.getElement(),'uiTokenSelected',o);return this;};n.prototype.getElement=function(){'use strict';if(!this.element)this.setElement(this.createElement());return this.element;};n.prototype.setElement=function(o){'use strict';i.set(o,'Token',this);this.element=o;return this;};n.prototype.isRemovable=function(){'use strict';return h.hasClass(this.element,'removable');};n.prototype.getTextDirection=function(){'use strict';var o=l.isDirectionRTL(this.getText()),p=k.isRTL();if(o&&!p)return 'rtl';if(!o&&p)return 'ltr';return null;};n.prototype.createElement=function(o,p){'use strict';var q=this.paramName,r=this.getValue(),s=this.getText(),t=j.create('span',{className:'uiTokenText'},s),u=j.create('a',{href:'#','aria-label':m._("Remove {item}",[m.param('item',s)]),className:'remove uiCloseButton uiCloseButtonSmall'});if(o)h.addClass(u,'uiCloseButtonSmallGray');var v=j.create('input',{type:'hidden',value:r,name:q+'[]',autocomplete:'off'}),w=j.create('input',{type:'hidden',value:s,name:'text_'+q+'[]',autocomplete:'off'}),x={className:'removable uiToken'},y=this.getTextDirection();if(y!==null)x.dir=y;var z=j.create('span',x,[t,v,w,u]);if(o)h.addClass(z,'uiTokenGray');if(p){var aa=j.create('i',{className:p});j.prependContent(z,aa);}return z;};f.exports=n;},null);
__d('WeakToken',['CSS','Token'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j,k;j=babelHelpers.inherits(l,i);k=j&&j.prototype;l.prototype.createElement=function(){'use strict';var m=k.createElement.call(this,true,'UFIWeakReferenceIcon');h.addClass(m,'uiTokenWeakReference');return m;};function l(){'use strict';j.apply(this,arguments);}f.exports=l;},null);
__d('Tokenizer',['Arbiter','ArbiterMixin','CSS','DataStore','DOM','DOMQuery','Event','Focus','Input','Keys','Parent','StickyPlaceholderInput','Style','TextMetrics','Token','UserAgent_DEPRECATED','WeakToken','createObjectFrom','emptyFunction','mixin'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa){if(c.__markCompiled)c.__markCompiled();var ba,ca,da=20;ba=babelHelpers.inherits(ea,aa(i));ca=ba&&ba.prototype;function ea(fa,ga,ha){'use strict';ca.constructor.call(this);this.element=fa;this.typeahead=ga;this.input=ga.getCore().getElement();if(ha)this.init(ha.tokenarea,ha.param_name,ha.initial_info,ha.options);k.set(this.element,'Tokenizer',this);}ea.prototype.init=function(fa,ga,ha,ia){'use strict';this._handleEvents=this.handleEvents.bind(this);this.init=z;this.setTokenarea(fa);this.paramName=ga;if(!this.placeholder)this.placeholder=this.input.getAttribute('data-placeholder')||this.input.getAttribute('placeholder')||'';Object.assign(this,ia);this.initEvents();this.initTypeahead();this.reset(ha);this.initBehaviors();setTimeout(this.adjustWidth.bind(this),0);h.inform('Tokenizer/init',this,h.BEHAVIOR_PERSISTENT);this.inform('init',{tokens:this.getTokens()});};ea.prototype.reset=function(fa){'use strict';this.tokens=[];this.unique={};if(fa){this.populate(fa);}else l.empty(this.tokenarea);this.updateTokenarea();};ea.prototype.populate=function(fa){'use strict';var ga=[];this.tokens=this.getTokenElements().map(function(ha,ia){var ja=fa[ia];ga.push(this._tokenKey(ja));return this.createToken(ja,ha);},this);this.unique=y(ga,this.tokens);};ea.prototype.setTokenarea=function(fa){'use strict';var ga=!this.tokenarea;if(fa!==this.tokenarea){if(this.tokenarea){l.remove(this.tokenarea);for(var ha in this._tokenareaListeners)this._tokenareaListeners[ha].remove();}this._tokenareaListeners=n.listen(fa,{click:this._handleEvents,keydown:this._handleEvents});this.tokenarea=fa;}if(!ga)this.reset();};ea.prototype.getElement=function(){'use strict';return this.element;};ea.prototype.getTypeahead=function(){'use strict';return this.typeahead;};ea.prototype.getInput=function(){'use strict';return this.input;};ea.prototype.initBehaviors=function(){'use strict';this.behaviors=this.behaviors||[];if(this.behaviors instanceof Array){this.behaviors.forEach((function(ha){ha.behavior(this,ha.config);}).bind(this));}else for(var fa in this.behaviors||{}){var ga=window.TokenizerBehaviors&&window.TokenizerBehaviors[fa];ga.call(null,this,this.behaviors[fa]);}};ea.prototype.initTypeahead=function(){'use strict';var fa=this.typeahead.getCore();fa.resetOnSelect=true;fa.setValueOnSelect=false;fa.preventFocusChangeOnTab=true;if(this.inline){var ga=this.typeahead.getView();j.addClass(ga.getElement(),'uiInlineTokenizerView');}this.typeahead.subscribe('select',(function(ha,ia){return this.handleSelect(ia);}).bind(this));this.typeahead.subscribe('blur',this.handleBlur.bind(this));};ea.prototype.handleBlur=function(event){'use strict';this.inform('blur',{event:event});this.updatePlaceholder();};ea.prototype.handleSelect=function(fa){'use strict';var ga=fa.selected;if('uid' in ga){this.updateInput();this.addToken(this.createToken(ga));}};ea.prototype.initEvents=function(){'use strict';var fa=w.firefox()<4?'keypress':'keydown';n.listen(this.input,'paste',this.paste.bind(this));n.listen(this.input,fa,this.keydown.bind(this));};ea.prototype.handleEvents=function(event){'use strict';var fa=event.getTarget(),ga=fa&&this.getTokenElementFromTarget(fa);if(!ga)return;if(event.type!='keydown'||n.getKeyCode(event)==q.RETURN)this.processEvents(event,fa,ga);};ea.prototype.processEvents=function(event,fa,ga){'use strict';if(r.byClass(fa,'remove')){var ha=ga.nextSibling;ha=ha&&m.scry(ga.nextSibling,'.remove')[0];var ia=this.getTokenFromElement(ga);ia=this.addTokenData(ia,fa);this.removeToken(ia);this.focusOnTokenRemoval(event,ha);event.kill();}};ea.prototype.focusOnTokenRemoval=function(event,fa){'use strict';o.set(event.type=='keydown'&&fa||this.input);};ea.prototype.addTokenData=function(fa,ga){'use strict';return fa;};ea.prototype.keydown=function(event){'use strict';this.inform('keydown',{event:event});var fa=n.getKeyCode(event),ga=this.input;if(this.inline&&fa==q.BACKSPACE&&p.isEmpty(ga)){var ha=this.getLastToken();if(ha&&ha.isRemovable())this.removeToken(ha);}this.updateInput();};ea.prototype.paste=function(event){'use strict';this.inform('paste',{event:event});this.updateInput(true);};ea.prototype.focusInput=function(){'use strict';o.set(this.input);};ea.prototype.updateInput=function(fa){'use strict';if(!this.inline)return;setTimeout((function(){this.adjustWidth(this.input.value);if(fa)this.input.value=this.input.value;}).bind(this),20);s.setPlaceholderText(this.input,'');this.inform('resize');};ea.prototype.setPlaceholder=function(fa){'use strict';this.placeholder=fa;if(this.stickyPlaceholder)s.setPlaceholderText(this.input,fa);this.updatePlaceholder();};ea.prototype.updatePlaceholder=function(){'use strict';if(!this.inline||this.input.value)return;var fa=!this.tokens.length,ga='';if(fa||this.stickyPlaceholder){this.adjustWidth(this.placeholder);ga=this.placeholder;}else this.adjustWidth(this.input.value);s.setPlaceholderText(this.input,ga);};ea.prototype.adjustWidth=function(fa){'use strict';if(!this.inline||!this._getIsInDOM())return;if(!fa&&this.input.value==='')fa=this.placeholder;var ga=da;if(fa!==this.placeholder||!this.getTokens().length||this.stickyPlaceholder){var ha=t.getFloat(this.getElement(),'width'),ia=this._getMetrics().measure(fa);ga=ia.width+this._getWidthOffset()+10;ga=ga>=ha?ha:ga;}t.set(this.input,'width',ga+'px');this.inform('resize');h.inform('reflow');};ea.prototype.getToken=function(fa){'use strict';return this.unique[fa]||null;};ea.prototype.getTokens=function(){'use strict';return this.tokens||[];};ea.prototype.getTokenElements=function(){'use strict';return m.scry(this.tokenarea,'span.uiToken');};ea.prototype.getTokenElementFromTarget=function(fa){'use strict';return r.byClass(fa,'uiToken');};ea.prototype.getTokenFromElement=function(fa){'use strict';return k.get(fa,'Token');};ea.prototype.getTokenValues=function(){'use strict';if(!this.tokens)return [];return this.tokens.map(function(fa){return fa.getValue();});};ea.prototype.getFirstToken=function(){'use strict';return this.tokens[0]||null;};ea.prototype.getLastToken=function(){'use strict';return this.tokens[this.tokens.length-1]||null;};ea.prototype.hasMaxTokens=function(){'use strict';return this.maxTokens&&this.maxTokens<=this.tokens.length;};ea.prototype.createToken=function(fa,ga){'use strict';var ha=this.getToken(this._tokenKey(fa));if(!ha)ha=fa.weak_reference?new x(fa,this.paramName):new v(fa,this.paramName);ga&&ha.setElement(ga);return ha;};ea.prototype.addToken=function(fa){'use strict';if(this.hasMaxTokens())return;var ga=this._tokenKey(fa.getInfo());if(ga in this.unique)return;this.unique[ga]=fa;this.tokens.push(fa);this.insertToken(fa);this.updateTokenarea();this.inform('addToken',fa);this.inform('changeTokens');h.inform('Form/change',{node:this.element});};ea.prototype.insertToken=function(fa){'use strict';l.appendContent(this.tokenarea,fa.getElement());};ea.prototype.removeToken=function(fa){'use strict';if(!fa)return;var ga=this.tokens.indexOf(fa);if(ga<0)return;this.tokens.splice(this.tokens.indexOf(fa),1);delete this.unique[this._tokenKey(fa.getInfo())];l.remove(fa.getElement());this.updateTokenarea();this.inform('removeToken',fa);this.inform('changeTokens');h.inform('Form/change',{node:this.element});};ea.prototype.removeAllTokens=function(){'use strict';this.reset();this.inform('changeTokens');this.inform('removeAllTokens');};ea.prototype.updateTokenarea=function(){'use strict';var fa=this.typeahead.getCore(),ga=this.getTokenValues();if(this.excludeDuplicates){this._exclusions||(this._exclusions=fa.getExclusions());fa.setExclusions(ga.concat(this._exclusions));}fa.setEnabled(!this.hasMaxTokens());this.updateTokenareaVisibility();this.updatePlaceholder();this.inform('resize');h.inform('reflow');};ea.prototype.updateTokenareaVisibility=function(){'use strict';j.conditionShow(this.tokenarea,this.tokens.length!==0);};ea.prototype._tokenKey=function(fa){'use strict';return fa.uid+(fa.freeform?':':'');};ea.prototype._getWidthOffset=function(){'use strict';if(this._widthOffset===null){var fa=this.input.clientWidth,ga=t.getFloat(this.input,'width');if(fa==ga){this._widthOffset=t.getFloat(this.input,'paddingLeft')+t.getFloat(this.input,'paddingRight');}else this._widthOffset=0;}return this._widthOffset;};ea.prototype._getMetrics=function(){'use strict';if(!this._metrics)this._metrics=new u(this.input,this.inline);return this._metrics;};ea.prototype._getIsInDOM=function(){'use strict';return this._isInDOM||(this._isInDOM=m.contains(document.body,this.input));};ea.getInstance=function(fa){'use strict';var ga=r.byClass(fa,'uiTokenizer');return ga?k.get(ga,'Tokenizer'):null;};ea.init=function(fa,ga){'use strict';fa.init(ga.tokenarea,ga.param_name,ga.initial_info,ga.options);};Object.assign(ea.prototype,{inline:false,maxTokens:null,excludeDuplicates:true,placeholder:'',_widthOffset:null,_metrics:null});f.exports=ea;},null);
__d('P2PPaymentRequestMercuryAttachmentSnippet.react',['CurrentUser','MercuryAttachmentSnippetRenderer','P2PMercuryAttachmentSnippetRendererBase.react','React'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l=k.PropTypes,m=k.createClass({displayName:'P2PPaymentRequestMercuryAttachmentSnippet',propTypes:{formattedAmount:l.string.isRequired,requestee:l.object.isRequired,requester:l.object.isRequired,status:l.number.isRequired},render:function(){var n=i.renderP2PPaymentRequestSnippetText(h.getID()===this.props.requester.id,this.props.requester.name,this.props.formattedAmount,this.props.status,h.getID()===this.props.requestee.id,this.props.requestee.name);return (k.createElement(j,{text:n}));}});f.exports=m;},null);
__d("StickerUtils",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={getScaledDimensions:function(i,j,k){var l,m,n;if(j>i){n=k/j;l=i*n;m=j*n;}else{n=k/i;l=i*n;m=j*n;}return {height:Math.round(l),width:Math.round(m)};},capitalizeWords:function(i){var j=i.split(" ");for(var k=0;k<j.length;k++){var l=j[k].charAt(0).toUpperCase();j[k]=l+j[k].substr(1);}return j.join(" ");}};f.exports=h;},null);
__d('FormSubmitOnChange',['Event','submitForm'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(k){'use strict';this._form=k;}j.prototype.enable=function(){'use strict';this._listener=h.listen(this._form.getRoot(),'change',this._submit.bind(this));};j.prototype.disable=function(){'use strict';this._listener.remove();this._listener=null;};j.prototype._submit=function(){'use strict';i(this._form.getRoot());};Object.assign(j.prototype,{_listener:null});f.exports=j;},null);
__d('VaultBoxURI',['URI'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={PHOTOS_SYNCED:'photos_synced',isVaultBoxURI:function(j){var k=new RegExp("\/"+i.PHOTOS_SYNCED+"\/?$");return j.getPath().match(k)&&j.getQueryData().hasOwnProperty('view_image');},isVaultArchiveURI:function(j){var k=new RegExp("\/"+i.PHOTOS_SYNCED+"\/?$");return j.getPath().match(k);},getSyncedTabURI:function(){return new h('/me/'+i.PHOTOS_SYNCED).getQualifiedURI();}};f.exports=i;},null);
__d("XMNCommercePromotionBlockController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/messages\/commerce\/promotion\/block\/",{page_id:{type:"String",required:true},type:{type:"String",required:true}});},null);
__d("XStickerAssetController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/stickers\/asset\/",{sticker_id:{type:"Int",required:true},image_type:{type:"Enum",defaultValue:"BestEffortImage",enumType:1}});},null);