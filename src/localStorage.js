export const setLocalStorage = (key, value) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getLocalStorage = (key) => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem(key));
  }
};

export const removeItemFromLocalStorage = (key) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key);
  }
};
