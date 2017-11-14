import object_inheritance from './lib/object_inheritance.js';

console.log(object_inheritance());

//import {symbols} from './lib/symbols.js';
//import BuiltInObjects from './lib/builtin_objects.js';



// symbols();
// BuiltInObjects();


/* when importing

  1. if its a regular export you have to use {}
  2. if its a default export you can refer to object directly without {}

 */

/* this import does not import a value but makes a reference to and object */
/*
import someText,{keyValue as key,test,classes_and_prototypes,subclassing} from './lib/modules_and_classes.js';

classes_and_prototypes();
subclassing();
*/
/*
import * as syntaxChangesAndAdditions from './lib/syntax_changes_and_additions.js';

syntaxChangesAndAdditions.letExamples();
syntaxChangesAndAdditions.constExample();
syntaxChangesAndAdditions.hoisting();
syntaxChangesAndAdditions.fat_arrow_function();
syntaxChangesAndAdditions.function_and_this_keyword();
syntaxChangesAndAdditions.function_default_params();
syntaxChangesAndAdditions.object_literals();
syntaxChangesAndAdditions.rast_and_spread();
syntaxChangesAndAdditions.destructuring();
                                                */