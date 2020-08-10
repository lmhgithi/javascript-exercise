export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  const values = Object.values(source);
  return values.reduce((pre, cur) => Number(pre) + Number(cur));
}
