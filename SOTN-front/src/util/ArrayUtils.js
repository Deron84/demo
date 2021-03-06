/**
 * 对数据排序，把startIndex位置的元素，移动到endIndex的位置.
 */
export const reorderArr = (arr, startIndex, endIndex) => {
  const result = Array.from(arr);
  const [removed] = result.splice(startIndex, 1);
  // 删除0个元素，插入一个元素 === 在数组某个位置插入一个元素。
  result.splice(endIndex, 0, removed);

  return result;
};

export const removeFomArr = (arr, removeIndex) => {
  const result = Array.from(arr);
  result.splice(removeIndex, 1);
  return result;
};
