class Star {
    constructor(name,x,y,z,description,metric) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.z = z;
        this.description = description;
        this.arxivnumber = metric[1];
        this.citations = metric[2];
    }
}