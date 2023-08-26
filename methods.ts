export const floor = (x: number): number => {
  return Math.floor(x);
};

export const nroot = (n: number, x: number): number => {
  return Math.pow(x, 1 / n);
};

export const reverse = (s: string): string => {
  return s.split("").reverse().join("");
};

export const validAnagram = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) {
    return false;
  }

  const map = new Map();
  for (const c of str1) {
    if (!map.has(c)) {
      map.set(c, 0);
    }
    map.set(c, map.get(c) + 1);
  }

  for (const c of str2) {
    if (!map.has(c) || map.get(c) === 0) {
      return false;
    }
    map.set(c, map.get(c) - 1);
  }

  return true;
};

export const sort = (strArr: string[]): string[] => {
  return strArr.sort();
};
