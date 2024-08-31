// ==UserScript==
// @name         theme cstime
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  custom cstime
// @author       Le Huy Bach
// @match        https://cstimer.net/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cstimer.net
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  'use strict';
  GM_addStyle(`
:root {
    /*Change theme form here*/
    --text-0: 251, 73, 52;
    --text-1: 235, 219, 178;
    --text-1-shadow: 235, 219, 178;
    --text-2: 184, 187, 38;
    --text-2-shadow: 184, 187, 38;

    --bg-0: 40, 40, 40;
    --bg-1: 60, 56, 54;
    --bg-2: 50, 48, 47;
    /*-----------------------*/
    

    /*custom font*/
    --font: Arial   
}

*{
  transition: all 0.3s ease;
}
/* General */
body {
  font-family: var(--font);
  color: rgb(var(--text-1));
  background-color: rgb(var(--bg-0));

}

/* LED counter timer */
#lcd {
  text-shadow: 0px 0px 7px rgb(var(--text-1-shadow));
  font-family: var(--font);
  font-size: 10rem;
}

.difflabel {
  text-shadow: none;
}

.click{
    color: rgba(var(--text-0), 1) !important;
}

#avgstr .click {
  border-radius: 5px !important;
  color: rgba(var(--text-1), 1) !important;
  text-shadow: 0px 0px 2px rgba(var(--text-1-shadow), 0.7);
  font-size: 2rem;
}

#avgstr .click:hover {
  backdrop-filter: blur(5px);
    padding: 5px 10px;
  background-color: rgba(var(--text-1), 0.5) !important;
}

#avgstr .click:active {
  color: rgba(var(--bg-0), 1) !important;
  background-color: rgba(var(--text-1), 1) !important;
}

/* Dialog setting */
.dialog {
  border-radius: 10px !important;
  backdrop-filter: blur(5px);
  background: rgba(var(--bg-0), 0.7);
}

.dialogoption {
  width: 80%;
  height: 90%;
  left: 10%;
  top: 5%;
}

.options {
  border-spacing: 10px;
}

input[type="button"]:active{
 	  background-color: rgba(var(--bg-2), 1) !important;
  color: rgb(var(--text-0)) !important;

}
select,
input {
  background-color: rgba(var(--bg-1), 0.4) !important;
  border-radius: 3px !important;
  color: rgb(var(--text-1)) !important;
  padding: 3px 10px;
}

input[type="color"] {
  padding: 0px !important;
  width: 21px !important;
  height: 25px !important;
}

input[type="checkbox"] {
  top: 2px;
  position: relative;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 10px;
}

/* Option table */
.opttable {
  border-spacing: 10px !important;
  border: 0px;
}

.opttable tr>th:nth-child(1) {
  background-color: rgba(var(--bg-0), 0.9) !important;
  border-radius: 10px !important;
}

.opttable tr:nth-child(odd)>td:nth-child(1) {
  background-color: transparent !important;
}

.opttable tr:hover td:nth-child(1) {
  background: rgba(var(--bg-1), 0.8) !important;
}

.opttable tr td:nth-child(1) {
  border-radius: 10px !important;
  padding: 5px 12px !important;
}


/* Side bar */
.tab {
  border-radius: 10px !important;
  font-family: var(--font);
  font-weight: medium;
  margin-top: 10px;
  padding: 5px 10px;
}

.tab:hover {
  background-color: rgba(var(--bg-0), 1);
}

.mtds .tab:not(.enable)::before {
  box-shadow: 0 0 0;
}

/* Button enable */
.enable {
  background-color: rgba(var(--text-1), 0.6) !important;
  color: rgb(var(--bg-0)) !important;
}

/* Scramble view */
#scrambleDiv {
  background-color: transparent;
  text-shadow: 0px 0px 2px rgba(var(--text-1-shadow), 0.7);
  display: relative;
  top: 15% !important;
  right: 10% !important;
  font-size: 0.9em !important;
}

/* Statistic view */
#stats {
  background-color: rgba(var(--text-1), 0.5) !important;
  color: rgba(var(--bg-1), 1) !important;
  border-radius: 10px !important;
  margin: 10px;
  backdrop-filter: blur(5px);
  top: 26vh;
}

@media (min-width: 1200px) {
  #stats {
    height: 75vh;
  }
}

@media (max-width: 726px) {
  #stats {
    margin-bottom: 20px !important;
  }
}

.sumtable {
  border-radius: 10px !important;
  border: 0px;
}

.stattl {
  border-radius: 10px !important;
  color: rgb(var(--bg-0)) !important;
}

#toolsDiv {
  background-color: transparent;
  margin:10px;
}

/* Left bar */
#leftbar {
  border: 0 !important;
  margin: 10px;
  background-color: transparent;
  backdrop-filter: blur(5px);

}
.c1{
border-top-left-radius: 10px !important;
}
.c3{
  border-top-right-radius: 10px !important;
}
.c4{
  border-bottom-left-radius: 10px !important;
}
.c6{
  border-bottom-right-radius: 10px !important;
}
@media (max-width: 726px) {
  .c1{
      border-top-left-radius: 10px !important;
      border-bottom-left-radius: 10px !important;
}
.c3{
  border-top-right-radius: 0px !important;
}
.c4{
  border-bottom-left-radius: 0px !important;
}
.c6{
    border-top-right-radius: 10px !important;
  border-bottom-right-radius: 10px !important;
}

}

/* Buttons */
.mybutton,
#logo {
  background-color: rgba(var(--bg-0), 0.7);
  color: rgba(var(--text-1), 1);
}

.mybutton:not(.enable):hover {
  background-color: rgba(var(--bg-0), 0.7) !important;
  color: rgba(var(--text-1), 1) !important;
}
.mybutton:active {
  background-color: rgba(var(--text-0), 1) !important;
  color: rgba(var(--bg-1), 1) !important;
}

/* List time */
.f40b {
  width: 100%;
}

.f40b tr td,
.f40b tbody tr th,
.f40b {
  border: none !important;
}

.f40b tr td:hover {
  color: rgba(var(--text-1), 1) !important;
  background-color: rgba(var(--bg-1), 1) !important;
}

.f40b tr:nth-child(odd)>td {
  color: rgba(var(--text-1), 1) !important;
  background-color: rgba(var(--bg-1), 0.7) !important;
}

.f40b tr:nth-child(odd)>td:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.f40b tr:nth-child(odd)>td:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.f40b tr:nth-child(odd)>td:hover {
  background-color: rgba(var(--text-1), 1) !important;
  color: rgba(var(--bg-1), 1) !important;
}

.pb {
  color: rgba(var(--text-0), 1) !important;
}

/* Current round static dialog */
.value textarea {
  background-color: transparent;
  color: rgba(var(--text-1), 1);
}
.value > div > table  {
  width: 90%;
border-spacing: 5px;

}
.value > div > table tbody tr td:first-child{
width: 100px !important;
}
.value > div > table tbody tr td:last-child{
	width: 90% !important;

}
.value > div > table tbody tr td:last-child input{
	width: 100% !important;
  height: 25px;
}


`);
  function rgbToHex(rgb) {
    return `#${rgb.split(',').map((x) => {
      const hex = parseInt(x.trim()).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('')}`;
  }
  const rootStyle = getComputedStyle(document.documentElement);
  const color = rootStyle.getPropertyValue('--bg-0').trim();
  const colorHex = rgbToHex(color);

  // Create and add the <link> tag
  var maskIconLink = document.createElement('link');
  maskIconLink.rel = 'mask-icon';
  maskIconLink.color = colorHex;
  document.head.appendChild(maskIconLink);

  // Create and add the <meta> tags
  var msTileColorMeta = document.createElement('meta');
  msTileColorMeta.name = 'msapplication-TileColor';
  msTileColorMeta.content = colorHex;
  document.head.appendChild(msTileColorMeta);

  var themeColorMeta = document.createElement('meta');
  themeColorMeta.name = 'theme-color';
  themeColorMeta.content = colorHex;
  document.head.appendChild(themeColorMeta);
})();