/*!CK:992330556!*//*1450680680,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["rvZC5"]); }

__d('UFIShareNowMenu.react',['ContextualDialogArrow','ContextualLayerAsyncRelative','ContextualLayerAutoFlip','PopoverAsyncMenu.react','React','ShareNowController','UFIShareLink.react'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=l.PropTypes,p=l.createClass({displayName:'UFIShareNowMenu',propTypes:{focusOnInit:o.bool,openOnInit:o.bool},_mountWithMenu:function(q){if(!q)return;var r=q.getPopoverMenu();m.initMenu(r);if(this.props.focusOnInit)r.getTriggerElem().focus();if(this.props.openOnInit)r.getTriggerElem().click();},render:function(){var q=this.props,r=q.endpoint,s=q.endpointData,t=q.onShow,u=q.onHide;return (l.createElement(k,{alignv:'baseline',endpoint:r,endpointData:s,onShow:t,onHide:u,layerBehaviors:[j,h,i],ref:this._mountWithMenu},l.createElement(n,{href:'#'})));}});f.exports=p;},null);