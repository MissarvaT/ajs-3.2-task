/* eslint-disable array-callback-return */
export default function compareHealth(array) {
  // eslint-disable-next-line consistent-return
  array.sort((hero1, hero2) => {
    if (hero1.health > hero2.health) return -1;
    if (hero1.health === hero2.health) return 0;
    if (hero1.health < hero2.health) return 1;
  });
  return array;
}
