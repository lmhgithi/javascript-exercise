export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  // const result = collection
  //   .filter(person => person.age < 20 && person.age > 10)
  //   .map(person => {
  //     return person.name;
  //   });
  // if (result.length > 1) return result;
  // return result[0];
  return collection.find(person => person.age < 20 && person.age > 10).name;
}
