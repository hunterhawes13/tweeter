function naps(tweeter){
var googler = tweeter.replace ("maps", "naps");
    return googler;
}

console.assert(naps("I really like maps") === "I really like naps");
console.log(naps("I really like maps"));