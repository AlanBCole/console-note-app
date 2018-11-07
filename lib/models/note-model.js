"use strict";
class Note {
    constructor(title, body, tags, dateCreated = new Date()) {
        this._tags = [];
        this.title = title;
        this.body = body;
        // this.addTags(tags);
        this.dateCreated = dateCreated;
    }
    set addTags(tagString) {
        this._tags = [...this._tags, ...tagString.split(" ")];
    }
    get getTags() {
        return this._tags.join(" ");
    }
}
module.exports = Note;
