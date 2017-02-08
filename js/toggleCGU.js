$(document).ready(function(){
   // On cache la zone de texte
   $('#cguShow').hide();
   // toggle() lorsque le lien avec l'ID #toggler est cliqué
   $('#cgu').click(function(){
      $('#cguShow').toggle(400);
      return false;
   });
});