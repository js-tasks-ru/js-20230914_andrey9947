/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let new_Arr = [...arr];
  if (param === 'asc') {
    return sortFn(new_Arr, 1);
  }
  else {
    return sortFn(new_Arr, -1);
  }
}
function sortFn(arr, dir) {
  return arr.sort((a, b) => a.localeCompare(b, ['ru', 'en'], {caseFirst: 'upper'}) * dir);
}
