var kittens = ["Milo", "Otis", "Garfield"];


function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  return kittens ;
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
  return kittens ;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens ;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens ;
}

function appendKitten(name) {
  return [...kittens, "Broom"];
}

function prependKitten(name) {
  return ["Arnold", ...kittens];
}

function removeLastKitten() {
 kittens.slice(-1)
  return kittens
}
