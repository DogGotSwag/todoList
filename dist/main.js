/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/greenCheckMark.svg */ "./img/greenCheckMark.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html, body{
    width: 100%;
    height: 100vh;
    
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


li{
    list-style: none;
}

label, input, button,
select,textarea{
    appearance: none;
    border: none;
    outline: none;
    background-color: none;
}


body{
    display: flex;
    justify-content: center;
    align-items: center;
    --white : rgb(167, 157, 131);
    background-color: var(--white);
}
.main{
    width: 80%;
    height: 80%;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 2fr;

    --borderRadius: 14px;
    --blue : rgb(202, 205, 208);
    --yellow : rgb(219, 199, 174);
    --shadow :rgb(136, 132, 132);
    
}
/* left side */
.left{
    border-radius: var(--borderRadius) 0 0 var(--borderRadius);
    background-color: var(--blue);
    box-shadow: 0px 1px 5px 2px var(--shadow);
    padding: 10px;
    position: relative;

    display: grid;
    gap: 8px;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
}

.leftSideHeader{
    position: relative;
}

.left h2 {
    margin-left: 8px;
}

.formContainer{
    display: flex;
    gap: 6px;
    flex-wrap:wrap;
    justify-content: center;
    align-content: center;

    background-color: blue;
    position: absolute;
    width: 80%;
    height: auto;
    border: 1px solid black;
    border-radius: 6px 2px 6px 6px;
    background-color: whitesmoke;
    right: 30px;
    top: 19px;
    padding: 10px;
}

.projectLabel{
    display: flex;
    align-items: center;
    justify-content: center;
}

.projectInput{
    appearance: none;
    outline: none;
    border: 2px solid black;
    border-radius: 3px;
    padding: 2px 10px;
    height: 26px;
    max-width: 90%;
}

.projectButton{
    appearance: none;
    width: 50px;
    height: 26px;
    border-radius: 3px;
    cursor: pointer;
    border: 2px solid black;
}


.left .projectsArea{
    border-radius: var(--borderRadius);
    border: 2px solid rgb(118, 116, 116);
    padding: 8px;

    display: flex;
    flex-wrap: wrap;
    align-content: baseline;
    gap: 15px;

    
}

.projectsArea .project{
    background-color: var(--yellow);
    border-radius: 6px;
    height: 29px;
    width:fit-content;
    box-shadow: 1px 1px 2px 1px var(--shadow);
    cursor: pointer;
    

    display: flex;
    align-items: center;
    padding: 1px 6px;
}


.removeIcon{
    width: 18px;
    border: 2px solid black;
    border-radius: 15%;
    margin-left: 4px;
}


.iconAddProject{
    width: 30px;
    position:absolute;
    top: 0px;
    right: 8px;
    color: blue;
    cursor: pointer;
}

/* end left side */

/* right side */
.right{
    border-radius: 0 var(--borderRadius) var(--borderRadius) 0;
    background-color: var(--yellow);
    box-shadow: 1px 1px 5px 2px var(--shadow);

    padding: 10px;
    position: relative;
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 10px;
}

.rightSideHeader{
    border-radius: 6px;
    box-shadow: 1px 1px 2px 1px var(--shadow);
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(237, 223, 208);
    font-size: 14px;
    margin-right: 45px;
}

.rightSideHeader.noEditHeader{
    margin-right: 0px;
}

.todoContainer{
    width: 100%;
    height: 60px;
    background-color: var(--blue);
    border-radius: var(--borderRadius);
    box-shadow : 1px 1px 2px 1px var(--shadow)
}

.addTodoIcon{
    position: absolute;
    width: 40px;
    height: 40px;
    top: 5px;
    right: 10px;
    background-color: transparent;
    visibility: hidden;
}

.addTodoIcon.active{
    visibility: visible;
    cursor: pointer;
}

.addTodoIcon:disabled{
    cursor:auto;
    visibility:hidden;
}

.todoForm{
    position: absolute;
    width: 300px;
    height: 330px;
    background-color: var(--blue);
    border-radius: var(--borderRadius);
    top: 8px;
    right: 10px;
    border: 2px solid rgb(118, 116, 116);
    padding: 6px;
}

.todoForm li{
    margin-bottom: 3px;
    height: 30px;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 80px 1fr;
    grid-template-rows: 20px;
    position: relative;
}

.editTodoForm div:nth-child(3){
    position: relative;
}

.editTodoForm div:nth-child(3)::before{
    content: "▼";
    font-size: 1rem;
    top: 3px;
    left: 192px;
    position: absolute;
    pointer-events: none;
}

.todoForm input, select, textarea{
    border: 2px solid rgb(118, 116, 116);
    padding: 2px 10px;
    border-radius: 3px;
    height: 25px;
}

select{
    cursor: pointer;
}

.todoForm ul li:nth-child(3)::after{
    content: "▼";
    font-size: 1rem;
    top: 4px;
    right: 13px;
    position: absolute;
    pointer-events: none;
}

textarea{
    height: 152px;
    padding: 4px;
}

.todoForm input:focus{
    border: 2px solid black;
    
}


.todoformHeader{
    text-align: center;
    font-size: 18px;
    border-bottom: 1px solid rgb(118, 116, 116);
    margin-bottom: 6px;
}

.todoForm .lastLi{
    height: 155px;
}

.todoForm button:first-of-type{
    margin-left: 10px;
}

.todoFormButton{
    width: 50px;
    height: 25px;
    border-radius: 8px;
    cursor: pointer;
    float: right;
}

.todoFormButton:hover{
    background-color: rgb(168, 168, 168);
}

.allTodos{
    padding-left: 40px;
}

.todoLi{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 28px;
    grid-auto-rows: 1fr;

    height: 28px;
    transition: all .3s ease;

    background-color: var(--blue);
    border-radius: 6px;
    box-shadow: 1px 1px 2px 1px var(--shadow);
    margin-bottom: 20px;
    padding-right: 10px;
    padding-bottom: 10px;
}

.todoTitleP{
    font-weight: 700;
    font-size: 18px;
}

.dueDateP{
    font-size: 14px;
}

.dropDownIcon{
    width: 20px;
    height: 20px;
}

.dropDownContainer{
    display: flex;
    align-items: center;
    cursor: pointer;
}

.todoLi.expand{
    height: 472px;
}

.todoLi.expand.nonEditMode{
    height: 439px ;
}

.todoLi.low{
    border-right: 10px solid #f9e54e;
}
.todoLi.medium{
    border-right: 10px solid #f5a65d;
}
.todoLi.high{
    border-right: 10px solid #c75e5e;
}

.topContainer{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto 20px;
    grid-template-rows: 1fr;
    gap: 5px;
}

.todoLabel{
    display: flex;
    gap: 6px;
    cursor:pointer ;
    position: relative;
}

.todoLabel p:first-child{
    padding-left: 10px;
    display: flex;
    align-items: center;
}

.todoLi p {
    display: flex;
    align-items: center;
}

.todoLabel::before{
    content: "";
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-position: center;
    background-size: contain;
    width: 26px;
    height: 26px;
    position: absolute;
    left: -38px;
    bottom: 0px;

    transform: scale(0) rotateZ(180deg);
    transition: all 0.4s cubic-bezier( 0.54, 0.01, 0, 1.49);
}

.checkBox:checked + label::before{
    transform: scale(1) rotateZ(0deg);
}

.todoLabel::after{
    content: "";
    border: 2px solid rgb(72,164,68);
    position: absolute;
    width: 22px;
    height: 22px;
    left: -38px;
    bottom: 0px;
    border-radius: 50%;
}

.checkBox{
    display: none;
}


.editTodoForm{
    display: none;
    justify-self: center;
    width: 97%;
    height: 100%;
    border: 1px solid black;
    border-radius: 3px;
    margin-left: 10px;

    padding: 10px;

}

.editTodoForm.visible{
    display: block;
    
}

.editTodoForm.visible {
    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
         -o-animation: fadein 2s; /* Opera < 12.1 */
            animation: fadein 2s;

    display: flex;
    flex-direction: column;
    gap: 10px
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

.todoEditDiv{
    display: flex;
    height: 25px;
    align-items: center;
}

.todoEditDiv label{
    width: 80px;
    padding-right: 10px;
    font-size: 15px;
}


.todoEditDiv input,.todoEditDiv select{
    border: 2px solid rgb(118, 116, 116);
    padding: 2px 10px;
    border-radius: 3px;
    height: 25px;
    width: 140px;

}

.todoEditLastDiv{
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 80px 1fr;
    align-items: baseline;
    height: 132px;
}

.todoEditLastDiv textarea{
   height: 132px;
   padding: 6px 10px;
}

textarea{
    resize: none;
}

.editButtonsSection{
    display: flex;
    justify-content: space-between;
}

.editButton{
    padding: 4px 8px;
    cursor: pointer;
    font-size: 12px;
    border-radius: 6px;
    font-weight: 600;
    background-color: whitesmoke;
}
.editButton:hover{
    background-color: rgb(219, 217, 217);
}
.editDelete{
    background-color: rgb(186, 1, 1);
    color: whitesmoke;
}

.editDelete:hover{
    background-color: rgb(140, 2, 2);
}






/* end right side */

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body{\n    width: 100%;\n    height: 100vh;\n    \n}\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n\nli{\n    list-style: none;\n}\n\nlabel, input, button,\nselect,textarea{\n    appearance: none;\n    border: none;\n    outline: none;\n    background-color: none;\n}\n\n\nbody{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    --white : rgb(167, 157, 131);\n    background-color: var(--white);\n}\n.main{\n    width: 80%;\n    height: 80%;\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 1fr 2fr;\n\n    --borderRadius: 14px;\n    --blue : rgb(202, 205, 208);\n    --yellow : rgb(219, 199, 174);\n    --shadow :rgb(136, 132, 132);\n    \n}\n/* left side */\n.left{\n    border-radius: var(--borderRadius) 0 0 var(--borderRadius);\n    background-color: var(--blue);\n    box-shadow: 0px 1px 5px 2px var(--shadow);\n    padding: 10px;\n    position: relative;\n\n    display: grid;\n    gap: 8px;\n    grid-template-rows: auto 1fr;\n    grid-template-columns: 1fr;\n}\n\n.leftSideHeader{\n    position: relative;\n}\n\n.left h2 {\n    margin-left: 8px;\n}\n\n.formContainer{\n    display: flex;\n    gap: 6px;\n    flex-wrap:wrap;\n    justify-content: center;\n    align-content: center;\n\n    background-color: blue;\n    position: absolute;\n    width: 80%;\n    height: auto;\n    border: 1px solid black;\n    border-radius: 6px 2px 6px 6px;\n    background-color: whitesmoke;\n    right: 30px;\n    top: 19px;\n    padding: 10px;\n}\n\n.projectLabel{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.projectInput{\n    appearance: none;\n    outline: none;\n    border: 2px solid black;\n    border-radius: 3px;\n    padding: 2px 10px;\n    height: 26px;\n    max-width: 90%;\n}\n\n.projectButton{\n    appearance: none;\n    width: 50px;\n    height: 26px;\n    border-radius: 3px;\n    cursor: pointer;\n    border: 2px solid black;\n}\n\n\n.left .projectsArea{\n    border-radius: var(--borderRadius);\n    border: 2px solid rgb(118, 116, 116);\n    padding: 8px;\n\n    display: flex;\n    flex-wrap: wrap;\n    align-content: baseline;\n    gap: 15px;\n\n    \n}\n\n.projectsArea .project{\n    background-color: var(--yellow);\n    border-radius: 6px;\n    height: 29px;\n    width:fit-content;\n    box-shadow: 1px 1px 2px 1px var(--shadow);\n    cursor: pointer;\n    \n\n    display: flex;\n    align-items: center;\n    padding: 1px 6px;\n}\n\n\n.removeIcon{\n    width: 18px;\n    border: 2px solid black;\n    border-radius: 15%;\n    margin-left: 4px;\n}\n\n\n.iconAddProject{\n    width: 30px;\n    position:absolute;\n    top: 0px;\n    right: 8px;\n    color: blue;\n    cursor: pointer;\n}\n\n/* end left side */\n\n/* right side */\n.right{\n    border-radius: 0 var(--borderRadius) var(--borderRadius) 0;\n    background-color: var(--yellow);\n    box-shadow: 1px 1px 5px 2px var(--shadow);\n\n    padding: 10px;\n    position: relative;\n    display: grid;\n    grid-template-rows: auto 1fr;\n    gap: 10px;\n}\n\n.rightSideHeader{\n    border-radius: 6px;\n    box-shadow: 1px 1px 2px 1px var(--shadow);\n    height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgb(237, 223, 208);\n    font-size: 14px;\n    margin-right: 45px;\n}\n\n.rightSideHeader.noEditHeader{\n    margin-right: 0px;\n}\n\n.todoContainer{\n    width: 100%;\n    height: 60px;\n    background-color: var(--blue);\n    border-radius: var(--borderRadius);\n    box-shadow : 1px 1px 2px 1px var(--shadow)\n}\n\n.addTodoIcon{\n    position: absolute;\n    width: 40px;\n    height: 40px;\n    top: 5px;\n    right: 10px;\n    background-color: transparent;\n    visibility: hidden;\n}\n\n.addTodoIcon.active{\n    visibility: visible;\n    cursor: pointer;\n}\n\n.addTodoIcon:disabled{\n    cursor:auto;\n    visibility:hidden;\n}\n\n.todoForm{\n    position: absolute;\n    width: 300px;\n    height: 330px;\n    background-color: var(--blue);\n    border-radius: var(--borderRadius);\n    top: 8px;\n    right: 10px;\n    border: 2px solid rgb(118, 116, 116);\n    padding: 6px;\n}\n\n.todoForm li{\n    margin-bottom: 3px;\n    height: 30px;\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 80px 1fr;\n    grid-template-rows: 20px;\n    position: relative;\n}\n\n.editTodoForm div:nth-child(3){\n    position: relative;\n}\n\n.editTodoForm div:nth-child(3)::before{\n    content: \"▼\";\n    font-size: 1rem;\n    top: 3px;\n    left: 192px;\n    position: absolute;\n    pointer-events: none;\n}\n\n.todoForm input, select, textarea{\n    border: 2px solid rgb(118, 116, 116);\n    padding: 2px 10px;\n    border-radius: 3px;\n    height: 25px;\n}\n\nselect{\n    cursor: pointer;\n}\n\n.todoForm ul li:nth-child(3)::after{\n    content: \"▼\";\n    font-size: 1rem;\n    top: 4px;\n    right: 13px;\n    position: absolute;\n    pointer-events: none;\n}\n\ntextarea{\n    height: 152px;\n    padding: 4px;\n}\n\n.todoForm input:focus{\n    border: 2px solid black;\n    \n}\n\n\n.todoformHeader{\n    text-align: center;\n    font-size: 18px;\n    border-bottom: 1px solid rgb(118, 116, 116);\n    margin-bottom: 6px;\n}\n\n.todoForm .lastLi{\n    height: 155px;\n}\n\n.todoForm button:first-of-type{\n    margin-left: 10px;\n}\n\n.todoFormButton{\n    width: 50px;\n    height: 25px;\n    border-radius: 8px;\n    cursor: pointer;\n    float: right;\n}\n\n.todoFormButton:hover{\n    background-color: rgb(168, 168, 168);\n}\n\n.allTodos{\n    padding-left: 40px;\n}\n\n.todoLi{\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 28px;\n    grid-auto-rows: 1fr;\n\n    height: 28px;\n    transition: all .3s ease;\n\n    background-color: var(--blue);\n    border-radius: 6px;\n    box-shadow: 1px 1px 2px 1px var(--shadow);\n    margin-bottom: 20px;\n    padding-right: 10px;\n    padding-bottom: 10px;\n}\n\n.todoTitleP{\n    font-weight: 700;\n    font-size: 18px;\n}\n\n.dueDateP{\n    font-size: 14px;\n}\n\n.dropDownIcon{\n    width: 20px;\n    height: 20px;\n}\n\n.dropDownContainer{\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n\n.todoLi.expand{\n    height: 472px;\n}\n\n.todoLi.expand.nonEditMode{\n    height: 439px ;\n}\n\n.todoLi.low{\n    border-right: 10px solid #f9e54e;\n}\n.todoLi.medium{\n    border-right: 10px solid #f5a65d;\n}\n.todoLi.high{\n    border-right: 10px solid #c75e5e;\n}\n\n.topContainer{\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr auto 20px;\n    grid-template-rows: 1fr;\n    gap: 5px;\n}\n\n.todoLabel{\n    display: flex;\n    gap: 6px;\n    cursor:pointer ;\n    position: relative;\n}\n\n.todoLabel p:first-child{\n    padding-left: 10px;\n    display: flex;\n    align-items: center;\n}\n\n.todoLi p {\n    display: flex;\n    align-items: center;\n}\n\n.todoLabel::before{\n    content: \"\";\n    background: url(\"../img/greenCheckMark.svg\");\n    background-position: center;\n    background-size: contain;\n    width: 26px;\n    height: 26px;\n    position: absolute;\n    left: -38px;\n    bottom: 0px;\n\n    transform: scale(0) rotateZ(180deg);\n    transition: all 0.4s cubic-bezier( 0.54, 0.01, 0, 1.49);\n}\n\n.checkBox:checked + label::before{\n    transform: scale(1) rotateZ(0deg);\n}\n\n.todoLabel::after{\n    content: \"\";\n    border: 2px solid rgb(72,164,68);\n    position: absolute;\n    width: 22px;\n    height: 22px;\n    left: -38px;\n    bottom: 0px;\n    border-radius: 50%;\n}\n\n.checkBox{\n    display: none;\n}\n\n\n.editTodoForm{\n    display: none;\n    justify-self: center;\n    width: 97%;\n    height: 100%;\n    border: 1px solid black;\n    border-radius: 3px;\n    margin-left: 10px;\n\n    padding: 10px;\n\n}\n\n.editTodoForm.visible{\n    display: block;\n    \n}\n\n.editTodoForm.visible {\n    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */\n       -moz-animation: fadein 2s; /* Firefox < 16 */\n        -ms-animation: fadein 2s; /* Internet Explorer */\n         -o-animation: fadein 2s; /* Opera < 12.1 */\n            animation: fadein 2s;\n\n    display: flex;\n    flex-direction: column;\n    gap: 10px\n}\n\n@keyframes fadein {\n    from { opacity: 0; }\n    to   { opacity: 1; }\n}\n\n/* Firefox < 16 */\n@-moz-keyframes fadein {\n    from { opacity: 0; }\n    to   { opacity: 1; }\n}\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadein {\n    from { opacity: 0; }\n    to   { opacity: 1; }\n}\n\n/* Internet Explorer */\n@-ms-keyframes fadein {\n    from { opacity: 0; }\n    to   { opacity: 1; }\n}\n\n.todoEditDiv{\n    display: flex;\n    height: 25px;\n    align-items: center;\n}\n\n.todoEditDiv label{\n    width: 80px;\n    padding-right: 10px;\n    font-size: 15px;\n}\n\n\n.todoEditDiv input,.todoEditDiv select{\n    border: 2px solid rgb(118, 116, 116);\n    padding: 2px 10px;\n    border-radius: 3px;\n    height: 25px;\n    width: 140px;\n\n}\n\n.todoEditLastDiv{\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 80px 1fr;\n    align-items: baseline;\n    height: 132px;\n}\n\n.todoEditLastDiv textarea{\n   height: 132px;\n   padding: 6px 10px;\n}\n\ntextarea{\n    resize: none;\n}\n\n.editButtonsSection{\n    display: flex;\n    justify-content: space-between;\n}\n\n.editButton{\n    padding: 4px 8px;\n    cursor: pointer;\n    font-size: 12px;\n    border-radius: 6px;\n    font-weight: 600;\n    background-color: whitesmoke;\n}\n.editButton:hover{\n    background-color: rgb(219, 217, 217);\n}\n.editDelete{\n    background-color: rgb(186, 1, 1);\n    color: whitesmoke;\n}\n\n.editDelete:hover{\n    background-color: rgb(140, 2, 2);\n}\n\n\n\n\n\n\n/* end right side */\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOMscript.js":
/*!**************************!*\
  !*** ./src/DOMscript.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _img_close_thick_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../img/close-thick.svg */ "./img/close-thick.svg");
/* harmony import */ var _img_downArrow_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../img/downArrow.svg */ "./img/downArrow.svg");
/* harmony import */ var _img_upArrow_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../img/upArrow.svg */ "./img/upArrow.svg");
/* harmony import */ var _img_plus_box_outline_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../img/plus-box-outline.svg */ "./img/plus-box-outline.svg");






