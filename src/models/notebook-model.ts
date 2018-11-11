import { Note } from './note-model';
 
export class Notebook {
    
    constructor(public title: string, private _notes: Note[] = []) {}
    
    get tableOfContents() {
        let TOC = this._notes.map((note, index) => `${index} -- ${note.title}`);
        
        if (TOC.length === 0) { return `The notebook '${this.title}' is empty.`; }
        
        else { return TOC; }
    }
    
    public newNote(title: string, body: string, tags: string) {
        let theNewNote = new Note(this._notes.length, title, body, tags);
        this.saveNote(theNewNote);
        this.openNote(theNewNote);
    }
    
    private saveNote(note: Note) {
        // add a note to the notes array
        this._notes.push(note);
    }
    
    public openNote(note: Note) {
        // show and edit the note contents
        console.log('The New Note: ', note);
    }
    
    public closeNote(note: Note) {
        this.saveNote(note);
        return this.tableOfContents;
    }
}
