export default function deleteEmptyFields(obj, key) {
  if (!obj || !key) {
    return;
  }
  const filteredObj = obj.filter((item) => item[key] !== "");
  return filteredObj;
}
