export default function sortData(data, key) {
  if (!data || !key) {
    return;
  }
  if (Object.keys(data).length !== 0) {
    const groupedData = data.reduce((acc, obj) => {
      const keyValue = obj[key];
      if (!acc[keyValue]) {
        acc[keyValue] = [];
      }
      acc[keyValue].push(obj);
      return acc;
    }, {});
    // console.log(groupedData);
    return groupedData;
  } else {
    return;
  }
}
