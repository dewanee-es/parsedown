(function(){
  "use strict";
 
  this.Html2Markdown = function (TurndownService, gfm) {
    var turndownService = new TurndownService({
      hr: '- - -',
      emDelimiter: '*'
    });
    
    turndownService.use(gfm);
    turndownService.remove(['title', 'style', 'script']);

    return Object.freeze({
      convert: function(html) {
        return turndownService.turndown(html);
      }});        
  };
 
}).call(this);