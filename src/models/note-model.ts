class Note {
    title: string;
    body: string;
    _lastEdit: Date;
    _tags: string[] = [];
    dateCreated: Date;
    
    constructor( title: string, body: string, tags: string, dateCreated: Date = new Date() ) {
                
            this.title = title;
            this.body = body;
            // this.addTags(tags);
            this.dateCreated = dateCreated;
    }
    
    set addTags(tagString: string) {
        this._tags = [ ...this._tags, ...tagString.split(" ") ] ; 
    }
    
    get getTags() {
        return this._tags.join(" ");
    }
}

module.exports = Note;