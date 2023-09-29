"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[9451],{9451:(e,t,s)=>{s.r(t),s.d(t,{ix_dropdown:()=>h});var i=s(4801),o=s(5297);const r=new Map;let n=0;const h=class{constructor(e){(0,i.r)(this,e),this.showChanged=(0,i.c)(this,"showChanged",7),this.autoUpdateCleanup=null,this.localUId=`dropdown-${n++}-${(new Date).valueOf()}`,this.suppressAutomaticPlacement=!1,this.show=!1,this.trigger=void 0,this.anchor=void 0,this.closeBehavior="both",this.placement="bottom-start",this.positioningStrategy="fixed",this.header=void 0,this.offset=void 0,this.triggerEvent="click",this.overwriteDropdownStyle=void 0,this.toggleBind=this.toggle.bind(this),this.openBind=this.open.bind(this),r.has(this.localUId)&&console.warn("Dropdown with duplicated id detected"),r.set(this.localUId,this.close.bind(this))}get dropdownItems(){return Array.from(this.hostElement.querySelectorAll("ix-dropdown-item"))}get slotElement(){return this.hostElement.shadowRoot.querySelector("slot")}addEventListenersFor(e){switch(e){case"click":this.triggerElement.addEventListener("click",this.openBind);break;case"hover":this.triggerElement.addEventListener("mouseenter",this.openBind);break;case"focus":this.triggerElement.addEventListener("focusin",this.openBind)}}removeEventListenersFor(e,t){switch(e){case"click":"outside"===this.closeBehavior?t.removeEventListener("click",this.openBind):t.removeEventListener("click",this.toggleBind);break;case"hover":t.removeEventListener("mouseenter",this.openBind);break;case"focus":t.removeEventListener("focusin",this.openBind)}}async registerListener(e){this.triggerElement=await this.resolveElement(e),this.triggerElement&&(Array.isArray(this.triggerEvent)?this.triggerEvent.forEach((e=>{this.addEventListenersFor(e)})):this.addEventListenersFor(this.triggerEvent))}async unregisterListener(e){const t=await this.resolveElement(e);Array.isArray(this.triggerEvent)?this.triggerEvent.forEach((e=>{this.removeEventListenersFor(e,t)})):this.removeEventListenersFor(this.triggerEvent,t)}resolveElement(e){if("string"!=typeof e)return Promise.resolve(e);const t=`#${e}`;return new Promise((e=>{if(document.querySelector(t))return e(document.querySelector(t));const s=new MutationObserver((()=>{document.querySelector(t)&&(e(document.querySelector(t)),s.disconnect())}));s.observe(document.body,{childList:!0,subtree:!0})}))}async changedShow(e){e&&(this.anchorElement=await(this.anchor?this.resolveElement(this.anchor):this.resolveElement(this.trigger)),this.anchorElement&&this.applyDropdownPosition()),e&&r.forEach(((e,t)=>{t===this.localUId||this.isAnchorSubmenu()||e()}))}changedTrigger(e,t){e&&this.registerListener(e),t&&this.unregisterListener(t)}clickOutside(e){var t,s;const i=e.target;if(e.defaultPrevented)return;if(!1===this.show||!1===this.closeBehavior||(null===(t=this.anchorElement)||void 0===t?void 0:t.contains(i))||(null===(s=this.triggerElement)||void 0===s?void 0:s.contains(i)))return;const o=this.isClickInsideDropdown(e);switch(this.closeBehavior){case"outside":o&&this.anchor!==i||this.close();break;case"inside":o&&this.hostElement!==i&&this.close();break;case"both":this.hostElement!==i&&this.close();break;default:this.close()}}keydown(e){!0===this.show&&"Escape"===e.code&&this.close()}isNestedDropdown(e){return e.closest("ix-dropdown")}isAnchorSubmenu(){var e;return!!(null===(e=this.anchorElement)||void 0===e?void 0:e.closest("ix-dropdown-item"))}toggle(e){e.preventDefault(),this.isNestedDropdown(e.target)&&e.stopPropagation();const{defaultPrevented:t}=this.showChanged.emit(this.show);t||(this.show=!this.show)}open(e){e.preventDefault(),this.isNestedDropdown(e.target)&&e.stopPropagation();const{defaultPrevented:t}=this.showChanged.emit(!0);t||(this.show=!0)}close(){const{defaultPrevented:e}=this.showChanged.emit(!1);e||(this.show=!1)}async applyDropdownPosition(){if(!this.anchorElement)return;if(!this.dropdownRef)return;const e=this.isAnchorSubmenu();let t={strategy:this.positioningStrategy,middleware:[]};this.suppressAutomaticPlacement||t.middleware.push((0,o.f)({fallbackStrategy:"initialPlacement"})),t.placement=e?"right-start":this.placement,t.middleware=[...t.middleware,(0,o.i)(),(0,o.s)()],this.offset&&t.middleware.push((0,o.o)(this.offset)),this.autoUpdateCleanup&&(this.autoUpdateCleanup(),this.autoUpdateCleanup=null),this.autoUpdateCleanup=(0,o.a)(this.anchorElement,this.dropdownRef,(async()=>{const e=await(0,o.c)(this.anchorElement,this.dropdownRef,t);if(Object.assign(this.dropdownRef.style,{top:"0",left:"0",transform:`translate(${Math.round(e.x)}px,${Math.round(e.y)}px)`}),this.overwriteDropdownStyle){const e=await this.overwriteDropdownStyle({dropdownRef:this.dropdownRef,triggerRef:this.triggerElement});Object.assign(this.dropdownRef.style,e)}}),{ancestorResize:!0,ancestorScroll:!0,elementResize:!0})}async componentDidLoad(){this.changedTrigger(this.trigger,null)}async componentDidRender(){var e;await this.applyDropdownPosition(),this.anchorElement=await(this.anchor?this.resolveElement(this.anchor):this.resolveElement(this.trigger)),this.isAnchorSubmenu()&&"IX-DROPDOWN-ITEM"===(null===(e=this.anchorElement)||void 0===e?void 0:e.tagName)&&(this.anchorElement.isSubMenu=!0)}isClickInsideDropdown(e){const t=this.dropdownRef.getBoundingClientRect();return t.top<=e.clientY&&e.clientY<=t.top+t.height&&t.left<=e.clientX&&e.clientX<=t.left+t.width}disconnectedCallback(){this.autoUpdateCleanup&&this.autoUpdateCleanup(),r.has(this.localUId)&&r.delete(this.localUId)}async updatePosition(){this.applyDropdownPosition()}render(){return(0,i.h)(i.H,{ref:e=>this.dropdownRef=e,class:{"dropdown-menu":!0,show:this.show,overflow:!0},style:{margin:"0",minWidth:"0px",position:this.positioningStrategy},role:"list"},(0,i.h)("div",{style:{display:"contents"}},this.header?(0,i.h)("div",{class:"dropdown-header"},this.header):"",(0,i.h)("slot",null)))}get hostElement(){return(0,i.g)(this)}static get watchers(){return{show:["changedShow"],trigger:["changedTrigger"]}}};h.style=":host{background-color:var(--theme-color-2);border-radius:var(--theme-default-border-radius);min-width:0px;z-index:var(--theme-z-index-dropdown);box-shadow:var(--theme-shadow-4);padding:0.25rem 0px}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .dropdown-header{display:flex;align-items:center;height:2.5rem;color:var(--theme-menu-header--color);padding:0 1rem}:host(.overflow){max-height:50vh;overflow-y:auto}:host(:not(.show)){display:none}"}}]);