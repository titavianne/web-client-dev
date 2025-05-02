// 4. Hapus kemunculan pertama dari substring dalam string
function removeFirstOccurrence(str: string, search: string): string {
  return str.replace(search, "");
}
console.log(removeFirstOccurrence("Hello world", "ell")); // Output: "Ho world"