let DOM_Module = (function () {

    let setProjectAddSrc = () => {
        let leftSideHeader = document.querySelector('.leftSideHeader');
        let img = document.createElement('img');
        img.classList.add('iconAddProject');
        img.src = _img_plus_box_outline_svg__WEBPACK_IMPORTED_MODULE_4__;
        leftSideHeader.appendChild(img);
    };

    let setAddTodoIconImg = () => {
        let button = document.querySelector('.addTodoIcon');
        let img = document.createElement( 'img' );
        img.src = _img_plus_box_outline_svg__WEBPACK_IMPORTED_MODULE_4__;
        button.appendChild( img );
    };

    let projectArea = document.querySelector('.projectsArea');
    let addProject = (insideText, index) => {
        let li = document.createElement('li');
        li.classList.add('project');
        li.classList.add("_" + index);

        let p = document.createElement('p');
        p.innerText = insideText;

        let x = document.createElement('img');
        x.classList = "removeIcon";
        x.src = _img_close_thick_svg__WEBPACK_IMPORTED_MODULE_1__;

        li.appendChild(p);
        li.appendChild(x);
        projectArea.appendChild(li);

    };

    let leftSide = document.querySelector('.left');
    let projectForm = () => {
        let formContainer = document.createElement('div');
        formContainer.classList.add("formContainer");

        let label = document.createElement("label");
        let input = document.createElement("input");
        let p = document.createElement("p");
        let button = document.createElement("button");
        let cancel = document.createElement("button");

        label.classList.add("projectLabel");
        input.classList.add("projectInput");
        button.classList.add("projectButton");
        cancel.classList.add("projectButton");
        cancel.classList.add("cancelButton");


        p.innerText = "Project Name";
        button.innerText = "Create";
        cancel.innerText = "Cancel";


        label.appendChild(p);
        formContainer.appendChild(label);
        formContainer.appendChild(input);
        formContainer.appendChild(button);
        formContainer.appendChild(cancel);

        leftSide.appendChild(formContainer);

        cancel.addEventListener('click', () => {
            removeProjectForm();
        });
    };

    let removeProjectForm = () => {
        let form = document.querySelector(".formContainer");
        leftSide.removeChild(form);
    };

    let removeProject = (index) => {
        let element = document.querySelector(`.project.${index}`);
        projectArea.removeChild(element);

        let alltodos = projectArea.firstElementChild;
        let key = alltodos.nextElementSibling;

        let newIndex = 0;
        while (key != null) {
            key.className = `project _${newIndex}`;
            newIndex++;
            key = key.nextElementSibling;
        }
    };


    let updateRightSide = (project) => {
        updateRightHeader(project.title);
        updateToDoSection(project.todoList);
        addTodoButton();
    };

    let updateRightHeader = (text) => {
        let header = document.querySelector(".rightSideHeader h2");
        header.innerText = `Todos from project : ${text}`;
    };
    let right = document.querySelector('.right');

    let updateToDoSection = (todoList) => {
        let allTodosContainer = right.firstElementChild.nextElementSibling;
        allTodosContainer.innerHTML = "";
        let ul = document.createElement('ul');
        todoList.forEach((key, index) => {
            let li = document.createElement('li');
            li.classList.add('todoLi');
            li.id = `todo_${index}`;

            let topContainer = document.createElement('div');
            topContainer.classList.add('topContainer');

            let checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.classList.add('checkBox');
            if (key.done === true) {
                checkbox.setAttribute('checked', 'true');
            }
            checkbox.id = `todoCheck_${index}`


            let p = document.createElement('p');
            p.classList.add('todoTitleP');
            p.innerText = key.title;

            let label = document.createElement('label');
            label.classList.add('todoLabel');
            label.setAttribute('for', `todoCheck_${index}`);
            label.setAttribute('name', `todo_${index}`);
            label.appendChild(p);

            let dueDate = document.createElement('p');
            dueDate.classList.add('dueDateP');
            if (key.dueDate == "") {
                dueDate.innerText = "No Due Date";
            }
            else {
                dueDate.innerText = key.dueDate;
            }

            let div = document.createElement('div');
            div.classList.add('dropDownContainer');

            let img = new Image();
            img.src = _img_downArrow_svg__WEBPACK_IMPORTED_MODULE_2__;
            div.appendChild(img);
            img.classList.add('dropDownIcon');




            topContainer.appendChild(checkbox)
            topContainer.appendChild(label);
            topContainer.appendChild(dueDate);
            topContainer.appendChild(div);


            let editForm = document.createElement('form');
            editForm.classList.add('editTodoForm');

            let divOne = document.createElement('div');
            divOne.classList.add('todoEditDiv');
            let titleLabel = document.createElement('label');
            titleLabel.innerText = "Title";
            titleLabel.setAttribute(`for`, `titleEdit${index}`);
            let titleInput = document.createElement('input');
            titleInput.setAttribute('type', 'text');
            titleInput.value = key.title;
            titleInput.id = `titleEdit${index}`;

            divOne.appendChild(titleLabel);
            divOne.appendChild(titleInput);

            let divTwo = document.createElement('div');
            divTwo.classList.add('todoEditDiv');
            let dueDateLabel = document.createElement('label');
            dueDateLabel.innerText = "Due Date";
            dueDateLabel.setAttribute('for', `dueEdit${index}`);
            let dueDateInput = document.createElement('input');
            dueDateInput.setAttribute('type', 'date');
            dueDateInput.id = `dueEdit${index}`;
            dueDateInput.defaultValue = key.dueDate;
            divTwo.appendChild(dueDateLabel);
            divTwo.appendChild(dueDateInput);

            let divThree = document.createElement('div');
            divThree.classList.add('todoEditDiv');
            let priorityLabel = document.createElement('label');
            priorityLabel.innerText = "Priority"
            priorityLabel.setAttribute('for', `priorityEdit${index}`);
            let priorityInput = document.createElement('select');
            priorityInput.id = `priorityEdit${index}`;
            let selectOptions = ['low', 'medium', 'high'];

            selectOptions.forEach(op => {
                let option = document.createElement('option');
                option.innerText = op;
                if (key.priority == op) {
                    option.setAttribute('selected', 'selected');
                }
                priorityInput.appendChild(option);
            });
            divThree.appendChild(priorityLabel);
            divThree.appendChild(priorityInput);

            let divFour = document.createElement('div');
            divFour.classList.add('todoEditDiv');
            divFour.classList.add('todoEditLastDiv');
            let desLabel = document.createElement('label');
            desLabel.innerText = "Description";
            let desInput = document.createElement('textarea');
            desInput.value = key.description;
            divFour.appendChild(desLabel);
            divFour.appendChild(desInput);

            let divFive = document.createElement('div');
            divFive.classList.add('todoEditDiv');
            divFive.classList.add('todoEditLastDiv');
            let notesLabel = document.createElement('label');
            notesLabel.innerText = "Notes";
            let notesInput = document.createElement('textarea');
            notesInput.value = key.notes;
            divFive.appendChild(notesLabel);
            divFive.appendChild(notesInput);

            let divSix = document.createElement('div');
            divSix.classList.add('editButtonsSection');

            let deleteTodoButton = document.createElement('button');
            deleteTodoButton.setAttribute('type', 'button');
            deleteTodoButton.classList.add('editButton');
            deleteTodoButton.classList.add('editDelete');
            deleteTodoButton.innerText = "Delete This Todo";

            let editCancel = document.createElement('button');
            editCancel.setAttribute('type', 'button');
            editCancel.classList.add('editButton');
            editCancel.innerText = "Undo Draft";


            editCancel.addEventListener('click', () => {
                titleInput.value = key.title;
                dueDateInput.value = key.dueDate;
                desInput.value = key.description;
                notesInput.value = key.notes;

                if (key.priority == 'low') {
                    priorityInput.selectedIndex = 0;
                }
                else if (key.priority == "medium") {
                    priorityInput.selectedIndex = 1;
                }
                else {
                    priorityInput.selectedIndex = 2;
                }
            });

            let editSumbit = document.createElement('button');
            editSumbit.setAttribute('type', 'button');
            editSumbit.classList.add('editButton');
            editSumbit.classList.add('editSubmit');
            editSumbit.innerText = "Sumbit Changes";
            divSix.appendChild(deleteTodoButton);
            divSix.appendChild(editCancel);
            divSix.appendChild(editSumbit);

            editForm.appendChild(divOne);
            editForm.appendChild(divTwo);
            editForm.appendChild(divThree);
            editForm.appendChild(divFour);
            editForm.appendChild(divFive);
            editForm.appendChild(divSix);





            li.appendChild(topContainer);
            li.appendChild(editForm);

            li.classList.add(`${key.priority}`);
            ul.appendChild(li);

            div.addEventListener('click', () => {
                let liClasses = Array.from(li.classList);
                if (liClasses.includes("expand")) {
                    li.classList.remove('expand');
                    img.src = _img_downArrow_svg__WEBPACK_IMPORTED_MODULE_2__;
                    editForm.classList.remove('visible');
                }
                else {
                    li.classList.add('expand');
                    img.src = _img_upArrow_svg__WEBPACK_IMPORTED_MODULE_3__;
                    editForm.classList.add('visible');
                }
            });

        });

        allTodosContainer.appendChild(ul);

    };

    let addTodoButton = () => {

        let addTodoIcon = document.querySelector(".addTodoIcon");
        addTodoIcon.classList.add('active');

    }

    let addTodoForm = () => {
        let div = document.createElement('form');
        div.classList.add('todoForm');
        right.appendChild(div);

        let header = document.createElement('h5');
        header.classList.add('todoformHeader');
        header.innerText = "Todo";

        let list = document.createElement('ul');

        let li = document.createElement('li');
        let labelTitle = document.createElement('label');
        labelTitle.innerText = "Title"
        let inputTitle = document.createElement('input');
        inputTitle.classList.add('inputTitle');
        li.appendChild(labelTitle);
        li.appendChild(inputTitle);

        let liTwo = document.createElement('li');
        let labelDue = document.createElement('label');
        labelDue.innerText = "Due Date"
        let inputDue = document.createElement('input');
        inputDue.classList.add('dateInput');
        inputDue.setAttribute('type', 'date');
        liTwo.appendChild(labelDue);
        liTwo.appendChild(inputDue);


        let liThree = document.createElement('li');
        let labelPriority = document.createElement('label');
        labelPriority.innerText = "Priorty";
        let inputPriority = document.createElement('select');

        let selectOptions = ['low', 'medium', 'high'];

        selectOptions.forEach(op => {
            let option = document.createElement('option');
            option.innerText = op;
            inputPriority.appendChild(option);
        });

        liThree.appendChild(labelPriority);
        liThree.appendChild(inputPriority);

        let liFour = document.createElement('li');
        liFour.classList.add("lastLi");
        let labelDes = document.createElement('label');
        labelDes.innerText = "Description"
        let inputDes = document.createElement('textArea');
        liFour.appendChild(labelDes);
        liFour.appendChild(inputDes);

        let addButton = document.createElement('button');
        addButton.setAttribute('type', 'button');
        addButton.classList.add('todoFormButton')
        addButton.classList.add('todoAddButton')
        addButton.innerText = 'Add';

        let cancelButton = document.createElement('button');
        cancelButton.setAttribute('type', 'button');
        cancelButton.classList.add('todoFormButton')
        cancelButton.classList.add('todoCancelButton')
        cancelButton.innerText = 'Cancel';

        list.appendChild(li);
        list.appendChild(liTwo);
        list.appendChild(liThree);
        list.appendChild(liFour);
        list.appendChild(addButton);
        list.appendChild(cancelButton);

        div.appendChild(header);
        div.appendChild(list);

        cancelButton.addEventListener('click', () => {
            removeTodoForm();
        });
    }

    let removeTodoForm = () => {
        let form = document.querySelector('.todoForm');
        right.removeChild(form);
    }

    let removeTodoFormButton = () => {
        let addTodoButton = document.querySelector('.addTodoIcon');
        let checkTwo = document.querySelector('.todoForm');

        addTodoButton.classList.remove('active');

        if (checkTwo != null) {
            removeTodoForm();
        }

    };

    let updatePriorityMarker = (index, oldPriority, newPriority) => {
        let todoLi = document.querySelector(`#todo_${index}`);
        todoLi.classList.remove(oldPriority);
        todoLi.classList.add(newPriority);
    };

    let updateTitle = (index, newTitle) => {
        let todoTitle = document.querySelector(`#todo_${index} .todoTitleP`);
        todoTitle.innerText = newTitle;
    };

    let updateDueDate = (index, newDueDate) => {
        let todoDue = document.querySelector(`#todo_${index} .dueDateP`);
        todoDue.innerText = (newDueDate == "") ? "No Due Date" : newDueDate;

    };

    let removeTodo = (index) => {
        let todoToBeRemoved = document.querySelector(`#todo_${index}`);
        let containers = document.querySelector('.allTodos ul');
        containers.removeChild(todoToBeRemoved);


        let key = containers.firstElementChild;

        let newIndex = 0;
        while (key != null) {
            key.id = `todo_${newIndex}`;
            newIndex++;
            key = key.nextElementSibling;
        }
    };

    let clearRightSide = (newHeader) => {
        removeTodoFormButton();
        updateRightHeader(newHeader);
        updateToDoSection([]);
    };

    let nonEditableTodo = (todoList) => {
        let ul = document.createElement('ul');
        todoList.forEach((key, index) => {
            let li = document.createElement('li');
            li.classList.add('todoLi');
            li.classList.add('nonEditMode');
            li.id = `todo_${index}`;

            let topContainer = document.createElement('div');
            topContainer.classList.add('topContainer');

            let checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.classList.add('checkBox');
            checkbox.disabled = true;
            if (key.done === true) {
                checkbox.setAttribute('checked', 'true');
            }
            checkbox.id = `todoCheck_${index}`


            let p = document.createElement('p');
            p.classList.add('todoTitleP');
            p.innerText = key.title;

            let label = document.createElement('label');
            label.classList.add('todoLabel');
            label.setAttribute('for', `todoCheck_${index}`);
            label.setAttribute('name', `todo_${index}`);
            label.appendChild(p);

            let dueDate = document.createElement('p');
            dueDate.classList.add('dueDateP');
            if (key.dueDate == "") {
                dueDate.innerText = "No Due Date";
            }
            else {
                dueDate.innerText = key.dueDate;
            }

            let div = document.createElement('div');
            div.classList.add('dropDownContainer');

            let img = new Image();
            img.src = _img_downArrow_svg__WEBPACK_IMPORTED_MODULE_2__;
            div.appendChild(img);
            img.classList.add('dropDownIcon');




            topContainer.appendChild(checkbox)
            topContainer.appendChild(label);
            topContainer.appendChild(dueDate);
            topContainer.appendChild(div);


            let editForm = document.createElement('form');
            editForm.classList.add('editTodoForm');

            let divOne = document.createElement('div');
            divOne.classList.add('todoEditDiv');
            let titleLabel = document.createElement('label');
            titleLabel.innerText = "Title";
            titleLabel.setAttribute(`for`, `titleEdit${index}`);
            let titleInput = document.createElement('input');
            titleInput.setAttribute('type', 'text');
            titleInput.value = key.title;
            titleInput.id = `titleEdit${index}`;
            titleInput.readOnly = true;

            divOne.appendChild(titleLabel);
            divOne.appendChild(titleInput);

            let divTwo = document.createElement('div');
            divTwo.classList.add('todoEditDiv');
            let dueDateLabel = document.createElement('label');
            dueDateLabel.innerText = "Due Date";
            dueDateLabel.setAttribute('for', `dueEdit${index}`);
            let dueDateInput = document.createElement('input');
            dueDateInput.setAttribute('type', 'date');
            dueDateInput.id = `dueEdit${index}`;
            dueDateInput.defaultValue = key.dueDate;
            dueDateInput.readOnly = true;

            divTwo.appendChild(dueDateLabel);
            divTwo.appendChild(dueDateInput);

            let divThree = document.createElement('div');
            divThree.classList.add('todoEditDiv');
            let priorityLabel = document.createElement('label');
            priorityLabel.innerText = "Priority"
            priorityLabel.setAttribute('for', `priorityEdit${index}`);
            let priorityInput = document.createElement('input');
            priorityInput.id = `priorityEdit${index}`;
            priorityInput.value = key.priority;
            priorityInput.readOnly = true;



            divThree.appendChild(priorityLabel);
            divThree.appendChild(priorityInput);

            let divFour = document.createElement('div');
            divFour.classList.add('todoEditDiv');
            divFour.classList.add('todoEditLastDiv');
            let desLabel = document.createElement('label');
            desLabel.innerText = "Description";
            let desInput = document.createElement('textarea');
            desInput.readOnly = true;

            desInput.value = key.description;
            divFour.appendChild(desLabel);
            divFour.appendChild(desInput);

            let divFive = document.createElement('div');
            divFive.classList.add('todoEditDiv');
            divFive.classList.add('todoEditLastDiv');
            let notesLabel = document.createElement('label');
            notesLabel.innerText = "Notes";
            let notesInput = document.createElement('textarea');
            notesInput.readOnly = true;

            notesInput.value = key.notes;
            divFive.appendChild(notesLabel);
            divFive.appendChild(notesInput);

            editForm.appendChild(divOne);
            editForm.appendChild(divTwo);
            editForm.appendChild(divThree);
            editForm.appendChild(divFour);
            editForm.appendChild(divFive);


            li.appendChild(topContainer);
            li.appendChild(editForm);

            li.classList.add(`${key.priority}`);
            ul.appendChild(li);

            div.addEventListener('click', () => {
                let liClasses = Array.from(li.classList);
                if (liClasses.includes("expand")) {
                    li.classList.remove('expand');
                    img.src = _img_downArrow_svg__WEBPACK_IMPORTED_MODULE_2__;
                    editForm.classList.remove('visible');
                }
                else {
                    li.classList.add('expand');
                    img.src = _img_upArrow_svg__WEBPACK_IMPORTED_MODULE_3__;
                    editForm.classList.add('visible');
                }
            });

        });

        return ul;
    }

    let setupAllTodoProject = (projectList) => {
        addHeaderMargin();
        removeTodoFormButton();
        updateRightHeader('All Todos');
        let allTodosContainer = right.firstElementChild.nextElementSibling;
        allTodosContainer.innerHTML = "";
        for (let i = 0; i < projectList.length; i++) {
            let ul = nonEditableTodo(projectList[i].todoList);
            allTodosContainer.appendChild(ul);
        }
    };

    let removeHeaderMargin = () => {
        let header = document.querySelector( '.rightSideHeader' ); 
        header.classList.remove('noEditHeader');
    };

    let addHeaderMargin = () => {
        let header = document.querySelector( '.rightSideHeader' ); 
        header.classList.add('noEditHeader');
    }

    return {
        addProject, projectForm, removeProjectForm,
        removeProject, updateRightSide,
        addTodoForm, removeTodoForm, removeTodoFormButton,
        updatePriorityMarker, updateTitle, updateDueDate,
        removeTodo, clearRightSide, setupAllTodoProject,
        removeHeaderMargin, removeHeaderMargin,
        setProjectAddSrc, setAddTodoIconImg
    };
}
)();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM_Module);

