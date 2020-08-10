// TODO 20: 在这里写实现代码
import Person from './person';

export default class Worker extends Person {
  constructor(name, age, klass = 0) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    if (this.klass) {
      return `${super.introduce()} I am a Teacher. I teach Class ${this.klass}.`;
    }
    return `${super.introduce()} I am a Teacher. I teach No Class.`;
  }
}
