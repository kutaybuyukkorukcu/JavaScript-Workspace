// Binds methods of an object to the object itself, overwriting the existing method.

// Using forEach() to return a func that uses Function.prototype.apply() to apply the given context obj to fn for each func specified.

const bindAll = (obj, ...fns) =>
  fns.forEach(
    fn => (
      (f = obj[fn]),
      (obj[fn] = function() {
        return f.apply(obj);
      })
    )
  );
  
  // Exp.
    var view = {
      label : 'docs',
      click : function() {
        console.log('clicked' + this.label);
      }
    };
    
    bindAll(view, 'click');
    jQuery(el).on('click', view.click);
    
// 🧙‍♂️👍