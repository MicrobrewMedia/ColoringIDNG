#target indesign

sort_par_styles (app.documents[0]);
sort_char_styles (app.documents[0]);
sort_obj_styles (app.documents[0]);

//-------------------------------------------------------------------------------

function sort_par_styles (doc)
    {
    var string_array = sort_par_names (doc);
    for (var i = 0; i < string_array.length; i++)
        doc.paragraphStyles.item (string_array[i]).move (
            LocationOptions.after, doc.paragraphStyles[i+2])
    }

function sort_par_names (doc)
  {
  var array = doc.paragraphStyles.everyItem().name;
  array.shift (); array.shift ();  // exclude [No p.] and [Basic p/]
  return array.sort (case_insensitive);
  }

//-------------------------------------------------------------------------------

function sort_char_styles (doc)
    {
    var string_array = sort_char_names (doc);
    for (var i = 0; i < string_array.length; i++)
        doc.characterStyles.item (string_array[i]).move (
            LocationOptions.after, doc.characterStyles[i+1])
    }

function sort_char_names (doc)
  {
  var array = doc.characterStyles.everyItem().name;
  array.shift ();  // exclude [None]
  return array.sort (case_insensitive);
  }

//-------------------------------------------------------------------------------

function sort_obj_styles (doc)
    {
    var string_array = sort_obj_names (doc);
    for (var i = 0; i < string_array.length; i++)
        doc.objectStyles.item (string_array[i]).move (
            LocationOptions.after, doc.objectStyles[i+4])
    }

function sort_obj_names (doc)
  {
  var array = doc.objectStyles.everyItem().name;
  array.shift (); array.shift (); array.shift ();  array.shift (); // exclude  [None], [Basic Graphics Frame], [Basic Text Frame], [Basic Grid]
  return array.sort (case_insensitive);
  }

//-------------------------------------------------------------------------------

function case_insensitive (a, b)
  {
  return a.toLowerCase() > b.toLowerCase()
  }