/***/ }),

/***/ "./img/close-thick.svg":
/*!*****************************!*\
  !*** ./img/close-thick.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b3455d717d5c885f9af.svg";

/***/ }),

/***/ "./img/downArrow.svg":
/*!***************************!*\
  !*** ./img/downArrow.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "80b6369d6cd470b44b72.svg";

/***/ }),

/***/ "./img/greenCheckMark.svg":
/*!********************************!*\
  !*** ./img/greenCheckMark.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "811a046ee360e05216b9.svg";

/***/ }),

/***/ "./img/plus-box-outline.svg":
/*!**********************************!*\
  !*** ./img/plus-box-outline.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de7aff6cb1c57b33c2db.svg";

/***/ }),

/***/ "./img/upArrow.svg":
/*!*************************!*\
  !*** ./img/upArrow.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8fc49a26d7b8c7c1874b.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _DOMscript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMscript */ "./src/DOMscript.js");



class TodoItem{
    constructor( title, description, dueDate, priority, ...args){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = !( args[0] ) ? '': args[0];
        this.done = !( args[1] ) ? false: true;
    }
}

class Project{
    constructor( title){
        this.title = title;
        this.todoList = [];
    }
}

let projectList = [];
let currentProjectIndex;
_DOMscript__WEBPACK_IMPORTED_MODULE_1__["default"].setProjectAddSrc();
_DOMscript__WEBPACK_IMPORTED_MODULE_1__["default"].setAddTodoIconImg();

function setTodoButtonsListners(){
        let sumbits = document.querySelectorAll('.editButtonsSection .editSubmit');
        for(let i = 0; i < sumbits.length; i++){
            sumbits[i].addEventListener('click', (event) => {
            let todoIndex = event.target.parentNode.parentNode.parentNode.id.split('_')[1];
            let newTitle = event.target.parentNode.parentNode.firstElementChild.firstElementChild.nextElementSibling.value;
            let newDueDate = event.target.parentNode.parentNode.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.value;
            let newPriority = event.target.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.value;
            let newDes = event.target.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.value;
            let newNotes = event.target.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.value;

                
            if( !(projectList[currentProjectIndex].todoList[todoIndex].title === newTitle) ){
                _DOMscript__WEBPACK_IMPORTED_MODULE_1__["default"].updateTitle(todoIndex, newTitle);
                projectList[currentProjectIndex].todoList[todoIndex].title = newTitle;
            }
                
            if( !(projectList[currentProjectIndex].todoList[todoIndex].dueDate === newDueDate) ){
                _DOMscript__WEBPACK_IMPORTED_MODULE_1__["default"].updateDueDate( todoIndex, newDueDate);
                projectList[currentProjectIndex].todoList[todoIndex].dueDate = newDueDate;
            }
                
            if( !(projectList[currentProjectIndex].todoList[todoIndex].priority == newPriority)){
                _DOMscript__WEBPACK_IMPORTED_MODULE_1__["default"].updatePriorityMarker(todoIndex , projectList[currentProjectIndex].todoList[todoIndex].priority, newPriority);
                projectList[currentProjectIndex].todoList[todoIndex].priority = newPriority;
            }
                
                projectList[currentProjectIndex].todoList[todoIndex].description = newDes;
                projectList[currentProjectIndex].todoList[todoIndex].notes = newNotes;

                localStorage.setItem( "localProjectList" , JSON.stringify( projectList) );
            });
        }

    let checkboxes = document.querySelectorAll('.todoLi .checkBox');
    for(let i = 0; i < checkboxes.length; i++){
        checkboxes[i].addEventListener( 'change' , ( event) =>{
            let todoIndex = event.target.parentNode.parentNode.id.split('_')[1];
            if (event.target.checked) {
                projectList[currentProjectIndex].todoList[todoIndex].done = true;
                localStorage.setItem( "localProjectList" , JSON.stringify( projectList) );
            } else {
                projectList[currentProjectIndex].todoList[todoIndex].done = false;
                localStorage.setItem( "localProjectList" , JSON.stringify( projectList) );
            }
        });
    }

    let deleteButtons = document.querySelectorAll('.editButtonsSection .editDelete');
    for( let i = 0; i < deleteButtons.length ; i++){
        deleteButtons[i].addEventListener( 'click' , ( event) => {
            let todoIndex = event.target.parentNode.parentNode.parentNode.id.split('_')[1];
            projectList[currentProjectIndex].todoList.splice( todoIndex, 1);
            _DOMscript__WEBPACK_IMPORTED_MODULE_1__["default"].removeTodo( todoIndex);
            localStorage.setItem( "localProjectList" , JSON.stringify( projectList) );
        });
    }
}

function deleteProjectListner( index ){
    let xButton = document.querySelector( `.project._${index} img` );
        xButton.addEventListener("click", (event) => {
            

            let classes = event.target.parentNode.classList;
            let index = classes[1].split("")[1];

            if( index == currentProjectIndex ){
                _DOMscript__WEBPACK_IMPORTED_MODULE_1__["default"].clearRightSide('deleted :]');
                currentProjectIndex = undefined;
            }
            else if( index < currentProjectIndex){
                currentProjectIndex--;
            }

            projectList.splice( index, 1);
            _DOMscript__WEBPACK_IMPORTED_MODULE_1__["default"].removeProject(classes[1])
            if( projectList.length == 0 ){
                currentProjectIndex = undefined
                localStorage.clear();
            }
            else{
                localStorage.setItem( "localProjectList" , JSON.stringify( projectList) );
            }
            event.stopPropagation();
        });
}


if (!localStorage.getItem("localProjectList")) {

} 
else {

    let savedLocal =  JSON.parse(localStorage.getItem('localProjectList'));
    
    for( let i = 0 ; i < savedLocal.length ; i++){
        let newProjectIndex = projectList.length;
        _DOMscript__WEBPACK_IMPORTED_MODULE_1__["default"].addProject( savedLocal[i].title, newProjectIndex);
        let newProject = new Project( savedLocal[i].title );
        projectList.push(newProject);
        deleteProjectListner( newProjectIndex );

        let project = document.querySelector( `.project._${newProjectIndex}` );
        
        project.addEventListener("click", (event) => {
            _DOMscript__WEBPACK_IMPORTED_MODULE_1__["default"].removeHeaderMargin();
            _DOMscript__WEBPACK_IMPORTED_MODULE_1__["default"].removeHeaderMargin();
            let type = event.target.nodeName;
            let target;

            if( type == "LI" ){
                target = event.target;
            }
            else{
                target = event.target.parentNode;
            }

            let clickedProjectIndex = target.classList[1].split("")[1];

            if( clickedProjectIndex === currentProjectIndex){
                ;
            }
            else{
                currentProjectIndex = clickedProjectIndex;
                _DOMscript__WEBPACK_IMPORTED_MODULE_1__["default"].updateRightSide( projectList[currentProjectIndex] );
                
            }
            setTodoButtonsListners()
        });
        let todoList = savedLocal[i].todoList;

        for( let j = 0 ; j < todoList.length ; j++){
            let title = todoList[j].title;
            let dueDate = todoList[j].dueDate;
            let priority = todoList[j].priority;
            let description = todoList[j].description;
            let notes = todoList[j].notes;
            let done = todoList[j].done;


            let newTodo = new TodoItem( title, description, dueDate, priority , notes , done);
            projectList[i].todoList.push(newTodo);

        }
    }

}

