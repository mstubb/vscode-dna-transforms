# DNATransforms

I like using plain text editors to perform simple manipulations on DNA sequences. It's even better if they have the ability to perform common operations on those sequences such as finding the reverse complement. 

This extension is a fork of [vscode-text-transform](https://github.com/FlorianLoch/vscode-text-transform) that contains some DNA-specific transformations. They are:

`Reverse string`: reverses the highlighted string  
  
`Complement DNA`: replaces the highlighted string with its complement. Will also complement the [degenerate base codes](https://en.wikipedia.org/wiki/Nucleic_acid_notation).  
  
`Reverse complement DNA`: Replaces the highlighted string with its reverse complement. 
  
`Remove line breaks`: Acts on a selected block of text and removes all line breaks to concatenate the lines. Useful if you've just pasted in a FASTA file containing line breaks but you want to search for a particular sequence within it. Different to the built in `Join Lines` command because that replaces the line breaks with a space which isn't helpful here. 

I think this works but it hasn't been fully tested so use at your own risk and check the outputs to make sure you're getting what you expect. 

## Installation
At the moment, this needs sideloading into vscode as follows:

1. Make sure you have [node](https://nodejs.org/en/) installed.
2. Run `npm install -g vsce` to install the [Visual Studio Code Extensions tool](https://code.visualstudio.com/api/working-with-extensions/publishing-extension).
3. Clone this git repo
4. `cd vscode-dna-transforms`
5. `npm install` to install the dependencies
6. `vsce package` to build the package. This will generate a file with extension `vsix`
7. Within vscode run the command `Extensions: Install from VSIX...`, choose the vsix file generated in the previous step
