//FYI: Map is JavaScript inbuild Hash table/map. Below are the functions provided by Map.

const mapper = new Map();
mapper.set("name", "John");
mapper.set("age", 22);
mapper.set("city", "Chicago");
mapper.set("state", "Illinois");
mapper.set("gender", "Male");

console.log("Get value: ",mapper.get("name"));

console.log("Keys: ",mapper.keys());
console.log("Values: ",mapper.values());
console.log("Entries: ",mapper.entries());
console.log("Has: ",mapper.has('name'));
console.log("size: ",mapper.size);
console.log("Delete: ",mapper.delete('name'));
console.log("After Delete name: ", mapper); //Checking values after delete

console.log("clear: ",mapper.clear());
console.log("After Clear Mapper: ", mapper); //Checking values after clearing