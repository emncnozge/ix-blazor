"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[7439],{4673:(t,e,r)=>{r.d(e,{m:()=>o});const i={sm:"(max-width: 48em)",md:"(min-width: 48.0625em) and (max-width: 80em)",lg:"(min-width: 80.0625em)"},o=t=>{if("undefined"!=typeof window&&window.matchMedia){const e=i[t];return window.matchMedia(e).matches}return!1}},7439:(t,e,r)=>{r.r(e),r.d(e,{ix_col:()=>s});var i=r(4801),o=r(4673);const s=class{constructor(t){(0,i.r)(this,t),this.size=void 0,this.sizeSm=void 0,this.sizeMd=void 0,this.sizeLg=void 0}onResize(){(0,i.f)(this)}getSize(t){return""===t?this.size:"sm"===t?this.sizeSm:"md"===t?this.sizeMd:"lg"===t?this.sizeLg:void 0}getColumnSize(){let t;return s.Breakpoints.forEach((e=>{if(""!==e&&!(0,o.m)(e))return;const r=this.getSize(e);r&&(t=r)})),t}getColumnSizeStyling(){const t=this.getColumnSize();if(!t)return;if("auto"===t)return{flex:"0 0 auto",width:"auto","max-width":"auto"};const e=`calc(calc(${t} / var(--ix-layout-grid-columns)) * 100%)`;return{flex:`0 0 ${e}`,width:`${e}`,"max-width":`${e}`}}render(){return(0,i.h)(i.H,{style:Object.assign({},this.getColumnSizeStyling())},(0,i.h)("slot",null))}};s.Breakpoints=["","sm","md","lg"],s.style=":host{position:relative;flex-basis:0;flex-grow:1;width:100%;max-width:100%;min-height:1px;padding:calc(var(--ix-layout-grid-gutter) * 0.5)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}"}}]);