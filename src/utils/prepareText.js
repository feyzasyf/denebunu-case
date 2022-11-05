export const prepareText = (arr, prefix) => {
  let buttonText;
  if (arr.length === 0) {
    buttonText = <span>{prefix} Products</span>;
  } else if (arr.length === 1) {
    buttonText = (
      <span>
        {prefix} {arr.length} Product
      </span>
    );
  } else {
    buttonText = (
      <span>
        {prefix} {arr.length} Products
      </span>
    );
  }
  return buttonText;
};
