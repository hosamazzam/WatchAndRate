/*!CK:1760431271!*//*1454316569,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["VggJt"]); }

__d('PagesMessengerThreadDialogLink.react',['AsyncDialog','AsyncRequest','Link.react','MessageThreadViewSource','PagesMessagingConst','ReactComponentWithPureRenderMixin','React','URI'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){'use strict';if(c.__markCompiled)c.__markCompiled();var p=n.PropTypes,q=n.createClass({displayName:'PagesMessengerThreadDialogLink',mixins:[m],propTypes:{threadID:p.string.isRequired,viewer:p.string.isRequired,folder:p.string},getInitialState:function(){return {permalinkURI:'#'};},componentDidMount:function(){this._getPermalinkURI(this.props);},componentWillReceiveProps:function(r){if(r.threadID!==this.props.threadID||r.folder!==this.props.folder)this._getPermalinkURI(r);},render:function(){return (n.createElement(j,{className:this.props.className,href:'#',onClick:this._handleClick,role:'button'},this.props.children));},_handleClick:function(r){r.preventDefault();h.send(new i(this.state.permalinkURI).setRelativeTo(r.target));},_getPermalinkURI:function(r){this.setState(this.getInitialState());var s=r.threadID,t=r.viewer,u=r.folder;e(['MercuryThreadIDMap'],(function(v){var w=v.getForFBID(t);w.getServerIDFromClientID(s,(function(x){this.isMounted()&&this.setState({permalinkURI:new o(l.LOAD_MESSAGE_THREAD_URI).setQueryData({pageid:t,threadid:s,threadElementID:x,folder:u,source:k.REFRESH_HIGHLANDER_JEWEL}).toString()});}).bind(this));}).bind(this));}});f.exports=q;},null);
__d('MercuryJewelCountControl',['Arbiter','MercuryDispatcher','MercuryThreadInformer','MercuryUnseenState','UserActivity'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();function m(n){'use strict';var o=i.get(),p=j.get();this.$MercuryJewelCountControl1=k.get();this.render();o.subscribe('model-update-completed',(function(q,r){this.$MercuryJewelCountControl2(false);}).bind(this));p.subscribe('unseen-updated',(function(){return this.render();}).bind(this));this.$MercuryJewelCountControl3=n;this.$MercuryJewelCountControl3.subscribe('marked-seen',(function(){this.$MercuryJewelCountControl2(true);}).bind(this));}m.prototype.render=function(){'use strict';h.inform('jewel/count-updated',{jewel:'mercurymessages',count:this.$MercuryJewelCountControl1.getUnseenCount()},h.BEHAVIOR_STATE);};m.prototype.$MercuryJewelCountControl2=function(n){'use strict';if(n||this.$MercuryJewelCountControl3.isOpen()&&l.isActive())this.$MercuryJewelCountControl1.markAsSeen();};m.constructStores=function(){'use strict';k.get();};f.exports=m;},null);
__d('P2PJewelBanner.react',['Image.react','Layout.react','P2PButton.react','React','TooltipLink.react','URI','XUIGrayText.react','cx','fbt','ix'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){'use strict';if(c.__markCompiled)c.__markCompiled();var r=i.FillColumn,s=i.Column,t=k.PropTypes,u=k.createClass({displayName:'P2PJewelBanner',propTypes:{bodyText:t.oneOfType([t.string,t.object]),isDismissable:t.bool,onClose:t.func,primaryActionConfig:t.shape({onClick:t.func,text:t.string.isRequired,uri:t.oneOfType([t.string,t.object])}).isRequired,secondaryActionConfig:t.shape({onClick:t.func.isRequired,text:t.string.isRequired}),titleText:t.string.isRequired},getDefaultProps:function(){return {isDismissable:false};},handleCloseClick:function(v){v.stopPropagation();if(this.props.onClose)this.props.onClose();},handleClick:function(){this.execPrimaryClick();},handlePrimaryClick:function(v){v.stopPropagation();this.execPrimaryClick();},execPrimaryClick:function(){if(this.props.primaryActionConfig.uri)new m(this.props.primaryActionConfig.uri).go();this.props.primaryActionConfig.onClick&&this.props.primaryActionConfig.onClick();},handleSecondaryActionClick:function(v){v.stopPropagation();this.props.secondaryActionConfig&&this.props.secondaryActionConfig.onClick&&this.props.secondaryActionConfig.onClick();},renderCloseButton:function(){return (k.createElement(l,{alignH:'center',className:"_47d8",href:'#',onClick:this.handleCloseClick,position:'above',tooltip:p._("Dismiss")},k.createElement(h,{className:"_47dg",height:7,src:q('/images/p2p/jewel-banner-close.png'),width:7})));},renderActions:function(){var v=this.props.primaryActionConfig,w,x=this.props.secondaryActionConfig;if(x)w=k.createElement(j,{className:"_5d0t",href:'#',label:x.text,onClick:this.handleSecondaryActionClick,size:'large',target:'_blank',type:'primary'});return (k.createElement('div',null,w,k.createElement(j,{className:"_5d0t",href:v.uri||'#',label:v.text,onClick:this.handlePrimaryClick,size:'large',target:'_blank',type:'primary',use:'confirm'})));},render:function(){var v;if(this.props.isDismissable)v=this.renderCloseButton();return (k.createElement('div',{className:"_5d0n",onClick:this.handleClick},v,k.createElement(i,null,k.createElement(s,{className:"_400i"},k.createElement('div',{className:"_400j"},k.createElement(h,{className:"_5d0q",height:50,src:q('/images/p2p/jewel-banner-coin.png'),width:50}))),k.createElement(r,{className:"_47di"},k.createElement('div',{className:"_400j"},k.createElement(n,{display:'block',shade:'dark',weight:'bold'},this.props.titleText),k.createElement(n,{display:'block',shade:'light'},this.props.bodyText))),k.createElement(s,{className:"_400k"},k.createElement('div',{className:"_400j"},this.renderActions())))));}});f.exports=u;},null);
__d('P2PPendingPushFailJewelBanner.react',['P2PJewelBanner.react','P2PLinkConstants','React','fbt'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l=j.PropTypes,m=j.createClass({displayName:'P2PPendingPushFailJewelBanner',propTypes:{transfer:l.object.isRequired},getActionText:function(){return k._("Update Card");},render:function(){var n=this.props.transfer;return (j.createElement(h,{bodyText:k._("It looks like your card is expired or invalid. Please update it to get {currency}{amount} from {sender_name}.",[k.param('currency',n.currency),k.param('amount',n.amount),k.param('sender_name',n.sender.name)]),primaryActionConfig:{text:k._("Update"),uri:i.paymentMethodsURI},titleText:k._("Update Your Card")}));}});f.exports=m;},null);
__d('P2PTimeBasedAcceptMessage.react',['React','fbt'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=h.PropTypes,k=h.createClass({displayName:'P2PTimeBasedAcceptMessage',propTypes:{transfer:j.object.isRequired},render:function(){var l=this.props.transfer,m=l.creationTime*1000,n=1000*60*60*24,o=Date.now(),p=(o-m)/n,q=l.expirationTimestamp*1000-o,r=Math.round(Math.max(q/n,1)),s;if(p<=2){s=i._("Add a debit card and it'll go straight to your bank.");}else if(p<=4){s=i._("This money will be sent back in {days left} days. Add a debit card to accept it.",[i.param('days left',r)]);}else if(p<=5){s=i._({"day":"You have {days left} day to add a debit card before the money is sent back to {sender_name}.","days":"You have {days left} days to add a debit card before the money is sent back to {sender_name}."},[i.param('days left',r),i['enum'](r===1?'day':'days',{day:'day',days:'days'}),i.param('sender_name',l.sender.name)]);}else s=i._("You have 24 hours to add a debit card before the money is sent back to {sender_name}.",[i.param('sender_name',l.sender.name)]);return h.createElement('div',null,s);}});f.exports=k;},null);
__d('P2PPendingRecipientNUXJewelBanner.react',['P2PAcceptMoneyDialog.react','P2PActions','P2PCreditCardStore','P2PJewelBanner.react','P2PTimeBasedAcceptMessage.react','React','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){'use strict';if(c.__markCompiled)c.__markCompiled();var o=m.PropTypes,p=m.createClass({displayName:'P2PPendingRecipientNUXJewelBanner',propTypes:{transfer:o.object.isRequired},getInitialState:function(){return {creditCards:j.getAll()};},creditCardStoreSub:null,componentDidMount:function(){this.creditCardStoreSub=j.addListener('change',this.onCreditCardStoreChange);},componentWillUnmount:function(){if(this.creditCardStoreSub){this.creditCardStoreSub.remove();this.creditCardStoreSub=null;}},onCreditCardStoreChange:function(){var q={creditCards:j.getAll()};if(this.isMounted())this.setState(q);},handleClick:function(){this.showAcceptMoneyDialog();},showAcceptMoneyDialog:function(){i.showDialog(h,{creditCards:this.state.creditCards,onClose:i.hideDialog,transfer:this.props.transfer});},renderTimeBasedMessage:function(){return (m.createElement(l,{transfer:this.props.transfer}));},render:function(){var q=this.props.transfer;if(!j.isCreditCardsFetchComplete())return null;return (m.createElement(k,{bodyText:this.renderTimeBasedMessage(),primaryActionConfig:{onClick:this.handleClick,text:n._("Add Card")},titleText:n._("Accept {currency}{amount} from {sender_name}.",[n.param('currency',q.currency),n.param('amount',q.amount),n.param('sender_name',q.sender.name)])}));}});f.exports=p;},null);
__d('P2PPendingRecipientVerificationJewelBanner.react',['P2PJewelBanner.react','P2PTransferParam','P2PVerificationFlowHelper','React','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l){'use strict';if(c.__markCompiled)c.__markCompiled();var m=k.PropTypes,n=k.createClass({displayName:'P2PPendingRecipientVerificationJewelBanner',propTypes:{transfer:m.object.isRequired},handleClick:function(){j.startVerificationFlow(this.props.transfer[i.TRANSFER_ID],false);},render:function(){return (k.createElement(h,{bodyText:l._("To accept the money {sender_name} sent you, please confirm your information.",[l.param('sender_name',this.props.transfer.sender.name)]),primaryActionConfig:{onClick:this.handleClick,text:l._("Confirm Info")},titleText:l._("Please Confirm Your Info")}));}});f.exports=n;},null);
__d('P2PJewelBannerContainer.react',['CurrentUser','P2PBannerStore','P2PPaymentRequestsStore','P2PPendingPaymentRequestJewelBanner.react','P2PPendingPushFailJewelBanner.react','P2PPendingRecipientNUXJewelBanner.react','P2PPendingRecipientVerificationJewelBanner.react','P2PTransferParam','P2PTransferStatus','P2PTransferStore','PureStoreBasedStateMixin','React','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){'use strict';if(c.__markCompiled)c.__markCompiled();var u=s.createClass({displayName:'P2PJewelBannerContainer',mixins:[r(i,j,q)],statics:{calculateState:function(){var v=q.getNUXTransfer(),w=j.getPendingPaymentRequest();return {paymentRequest:w,paymentRequestBannerShown:!!w,transfer:v,transferBannerShown:v&&v.receiver.id==h.getID()};}},renderTransferBanner:function(){var v=this.state.transfer,w=v[o.STATUS];switch(w){case p.PENDING_RECIPIENT_NUX:return (s.createElement(m,{transfer:v}));case p.PENDING_RECIPIENT_VERIFICATION:return (s.createElement(n,{transfer:v}));case p.PENDING_PUSH_FAIL:return (s.createElement(l,{transfer:v}));}},renderPaymentRequestBanner:function(){return (s.createElement(k,{paymentRequest:this.state.paymentRequest}));},render:function(){var v;if(this.state.transferBannerShown){v=this.renderTransferBanner();}else if(this.state.paymentRequestBannerShown)v=this.renderPaymentRequestBanner();return (s.createElement('div',{className:"_1xfk"},v));}});f.exports=u;},null);
__d('MercuryThreadlistContainer.react',['Bootloader','immutable','MercuryAPIArgsSource','MercuryFilters','MercuryThreadlistConstants','MessagingTag','P2PJewelBannerContainer.react','React','SubscriptionsHandler'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){'use strict';if(c.__markCompiled)c.__markCompiled();var q=o.PropTypes,r='search',s=o.createClass({displayName:'MercuryThreadlistContainer',propTypes:{ChildClass:q.func.isRequired,folder:q.string.isRequired,showCount:q.bool,showPresence:q.bool,source:q.string,threadCount:q.number,viewer:q.string.isRequired},getDefaultProps:function(){return {source:j.JEWEL};},getInitialState:function(){return {isLoading:true,isSearching:false,unreadMessageRequestThreads:[],threads:i.Map()};},componentDidMount:function(){h.loadModules(["MercuryOrderedThreadlist","MercuryThreadInformer","MercuryThreads"],(function(t,u,v){this._threadlist=t.getForFBID(this.props.viewer);this._threads=v.getForFBID(this.props.viewer);this._informer=u.getForFBID(this.props.viewer);this._subscriptions=new p();this._subscriptions.addSubscriptions(this._informer.subscribe('threadlist-updated',(function(w,x){this._updateThreads(this.props.folder,this.props.filter);}).bind(this)));this._handleFolderChange(this.props.folder,this.props.filter);}).bind(this));},componentWillReceiveProps:function(t){if(t.folder!==this.props.folder||t.filter!==this.props.filter)this._handleFolderChange(t.folder,t.filter);},componentWillUnmount:function(){this._cancelThreadsCallback();this._cancelThreadlistCallback();this._subscriptions&&this._subscriptions.release();},render:function(){var t=this.props,u=t.ChildClass,v=t.folder,w=t.filter,x=babelHelpers.objectWithoutProperties(t,['ChildClass','folder','filter']),y=this.state.isSearching?this.state.threads.get(r)||[]:this.state.threads.get(v)||[];return (o.createElement(u,babelHelpers._extends({},x,{folder:v,isLoaded:!!this._threadlist&&this._threadlist.hasLoadedThreadlist(v,w),isLoading:this.state.isLoading,isSearching:this.state.isSearching,newMessageRequestThreads:this.state.unreadMessageRequestThreads,onLoadMoreRequest:this._loadMoreThreads,onQuery:this._handleQuery,onSearchResults:this._handleSearchResults,p2pJewelBannerContainer:this._renderP2PJewelBannerContainer(),threads:y})));},_renderP2PJewelBannerContainer:function(){return (o.createElement(n,null));},_handleFolderChange:function(t,u){if(t===m.INBOX)this._loadMessageRequestThreads();if(!this._hasInitialThreads(t,u)){this._loadThreads(t,u,this.props.threadCount||l.JEWEL_THREAD_COUNT+3);}else if(this.state.isLoading){this.setState({isLoading:false},(function(){this._updateThreads(t,u);}).bind(this));}else this._updateThreads(t,u);},_loadMessageRequestThreads:function(){this._threadlist.getFilteredThreadlist(l.RECENT_THREAD_OFFSET,l.MAX_UNREAD_COUNT,m.PENDING,k.UNREAD,this._updateUnreadMessageRequestThreads,true,this.props.source);},_loadMoreThreads:function(){if(!this.state.isSearching&&!this.state.isLoading&&!this._threadlist.hasLoadedThreadlist(this.props.folder,this.props.filter))this._loadThreads(this.props.folder,this.props.filter,this._getThreadCount(this.props.folder)+l.JEWEL_MORE_COUNT+1);},_loadThreads:function(t,u,v){if(!this._threadlist)return;this._cancelThreadlistCallback();this.setState({isLoading:true},(function(){var w=this._threadlist.getFilteredThreadlist(l.RECENT_THREAD_OFFSET,v,t,u||k.ALL,(function(x){return this.setState({isLoading:false});}).bind(this),true,this.props.source);this._threadlistSub={subscriberID:w,folder:t,filter:u};}).bind(this));},_updateThreads:function(t,u,v){if(!this._threadlist||!this._threads)return;this._cancelThreadsCallback();var w=v||this._threadlist.getAvailableThreadlistNow(t,u);this._threadsSub=this._threads.getMultiThreadMeta(w,(function(x){this.setState({threads:this.state.threads.set(t,w.map(function(y){return x[y];}))});}).bind(this));},_updateUnreadMessageRequestThreads:function(){if(!this._threadlist||!this._threads)return;var t=this._threadlist.getAvailableThreadlistNow(m.PENDING,k.UNREAD);this._threads.getMultiThreadMeta(t,(function(u){this.setState({unreadMessageRequestThreads:t.map(function(v){return u[v];})});}).bind(this));},_hasInitialThreads:function(t,u){return !!(this._threadlist&&(this._threadlist.getThreadCount(t,u)>=l.JEWEL_THREAD_COUNT+3||this._threadlist.hasLoadedThreadlist(t,u)));},_getThreadCount:function(t){var u=this.state.threads.get(t);return u?u.length:0;},_cancelThreadsCallback:function(){this._threads&&this._threadsSub&&this._threads.unsubscribe(this._threadsSub);},_cancelThreadlistCallback:function(){this._threadlist&&this._threadlistSub&&this._threadlist.unsubscribe(this._threadlistSub.subscriberID,this._threadlistSub.folder,this._threadlistSub.filter);},_handleSearchResults:function(t,u){this.setState({isLoading:u,searchThreads:[]},(function(){return this._updateThreads(r,k.ALL,t);}).bind(this));},_handleQuery:function(t){this.setState({isSearching:!!t});}});f.exports=s;},null);
__d('MercuryThreadlistRowContainer.react',['immutable','ImmutableObject','MercuryParticipants','React','StoreAndPropBasedStateMixin','shallowEqual'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n=k.PropTypes,o=k.createClass({displayName:'MercuryThreadlistRowContainer',mixins:[l(j)],propTypes:{ChildClass:n.func.isRequired,thread:n.instanceOf(i).isRequired,viewer:n.string.isRequired},statics:{calculateState:function(p){return {participants:h.Map(h.Seq(p.thread.participants).map(function(q){return [q,j.getOrFetch(q)];}))};}},shouldComponentUpdate:function(p,q){return (!m(p,this.props)||!h.is(q.participants,this.state.participants));},render:function(){var p=this.props,q=p.ChildClass,r=babelHelpers.objectWithoutProperties(p,['ChildClass']);return (k.createElement(q,babelHelpers._extends({},r,{participants:this.state.participants})));}});f.exports=o;},null);
__d('MercuryPresenceIndicator.react',['Arbiter','AvailableListConstants','MercuryIDs','PresenceStatus','ReactComponentWithPureRenderMixin','React','SubscriptionsHandler','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){'use strict';if(c.__markCompiled)c.__markCompiled();var q=m.PropTypes,r=m.createClass({displayName:'MercuryPresenceIndicator',mixins:[l],propTypes:{threadID:q.string.isRequired},componentDidMount:function(){this._subscriptions=new n();this._subscriptions.addSubscriptions(h.subscribe(i.ON_AVAILABILITY_CHANGED,(function(){return this.forceUpdate();}).bind(this)));},componentWillUnmount:function(){this._subscriptions&&this._subscriptions.release();},render:function(){var s=this._getPresence();return (m.createElement('span',{className:this._getClasses(s)},m.createElement('span',{className:'accessible_elem'},this._getLabel(s))));},_getPresence:function(){if(!j.isCanonical(this.props.threadID)){return null;}else{var s=j.getUserIDFromThreadID(this.props.threadID);return k.get(s);}},_getClasses:function(s){return "presenceIndicator"+(j.isGroupChat(this.props.threadID)?' '+"groupThread":'')+(s==i.ACTIVE?' '+"presenceActive":'');},_getLabel:function(s){switch(s){case i.ACTIVE:return p._("Active");default:return null;}}});f.exports=r;},null);
__d('MercuryThreadPermalink.react',['HighlanderFinchGating','Link.react','PagesMessengerThreadDialogLink.react','ReactComponentWithPureRenderMixin','React','WebMessengerThreadPermalinks'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n=l.PropTypes,o=l.createClass({displayName:'MercuryThreadPermalink',mixins:[k],propTypes:{threadID:n.string.isRequired,viewer:n.string.isRequired,folder:n.string,onClick:n.func},getInitialState:function(){return {permalinkURI:'#'};},componentDidMount:function(){this._getPermalinkURI(this.props);},componentWillReceiveProps:function(p){if(p.threadID!==this.props.threadID||p.folder!==this.props.folder)this._getPermalinkURI(p);},render:function(){if(h.HIGHLANDER_FINCH_GATING)return (l.createElement(j,{className:this.props.className,threadID:this.props.threadID,viewer:this.props.viewer,folder:this.props.folder},this.props.children));return (l.createElement(i,{className:this.props.className,href:this.state.permalinkURI,onClick:this.props.onClick,role:'button'},this.props.children));},_getPermalinkURI:function(p){if(h.HIGHLANDER_FINCH_GATING)return;this.setState(this.getInitialState());m.getThreadURI(p.threadID,(function(q){return this.isMounted()&&this.setState({permalinkURI:q});}).bind(this),p.folder);}});f.exports=o;},null);
__d('MercuryThreadReadToggle.react',['MercuryThreadActions','ReactComponentWithPureRenderMixin','React','ReadToggle.react','fbt','invariant'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n=j.PropTypes,o=j.createClass({displayName:'MercuryThreadReadToggle',mixins:[i],propTypes:{threadID:n.string.isRequired,viewer:n.string.isRequired,unreadCount:n.number.isRequired},render:function(){!(this.props.unreadCount>=0)?m(0):undefined;return (j.createElement(k,{isRead:this.props.unreadCount===0,onClick:this._handleClick,readLabel:l._("Mark as Unread"),unreadLabel:l._("Mark as Read")}));},_handleClick:function(p){p.preventDefault();p.stopPropagation();var q=h.getForFBID(this.props.viewer);this.props.unreadCount>0?q.markRead(this.props.threadID):q.markUnread(this.props.threadID);}});f.exports=o;},null);
__d('MessagesJewelInlineThumbnail.react',['MercuryAttachmentType','React','cx'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();var k=i.PropTypes,l=i.createClass({displayName:'MessagesJewelInlineThumbnail',propTypes:{thread:k.object.isRequired},render:function(){var m=this._getPhotoAttachments();if(m.length===0)return i.createElement('span',null);var n=m[0].thumbnail_url;if(!n)return i.createElement('span',null);var o=i.createElement('span',{className:"_56hv"},i.createElement('i',{style:{backgroundImage:'url('+n+')'}}));if(m.length>1)o=i.createElement('span',null,i.createElement('span',{className:"_56hy"}),o);return o;},_getPhotoAttachments:function(){var m=this.props.thread;if(!m.snippet_attachments)return [];return m.snippet_attachments.filter(function(n){return n.attach_type===h.PHOTO;});}});f.exports=l;},null);
__d('MessagesJewelThreadListRow.react',['ImageBlock.react','immutable','ImmutableObject','MercuryConfig','MercuryPresenceIndicator.react','MercurySeenIndicator.react','MercuryThreadImage.react','MercuryThreadPermalink.react','MercuryThreadReadToggle.react','MercuryThreadSnippet.react','MercuryThreadTimestamp.react','MercuryThreadTitle.react','MessagesJewelInlineThumbnail.react','ReactComponentWithPureRenderMixin','React','UserAgent','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){'use strict';if(c.__markCompiled)c.__markCompiled();var y=v.PropTypes,z=v.createClass({displayName:'MessagesJewelThreadListRow',mixins:[u],propTypes:{onClick:y.func,participants:y.instanceOf(i.Map).isRequired,showPresence:y.bool,thread:y.instanceOf(j).isRequired,viewer:y.string.isRequired,wasSeenByAll:y.bool},render:function(){var aa=w.isBrowser('Chrome')&&!w.isPlatform('Windows')?v.createElement('div',{className:'author fixemoji'},this._renderThreadTitle(),this._renderPresenceIndicator()):v.createElement('div',{className:'author'},v.createElement('strong',null,this._renderThreadTitle()),this._renderPresenceIndicator()),ba=v.createElement(h,{spacing:'medium'},v.createElement('div',{className:"MercuryThreadImage _4qeb"},this._renderThreadImage()),v.createElement('div',{className:'content'},aa,v.createElement('div',{className:'snippet preview'},this._renderThreadIndicator(),this._renderThreadSnippet()),v.createElement('div',{className:'time'},this._renderThreadTimeStamp())),v.createElement('div',null,v.createElement(t,{thread:this.props.thread}),v.createElement('div',{className:'x_div'},this._renderThreadReadToggle())));return (v.createElement('li',{className:this.props.thread.unread_count>0?"jewelItemNew":''},v.createElement(o,{className:'messagesContent',threadID:this.props.thread.thread_id,viewer:this.props.viewer,folder:this.props.thread.folder,onClick:this.props.onClick},ba)));},_renderPresenceIndicator:function(){if(!this.props.showPresence)return null;return (v.createElement(l,{threadID:this.props.thread.thread_id}));},_renderThreadImage:function(aa){return (v.createElement(n,{size:aa,thread:this.props.thread,useBackground:true,viewer:this.props.viewer}));},_renderThreadTitle:function(){return (v.createElement(s,{thread:this.props.thread,viewer:this.props.viewer,showUnreadCount:true}));},_renderThreadSnippet:function(){return (v.createElement(q,{participants:this.props.participants,thread:this.props.thread,viewer:this.props.viewer}));},_renderThreadTimeStamp:function(){return (v.createElement(r,{time:this.props.thread.timestamp,title:this.props.thread.timestamp_absolute,text:this.props.thread.timestamp_relative}));},_renderThreadIndicator:function(){return (v.createElement(m,{thread:this.props.thread,viewer:this.props.viewer}));},_renderThreadReadToggle:function(){return (v.createElement(p,{threadID:this.props.thread.thread_id,viewer:this.props.viewer,unreadCount:this.props.thread.unread_count}));}});f.exports=z;},null);
__d('MessagesJewelThreadlistRowContainer.react',['ImmutableObject','MercuryDelayedRoger','MercuryThreadlistRowContainer.react','MessagesJewelThreadListRow.react','ReactComponentWithPureRenderMixin','React','StoreAndPropBasedStateMixin','requireWeak'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){'use strict';if(c.__markCompiled)c.__markCompiled();var p=m.PropTypes,q;o('ChatOpenTab',function(s){q=s;});var r=m.createClass({displayName:'MessagesJewelThreadlistRowContainer',mixins:[l,n(i)],propTypes:{thread:p.instanceOf(h).isRequired,viewer:p.string.isRequired},statics:{calculateState:function(s){return {wasSeenByAll:i.wasSeenByAll(s.thread.thread_id)};}},componentDidMount:function(){if(!q)o('ChatOpenTab',(function(s){this.forceUpdate();}).bind(this));},render:function(){return (m.createElement(j,{ChildClass:k,onClick:this._handleClick,showPresence:q&&q.canOpenTab(),thread:this.props.thread,viewer:this.props.viewer,wasSeenByAll:this.state.wasSeenByAll}));},_handleClick:function(s){if(s.button===1||s.altKey||s.ctrlKey||s.metaKey||s.shiftKey)return;if(q&&q.canOpenTab()){s.preventDefault();q.openThread(this.props.thread.thread_id,'jewel');}}});f.exports=r;},null);
__d('MessagesJewelThreadList.react',['BootloadedComponent.react','ImmutableObject','JSResource','Link.react','MessagesJewelThreadlistRowContainer.react','MessagingTag','React','ScrollableArea.react','XUISpinner.react','cx','debounce','fbt','getViewportDimensions','throttle'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){'use strict';if(c.__markCompiled)c.__markCompiled();var v=160,w=450,x=n.PropTypes,y=n.createClass({displayName:'MessagesJewelThreadList',propTypes:{isLoaded:x.bool,isLoading:x.bool,jewelRequestsUI:x.bool,onLoadMoreRequest:x.func,p2pJewelBannerContainer:x.element,threads:x.arrayOf(x.instanceOf(i)).isRequired,viewer:x.string.isRequired},getInitialState:function(){return {height:this._calculateHeight()};},componentDidMount:function(){this._listener=Event.listen(window,'resize',r((function(){this.setState({height:this._calculateHeight()});}).bind(this)));},componentWillUnmount:function(){this._listener.remove();},render:function(){return (n.createElement(o,{className:"_2q3u",height:this.state.height,onScroll:u(this._handleScroll,50),ref:'scrollable'},n.createElement('ul',{className:'jewelContent'},this.props.p2pJewelBannerContainer?n.createElement('li',null,this.props.p2pJewelBannerContainer):null,this._renderJewelRequestsUI(),this._renderJewelRequestsNUX(),this.props.threads.map((function(z){return (n.createElement(l,{key:z.thread_id,thread:z,viewer:this.props.viewer}));}).bind(this))),this._renderLoadMoreLink()));},_calculateHeight:function(){return Math.min(w,t().height-v);},_renderLoadMoreLink:function(){if(this.props.isLoaded){if(this.props.folder===m.PENDING)return (n.createElement('div',{className:"_16bh _16bi"},n.createElement(k,{onClick:this._handleFilteredRequestsClick},s._("See filtered requests"))));return null;}if(this.props.isLoading)return (n.createElement('div',{className:"_v8y"},n.createElement(p,null)));return (n.createElement('div',{className:"_v8y"},n.createElement(k,{href:'#',onClick:this._handleLoadMoreClick},s._("Show Older"))));},_handleScroll:function(){if(this.props.isLoaded)return;var z=this.refs.scrollable.getArea();if(z.getScrollTop()+z.getClientHeight()>=z.getScrollHeight()-1)this.props.onLoadMoreRequest&&this.props.onLoadMoreRequest();},_handleLoadMoreClick:function(z){z.preventDefault();this.props.onLoadMoreRequest&&this.props.onLoadMoreRequest();},_renderJewelRequestsUI:function(){var z=this.props.newMessageRequestThreads;if(!this.props.jewelRequestsUI||this.props.folder===m.PENDING||!z||z.length===0)return null;return (n.createElement(h,{bootloadPlaceholder:n.createElement('li',{style:{height:60}}),bootloadLoader:j('MessagesJewelMessageRequestsRow.react'),onClick:this._handleMessageRequestsClick,threads:z,viewer:this.props.viewer}));},_renderJewelRequestsNUX:function(){if(!this.props.jewelRequestsUI||this.props.folder!==m.PENDING)return null;return (n.createElement('li',{className:"_16bh _16bi"},s._("Open a request to get more info about who's messaging you."),n.createElement('br',null),s._("They won't know you've seen it until you accept.")));},_handleMessageRequestsClick:function(z){if(this.props.onMessageRequestsClick)this.props.onMessageRequestsClick(z);},_handleFilteredRequestsClick:function(z){if(this.props.onFilteredRequestsClick)this.props.onFilteredRequestsClick(z);}});f.exports=y;},null);
__d('MercuryJewelThreadlistControl',['ArbiterMixin','CurrentUser','CSS','DOM','Event','JSLogger','MercuryConfig','MercuryFilters','MercuryThreadlistConstants','MercuryThreadlistContainer.react','MessagesJewelThreadList.react','MessagingTag','WebMessengerPermalinkConstants','React','ReactDOM','csx','cx','fbt','MercuryThreadInformer','MercuryUnreadState'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){if(c.__markCompiled)c.__markCompiled();var z=c('MercuryThreadInformer').get(),aa=c('MercuryUnreadState').get(),ba=m.create('mercury_jewel'),ca=s.PENDING,da=t.PENDING_PATH,ea='back_to_inbox';function fa(ja){var ka=ja.getFlyout();this._jewelController=ja;this._threadlistContainer=k.find(ka,"._3v_l");this._currentFolder=s.INBOX;this._currentFilter=o.ALL;this._jewelTabLinks={};this._jewelTabCounts={};this._jewelTabLinks[s.INBOX]=k.find(ka,"._1sde");this._jewelTabCounts[s.INBOX]=k.find(ka,"._1sdg");l.listen(this._jewelTabLinks[s.INBOX],'click',ga.bind(this,s.INBOX,o.ALL));if(!n.JewelRequestsUI){this._jewelTabLinks[ca]=k.find(ka,"._1sdf");this._jewelTabCounts[ca]=k.find(ka,"._1sdh");l.listen(this._jewelTabLinks[ca],'click',ga.bind(this,ca,o.ALL));}else{this._jewelTabLinks[ea]=k.find(ka,"._34zq");l.listen(this._jewelTabLinks[ea],'click',ga.bind(this,s.INBOX,o.ALL));}this._markAllReadLink=k.find(ka,"._1c1m");this._seeAllLink=k.find(ka,'.seeMore');l.listen(this._markAllReadLink,'click',(function(la){aa.markFolderAsRead(this._currentFolder);la.kill();}).bind(this));z.subscribe('unread-updated',ha.bind(this));ha.bind(this)();this.render();ba.bump('opened_threadlist_'+this._currentFolder);}Object.assign(fa.prototype,h);Object.assign(fa.prototype,{render:function(){v.render(u.createElement(q,{ChildClass:r,viewer:i.getID(),folder:this._currentFolder,filter:this._currentFilter,jewelRequestsUI:n.JewelRequestsUI,onMessageRequestsClick:this._handleMessageRequestsClick.bind(this),onFilteredRequestsClick:this._handleFilteredRequestsClick.bind(this)}),this._threadlistContainer);},_handleMessageRequestsClick:function(ja){ja.preventDefault();ga.call(this,s.PENDING,o.ALL);},_handleFilteredRequestsClick:function(ja){ja.preventDefault();ga.call(this,s.OTHER,o.ALL);}});function ga(ja,ka){if(this._currentFolder!==ja||this._currentFilter!==ka){var la=this._currentFolder,ma=ja===s.INBOX,na=ja;ba.bump('opened_threadlist_'+ja);if(this._jewelTabLinks[na])j.addClass(this._jewelTabLinks[na],"_1sdd");if(this._jewelTabLinks[la])j.removeClass(this._jewelTabLinks[la],"_1sdd");this._currentFolder=ja;this._currentFilter=ka;if(ma){this._seeAllLink.href=t.BASE_PATH;}else this._seeAllLink.href=da;if(n.JewelRequestsUI){j.conditionShow(this._jewelTabLinks[s.INBOX],ma);j.conditionShow(this._jewelTabLinks[ea],!ma);}this.render();}}function ha(){ia.call(this,s.INBOX);if(!n.JewelRequestsUI)ia.call(this,ca);}function ia(ja){var ka;if(aa.exceedsMaxCount(ja)){ka=p.MAX_UNREAD_COUNT;}else ka=aa.getUnreadCount(ja);var la=this._jewelTabCounts[ja];if(!la)return;if(ka>0){if(ka==p.MAX_UNREAD_COUNT)ka+='+';k.setContent(la,y._("({unread_count})",[y.param('unread_count',ka)]));}else k.setContent(la,'');}f.exports=fa;},null);
__d('MercuryJewel',['Arbiter','MercuryJewelCountControl','MercuryServerPayloadPreprocessor','MercuryChannelHandler'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();c('MercuryChannelHandler').get().turnOn();var k=false;function l(m,n){'use strict';i.constructStores();j.get().handleUpdate(n);this.$MercuryJewel1=new i(m);if(m.getRoot()&&m.isOpen()){this.$MercuryJewel2(m);}else m.subscribeOnce('opened',this.$MercuryJewel2.bind(this,m));}l.prototype.$MercuryJewel2=function(m){'use strict';if(!k){e(['MercuryJewelThreadlistControl'],(function(n){this.$MercuryJewel3=new n(m);}).bind(this));h.inform('mercury-jewel/opened',null,h.BEHAVIOR_PERSISTENT);k=true;}};f.exports=l;},null);