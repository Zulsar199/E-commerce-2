export const formatNumberWithSingleQuotes = (price: number) => {
  return price.toLocaleString("en-US").replace(/,/g, "'");
};
