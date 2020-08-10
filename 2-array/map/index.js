export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码

  return collection.map(word => {
    return String.fromCharCode(64 + word).toLowerCase();
  });
}
