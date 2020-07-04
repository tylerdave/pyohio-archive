(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"SpeakerPageTemplate",function(){return g}),a.d(t,"speakerPageQuery",function(){return E});a(81),a(169),a(180);var n=a(0),r=a.n(n),s=a(4),i=a.n(s),o=a(177),l=a.n(o),c=a(168),u=a(178),m=a.n(u),M=a(204),d=a(209),p=a(210),N=a(176),L=a(182),g=function(e){var t=e.contentComponent,a=e.photoSrc,n=e.presentations,s=e.speakerName,i=e.speakerBio,o=e.helmet,l=e.twitter,u=e.mastodon,N=e.mastodonUrl,g=e.website,j=t||L.b,E=n.map(function(e,t){return r.a.createElement("p",null,r.a.createElement("strong",null,e.kind,":")," ",r.a.createElement(c.a,{to:"/presentations/"+e.presentation_id},e.title))});return r.a.createElement("section",{className:"section section--gradient"},o||"",r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-10 is-offset-1"},r.a.createElement("div",{className:"section speaker-bio"},r.a.createElement("h1",{className:"title is-size-2 has-text-weight-bold is-bold-light"},"Speaker: ",s),r.a.createElement("div",{className:"social-icons"},r.a.createElement("ul",null,l&&r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/"+l},r.a.createElement("span",{className:"icon",role:"presentation"},r.a.createElement(M.a,{icon:d.b})," "),"@",l)),u&&r.a.createElement("li",null,r.a.createElement("a",{href:N},r.a.createElement("span",{className:"icon",role:"presentation"},r.a.createElement(M.a,{icon:d.a})," "),u)),g&&r.a.createElement("li",null,r.a.createElement("a",{href:g},r.a.createElement("span",{className:"icon",role:"presentation"},r.a.createElement(M.a,{icon:p.a})," "),g)))),r.a.createElement(m.a,{fixed:a,alt:s,className:"speaker-image-wrapper is-clearfix"}),r.a.createElement(j,{className:"content",content:i}),r.a.createElement("h2",{className:"is-size-3"},"Presenting:"),E)))))};g.propTypes={contentComponent:i.a.func,helmet:i.a.object,mastodon:i.a.string,mastodonUrl:i.a.string,photoSrc:i.a.string,presentations:i.a.array,speakerName:i.a.string.isRequired,speakerBio:i.a.string,title:i.a.string,twitter:i.a.string,website:i.a.string};var j=function(e){var t=e.data.speakers,a="";t.photo&&(a=t.photo.local.childImageSharp.fixed);var n,s,i="PyOhio 2019 Speaker: "+t.name,o=t.presentations.map(function(e){return e.title}).join(", "),c=t.name+" presenting: "+o;return r.a.createElement(N.a,null,r.a.createElement(g,{contentComponent:L.a,photoSrc:a,presentations:t.presentations,speakerName:t.name,speakerBio:t.biography_html,title:"Speaker: "+t.name,twitter:t.twitter,mastodon:t.mastodon,mastodonUrl:(n=t.mastodon,s=n.split("@").reverse(),"https://"+s[0]+"/@"+s[1]),website:t.website,helmet:r.a.createElement(l.a,null,r.a.createElement("title",null,i),r.a.createElement("meta",{name:"description",content:c}),r.a.createElement("meta",{name:"twitter:description",content:c}),r.a.createElement("meta",{name:"twitter:title",content:i}),r.a.createElement("meta",{property:"og:title",content:i}))}))};j.propTypes={data:i.a.object.isRequired},t.default=j;var E="2586067900"},168:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),s=a(4),i=a.n(s),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(170);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},170:function(e,t,a){var n;e.exports=(n=a(172))&&n.default||n},171:function(e){e.exports={data:{site:{siteMetadata:{title:"PyOhio 2019",description:"PyOhio is a FREE annual Python conference. July 27-28, 2019 in Columbus, OH.",siteUrl:"https://www.pyohio.org"},pathPrefix:"/2019"}}}},172:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),s=a(4),i=a.n(s),o=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},173:function(e){e.exports={data:{allSponsorLevels:{edges:[{node:{name:"Premier",sponsors:[{name:"Google Cloud",url:"https://cloud.google.com/",web_logo:{local:{childImageSharp:{resize:{src:"/2019/static/2dfc87b27734ee011eb26302ffc46521/c9086/Google_Cloud.png",tracedSVG:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3e%3cpath d='M45 19c-7 2-15 9-15 14l-1 2c-4 0-7 14-3 20s6 6 21 7c17 0 20 0 25-4 6-6 7-15 1-21l-3-5c0-2-6-9-10-11-5-2-11-3-15-2m-1 11l-2 2 2 1 4 3c2 2 2 2-1 4-3 3-3 3-6 1-3-1-3-1-6 1s-4 6-1 8c1 2 4 2 17 2 14 0 14-1 16-3 1-3 0-6-3-7l-3-5c-1-7-12-12-17-7M15 78l-2 5c0 4 5 7 8 3 1-1 1-1 3 1h12c2-2 3-2 2 2 0 2 3 2 5 1l1-5c0-4 0-4-2-4l-4 2h-1c-1-2-4-3-6-1H21l-3 1 2 1 1 1c-1 2-5 1-6-1-2-2 0-5 3-4 3 0 4-1 1-2h-4' fill='%23d3d3d3' fill-rule='evenodd'/%3e%3c/svg%3e",width:100,height:100,aspectRatio:1,originalName:"Google_Cloud.png"}}}}}]}}]}}}},174:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDM4LjU0OXB4IiBoZWlnaHQ9IjQzOC41NDlweCIgdmlld0JveD0iMCAwIDQzOC41NDkgNDM4LjU0OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjU0OSA0MzguNTQ5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQwOS4xMzIsMTE0LjU3M2MtMTkuNjA4LTMzLjU5Ni00Ni4yMDUtNjAuMTk0LTc5Ljc5OC03OS44QzI5NS43MzYsMTUuMTY2LDI1OS4wNTcsNS4zNjUsMjE5LjI3MSw1LjM2NSAgIGMtMzkuNzgxLDAtNzYuNDcyLDkuODA0LTExMC4wNjMsMjkuNDA4Yy0zMy41OTYsMTkuNjA1LTYwLjE5Miw0Ni4yMDQtNzkuOCw3OS44QzkuODAzLDE0OC4xNjgsMCwxODQuODU0LDAsMjI0LjYzICAgYzAsNDcuNzgsMTMuOTQsOTAuNzQ1LDQxLjgyNywxMjguOTA2YzI3Ljg4NCwzOC4xNjQsNjMuOTA2LDY0LjU3MiwxMDguMDYzLDc5LjIyN2M1LjE0LDAuOTU0LDguOTQ1LDAuMjgzLDExLjQxOS0xLjk5NiAgIGMyLjQ3NS0yLjI4MiwzLjcxMS01LjE0LDMuNzExLTguNTYyYzAtMC41NzEtMC4wNDktNS43MDgtMC4xNDQtMTUuNDE3Yy0wLjA5OC05LjcwOS0wLjE0NC0xOC4xNzktMC4xNDQtMjUuNDA2bC02LjU2NywxLjEzNiAgIGMtNC4xODcsMC43NjctOS40NjksMS4wOTItMTUuODQ2LDFjLTYuMzc0LTAuMDg5LTEyLjk5MS0wLjc1Ny0xOS44NDItMS45OTljLTYuODU0LTEuMjMxLTEzLjIyOS00LjA4Ni0xOS4xMy04LjU1OSAgIGMtNS44OTgtNC40NzMtMTAuMDg1LTEwLjMyOC0xMi41Ni0xNy41NTZsLTIuODU1LTYuNTdjLTEuOTAzLTQuMzc0LTQuODk5LTkuMjMzLTguOTkyLTE0LjU1OSAgIGMtNC4wOTMtNS4zMzEtOC4yMzItOC45NDUtMTIuNDE5LTEwLjg0OGwtMS45OTktMS40MzFjLTEuMzMyLTAuOTUxLTIuNTY4LTIuMDk4LTMuNzExLTMuNDI5Yy0xLjE0Mi0xLjMzMS0xLjk5Ny0yLjY2My0yLjU2OC0zLjk5NyAgIGMtMC41NzItMS4zMzUtMC4wOTgtMi40MywxLjQyNy0zLjI4OWMxLjUyNS0wLjg1OSw0LjI4MS0xLjI3Niw4LjI4LTEuMjc2bDUuNzA4LDAuODUzYzMuODA3LDAuNzYzLDguNTE2LDMuMDQyLDE0LjEzMyw2Ljg1MSAgIGM1LjYxNCwzLjgwNiwxMC4yMjksOC43NTQsMTMuODQ2LDE0Ljg0MmM0LjM4LDcuODA2LDkuNjU3LDEzLjc1NCwxNS44NDYsMTcuODQ3YzYuMTg0LDQuMDkzLDEyLjQxOSw2LjEzNiwxOC42OTksNi4xMzYgICBjNi4yOCwwLDExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjNjNC41NjUtMC45NTIsOC44NDgtMi4zODMsMTIuODQ3LTQuMjg1YzEuNzEzLTEyLjc1OCw2LjM3Ny0yMi41NTksMTMuOTg4LTI5LjQxICAgYy0xMC44NDgtMS4xNC0yMC42MDEtMi44NTctMjkuMjY0LTUuMTRjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5Ni0yNi44MzUtMTEuMTRjLTkuMjM1LTUuMTM3LTE2Ljg5Ni0xMS41MTYtMjIuOTg1LTE5LjEyNiAgIGMtNi4wOS03LjYxNC0xMS4wODgtMTcuNjEtMTQuOTg3LTI5Ljk3OWMtMy45MDEtMTIuMzc0LTUuODUyLTI2LjY0OC01Ljg1Mi00Mi44MjZjMC0yMy4wMzUsNy41Mi00Mi42MzcsMjIuNTU3LTU4LjgxNyAgIGMtNy4wNDQtMTcuMzE4LTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNGM1LjUyLTEuNzE1LDEzLjcwNi0wLjQyOCwyNC41NTQsMy44NTNjMTAuODUsNC4yODMsMTguNzk0LDcuOTUyLDIzLjg0LDEwLjk5NCAgIGM1LjA0NiwzLjA0MSw5LjA4OSw1LjYxOCwxMi4xMzUsNy43MDhjMTcuNzA1LTQuOTQ3LDM1Ljk3Ni03LjQyMSw1NC44MTgtNy40MjFzMzcuMTE3LDIuNDc0LDU0LjgyMyw3LjQyMWwxMC44NDktNi44NDkgICBjNy40MTktNC41NywxNi4xOC04Ljc1OCwyNi4yNjItMTIuNTY1YzEwLjA4OC0zLjgwNSwxNy44MDItNC44NTMsMjMuMTM0LTMuMTM4YzguNTYyLDIxLjUwOSw5LjMyNSw0MC45MjIsMi4yNzksNTguMjQgICBjMTUuMDM2LDE2LjE4LDIyLjU1OSwzNS43ODcsMjIuNTU5LDU4LjgxN2MwLDE2LjE3OC0xLjk1OCwzMC40OTctNS44NTMsNDIuOTY2Yy0zLjksMTIuNDcxLTguOTQxLDIyLjQ1Ny0xNS4xMjUsMjkuOTc5ICAgYy02LjE5MSw3LjUyMS0xMy45MDEsMTMuODUtMjMuMTMxLDE4Ljk4NmMtOS4yMzIsNS4xNC0xOC4xODIsOC44NS0yNi44NCwxMS4xMzZjLTguNjYyLDIuMjg2LTE4LjQxNSw0LjAwNC0yOS4yNjMsNS4xNDYgICBjOS44OTQsOC41NjIsMTQuODQyLDIyLjA3NywxNC44NDIsNDAuNTM5djYwLjIzN2MwLDMuNDIyLDEuMTksNi4yNzksMy41NzIsOC41NjJjMi4zNzksMi4yNzksNi4xMzYsMi45NSwxMS4yNzYsMS45OTUgICBjNDQuMTYzLTE0LjY1Myw4MC4xODUtNDEuMDYyLDEwOC4wNjgtNzkuMjI2YzI3Ljg4LTM4LjE2MSw0MS44MjUtODEuMTI2LDQxLjgyNS0xMjguOTA2ICAgQzQzOC41MzYsMTg0Ljg1MSw0MjguNzI4LDE0OC4xNjgsNDA5LjEzMiwxMTQuNTczeiIvPgo8L2c+CjxkaXYgeG1sbnM9IiIgaWQ9ImRpdlNjcmlwdHNVc2VkIiBzdHlsZT0iZGlzcGxheTogbm9uZSIvPjxzY3JpcHQgeG1sbnM9IiIgaWQ9Imdsb2JhbFZhcnNEZXRlY3Rpb24iIHNyYz0iY2hyb21lLWV4dGVuc2lvbjovL2Nta2RibWZuZGtmZ2VibGRobmtiZmhsbmVlZmRhYWlwL2pzL3dyc19lbnYuanMiLz48L3N2Zz4K"},175:function(e,t,a){e.exports=a.p+"static/pyohio-logo-small-ab92a8f295906ac1c4d7daf943b7f182.png"},176:function(e,t,a){"use strict";var n=a(171),r=a(0),s=a.n(r),i=a(177),o=a.n(i),l=a(168),c=(a(169),a(173)),u=a(178),m=a.n(u),M=function(){return s.a.createElement(l.b,{query:"3217882364",render:function(e){return s.a.createElement("footer",{className:"footer"},s.a.createElement("div",{className:"content has-text-centered"},s.a.createElement("p",null,"© 2019 PyOhio"),null!=e.allSponsorLevels.edges[0].node.sponsors&&s.a.createElement("div",null,s.a.createElement("p",null,"PyOhio is made possible by our premier sponsor:"),s.a.createElement("a",{href:e.allSponsorLevels.edges[0].node.sponsors[0].url},s.a.createElement(m.a,{fixed:e.allSponsorLevels.edges[0].node.sponsors[0].web_logo.local.childImageSharp.resize,alt:e.allSponsorLevels.edges[0].node.sponsors[0].name})),s.a.createElement("p",null,"and our other ",s.a.createElement(l.a,{to:"/sponsors"},"2019 sponsors"),".")),s.a.createElement("a",{href:"https://www.netlify.com"},s.a.createElement("img",{src:"https://www.netlify.com/img/global/badges/netlify-dark.svg",alt:"Netlify logo"}))))},data:c})},d=a(34),p=a.n(d),N=a(7),L=a.n(N),g=function(e){function t(){return e.apply(this,arguments)||this}return L()(t,e),t.prototype.render=function(){return s.a.createElement("button",{className:"navbar-link",type:"button",onClick:this.props.onClick,onKeyUp:this.props.onKeyUp,"aria-expanded":this.props.ariaExpanded,onMouseOver:this.props.onMouseOver,onMouseOut:this.props.onMouseOut},this.props.name)},t}(s.a.Component),j=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={expanded:!1},a.setExpanded=a.setExpanded.bind(p()(a)),a}L()(t,e);var a=t.prototype;return a.setExpanded=function(e){if(e){if(e.key&&"Enter"!==e.key&&" "!==e.key)return;if(e.dispatchConfig&&e.dispatchConfig.phasedRegistrationNames){var t=e.dispatchConfig.phasedRegistrationNames.bubbled;if("onMouseOver"===t&&this.state.expanded||"onMouseOut"===t&&!this.state.expanded)return}}this.props.handleDropdownClick(this)},a.render=function(){return s.a.createElement("div",{className:this.state.expanded?"navbar-item has-dropdown is-active":"navbar-item has-dropdown",onMouseOver:this.setExpanded,onMouseOut:this.setExpanded},s.a.createElement(g,{name:this.props.buttonName,onClick:this.setExpanded,ariaExpanded:this.state.expanded}),s.a.createElement("div",{className:"navbar-dropdown"},this.props.links.map(function(e){return s.a.createElement(l.a,{className:"navbar-item",to:e.url,key:e.url},e.name)})))},t}(s.a.Component),E=a(174),T=a.n(E),y=a(175),h=a.n(y),w=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={burgerExpanded:!1,expandedDropdown:null},a.handleBurgerClick=a.handleBurgerClick.bind(p()(a)),a.handleDropdownClick=a.handleDropdownClick.bind(p()(a)),a}L()(t,e);var a=t.prototype;return a.handleBurgerClick=function(){this.setState(function(e){return{burgerExpanded:!e.burgerExpanded}})},a.handleDropdownClick=function(e){this.setState(function(t){var a=null;return t.expandedDropdown&&t.expandedDropdown.setState({expanded:!1}),t.expandedDropdown!==e&&(e.setState({expanded:!0}),a=e),{expandedDropdown:a}})},a.render=function(){return s.a.createElement("nav",{className:"navbar is-transparent",role:"navigation","aria-label":"main navigation"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement(l.a,{to:"/",className:"navbar-item",title:"Logo"},s.a.createElement("img",{src:h.a,alt:"PyOhio 2019"})),s.a.createElement("button",{className:this.state.burgerExpanded?"navbar-burger burger is-active":"navbar-burger burger","data-target":"navMenu",onClick:this.handleBurgerClick,"aria-label":"hamburger menu","aria-expanded":this.state.burgerExpanded},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null))),s.a.createElement("div",{id:"navMenu",className:this.state.burgerExpanded?"navbar-menu is-active":"navbar-menu"},s.a.createElement("div",{className:"navbar-start has-text-centered"},s.a.createElement(j,{buttonName:"About",handleDropdownClick:this.handleDropdownClick,links:[{name:"About PyOhio",url:"/about"},{name:"Code of Conduct",url:"/about/code-of-conduct"},{name:"Organizing Team",url:"/about/team"},{name:"Speakers",url:"/about/speakers"},{name:"Newsletter",url:"/news/keep-in-touch"}]}),s.a.createElement(j,{buttonName:"Events",handleDropdownClick:this.handleDropdownClick,links:[{name:"Events Overview",url:"/events"},{name:"Full Schedule",url:"/events/schedule"},{name:"Talks",url:"/events/talks"},{name:"Tutorials",url:"/events/tutorials"},{name:"Reception & Sprints",url:"/events/reception-sprints"},{name:"MicroPython on FPGAs Hackfest",url:"/events/hackfest"},{name:"Young Coders",url:"/events/young-coders"},{name:"Lightning Talks",url:"/events/lightning-talks"}]}),s.a.createElement(j,{buttonName:"Attend",handleDropdownClick:this.handleDropdownClick,links:[{name:"Register",url:"/attend/register"},{name:"Volunteer",url:"/attend/volunteer"},{name:"Travel & Directions",url:"/attend/travel-directions"},{name:"Hotels",url:"/attend/hotels"},{name:"Venue",url:"/attend/venue"},{name:"Food",url:"/attend/food"}]}),s.a.createElement(j,{buttonName:"Sponsors",handleDropdownClick:this.handleDropdownClick,links:[{name:"Our Sponsors",url:"/sponsors"},{name:"Prospectus",url:"/sponsors/prospectus"},{name:"Individual Sponsors",url:"/sponsors/individual"}]}),s.a.createElement(l.a,{className:"navbar-item",to:"/jobs"},"Job Listings")),s.a.createElement("div",{className:"navbar-end has-text-centered"},s.a.createElement("a",{className:"navbar-item",href:"https://github.com/pyohio/pyohio-static-website",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("span",{className:"icon"},s.a.createElement("img",{src:T.a,alt:"Github"})))))))},t}(s.a.Component);a(179),t.a=function(e){var t=e.children;return s.a.createElement(l.b,{query:"2348043427",render:function(e){return s.a.createElement("div",null,s.a.createElement(o.a,null,s.a.createElement("html",{lang:"en"}),s.a.createElement("title",null,e.site.siteMetadata.title),s.a.createElement("link",{rel:"icon",type:"image/png",href:"/2019/img/favicon-16x16.png",sizes:"16x16"}),s.a.createElement("link",{rel:"icon",type:"image/png",href:"/2019/img/favicon-32x32.png",sizes:"32x32"}),s.a.createElement("link",{rel:"mask-icon",href:"/2019/img/safari-pinned-tab.svg",color:"#ff4400"}),s.a.createElement("meta",{name:"theme-color",content:"#fff"}),s.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/2019/img/apple-touch-icon.png"}),s.a.createElement("meta",{name:"description",content:e.site.siteMetadata.description}),s.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),s.a.createElement("meta",{name:"twitter:description",content:e.site.siteMetadata.description}),s.a.createElement("meta",{name:"twitter:image",content:""+e.site.siteMetadata.siteUrl+e.site.pathPrefix+"/img/pyohio-2019-og.jpg"}),s.a.createElement("meta",{name:"twitter:site",content:"@pyohio"}),s.a.createElement("meta",{name:"twitter:title",content:e.site.siteMetadata.title}),s.a.createElement("meta",{property:"og:image",content:""+e.site.siteMetadata.siteUrl+e.site.pathPrefix+"/img/pyohio-2019-og.jpg"}),s.a.createElement("meta",{property:"og:title",content:e.site.siteMetadata.title})),s.a.createElement(w,null),s.a.createElement("div",null,t),s.a.createElement(M,null))},data:n})}},182:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(0),r=a.n(n),s=a(4),i=a.n(s),o=function(e){var t=e.content,a=e.className;return r.a.createElement("div",{className:a,dangerouslySetInnerHTML:{__html:t}})},l=function(e){var t=e.content,a=e.className;return r.a.createElement("div",{className:a},t)};l.propTypes={content:i.a.node,className:i.a.string},o.propTypes=l.propTypes,t.b=l}}]);
//# sourceMappingURL=component---src-templates-speaker-page-js-ae01a0f5021b593fd82d.js.map