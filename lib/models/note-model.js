"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Note {
    constructor(id, title, body, tags) {
        this.tags = [];
        let dateCreated = new Date();
        this._id = id;
        this.title = title;
        this.body = body;
        this.addTags = tags;
        this._dateCreated = dateCreated;
        this._lastEdit = dateCreated;
    }
    set addTags(tagString) {
        this.tags = [...this.tags, ...tagString.split(" ")];
    }
    get getTags() {
        return this.tags.join(" ");
    }
}
exports.Note = Note;
