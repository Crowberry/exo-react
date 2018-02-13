
function removeDupArray(arr) {
  const uniqueArray = arr.filter((elem, index, self) => index === self.indexOf(elem));
  console.log(uniqueArray);
  return uniqueArray;
}

export default removeDupArray;
