const imagePath = (file) => {
  const prefix = (process.env.NODE_ENV === 'production') ? '/owens-list-quiz/images/' : '/images/';
  return `${prefix}${file}`;
}

export {
  imagePath
};
