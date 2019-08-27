var argv = require('yargs')
    .usage('Usage: $0 [options]')
    .example('$0 -i input.html -o output.md', 'convert the given file to markdown writing to another file')
    .nargs('i', 1)
    .nargs('o', 1)
    .describe('i', 'Input file (HTML)')
    .describe('o', 'Output file (Markdown)')
    .demandOption(['i'])
    .help('h')
    .alias('h', 'help')
    .argv;

var TurndownService = require('turndown');
var turndownPluginGfm = require('turndown-plugin-gfm');
var converter = require('./convert.js').Html2Markdown(TurndownService, turndownPluginGfm.gfm); 
