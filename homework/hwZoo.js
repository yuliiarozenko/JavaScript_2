class Animal {
    #name;
    #species;

    constructor(name, species) {
        this.#name = name;
        this.#species = species;
    }

    get name() {
        return this.#name;
    }
    get species() {
        return this.#species;
    }
}

class Mammal extends Animal {
    #full_color;
    constructor(name, species, full_color) {
        super(name, species);
        this.#full_color = full_color;
    }
    get full_color() {
        return this.#full_color;
    }
}
const anim1 = new Mammal('Kuzya', 'tiger', 'orange');
console.log(anim1.name);
console.log(anim1.species);
console.log(anim1.full_color);

class Bird extends Animal {
    #wing_span;
    constructor(name, species, wing_span) {
        super(name, species);
        this.#wing_span = wing_span;
    }
    get wing_span() {
        return this.#wing_span;
    }
}

const anim2 = new Bird('Kesha', 'eagle', '2m');
console.log(anim2.name);
console.log(anim2.species);
console.log(anim2.wing_span);

class Reptile extends Animal {
    #scale_type;
    constructor(name, species, scale_type) {
        super(name, species);
        this.#scale_type = scale_type;
    }
    get scale_type() {
        return this.#scale_type;
    }
}

const anim3 = new Reptile('Karl', 'snake', 'smooth');
console.log(anim3.name);
console.log(anim3.species);
console.log(anim3.scale_type);


class Zoo extends Animal {
    constructor() {
        super();
        
    }
}



