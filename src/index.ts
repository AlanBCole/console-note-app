const Note = require('./models/note-model');

let aNote = new Note("A Note", "Just something to write down");

aNote.addTags = "first-note experiment";

console.log(aNote.title);
console.log(aNote.body);
console.log(aNote.dateCreated);
console.log(aNote.getTags);
console.log(aNote._tags);

aNote.addTags = "another-idea";
console.log('one more tag: ', aNote.getTags)
