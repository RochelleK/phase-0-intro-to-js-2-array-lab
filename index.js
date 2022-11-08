const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    cats.push("Ralph")

}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")

}

function destructivelyRemoveLastCat(){
    cats.pop()

}

function destructivelyRemoveFirstCat() {
    cats.shift()

}

function appendCat(name) {
    const newarr = [...cats, name];
    return newarr; 

}

function prependCat(name) {
    const newarr = [name, ...cats];
    return newarr; 
}

function removeLastCat() {
    const newarr = cats.slice(0, 2); 
    return newarr; 
}

function removeFirstCat() {
    const newarr = cats.slice(1);
    return newarr; 
}






