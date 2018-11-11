"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notebook_model_1 = require("./models/notebook-model");
let myNotebook = new notebook_model_1.Notebook('My First Book of Notes');
console.log(myNotebook.tableOfContents);
myNotebook.newNote('My First Note', 'I have a lot to write about. Not in this note, though.', 'getting-started starting');
console.log('TOC after 1 note is created:', myNotebook.tableOfContents);
// aNote.addTags = "first-note experiment";
// console.log(aNote.title);
// console.log(aNote.body);
// console.log(aNote.dateCreated);
// console.log(aNote.getTags);
// console.log(aNote._tags);
// aNote.addTags = "another-idea";
// console.log('one more tag: ', aNote.getTags)
