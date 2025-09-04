interface takePhoto{
    camera:string,
    blur:boolean,
    filter:string,
}

interface shorts{
    createStory():string
}

class youtube implements takePhoto,shorts{
    constructor(
        public camera:string,
        public blur:boolean,
        public filter:string,
    ){}

    createStory(): string {
        return ""
    }
}