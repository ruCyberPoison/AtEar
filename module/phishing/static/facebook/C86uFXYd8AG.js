/*!CK:3749677922!*//*1438092879,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["zMY\/V"]); }

__d("XAdsPreferencesFeedbackController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/ads\/preferences\/feeedback\/",{ad_id:{type:"Int",required:true},favorite:{type:"Enum",required:true,enumType:1}});},null);
__d("MAdsPrefsFeedback",["cx","CSS","DOM","MRequest","XAdsPreferencesFeedbackController"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();function l(n,o){var p=o?'ad_useful':'ad_neutral',q=k.getURIBuilder().setInt('ad_id',n).setEnum('favorite',p).getURI(),r=new j(q);r.send();}var m={toggle:function(n,o,p,q){h.conditionClass(n,"_232h",true);n.addEventListener('webkitAnimationEnd',function(r){h.conditionClass(r.target,"_232h",false);i.replace(r.target,o);},true);l(p,q);}};e.exports=m;},null);
__d("MEditComposerEntry",["MComposition","MComposerLogger","MComposerWaterfallEvent","MComposerEntry","MComposerNavigation","MRequest"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m={invoke:function(n,o,p){var q=new g(n),r=new l(o);j.invoke(q).then(function(s){s.xc_edit_callsite=p;var t=s.csid;r.listen('done',this._onSuccess.bind(this,t));r.listen('error',this._onError.bind(this,t));r.setData(s);r.setAutoRetry(true);r.setMethod('POST');r.listen('postprocess',function(u){k.cleanupSoftState();});r.send();}.bind(this));},_onSuccess:function(n){h.logWithSessionID(i.COMPOSER_POST_SUCCESS,n);},_onError:function(n){h.logWithSessionID(i.COMPOSER_POST_FAILURE,n);}};e.exports=m;},null);
__d("DocumentSnapShot",["ErrorUtils"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h;if('nextElementSibling' in document.documentElement){h=function(k){return k.nextElementSibling;};}else h=function(k){var l=k.nextSibling;while(l&&l.nodeType!==1)l=l.nextSibling;return l;};function i(k,l,m){var n=k,o=0,p=1,q=p,r=0,s,t=[];while(!(r===0&&q===o))switch(q){case p:s=false;s=m?g.applyWithGuard(m,a,[n],null,'traverse-filter'):true;t.push([r,n]);if(s)while(t.length>0)g.applyWithGuard(l,a,t.shift(),null,'traverse-walker');if(n.children.length>0){n=n.children[0];r++;}else q=o;break;case o:if(!s)t.pop();if(h(n)){n=h(n);q=p;}else{n=n.parentNode;r--;}break;}}function j(k){var l=[],m=function(o,p){l.push(new Array(o+1).join('  ')+p.tagName.toLowerCase()+(p.id?' id="'+p.id+'"':'')+(p.className?' class="'+p.className+'"':'')+(p.hasAttribute('data-sigil')?' sigil="'+p.getAttribute('data-sigil')+'"':''));},n=function(o){return !!(o.id||o.className||o.hasAttribute('data-sigil'));};i(k||document.documentElement,m,n);return l.join('\n');}e.exports.capture=j;},null);
__d("MBugNub",["DOM","ErrorUtils","LogHistory","MBugNubConfig","MURI","Stratcom","DocumentSnapShot"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n,o,p=[],q=[],r=[],s=a.location;if(j.uri)n=new k(j.uri).getPath();l.listen('history:change',null,function(ha){if(!t())s=a.location;});function t(ha){var ia=new k(n),ja=new k(ha||a.location);return (ja.normalize().getPath()===ia.normalize().getPath());}function u(ha){if(!j.graph_search||!j.search||!j.graph_search_feedback)return false;var ia=(new k(j.graph_search)).getPath(),ja=(new k(j.search)).getPath(),ka=new k(ha||a.location),la=ka.normalize().getPath();return (la.lastIndexOf(ia)===0||la.lastIndexOf(ja)===0);}function v(ha){if(!j.trending_news_feedback||!j.graph_search_news||!j.search_news)return false;var ia=(new k(j.graph_search_news)).getPath(),ja=(new k(j.search_news)).getPath(),ka=new k(ha||a.location),la=ka.normalize().getPath();return (la.lastIndexOf(ia)===0||la.lastIndexOf(ja)===0);}function w(){return z(j.graph_search_feedback);}function x(){return z(j.trending_news_feedback);}function y(ha,ia,ja){return z(n,ha,ia,ja);}function z(ha,ia,ja,ka){var la=new k(ha);la.addQueryData('uri',new k(s).normalize().toString());la.addQueryData('source',ia);la.addQueryData('description',ja);la.addQueryData('st',ka);return la.toString();}function aa(){if(a.FB_GKS.m_js_html_snapshot)o=m.capture();r=i.getEntries().slice();}function ba(){return o;}function ca(ha){return r.slice(ha?Math.max(r.length-ha,0):0);}function da(ha){p.push(ha);}function ea(ha){return p.slice(ha?Math.max(p.length-ha,0):0);}function fa(ha,ia,ja,ka){var la=document.getElementById(ia),ma=document.getElementById(ja),na=document.getElementById(ka),oa=document.getElementById(ha);if(oa){var pa=ba();if(pa){var qa=g.find(oa,"input");qa.value=pa;}else g.hide(oa);}var ra=ea(5);if(ra.length>0)la.value='\n'+ra.map(function(ta){return ('  Message: '+ta.message+'\n'+(ta.guard?'  Guard: '+ta.guard+'\n':'')+(ta.stack?'  Stack: '+ta.stack+'\n':''));}).join('\n  --\n');var sa=ca(100);if(sa.length>0)ma.value='\n'+i.formatEntries(sa);if(q.length>0)na.value=JSON.stringify(q);}h.addListener(da);function ga(ha,ia){q.push({queryId:ha,serialized:ia});}e.exports={isReportURI:t,getReportURI:y,isGraphSearchResult:u,isTrendingNewsResult:v,getGraphSearchFeedbackURI:w,getTrendingNewsFeedbackURI:x,captureState:aa,pushError:da,fillValueInInputs:fa,logFeedItem:ga};},null);
__d("SnapShotHook",["DocumentSnapShot"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();function h(i,j){if(j)i.snapshot=g.capture(j);}e.exports=h;},null);
__d("FbtLoggerImpl",["BanzaiLogger"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h={logImpression:function(i){g.log('FbtImpressionsLoggerConfig',{hash:i,sample_rate:100});}};e.exports=h;},null);
__d("GoodwillThrowbackBanzaiLogger",["BanzaiLogger"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();function h(){"use strict";}h.prototype.logShareEvent=function(i,j){"use strict";var k=this;i.onclick=function(){k.logEvent(j.event,j);};};h.prototype.logEvent=function(event,i){"use strict";var j=Object.assign({event:event},i);g.log('GoodwillThrowbackProductLoggerConfig',j);};e.exports=new h();},null);
__d("ScriptLoaderSourceResolver",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g=100,h=function(i){if(i.script===a.__LOADER__.originalURI||i.script==='<anonymous>'||i.script==='Unknown script code'){var j=a.__LOADER__.mapLineNumber(i.line);if(j)if(j.src){i.script=j.src;i.line=j.line;}else if(j.text)i.script='`'+j.text.trim().substr(0,g)+'`';}};e.exports=h;},null);
__d("MAdsScrollOnMarginTap",["DataStore","DOM","Stratcom","MScrollAreaHelper","BanzaiODS"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l='scroller-item-mask';function m(event){var q=event.getData();o(q.element);}function n(q){o(q.getData());}function o(q){var r=g.get(q);if(!r.scrollOnMarginTap)return;h.scry(q,'div',l).forEach(h.remove);var s=r.scrollArea,t=s.getScrollPageIndex(),u=s.getChildAtPageIndex(t),v={height:u.offsetHeight+'px',position:'absolute',top:0,width:u.offsetWidth+'px',zIndex:99};if(!s.isFirstPage()){var w=h.create('div',{onclick:s.scrollByPages.bind(s,-1),sigil:l,style:v}),x=s.getChildAtPageIndex(t-1);x.appendChild(w);}if(!s.isLastPage()){var y=h.create('div',{onclick:p.bind(),sigil:l,style:v}),z=s.getChildAtPageIndex(t+1);z.appendChild(y);}}function p(event){var q=j.findScrollArea(event.toElement);q.scrollByPages(1);k.bumpEntityKey('feed_ads','m_site_tap_on_margin_next');}i.listen('MScrollArea:create',null,m);i.listen('MScrollArea:scrollend','egoScroller',m);i.listen('m:ads-infinite-hscroll:loaded',null,n);e.exports={};},null);
__d("MDynamicAdLogger",["$","DataStore","DOM","FBJSON","MarauderLogger","MLogger","Stratcom","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();var o='first_hscroll_ad_shown',p='new_hscroll_ad_shown',q='item',r='pixelContainer',s;function t(){if(!s){s=m.listen('MScrollArea:scrollend','egoScroller',v);m.listen('m:page:unload',null,function(){m.removeCurrentListener();s.remove();s=null;});}}function u(z){var aa=g(z),ba=h.get(aa),ca=x(aa,0);ca.forEach(function(da){if(da.element){w(aa,da);var ea=h.get(da.element),fa={uid:ba.userId,adid:ea.adId,size:ba.size};k.log(o,ba.loggingModule,fa);}});}function v(event){var z=event.getData(),aa=z.element,ba=h.get(aa),ca=z.scrollarea,da=ca.getScrollPageIndex(),ea=ca.getScrollPageCount(),fa=x(aa,da);fa.forEach(function(ga){var ha=y(aa)?(ea-1)*ba.groupSize+1:ea*ba.groupSize;if(ba.size==ga.count&&ba.size==ha&&ga.element){w(aa,ga);var ia=h.get(ga.element),ja={scrolled_by_user:z.scrolledByUser,pos:ga.position,size:ba.size,uid:ba.userId,adid:ia.adId};k.log(p,ba.loggingModule,ja);}else{var ka=ba.size+", "+ga.count+", "+ea+", ";if(aa){var la=aa.getAttribute('data-store');ka+="id="+aa.getAttribute('data-store-id');ka+=" data="+la;try{ka+=" meta=";for(var na in ba)ka+=na+",";z=j.parse(la,e.id);ka+=" size2="+z.size;}catch(ma){if(typeof JSON!=="undefined"){ka+=" err";}else ka+=" err2";}}l.mustfix('Unexpected number of items reported by scrollArea : '+ka);}});}function w(z,aa){if(aa.element){var ba=h.get(aa.element),ca=i.scry(z.parentNode,'span',r)[0];if(ca&&ba.pixel){i.appendContent(ca,n(ba.pixel));ba.pixel=null;}}}function x(z,aa){if(z){var ba=i.scry(z,'*',q);if(!ba||ba.length<=0){l.mustfix('no item sigil under scroll area');return [];}var ca=null,da=i.scry(z,'*','scroll-area-body')[0];if(da){if(aa>=da.children.length){l.mustfix('pageIndex '+aa+' is larger then total page number '+da.children.length);return [];}var ea=da.children[aa];ca=m.hasSigil(ea,q)?[ea]:i.scry(ea,'*',q);var fa=h.get(z);if(!fa||!fa.groupSize||(fa.groupSize<ca.length)){l.mustfix('More number of items in a group then expected: group size: '+(fa&&fa.groupSize)?fa.groupSize:'unknown'+' item number:'+ca.length);return [];}}else{if(aa!==0){l.mustfix('try to get page index not 0 when not scrolling. Index '+aa);return [];}ca=ba;}return ca.map(function(ga){return {element:ga,count:ba.length,position:h.get(ga).position};});}}function y(z){return (i.scry(z,'*','m-hscroll-ego-loading').length>0);}e.exports={init:t,logImpression:u};},null);
__d("XAdsPreferencesAdInfoController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/ads\/preferences\/",{ad_id:{type:"Int"},page_type:{type:"Int"},tracking:{type:"String"},optout_url:{type:"String"},rtb_partner_id:{type:"Int"},show_ad_choices:{type:"Bool",defaultValue:false},__asyncDialog:{type:"Int"}});},null);
__d("MHideStoryActions",["$","Banzai","BanzaiLogger","CSS","cx","DOM","DataStore","MActionBubbleHelper","MAdsPrefsFeedback","MBugNub","MParent","MPageController","MRequest","MEditComposerEntry","MScrollAreaScroller","SaveStateHandler","setTimeoutAcrossTransitions","Stratcom","URI","XAdsPreferencesAdInfoController"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){b.__markCompiled&&b.__markCompiled();var aa='storyFlyout',ba='appendPhotosStoryButton',ca='hideStoryButton',da='unfollowActorButton',ea='blockActorPostsButton',fa='markAsSpamStoryButton',ga='afroDirectAction',ha='reportToAdminButton',ia='removeStoryButton',ja='removeReviewButton',ka='editHistoryButton',la='editPostButton',ma='write-recommendation',na='editPostComposer',oa='publishNowButton',pa='reschedulePostButton',qa='editPrivacyButton',ra='turnOffNotifButton',sa='zombieStoryButton',ta='reportBug',ua='aboutThisAdButton',va='fitnessEditButton',wa='saveButton',xa='memorialPinButton',ya='groupPinButton',za='getNotificationsButton',ab='stopNotificationsButton',bb='saved_for_later:caret_action',cb='imp',db='markAsSoldButton',eb='markAvailableButton',fb='hideStoryOnClick',gb='action-title',hb='action-subtitle',ib='adsPreferences',jb='adsPreferencesFeedback',kb='moreOptions',lb='backButton',mb=[ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma,na,oa,pa,qa,ra,sa,ta,ua,va,wa,xa,ya,za,ab,fb,gb,ib,jb,db,eb],nb=5,ob='enabled_action',pb='unfold_action',qb='NFXResolveProblemAction',rb=['NFXHideAppAction','NFXUnsubscribeAction','NFXUnsubscribeAttachedStoryActorAction','NFXUnsubscribeDirectedTargetAction','NFXUnsubscribeOwnerAction','NFXUnsubscribePageAction','NFXUnsubscribeResharerAction'],sb=false,tb=null;function ub(){clearTimeout(tb);sb=false;}x.listen('m:page:render:cache:start',null,function(){sb=true;clearTimeout(tb);tb=w(ub,50);x.listen('m:page:iui:response:complete',null,function(){ub();x.removeCurrentListener();});});x.listen('m:page:loading',null,ub);var vb={};function wb(qc){var rc=new y(qc);rc.removeQueryData('gfid');return rc.toString();}function xb(qc,rc){if(!sb)vb[wb(qc)]=rc;}function yb(qc){return vb[wb(qc)];}function zb(event,qc){var rc=qc.getCausalElement(),sc=m.get(rc),tc=ac(rc),uc=m.get(tc),vc=uc.linkdata,wc=null;if(event.getNode(ca)){wc=sc.hideURI;}else if(event.getNode(da)||event.getNode(ea)){wc=sc.hideAllURI;}else if(event.getNode(fa)){wc=sc.markAsSpamURI;}else if(event.getNode(ia)||event.getNode(ja)){wc=sc.removeURI;}else if(event.getNode(ka)){wc=sc.editHistoryURI;}else if(event.getNode(ra)){wc=sc.turnOffNotifURI;}else if(event.getNode(ga)){var xc=event.getNode(ga);wc=m.get(xc).uri;}else if(event.getNode(ha)){wc=sc.reportToAdminURI;}else if(event.getNode(ua)){wc=sc.aboutThisAdURI;}else if(event.getNode(ib)){wc=sc.adsPrefsURI;}else if(event.getNode(oa)){wc=sc.publishNowURI;}else if(event.getNode(pa)){wc=sc.reschedulePostURI;}else if(event.getNode(wa)){var yc=v.isSaveAction(sc.saveInfo.primarySaveID);wc=yc?sc.saveInfo.saveURI:sc.saveInfo.unsaveURI;}else if(event.getNode(xa)){wc=sc.memorialPinInfo.URI;}else if(event.getNode(ya)){wc=sc.groupPinInfo.URI;}else if(event.getNode(za)||event.getNode(ab)){var zc=new y(sc.setNotificationsURI);zc.addQueryData('subscribe',!!event.getNode(za));wc=zc.toString();}else if(event.getNode(db)){wc=sc.markAsSoldURI;}else if(event.getNode(eb))wc=sc.markAvailableURI;var ad=new y(wc);ad.addQueryData('dom_id',tc.id);var bd=sc.hideParams;if(!bd){ad.addQueryData('_ft_',vc);return ad;}var cd=m.get(l.find(tc,'div','scroll-area')),dd=cd.scrollArea,ed=dd.getChildAtPageIndex(dd.getScrollPageIndex()),fd=m.get(l.find(ed,'*','hScrollingItem')),gd=bd[fd.position];ad.addQueryData(gd);var hd=m.get(ed).adId,id=m.get(ed).linkdata;if(id)vc=id;if(hd){m.set(tc,{ai:hd});vc+=':ai.'+hd;var jd=l.scry(tc,'div','follow-up-box-area');if(cd&&cd.size!=1){if(jd.length==1){ad.addQueryData('is_prepend_follow_up','false');ad.addQueryData('action_dom_id',jd[0].id);}else ad.addQueryData('is_prepend_follow_up','true');}else ad.addQueryData('is_prepend_follow_up','false');}ad.addQueryData('_ft_',vc);return ad;}function ac(qc){var rc=q.bySigil(qc,'story-popup-metadata');return rc;}function bc(qc){if(qc===wa||qc===ga||qc===xa||qc===ya){return null;}else return qc;}function cc(event,qc){var rc;for(var sc=0;sc<mb.length;sc++){var tc=mb[sc];if(event.getNode(tc)){if(tc===ga){var uc=event.getNode(tc);rc=m.get(uc).option_name;}else if(tc===wa){var vc=m.get(event.getNode(aa)).layer,wc=m.get(vc.getCausalElement()).saveInfo,xc=v.isSaveAction(wc.primarySaveID);rc=xc?'save':'unsave';}else if(tc===xa){uc=event.getNode(tc);var yc=m.get(uc).pinning;rc=yc?'memorialPin':'memorialUnpin';}else if(tc===ya){uc=event.getNode(tc);yc=m.get(uc).pinning;rc=yc?'groupPin':'groupUnpin';}else rc=bc(tc);break;}}if(rc)dc(rc,'clk',qc);}function dc(qc,rc,sc){var tc,uc,vc;if(sc){tc=sc.is_self_story;uc=sc.is_sponsored;vc=sc.location;}i.log('FeedStoryOptionMenuLoggerConfig',{option_name:qc,event_type:rc,is_sponsored:uc,is_self_story:tc,m_touch_feed_location:vc});}function ec(qc,rc){if(rc){j.removeClass(qc,"_53l_");j.addClass(qc,"_53m0");}else{j.removeClass(qc,"_53m0");j.addClass(qc,"_53l_");}}function fc(qc,rc){var sc=m.get(qc),tc=l.find(qc,'div',gb),uc=l.scry(qc,'div',hb)[0],vc=rc.chevron_subtitle;if(uc)j.conditionClass(tc,"_320v",!vc);var wc=l.scry(qc,'i')[0];if(rc.ssf_option_name){sc.uri=rc.ssf_uri;sc.option_name=rc.ssf_option_name;sc.nfx_option_index=rc.nfx_option_index;tc.textContent=rc.ssf_title;if(uc)uc.textContent=rc.ssf_subtitle;if(wc)l.replace(wc,rc.ssf_icon);}else{sc.uri=rc.uri;sc.option_name=rc.option_name;tc.textContent=rc.title;if(uc&&vc)uc.textContent=vc;if(wc)l.replace(wc,rc.icon);}n.toggleActionBubbleItem(qc,true);if(rc.option_name===qb){x.addSigil(qc,pb);}else x.removeSigil(qc,pb);}function gc(qc,rc,sc,tc){for(var uc in rc)if(rc.hasOwnProperty(uc)){var vc=l.scry(qc,'*',uc)[0];if(vc){var wc=rc[uc];n.toggleActionBubbleItem(vc,wc);if(wc){var xc=bc(uc);if(xc)dc(xc,'imp',tc);switch(uc){case ba:var yc=m.get(vc);yc.dialogURI=sc.appendPhotosURI;break;case la:var zc=m.get(vc);zc.dialogURI=sc.editPostURI;break;case ma:var ad=sc.rating_info,bd=m.get(vc);bd=Object.assign(bd||{},ad);m.set(vc,bd);break;case oa:var cd=m.get(vc);cd.dialogURI=sc.publishNowURI;break;case pa:var dd=m.get(vc);dd.dialogURI=sc.reschedulePostURI;break;case qa:var ed=m.get(vc);ed.dialogURI=sc.editPrivacyURI;var fd=l.scry(vc,'i')[0];if(fd)l.replace(fd,sc.privacyIcon);break;case ka:var gd=m.get(vc);gd.dialogURI=sc.editHistoryURI;break;case va:var hd=m.get(vc);hd.dialogURI=sc.fitnessEditURI;break;case wa:var id=sc.saveInfo,jd=v.isSaveAction(id.primarySaveID),kd=v.isInTransition(id.primarySaveID),ld=l.find(vc,'div',gb);ld.textContent=jd?id.saveTitle:id.unsaveTitle;j.conditionClass(vc,"_kh1",kd);var md=id.logData;h.post(bb,{action:cb,surface:md.surface,story_id:md.story_id,is_save:jd});if(jd){dc('save','imp',tc);}else dc('unsave','imp',tc);x.addSigil(vc,pb);break;case xa:var nd=m.get(vc);nd.dialogURI=sc.memorialPinInfo.URI;var od=l.find(vc,'div',gb);od.textContent=sc.memorialPinInfo.text;break;case ya:var pd=m.get(vc);pd.dialogURI=sc.groupPinInfo.URI;j.conditionClass(vc,"_2bhl",sc.groupPinInfo.pinning);break;case jb:var qd=l.scry(vc,'i')[0];if(qd){var rd=sc.adsPrefsFeedbacks[0]?sc.adsPrefsIconActive:sc.adsPrefsIconPassive;l.replace(qd,rd);}x.addSigil(vc,pb);break;case ib:x.addSigil(vc,pb);break;case kb:x.addSigil(vc,pb);break;}}}}}function hc(){var qc=m.get(this.getCausalElement()),rc=this.getRoot();j.removeClass(rc,"_53m1");j.addClass(rc,"_53m2");var sc=qc.storyInfo;dc('root','clk',sc);var tc={};tc[kb]=!!qc.chevron_cleanup;tc[lb]=false;tc[sa]=!!qc.zombieStoryURI&&!!qc.isEmployeeAccount;tc[ta]=!!qc.isEmployeeAccount;tc[ua]=!!qc.aboutThisAdURI;tc[ca]=!!qc.hideURI;var uc=qc.setNotificationsURI,vc=uc&&yb(uc);tc[za]=!!(uc&&!vc);tc[ab]=!!vc;tc[ba]=!!qc.appendPhotosURI;var wc=!!qc.isEditComposer,xc=qc.rating_info,yc=!!qc.editPostURI;tc[la]=yc&&!wc&&!xc;tc[na]=yc&&wc&&!xc;tc[ma]=yc&&!!xc;tc[ja]=!!qc.removeURI&&!!xc;tc[ia]=!!qc.removeURI&&!xc;tc[oa]=!!qc.publishNowURI;tc[pa]=!!qc.reschedulePostURI;tc[ka]=!!qc.editHistoryURI;tc[ra]=!!qc.turnOffNotifURI;tc[qa]=!!qc.editPrivacyURI;tc[fa]=!!qc.markAsSpamURI;tc[va]=!!qc.fitnessEditURI;tc[db]=!!qc.markAsSoldURI;tc[eb]=!!qc.markAvailableURI;var zc=l.scry(rc,'*',ga);if(zc){var ad=qc.afroDirectActions;for(var bd=0;bd<zc.length;bd++){var cd=zc[bd];if(ad&&ad[bd]){fc(cd,ad[bd]);dc(ad[bd].option_name,'imp',sc);}else n.toggleActionBubbleItem(cd,false);}}tc[ha]=!!qc.reportToAdminURI&&qc.storyInfo&&qc.storyInfo.location==="group";tc[wa]=!!qc.saveInfo;tc[xa]=!!qc.memorialPinInfo;tc[ya]=!!qc.groupPinInfo;tc[ib]=!!qc.adID;tc[jb]=!!qc.adsPrefsIconActive;gc(rc,tc,qc,sc);if(!!qc.chevron_cleanup){if(sc&&sc.is_sponsored){nb=6;}else nb=5;var dd=l.scry(rc,'*',ob),ed=0;dd.forEach(function(nd){var od=x.hasSigil(nd,kb)||x.hasSigil(nd,lb);if(!od)ed++;});var fd=ed<=nb;if(fd){dd.forEach(function(nd){var od=x.hasSigil(nd,kb)||x.hasSigil(nd,lb);if(od){n.toggleActionBubbleItem(nd,false);}else ec(nd,false);},this);}else{var gd=0;dd.forEach(function(nd){var od=x.hasSigil(nd,pb);ec(nd,!od);if(od)gd++;});var hd=[],id=[],jd=false,kd=qc.afroDirectActions,ld=0;dd.forEach(function(nd){var od=x.hasSigil(nd,pb),pd=x.hasSigil(nd,ga),qd=!od&&pd&&gd<nb;if(qd){var rd=kd[ld].option_name;ld++;var sd=rb.indexOf(rd)>-1;if(!sd||!jd){ec(nd,false);gd++;if(sd)jd=true;}else id.push(nd);}else if(pd){id.push(nd);}else hd.push(nd);},this);hd=hd.concat(id);while(gd<nb&&hd.length>0){var md=hd.shift();ec(md,false);gd++;}}}}function ic(event){var qc=m.get(event.getNode(aa)),rc=qc.layer,sc=rc.getCausalElement(),tc=ac(sc),uc=event.getNode(fb),vc=m.get(sc),wc=vc.storyInfo;cc(event,wc);if(event.getNode(sa)){window.open(m.get(sc).zombieStoryURI);rc.hide();return;}var xc=event.getNode(ga);if(xc){var yc=m.get(xc),zc=yc.option_name;if(zc==='STOP_SEE_FIRST'){var ad=yc.nfx_option_index,bd=vc.afroDirectActions;delete bd[ad].ssf_title;delete bd[ad].ssf_subtitle;delete bd[ad].ssf_uri;delete bd[ad].ssf_icon;delete bd[ad].ssf_option_name;delete bd[ad].nfx_option_index;var cd=true;for(var dd=0;dd<bd.length;dd++)if(bd[dd].ssf_option_name){cd=false;break;}if(cd){var ed=l.scry(tc,'*','seeFirstIndicator');if(ed&&ed.length>0)l.remove(ed[0]);}}}if(event.getNode(ta)){rc.hide();p.captureState();r.forceLoad(p.getReportURI('StoryChevron','',m.get(sc).serializedStory));return;}if(event.getNode(ka)){r.load(m.get(sc).editHistoryURI);rc.hide();return;}if(event.getNode(na)){t.invoke(vc.composition,vc.composer_uri,vc.edit_callsite);return;}var fd=m.get(sc).adID,gd=m.get(sc).pageType,hd=l.scry(tc,'div','scroll-area'),id,jd,kd;if(hd.length){jd=m.get(hd[0]);kd=jd.scrollArea;var ld=kd.getChildAtPageIndex(kd.getScrollPageIndex());fd=m.get(ld).adId;id=ld;}if(event.getNode(ib)){var md=z.getURIBuilder().setInt('ad_id',fd).setInt('page_type',gd).getURI();r.load(md);rc.hide();return;}var nd=event.getNode(jb);if(nd){var od=l.scry(nd,'i')[0],pd=!m.get(sc).adsPrefsFeedbacks[0],qd=pd?m.get(sc).adsPrefsIconActive:m.get(sc).adsPrefsIconPassive;o.toggle(od,qd,fd,pd);m.set(sc,{adsPrefsFeedback:pd});return;}var rd=event.getNode(kb);if(rd){j.removeClass(rc.getRoot(),"_53m2");j.addClass(rc.getRoot(),"_53m1");var sd=l.scry(rc.getRoot(),'*',lb)[0];if(sd)n.toggleActionBubbleItem(sd,true);return;}var td=event.getNode(lb);if(td){j.removeClass(rc.getRoot(),"_53m1");j.addClass(rc.getRoot(),"_53m2");n.toggleActionBubbleItem(td,false);return;}var ud=zb(event,rc),vd=new s(ud.toString());if(event.getNode(wa)){var wd=m.get(sc).saveInfo,xd=v.isSaveAction(wd.primarySaveID),yd=v.isInTransition(wd.primarySaveID);if(yd)return;if(xd){v.saving(wd.allSaveIDs);var zd=q.bySigil(m.get(sc).flyout._contextNode,'story-div').firstChild;l.insertBefore(zd,wd.markup);}else{v.unsaving(wd.allSaveIDs);jc(wd.primarySaveID);}vd.listen('error',function(){var ce=!v.isSaveAction(wd.primarySaveID);if(ce){v.unsaved(wd.allSaveIDs);}else v.saved(wd.allSaveIDs);});}var ae=event.getNode(ua);if(ae){window.open(ud.toString());return;}vd.send();if(fd&&hd.length&&jd.size>1){var be=kd.getScrollPageIndex();if(be==kd.getScrollPageCount()-1){kd.scrollByPages(-1);}else kd.scrollByPages(1);setTimeout(function(){l.remove(id);kd.reflow();if(be!=kd.getScrollPageCount())kd.scrollToIndex(be);m.set(hd[0],{size:jd.size-1});},u.SCROLL_ANIMATION_DURATION_MS);}else uc&&l.hide(tc);rc.hide();}function jc(qc,rc){var sc=l.scry(document,'section','reminder-card-'+qc);if(sc.length>0)l.replace(sc[0],rc);}function kc(qc,event){var rc=event.getNode('undo-content');if(rc){var sc=m.get(rc).storyDomID,tc=m.get(event.getTarget());if(tc&&tc.href){var uc=m.get(g(sc)),vc=uc.linkdata;if(uc.ai)vc+=':ai.'+uc.ai;var wc=(new y(tc.href)).addQueryData('_ft_',vc),xc=new s(wc.toString());xc.send();}if(qc)l.show(g(sc));l.hide(rc);}}var lc,mc;function nc(){return lc;}function oc(){lc=null;for(var qc=0,rc=mc.length;qc<rc;qc++)mc[qc].remove();mc.length=0;}function pc(qc,rc){var sc=false;if(lc){sc=lc.isShown();lc.destroy();oc();}lc=qc;var tc=lc.getRoot();x.addSigil(tc,aa);mc=[lc.addListener('beforeshow',hc,lc),l.listen(tc,'click',null,ic),x.listen('m:page:unload',null,oc),x.listen('click','undo-hide-button',kc.bind(this,true)),x.listen('click','unfab-button',kc.bind(this,false))];x.invoke('m:story:action-bubble-initialized',null,{menuNubID:rc,wasOpen:sc});}e.exports={init:pc,getActionBubble:nc,handleSaveFollowup:jc,setNotificationState:xb};},null);