_DOMscript__WEBPACK_IMPORTED_MODULE_1__["default"].setupAllTodoProject( projectList );


let addProjectButton = document.querySelector('.iconAddProject');
addProjectButton.addEventListener('click', () =>{

    _DOMscript__WEBPACK_IMPORTED_MODULE_1__["default"].projectForm();

    let button = document.querySelector(".projectButton");
    let input = document.querySelector(".projectInput");
    button.addEventListener( 'click', () => {
        let projectName = input.value;
        let newProjectIndex = projectList.length;

        let newProject = new Project( projectName );
        projectList.push(newProject);
        localStorage.setItem( "localProjectList" , JSON.stringify( projectList) );
        _DOMscript__WEBPACK_IMPORTED_MODULE_1__["default"].addProject( projectName, newProjectIndex);
        _DOMscript__WEBPACK_IMPORTED_MODULE_1__["default"].removeProjectForm();

        deleteProjectListner( newProjectIndex );

        let project = document.querySelector( `.project._${newProjectIndex}` );
        
        project.addEventListener("click", (event) => {
            let type = event.target.nodeName;
            let target;

            if( type == "LI" ){
                target = event.target;
            }
            else{
                target = event.target.parentNode;
            }

            let clickedProjectIndex = target.classList[1].split("")[1];

            if( clickedProjectIndex === currentProjectIndex){
                ;
            }
            else{
                currentProjectIndex = clickedProjectIndex;
                _DOMscript__WEBPACK_IMPORTED_MODULE_1__["default"].updateRightSide( projectList[currentProjectIndex] );
                
            }
            
        });
    });
});

let allTodoProject = document.querySelector('.allTodoProject');
allTodoProject.addEventListener( 'click', () =>{
    currentProjectIndex = undefined;
    _DOMscript__WEBPACK_IMPORTED_MODULE_1__["default"].setupAllTodoProject( projectList );
    console.log( projectList );
});

