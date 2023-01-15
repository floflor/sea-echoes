export const pixelToPercentage = (px) => {
  const percentage = (px * 100) / window.innerHeight;
  return `${Math.round(percentage)}%`;
};

export const randomNumber = (max, min) => {
 return Math.random() * (max - min) + min;
};
