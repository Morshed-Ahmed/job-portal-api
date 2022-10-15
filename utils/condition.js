exports.comDate = (lastDate) => {
  const date = new Date();
  if (date > lastDate) {
    throw Error("Apply date expire");
  }
  return;
};