let addToButton = document.querySelector(".addTodoIcon");
addToButton.addEventListener( 'click', () =>{
    _DOMscript__WEBPACK_IMPORTED_MODULE_1__["default"].addTodoForm();
    let add = document.querySelector('.todoAddButton');
    add.addEventListener('click', () =>{
        let title = document.querySelector('.inputTitle');
        let due = document.querySelector(".dateInput");
        let select = document.querySelector(".todoForm select");
        let description = document.querySelector(".todoForm textArea");

        
        let newTodo = new TodoItem( title.value, description.value,due.value, select.value);
        projectList[currentProjectIndex].todoList.push(newTodo);
        localStorage.setItem( "localProjectList" , JSON.stringify( projectList) );
        _DOMscript__WEBPACK_IMPORTED_MODULE_1__["default"].removeTodoForm();
        _DOMscript__WEBPACK_IMPORTED_MODULE_1__["default"].updateRightSide( projectList[currentProjectIndex] );


        //code goes here
        setTodoButtonsListners();

    });                
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDBIQUE0QztBQUN4Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixtQ0FBbUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0M7QUFDbEMsa0NBQWtDO0FBQ2xDLGtDQUFrQztBQUNsQyxrQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7O0FBRUEsT0FBTyxnRkFBZ0YsVUFBVSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGNBQWMsYUFBYSxhQUFhLGFBQWEsY0FBYyxNQUFNLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxRQUFRLEtBQUssWUFBWSxhQUFhLFlBQVksVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sYUFBYSxXQUFXLEtBQUssWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsY0FBYyxXQUFXLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsY0FBYyxZQUFZLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyx3QkFBd0IseUJBQXlCLHlC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QTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtEQUFVO0FBQ2xCLFFBQVEsa0RBQVU7O0FBRWxCOztBQUVBLDJEQUEyRCxnQkFBZ0I7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0RBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQVU7QUFDZDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksa0RBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtEQUFVO0FBQ2xCLFFBQVEsa0RBQVU7OztBQUdsQjtBQUNBOztBQUVBLEtBQUs7QUFDTCxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9Nc2NyaXB0LmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltZy9ncmVlbkNoZWNrTWFyay5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsIGJvZHl7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBcbn1cblxuKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5cbmxpe1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmxhYmVsLCBpbnB1dCwgYnV0dG9uLFxuc2VsZWN0LHRleHRhcmVhe1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbn1cblxuXG5ib2R5e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtLXdoaXRlIDogcmdiKDE2NywgMTU3LCAxMzEpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cbi5tYWlue1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcblxuICAgIC0tYm9yZGVyUmFkaXVzOiAxNHB4O1xuICAgIC0tYmx1ZSA6IHJnYigyMDIsIDIwNSwgMjA4KTtcbiAgICAtLXllbGxvdyA6IHJnYigyMTksIDE5OSwgMTc0KTtcbiAgICAtLXNoYWRvdyA6cmdiKDEzNiwgMTMyLCAxMzIpO1xuICAgIFxufVxuLyogbGVmdCBzaWRlICovXG4ubGVmdHtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpIDAgMCB2YXIoLS1ib3JkZXJSYWRpdXMpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDJweCB2YXIoLS1zaGFkb3cpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDhweDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xufVxuXG4ubGVmdFNpZGVIZWFkZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubGVmdCBoMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmZvcm1Db250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDZweDtcbiAgICBmbGV4LXdyYXA6d3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA2cHggMnB4IDZweCA2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICByaWdodDogMzBweDtcbiAgICB0b3A6IDE5cHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnByb2plY3RMYWJlbHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0SW5wdXR7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBwYWRkaW5nOiAycHggMTBweDtcbiAgICBoZWlnaHQ6IDI2cHg7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG59XG5cbi5wcm9qZWN0QnV0dG9ue1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiAyNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG5cblxuLmxlZnQgLnByb2plY3RzQXJlYXtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMTgsIDExNiwgMTE2KTtcbiAgICBwYWRkaW5nOiA4cHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1jb250ZW50OiBiYXNlbGluZTtcbiAgICBnYXA6IDE1cHg7XG5cbiAgICBcbn1cblxuLnByb2plY3RzQXJlYSAucHJvamVjdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBoZWlnaHQ6IDI5cHg7XG4gICAgd2lkdGg6Zml0LWNvbnRlbnQ7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMXB4IHZhcigtLXNoYWRvdyk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIFxuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDFweCA2cHg7XG59XG5cblxuLnJlbW92ZUljb257XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTUlO1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cblxuLmljb25BZGRQcm9qZWN0e1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiA4cHg7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBlbmQgbGVmdCBzaWRlICovXG5cbi8qIHJpZ2h0IHNpZGUgKi9cbi5yaWdodHtcbiAgICBib3JkZXItcmFkaXVzOiAwIHZhcigtLWJvcmRlclJhZGl1cykgdmFyKC0tYm9yZGVyUmFkaXVzKSAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMnB4IHZhcigtLXNoYWRvdyk7XG5cbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4ucmlnaHRTaWRlSGVhZGVye1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAxcHggdmFyKC0tc2hhZG93KTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzcsIDIyMywgMjA4KTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA0NXB4O1xufVxuXG4ucmlnaHRTaWRlSGVhZGVyLm5vRWRpdEhlYWRlcntcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLnRvZG9Db250YWluZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XG4gICAgYm94LXNoYWRvdyA6IDFweCAxcHggMnB4IDFweCB2YXIoLS1zaGFkb3cpXG59XG5cbi5hZGRUb2RvSWNvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHRvcDogNXB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmFkZFRvZG9JY29uLmFjdGl2ZXtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZFRvZG9JY29uOmRpc2FibGVke1xuICAgIGN1cnNvcjphdXRvO1xuICAgIHZpc2liaWxpdHk6aGlkZGVuO1xufVxuXG4udG9kb0Zvcm17XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDMzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XG4gICAgdG9wOiA4cHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDExOCwgMTE2LCAxMTYpO1xuICAgIHBhZGRpbmc6IDZweDtcbn1cblxuLnRvZG9Gb3JtIGxpe1xuICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODBweCAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmVkaXRUb2RvRm9ybSBkaXY6bnRoLWNoaWxkKDMpe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmVkaXRUb2RvRm9ybSBkaXY6bnRoLWNoaWxkKDMpOjpiZWZvcmV7XG4gICAgY29udGVudDogXCLilrxcIjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdG9wOiAzcHg7XG4gICAgbGVmdDogMTkycHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4udG9kb0Zvcm0gaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWF7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDExOCwgMTE2LCAxMTYpO1xuICAgIHBhZGRpbmc6IDJweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG5cbnNlbGVjdHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50b2RvRm9ybSB1bCBsaTpudGgtY2hpbGQoMyk6OmFmdGVye1xuICAgIGNvbnRlbnQ6IFwi4pa8XCI7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRvcDogNHB4O1xuICAgIHJpZ2h0OiAxM3B4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxudGV4dGFyZWF7XG4gICAgaGVpZ2h0OiAxNTJweDtcbiAgICBwYWRkaW5nOiA0cHg7XG59XG5cbi50b2RvRm9ybSBpbnB1dDpmb2N1c3tcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBcbn1cblxuXG4udG9kb2Zvcm1IZWFkZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDExOCwgMTE2LCAxMTYpO1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLnRvZG9Gb3JtIC5sYXN0TGl7XG4gICAgaGVpZ2h0OiAxNTVweDtcbn1cblxuLnRvZG9Gb3JtIGJ1dHRvbjpmaXJzdC1vZi10eXBle1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4udG9kb0Zvcm1CdXR0b257XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4udG9kb0Zvcm1CdXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OCwgMTY4LCAxNjgpO1xufVxuXG4uYWxsVG9kb3N7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuXG4udG9kb0xpe1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyOHB4O1xuICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XG5cbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IDFweCB2YXIoLS1zaGFkb3cpO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnRvZG9UaXRsZVB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5kdWVEYXRlUHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5kcm9wRG93bkljb257XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uZHJvcERvd25Db250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRvZG9MaS5leHBhbmR7XG4gICAgaGVpZ2h0OiA0NzJweDtcbn1cblxuLnRvZG9MaS5leHBhbmQubm9uRWRpdE1vZGV7XG4gICAgaGVpZ2h0OiA0MzlweCA7XG59XG5cbi50b2RvTGkubG93e1xuICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCAjZjllNTRlO1xufVxuLnRvZG9MaS5tZWRpdW17XG4gICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICNmNWE2NWQ7XG59XG4udG9kb0xpLmhpZ2h7XG4gICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICNjNzVlNWU7XG59XG5cbi50b3BDb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvIDIwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgZ2FwOiA1cHg7XG59XG5cbi50b2RvTGFiZWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDZweDtcbiAgICBjdXJzb3I6cG9pbnRlciA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udG9kb0xhYmVsIHA6Zmlyc3QtY2hpbGR7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRvZG9MaSBwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50b2RvTGFiZWw6OmJlZm9yZXtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIHdpZHRoOiAyNnB4O1xuICAgIGhlaWdodDogMjZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTM4cHg7XG4gICAgYm90dG9tOiAwcHg7XG5cbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZVooMTgwZGVnKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoIDAuNTQsIDAuMDEsIDAsIDEuNDkpO1xufVxuXG4uY2hlY2tCb3g6Y2hlY2tlZCArIGxhYmVsOjpiZWZvcmV7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGVaKDBkZWcpO1xufVxuXG4udG9kb0xhYmVsOjphZnRlcntcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig3MiwxNjQsNjgpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjJweDtcbiAgICBoZWlnaHQ6IDIycHg7XG4gICAgbGVmdDogLTM4cHg7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2hlY2tCb3h7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuXG4uZWRpdFRvZG9Gb3Jte1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IDk3JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuXG4gICAgcGFkZGluZzogMTBweDtcblxufVxuXG4uZWRpdFRvZG9Gb3JtLnZpc2libGV7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgXG59XG5cbi5lZGl0VG9kb0Zvcm0udmlzaWJsZSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAyczsgLyogU2FmYXJpLCBDaHJvbWUgYW5kIE9wZXJhID4gMTIuMSAqL1xuICAgICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMnM7IC8qIEZpcmVmb3ggPCAxNiAqL1xuICAgICAgICAtbXMtYW5pbWF0aW9uOiBmYWRlaW4gMnM7IC8qIEludGVybmV0IEV4cGxvcmVyICovXG4gICAgICAgICAtby1hbmltYXRpb246IGZhZGVpbiAyczsgLyogT3BlcmEgPCAxMi4xICovXG4gICAgICAgICAgICBhbmltYXRpb246IGZhZGVpbiAycztcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHhcbn1cblxuQGtleWZyYW1lcyBmYWRlaW4ge1xuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gICAgdG8gICB7IG9wYWNpdHk6IDE7IH1cbn1cblxuLyogRmlyZWZveCA8IDE2ICovXG5ALW1vei1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XG59XG5cbi8qIFNhZmFyaSwgQ2hyb21lIGFuZCBPcGVyYSA+IDEyLjEgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gICAgdG8gICB7IG9wYWNpdHk6IDE7IH1cbn1cblxuLyogSW50ZXJuZXQgRXhwbG9yZXIgKi9cbkAtbXMta2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgICB0byAgIHsgb3BhY2l0eTogMTsgfVxufVxuXG4udG9kb0VkaXREaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRvZG9FZGl0RGl2IGxhYmVse1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5cbi50b2RvRWRpdERpdiBpbnB1dCwudG9kb0VkaXREaXYgc2VsZWN0e1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMTgsIDExNiwgMTE2KTtcbiAgICBwYWRkaW5nOiAycHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAxNDBweDtcblxufVxuXG4udG9kb0VkaXRMYXN0RGl2e1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggMWZyO1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICBoZWlnaHQ6IDEzMnB4O1xufVxuXG4udG9kb0VkaXRMYXN0RGl2IHRleHRhcmVhe1xuICAgaGVpZ2h0OiAxMzJweDtcbiAgIHBhZGRpbmc6IDZweCAxMHB4O1xufVxuXG50ZXh0YXJlYXtcbiAgICByZXNpemU6IG5vbmU7XG59XG5cbi5lZGl0QnV0dG9uc1NlY3Rpb257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5lZGl0QnV0dG9ue1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuLmVkaXRCdXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjE3LCAyMTcpO1xufVxuLmVkaXREZWxldGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NiwgMSwgMSk7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5lZGl0RGVsZXRlOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDAsIDIsIDIpO1xufVxuXG5cblxuXG5cblxuLyogZW5kIHJpZ2h0IHNpZGUgKi9cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7OztBQUdBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxVQUFV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b0NBQW9DO0FBQ3BDO0lBQ0ksT0FBTyxVQUFVLEVBQUU7SUFDbkIsT0FBTyxVQUFVLEVBQUU7QUFDdkI7O0FBRUEsc0JBQXNCO0FBQ3RCO0lBQ0ksT0FBTyxVQUFVLEVBQUU7SUFDbkIsT0FBTyxVQUFVLEVBQUU7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7QUFFQTtHQUNHLGFBQWE7R0FDYixpQkFBaUI7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7Ozs7Ozs7QUFPQSxtQkFBbUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIFxcbn1cXG5cXG4qe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcblxcbmxpe1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5sYWJlbCwgaW5wdXQsIGJ1dHRvbixcXG5zZWxlY3QsdGV4dGFyZWF7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXG59XFxuXFxuXFxuYm9keXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC0td2hpdGUgOiByZ2IoMTY3LCAxNTcsIDEzMSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuLm1haW57XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuXFxuICAgIC0tYm9yZGVyUmFkaXVzOiAxNHB4O1xcbiAgICAtLWJsdWUgOiByZ2IoMjAyLCAyMDUsIDIwOCk7XFxuICAgIC0teWVsbG93IDogcmdiKDIxOSwgMTk5LCAxNzQpO1xcbiAgICAtLXNoYWRvdyA6cmdiKDEzNiwgMTMyLCAxMzIpO1xcbiAgICBcXG59XFxuLyogbGVmdCBzaWRlICovXFxuLmxlZnR7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cykgMCAwIHZhcigtLWJvcmRlclJhZGl1cyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCAycHggdmFyKC0tc2hhZG93KTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDhweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxufVxcblxcbi5sZWZ0U2lkZUhlYWRlcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubGVmdCBoMiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxufVxcblxcbi5mb3JtQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDZweDtcXG4gICAgZmxleC13cmFwOndyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4IDJweCA2cHggNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICByaWdodDogMzBweDtcXG4gICAgdG9wOiAxOXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdExhYmVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RJbnB1dHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogMnB4IDEwcHg7XFxuICAgIGhlaWdodDogMjZweDtcXG4gICAgbWF4LXdpZHRoOiA5MCU7XFxufVxcblxcbi5wcm9qZWN0QnV0dG9ue1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcblxcbi5sZWZ0IC5wcm9qZWN0c0FyZWF7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMTgsIDExNiwgMTE2KTtcXG4gICAgcGFkZGluZzogOHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGJhc2VsaW5lO1xcbiAgICBnYXA6IDE1cHg7XFxuXFxuICAgIFxcbn1cXG5cXG4ucHJvamVjdHNBcmVhIC5wcm9qZWN0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGhlaWdodDogMjlweDtcXG4gICAgd2lkdGg6Zml0LWNvbnRlbnQ7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IDFweCB2YXIoLS1zaGFkb3cpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIFxcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcHggNnB4O1xcbn1cXG5cXG5cXG4ucmVtb3ZlSWNvbntcXG4gICAgd2lkdGg6IDE4cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNSU7XFxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxufVxcblxcblxcbi5pY29uQWRkUHJvamVjdHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICB0b3A6IDBweDtcXG4gICAgcmlnaHQ6IDhweDtcXG4gICAgY29sb3I6IGJsdWU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogZW5kIGxlZnQgc2lkZSAqL1xcblxcbi8qIHJpZ2h0IHNpZGUgKi9cXG4ucmlnaHR7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgdmFyKC0tYm9yZGVyUmFkaXVzKSB2YXIoLS1ib3JkZXJSYWRpdXMpIDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDJweCB2YXIoLS1zaGFkb3cpO1xcblxcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnJpZ2h0U2lkZUhlYWRlcntcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAxcHggdmFyKC0tc2hhZG93KTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNywgMjIzLCAyMDgpO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNDVweDtcXG59XFxuXFxuLnJpZ2h0U2lkZUhlYWRlci5ub0VkaXRIZWFkZXJ7XFxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xcbn1cXG5cXG4udG9kb0NvbnRhaW5lcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XFxuICAgIGJveC1zaGFkb3cgOiAxcHggMXB4IDJweCAxcHggdmFyKC0tc2hhZG93KVxcbn1cXG5cXG4uYWRkVG9kb0ljb257XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgdG9wOiA1cHg7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uYWRkVG9kb0ljb24uYWN0aXZle1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGRUb2RvSWNvbjpkaXNhYmxlZHtcXG4gICAgY3Vyc29yOmF1dG87XFxuICAgIHZpc2liaWxpdHk6aGlkZGVuO1xcbn1cXG5cXG4udG9kb0Zvcm17XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzKTtcXG4gICAgdG9wOiA4cHg7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTE4LCAxMTYsIDExNik7XFxuICAgIHBhZGRpbmc6IDZweDtcXG59XFxuXFxuLnRvZG9Gb3JtIGxpe1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5lZGl0VG9kb0Zvcm0gZGl2Om50aC1jaGlsZCgzKXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZWRpdFRvZG9Gb3JtIGRpdjpudGgtY2hpbGQoMyk6OmJlZm9yZXtcXG4gICAgY29udGVudDogXFxcIuKWvFxcXCI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdG9wOiAzcHg7XFxuICAgIGxlZnQ6IDE5MnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4udG9kb0Zvcm0gaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWF7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMTgsIDExNiwgMTE2KTtcXG4gICAgcGFkZGluZzogMnB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG5zZWxlY3R7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG9Gb3JtIHVsIGxpOm50aC1jaGlsZCgzKTo6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6IFxcXCLilrxcXFwiO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHRvcDogNHB4O1xcbiAgICByaWdodDogMTNweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxudGV4dGFyZWF7XFxuICAgIGhlaWdodDogMTUycHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG59XFxuXFxuLnRvZG9Gb3JtIGlucHV0OmZvY3Vze1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgXFxufVxcblxcblxcbi50b2RvZm9ybUhlYWRlcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTE4LCAxMTYsIDExNik7XFxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcXG59XFxuXFxuLnRvZG9Gb3JtIC5sYXN0TGl7XFxuICAgIGhlaWdodDogMTU1cHg7XFxufVxcblxcbi50b2RvRm9ybSBidXR0b246Zmlyc3Qtb2YtdHlwZXtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi50b2RvRm9ybUJ1dHRvbntcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZsb2F0OiByaWdodDtcXG59XFxuXFxuLnRvZG9Gb3JtQnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY4LCAxNjgsIDE2OCk7XFxufVxcblxcbi5hbGxUb2Rvc3tcXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbn1cXG5cXG4udG9kb0xpe1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjhweDtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXG5cXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IDFweCB2YXIoLS1zaGFkb3cpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnRvZG9UaXRsZVB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmR1ZURhdGVQe1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5kcm9wRG93bkljb257XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5kcm9wRG93bkNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kb0xpLmV4cGFuZHtcXG4gICAgaGVpZ2h0OiA0NzJweDtcXG59XFxuXFxuLnRvZG9MaS5leHBhbmQubm9uRWRpdE1vZGV7XFxuICAgIGhlaWdodDogNDM5cHggO1xcbn1cXG5cXG4udG9kb0xpLmxvd3tcXG4gICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICNmOWU1NGU7XFxufVxcbi50b2RvTGkubWVkaXVte1xcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgI2Y1YTY1ZDtcXG59XFxuLnRvZG9MaS5oaWdoe1xcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgI2M3NWU1ZTtcXG59XFxuXFxuLnRvcENvbnRhaW5lcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG8gMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4udG9kb0xhYmVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDZweDtcXG4gICAgY3Vyc29yOnBvaW50ZXIgO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvTGFiZWwgcDpmaXJzdC1jaGlsZHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kb0xpIHAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kb0xhYmVsOjpiZWZvcmV7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL2ltZy9ncmVlbkNoZWNrTWFyay5zdmdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIHdpZHRoOiAyNnB4O1xcbiAgICBoZWlnaHQ6IDI2cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTM4cHg7XFxuICAgIGJvdHRvbTogMHB4O1xcblxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZVooMTgwZGVnKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKCAwLjU0LCAwLjAxLCAwLCAxLjQ5KTtcXG59XFxuXFxuLmNoZWNrQm94OmNoZWNrZWQgKyBsYWJlbDo6YmVmb3Jle1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZVooMGRlZyk7XFxufVxcblxcbi50b2RvTGFiZWw6OmFmdGVye1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDcyLDE2NCw2OCk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDIycHg7XFxuICAgIGhlaWdodDogMjJweDtcXG4gICAgbGVmdDogLTM4cHg7XFxuICAgIGJvdHRvbTogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5jaGVja0JveHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuLmVkaXRUb2RvRm9ybXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA5NyU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxufVxcblxcbi5lZGl0VG9kb0Zvcm0udmlzaWJsZXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIFxcbn1cXG5cXG4uZWRpdFRvZG9Gb3JtLnZpc2libGUge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDJzOyAvKiBTYWZhcmksIENocm9tZSBhbmQgT3BlcmEgPiAxMi4xICovXFxuICAgICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMnM7IC8qIEZpcmVmb3ggPCAxNiAqL1xcbiAgICAgICAgLW1zLWFuaW1hdGlvbjogZmFkZWluIDJzOyAvKiBJbnRlcm5ldCBFeHBsb3JlciAqL1xcbiAgICAgICAgIC1vLWFuaW1hdGlvbjogZmFkZWluIDJzOyAvKiBPcGVyYSA8IDEyLjEgKi9cXG4gICAgICAgICAgICBhbmltYXRpb246IGZhZGVpbiAycztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZWluIHtcXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cXG4gICAgdG8gICB7IG9wYWNpdHk6IDE7IH1cXG59XFxuXFxuLyogRmlyZWZveCA8IDE2ICovXFxuQC1tb3ota2V5ZnJhbWVzIGZhZGVpbiB7XFxuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XFxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XFxufVxcblxcbi8qIFNhZmFyaSwgQ2hyb21lIGFuZCBPcGVyYSA+IDEyLjEgKi9cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cXG4gICAgdG8gICB7IG9wYWNpdHk6IDE7IH1cXG59XFxuXFxuLyogSW50ZXJuZXQgRXhwbG9yZXIgKi9cXG5ALW1zLWtleWZyYW1lcyBmYWRlaW4ge1xcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxcbiAgICB0byAgIHsgb3BhY2l0eTogMTsgfVxcbn1cXG5cXG4udG9kb0VkaXREaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG9FZGl0RGl2IGxhYmVse1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG5cXG4udG9kb0VkaXREaXYgaW5wdXQsLnRvZG9FZGl0RGl2IHNlbGVjdHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDExOCwgMTE2LCAxMTYpO1xcbiAgICBwYWRkaW5nOiAycHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAxNDBweDtcXG5cXG59XFxuXFxuLnRvZG9FZGl0TGFzdERpdntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MHB4IDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgICBoZWlnaHQ6IDEzMnB4O1xcbn1cXG5cXG4udG9kb0VkaXRMYXN0RGl2IHRleHRhcmVhe1xcbiAgIGhlaWdodDogMTMycHg7XFxuICAgcGFkZGluZzogNnB4IDEwcHg7XFxufVxcblxcbnRleHRhcmVhe1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5lZGl0QnV0dG9uc1NlY3Rpb257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmVkaXRCdXR0b257XFxuICAgIHBhZGRpbmc6IDRweCA4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxufVxcbi5lZGl0QnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMTcsIDIxNyk7XFxufVxcbi5lZGl0RGVsZXRle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg2LCAxLCAxKTtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi5lZGl0RGVsZXRlOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQwLCAyLCAyKTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuLyogZW5kIHJpZ2h0IHNpZGUgKi9cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB4SW1nIGZyb20gJy4vLi4vaW1nL2Nsb3NlLXRoaWNrLnN2Zyc7XG5pbXBvcnQgZHJvcERvd24gZnJvbSBcIi4vLi4vaW1nL2Rvd25BcnJvdy5zdmdcIjtcbmltcG9ydCB1cCBmcm9tIFwiLi8uLi9pbWcvdXBBcnJvdy5zdmdcIjtcbmltcG9ydCBwcm9qZWN0QWRkSWNvbiBmcm9tIFwiLi8uLi9pbWcvcGx1cy1ib3gtb3V0bGluZS5zdmdcIlxuXG5sZXQgRE9NX01vZHVsZSA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICBsZXQgc2V0UHJvamVjdEFkZFNyYyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGxlZnRTaWRlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnRTaWRlSGVhZGVyJyk7XG4gICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoJ2ljb25BZGRQcm9qZWN0Jyk7XG4gICAgICAgIGltZy5zcmMgPSBwcm9qZWN0QWRkSWNvbjtcbiAgICAgICAgbGVmdFNpZGVIZWFkZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICB9O1xuXG4gICAgbGV0IHNldEFkZFRvZG9JY29uSW1nID0gKCkgPT4ge1xuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRvZG9JY29uJyk7XG4gICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnaW1nJyApO1xuICAgICAgICBpbWcuc3JjID0gcHJvamVjdEFkZEljb247XG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZCggaW1nICk7XG4gICAgfTtcblxuICAgIGxldCBwcm9qZWN0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c0FyZWEnKTtcbiAgICBsZXQgYWRkUHJvamVjdCA9IChpbnNpZGVUZXh0LCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJfXCIgKyBpbmRleCk7XG5cbiAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHAuaW5uZXJUZXh0ID0gaW5zaWRlVGV4dDtcblxuICAgICAgICBsZXQgeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB4LmNsYXNzTGlzdCA9IFwicmVtb3ZlSWNvblwiO1xuICAgICAgICB4LnNyYyA9IHhJbWc7XG5cbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQocCk7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKHgpO1xuICAgICAgICBwcm9qZWN0QXJlYS5hcHBlbmRDaGlsZChsaSk7XG5cbiAgICB9O1xuXG4gICAgbGV0IGxlZnRTaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQnKTtcbiAgICBsZXQgcHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgICAgIGxldCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm1Db250YWluZXJcIik7XG5cbiAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBsZXQgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdExhYmVsXCIpO1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdElucHV0XCIpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInByb2plY3RCdXR0b25cIik7XG4gICAgICAgIGNhbmNlbC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEJ1dHRvblwiKTtcbiAgICAgICAgY2FuY2VsLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWxCdXR0b25cIik7XG5cblxuICAgICAgICBwLmlubmVyVGV4dCA9IFwiUHJvamVjdCBOYW1lXCI7XG4gICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSBcIkNyZWF0ZVwiO1xuICAgICAgICBjYW5jZWwuaW5uZXJUZXh0ID0gXCJDYW5jZWxcIjtcblxuXG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHApO1xuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWwpO1xuXG4gICAgICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuXG4gICAgICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZVByb2plY3RGb3JtKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBsZXQgcmVtb3ZlUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtQ29udGFpbmVyXCIpO1xuICAgICAgICBsZWZ0U2lkZS5yZW1vdmVDaGlsZChmb3JtKTtcbiAgICB9O1xuXG4gICAgbGV0IHJlbW92ZVByb2plY3QgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdC4ke2luZGV4fWApO1xuICAgICAgICBwcm9qZWN0QXJlYS5yZW1vdmVDaGlsZChlbGVtZW50KTtcblxuICAgICAgICBsZXQgYWxsdG9kb3MgPSBwcm9qZWN0QXJlYS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgbGV0IGtleSA9IGFsbHRvZG9zLm5leHRFbGVtZW50U2libGluZztcblxuICAgICAgICBsZXQgbmV3SW5kZXggPSAwO1xuICAgICAgICB3aGlsZSAoa2V5ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGtleS5jbGFzc05hbWUgPSBgcHJvamVjdCBfJHtuZXdJbmRleH1gO1xuICAgICAgICAgICAgbmV3SW5kZXgrKztcbiAgICAgICAgICAgIGtleSA9IGtleS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICBsZXQgdXBkYXRlUmlnaHRTaWRlID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgdXBkYXRlUmlnaHRIZWFkZXIocHJvamVjdC50aXRsZSk7XG4gICAgICAgIHVwZGF0ZVRvRG9TZWN0aW9uKHByb2plY3QudG9kb0xpc3QpO1xuICAgICAgICBhZGRUb2RvQnV0dG9uKCk7XG4gICAgfTtcblxuICAgIGxldCB1cGRhdGVSaWdodEhlYWRlciA9ICh0ZXh0KSA9PiB7XG4gICAgICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJpZ2h0U2lkZUhlYWRlciBoMlwiKTtcbiAgICAgICAgaGVhZGVyLmlubmVyVGV4dCA9IGBUb2RvcyBmcm9tIHByb2plY3QgOiAke3RleHR9YDtcbiAgICB9O1xuICAgIGxldCByaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCcpO1xuXG4gICAgbGV0IHVwZGF0ZVRvRG9TZWN0aW9uID0gKHRvZG9MaXN0KSA9PiB7XG4gICAgICAgIGxldCBhbGxUb2Rvc0NvbnRhaW5lciA9IHJpZ2h0LmZpcnN0RWxlbWVudENoaWxkLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgYWxsVG9kb3NDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgdG9kb0xpc3QuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ3RvZG9MaScpO1xuICAgICAgICAgICAgbGkuaWQgPSBgdG9kb18ke2luZGV4fWA7XG5cbiAgICAgICAgICAgIGxldCB0b3BDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRvcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b3BDb250YWluZXInKTtcblxuICAgICAgICAgICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tCb3gnKTtcbiAgICAgICAgICAgIGlmIChrZXkuZG9uZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGVja2JveC5pZCA9IGB0b2RvQ2hlY2tfJHtpbmRleH1gXG5cblxuICAgICAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwLmNsYXNzTGlzdC5hZGQoJ3RvZG9UaXRsZVAnKTtcbiAgICAgICAgICAgIHAuaW5uZXJUZXh0ID0ga2V5LnRpdGxlO1xuXG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgndG9kb0xhYmVsJyk7XG4gICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGB0b2RvQ2hlY2tfJHtpbmRleH1gKTtcbiAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnbmFtZScsIGB0b2RvXyR7aW5kZXh9YCk7XG4gICAgICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChwKTtcblxuICAgICAgICAgICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2R1ZURhdGVQJyk7XG4gICAgICAgICAgICBpZiAoa2V5LmR1ZURhdGUgPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGR1ZURhdGUuaW5uZXJUZXh0ID0gXCJObyBEdWUgRGF0ZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZHVlRGF0ZS5pbm5lclRleHQgPSBrZXkuZHVlRGF0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2Ryb3BEb3duQ29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltZy5zcmMgPSBkcm9wRG93bjtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoJ2Ryb3BEb3duSWNvbicpO1xuXG5cblxuXG4gICAgICAgICAgICB0b3BDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpXG4gICAgICAgICAgICB0b3BDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgdG9wQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgICAgICAgdG9wQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG5cblxuICAgICAgICAgICAgbGV0IGVkaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICAgICAgZWRpdEZvcm0uY2xhc3NMaXN0LmFkZCgnZWRpdFRvZG9Gb3JtJyk7XG5cbiAgICAgICAgICAgIGxldCBkaXZPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdk9uZS5jbGFzc0xpc3QuYWRkKCd0b2RvRWRpdERpdicpO1xuICAgICAgICAgICAgbGV0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgdGl0bGVMYWJlbC5pbm5lclRleHQgPSBcIlRpdGxlXCI7XG4gICAgICAgICAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShgZm9yYCwgYHRpdGxlRWRpdCR7aW5kZXh9YCk7XG4gICAgICAgICAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0ga2V5LnRpdGxlO1xuICAgICAgICAgICAgdGl0bGVJbnB1dC5pZCA9IGB0aXRsZUVkaXQke2luZGV4fWA7XG5cbiAgICAgICAgICAgIGRpdk9uZS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICAgICAgICAgIGRpdk9uZS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICAgICAgICAgICAgbGV0IGRpdlR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2VHdvLmNsYXNzTGlzdC5hZGQoJ3RvZG9FZGl0RGl2Jyk7XG4gICAgICAgICAgICBsZXQgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGR1ZURhdGVMYWJlbC5pbm5lclRleHQgPSBcIkR1ZSBEYXRlXCI7XG4gICAgICAgICAgICBkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgZHVlRWRpdCR7aW5kZXh9YCk7XG4gICAgICAgICAgICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgICAgICAgICAgZHVlRGF0ZUlucHV0LmlkID0gYGR1ZUVkaXQke2luZGV4fWA7XG4gICAgICAgICAgICBkdWVEYXRlSW5wdXQuZGVmYXVsdFZhbHVlID0ga2V5LmR1ZURhdGU7XG4gICAgICAgICAgICBkaXZUd28uYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcbiAgICAgICAgICAgIGRpdlR3by5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuXG4gICAgICAgICAgICBsZXQgZGl2VGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdlRocmVlLmNsYXNzTGlzdC5hZGQoJ3RvZG9FZGl0RGl2Jyk7XG4gICAgICAgICAgICBsZXQgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBwcmlvcml0eUxhYmVsLmlubmVyVGV4dCA9IFwiUHJpb3JpdHlcIlxuICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGBwcmlvcml0eUVkaXQke2luZGV4fWApO1xuICAgICAgICAgICAgbGV0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgICAgIHByaW9yaXR5SW5wdXQuaWQgPSBgcHJpb3JpdHlFZGl0JHtpbmRleH1gO1xuICAgICAgICAgICAgbGV0IHNlbGVjdE9wdGlvbnMgPSBbJ2xvdycsICdtZWRpdW0nLCAnaGlnaCddO1xuXG4gICAgICAgICAgICBzZWxlY3RPcHRpb25zLmZvckVhY2gob3AgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gb3A7XG4gICAgICAgICAgICAgICAgaWYgKGtleS5wcmlvcml0eSA9PSBvcCkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRpdlRocmVlLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgICAgICAgICAgZGl2VGhyZWUuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG5cbiAgICAgICAgICAgIGxldCBkaXZGb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXZGb3VyLmNsYXNzTGlzdC5hZGQoJ3RvZG9FZGl0RGl2Jyk7XG4gICAgICAgICAgICBkaXZGb3VyLmNsYXNzTGlzdC5hZGQoJ3RvZG9FZGl0TGFzdERpdicpO1xuICAgICAgICAgICAgbGV0IGRlc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGRlc0xhYmVsLmlubmVyVGV4dCA9IFwiRGVzY3JpcHRpb25cIjtcbiAgICAgICAgICAgIGxldCBkZXNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgICBkZXNJbnB1dC52YWx1ZSA9IGtleS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGRpdkZvdXIuYXBwZW5kQ2hpbGQoZGVzTGFiZWwpO1xuICAgICAgICAgICAgZGl2Rm91ci5hcHBlbmRDaGlsZChkZXNJbnB1dCk7XG5cbiAgICAgICAgICAgIGxldCBkaXZGaXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXZGaXZlLmNsYXNzTGlzdC5hZGQoJ3RvZG9FZGl0RGl2Jyk7XG4gICAgICAgICAgICBkaXZGaXZlLmNsYXNzTGlzdC5hZGQoJ3RvZG9FZGl0TGFzdERpdicpO1xuICAgICAgICAgICAgbGV0IG5vdGVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgbm90ZXNMYWJlbC5pbm5lclRleHQgPSBcIk5vdGVzXCI7XG4gICAgICAgICAgICBsZXQgbm90ZXNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgICBub3Rlc0lucHV0LnZhbHVlID0ga2V5Lm5vdGVzO1xuICAgICAgICAgICAgZGl2Rml2ZS5hcHBlbmRDaGlsZChub3Rlc0xhYmVsKTtcbiAgICAgICAgICAgIGRpdkZpdmUuYXBwZW5kQ2hpbGQobm90ZXNJbnB1dCk7XG5cbiAgICAgICAgICAgIGxldCBkaXZTaXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdlNpeC5jbGFzc0xpc3QuYWRkKCdlZGl0QnV0dG9uc1NlY3Rpb24nKTtcblxuICAgICAgICAgICAgbGV0IGRlbGV0ZVRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZVRvZG9CdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlVG9kb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0QnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxldGVUb2RvQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXREZWxldGUnKTtcbiAgICAgICAgICAgIGRlbGV0ZVRvZG9CdXR0b24uaW5uZXJUZXh0ID0gXCJEZWxldGUgVGhpcyBUb2RvXCI7XG5cbiAgICAgICAgICAgIGxldCBlZGl0Q2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBlZGl0Q2FuY2VsLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgICAgIGVkaXRDYW5jZWwuY2xhc3NMaXN0LmFkZCgnZWRpdEJ1dHRvbicpO1xuICAgICAgICAgICAgZWRpdENhbmNlbC5pbm5lclRleHQgPSBcIlVuZG8gRHJhZnRcIjtcblxuXG4gICAgICAgICAgICBlZGl0Q2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSBrZXkudGl0bGU7XG4gICAgICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlID0ga2V5LmR1ZURhdGU7XG4gICAgICAgICAgICAgICAgZGVzSW5wdXQudmFsdWUgPSBrZXkuZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgbm90ZXNJbnB1dC52YWx1ZSA9IGtleS5ub3RlcztcblxuICAgICAgICAgICAgICAgIGlmIChrZXkucHJpb3JpdHkgPT0gJ2xvdycpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoa2V5LnByaW9yaXR5ID09IFwibWVkaXVtXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC5zZWxlY3RlZEluZGV4ID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5SW5wdXQuc2VsZWN0ZWRJbmRleCA9IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCBlZGl0U3VtYml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBlZGl0U3VtYml0LnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgICAgIGVkaXRTdW1iaXQuY2xhc3NMaXN0LmFkZCgnZWRpdEJ1dHRvbicpO1xuICAgICAgICAgICAgZWRpdFN1bWJpdC5jbGFzc0xpc3QuYWRkKCdlZGl0U3VibWl0Jyk7XG4gICAgICAgICAgICBlZGl0U3VtYml0LmlubmVyVGV4dCA9IFwiU3VtYml0IENoYW5nZXNcIjtcbiAgICAgICAgICAgIGRpdlNpeC5hcHBlbmRDaGlsZChkZWxldGVUb2RvQnV0dG9uKTtcbiAgICAgICAgICAgIGRpdlNpeC5hcHBlbmRDaGlsZChlZGl0Q2FuY2VsKTtcbiAgICAgICAgICAgIGRpdlNpeC5hcHBlbmRDaGlsZChlZGl0U3VtYml0KTtcblxuICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZGl2T25lKTtcbiAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGRpdlR3byk7XG4gICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChkaXZUaHJlZSk7XG4gICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChkaXZGb3VyKTtcbiAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGRpdkZpdmUpO1xuICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZGl2U2l4KTtcblxuXG5cblxuXG4gICAgICAgICAgICBsaS5hcHBlbmRDaGlsZCh0b3BDb250YWluZXIpO1xuICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZWRpdEZvcm0pO1xuXG4gICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKGAke2tleS5wcmlvcml0eX1gKTtcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcblxuICAgICAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsaUNsYXNzZXMgPSBBcnJheS5mcm9tKGxpLmNsYXNzTGlzdCk7XG4gICAgICAgICAgICAgICAgaWYgKGxpQ2xhc3Nlcy5pbmNsdWRlcyhcImV4cGFuZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IGRyb3BEb3duO1xuICAgICAgICAgICAgICAgICAgICBlZGl0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKCdleHBhbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IHVwO1xuICAgICAgICAgICAgICAgICAgICBlZGl0Rm9ybS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgYWxsVG9kb3NDb250YWluZXIuYXBwZW5kQ2hpbGQodWwpO1xuXG4gICAgfTtcblxuICAgIGxldCBhZGRUb2RvQnV0dG9uID0gKCkgPT4ge1xuXG4gICAgICAgIGxldCBhZGRUb2RvSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVG9kb0ljb25cIik7XG4gICAgICAgIGFkZFRvZG9JY29uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgfVxuXG4gICAgbGV0IGFkZFRvZG9Gb3JtID0gKCkgPT4ge1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndG9kb0Zvcm0nKTtcbiAgICAgICAgcmlnaHQuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgICAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9mb3JtSGVhZGVyJyk7XG4gICAgICAgIGhlYWRlci5pbm5lclRleHQgPSBcIlRvZG9cIjtcblxuICAgICAgICBsZXQgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGV0IGxhYmVsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbFRpdGxlLmlubmVyVGV4dCA9IFwiVGl0bGVcIlxuICAgICAgICBsZXQgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0VGl0bGUuY2xhc3NMaXN0LmFkZCgnaW5wdXRUaXRsZScpO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChsYWJlbFRpdGxlKTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XG5cbiAgICAgICAgbGV0IGxpVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGV0IGxhYmVsRHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGFiZWxEdWUuaW5uZXJUZXh0ID0gXCJEdWUgRGF0ZVwiXG4gICAgICAgIGxldCBpbnB1dER1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0RHVlLmNsYXNzTGlzdC5hZGQoJ2RhdGVJbnB1dCcpO1xuICAgICAgICBpbnB1dER1ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgICAgICBsaVR3by5hcHBlbmRDaGlsZChsYWJlbER1ZSk7XG4gICAgICAgIGxpVHdvLmFwcGVuZENoaWxkKGlucHV0RHVlKTtcblxuXG4gICAgICAgIGxldCBsaVRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGV0IGxhYmVsUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbFByaW9yaXR5LmlubmVyVGV4dCA9IFwiUHJpb3J0eVwiO1xuICAgICAgICBsZXQgaW5wdXRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXG4gICAgICAgIGxldCBzZWxlY3RPcHRpb25zID0gWydsb3cnLCAnbWVkaXVtJywgJ2hpZ2gnXTtcblxuICAgICAgICBzZWxlY3RPcHRpb25zLmZvckVhY2gob3AgPT4ge1xuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IG9wO1xuICAgICAgICAgICAgaW5wdXRQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9KTtcblxuICAgICAgICBsaVRocmVlLmFwcGVuZENoaWxkKGxhYmVsUHJpb3JpdHkpO1xuICAgICAgICBsaVRocmVlLmFwcGVuZENoaWxkKGlucHV0UHJpb3JpdHkpO1xuXG4gICAgICAgIGxldCBsaUZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaUZvdXIuY2xhc3NMaXN0LmFkZChcImxhc3RMaVwiKTtcbiAgICAgICAgbGV0IGxhYmVsRGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGFiZWxEZXMuaW5uZXJUZXh0ID0gXCJEZXNjcmlwdGlvblwiXG4gICAgICAgIGxldCBpbnB1dERlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRBcmVhJyk7XG4gICAgICAgIGxpRm91ci5hcHBlbmRDaGlsZChsYWJlbERlcyk7XG4gICAgICAgIGxpRm91ci5hcHBlbmRDaGlsZChpbnB1dERlcyk7XG5cbiAgICAgICAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgndG9kb0Zvcm1CdXR0b24nKVxuICAgICAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgndG9kb0FkZEJ1dHRvbicpXG4gICAgICAgIGFkZEJ1dHRvbi5pbm5lclRleHQgPSAnQWRkJztcblxuICAgICAgICBsZXQgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b2RvRm9ybUJ1dHRvbicpXG4gICAgICAgIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b2RvQ2FuY2VsQnV0dG9uJylcbiAgICAgICAgY2FuY2VsQnV0dG9uLmlubmVyVGV4dCA9ICdDYW5jZWwnO1xuXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGxpVHdvKTtcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaVRocmVlKTtcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaUZvdXIpO1xuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxpc3QpO1xuXG4gICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZVRvZG9Gb3JtKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCByZW1vdmVUb2RvRm9ybSA9ICgpID0+IHtcbiAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0Zvcm0nKTtcbiAgICAgICAgcmlnaHQucmVtb3ZlQ2hpbGQoZm9ybSk7XG4gICAgfVxuXG4gICAgbGV0IHJlbW92ZVRvZG9Gb3JtQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICBsZXQgYWRkVG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUb2RvSWNvbicpO1xuICAgICAgICBsZXQgY2hlY2tUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0Zvcm0nKTtcblxuICAgICAgICBhZGRUb2RvQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG4gICAgICAgIGlmIChjaGVja1R3byAhPSBudWxsKSB7XG4gICAgICAgICAgICByZW1vdmVUb2RvRm9ybSgpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgbGV0IHVwZGF0ZVByaW9yaXR5TWFya2VyID0gKGluZGV4LCBvbGRQcmlvcml0eSwgbmV3UHJpb3JpdHkpID0+IHtcbiAgICAgICAgbGV0IHRvZG9MaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0b2RvXyR7aW5kZXh9YCk7XG4gICAgICAgIHRvZG9MaS5jbGFzc0xpc3QucmVtb3ZlKG9sZFByaW9yaXR5KTtcbiAgICAgICAgdG9kb0xpLmNsYXNzTGlzdC5hZGQobmV3UHJpb3JpdHkpO1xuICAgIH07XG5cbiAgICBsZXQgdXBkYXRlVGl0bGUgPSAoaW5kZXgsIG5ld1RpdGxlKSA9PiB7XG4gICAgICAgIGxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdG9kb18ke2luZGV4fSAudG9kb1RpdGxlUGApO1xuICAgICAgICB0b2RvVGl0bGUuaW5uZXJUZXh0ID0gbmV3VGl0bGU7XG4gICAgfTtcblxuICAgIGxldCB1cGRhdGVEdWVEYXRlID0gKGluZGV4LCBuZXdEdWVEYXRlKSA9PiB7XG4gICAgICAgIGxldCB0b2RvRHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RvZG9fJHtpbmRleH0gLmR1ZURhdGVQYCk7XG4gICAgICAgIHRvZG9EdWUuaW5uZXJUZXh0ID0gKG5ld0R1ZURhdGUgPT0gXCJcIikgPyBcIk5vIER1ZSBEYXRlXCIgOiBuZXdEdWVEYXRlO1xuXG4gICAgfTtcblxuICAgIGxldCByZW1vdmVUb2RvID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGxldCB0b2RvVG9CZVJlbW92ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdG9kb18ke2luZGV4fWApO1xuICAgICAgICBsZXQgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGxUb2RvcyB1bCcpO1xuICAgICAgICBjb250YWluZXJzLnJlbW92ZUNoaWxkKHRvZG9Ub0JlUmVtb3ZlZCk7XG5cblxuICAgICAgICBsZXQga2V5ID0gY29udGFpbmVycy5maXJzdEVsZW1lbnRDaGlsZDtcblxuICAgICAgICBsZXQgbmV3SW5kZXggPSAwO1xuICAgICAgICB3aGlsZSAoa2V5ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGtleS5pZCA9IGB0b2RvXyR7bmV3SW5kZXh9YDtcbiAgICAgICAgICAgIG5ld0luZGV4Kys7XG4gICAgICAgICAgICBrZXkgPSBrZXkubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGxldCBjbGVhclJpZ2h0U2lkZSA9IChuZXdIZWFkZXIpID0+IHtcbiAgICAgICAgcmVtb3ZlVG9kb0Zvcm1CdXR0b24oKTtcbiAgICAgICAgdXBkYXRlUmlnaHRIZWFkZXIobmV3SGVhZGVyKTtcbiAgICAgICAgdXBkYXRlVG9Eb1NlY3Rpb24oW10pO1xuICAgIH07XG5cbiAgICBsZXQgbm9uRWRpdGFibGVUb2RvID0gKHRvZG9MaXN0KSA9PiB7XG4gICAgICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIHRvZG9MaXN0LmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKCd0b2RvTGknKTtcbiAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ25vbkVkaXRNb2RlJyk7XG4gICAgICAgICAgICBsaS5pZCA9IGB0b2RvXyR7aW5kZXh9YDtcblxuICAgICAgICAgICAgbGV0IHRvcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdG9wQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvcENvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja0JveCcpO1xuICAgICAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGtleS5kb25lID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ3RydWUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoZWNrYm94LmlkID0gYHRvZG9DaGVja18ke2luZGV4fWBcblxuXG4gICAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHAuY2xhc3NMaXN0LmFkZCgndG9kb1RpdGxlUCcpO1xuICAgICAgICAgICAgcC5pbm5lclRleHQgPSBrZXkudGl0bGU7XG5cbiAgICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCd0b2RvTGFiZWwnKTtcbiAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYHRvZG9DaGVja18ke2luZGV4fWApO1xuICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCduYW1lJywgYHRvZG9fJHtpbmRleH1gKTtcbiAgICAgICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHApO1xuXG4gICAgICAgICAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZCgnZHVlRGF0ZVAnKTtcbiAgICAgICAgICAgIGlmIChrZXkuZHVlRGF0ZSA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgZHVlRGF0ZS5pbm5lclRleHQgPSBcIk5vIER1ZSBEYXRlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkdWVEYXRlLmlubmVyVGV4dCA9IGtleS5kdWVEYXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZHJvcERvd25Db250YWluZXInKTtcblxuICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaW1nLnNyYyA9IGRyb3BEb3duO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCgnZHJvcERvd25JY29uJyk7XG5cblxuXG5cbiAgICAgICAgICAgIHRvcENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveClcbiAgICAgICAgICAgIHRvcENvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICB0b3BDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgICAgICAgICB0b3BDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcblxuXG4gICAgICAgICAgICBsZXQgZWRpdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgICAgICBlZGl0Rm9ybS5jbGFzc0xpc3QuYWRkKCdlZGl0VG9kb0Zvcm0nKTtcblxuICAgICAgICAgICAgbGV0IGRpdk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2T25lLmNsYXNzTGlzdC5hZGQoJ3RvZG9FZGl0RGl2Jyk7XG4gICAgICAgICAgICBsZXQgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICB0aXRsZUxhYmVsLmlubmVyVGV4dCA9IFwiVGl0bGVcIjtcbiAgICAgICAgICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKGBmb3JgLCBgdGl0bGVFZGl0JHtpbmRleH1gKTtcbiAgICAgICAgICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSBrZXkudGl0bGU7XG4gICAgICAgICAgICB0aXRsZUlucHV0LmlkID0gYHRpdGxlRWRpdCR7aW5kZXh9YDtcbiAgICAgICAgICAgIHRpdGxlSW5wdXQucmVhZE9ubHkgPSB0cnVlO1xuXG4gICAgICAgICAgICBkaXZPbmUuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgICAgICAgICBkaXZPbmUuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgICAgICAgICAgIGxldCBkaXZUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdlR3by5jbGFzc0xpc3QuYWRkKCd0b2RvRWRpdERpdicpO1xuICAgICAgICAgICAgbGV0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBkdWVEYXRlTGFiZWwuaW5uZXJUZXh0ID0gXCJEdWUgRGF0ZVwiO1xuICAgICAgICAgICAgZHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYGR1ZUVkaXQke2luZGV4fWApO1xuICAgICAgICAgICAgbGV0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgICAgIGR1ZURhdGVJbnB1dC5pZCA9IGBkdWVFZGl0JHtpbmRleH1gO1xuICAgICAgICAgICAgZHVlRGF0ZUlucHV0LmRlZmF1bHRWYWx1ZSA9IGtleS5kdWVEYXRlO1xuICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnJlYWRPbmx5ID0gdHJ1ZTtcblxuICAgICAgICAgICAgZGl2VHdvLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG4gICAgICAgICAgICBkaXZUd28uYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcblxuICAgICAgICAgICAgbGV0IGRpdlRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXZUaHJlZS5jbGFzc0xpc3QuYWRkKCd0b2RvRWRpdERpdicpO1xuICAgICAgICAgICAgbGV0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC5pbm5lclRleHQgPSBcIlByaW9yaXR5XCJcbiAgICAgICAgICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgcHJpb3JpdHlFZGl0JHtpbmRleH1gKTtcbiAgICAgICAgICAgIGxldCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHByaW9yaXR5SW5wdXQuaWQgPSBgcHJpb3JpdHlFZGl0JHtpbmRleH1gO1xuICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9IGtleS5wcmlvcml0eTtcbiAgICAgICAgICAgIHByaW9yaXR5SW5wdXQucmVhZE9ubHkgPSB0cnVlO1xuXG5cblxuICAgICAgICAgICAgZGl2VGhyZWUuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gICAgICAgICAgICBkaXZUaHJlZS5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcblxuICAgICAgICAgICAgbGV0IGRpdkZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdkZvdXIuY2xhc3NMaXN0LmFkZCgndG9kb0VkaXREaXYnKTtcbiAgICAgICAgICAgIGRpdkZvdXIuY2xhc3NMaXN0LmFkZCgndG9kb0VkaXRMYXN0RGl2Jyk7XG4gICAgICAgICAgICBsZXQgZGVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgZGVzTGFiZWwuaW5uZXJUZXh0ID0gXCJEZXNjcmlwdGlvblwiO1xuICAgICAgICAgICAgbGV0IGRlc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgICAgIGRlc0lucHV0LnJlYWRPbmx5ID0gdHJ1ZTtcblxuICAgICAgICAgICAgZGVzSW5wdXQudmFsdWUgPSBrZXkuZGVzY3JpcHRpb247XG4gICAgICAgICAgICBkaXZGb3VyLmFwcGVuZENoaWxkKGRlc0xhYmVsKTtcbiAgICAgICAgICAgIGRpdkZvdXIuYXBwZW5kQ2hpbGQoZGVzSW5wdXQpO1xuXG4gICAgICAgICAgICBsZXQgZGl2Rml2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2Rml2ZS5jbGFzc0xpc3QuYWRkKCd0b2RvRWRpdERpdicpO1xuICAgICAgICAgICAgZGl2Rml2ZS5jbGFzc0xpc3QuYWRkKCd0b2RvRWRpdExhc3REaXYnKTtcbiAgICAgICAgICAgIGxldCBub3Rlc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIG5vdGVzTGFiZWwuaW5uZXJUZXh0ID0gXCJOb3Rlc1wiO1xuICAgICAgICAgICAgbGV0IG5vdGVzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgbm90ZXNJbnB1dC5yZWFkT25seSA9IHRydWU7XG5cbiAgICAgICAgICAgIG5vdGVzSW5wdXQudmFsdWUgPSBrZXkubm90ZXM7XG4gICAgICAgICAgICBkaXZGaXZlLmFwcGVuZENoaWxkKG5vdGVzTGFiZWwpO1xuICAgICAgICAgICAgZGl2Rml2ZS5hcHBlbmRDaGlsZChub3Rlc0lucHV0KTtcblxuICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZGl2T25lKTtcbiAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGRpdlR3byk7XG4gICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChkaXZUaHJlZSk7XG4gICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChkaXZGb3VyKTtcbiAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGRpdkZpdmUpO1xuXG5cbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKHRvcENvbnRhaW5lcik7XG4gICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChlZGl0Rm9ybSk7XG5cbiAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoYCR7a2V5LnByaW9yaXR5fWApO1xuICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuXG4gICAgICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGxpQ2xhc3NlcyA9IEFycmF5LmZyb20obGkuY2xhc3NMaXN0KTtcbiAgICAgICAgICAgICAgICBpZiAobGlDbGFzc2VzLmluY2x1ZGVzKFwiZXhwYW5kXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZCcpO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gZHJvcERvd247XG4gICAgICAgICAgICAgICAgICAgIGVkaXRGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZCcpO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gdXA7XG4gICAgICAgICAgICAgICAgICAgIGVkaXRGb3JtLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdWw7XG4gICAgfVxuXG4gICAgbGV0IHNldHVwQWxsVG9kb1Byb2plY3QgPSAocHJvamVjdExpc3QpID0+IHtcbiAgICAgICAgYWRkSGVhZGVyTWFyZ2luKCk7XG4gICAgICAgIHJlbW92ZVRvZG9Gb3JtQnV0dG9uKCk7XG4gICAgICAgIHVwZGF0ZVJpZ2h0SGVhZGVyKCdBbGwgVG9kb3MnKTtcbiAgICAgICAgbGV0IGFsbFRvZG9zQ29udGFpbmVyID0gcmlnaHQuZmlyc3RFbGVtZW50Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICBhbGxUb2Rvc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdWwgPSBub25FZGl0YWJsZVRvZG8ocHJvamVjdExpc3RbaV0udG9kb0xpc3QpO1xuICAgICAgICAgICAgYWxsVG9kb3NDb250YWluZXIuYXBwZW5kQ2hpbGQodWwpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGxldCByZW1vdmVIZWFkZXJNYXJnaW4gPSAoKSA9PiB7XG4gICAgICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnJpZ2h0U2lkZUhlYWRlcicgKTsgXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdub0VkaXRIZWFkZXInKTtcbiAgICB9O1xuXG4gICAgbGV0IGFkZEhlYWRlck1hcmdpbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucmlnaHRTaWRlSGVhZGVyJyApOyBcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ25vRWRpdEhlYWRlcicpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFByb2plY3QsIHByb2plY3RGb3JtLCByZW1vdmVQcm9qZWN0Rm9ybSxcbiAgICAgICAgcmVtb3ZlUHJvamVjdCwgdXBkYXRlUmlnaHRTaWRlLFxuICAgICAgICBhZGRUb2RvRm9ybSwgcmVtb3ZlVG9kb0Zvcm0sIHJlbW92ZVRvZG9Gb3JtQnV0dG9uLFxuICAgICAgICB1cGRhdGVQcmlvcml0eU1hcmtlciwgdXBkYXRlVGl0bGUsIHVwZGF0ZUR1ZURhdGUsXG4gICAgICAgIHJlbW92ZVRvZG8sIGNsZWFyUmlnaHRTaWRlLCBzZXR1cEFsbFRvZG9Qcm9qZWN0LFxuICAgICAgICByZW1vdmVIZWFkZXJNYXJnaW4sIHJlbW92ZUhlYWRlck1hcmdpbixcbiAgICAgICAgc2V0UHJvamVjdEFkZFNyYywgc2V0QWRkVG9kb0ljb25JbWdcbiAgICB9O1xufVxuKSgpO1xuXG5leHBvcnQgZGVmYXVsdCBET01fTW9kdWxlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBkb21DaGFuZ2VyIGZyb20gJy4vRE9Nc2NyaXB0JztcblxuY2xhc3MgVG9kb0l0ZW17XG4gICAgY29uc3RydWN0b3IoIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIC4uLmFyZ3Mpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLm5vdGVzID0gISggYXJnc1swXSApID8gJyc6IGFyZ3NbMF07XG4gICAgICAgIHRoaXMuZG9uZSA9ICEoIGFyZ3NbMV0gKSA/IGZhbHNlOiB0cnVlO1xuICAgIH1cbn1cblxuY2xhc3MgUHJvamVjdHtcbiAgICBjb25zdHJ1Y3RvciggdGl0bGUpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMudG9kb0xpc3QgPSBbXTtcbiAgICB9XG59XG5cbmxldCBwcm9qZWN0TGlzdCA9IFtdO1xubGV0IGN1cnJlbnRQcm9qZWN0SW5kZXg7XG5kb21DaGFuZ2VyLnNldFByb2plY3RBZGRTcmMoKTtcbmRvbUNoYW5nZXIuc2V0QWRkVG9kb0ljb25JbWcoKTtcblxuZnVuY3Rpb24gc2V0VG9kb0J1dHRvbnNMaXN0bmVycygpe1xuICAgICAgICBsZXQgc3VtYml0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0QnV0dG9uc1NlY3Rpb24gLmVkaXRTdWJtaXQnKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHN1bWJpdHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgc3VtYml0c1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgbGV0IHRvZG9JbmRleCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZC5zcGxpdCgnXycpWzFdO1xuICAgICAgICAgICAgbGV0IG5ld1RpdGxlID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcudmFsdWU7XG4gICAgICAgICAgICBsZXQgbmV3RHVlRGF0ZSA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLm5leHRFbGVtZW50U2libGluZy52YWx1ZTtcbiAgICAgICAgICAgIGxldCBuZXdQcmlvcml0eSA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcudmFsdWU7XG4gICAgICAgICAgICBsZXQgbmV3RGVzID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcudmFsdWU7XG4gICAgICAgICAgICBsZXQgbmV3Tm90ZXMgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmZpcnN0RWxlbWVudENoaWxkLm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcudmFsdWU7XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKCAhKHByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRvZG9MaXN0W3RvZG9JbmRleF0udGl0bGUgPT09IG5ld1RpdGxlKSApe1xuICAgICAgICAgICAgICAgIGRvbUNoYW5nZXIudXBkYXRlVGl0bGUodG9kb0luZGV4LCBuZXdUaXRsZSk7XG4gICAgICAgICAgICAgICAgcHJvamVjdExpc3RbY3VycmVudFByb2plY3RJbmRleF0udG9kb0xpc3RbdG9kb0luZGV4XS50aXRsZSA9IG5ld1RpdGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoICEocHJvamVjdExpc3RbY3VycmVudFByb2plY3RJbmRleF0udG9kb0xpc3RbdG9kb0luZGV4XS5kdWVEYXRlID09PSBuZXdEdWVEYXRlKSApe1xuICAgICAgICAgICAgICAgIGRvbUNoYW5nZXIudXBkYXRlRHVlRGF0ZSggdG9kb0luZGV4LCBuZXdEdWVEYXRlKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdFtjdXJyZW50UHJvamVjdEluZGV4XS50b2RvTGlzdFt0b2RvSW5kZXhdLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoICEocHJvamVjdExpc3RbY3VycmVudFByb2plY3RJbmRleF0udG9kb0xpc3RbdG9kb0luZGV4XS5wcmlvcml0eSA9PSBuZXdQcmlvcml0eSkpe1xuICAgICAgICAgICAgICAgIGRvbUNoYW5nZXIudXBkYXRlUHJpb3JpdHlNYXJrZXIodG9kb0luZGV4ICwgcHJvamVjdExpc3RbY3VycmVudFByb2plY3RJbmRleF0udG9kb0xpc3RbdG9kb0luZGV4XS5wcmlvcml0eSwgbmV3UHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgIHByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRvZG9MaXN0W3RvZG9JbmRleF0ucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdFtjdXJyZW50UHJvamVjdEluZGV4XS50b2RvTGlzdFt0b2RvSW5kZXhdLmRlc2NyaXB0aW9uID0gbmV3RGVzO1xuICAgICAgICAgICAgICAgIHByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRvZG9MaXN0W3RvZG9JbmRleF0ubm90ZXMgPSBuZXdOb3RlcztcblxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCBcImxvY2FsUHJvamVjdExpc3RcIiAsIEpTT04uc3RyaW5naWZ5KCBwcm9qZWN0TGlzdCkgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICBsZXQgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvTGkgLmNoZWNrQm94Jyk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGNoZWNrYm94ZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICBjaGVja2JveGVzW2ldLmFkZEV2ZW50TGlzdGVuZXIoICdjaGFuZ2UnICwgKCBldmVudCkgPT57XG4gICAgICAgICAgICBsZXQgdG9kb0luZGV4ID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZC5zcGxpdCgnXycpWzFdO1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdExpc3RbY3VycmVudFByb2plY3RJbmRleF0udG9kb0xpc3RbdG9kb0luZGV4XS5kb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSggXCJsb2NhbFByb2plY3RMaXN0XCIgLCBKU09OLnN0cmluZ2lmeSggcHJvamVjdExpc3QpICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRvZG9MaXN0W3RvZG9JbmRleF0uZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCBcImxvY2FsUHJvamVjdExpc3RcIiAsIEpTT04uc3RyaW5naWZ5KCBwcm9qZWN0TGlzdCkgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdEJ1dHRvbnNTZWN0aW9uIC5lZGl0RGVsZXRlJyk7XG4gICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBkZWxldGVCdXR0b25zLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJyAsICggZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGxldCB0b2RvSW5kZXggPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQuc3BsaXQoJ18nKVsxXTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRvZG9MaXN0LnNwbGljZSggdG9kb0luZGV4LCAxKTtcbiAgICAgICAgICAgIGRvbUNoYW5nZXIucmVtb3ZlVG9kbyggdG9kb0luZGV4KTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCBcImxvY2FsUHJvamVjdExpc3RcIiAsIEpTT04uc3RyaW5naWZ5KCBwcm9qZWN0TGlzdCkgKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0TGlzdG5lciggaW5kZXggKXtcbiAgICBsZXQgeEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIGAucHJvamVjdC5fJHtpbmRleH0gaW1nYCApO1xuICAgICAgICB4QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBsZXQgY2xhc3NlcyA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdDtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IGNsYXNzZXNbMV0uc3BsaXQoXCJcIilbMV07XG5cbiAgICAgICAgICAgIGlmKCBpbmRleCA9PSBjdXJyZW50UHJvamVjdEluZGV4ICl7XG4gICAgICAgICAgICAgICAgZG9tQ2hhbmdlci5jbGVhclJpZ2h0U2lkZSgnZGVsZXRlZCA6XScpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0SW5kZXggPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKCBpbmRleCA8IGN1cnJlbnRQcm9qZWN0SW5kZXgpe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0SW5kZXgtLTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJvamVjdExpc3Quc3BsaWNlKCBpbmRleCwgMSk7XG4gICAgICAgICAgICBkb21DaGFuZ2VyLnJlbW92ZVByb2plY3QoY2xhc3Nlc1sxXSlcbiAgICAgICAgICAgIGlmKCBwcm9qZWN0TGlzdC5sZW5ndGggPT0gMCApe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0SW5kZXggPSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oIFwibG9jYWxQcm9qZWN0TGlzdFwiICwgSlNPTi5zdHJpbmdpZnkoIHByb2plY3RMaXN0KSApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xufVxuXG5cbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbFByb2plY3RMaXN0XCIpKSB7XG5cbn0gXG5lbHNlIHtcblxuICAgIGxldCBzYXZlZExvY2FsID0gIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsUHJvamVjdExpc3QnKSk7XG4gICAgXG4gICAgZm9yKCBsZXQgaSA9IDAgOyBpIDwgc2F2ZWRMb2NhbC5sZW5ndGggOyBpKyspe1xuICAgICAgICBsZXQgbmV3UHJvamVjdEluZGV4ID0gcHJvamVjdExpc3QubGVuZ3RoO1xuICAgICAgICBkb21DaGFuZ2VyLmFkZFByb2plY3QoIHNhdmVkTG9jYWxbaV0udGl0bGUsIG5ld1Byb2plY3RJbmRleCk7XG4gICAgICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoIHNhdmVkTG9jYWxbaV0udGl0bGUgKTtcbiAgICAgICAgcHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgZGVsZXRlUHJvamVjdExpc3RuZXIoIG5ld1Byb2plY3RJbmRleCApO1xuXG4gICAgICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggYC5wcm9qZWN0Ll8ke25ld1Byb2plY3RJbmRleH1gICk7XG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRvbUNoYW5nZXIucmVtb3ZlSGVhZGVyTWFyZ2luKCk7XG4gICAgICAgICAgICBkb21DaGFuZ2VyLnJlbW92ZUhlYWRlck1hcmdpbigpO1xuICAgICAgICAgICAgbGV0IHR5cGUgPSBldmVudC50YXJnZXQubm9kZU5hbWU7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0O1xuXG4gICAgICAgICAgICBpZiggdHlwZSA9PSBcIkxJXCIgKXtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY2xpY2tlZFByb2plY3RJbmRleCA9IHRhcmdldC5jbGFzc0xpc3RbMV0uc3BsaXQoXCJcIilbMV07XG5cbiAgICAgICAgICAgIGlmKCBjbGlja2VkUHJvamVjdEluZGV4ID09PSBjdXJyZW50UHJvamVjdEluZGV4KXtcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0SW5kZXggPSBjbGlja2VkUHJvamVjdEluZGV4O1xuICAgICAgICAgICAgICAgIGRvbUNoYW5nZXIudXBkYXRlUmlnaHRTaWRlKCBwcm9qZWN0TGlzdFtjdXJyZW50UHJvamVjdEluZGV4XSApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0VG9kb0J1dHRvbnNMaXN0bmVycygpXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgdG9kb0xpc3QgPSBzYXZlZExvY2FsW2ldLnRvZG9MaXN0O1xuXG4gICAgICAgIGZvciggbGV0IGogPSAwIDsgaiA8IHRvZG9MaXN0Lmxlbmd0aCA7IGorKyl7XG4gICAgICAgICAgICBsZXQgdGl0bGUgPSB0b2RvTGlzdFtqXS50aXRsZTtcbiAgICAgICAgICAgIGxldCBkdWVEYXRlID0gdG9kb0xpc3Rbal0uZHVlRGF0ZTtcbiAgICAgICAgICAgIGxldCBwcmlvcml0eSA9IHRvZG9MaXN0W2pdLnByaW9yaXR5O1xuICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gdG9kb0xpc3Rbal0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICBsZXQgbm90ZXMgPSB0b2RvTGlzdFtqXS5ub3RlcztcbiAgICAgICAgICAgIGxldCBkb25lID0gdG9kb0xpc3Rbal0uZG9uZTtcblxuXG4gICAgICAgICAgICBsZXQgbmV3VG9kbyA9IG5ldyBUb2RvSXRlbSggdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSAsIG5vdGVzICwgZG9uZSk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdFtpXS50b2RvTGlzdC5wdXNoKG5ld1RvZG8pO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZG9tQ2hhbmdlci5zZXR1cEFsbFRvZG9Qcm9qZWN0KCBwcm9qZWN0TGlzdCApO1xuXG5cbmxldCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb25BZGRQcm9qZWN0Jyk7XG5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG5cbiAgICBkb21DaGFuZ2VyLnByb2plY3RGb3JtKCk7XG5cbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0QnV0dG9uXCIpO1xuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdElucHV0XCIpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGlucHV0LnZhbHVlO1xuICAgICAgICBsZXQgbmV3UHJvamVjdEluZGV4ID0gcHJvamVjdExpc3QubGVuZ3RoO1xuXG4gICAgICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoIHByb2plY3ROYW1lICk7XG4gICAgICAgIHByb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCBcImxvY2FsUHJvamVjdExpc3RcIiAsIEpTT04uc3RyaW5naWZ5KCBwcm9qZWN0TGlzdCkgKTtcbiAgICAgICAgZG9tQ2hhbmdlci5hZGRQcm9qZWN0KCBwcm9qZWN0TmFtZSwgbmV3UHJvamVjdEluZGV4KTtcbiAgICAgICAgZG9tQ2hhbmdlci5yZW1vdmVQcm9qZWN0Rm9ybSgpO1xuXG4gICAgICAgIGRlbGV0ZVByb2plY3RMaXN0bmVyKCBuZXdQcm9qZWN0SW5kZXggKTtcblxuICAgICAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIGAucHJvamVjdC5fJHtuZXdQcm9qZWN0SW5kZXh9YCApO1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBsZXQgdHlwZSA9IGV2ZW50LnRhcmdldC5ub2RlTmFtZTtcbiAgICAgICAgICAgIGxldCB0YXJnZXQ7XG5cbiAgICAgICAgICAgIGlmKCB0eXBlID09IFwiTElcIiApe1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBjbGlja2VkUHJvamVjdEluZGV4ID0gdGFyZ2V0LmNsYXNzTGlzdFsxXS5zcGxpdChcIlwiKVsxXTtcblxuICAgICAgICAgICAgaWYoIGNsaWNrZWRQcm9qZWN0SW5kZXggPT09IGN1cnJlbnRQcm9qZWN0SW5kZXgpe1xuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3RJbmRleCA9IGNsaWNrZWRQcm9qZWN0SW5kZXg7XG4gICAgICAgICAgICAgICAgZG9tQ2hhbmdlci51cGRhdGVSaWdodFNpZGUoIHByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0SW5kZXhdICk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxubGV0IGFsbFRvZG9Qcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbFRvZG9Qcm9qZWN0Jyk7XG5hbGxUb2RvUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PntcbiAgICBjdXJyZW50UHJvamVjdEluZGV4ID0gdW5kZWZpbmVkO1xuICAgIGRvbUNoYW5nZXIuc2V0dXBBbGxUb2RvUHJvamVjdCggcHJvamVjdExpc3QgKTtcbiAgICBjb25zb2xlLmxvZyggcHJvamVjdExpc3QgKTtcbn0pO1xuXG5sZXQgYWRkVG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRvZG9JY29uXCIpO1xuYWRkVG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT57XG4gICAgZG9tQ2hhbmdlci5hZGRUb2RvRm9ybSgpO1xuICAgIGxldCBhZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0FkZEJ1dHRvbicpO1xuICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRUaXRsZScpO1xuICAgICAgICBsZXQgZHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlSW5wdXRcIik7XG4gICAgICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9Gb3JtIHNlbGVjdFwiKTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvRm9ybSB0ZXh0QXJlYVwiKTtcblxuICAgICAgICBcbiAgICAgICAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kb0l0ZW0oIHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSxkdWUudmFsdWUsIHNlbGVjdC52YWx1ZSk7XG4gICAgICAgIHByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRvZG9MaXN0LnB1c2gobmV3VG9kbyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCBcImxvY2FsUHJvamVjdExpc3RcIiAsIEpTT04uc3RyaW5naWZ5KCBwcm9qZWN0TGlzdCkgKTtcbiAgICAgICAgZG9tQ2hhbmdlci5yZW1vdmVUb2RvRm9ybSgpO1xuICAgICAgICBkb21DaGFuZ2VyLnVwZGF0ZVJpZ2h0U2lkZSggcHJvamVjdExpc3RbY3VycmVudFByb2plY3RJbmRleF0gKTtcblxuXG4gICAgICAgIC8vY29kZSBnb2VzIGhlcmVcbiAgICAgICAgc2V0VG9kb0J1dHRvbnNMaXN0bmVycygpO1xuXG4gICAgfSk7ICAgICAgICAgICAgICAgIFxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9