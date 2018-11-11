export class Note {
    
    private _id: number;
    public title: string;
    public body: string;
    public tags: string[] = [];
    private _lastEdit: Date;
    private _dateCreated: Date;
    
    constructor( id: number, title: string, body: string, tags: string ) {
        
            let dateCreated = new Date();
            this._id = id;
            this.title = title;
            this.body = body;
            this.addTags = tags;
            this._dateCreated = dateCreated;
            this._lastEdit = dateCreated;
            
    }
    
    set addTags(tagString: string) {
        this.tags = [ ...this.tags, ...tagString.split(" ") ] ; 
    }
    
    get getTags() {
        return this.tags.join(" ");
    }
}