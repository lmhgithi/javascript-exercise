// TODO 16: 在这里写实现代码
import Person from './person';

export default class Student extends Person {
  constructor(name, age, classNum) {
    super(name, age);
    this.klass = classNum;
  }

  introduce() {
    return `${super.introduce()} I am a Student. I am at Class ${this.klass}.`;
  }
}
