export const tenFrameConstructor = () => {
  //This function constructs the data structure for the ten frame by selecting a random number between 1 and 10
  //and subsequently creating an array of objects with index (number) and value (boolean) keys to represent
  //whether or not the corresponding cell of the ten frame is active or not.
  const randomNumber = Math.ceil(Math.random() * 10);
  let dataStructure = [];
  for (let i = 0; i < 10; i++) {
    dataStructure.push({ index: i, value: false });
  }
  let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < randomNumber; i++) {
    let randomIndex = Math.ceil(Math.random() * array.length);
    let chosenNumber = array[randomIndex - 1];
    array.splice(randomIndex - 1, 1);
    dataStructure = dataStructure.map((datum) => {
      return datum.index === chosenNumber ? { ...datum, value: true } : datum;
    });
  }
  return dataStructure;
};

export const tenFrameSorter = (dataStructure) => {
  //This function sorts the data structure constructed in 'TenFrameConstructor' so that all of the active cells are at the start
  let activeNodes = dataStructure.filter((node) => {
    return node.value === true && node;
  });
  activeNodes = activeNodes.map((node, i) => {
    return { ...node, index: i };
  });
  let inactiveNodes = dataStructure.filter((node) => {
    return node.value === false && node;
  });
  inactiveNodes = inactiveNodes.map((node, i) => {
    return { ...node, index: i + activeNodes.length };
  });
  return [...activeNodes, ...inactiveNodes];
};
