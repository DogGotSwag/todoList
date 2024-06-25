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





let DOM_Module = (function (index) {
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
        removeHeaderMargin, removeHeaderMargin
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDBIQUE0QztBQUN4Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixtQ0FBbUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0M7QUFDbEMsa0NBQWtDO0FBQ2xDLGtDQUFrQztBQUNsQyxrQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7O0FBRUEsT0FBTyxnRkFBZ0YsVUFBVSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGNBQWMsYUFBYSxhQUFhLGFBQWEsY0FBYyxNQUFNLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxRQUFRLEtBQUssWUFBWSxhQUFhLFlBQVksVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sYUFBYSxXQUFXLEtBQUssWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsY0FBYyxXQUFXLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsY0FBYyxZQUFZLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyx3QkFBd0IseUJBQXlCLHlC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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrREFBVTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBVTtBQUNkO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSxrREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0RBQVU7QUFDbEIsUUFBUSxrREFBVTs7O0FBR2xCO0FBQ0E7O0FBRUEsS0FBSztBQUNMLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ET01zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2dyZWVuQ2hlY2tNYXJrLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCwgYm9keXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIFxufVxuXG4qe1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cblxubGl7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxubGFiZWwsIGlucHV0LCBidXR0b24sXG5zZWxlY3QsdGV4dGFyZWF7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xufVxuXG5cbmJvZHl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC0td2hpdGUgOiByZ2IoMTY3LCAxNTcsIDEzMSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xufVxuLm1haW57XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuXG4gICAgLS1ib3JkZXJSYWRpdXM6IDE0cHg7XG4gICAgLS1ibHVlIDogcmdiKDIwMiwgMjA1LCAyMDgpO1xuICAgIC0teWVsbG93IDogcmdiKDIxOSwgMTk5LCAxNzQpO1xuICAgIC0tc2hhZG93IDpyZ2IoMTM2LCAxMzIsIDEzMik7XG4gICAgXG59XG4vKiBsZWZ0IHNpZGUgKi9cbi5sZWZ0e1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cykgMCAwIHZhcigtLWJvcmRlclJhZGl1cyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggMnB4IHZhcigtLXNoYWRvdyk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogOHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG59XG5cbi5sZWZ0U2lkZUhlYWRlcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sZWZ0IGgyIHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uZm9ybUNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNnB4O1xuICAgIGZsZXgtd3JhcDp3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweCAycHggNnB4IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIHJpZ2h0OiAzMHB4O1xuICAgIHRvcDogMTlweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucHJvamVjdExhYmVse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByb2plY3RJbnB1dHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHBhZGRpbmc6IDJweCAxMHB4O1xuICAgIGhlaWdodDogMjZweDtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbn1cblxuLnByb2plY3RCdXR0b257XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDI2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn1cblxuXG4ubGVmdCAucHJvamVjdHNBcmVhe1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDExOCwgMTE2LCAxMTYpO1xuICAgIHBhZGRpbmc6IDhweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWNvbnRlbnQ6IGJhc2VsaW5lO1xuICAgIGdhcDogMTVweDtcblxuICAgIFxufVxuXG4ucHJvamVjdHNBcmVhIC5wcm9qZWN0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGhlaWdodDogMjlweDtcbiAgICB3aWR0aDpmaXQtY29udGVudDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAxcHggdmFyKC0tc2hhZG93KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgXG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMXB4IDZweDtcbn1cblxuXG4ucmVtb3ZlSWNvbntcbiAgICB3aWR0aDogMThweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuXG4uaWNvbkFkZFByb2plY3R7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDhweDtcbiAgICBjb2xvcjogYmx1ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIGVuZCBsZWZ0IHNpZGUgKi9cblxuLyogcmlnaHQgc2lkZSAqL1xuLnJpZ2h0e1xuICAgIGJvcmRlci1yYWRpdXM6IDAgdmFyKC0tYm9yZGVyUmFkaXVzKSB2YXIoLS1ib3JkZXJSYWRpdXMpIDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAycHggdmFyKC0tc2hhZG93KTtcblxuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5yaWdodFNpZGVIZWFkZXJ7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IDFweCB2YXIoLS1zaGFkb3cpO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNywgMjIzLCAyMDgpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDQ1cHg7XG59XG5cbi5yaWdodFNpZGVIZWFkZXIubm9FZGl0SGVhZGVye1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4udG9kb0NvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzKTtcbiAgICBib3gtc2hhZG93IDogMXB4IDFweCAycHggMXB4IHZhcigtLXNoYWRvdylcbn1cblxuLmFkZFRvZG9JY29ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgdG9wOiA1cHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uYWRkVG9kb0ljb24uYWN0aXZle1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkVG9kb0ljb246ZGlzYWJsZWR7XG4gICAgY3Vyc29yOmF1dG87XG4gICAgdmlzaWJpbGl0eTpoaWRkZW47XG59XG5cbi50b2RvRm9ybXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzKTtcbiAgICB0b3A6IDhweDtcbiAgICByaWdodDogMTBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTE4LCAxMTYsIDExNik7XG4gICAgcGFkZGluZzogNnB4O1xufVxuXG4udG9kb0Zvcm0gbGl7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MHB4IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZWRpdFRvZG9Gb3JtIGRpdjpudGgtY2hpbGQoMyl7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZWRpdFRvZG9Gb3JtIGRpdjpudGgtY2hpbGQoMyk6OmJlZm9yZXtcbiAgICBjb250ZW50OiBcIuKWvFwiO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0b3A6IDNweDtcbiAgICBsZWZ0OiAxOTJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi50b2RvRm9ybSBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYXtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTE4LCAxMTYsIDExNik7XG4gICAgcGFkZGluZzogMnB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGhlaWdodDogMjVweDtcbn1cblxuc2VsZWN0e1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRvZG9Gb3JtIHVsIGxpOm50aC1jaGlsZCgzKTo6YWZ0ZXJ7XG4gICAgY29udGVudDogXCLilrxcIjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdG9wOiA0cHg7XG4gICAgcmlnaHQ6IDEzcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG50ZXh0YXJlYXtcbiAgICBoZWlnaHQ6IDE1MnB4O1xuICAgIHBhZGRpbmc6IDRweDtcbn1cblxuLnRvZG9Gb3JtIGlucHV0OmZvY3Vze1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIFxufVxuXG5cbi50b2RvZm9ybUhlYWRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTE4LCAxMTYsIDExNik7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4udG9kb0Zvcm0gLmxhc3RMaXtcbiAgICBoZWlnaHQ6IDE1NXB4O1xufVxuXG4udG9kb0Zvcm0gYnV0dG9uOmZpcnN0LW9mLXR5cGV7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi50b2RvRm9ybUJ1dHRvbntcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi50b2RvRm9ybUJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY4LCAxNjgsIDE2OCk7XG59XG5cbi5hbGxUb2Rvc3tcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG59XG5cbi50b2RvTGl7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDI4cHg7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcblxuICAgIGhlaWdodDogMjhweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMXB4IHZhcigtLXNoYWRvdyk7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4udG9kb1RpdGxlUHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmR1ZURhdGVQe1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmRyb3BEb3duSWNvbntcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5kcm9wRG93bkNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udG9kb0xpLmV4cGFuZHtcbiAgICBoZWlnaHQ6IDQ3MnB4O1xufVxuXG4udG9kb0xpLmV4cGFuZC5ub25FZGl0TW9kZXtcbiAgICBoZWlnaHQ6IDQzOXB4IDtcbn1cblxuLnRvZG9MaS5sb3d7XG4gICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICNmOWU1NGU7XG59XG4udG9kb0xpLm1lZGl1bXtcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgI2Y1YTY1ZDtcbn1cbi50b2RvTGkuaGlnaHtcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgI2M3NWU1ZTtcbn1cblxuLnRvcENvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG8gMjBweDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBnYXA6IDVweDtcbn1cblxuLnRvZG9MYWJlbHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNnB4O1xuICAgIGN1cnNvcjpwb2ludGVyIDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50b2RvTGFiZWwgcDpmaXJzdC1jaGlsZHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udG9kb0xpIHAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRvZG9MYWJlbDo6YmVmb3Jle1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgd2lkdGg6IDI2cHg7XG4gICAgaGVpZ2h0OiAyNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtMzhweDtcbiAgICBib3R0b206IDBweDtcblxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlWigxODBkZWcpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllciggMC41NCwgMC4wMSwgMCwgMS40OSk7XG59XG5cbi5jaGVja0JveDpjaGVja2VkICsgbGFiZWw6OmJlZm9yZXtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZVooMGRlZyk7XG59XG5cbi50b2RvTGFiZWw6OmFmdGVye1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDcyLDE2NCw2OCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyMnB4O1xuICAgIGhlaWdodDogMjJweDtcbiAgICBsZWZ0OiAtMzhweDtcbiAgICBib3R0b206IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jaGVja0JveHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cbi5lZGl0VG9kb0Zvcm17XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogOTclO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG5cbiAgICBwYWRkaW5nOiAxMHB4O1xuXG59XG5cbi5lZGl0VG9kb0Zvcm0udmlzaWJsZXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBcbn1cblxuLmVkaXRUb2RvRm9ybS52aXNpYmxlIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDJzOyAvKiBTYWZhcmksIENocm9tZSBhbmQgT3BlcmEgPiAxMi4xICovXG4gICAgICAgLW1vei1hbmltYXRpb246IGZhZGVpbiAyczsgLyogRmlyZWZveCA8IDE2ICovXG4gICAgICAgIC1tcy1hbmltYXRpb246IGZhZGVpbiAyczsgLyogSW50ZXJuZXQgRXhwbG9yZXIgKi9cbiAgICAgICAgIC1vLWFuaW1hdGlvbjogZmFkZWluIDJzOyAvKiBPcGVyYSA8IDEyLjEgKi9cbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZWluIDJzO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweFxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgICB0byAgIHsgb3BhY2l0eTogMTsgfVxufVxuXG4vKiBGaXJlZm94IDwgMTYgKi9cbkAtbW96LWtleWZyYW1lcyBmYWRlaW4ge1xuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gICAgdG8gICB7IG9wYWNpdHk6IDE7IH1cbn1cblxuLyogU2FmYXJpLCBDaHJvbWUgYW5kIE9wZXJhID4gMTIuMSAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgICB0byAgIHsgb3BhY2l0eTogMTsgfVxufVxuXG4vKiBJbnRlcm5ldCBFeHBsb3JlciAqL1xuQC1tcy1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XG59XG5cbi50b2RvRWRpdERpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udG9kb0VkaXREaXYgbGFiZWx7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cblxuLnRvZG9FZGl0RGl2IGlucHV0LC50b2RvRWRpdERpdiBzZWxlY3R7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDExOCwgMTE2LCAxMTYpO1xuICAgIHBhZGRpbmc6IDJweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDE0MHB4O1xuXG59XG5cbi50b2RvRWRpdExhc3REaXZ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODBweCAxZnI7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgIGhlaWdodDogMTMycHg7XG59XG5cbi50b2RvRWRpdExhc3REaXYgdGV4dGFyZWF7XG4gICBoZWlnaHQ6IDEzMnB4O1xuICAgcGFkZGluZzogNnB4IDEwcHg7XG59XG5cbnRleHRhcmVhe1xuICAgIHJlc2l6ZTogbm9uZTtcbn1cblxuLmVkaXRCdXR0b25zU2VjdGlvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmVkaXRCdXR0b257XG4gICAgcGFkZGluZzogNHB4IDhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG4uZWRpdEJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMTcsIDIxNyk7XG59XG4uZWRpdERlbGV0ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg2LCAxLCAxKTtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLmVkaXREZWxldGU6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MCwgMiwgMik7XG59XG5cblxuXG5cblxuXG4vKiBlbmQgcmlnaHQgc2lkZSAqL1xuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1Qiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7O0lBRTlCLG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLDRCQUE0Qjs7QUFFaEM7QUFDQSxjQUFjO0FBQ2Q7SUFDSSwwREFBMEQ7SUFDMUQsNkJBQTZCO0lBQzdCLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2Isa0JBQWtCOztJQUVsQixhQUFhO0lBQ2IsUUFBUTtJQUNSLDRCQUE0QjtJQUM1QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIscUJBQXFCOztJQUVyQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7OztBQUdBO0lBQ0ksa0NBQWtDO0lBQ2xDLG9DQUFvQztJQUNwQyxZQUFZOztJQUVaLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFNBQVM7OztBQUdiOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHlDQUF5QztJQUN6QyxlQUFlOzs7SUFHZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7OztBQUdBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsVUFBVTtJQUNWLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBLGtCQUFrQjs7QUFFbEIsZUFBZTtBQUNmO0lBQ0ksMERBQTBEO0lBQzFELCtCQUErQjtJQUMvQix5Q0FBeUM7O0lBRXpDLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGtDQUFrQztJQUNsQztBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osUUFBUTtJQUNSLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGtDQUFrQztJQUNsQyxRQUFRO0lBQ1IsV0FBVztJQUNYLG9DQUFvQztJQUNwQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLCtCQUErQjtJQUMvQix3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixRQUFRO0lBQ1IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsUUFBUTtJQUNSLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7O0FBRTNCOzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsMkNBQTJDO0lBQzNDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4QixtQkFBbUI7O0lBRW5CLFlBQVk7SUFDWix3QkFBd0I7O0lBRXhCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyx1QkFBdUI7SUFDdkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7SUFDUixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1EQUE0QztJQUM1QywyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXOztJQUVYLG1DQUFtQztJQUNuQyx1REFBdUQ7QUFDM0Q7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixpQkFBaUI7O0lBRWpCLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksY0FBYzs7QUFFbEI7O0FBRUE7SUFDSSw0QkFBNEIsRUFBRSxvQ0FBb0M7T0FDL0QseUJBQXlCLEVBQUUsaUJBQWlCO1FBQzNDLHdCQUF3QixFQUFFLHNCQUFzQjtTQUMvQyx1QkFBdUIsRUFBRSxpQkFBaUI7WUFDdkMsb0JBQW9COztJQUU1QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSSxPQUFPLFVBQVUsRUFBRTtJQUNuQixPQUFPLFVBQVUsRUFBRTtBQUN2Qjs7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxPQUFPLFVBQVUsRUFBRTtJQUNuQixPQUFPLFVBQVUsRUFBRTtBQUN2Qjs7QUFFQSxvQ0FBb0M7QUFDcEM7SUFDSSxPQUFPLFVBQVUsRUFBRTtJQUNuQixPQUFPLFVBQVUsRUFBRTtBQUN2Qjs7QUFFQSxzQkFBc0I7QUFDdEI7SUFDSSxPQUFPLFVBQVUsRUFBRTtJQUNuQixPQUFPLFVBQVUsRUFBRTtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COzs7QUFHQTtJQUNJLG9DQUFvQztJQUNwQyxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCOztBQUVBO0dBQ0csYUFBYTtHQUNiLGlCQUFpQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7Ozs7OztBQU9BLG1CQUFtQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgXFxufVxcblxcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuXFxubGl7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmxhYmVsLCBpbnB1dCwgYnV0dG9uLFxcbnNlbGVjdCx0ZXh0YXJlYXtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcbn1cXG5cXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLS13aGl0ZSA6IHJnYigxNjcsIDE1NywgMTMxKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG4ubWFpbntcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG5cXG4gICAgLS1ib3JkZXJSYWRpdXM6IDE0cHg7XFxuICAgIC0tYmx1ZSA6IHJnYigyMDIsIDIwNSwgMjA4KTtcXG4gICAgLS15ZWxsb3cgOiByZ2IoMjE5LCAxOTksIDE3NCk7XFxuICAgIC0tc2hhZG93IDpyZ2IoMTM2LCAxMzIsIDEzMik7XFxuICAgIFxcbn1cXG4vKiBsZWZ0IHNpZGUgKi9cXG4ubGVmdHtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzKSAwIDAgdmFyKC0tYm9yZGVyUmFkaXVzKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDJweCB2YXIoLS1zaGFkb3cpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogOHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG59XFxuXFxuLmxlZnRTaWRlSGVhZGVye1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5sZWZ0IGgyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXG59XFxuXFxuLmZvcm1Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNnB4O1xcbiAgICBmbGV4LXdyYXA6d3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHggMnB4IDZweCA2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIHJpZ2h0OiAzMHB4O1xcbiAgICB0b3A6IDE5cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0TGFiZWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdElucHV0e1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBwYWRkaW5nOiAycHggMTBweDtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICBtYXgtd2lkdGg6IDkwJTtcXG59XFxuXFxuLnByb2plY3RCdXR0b257XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDI2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuXFxuLmxlZnQgLnByb2plY3RzQXJlYXtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDExOCwgMTE2LCAxMTYpO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24tY29udGVudDogYmFzZWxpbmU7XFxuICAgIGdhcDogMTVweDtcXG5cXG4gICAgXFxufVxcblxcbi5wcm9qZWN0c0FyZWEgLnByb2plY3R7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgaGVpZ2h0OiAyOXB4O1xcbiAgICB3aWR0aDpmaXQtY29udGVudDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMXB4IHZhcigtLXNoYWRvdyk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgXFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFweCA2cHg7XFxufVxcblxcblxcbi5yZW1vdmVJY29ue1xcbiAgICB3aWR0aDogMThweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcXG59XFxuXFxuXFxuLmljb25BZGRQcm9qZWN0e1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIHRvcDogMHB4O1xcbiAgICByaWdodDogOHB4O1xcbiAgICBjb2xvcjogYmx1ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBlbmQgbGVmdCBzaWRlICovXFxuXFxuLyogcmlnaHQgc2lkZSAqL1xcbi5yaWdodHtcXG4gICAgYm9yZGVyLXJhZGl1czogMCB2YXIoLS1ib3JkZXJSYWRpdXMpIHZhcigtLWJvcmRlclJhZGl1cykgMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMnB4IHZhcigtLXNoYWRvdyk7XFxuXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucmlnaHRTaWRlSGVhZGVye1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IDFweCB2YXIoLS1zaGFkb3cpO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM3LCAyMjMsIDIwOCk7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0NXB4O1xcbn1cXG5cXG4ucmlnaHRTaWRlSGVhZGVyLm5vRWRpdEhlYWRlcntcXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxufVxcblxcbi50b2RvQ29udGFpbmVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzKTtcXG4gICAgYm94LXNoYWRvdyA6IDFweCAxcHggMnB4IDFweCB2YXIoLS1zaGFkb3cpXFxufVxcblxcbi5hZGRUb2RvSWNvbntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB0b3A6IDVweDtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5hZGRUb2RvSWNvbi5hY3RpdmV7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZFRvZG9JY29uOmRpc2FibGVke1xcbiAgICBjdXJzb3I6YXV0bztcXG4gICAgdmlzaWJpbGl0eTpoaWRkZW47XFxufVxcblxcbi50b2RvRm9ybXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMzMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpO1xcbiAgICB0b3A6IDhweDtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMTgsIDExNiwgMTE2KTtcXG4gICAgcGFkZGluZzogNnB4O1xcbn1cXG5cXG4udG9kb0Zvcm0gbGl7XFxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmVkaXRUb2RvRm9ybSBkaXY6bnRoLWNoaWxkKDMpe1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5lZGl0VG9kb0Zvcm0gZGl2Om50aC1jaGlsZCgzKTo6YmVmb3Jle1xcbiAgICBjb250ZW50OiBcXFwi4pa8XFxcIjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0b3A6IDNweDtcXG4gICAgbGVmdDogMTkycHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi50b2RvRm9ybSBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYXtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDExOCwgMTE2LCAxMTYpO1xcbiAgICBwYWRkaW5nOiAycHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbnNlbGVjdHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kb0Zvcm0gdWwgbGk6bnRoLWNoaWxkKDMpOjphZnRlcntcXG4gICAgY29udGVudDogXFxcIuKWvFxcXCI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdG9wOiA0cHg7XFxuICAgIHJpZ2h0OiAxM3B4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYXtcXG4gICAgaGVpZ2h0OiAxNTJweDtcXG4gICAgcGFkZGluZzogNHB4O1xcbn1cXG5cXG4udG9kb0Zvcm0gaW5wdXQ6Zm9jdXN7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBcXG59XFxuXFxuXFxuLnRvZG9mb3JtSGVhZGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxMTgsIDExNiwgMTE2KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbn1cXG5cXG4udG9kb0Zvcm0gLmxhc3RMaXtcXG4gICAgaGVpZ2h0OiAxNTVweDtcXG59XFxuXFxuLnRvZG9Gb3JtIGJ1dHRvbjpmaXJzdC1vZi10eXBle1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnRvZG9Gb3JtQnV0dG9ue1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG4udG9kb0Zvcm1CdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjgsIDE2OCwgMTY4KTtcXG59XFxuXFxuLmFsbFRvZG9ze1xcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxufVxcblxcbi50b2RvTGl7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyOHB4O1xcbiAgICBncmlkLWF1dG8tcm93czogMWZyO1xcblxcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMXB4IHZhcigtLXNoYWRvdyk7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4udG9kb1RpdGxlUHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uZHVlRGF0ZVB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmRyb3BEb3duSWNvbntcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuLmRyb3BEb3duQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvTGkuZXhwYW5ke1xcbiAgICBoZWlnaHQ6IDQ3MnB4O1xcbn1cXG5cXG4udG9kb0xpLmV4cGFuZC5ub25FZGl0TW9kZXtcXG4gICAgaGVpZ2h0OiA0MzlweCA7XFxufVxcblxcbi50b2RvTGkubG93e1xcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgI2Y5ZTU0ZTtcXG59XFxuLnRvZG9MaS5tZWRpdW17XFxuICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCAjZjVhNjVkO1xcbn1cXG4udG9kb0xpLmhpZ2h7XFxuICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCAjYzc1ZTVlO1xcbn1cXG5cXG4udG9wQ29udGFpbmVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0byAyMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi50b2RvTGFiZWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNnB4O1xcbiAgICBjdXJzb3I6cG9pbnRlciA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvZG9MYWJlbCBwOmZpcnN0LWNoaWxke1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvTGkgcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvTGFiZWw6OmJlZm9yZXtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi4vaW1nL2dyZWVuQ2hlY2tNYXJrLnN2Z1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgd2lkdGg6IDI2cHg7XFxuICAgIGhlaWdodDogMjZweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtMzhweDtcXG4gICAgYm90dG9tOiAwcHg7XFxuXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlWigxODBkZWcpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoIDAuNTQsIDAuMDEsIDAsIDEuNDkpO1xcbn1cXG5cXG4uY2hlY2tCb3g6Y2hlY2tlZCArIGxhYmVsOjpiZWZvcmV7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWigwZGVnKTtcXG59XFxuXFxuLnRvZG9MYWJlbDo6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNzIsMTY0LDY4KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMjJweDtcXG4gICAgaGVpZ2h0OiAyMnB4O1xcbiAgICBsZWZ0OiAtMzhweDtcXG4gICAgYm90dG9tOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmNoZWNrQm94e1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG4uZWRpdFRvZG9Gb3Jte1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDk3JTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG5cXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG59XFxuXFxuLmVkaXRUb2RvRm9ybS52aXNpYmxle1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgXFxufVxcblxcbi5lZGl0VG9kb0Zvcm0udmlzaWJsZSB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMnM7IC8qIFNhZmFyaSwgQ2hyb21lIGFuZCBPcGVyYSA+IDEyLjEgKi9cXG4gICAgICAgLW1vei1hbmltYXRpb246IGZhZGVpbiAyczsgLyogRmlyZWZveCA8IDE2ICovXFxuICAgICAgICAtbXMtYW5pbWF0aW9uOiBmYWRlaW4gMnM7IC8qIEludGVybmV0IEV4cGxvcmVyICovXFxuICAgICAgICAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMnM7IC8qIE9wZXJhIDwgMTIuMSAqL1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZWluIDJzO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHhcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlaW4ge1xcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxcbiAgICB0byAgIHsgb3BhY2l0eTogMTsgfVxcbn1cXG5cXG4vKiBGaXJlZm94IDwgMTYgKi9cXG5ALW1vei1rZXlmcmFtZXMgZmFkZWluIHtcXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cXG4gICAgdG8gICB7IG9wYWNpdHk6IDE7IH1cXG59XFxuXFxuLyogU2FmYXJpLCBDaHJvbWUgYW5kIE9wZXJhID4gMTIuMSAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxcbiAgICB0byAgIHsgb3BhY2l0eTogMTsgfVxcbn1cXG5cXG4vKiBJbnRlcm5ldCBFeHBsb3JlciAqL1xcbkAtbXMta2V5ZnJhbWVzIGZhZGVpbiB7XFxuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XFxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XFxufVxcblxcbi50b2RvRWRpdERpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kb0VkaXREaXYgbGFiZWx7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcblxcbi50b2RvRWRpdERpdiBpbnB1dCwudG9kb0VkaXREaXYgc2VsZWN0e1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTE4LCAxMTYsIDExNik7XFxuICAgIHBhZGRpbmc6IDJweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDE0MHB4O1xcblxcbn1cXG5cXG4udG9kb0VkaXRMYXN0RGl2e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggMWZyO1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICAgIGhlaWdodDogMTMycHg7XFxufVxcblxcbi50b2RvRWRpdExhc3REaXYgdGV4dGFyZWF7XFxuICAgaGVpZ2h0OiAxMzJweDtcXG4gICBwYWRkaW5nOiA2cHggMTBweDtcXG59XFxuXFxudGV4dGFyZWF7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmVkaXRCdXR0b25zU2VjdGlvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZWRpdEJ1dHRvbntcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuLmVkaXRCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDIxNywgMjE3KTtcXG59XFxuLmVkaXREZWxldGV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODYsIDEsIDEpO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuLmVkaXREZWxldGU6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDAsIDIsIDIpO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiBlbmQgcmlnaHQgc2lkZSAqL1xcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHhJbWcgZnJvbSAnLi8uLi9pbWcvY2xvc2UtdGhpY2suc3ZnJztcbmltcG9ydCBkcm9wRG93biBmcm9tIFwiLi8uLi9pbWcvZG93bkFycm93LnN2Z1wiO1xuaW1wb3J0IHVwIGZyb20gXCIuLy4uL2ltZy91cEFycm93LnN2Z1wiO1xuXG5sZXQgRE9NX01vZHVsZSA9IChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICBsZXQgcHJvamVjdEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNBcmVhJyk7XG4gICAgbGV0IGFkZFByb2plY3QgPSAoaW5zaWRlVGV4dCwgaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiX1wiICsgaW5kZXgpO1xuXG4gICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwLmlubmVyVGV4dCA9IGluc2lkZVRleHQ7XG5cbiAgICAgICAgbGV0IHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgeC5jbGFzc0xpc3QgPSBcInJlbW92ZUljb25cIjtcbiAgICAgICAgeC5zcmMgPSB4SW1nO1xuXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKHApO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZCh4KTtcbiAgICAgICAgcHJvamVjdEFyZWEuYXBwZW5kQ2hpbGQobGkpO1xuXG4gICAgfTtcblxuICAgIGxldCBsZWZ0U2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0Jyk7XG4gICAgbGV0IHByb2plY3RGb3JtID0gKCkgPT4ge1xuICAgICAgICBsZXQgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtQ29udGFpbmVyXCIpO1xuXG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgbGV0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcInByb2plY3RMYWJlbFwiKTtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcInByb2plY3RJbnB1dFwiKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0QnV0dG9uXCIpO1xuICAgICAgICBjYW5jZWwuY2xhc3NMaXN0LmFkZChcInByb2plY3RCdXR0b25cIik7XG4gICAgICAgIGNhbmNlbC5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsQnV0dG9uXCIpO1xuXG5cbiAgICAgICAgcC5pbm5lclRleHQgPSBcIlByb2plY3QgTmFtZVwiO1xuICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gXCJDcmVhdGVcIjtcbiAgICAgICAgY2FuY2VsLmlubmVyVGV4dCA9IFwiQ2FuY2VsXCI7XG5cblxuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsKTtcblxuICAgICAgICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcblxuICAgICAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVQcm9qZWN0Rm9ybSgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgbGV0IHJlbW92ZVByb2plY3RGb3JtID0gKCkgPT4ge1xuICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybUNvbnRhaW5lclwiKTtcbiAgICAgICAgbGVmdFNpZGUucmVtb3ZlQ2hpbGQoZm9ybSk7XG4gICAgfTtcblxuICAgIGxldCByZW1vdmVQcm9qZWN0ID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3QuJHtpbmRleH1gKTtcbiAgICAgICAgcHJvamVjdEFyZWEucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG5cbiAgICAgICAgbGV0IGFsbHRvZG9zID0gcHJvamVjdEFyZWEuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIGxldCBrZXkgPSBhbGx0b2Rvcy5uZXh0RWxlbWVudFNpYmxpbmc7XG5cbiAgICAgICAgbGV0IG5ld0luZGV4ID0gMDtcbiAgICAgICAgd2hpbGUgKGtleSAhPSBudWxsKSB7XG4gICAgICAgICAgICBrZXkuY2xhc3NOYW1lID0gYHByb2plY3QgXyR7bmV3SW5kZXh9YDtcbiAgICAgICAgICAgIG5ld0luZGV4Kys7XG4gICAgICAgICAgICBrZXkgPSBrZXkubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgbGV0IHVwZGF0ZVJpZ2h0U2lkZSA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHVwZGF0ZVJpZ2h0SGVhZGVyKHByb2plY3QudGl0bGUpO1xuICAgICAgICB1cGRhdGVUb0RvU2VjdGlvbihwcm9qZWN0LnRvZG9MaXN0KTtcbiAgICAgICAgYWRkVG9kb0J1dHRvbigpO1xuICAgIH07XG5cbiAgICBsZXQgdXBkYXRlUmlnaHRIZWFkZXIgPSAodGV4dCkgPT4ge1xuICAgICAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yaWdodFNpZGVIZWFkZXIgaDJcIik7XG4gICAgICAgIGhlYWRlci5pbm5lclRleHQgPSBgVG9kb3MgZnJvbSBwcm9qZWN0IDogJHt0ZXh0fWA7XG4gICAgfTtcbiAgICBsZXQgcmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHQnKTtcblxuICAgIGxldCB1cGRhdGVUb0RvU2VjdGlvbiA9ICh0b2RvTGlzdCkgPT4ge1xuICAgICAgICBsZXQgYWxsVG9kb3NDb250YWluZXIgPSByaWdodC5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGFsbFRvZG9zQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIHRvZG9MaXN0LmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKCd0b2RvTGknKTtcbiAgICAgICAgICAgIGxpLmlkID0gYHRvZG9fJHtpbmRleH1gO1xuXG4gICAgICAgICAgICBsZXQgdG9wQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0b3BDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9wQ29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgIGxldCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrQm94Jyk7XG4gICAgICAgICAgICBpZiAoa2V5LmRvbmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hlY2tib3guaWQgPSBgdG9kb0NoZWNrXyR7aW5kZXh9YFxuXG5cbiAgICAgICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcC5jbGFzc0xpc3QuYWRkKCd0b2RvVGl0bGVQJyk7XG4gICAgICAgICAgICBwLmlubmVyVGV4dCA9IGtleS50aXRsZTtcblxuICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3RvZG9MYWJlbCcpO1xuICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgdG9kb0NoZWNrXyR7aW5kZXh9YCk7XG4gICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgdG9kb18ke2luZGV4fWApO1xuICAgICAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQocCk7XG5cbiAgICAgICAgICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdkdWVEYXRlUCcpO1xuICAgICAgICAgICAgaWYgKGtleS5kdWVEYXRlID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBkdWVEYXRlLmlubmVyVGV4dCA9IFwiTm8gRHVlIERhdGVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGR1ZURhdGUuaW5uZXJUZXh0ID0ga2V5LmR1ZURhdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdkcm9wRG93bkNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbWcuc3JjID0gZHJvcERvd247XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCdkcm9wRG93bkljb24nKTtcblxuXG5cblxuICAgICAgICAgICAgdG9wQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KVxuICAgICAgICAgICAgdG9wQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgIHRvcENvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICAgICAgICAgIHRvcENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuXG5cbiAgICAgICAgICAgIGxldCBlZGl0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgICAgIGVkaXRGb3JtLmNsYXNzTGlzdC5hZGQoJ2VkaXRUb2RvRm9ybScpO1xuXG4gICAgICAgICAgICBsZXQgZGl2T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXZPbmUuY2xhc3NMaXN0LmFkZCgndG9kb0VkaXREaXYnKTtcbiAgICAgICAgICAgIGxldCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIHRpdGxlTGFiZWwuaW5uZXJUZXh0ID0gXCJUaXRsZVwiO1xuICAgICAgICAgICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoYGZvcmAsIGB0aXRsZUVkaXQke2luZGV4fWApO1xuICAgICAgICAgICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IGtleS50aXRsZTtcbiAgICAgICAgICAgIHRpdGxlSW5wdXQuaWQgPSBgdGl0bGVFZGl0JHtpbmRleH1gO1xuXG4gICAgICAgICAgICBkaXZPbmUuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgICAgICAgICBkaXZPbmUuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgICAgICAgICAgIGxldCBkaXZUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdlR3by5jbGFzc0xpc3QuYWRkKCd0b2RvRWRpdERpdicpO1xuICAgICAgICAgICAgbGV0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBkdWVEYXRlTGFiZWwuaW5uZXJUZXh0ID0gXCJEdWUgRGF0ZVwiO1xuICAgICAgICAgICAgZHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYGR1ZUVkaXQke2luZGV4fWApO1xuICAgICAgICAgICAgbGV0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgICAgIGR1ZURhdGVJbnB1dC5pZCA9IGBkdWVFZGl0JHtpbmRleH1gO1xuICAgICAgICAgICAgZHVlRGF0ZUlucHV0LmRlZmF1bHRWYWx1ZSA9IGtleS5kdWVEYXRlO1xuICAgICAgICAgICAgZGl2VHdvLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG4gICAgICAgICAgICBkaXZUd28uYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcblxuICAgICAgICAgICAgbGV0IGRpdlRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXZUaHJlZS5jbGFzc0xpc3QuYWRkKCd0b2RvRWRpdERpdicpO1xuICAgICAgICAgICAgbGV0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC5pbm5lclRleHQgPSBcIlByaW9yaXR5XCJcbiAgICAgICAgICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgcHJpb3JpdHlFZGl0JHtpbmRleH1gKTtcbiAgICAgICAgICAgIGxldCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgICAgICBwcmlvcml0eUlucHV0LmlkID0gYHByaW9yaXR5RWRpdCR7aW5kZXh9YDtcbiAgICAgICAgICAgIGxldCBzZWxlY3RPcHRpb25zID0gWydsb3cnLCAnbWVkaXVtJywgJ2hpZ2gnXTtcblxuICAgICAgICAgICAgc2VsZWN0T3B0aW9ucy5mb3JFYWNoKG9wID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IG9wO1xuICAgICAgICAgICAgICAgIGlmIChrZXkucHJpb3JpdHkgPT0gb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkaXZUaHJlZS5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgICAgICAgICAgIGRpdlRocmVlLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuXG4gICAgICAgICAgICBsZXQgZGl2Rm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2Rm91ci5jbGFzc0xpc3QuYWRkKCd0b2RvRWRpdERpdicpO1xuICAgICAgICAgICAgZGl2Rm91ci5jbGFzc0xpc3QuYWRkKCd0b2RvRWRpdExhc3REaXYnKTtcbiAgICAgICAgICAgIGxldCBkZXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBkZXNMYWJlbC5pbm5lclRleHQgPSBcIkRlc2NyaXB0aW9uXCI7XG4gICAgICAgICAgICBsZXQgZGVzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgZGVzSW5wdXQudmFsdWUgPSBrZXkuZGVzY3JpcHRpb247XG4gICAgICAgICAgICBkaXZGb3VyLmFwcGVuZENoaWxkKGRlc0xhYmVsKTtcbiAgICAgICAgICAgIGRpdkZvdXIuYXBwZW5kQ2hpbGQoZGVzSW5wdXQpO1xuXG4gICAgICAgICAgICBsZXQgZGl2Rml2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2Rml2ZS5jbGFzc0xpc3QuYWRkKCd0b2RvRWRpdERpdicpO1xuICAgICAgICAgICAgZGl2Rml2ZS5jbGFzc0xpc3QuYWRkKCd0b2RvRWRpdExhc3REaXYnKTtcbiAgICAgICAgICAgIGxldCBub3Rlc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIG5vdGVzTGFiZWwuaW5uZXJUZXh0ID0gXCJOb3Rlc1wiO1xuICAgICAgICAgICAgbGV0IG5vdGVzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgbm90ZXNJbnB1dC52YWx1ZSA9IGtleS5ub3RlcztcbiAgICAgICAgICAgIGRpdkZpdmUuYXBwZW5kQ2hpbGQobm90ZXNMYWJlbCk7XG4gICAgICAgICAgICBkaXZGaXZlLmFwcGVuZENoaWxkKG5vdGVzSW5wdXQpO1xuXG4gICAgICAgICAgICBsZXQgZGl2U2l4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXZTaXguY2xhc3NMaXN0LmFkZCgnZWRpdEJ1dHRvbnNTZWN0aW9uJyk7XG5cbiAgICAgICAgICAgIGxldCBkZWxldGVUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxldGVUb2RvQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZVRvZG9CdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdEJ1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlVG9kb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0RGVsZXRlJyk7XG4gICAgICAgICAgICBkZWxldGVUb2RvQnV0dG9uLmlubmVyVGV4dCA9IFwiRGVsZXRlIFRoaXMgVG9kb1wiO1xuXG4gICAgICAgICAgICBsZXQgZWRpdENhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZWRpdENhbmNlbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgICAgICBlZGl0Q2FuY2VsLmNsYXNzTGlzdC5hZGQoJ2VkaXRCdXR0b24nKTtcbiAgICAgICAgICAgIGVkaXRDYW5jZWwuaW5uZXJUZXh0ID0gXCJVbmRvIERyYWZ0XCI7XG5cblxuICAgICAgICAgICAgZWRpdENhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0ga2V5LnRpdGxlO1xuICAgICAgICAgICAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9IGtleS5kdWVEYXRlO1xuICAgICAgICAgICAgICAgIGRlc0lucHV0LnZhbHVlID0ga2V5LmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIG5vdGVzSW5wdXQudmFsdWUgPSBrZXkubm90ZXM7XG5cbiAgICAgICAgICAgICAgICBpZiAoa2V5LnByaW9yaXR5ID09ICdsb3cnKSB7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5SW5wdXQuc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGtleS5wcmlvcml0eSA9PSBcIm1lZGl1bVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5SW5wdXQuc2VsZWN0ZWRJbmRleCA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUlucHV0LnNlbGVjdGVkSW5kZXggPSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZXQgZWRpdFN1bWJpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZWRpdFN1bWJpdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgICAgICBlZGl0U3VtYml0LmNsYXNzTGlzdC5hZGQoJ2VkaXRCdXR0b24nKTtcbiAgICAgICAgICAgIGVkaXRTdW1iaXQuY2xhc3NMaXN0LmFkZCgnZWRpdFN1Ym1pdCcpO1xuICAgICAgICAgICAgZWRpdFN1bWJpdC5pbm5lclRleHQgPSBcIlN1bWJpdCBDaGFuZ2VzXCI7XG4gICAgICAgICAgICBkaXZTaXguYXBwZW5kQ2hpbGQoZGVsZXRlVG9kb0J1dHRvbik7XG4gICAgICAgICAgICBkaXZTaXguYXBwZW5kQ2hpbGQoZWRpdENhbmNlbCk7XG4gICAgICAgICAgICBkaXZTaXguYXBwZW5kQ2hpbGQoZWRpdFN1bWJpdCk7XG5cbiAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGRpdk9uZSk7XG4gICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChkaXZUd28pO1xuICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZGl2VGhyZWUpO1xuICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZGl2Rm91cik7XG4gICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChkaXZGaXZlKTtcbiAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGRpdlNpeCk7XG5cblxuXG5cblxuICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQodG9wQ29udGFpbmVyKTtcbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGVkaXRGb3JtKTtcblxuICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChgJHtrZXkucHJpb3JpdHl9YCk7XG4gICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG5cbiAgICAgICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbGlDbGFzc2VzID0gQXJyYXkuZnJvbShsaS5jbGFzc0xpc3QpO1xuICAgICAgICAgICAgICAgIGlmIChsaUNsYXNzZXMuaW5jbHVkZXMoXCJleHBhbmRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgbGkuY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBkcm9wRG93bjtcbiAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnZXhwYW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSB1cDtcbiAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0uY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFsbFRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKHVsKTtcblxuICAgIH07XG5cbiAgICBsZXQgYWRkVG9kb0J1dHRvbiA9ICgpID0+IHtcblxuICAgICAgICBsZXQgYWRkVG9kb0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRvZG9JY29uXCIpO1xuICAgICAgICBhZGRUb2RvSWNvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgIH1cblxuICAgIGxldCBhZGRUb2RvRm9ybSA9ICgpID0+IHtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG9Gb3JtJyk7XG4gICAgICAgIHJpZ2h0LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICAgICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCd0b2RvZm9ybUhlYWRlcicpO1xuICAgICAgICBoZWFkZXIuaW5uZXJUZXh0ID0gXCJUb2RvXCI7XG5cbiAgICAgICAgbGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxldCBsYWJlbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGFiZWxUaXRsZS5pbm5lclRleHQgPSBcIlRpdGxlXCJcbiAgICAgICAgbGV0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2lucHV0VGl0bGUnKTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQobGFiZWxUaXRsZSk7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGlucHV0VGl0bGUpO1xuXG4gICAgICAgIGxldCBsaVR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxldCBsYWJlbER1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxhYmVsRHVlLmlubmVyVGV4dCA9IFwiRHVlIERhdGVcIlxuICAgICAgICBsZXQgaW5wdXREdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dER1ZS5jbGFzc0xpc3QuYWRkKCdkYXRlSW5wdXQnKTtcbiAgICAgICAgaW5wdXREdWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgbGlUd28uYXBwZW5kQ2hpbGQobGFiZWxEdWUpO1xuICAgICAgICBsaVR3by5hcHBlbmRDaGlsZChpbnB1dER1ZSk7XG5cblxuICAgICAgICBsZXQgbGlUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxldCBsYWJlbFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGFiZWxQcmlvcml0eS5pbm5lclRleHQgPSBcIlByaW9ydHlcIjtcbiAgICAgICAgbGV0IGlucHV0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcblxuICAgICAgICBsZXQgc2VsZWN0T3B0aW9ucyA9IFsnbG93JywgJ21lZGl1bScsICdoaWdoJ107XG5cbiAgICAgICAgc2VsZWN0T3B0aW9ucy5mb3JFYWNoKG9wID0+IHtcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBvcDtcbiAgICAgICAgICAgIGlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGlUaHJlZS5hcHBlbmRDaGlsZChsYWJlbFByaW9yaXR5KTtcbiAgICAgICAgbGlUaHJlZS5hcHBlbmRDaGlsZChpbnB1dFByaW9yaXR5KTtcblxuICAgICAgICBsZXQgbGlGb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGlGb3VyLmNsYXNzTGlzdC5hZGQoXCJsYXN0TGlcIik7XG4gICAgICAgIGxldCBsYWJlbERlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxhYmVsRGVzLmlubmVyVGV4dCA9IFwiRGVzY3JpcHRpb25cIlxuICAgICAgICBsZXQgaW5wdXREZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0QXJlYScpO1xuICAgICAgICBsaUZvdXIuYXBwZW5kQ2hpbGQobGFiZWxEZXMpO1xuICAgICAgICBsaUZvdXIuYXBwZW5kQ2hpbGQoaW5wdXREZXMpO1xuXG4gICAgICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvZG9Gb3JtQnV0dG9uJylcbiAgICAgICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvZG9BZGRCdXR0b24nKVxuICAgICAgICBhZGRCdXR0b24uaW5uZXJUZXh0ID0gJ0FkZCc7XG5cbiAgICAgICAgbGV0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgndG9kb0Zvcm1CdXR0b24nKVxuICAgICAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgndG9kb0NhbmNlbEJ1dHRvbicpXG4gICAgICAgIGNhbmNlbEJ1dHRvbi5pbm5lclRleHQgPSAnQ2FuY2VsJztcblxuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaVR3byk7XG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlUaHJlZSk7XG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlGb3VyKTtcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChsaXN0KTtcblxuICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVUb2RvRm9ybSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgcmVtb3ZlVG9kb0Zvcm0gPSAoKSA9PiB7XG4gICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9Gb3JtJyk7XG4gICAgICAgIHJpZ2h0LnJlbW92ZUNoaWxkKGZvcm0pO1xuICAgIH1cblxuICAgIGxldCByZW1vdmVUb2RvRm9ybUJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVG9kb0ljb24nKTtcbiAgICAgICAgbGV0IGNoZWNrVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9Gb3JtJyk7XG5cbiAgICAgICAgYWRkVG9kb0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxuICAgICAgICBpZiAoY2hlY2tUd28gIT0gbnVsbCkge1xuICAgICAgICAgICAgcmVtb3ZlVG9kb0Zvcm0oKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIGxldCB1cGRhdGVQcmlvcml0eU1hcmtlciA9IChpbmRleCwgb2xkUHJpb3JpdHksIG5ld1ByaW9yaXR5KSA9PiB7XG4gICAgICAgIGxldCB0b2RvTGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdG9kb18ke2luZGV4fWApO1xuICAgICAgICB0b2RvTGkuY2xhc3NMaXN0LnJlbW92ZShvbGRQcmlvcml0eSk7XG4gICAgICAgIHRvZG9MaS5jbGFzc0xpc3QuYWRkKG5ld1ByaW9yaXR5KTtcbiAgICB9O1xuXG4gICAgbGV0IHVwZGF0ZVRpdGxlID0gKGluZGV4LCBuZXdUaXRsZSkgPT4ge1xuICAgICAgICBsZXQgdG9kb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RvZG9fJHtpbmRleH0gLnRvZG9UaXRsZVBgKTtcbiAgICAgICAgdG9kb1RpdGxlLmlubmVyVGV4dCA9IG5ld1RpdGxlO1xuICAgIH07XG5cbiAgICBsZXQgdXBkYXRlRHVlRGF0ZSA9IChpbmRleCwgbmV3RHVlRGF0ZSkgPT4ge1xuICAgICAgICBsZXQgdG9kb0R1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0b2RvXyR7aW5kZXh9IC5kdWVEYXRlUGApO1xuICAgICAgICB0b2RvRHVlLmlubmVyVGV4dCA9IChuZXdEdWVEYXRlID09IFwiXCIpID8gXCJObyBEdWUgRGF0ZVwiIDogbmV3RHVlRGF0ZTtcblxuICAgIH07XG5cbiAgICBsZXQgcmVtb3ZlVG9kbyA9IChpbmRleCkgPT4ge1xuICAgICAgICBsZXQgdG9kb1RvQmVSZW1vdmVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RvZG9fJHtpbmRleH1gKTtcbiAgICAgICAgbGV0IGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsVG9kb3MgdWwnKTtcbiAgICAgICAgY29udGFpbmVycy5yZW1vdmVDaGlsZCh0b2RvVG9CZVJlbW92ZWQpO1xuXG5cbiAgICAgICAgbGV0IGtleSA9IGNvbnRhaW5lcnMuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICAgICAgbGV0IG5ld0luZGV4ID0gMDtcbiAgICAgICAgd2hpbGUgKGtleSAhPSBudWxsKSB7XG4gICAgICAgICAgICBrZXkuaWQgPSBgdG9kb18ke25ld0luZGV4fWA7XG4gICAgICAgICAgICBuZXdJbmRleCsrO1xuICAgICAgICAgICAga2V5ID0ga2V5Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQgY2xlYXJSaWdodFNpZGUgPSAobmV3SGVhZGVyKSA9PiB7XG4gICAgICAgIHJlbW92ZVRvZG9Gb3JtQnV0dG9uKCk7XG4gICAgICAgIHVwZGF0ZVJpZ2h0SGVhZGVyKG5ld0hlYWRlcik7XG4gICAgICAgIHVwZGF0ZVRvRG9TZWN0aW9uKFtdKTtcbiAgICB9O1xuXG4gICAgbGV0IG5vbkVkaXRhYmxlVG9kbyA9ICh0b2RvTGlzdCkgPT4ge1xuICAgICAgICBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICB0b2RvTGlzdC5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgndG9kb0xpJyk7XG4gICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKCdub25FZGl0TW9kZScpO1xuICAgICAgICAgICAgbGkuaWQgPSBgdG9kb18ke2luZGV4fWA7XG5cbiAgICAgICAgICAgIGxldCB0b3BDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRvcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b3BDb250YWluZXInKTtcblxuICAgICAgICAgICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tCb3gnKTtcbiAgICAgICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChrZXkuZG9uZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGVja2JveC5pZCA9IGB0b2RvQ2hlY2tfJHtpbmRleH1gXG5cblxuICAgICAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwLmNsYXNzTGlzdC5hZGQoJ3RvZG9UaXRsZVAnKTtcbiAgICAgICAgICAgIHAuaW5uZXJUZXh0ID0ga2V5LnRpdGxlO1xuXG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgndG9kb0xhYmVsJyk7XG4gICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGB0b2RvQ2hlY2tfJHtpbmRleH1gKTtcbiAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnbmFtZScsIGB0b2RvXyR7aW5kZXh9YCk7XG4gICAgICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChwKTtcblxuICAgICAgICAgICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2R1ZURhdGVQJyk7XG4gICAgICAgICAgICBpZiAoa2V5LmR1ZURhdGUgPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGR1ZURhdGUuaW5uZXJUZXh0ID0gXCJObyBEdWUgRGF0ZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZHVlRGF0ZS5pbm5lclRleHQgPSBrZXkuZHVlRGF0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2Ryb3BEb3duQ29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltZy5zcmMgPSBkcm9wRG93bjtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoJ2Ryb3BEb3duSWNvbicpO1xuXG5cblxuXG4gICAgICAgICAgICB0b3BDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpXG4gICAgICAgICAgICB0b3BDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgdG9wQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgICAgICAgdG9wQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG5cblxuICAgICAgICAgICAgbGV0IGVkaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICAgICAgZWRpdEZvcm0uY2xhc3NMaXN0LmFkZCgnZWRpdFRvZG9Gb3JtJyk7XG5cbiAgICAgICAgICAgIGxldCBkaXZPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdk9uZS5jbGFzc0xpc3QuYWRkKCd0b2RvRWRpdERpdicpO1xuICAgICAgICAgICAgbGV0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgdGl0bGVMYWJlbC5pbm5lclRleHQgPSBcIlRpdGxlXCI7XG4gICAgICAgICAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShgZm9yYCwgYHRpdGxlRWRpdCR7aW5kZXh9YCk7XG4gICAgICAgICAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0ga2V5LnRpdGxlO1xuICAgICAgICAgICAgdGl0bGVJbnB1dC5pZCA9IGB0aXRsZUVkaXQke2luZGV4fWA7XG4gICAgICAgICAgICB0aXRsZUlucHV0LnJlYWRPbmx5ID0gdHJ1ZTtcblxuICAgICAgICAgICAgZGl2T25lLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgICAgICAgICAgZGl2T25lLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gICAgICAgICAgICBsZXQgZGl2VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXZUd28uY2xhc3NMaXN0LmFkZCgndG9kb0VkaXREaXYnKTtcbiAgICAgICAgICAgIGxldCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgZHVlRGF0ZUxhYmVsLmlubmVyVGV4dCA9IFwiRHVlIERhdGVcIjtcbiAgICAgICAgICAgIGR1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGBkdWVFZGl0JHtpbmRleH1gKTtcbiAgICAgICAgICAgIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgICAgICAgICBkdWVEYXRlSW5wdXQuaWQgPSBgZHVlRWRpdCR7aW5kZXh9YDtcbiAgICAgICAgICAgIGR1ZURhdGVJbnB1dC5kZWZhdWx0VmFsdWUgPSBrZXkuZHVlRGF0ZTtcbiAgICAgICAgICAgIGR1ZURhdGVJbnB1dC5yZWFkT25seSA9IHRydWU7XG5cbiAgICAgICAgICAgIGRpdlR3by5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xuICAgICAgICAgICAgZGl2VHdvLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG5cbiAgICAgICAgICAgIGxldCBkaXZUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2VGhyZWUuY2xhc3NMaXN0LmFkZCgndG9kb0VkaXREaXYnKTtcbiAgICAgICAgICAgIGxldCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIHByaW9yaXR5TGFiZWwuaW5uZXJUZXh0ID0gXCJQcmlvcml0eVwiXG4gICAgICAgICAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYHByaW9yaXR5RWRpdCR7aW5kZXh9YCk7XG4gICAgICAgICAgICBsZXQgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBwcmlvcml0eUlucHV0LmlkID0gYHByaW9yaXR5RWRpdCR7aW5kZXh9YDtcbiAgICAgICAgICAgIHByaW9yaXR5SW5wdXQudmFsdWUgPSBrZXkucHJpb3JpdHk7XG4gICAgICAgICAgICBwcmlvcml0eUlucHV0LnJlYWRPbmx5ID0gdHJ1ZTtcblxuXG5cbiAgICAgICAgICAgIGRpdlRocmVlLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgICAgICAgICAgZGl2VGhyZWUuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG5cbiAgICAgICAgICAgIGxldCBkaXZGb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXZGb3VyLmNsYXNzTGlzdC5hZGQoJ3RvZG9FZGl0RGl2Jyk7XG4gICAgICAgICAgICBkaXZGb3VyLmNsYXNzTGlzdC5hZGQoJ3RvZG9FZGl0TGFzdERpdicpO1xuICAgICAgICAgICAgbGV0IGRlc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGRlc0xhYmVsLmlubmVyVGV4dCA9IFwiRGVzY3JpcHRpb25cIjtcbiAgICAgICAgICAgIGxldCBkZXNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgICBkZXNJbnB1dC5yZWFkT25seSA9IHRydWU7XG5cbiAgICAgICAgICAgIGRlc0lucHV0LnZhbHVlID0ga2V5LmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgZGl2Rm91ci5hcHBlbmRDaGlsZChkZXNMYWJlbCk7XG4gICAgICAgICAgICBkaXZGb3VyLmFwcGVuZENoaWxkKGRlc0lucHV0KTtcblxuICAgICAgICAgICAgbGV0IGRpdkZpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdkZpdmUuY2xhc3NMaXN0LmFkZCgndG9kb0VkaXREaXYnKTtcbiAgICAgICAgICAgIGRpdkZpdmUuY2xhc3NMaXN0LmFkZCgndG9kb0VkaXRMYXN0RGl2Jyk7XG4gICAgICAgICAgICBsZXQgbm90ZXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBub3Rlc0xhYmVsLmlubmVyVGV4dCA9IFwiTm90ZXNcIjtcbiAgICAgICAgICAgIGxldCBub3Rlc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgICAgIG5vdGVzSW5wdXQucmVhZE9ubHkgPSB0cnVlO1xuXG4gICAgICAgICAgICBub3Rlc0lucHV0LnZhbHVlID0ga2V5Lm5vdGVzO1xuICAgICAgICAgICAgZGl2Rml2ZS5hcHBlbmRDaGlsZChub3Rlc0xhYmVsKTtcbiAgICAgICAgICAgIGRpdkZpdmUuYXBwZW5kQ2hpbGQobm90ZXNJbnB1dCk7XG5cbiAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGRpdk9uZSk7XG4gICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChkaXZUd28pO1xuICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZGl2VGhyZWUpO1xuICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZGl2Rm91cik7XG4gICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChkaXZGaXZlKTtcblxuXG4gICAgICAgICAgICBsaS5hcHBlbmRDaGlsZCh0b3BDb250YWluZXIpO1xuICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZWRpdEZvcm0pO1xuXG4gICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKGAke2tleS5wcmlvcml0eX1gKTtcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcblxuICAgICAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsaUNsYXNzZXMgPSBBcnJheS5mcm9tKGxpLmNsYXNzTGlzdCk7XG4gICAgICAgICAgICAgICAgaWYgKGxpQ2xhc3Nlcy5pbmNsdWRlcyhcImV4cGFuZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IGRyb3BEb3duO1xuICAgICAgICAgICAgICAgICAgICBlZGl0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKCdleHBhbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IHVwO1xuICAgICAgICAgICAgICAgICAgICBlZGl0Rm9ybS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHVsO1xuICAgIH1cblxuICAgIGxldCBzZXR1cEFsbFRvZG9Qcm9qZWN0ID0gKHByb2plY3RMaXN0KSA9PiB7XG4gICAgICAgIGFkZEhlYWRlck1hcmdpbigpO1xuICAgICAgICByZW1vdmVUb2RvRm9ybUJ1dHRvbigpO1xuICAgICAgICB1cGRhdGVSaWdodEhlYWRlcignQWxsIFRvZG9zJyk7XG4gICAgICAgIGxldCBhbGxUb2Rvc0NvbnRhaW5lciA9IHJpZ2h0LmZpcnN0RWxlbWVudENoaWxkLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgYWxsVG9kb3NDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHVsID0gbm9uRWRpdGFibGVUb2RvKHByb2plY3RMaXN0W2ldLnRvZG9MaXN0KTtcbiAgICAgICAgICAgIGFsbFRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKHVsKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQgcmVtb3ZlSGVhZGVyTWFyZ2luID0gKCkgPT4ge1xuICAgICAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5yaWdodFNpZGVIZWFkZXInICk7IFxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnbm9FZGl0SGVhZGVyJyk7XG4gICAgfTtcblxuICAgIGxldCBhZGRIZWFkZXJNYXJnaW4gPSAoKSA9PiB7XG4gICAgICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnJpZ2h0U2lkZUhlYWRlcicgKTsgXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdub0VkaXRIZWFkZXInKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRQcm9qZWN0LCBwcm9qZWN0Rm9ybSwgcmVtb3ZlUHJvamVjdEZvcm0sXG4gICAgICAgIHJlbW92ZVByb2plY3QsIHVwZGF0ZVJpZ2h0U2lkZSxcbiAgICAgICAgYWRkVG9kb0Zvcm0sIHJlbW92ZVRvZG9Gb3JtLCByZW1vdmVUb2RvRm9ybUJ1dHRvbixcbiAgICAgICAgdXBkYXRlUHJpb3JpdHlNYXJrZXIsIHVwZGF0ZVRpdGxlLCB1cGRhdGVEdWVEYXRlLFxuICAgICAgICByZW1vdmVUb2RvLCBjbGVhclJpZ2h0U2lkZSwgc2V0dXBBbGxUb2RvUHJvamVjdCxcbiAgICAgICAgcmVtb3ZlSGVhZGVyTWFyZ2luLCByZW1vdmVIZWFkZXJNYXJnaW5cbiAgICB9O1xufVxuKSgpO1xuXG5leHBvcnQgZGVmYXVsdCBET01fTW9kdWxlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBkb21DaGFuZ2VyIGZyb20gJy4vRE9Nc2NyaXB0JztcblxuY2xhc3MgVG9kb0l0ZW17XG4gICAgY29uc3RydWN0b3IoIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIC4uLmFyZ3Mpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLm5vdGVzID0gISggYXJnc1swXSApID8gJyc6IGFyZ3NbMF07XG4gICAgICAgIHRoaXMuZG9uZSA9ICEoIGFyZ3NbMV0gKSA/IGZhbHNlOiB0cnVlO1xuICAgIH1cbn1cblxuY2xhc3MgUHJvamVjdHtcbiAgICBjb25zdHJ1Y3RvciggdGl0bGUpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMudG9kb0xpc3QgPSBbXTtcbiAgICB9XG59XG5cbmxldCBwcm9qZWN0TGlzdCA9IFtdO1xubGV0IGN1cnJlbnRQcm9qZWN0SW5kZXg7XG5cblxuZnVuY3Rpb24gc2V0VG9kb0J1dHRvbnNMaXN0bmVycygpe1xuICAgICAgICBsZXQgc3VtYml0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0QnV0dG9uc1NlY3Rpb24gLmVkaXRTdWJtaXQnKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHN1bWJpdHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgc3VtYml0c1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgbGV0IHRvZG9JbmRleCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZC5zcGxpdCgnXycpWzFdO1xuICAgICAgICAgICAgbGV0IG5ld1RpdGxlID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcudmFsdWU7XG4gICAgICAgICAgICBsZXQgbmV3RHVlRGF0ZSA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLm5leHRFbGVtZW50U2libGluZy52YWx1ZTtcbiAgICAgICAgICAgIGxldCBuZXdQcmlvcml0eSA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcudmFsdWU7XG4gICAgICAgICAgICBsZXQgbmV3RGVzID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcudmFsdWU7XG4gICAgICAgICAgICBsZXQgbmV3Tm90ZXMgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmZpcnN0RWxlbWVudENoaWxkLm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcudmFsdWU7XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKCAhKHByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRvZG9MaXN0W3RvZG9JbmRleF0udGl0bGUgPT09IG5ld1RpdGxlKSApe1xuICAgICAgICAgICAgICAgIGRvbUNoYW5nZXIudXBkYXRlVGl0bGUodG9kb0luZGV4LCBuZXdUaXRsZSk7XG4gICAgICAgICAgICAgICAgcHJvamVjdExpc3RbY3VycmVudFByb2plY3RJbmRleF0udG9kb0xpc3RbdG9kb0luZGV4XS50aXRsZSA9IG5ld1RpdGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoICEocHJvamVjdExpc3RbY3VycmVudFByb2plY3RJbmRleF0udG9kb0xpc3RbdG9kb0luZGV4XS5kdWVEYXRlID09PSBuZXdEdWVEYXRlKSApe1xuICAgICAgICAgICAgICAgIGRvbUNoYW5nZXIudXBkYXRlRHVlRGF0ZSggdG9kb0luZGV4LCBuZXdEdWVEYXRlKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdFtjdXJyZW50UHJvamVjdEluZGV4XS50b2RvTGlzdFt0b2RvSW5kZXhdLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoICEocHJvamVjdExpc3RbY3VycmVudFByb2plY3RJbmRleF0udG9kb0xpc3RbdG9kb0luZGV4XS5wcmlvcml0eSA9PSBuZXdQcmlvcml0eSkpe1xuICAgICAgICAgICAgICAgIGRvbUNoYW5nZXIudXBkYXRlUHJpb3JpdHlNYXJrZXIodG9kb0luZGV4ICwgcHJvamVjdExpc3RbY3VycmVudFByb2plY3RJbmRleF0udG9kb0xpc3RbdG9kb0luZGV4XS5wcmlvcml0eSwgbmV3UHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgIHByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRvZG9MaXN0W3RvZG9JbmRleF0ucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdFtjdXJyZW50UHJvamVjdEluZGV4XS50b2RvTGlzdFt0b2RvSW5kZXhdLmRlc2NyaXB0aW9uID0gbmV3RGVzO1xuICAgICAgICAgICAgICAgIHByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRvZG9MaXN0W3RvZG9JbmRleF0ubm90ZXMgPSBuZXdOb3RlcztcblxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCBcImxvY2FsUHJvamVjdExpc3RcIiAsIEpTT04uc3RyaW5naWZ5KCBwcm9qZWN0TGlzdCkgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICBsZXQgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvTGkgLmNoZWNrQm94Jyk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGNoZWNrYm94ZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICBjaGVja2JveGVzW2ldLmFkZEV2ZW50TGlzdGVuZXIoICdjaGFuZ2UnICwgKCBldmVudCkgPT57XG4gICAgICAgICAgICBsZXQgdG9kb0luZGV4ID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZC5zcGxpdCgnXycpWzFdO1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdExpc3RbY3VycmVudFByb2plY3RJbmRleF0udG9kb0xpc3RbdG9kb0luZGV4XS5kb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSggXCJsb2NhbFByb2plY3RMaXN0XCIgLCBKU09OLnN0cmluZ2lmeSggcHJvamVjdExpc3QpICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRvZG9MaXN0W3RvZG9JbmRleF0uZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCBcImxvY2FsUHJvamVjdExpc3RcIiAsIEpTT04uc3RyaW5naWZ5KCBwcm9qZWN0TGlzdCkgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdEJ1dHRvbnNTZWN0aW9uIC5lZGl0RGVsZXRlJyk7XG4gICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBkZWxldGVCdXR0b25zLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJyAsICggZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGxldCB0b2RvSW5kZXggPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQuc3BsaXQoJ18nKVsxXTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRvZG9MaXN0LnNwbGljZSggdG9kb0luZGV4LCAxKTtcbiAgICAgICAgICAgIGRvbUNoYW5nZXIucmVtb3ZlVG9kbyggdG9kb0luZGV4KTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCBcImxvY2FsUHJvamVjdExpc3RcIiAsIEpTT04uc3RyaW5naWZ5KCBwcm9qZWN0TGlzdCkgKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0TGlzdG5lciggaW5kZXggKXtcbiAgICBsZXQgeEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIGAucHJvamVjdC5fJHtpbmRleH0gaW1nYCApO1xuICAgICAgICB4QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBsZXQgY2xhc3NlcyA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdDtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IGNsYXNzZXNbMV0uc3BsaXQoXCJcIilbMV07XG5cbiAgICAgICAgICAgIGlmKCBpbmRleCA9PSBjdXJyZW50UHJvamVjdEluZGV4ICl7XG4gICAgICAgICAgICAgICAgZG9tQ2hhbmdlci5jbGVhclJpZ2h0U2lkZSgnZGVsZXRlZCA6XScpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0SW5kZXggPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKCBpbmRleCA8IGN1cnJlbnRQcm9qZWN0SW5kZXgpe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0SW5kZXgtLTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJvamVjdExpc3Quc3BsaWNlKCBpbmRleCwgMSk7XG4gICAgICAgICAgICBkb21DaGFuZ2VyLnJlbW92ZVByb2plY3QoY2xhc3Nlc1sxXSlcbiAgICAgICAgICAgIGlmKCBwcm9qZWN0TGlzdC5sZW5ndGggPT0gMCApe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0SW5kZXggPSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oIFwibG9jYWxQcm9qZWN0TGlzdFwiICwgSlNPTi5zdHJpbmdpZnkoIHByb2plY3RMaXN0KSApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xufVxuXG5cbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbFByb2plY3RMaXN0XCIpKSB7XG5cbn0gXG5lbHNlIHtcblxuICAgIGxldCBzYXZlZExvY2FsID0gIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsUHJvamVjdExpc3QnKSk7XG4gICAgXG4gICAgZm9yKCBsZXQgaSA9IDAgOyBpIDwgc2F2ZWRMb2NhbC5sZW5ndGggOyBpKyspe1xuICAgICAgICBsZXQgbmV3UHJvamVjdEluZGV4ID0gcHJvamVjdExpc3QubGVuZ3RoO1xuICAgICAgICBkb21DaGFuZ2VyLmFkZFByb2plY3QoIHNhdmVkTG9jYWxbaV0udGl0bGUsIG5ld1Byb2plY3RJbmRleCk7XG4gICAgICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoIHNhdmVkTG9jYWxbaV0udGl0bGUgKTtcbiAgICAgICAgcHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgZGVsZXRlUHJvamVjdExpc3RuZXIoIG5ld1Byb2plY3RJbmRleCApO1xuXG4gICAgICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggYC5wcm9qZWN0Ll8ke25ld1Byb2plY3RJbmRleH1gICk7XG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRvbUNoYW5nZXIucmVtb3ZlSGVhZGVyTWFyZ2luKCk7XG4gICAgICAgICAgICBkb21DaGFuZ2VyLnJlbW92ZUhlYWRlck1hcmdpbigpO1xuICAgICAgICAgICAgbGV0IHR5cGUgPSBldmVudC50YXJnZXQubm9kZU5hbWU7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0O1xuXG4gICAgICAgICAgICBpZiggdHlwZSA9PSBcIkxJXCIgKXtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY2xpY2tlZFByb2plY3RJbmRleCA9IHRhcmdldC5jbGFzc0xpc3RbMV0uc3BsaXQoXCJcIilbMV07XG5cbiAgICAgICAgICAgIGlmKCBjbGlja2VkUHJvamVjdEluZGV4ID09PSBjdXJyZW50UHJvamVjdEluZGV4KXtcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0SW5kZXggPSBjbGlja2VkUHJvamVjdEluZGV4O1xuICAgICAgICAgICAgICAgIGRvbUNoYW5nZXIudXBkYXRlUmlnaHRTaWRlKCBwcm9qZWN0TGlzdFtjdXJyZW50UHJvamVjdEluZGV4XSApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0VG9kb0J1dHRvbnNMaXN0bmVycygpXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgdG9kb0xpc3QgPSBzYXZlZExvY2FsW2ldLnRvZG9MaXN0O1xuXG4gICAgICAgIGZvciggbGV0IGogPSAwIDsgaiA8IHRvZG9MaXN0Lmxlbmd0aCA7IGorKyl7XG4gICAgICAgICAgICBsZXQgdGl0bGUgPSB0b2RvTGlzdFtqXS50aXRsZTtcbiAgICAgICAgICAgIGxldCBkdWVEYXRlID0gdG9kb0xpc3Rbal0uZHVlRGF0ZTtcbiAgICAgICAgICAgIGxldCBwcmlvcml0eSA9IHRvZG9MaXN0W2pdLnByaW9yaXR5O1xuICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gdG9kb0xpc3Rbal0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICBsZXQgbm90ZXMgPSB0b2RvTGlzdFtqXS5ub3RlcztcbiAgICAgICAgICAgIGxldCBkb25lID0gdG9kb0xpc3Rbal0uZG9uZTtcblxuXG4gICAgICAgICAgICBsZXQgbmV3VG9kbyA9IG5ldyBUb2RvSXRlbSggdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSAsIG5vdGVzICwgZG9uZSk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdFtpXS50b2RvTGlzdC5wdXNoKG5ld1RvZG8pO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZG9tQ2hhbmdlci5zZXR1cEFsbFRvZG9Qcm9qZWN0KCBwcm9qZWN0TGlzdCApO1xuXG5cbmxldCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb25BZGRQcm9qZWN0Jyk7XG5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG5cbiAgICBkb21DaGFuZ2VyLnByb2plY3RGb3JtKCk7XG5cbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0QnV0dG9uXCIpO1xuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdElucHV0XCIpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGlucHV0LnZhbHVlO1xuICAgICAgICBsZXQgbmV3UHJvamVjdEluZGV4ID0gcHJvamVjdExpc3QubGVuZ3RoO1xuXG4gICAgICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoIHByb2plY3ROYW1lICk7XG4gICAgICAgIHByb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCBcImxvY2FsUHJvamVjdExpc3RcIiAsIEpTT04uc3RyaW5naWZ5KCBwcm9qZWN0TGlzdCkgKTtcbiAgICAgICAgZG9tQ2hhbmdlci5hZGRQcm9qZWN0KCBwcm9qZWN0TmFtZSwgbmV3UHJvamVjdEluZGV4KTtcbiAgICAgICAgZG9tQ2hhbmdlci5yZW1vdmVQcm9qZWN0Rm9ybSgpO1xuXG4gICAgICAgIGRlbGV0ZVByb2plY3RMaXN0bmVyKCBuZXdQcm9qZWN0SW5kZXggKTtcblxuICAgICAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIGAucHJvamVjdC5fJHtuZXdQcm9qZWN0SW5kZXh9YCApO1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBsZXQgdHlwZSA9IGV2ZW50LnRhcmdldC5ub2RlTmFtZTtcbiAgICAgICAgICAgIGxldCB0YXJnZXQ7XG5cbiAgICAgICAgICAgIGlmKCB0eXBlID09IFwiTElcIiApe1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBjbGlja2VkUHJvamVjdEluZGV4ID0gdGFyZ2V0LmNsYXNzTGlzdFsxXS5zcGxpdChcIlwiKVsxXTtcblxuICAgICAgICAgICAgaWYoIGNsaWNrZWRQcm9qZWN0SW5kZXggPT09IGN1cnJlbnRQcm9qZWN0SW5kZXgpe1xuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3RJbmRleCA9IGNsaWNrZWRQcm9qZWN0SW5kZXg7XG4gICAgICAgICAgICAgICAgZG9tQ2hhbmdlci51cGRhdGVSaWdodFNpZGUoIHByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0SW5kZXhdICk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxubGV0IGFsbFRvZG9Qcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbFRvZG9Qcm9qZWN0Jyk7XG5hbGxUb2RvUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PntcbiAgICBjdXJyZW50UHJvamVjdEluZGV4ID0gdW5kZWZpbmVkO1xuICAgIGRvbUNoYW5nZXIuc2V0dXBBbGxUb2RvUHJvamVjdCggcHJvamVjdExpc3QgKTtcbiAgICBjb25zb2xlLmxvZyggcHJvamVjdExpc3QgKTtcbn0pO1xuXG5sZXQgYWRkVG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRvZG9JY29uXCIpO1xuYWRkVG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT57XG4gICAgZG9tQ2hhbmdlci5hZGRUb2RvRm9ybSgpO1xuICAgIGxldCBhZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0FkZEJ1dHRvbicpO1xuICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRUaXRsZScpO1xuICAgICAgICBsZXQgZHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlSW5wdXRcIik7XG4gICAgICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9Gb3JtIHNlbGVjdFwiKTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvRm9ybSB0ZXh0QXJlYVwiKTtcblxuICAgICAgICBcbiAgICAgICAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kb0l0ZW0oIHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSxkdWUudmFsdWUsIHNlbGVjdC52YWx1ZSk7XG4gICAgICAgIHByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRvZG9MaXN0LnB1c2gobmV3VG9kbyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCBcImxvY2FsUHJvamVjdExpc3RcIiAsIEpTT04uc3RyaW5naWZ5KCBwcm9qZWN0TGlzdCkgKTtcbiAgICAgICAgZG9tQ2hhbmdlci5yZW1vdmVUb2RvRm9ybSgpO1xuICAgICAgICBkb21DaGFuZ2VyLnVwZGF0ZVJpZ2h0U2lkZSggcHJvamVjdExpc3RbY3VycmVudFByb2plY3RJbmRleF0gKTtcblxuXG4gICAgICAgIC8vY29kZSBnb2VzIGhlcmVcbiAgICAgICAgc2V0VG9kb0J1dHRvbnNMaXN0bmVycygpO1xuXG4gICAgfSk7ICAgICAgICAgICAgICAgIFxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9