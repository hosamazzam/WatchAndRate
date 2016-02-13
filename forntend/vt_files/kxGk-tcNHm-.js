/*!CK:1117317844!*//*1454326588,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["hNewZ"]); }

__d('ChatSidebarDropdownConstants',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={SOUND:'sound',ADVANCED_SETTINGS:'advanced_settings',BLOCK_SETTINGS:'block_settings',TURN_OFF_DIALOG:'turn_off_dialog',CLOSE_ALL_TABS:'close_all_tabs',SIDEBAR:'sidebar',HIDE_GROUPS:'hide_groups',ONLINE:'online',VIDEOCALL_ON:'videoon',VIDEOCALL_OFF:'videooff',PAUSE:'pause',SHOW_APPS:'show_apps',HIDE_APPS:'hide_apps',SHOW_TICKER:'show_ticker',HIDE_TICKER:'hide_ticker'};f.exports=h;},null);
__d('ChatSidebarSheetChatOffline.react',['Link.react','React','ReactComponentWithPureRenderMixin','fbt'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l=i.PropTypes,m=i.createClass({displayName:'ChatSidebarSheetChatOffline',mixins:[j],propTypes:{onGoOnlineClick:l.func.isRequired},render:function(){return (i.createElement('div',null,k._("{=Go online} to see who's available.",[k.param('=Go online',i.createElement(h,{className:'fbChatGoOnlineLink',onClick:this.props.onGoOnlineClick},k._("Turn on chat")))])));}});f.exports=m;},null);
__d('ChatSidebarDropdown.react',['AppsDivebarDisplayController','Arbiter','AsyncRequest','ChatVisibility','ChatConfig','ChatOptions','ChatSidebarDropdownConstants','ChatTabActions','ContextualDialogArrow','ContextualLayerAutoFlip','FBRTCCallBlockingStore','LayerHideOnBlur','Link.react','LogHistory','MenuSeparator.react','PopoverMenu.react','PresencePrivacy','PresenceState','ReactComponentWithPureRenderMixin','React','ReactXUIMenu','SidebarType','SubscriptionsHandler','TrackingNodes','URI','FBRTCSupport','cx','emptyFunction','fbt','ge','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la){'use strict';if(c.__markCompiled)c.__markCompiled();var ma=ba.Item,na=ba.SelectableItem,oa=ba.SelectableMenu,pa=aa.PropTypes,qa=u.getInstance('blackbird'),ra=aa.createClass({displayName:'ChatSidebarDropdown',mixins:[z],propTypes:{className:pa.string,onHide:pa.func,onShow:pa.func,onToggleSidebar:pa.func.isRequired,sidebarType:pa.string.isRequired},getDefaultProps:function(){return {className:'',onHide:ia,onShow:ia};},getInitialState:function(){return {appsVisible:h.isVisible(),isOnline:k.isOnline(),isTickerVisible:this._getTickerVisibility(),isCallBlocked:r.getBlockingStatus(),pendingChange:false};},componentDidMount:function(){this._subscriptions=new da();this._subscriptions.addSubscriptions(i.subscribe(['Ticker/resized','ticker/show'],(function(){this.setState({isTickerVisible:this._getTickerVisibility()});}).bind(this)),i.subscribe(['AppsDivebar/show-apps','AppsDivebar/hide-apps'],(function(){this.setState({appsVisible:h.isVisible()});}).bind(this)),x.subscribe('privacy-user-presence-changed',(function(){this.setState({isOnline:k.isOnline()});}).bind(this)),i.subscribe(['sidebar/hide','buddylist/hide'],(function(){this.refs.menu.hidePopover();}).bind(this)),r.addListener((function(){this.setState({isCallBlocked:r.getBlockingStatus()});}).bind(this)));},componentWillUnmount:function(){this._subscriptions&&this._subscriptions.release();},_getTickerVisibility:function(){var sa=ka('pagelet_ticker');return !!(sa&&sa.offsetHeight!==0);},_logVisibilityChange:function(sa,ta){var ua=ta?'sidebar_dropdown_visibility_error':'sidebar_dropdown_set_visibility';qa.debug(ua,JSON.stringify({action:sa}));},_changeSetting:function(sa,ta){if(this.state.pendingChange)return;this.setState({pendingChange:true});var ua={};ua[sa]=!ta;m.setSetting(sa,!ta,'mini_sidebar_menu');new j('/ajax/chat/settings.php').setHandler(y.doSync).setErrorHandler(function(){return m.setSetting(sa,ta,'mini_sidebar_menu_error');}).setFinallyHandler((function(){return this.setState({pendingChange:false});}).bind(this)).setData(ua).setAllowCrossPageTransition(true).send();},_onClickOption:function(sa,ta){var ua=true;switch(sa){case n.SOUND:this._changeSetting(sa,ta);break;case n.ADVANCED_SETTINGS:case n.TURN_OFF_DIALOG:i.inform('chat/advanced-settings-dialog-opened');this._logVisibilityChange(sa,false);break;case n.CLOSE_ALL_TABS:o.closeAllTabs();this._logVisibilityChange(sa,false);break;case n.HIDE_GROUPS:this._changeSetting(sa,ta);break;case n.SIDEBAR:this.props.onToggleSidebar();ua=false;break;case n.ONLINE:!this.state.isOnline?k.goOnline():this._logVisibilityChange(sa,true);break;case n.VIDEOCALL_ON:r.turnOnVideoCalling();break;case n.VIDEOCALL_OFF:break;case n.PAUSE:break;case n.SHOW_TICKER:i.inform('ChatSidebarDropdown/openTicker');break;case n.HIDE_TICKER:i.inform('ChatSidebarDropdown/closeTicker');break;case n.SHOW_APPS:h.showApps();break;case n.HIDE_APPS:h.hideApps();break;}if(ua&&this.refs.menu)this.refs.menu.hidePopover();},_onItemClick:function(sa,ta){var ua=ta.item.getValue(),va=ta.item.isSelected&&ta.item.isSelected();this._onClickOption(ua,!!va);},_renderChatSoundOption:function(){return (aa.createElement(na,{value:n.SOUND,selected:m.getSetting(n.SOUND)},ja._("Chat Sounds")));},_renderBlockSettingsOption:function(){return (aa.createElement(ma,{href:new fa('/settings?tab=blocking'),value:n.BLOCK_SETTINGS},ja._("Block Settings")));},_renderAdvancedSettingsOption:function(){return (aa.createElement(ma,{href:new fa('/ajax/chat/privacy/settings_dialog.php'),rel:'dialog',value:n.ADVANCED_SETTINGS},ja._("Advanced Settings...")));},_renderCloseAllOption:function(){return (aa.createElement(ma,{value:n.CLOSE_ALL_TABS},ja._("Close All Chat Tabs")));},_renderHideSidebarOption:function(){return (aa.createElement(ma,{className:"_2xvi",value:n.SIDEBAR},ja._("Hide Sidebar")));},_renderHideGroupsOption:function(){if(this.props.sidebarType===ca.MINI_SIDEBAR||this.props.sidebarType===ca.BUDDYLIST_NUB)return null;return (aa.createElement(na,{value:n.HIDE_GROUPS,selected:m.getSetting(n.HIDE_GROUPS)},ja._("Hide Groups")));},_renderOnlineOption:function(){var sa=k.isOnline(),ta=sa?new fa('/ajax/chat/privacy/settings_dialog.php').addQueryData('dialog_type','turn_off_dialog'):'#',ua=sa?ja._("Turn Off Chat"):ja._("Turn On Chat"),va=sa?n.TURN_OFF_DIALOG:n.ONLINE;return (aa.createElement(ma,{href:ta,rel:sa?'dialog':'',value:va},ua));},_renderVideoCallingOption:function(){if(!ga.isVideoCallBlockingSupported())return;var sa=this.state.isCallBlocked,ta=sa?'#':new fa('/videocall/off/'),ua=sa?ja._("Turn On Video\/Voice Calls"):ja._("Turn Off Video\/Voice Calls"),va=sa?n.VIDEOCALL_ON:n.VIDEOCALL_OFF;return (aa.createElement(ma,{href:ta,rel:sa?'':'dialog',value:va},ua));},_renderAppsOption:function(){if(!l.get('has_apps_option')||this.props.sidebarType!==ca.SIDEBAR)return null;var sa=this.state.appsVisible,ta=sa?ja._("Hide Games"):ja._("Show Games"),ua=sa?n.HIDE_APPS:n.SHOW_APPS;return [aa.createElement(v,{key:'apps_separator'}),aa.createElement(ma,{value:ua,key:'apps_menu'},ta)];},_renderTickerToggleOption:function(){if(!l.get('has_ticker_toggle_option')||this.props.sidebarType!==ca.SIDEBAR)return null;var sa=this.state.isTickerVisible,ta=sa?ja._("Hide Ticker"):ja._("Show Ticker"),ua=sa?n.HIDE_TICKER:n.SHOW_TICKER;return [aa.createElement(v,{key:'ticker_separator'}),aa.createElement(ma,{value:ua,key:'ticker_menu'},ta)];},_renderMenu:function(){return (aa.createElement(oa,{className:'fbChatSidebarDropdown/PopoverMenu',multiple:true,onItemClick:this._onItemClick},this._renderChatSoundOption(),this._renderBlockSettingsOption(),this._renderAdvancedSettingsOption(),aa.createElement(v,null),this._renderCloseAllOption(),this._renderHideSidebarOption(),this._renderHideGroupsOption(),this._renderOnlineOption(),this._renderVideoCallingOption(),this._renderAppsOption(),this._renderTickerToggleOption()));},render:function(){var sa=ja._("Options"),ta=la(this.props.className,"_5qth"+(' '+"_5vm9")+(!k.isOnline()?' '+"_5vma":'')),ua=ea.getTrackingInfo(ea.types.DROPDOWN_BUTTON);return (aa.createElement(w,{alignh:'right',alignv:'top',className:ta,layerBehaviors:[q,p,s],menu:this._renderMenu(),onHide:this.props.onHide,onShow:this.props.onShow,ref:'menu'},aa.createElement(t,{'aria-label':sa,className:"_5vmb button",'data-ft':ua,'data-hover':'tooltip',href:'#'})));}});f.exports=ra;},null);