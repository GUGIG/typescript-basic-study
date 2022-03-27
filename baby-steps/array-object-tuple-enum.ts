let activities: string[]; // typed array. string[] === Array<string>
activities = ["footbal"];
activities.push("tennis");
// activities = [1,2,3]; // error. wrong type
// activities.push(true); // error. wrong type

/**
 * defining the type of object as assigning one
 * isn't considered as a good practice
 * when type inference is all you need
 */
 const person1 = { // no need of type definition
   name: 'jaehun',
   age: 25,
 };

/**
 * but if there's a property that you must need
 * a type definition, such as tuple,
 * then you need an explicit type definition
 */
const person2: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // tuple
} = {
  name: 'jaehun',
  age: 25,
  hobbies: ["sports", "cooking",],
  role: [2, 'author'] // tuple
};

// person2.role[2] = 10; // type error
// person2.role = [2. "author", "admin"] // length error
// person2.role.push("admin"); // push is an exception that's allowed


enum Role { ADMIN, READ_ONLY, AUTHOR };

const person3: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
  name: 'jaehun',
  age: 25,
  hobbies: ["sports", "cooking",],
  role: Role.AUTHOR // using enum
};