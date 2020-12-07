/* 
    Simple Code:
    Version: 0.1.3a
    Revision general
*/


/* INICIO MODULO SHORTCUTS / HELPERS */

// console shortcut & helper
const printl = console.log; //printl('Hola mundo');

// shortcut comprueba el valor de una variable o regresa false & helper
const isset = function(defined) {

    return is = defined || false;

}

// Shortcut devuelve un nodo html o false & helper 
function getElement(id) {

    return element = document.querySelector(id) || false;
}

//Shortcut Crea elemntos html
function createEl(tagName) {
    return document.createElement(tagName);
}

function css(params) {

    let { key, value, el } = params;

    const element = getElement(el);

    switch (key) {

        case 'color':
            element.style.color = value;
            break;

        case 'fontsize':
            element.style.fontSize = value;
            break;
        case 'background':
            element.style.background = value;
            break;

        default:
            false;
            break

    }

}

/* FIN DE MODULO SHORTCUTS / HELPERS */


/* INICIO MODULO OBJETO PERZONALIZADO */

//Creando una nueva instancia el objeto de getNode
const $ = function(identifier) {

    return new SC(identifier);

}

// Clase principal  //

const SC = function(idObject) {

    this.$ = idObject;
    this.el = getElement(idObject) || false;

}


// shortcut de EventListener
SC.prototype.on = function(evento, handlerFunc) {

    if (this.el) {
        this.el.addEventListener(evento, handlerFunc);
        return;
    }
    return;
};

// Shortcut para appendChild
SC.prototype.addChild = function(child) {
    this.el.appendChild(child);
}

// Shprtcut limpiarhtml
SC.prototype.clean = function() {
    //Forma lenta de limpiar html
    // getElement(this.$).innerHTML = '';
    while (this.el.firstChild) {
        this.el.removeChild(this.el.firstChild);
    }
}

SC.prototype.val = function() {
    return getElement(this.$).value;
}

//VALIDANDO FORMULARIOS
SC.prototype.validateForm = function() {};

/* FINAL MODULO OBJETO PERZONALIZADO */


/* MODULO DE VALIDACIONES */

//helper para validar vampos de formularios
function validateInp(e, validations) {
    printl(e.target)
}

/* FIN MODULO DE VALIDACIONES */

/* INICIO MODULO PROCESADOR DE TEXTO */

/* 
// AREA DE PROCESAMIENTO DE TEXTOS
const texto = "[#f66] o {red} y {componente}",
      regex = /\[([^\]]*)\]/g;
var grupos;

while ((grupos = regex.exec(texto)) !== null) {
//   printl("Llaves:", grupos[0], "\tPosición:", grupos.index, "\tColor:", grupos[1]);
}

*/

const getShortCuts = function(shortcut) {
    const texto1 = shortcut,
        regex = /{([^}]*)}/g;
    let grupos1;

    while ((grupos1 = regex.exec(texto1)) !== null) {
        /* printl("Llaves:", grupos1[0],"\tPosición:", grupos1.index,"\tContent:", grupos1[1],
        "\tParams:", getParams(grupos1[1])
            ); */
        let params = getParams(grupos1[1]);
        params.el = '#mostrar';
        css(params);

    }

}

function getParams(str) {
    str = str.replace(/ /g, '');
    let param = str.split('=')
    return readParams(param);
}

function readParams(params) {
    let paramsObj = {
        key: '',
        value: ''
    };

    params.forEach((param, index) => {

        if (index % 2 == 0) {
            paramsObj.key = param;
        } else {
            paramsObj.value = param;
        }

    })

    return paramsObj;
}

function cleanerStr(str) {
    let regex = /{([^}]*)}/g;
    let grupo;
    let counter = 0;
    let array = [];
    let text = grupo || str;

    while ((grupo = regex.exec(str)) !== null) {
        array.push(grupo[0]);
        text = grupo.input;
        if (text.includes(array[counter])) {
            for (let i = 0; i < array.length + 1; i++) {
                text = text.replace(array[i], '');
            }
        }
    }
    return text;
}

/* {color = red, size = 10px : este texto a rojo}
    color = red
*/

// PRUEBAS DEL PROCESADOR DE TEXTO V1
let mostrar = getElement('#mostrar');
let txt = getElement('#texto');

txt.addEventListener('keyup', () => {
    mostrar.textContent = cleanerStr(txt.value);
    getShortCuts(txt.value);
});