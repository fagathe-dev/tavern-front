const randomNumber = (min: number, max?: number) => {
  return Math.floor(
    max ? Math.random() * max - min + min : Math.random() * min
  );
};

export { randomNumber };
