import{j as U,u as B,a as b,L as W,c as V,r as l,s as v,p as y,F as J,b as K,d as X,v as Q,I as Z,e as ee,f as te,g as oe,R as se,h as u,i as ie,l as ae,k as ne,m as re,H as le}from"./vendor.4265b9fc.js";const ce=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}};ce();const he="HQYeJ",de="HpG-X",me="YDmZm",pe="P9yse";var P={root:he,projects:de,link:me,fadein:pe};const e=U.exports.jsx,r=U.exports.jsxs,fe="#706f7180",C="#c5c3c600",ue=t=>t.replace(/\s+/g,"").toLowerCase(),g=t=>{const{children:o,route:i,submenu:a}=t,[{backgroundColor:s},n]=B(()=>({backgroundColor:C,config:V.stiff})),c=b(W);return e(c,{to:`/${i??ue(o)}`,onMouseOver:()=>n({backgroundColor:fe}),onMouseLeave:()=>n({backgroundColor:C}),style:{backgroundColor:s},className:P.link,children:a?e("h4",{children:o}):e("h3",{children:o})})},ge=()=>{const[t,o]=l.exports.useState(!1),i=t&&r("div",{className:P.projects,children:[e(g,{submenu:!0,children:"Caro Amico"}),e(g,{submenu:!0,children:"Mirrorland"})]});return r("div",{className:P.root,children:[e(g,{route:"",children:"Home"}),e(g,{children:"Inspiration"}),r("div",{onMouseOver:()=>o(!0),onMouseLeave:()=>o(!1),children:[e("h3",{style:{marginLeft:"10px"},children:"Projects"}),i]})]})},we={color:"",size:"50%",repeat:"no-repeat"},be={move:{speed:.2,enable:!0,direction:"top-left"},number:{density:{enable:!0,area:250},value:250,limit:500},shape:{type:["circle","edge"]},size:{value:2,random:!0},color:{value:"#4C5C68"},links:{enable:!0,color:{value:"#1985A1"},frequency:.5,opacity:.2,width:.5,distance:150},reduceDuplicates:!0},ve=["stars"],ye=!0;var _e={background:we,particles:be,presets:ve,autoPlay:ye};const ke="pvxnC",Ae="JXhsD",Pe="Yas4m";var H={root:ke,particles:Ae,fadein:Pe};const Se="dFe55",Ie="Ad6ZF",xe="IAmeu",Re="qPmKO",Te="ycS-G",Me="e8H7o",Le="SOnVX",Ne="z04ra";var p={root:Se,contact:Ie,social:xe,text:Re,textHeader:Te,textLinks:Me,textWrapper:Le,fadein:Ne};const Ce="l-RDf",He="g2TRH",je="r7AhJ",Ee="WZ3Nz",Oe="tHjm0",$e="vG3gG",Ge="mU-2d";var m={root:Ce,wrapper:He,borderLeft:je,borderTop:Ee,borderBottom:Oe,borderRight:$e,fadein:Ge};const q=t=>{const{children:o,className:i,style:a}=t,s=`${i?i+" ":""}${m.root}`;return r("div",{className:s,style:a,children:[e("div",{className:m.wrapper,children:o}),e("div",{className:m.borderLeft}),e("div",{className:m.borderTop}),e("div",{className:m.borderRight}),e("div",{className:m.borderBottom})]})};var ze=`index,header,link,description
0,My Inspiration,inspiration,"A list of the works that have inspired me to become a filmaker."
1,Caro Amico,caroamico,"A short film I made during the first COVID lockdown about the correspondence between Gustav Mahler and Richard Strauss."
2,Mirrorland,mirrorland,"A new short film I wrote, with some pictures that represent a snapshot of some scenes."`;const A=v(y.exports.parse(ze,{header:!0}).data,["index"]).map((t,o)=>r("p",{children:[e(W,{to:`/${t.link}`,className:p.textHeader,children:t.header})," ","\u2014 ",t.description]},o)),Fe=()=>{const t=r("div",{children:[e("h1",{style:{textAlign:"center"},children:"Marco Baratta"}),e("h2",{style:{textAlign:"center"},children:"RUFA - MA in Film Arts 2022 - Portfolio"}),e("p",{style:{textAlign:"center",fontStyle:"italic"},children:"I have a sentimental inclination towards hope - Orson Welles"}),r("div",{className:p.textLinks,children:[A[0],e("h2",{style:{textAlign:"center"},children:"My Projects"}),[A[1],A[2]]]}),r("div",{className:p.contact,children:[r("div",{className:p.social,children:[e("a",{href:"https://github.com/mBaratta96",children:e(J,{size:"2em"})}),e("a",{href:"https://www.linkedin.com/in/mbaratta96/",children:e(K,{size:"2em"})}),e("a",{href:"https://www.instagram.com/marco_baratta_/",children:e(X,{size:"2em"})})]}),e("p",{children:"marcobaratta96@gmail.com"})]})]});return e("div",{className:p.root,children:e("div",{className:p.textWrapper,children:e(q,{children:t})})})};var S="/RufaPortfolio/assets/caroAmicoPreview1.2278a26b.webp",I="/RufaPortfolio/assets/caroAmicoPreview2.b449ea0a.webp",x="/RufaPortfolio/assets/caroAmicoPreview3.8b2b10d8.webp",R="/RufaPortfolio/assets/caroAmicoPreview4.793ff749.webp",T="/RufaPortfolio/assets/caroAmicoPreview5.526ce20f.webp",De="/RufaPortfolio/assets/scene1.2b03d598.mp4",Ye="/RufaPortfolio/assets/scene2.20db58ec.mp4",Ue="/RufaPortfolio/assets/scene3.83f976bc.mp4",Be="/RufaPortfolio/assets/scene4.3a57a8be.mp4",We="/RufaPortfolio/assets/scene5.4d34b17e.mp4";const Ve=t=>{const o=l.exports.useRef(null),i=l.exports.useRef(null),{options:a}=t;return l.exports.useEffect(()=>{if(i.current){const s=i.current;a.autoplay&&s.autoplay(a.autoplay),a.sources&&s.src(a.sources)}else{const s=o.current;if(!s)return;i.current=Q(s,a)}},[a,o]),l.exports.useEffect(()=>{const s=i.current;return()=>{s&&(s.dispose(),i.current=null)}},[i]),e("div",{"data-vjs-player":!0,children:e("video",{ref:o,className:"video-js vjs-big-play-centered"})})};var M="/RufaPortfolio/assets/caroAmicoTitle.4864e7eb.webp",L="/RufaPortfolio/assets/synopsisCaroAmico.2fe4100c.webp";const qe="iezIu",Je="_4iE-a",Ke="qVMfB",Xe="hepSq";var w={root:qe,mainImage:Je,mainText:Ke,mainTitle:Xe};const Qe="zCV81";var Ze={image:Qe};const et=10,tt=2,ot=t=>Math.floor(et/2-t/2+tt),st=t=>{const{setSlide:o,children:i}=t,a=ot(i.length),s=i.map((n,c)=>{const[{scale:_},f]=B(()=>({scale:1,delay:50})),h=()=>{const{src:k}=ee({srcList:new URL(n,import.meta.url).href});return e(b.img,{style:{scale:_},src:k})};return e("div",{className:Ze.image,onMouseEnter:()=>f({scale:1.1}),onMouseLeave:()=>f({scale:1}),onClick:()=>o(c),style:{gridColumnStart:a+c},children:e(l.exports.Suspense,{fallback:e("div",{children:e(Z,{size:"2em"})}),children:e(h,{})})},c)});return e(l.exports.Fragment,{children:s})},j="50%",it=b(q),N=t=>{const{media:o,content:i,title:a,subtitle:s}=t,[n,c]=l.exports.useState(0),_=te(n,{config:V.gentle,from:{opacity:0,transform:`translate3d(-${j}, 0px, 0px)`},enter:{opacity:1,transform:"translate3d(0%, 0px, 0px)"},leave:{opacity:0,transform:`translate3d(${j}, 0px, 0px)`},exitBeforeEnter:!1,delay:200}),f=h=>{h.code==="ArrowLeft"&&(n>0?c(n-1):c(o.length-1)),h.code==="ArrowRight"&&(n<o.length-1?c(n+1):c(0))};return l.exports.useEffect(()=>(window.addEventListener("keydown",f),()=>{window.removeEventListener("keydown",f)})),r("div",{className:w.root,children:[r("div",{className:w.mainTitle,children:[e("h2",{children:a??"Title goes here"}),e("p",{children:s})]}),_((h,k)=>k==n&&r(l.exports.Fragment,{children:[e(b.div,{className:w.mainImage,style:h,children:o[n].slide}),e(it,{style:h,className:w.mainText,children:i[n]})]})),e(st,{setSlide:c,children:o.map(h=>h.preview)})]})},at="IP7x2",nt="_2OHa5",rt="GD6ar",lt="_1nxKY",ct="_6xMLz",ht="_9ICBv";var d={script:at,dialogue:nt,parenthetical:rt,character:lt,"scene-heading":"_5f6dO",link:ct,fadein:ht},dt=`index,title,description
0,Synopsis,"The film covers the time span between 1888 and 1911. The two characters represent composers Gustav Mahler and Richard Strauss, and they recite in voice-over a loose adaptation of the letters they exchanged for more than 20 years.\\nWe see the development of their long-distance friendship across some pivotal events of their lives: Mahler's composition (and subsequent flop) of his 2nd symphony, their fight against Austrian royal censorship for the preparation of Strauss' Salome, the death of Mahler's daughter. As we assist at these episodes, the opposite personalities of the two artists emerge. Mahler is a tormented spirit that constantly fights to expand the limits of the musical form, whereas Strauss is a confident and productive artist whose sensibility is perfectly in line with his time.\\nThe narration presents many anachronisms: emails, YouTube clips and Metacritic reviews. Although extravagant, these inserts are all meant to further explore the themes of the film, such as the struggle of the artist, the beauty of making art, and the friendship between two opposite human beings."
1,The Beginning,"At the initial stage of his career, Mahler struggles to find financing for his work as a composer. His closest confidant is a colleague that he respects extremely: Richard Strauss. Hoping to find inspiration, Mahler asks Strauss to send him the score of his two latest works, <i>Don Juan</i> and <i>Death and Transfiguration</i>."
2,The 2nd Symphony,"Inspired by the excellent work of his collegue, Mahler decides to finally conclude his new, groundbreaking, symphony."
3,The Censorship of Salome,"1905. Mahler is nominated artistic director and chief conductor of the Vienna State Opera, and Strauss' new opera \u2014 Salome \u2014 is receiving praise across all Europe. However, the combination of biblical themes and erotic undertones is a shock for the more conservative audiences. For this reason, when Mahler decides to bring the opera to Vienna, he has to face many obstacles."
4,A Tragedy,"As the battle against the censorship of Salome seems to reach a victorious end, Mahler's life is hopelessly shocked by two tragic events: he contracts a very painful heart disease, and his firstborn daughter dies of diphtheria. The Viennese preparation of Salome is stopped indefinitely."
5,Hope,"In the later years, things seems to have reached a balance in the life of both composers: Mahler seems progressively to recover from his disease, and Strauss is enjoying another long run of success. The two friends look back at their careers and reflect on the sense of music and history."`;const mt=5,pt={slide:e("img",{src:M}),preview:L},ft=v(y.exports.parse(dt,{header:!0,newline:`
`}).data,["index"]).map((t,o)=>r(l.exports.Fragment,{children:[e("h2",{children:t.title}),t.description.split("\\n").map((i,a)=>e("p",{dangerouslySetInnerHTML:{__html:i}},a))]},o)),ut=r(l.exports.Fragment,{children:["Caro Amico \u2014 A short film based on the correspondence between Gustav Mahler and Richard Strauss. Full"," ",e("a",{target:"_blank",rel:"noreferrer noopener",className:d.link,href:"https://vimeo.com/401617585",children:"here"}),"."]}),gt=r(l.exports.Fragment,{children:["Inspired by the friendship of the two composers recorded in"," ",e("a",{target:"_blank",rel:"noreferrer noopener",className:d.link,href:"https://www.google.it/books/edition/Carteggio_1888_1911/hP0kuQAACAAJ?hl=it",children:"these letters"}),", I decided to shoot a short film during the first COVID-19 lockdown. This is a collection of clips from that film."]}),wt=[...Array(mt).keys()].map(t=>{const o=new URL({"./videos/scene1.mp4":De,"./videos/scene2.mp4":Ye,"./videos/scene3.mp4":Ue,"./videos/scene4.mp4":Be,"./videos/scene5.mp4":We}[`./videos/scene${t+1}.mp4`],self.location).href;return{slide:e(Ve,{options:{controls:!0,responsive:!0,fill:!0,sources:[{src:o,type:"video/mp4"}]}}),preview:new URL({"./images/caroAmicoPreview1.webp":S,"./images/caroAmicoPreview2.webp":I,"./images/caroAmicoPreview3.webp":x,"./images/caroAmicoPreview4.webp":R,"./images/caroAmicoPreview5.webp":T}[`./images/caroAmicoPreview${t+1}.webp`],self.location).href}}),bt=()=>e(l.exports.Fragment,{children:e(N,{media:[pt,...wt],content:ft,title:ut,subtitle:gt})});var E="/RufaPortfolio/assets/joined.22c28b14.webp",O="/RufaPortfolio/assets/poster.e6e5f47d.webp",$="/RufaPortfolio/assets/scene1.e1140648.webp",G="/RufaPortfolio/assets/scene2.8e8e78b9.webp",z="/RufaPortfolio/assets/scene3.26d6bbc7.webp",F="/RufaPortfolio/assets/synopsis.3a1bc781.webp",vt=`EXT. ROCKS - DAY #1#

The cold, restless sea throws itself on the rocks in a desperate struggle. The air is humid, so cold it cuts through the lungs. No seagull sings its chant in the cloudy sky. No vehicles cross the overpass in the distance. No sign of life, except for a man, lying on the rocks, who has just regained consciousness.

He gets up, and looks around. It seems like a familiar place, but he can't remember anything specific. Suddenly, he feels a stinging pain in the side of his neck. Touching with one hand, he realizes he has a barely healed scratch.

Carved into the rocks nearby, there is a staircase that seems to lead to a square that overlooks the whole beach. Not having a better plan, the man decides to go up.`,yt=`
EXT. PARKING - DAY #4#

Michele and the man walk side by side.

MICHELE
The only living things here have roots, besides that, you are alone. The objects are all those that existed when you died, and you will be the only one who will use them. Electricity will work until the plants fail. The same goes for petrol, gas, the cellular network and so on. I hope you liked the technology of your time, since nothing new will be invented. Everything is stopped.

MAN
Is this Hell then?

MICHELE
No, for heaven's sake. Hell has ceased to exist for centuries. They closed it and made it all over again. No more devils, infernal circles and poetic justice. It was an unsustainable model. Now eternal damnation is smart, decentralized: to every sinner, his universe. It's more effective. Cleaner. What do you think? We also need to rebrand every now and then.

MAN
Would you be some kind of demon?

MICHELE
Lease consultant if you don't mind. I take care of welcoming souls during their first day, taking their forms to increase familiarity.

MAN
The first day? You're going to be here only for today?

MICHELE
Unfortunately. Tomorrow I'm having an Indonesian underworld boss.
(sighs annoyed)
He weighs 110 kilos and has the carryover.

MAN
Aren't you my conscience?

MICHELE
If you had a conscience you wouldn't be here.



`,_t=`INT. LIVING ROOM - DAY #5#

MICHELE
Ah sure, like everyone else you think you are special, unique. You think you've found the plan that solves everything. I'll tell you how it happens every time\u2026

Michele's voice goes off-screen. This is the beginning of a montage of still shots in which the man performs the actions described.

INT. ROOM - DAY #6#

Still shot of the man sitting at a desk writing.

MICHELE (V.O.)
\u2026 for the first 10 years, you will be able to keep yourself busy with something. Maybe you'll keep a garden, you'll write your memories\u2026

INT. ROOM - DAY #7#

Still shot of the man standing in the center of an empty room.

MICHELE (V.O.)
\u2026 but you'll soon realize the futility of it all, and you'll let the time pass by essentially doing nothing. After 20 years, the phase of insanity will begin: you'll speak to yourself, you'll hallucinate, you'll probably self-harm. Your mind will do everything to fill reality with something\u2026

The man stares at his hand. In his palm, he sees an eye without lids looking back.

INT. ROOM - DAY #8#

MICHELE (V.O.)
\u2026 After 50 years, mental decay will have reached its peak. Your mind will try to put an end to any intellectual stimulation. You'll forget how to talk and how to think. You'll forget who your parents were, who your friends were, and what love is. After a few centuries, even the most basic vital dips will be nullified. Yet, you will continue to exist, motionless, withered by hunger and thirst, like a tree in winter.

Last shot fixed on the man from behind, huddled in a dark corner.

INT. LIVING ROOM - DAY #9#

MICHELE
It is eternity, my friend. There is no plan that works.



`,kt=`index,title,description
0,Synopsis,"(Poster made by <a href='https://www.instagram.com/ooo.architecture/' target='_blank' rel='noreferrer noopener' class='classes.link'>OOO Architecture</a>.)\\nA man, with an unknown name, wakes up on a deserted rocky beach, not knowing who he is, or why he's there. While looking for someone to ask for help, he walks into a restaurant, where he finds a person who has been waiting for him. His name is Michele, and he is identical, in every aspect of his body, to the protagonist (they are both played by the same actor).\\nConversing with Michele, the protagonist discovers that he is dead and that he is now in the afterlife. Michele is a spiritual entity who took the protagonist's form to explain his new condition. The world in which they find themselves, in fact, is the new, more modern and more efficient version of Hell: an otherworldly place that is the same in all respects as the world of the living, but inhabited by nobody but the protagonist. Therefore, he will find himself living in absolute solitude for the rest of eternity.\\nMichele brings the protagonist to the place where he woke up, and shows him the reason he received this punishment. The protagonist has, in fact, strangled his girlfriend in an attack of jealousy.\\nUnable to accept his condition, the protagonist tries to figure out how to get out of this new reality. He first considers throwing himself off the balcony of his house, believing that this will make him wake up in another world, exactly as one usually wakes up from a nightmare. Michele, however, immediately blocks him, and makes him understand that there is no easy way to escape his punishment, which has been precisely designed to conduct people to madness and despair. However, Michele later admits the total repentance may be a possible solution. If the protagonist takes the decision to inflict on himself the same pain that he inflicted on others, then he can hope to escape his punishment.\\nThe protagonist chooses to hang himself to prove that he is ready to feel the same pain inflicted on the girl he had loved. However, as soon as the rope is stretched, it breaks for no apparent reason, letting the protagonist fall to the ground in a state of complete confusion. As he tries to tie the noose once more, the protagonist realizes that he does not have the courage to carry out the punishment he wants to inflict on himself, and goes back to his house in almost catatonic state. He finally sits down at the living room table, and starts scribbling something to pass the time."
1,,"In the opening scene, I wanted to present the protagonist in a setting that could reflect his nature of mediocre, spoiled and self-centered man. He is a person without an actual identity, or at least an identity that he decided to forge by himself. Through the movie, we will understand that all of his actions are driven only by ego, by the desperate search for someone else's approval. To represent all of this, I pictured a desolate environment, in which the life of barren Mediterranean vegetation barely emerges from rocks and concrete. I think this is an image that captures the existence of the protagonist: a life that is born out of lifelessness."
2,,"If the protagonist is a body without a soul, Michele is a soul without a body. Therefore, I thought that the best way to express this concept was to have the same actor playing both of the characters, using the dialogue to distinguish the two personalities. Michele is clever, well-spoken, and has also his own personal sense of humor. The protagonist, on the contrary, is timid, express himself with few, short sentences and there is a constant tremor of incertitude in his voice (As a side note: the duplication of the actor has been realized with the help of an AI algorithm. Take a look <a href='https://github.com/facebookresearch/detectron2' target='_blank' rel='noreferrer noopener' class='classes.link'>here</a> if you feel curious)."
3,,"In a flash-forward, Michele shows the protagonist the state of madness he will fall after decades of solitude. I thought that showing these visions could express furthermore the nature of the protagonist. For example, I think this hallucination is an interesting way to show his egocentrism: when there is nobody that could possibly look at him, here's his mind creating precisely an eye that can judge him."`,At="/RufaPortfolio/assets/scriptIta.b6b7e914.pdf",Pt="/RufaPortfolio/assets/scriptEng.69cd3d82.pdf";const St=["scene-heading","dialogue","character","action","parenthetical"],It=t=>{const o=oe.FountainParser.parse(t,{script_html:!0}).script_html;return St.reduce((i,a)=>d[a]?i.replaceAll(`"${a}"`,d[a]):i,o)},xt=[vt,yt,_t].map((t,o)=>{const i=It(t),a=document.createElement("div");return a.innerHTML=i,a.querySelectorAll("[data-scene-heading-index]").forEach(n=>n.textContent=n.getAttribute("data-scene-heading-index")+". "+n.textContent),e("div",{className:d.script,dangerouslySetInnerHTML:{__html:a.innerHTML}},o)}),Rt=v(y.exports.parse(kt,{header:!0}).data,["index"]).map((t,o)=>{const i=t.description.split("\\n").map((a,s)=>e("p",{dangerouslySetInnerHTML:{__html:a.replaceAll("classes.link",d.link)}},s));return r("div",{children:[e("h2",{children:t.title}),i,o>0?xt[o-1]:""]},o)}),Tt=["poster","scene1","scene2","scene3"].map(t=>({slide:e("img",{src:new URL({"./images/caroAmicoPreview1.webp":S,"./images/caroAmicoPreview2.webp":I,"./images/caroAmicoPreview3.webp":x,"./images/caroAmicoPreview4.webp":R,"./images/caroAmicoPreview5.webp":T,"./images/caroAmicoTitle.webp":M,"./images/joined.webp":E,"./images/poster.webp":O,"./images/scene1.webp":$,"./images/scene2.webp":G,"./images/scene3.webp":z,"./images/synopsis.webp":F,"./images/synopsisCaroAmico.webp":L}[`./images/${t}.webp`],self.location).href}),preview:new URL({"./images/caroAmicoPreview1.webp":S,"./images/caroAmicoPreview2.webp":I,"./images/caroAmicoPreview3.webp":x,"./images/caroAmicoPreview4.webp":R,"./images/caroAmicoPreview5.webp":T,"./images/caroAmicoTitle.webp":M,"./images/joined.webp":E,"./images/poster.webp":O,"./images/scene1.webp":$,"./images/scene2.webp":G,"./images/scene3.webp":z,"./images/synopsis.webp":F,"./images/synopsisCaroAmico.webp":L}[`./images/${t}.webp`],self.location).href})),Mt=r(l.exports.Fragment,{children:["Mirrorland \u2014 Click on the following links for the complete scripts (Italian"," ",e("a",{className:d.link,target:"_blank",rel:"noreferrer noopener",href:At,children:"here"})," ","/ English"," ",e("a",{className:d.link,target:"_blank",rel:"noreferrer noopener",href:Pt,children:"here"}),")"]}),Lt="This is a collection of visual ideas for scenes taken from a new short script I wrote. Here, you can find the synopsis, some context for each scene, and the corresponding excerpt of the script.",Nt=()=>e(N,{media:Tt,content:Rt,title:Mt,subtitle:Lt}),D={ShortFilm:bt,NewShort:Nt},Ct="d69bR",Ht="EeO3E",jt="nqIYK";var Y={root:Ct,fadein:Ht,error:jt},Et="/RufaPortfolio/assets/aparajitoPreview.8b8064ff.webp",Ot="/RufaPortfolio/assets/barryLyndonPreview.e60066ad.webp",$t="/RufaPortfolio/assets/brazilPreview.9d67c6c4.webp",Gt="/RufaPortfolio/assets/heavensGatePreview.bf044dda.webp",zt="/RufaPortfolio/assets/immortalStoryPreview.ec0f97d5.webp",Ft="/RufaPortfolio/assets/journeyItalyPreview.5a38f487.webp",Dt="/RufaPortfolio/assets/sacrificePreview.68becd6f.webp",Yt="/RufaPortfolio/assets/sevenSamuraiPreview.944c2177.webp",Ut="/RufaPortfolio/assets/silverGlobePreview.85595452.webp",Bt="/RufaPortfolio/assets/womanUnderInfluencePreview.68acfefe.webp",Wt="/RufaPortfolio/assets/aparajitoSlide.bebb506c.webp",Vt="/RufaPortfolio/assets/barryLyndonSlide.3d391fa0.webp",qt="/RufaPortfolio/assets/brazilSlide.3c95b962.webp",Jt="/RufaPortfolio/assets/heavensGateSlide.f8941377.webp",Kt="/RufaPortfolio/assets/immortalStorySlide.e733aa1b.webp",Xt="/RufaPortfolio/assets/journeyItalySlide.2cf759b0.webp",Qt="/RufaPortfolio/assets/sacrificeSlide.c17db588.webp",Zt="/RufaPortfolio/assets/sevenSamuraiSlide.97fa0685.webp",eo="/RufaPortfolio/assets/silverGlobeSlide.ad829bb8.webp",to="/RufaPortfolio/assets/womanUnderInfluenceSlide.18dd6016.webp",oo=`index,title,director,year,review
4,The Immortal Story,Orson Welles,1968,"The most lucid reflection on the act of creation, captured in all of its complexity and contradictions, given to us by Cinema's greatest maverick. What is art true purpose? Where is the line between fiction and reality? What are we willing to do to cross that line? A mysterious, evocative fairy tale, and a lesson of what is possible to achieve in only 63 minutes of film."
0,Aparajito,Satyajit Ray,1956,"Life as a journey among conflicts: tradition against modernity, rural against urban environment, family against personal ambitions, optimism against grief. Quite possibly the most gentle and profound portrayal of a mother and son relationship, and a lesson on how looking from a distance may actually reveal the deepest aspects of life."
1,Barry Lyndon,Stanley Kubrick,1975,"The most sumptuous reflection on human destiny, freedom, and the relevance (or futility) of our actions. This is the pinnacle of Kubrick's formalism and an esthetical accomplishment that can't be possibly matched. Cinema has never been so beautiful and so tragic."
2,Brazil,Terry Gilliam,1985,"A perfect combination of Orwellian and Kafkaesque themes, which generates the most lucid satire of the 20th (and 21st) century. An unparalleled creation of a world in which the oppressing sociopolitical state teams up with our egocentrism to make reality a convoluted enigma. Moreover, a film in which each scene has a visual idea that could be studied for hours."
3,Heaven's Gate,Michael Cimino,1980,"A film in which every frame seems to capture the infinity of the world. Although similar to Barry Lyndon when it comes to pushing the limit of what a camera can record, Heaven's Gate aims at a complete different objective when it comes to its founding themes. Instead of metaphysical reflections, Cimino is interested in raw human emotions, making his film explode with excesses of greed, love, violence, friendship, betrayal. The most triumphant, enthralling and tragic epic in the history of cinema."
5,Viaggio In Italia,Roberto Rosellini,1954,"A hypnotic masterwork in which the fragmentation of human relationships is a reflection of the shattered reality. While still maintaining the solemnity of his neorealistic period, Rossellini shifts his look towards a more spiritual and existential plan, and delivers to us one of the most forward-thinking depictions of what modern life is. Moreover, few actors can match Ingrid Bergman's performance."
6,The Sacrifice,Andrei Tarkovsky,1986,"The most profound reflection on faith, aging, and the purpose of living. An apocalyptic elegy that ends with the most powerful climax I have ever seen on a screen."
7,Seven Samurai,Akira Kurosawa,1954,"The greatest utopia in Cinema's history. A thrilling tale of courage, friendship, and self-sacrifice in which the power of human spirit seems to prevail above anything, even a cruel nature. The perfect union of entertainment and philosophical reflection, and possibly the greatest movie ever made."
8,On The Silver Globe,Andrzej \u017Bu\u0142awski,1988,"The most epic parabola about civilization, religion, and man's fascination to violence and power. A film that embraces its chaotic, dispersive nature, and uses it to fuel its hallucinatory imaginary."
9,A Woman Under the Influence,John Cassavetes,1974,"A personal favorite only for Gena Rowland's performance. But besides that, this is probably the most humanistic film ever made. Human emotions and relationships have never been described with such a heartfelt voice."`;const so=["aparajito","barryLyndon","brazil","heavensGate","immortalStory","journeyItaly","sacrifice","sevenSamurai","silverGlobe","womanUnderInfluence"].map(t=>({slide:e("img",{src:new URL({"./images/aparajitoSlide.webp":Wt,"./images/barryLyndonSlide.webp":Vt,"./images/brazilSlide.webp":qt,"./images/heavensGateSlide.webp":Jt,"./images/immortalStorySlide.webp":Kt,"./images/journeyItalySlide.webp":Xt,"./images/sacrificeSlide.webp":Qt,"./images/sevenSamuraiSlide.webp":Zt,"./images/silverGlobeSlide.webp":eo,"./images/womanUnderInfluenceSlide.webp":to}[`./images/${t}Slide.webp`],self.location).href,style:{width:"100%"}}),preview:new URL({"./images/aparajitoPreview.webp":Et,"./images/barryLyndonPreview.webp":Ot,"./images/brazilPreview.webp":$t,"./images/heavensGatePreview.webp":Gt,"./images/immortalStoryPreview.webp":zt,"./images/journeyItalyPreview.webp":Ft,"./images/sacrificePreview.webp":Dt,"./images/sevenSamuraiPreview.webp":Yt,"./images/silverGlobePreview.webp":Ut,"./images/womanUnderInfluencePreview.webp":Bt}[`./images/${t}Preview.webp`],self.location).href})),io=v(y.exports.parse(oo,{header:!0}).data,["index"]).map((t,o)=>r(l.exports.Fragment,{children:[e("h2",{children:t.title}),e("h2",{children:t.director}),e("h2",{children:t.year}),e("p",{children:t.review})]},o)),ao=()=>e(l.exports.Fragment,{children:e(N,{media:so,content:io,title:"Some of my favorite works in cinema history, with a short review."})}),no=()=>e("div",{className:Y.root,children:r(se,{children:[e(u,{path:"/caroamico",element:e(D.ShortFilm,{})}),e(u,{path:"/mirrorland",element:e(D.NewShort,{})}),e(u,{path:"/inspiration",element:e(ao,{})}),e(u,{path:"/",element:e(Fe,{})}),e(u,{path:"*",element:e("div",{className:Y.error,children:e("h3",{children:"Oops... seems you are in the wrong place"})})})]})});function ro(){const t=async o=>{ae(o)};return r("div",{className:H.root,children:[e(ge,{}),e(ie,{init:t,options:_e,className:H.particles}),e(no,{})]})}ne.render(e(re.StrictMode,{children:e(le,{children:e(ro,{})})}),document.getElementById("root"));
