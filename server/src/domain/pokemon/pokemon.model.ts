class Pokemon {

    constructor(
        public id: number,
        public name: string,
        public height: number,
        public weight: number,
        public img: string,
        public types: string[],
        public moves: string[],
    ) {}

}

export default Pokemon;
