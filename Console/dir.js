function cat(name, age, score) {
    this.name = name;
    this.age = age;
    this.score = score;
}
var c = new cat("miao", 2, [6, 8, 7]);
console.info(c);
console.dir(c);
