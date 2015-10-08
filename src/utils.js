var utils = {
  extendDefaults: function (defaults, opts) {
    // for ( var k in opts ) {
    //   if ( defaults[k] && opts[k] && typeof opts[k] === 'object') {
    //     options.push(extendDefaults(defaults[k], opts[k]));
    //   } else {
    //   }
    // }
  },

  createInput: function ( el, type ) {
    let input = document.createElement('input'),
      context = el.innerText;

    el.innerHTML = '<span>' + context + '</span>';
    input.type = type;
    input.value = context;
    input.name = el.title;
    input.addEventListener("change", function () {
      el.firstChild.innerText = input.value;
    }, false);

    return input;
  },

  createTextArea: function ( el, type ) {
    let input = '',
      context = el.innerHTML;

    if ( type === 'textarea') {
      input = document.createElement('textarea');
      el.innerHTML = '<span>' + context + '</span>';
      input.value = context;
      input.name = el.title;

      input.addEventListener("change", function() {
        el.firstChild.innerHTML = input.value;
      }, false);
    } else {
      input = document.createElement('input');
      input.type = 'hidden';
      input.name = el.title;
      input.value = el.innerHTML;
      el.contentEditable = true;
      el.addEventListener("blur", function() {
        el.lastChild.value = el.innerHTML;
      }, false);
    }
    return input;
  }
};

module.exports = utils;
