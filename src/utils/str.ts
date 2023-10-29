import { randomNumber } from "./number";

const ALPHA_NUMERIC_CHARS =
  "AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbn1234567890";

const ucfirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const shuffle = (str: string, limit?: number) => {
  const arr = str.split(""); // Convert String to array
  const n = arr.length; // Length of the array

  for (let i = 0; i < n - 1; i++) {
    const j = randomNumber(limit ?? n); // Get random of [0, n-1]

    const temp = arr[i]; // Swap arr[i] and arr[j]
    arr[i] = arr[j];
    arr[j] = temp;
  }
  str = arr.join(""); // Convert Array to string
  return str; // Return shuffled string
};

const randomString = (limit: number = 12) =>
  shuffle(ALPHA_NUMERIC_CHARS).slice(0, limit);

export { ALPHA_NUMERIC_CHARS, shuffle,randomString, ucfirst };
