class Object {
    constructor() {
        this.index = null;
        this.x = 0
        this.y = 0
    }

    update(i,x,y) {
        var objectIndex = "objects/object" + i;
        database.ref(objectIndex).set({
            x: x,
            y: y,
        });
    }

    static getObjectInfo() {
        var objectInfoRef = database.ref('objects');
        objectInfoRef.on("value", (data) => {
            allObjects = data.val();
        })
    }

    
}