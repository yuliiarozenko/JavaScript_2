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

class Zoo {
    constructor() {
        this.animals = [];    
    }

    add_animal(animal) {
        this.animals.push(animal);
    }

    list_animals() {
        this.animals.forEach(animal => {
            console.log(`Name: ${animal.name}, Species: ${animal.species}`);
        })
    }

    get_animals_by_species(species) {
        const filteredAnimals = this.animals.filter(animal => animal.species === species);

        filteredAnimals.forEach(animal => {
            console.log(`Name: ${animal.name}, Species: ${animal.species}`);
        })
    }

    remove_animal(name) {
        this.animals = this.animals.filter(animal => animal.name !== name);
    }

    count_animals() {
        return this.animals.length;
    }
}

const zoo = new Zoo();

const anim1 = new Mammal('Kuzya', 'tiger', 'orange');
zoo.add_animal(anim1);

const anim2 = new Bird('Kesha', 'eagle', '2m');
zoo.add_animal(anim2);

const anim3 = new Reptile('Karl', 'snake', 'smooth');
zoo.add_animal(anim3);

console.log('All Animals:');
zoo.list_animals();

console.log('\nBird');
zoo.get_animals_by_species('Bird');

console.log('\nRemoving Kuzya the tiger');
zoo.remove_animal('Kyzya');

console.log('\nTotal number of animals in the zoo: ' + zoo.count_animals());