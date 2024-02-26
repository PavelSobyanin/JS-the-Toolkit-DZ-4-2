export default function lifeUnits(mas) {
  const result = mas.sort((a, b) => (a.health < b.health ? 1 : -1));
  return result;
}
