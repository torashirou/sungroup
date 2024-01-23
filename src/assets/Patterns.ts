const patterns = {
  letters: /.*[a-z]/gi,
  mail: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  // phone: /(^[+]+[0-9]{11,13}$)|(^[0-9]{9,12}$)/g,
  phone: /(^[0-9]{9}$)/g,
};

export default patterns;