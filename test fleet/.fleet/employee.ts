export class Employee {

    constructor(private _id?:  number, private _name?:string) {
        //met de underscore zorg je ervoor dat je een getter of setter kan schrijven lowercase, zonder dat je de underscore in je gettter of setter name moet schrijven
        //de constructor maakt door die underscore en question mark een field aan, die je kan aanspreken in je class met of zonder de underscore.
        // op deze manier moet je ook id en name niet afzonderlijk definieren en toewijzen, het gebeurd automatisch zo als je de constructor zo schrijft
    }

    getTheid() {
        // je kan een getter zo schrijven (zonder "The")
        return this.id;
    }

    get id() {
        // je kan een getter zo schrijven in lower case, omdat je id in je constructor een underscore heeft
        return this._id;
    }

    show(){
        console.log("Id = "+this._id+" with name "+ this._name);
    }
}