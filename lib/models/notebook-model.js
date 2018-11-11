"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const note_model_1 = require("./note-model");
class Notebook {
    constructor(title, _notes = []) {
        this.title = title;
        this._notes = _notes;
    }
    get tableOfContents() {
        let TOC = this._notes.map((note, index) => `${index} -- ${note.title}`);
        if (TOC.length === 0) {
            return `The notebook '${this.title}' is empty.`;
        }
        else {
            return TOC;
        }
    }
    newNote(title, body, tags) {
        let theNewNote = new note_model_1.Note(this._notes.length, title, body, tags);
        this.saveNote(theNewNote);
        this.openNote(theNewNote);
    }
    saveNote(note) {
        // add a note to the notes array
        this._notes.push(note);
    }
    openNote(note) {
        // show and edit the note contents
        console.log('The New Note: ', note);
    }
    closeNote(note) {
        this.saveNote(note);
        return this.tableOfContents;
    }
}
exports.Notebook = Notebook;
