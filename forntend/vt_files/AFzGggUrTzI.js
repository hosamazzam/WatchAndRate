/*!CK:64357039!*//*1439208364,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["A9k2q"]); }

__d('StreamShareVideo',['AsyncRequest','CSS','Event','cx','ge'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m={_endpoints:[],_thumbs:[],registerThumb:function(n,o,p,q){m._endpoints[n+' '+p]=q;m._thumbs[n+' '+p]=o;},clickTitle:function(n,o,event){return this.expandInlineOrRedirect(n,o,event);},expandInlineOrRedirect:function(n,o,event){if(m._shouldFollowHref(event))return true;var p=m._thumbs[n+' '+o],q=l(p);if(q){i.addClass(q,"uiVideoThumbLoading");h.bootstrap(m._endpoints[n+' '+o],q.parentNode);return false;}return true;},clickTimeline:function(n,o,event){if(m._shouldFollowHref(event))return true;i.addClass(n,"_1xu");i.removeClass(n,"_1xv");h.bootstrap(o,n);return false;},_shouldFollowHref:function(event){event=j.$E(event);if(!event)return false;if(event.getModifiers().any||event.isMiddleClick())return true;return false;}};f.exports=m;},null);
__d('legacy:stream-share-video',['StreamShareVideo'],function a(b,c,d,e){if(c.__markCompiled)c.__markCompiled();b.StreamShareVideo=c('StreamShareVideo');},3);