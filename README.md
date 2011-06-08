# markdoc

Markdoc is a simple way to convert documentation written in markdown into a nice looking html file.
First install markdoc:

    npm install -g markdoc

Then just run `markdoc doc.md` which outputs a single html file of the rendered markdown.

[This html file](http://mafintosh.github.com/markdoc) is the result of rendering [this markdown file](https://raw.github.com/mafintosh/markdoc/master/README.md) with markdoc.

### But wait! there is more!

Markdoc can also render markdown that is written inside comments in a code file.

    /**
     *
     * Notice the /** to indicate that this is a markdown comment
     * the leading * on each line is NOT required but I like it
     *
     */

If this was inside `module.js` then just run `markdoc module.js` to render it. 

### It's that easy!

Markdoc can also be used as a node module

    var markdoc = require('markdoc');

    // to render some markdown just do:
    var renderedMarkdown = markdoc.parse('my markdown string');
    
    // to render multiline comments from some code just do:
    var codeDocumentation = markdoc.parseCode('my code file with markdown comments');

### Happy hacking! [@mafintosh](http://twitter.com/mafintosh)
