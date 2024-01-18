const validate = (value, type, setError) => {
  const re = {
    letters: /.*[a-z]/gi,
    mail: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    // phone: /(^[+]+[0-9]{11,13}$)|(^[0-9]{9,12}$)/g,
    phone: /(^[0-9]{9}$)/g,
  };

  let match;
  switch (type) {
    case 'text':
      match = value.match(re.letters);
      if (!match) {
        setError(true);
        return false;
      }
      if (!(match[0] === value)) {
        setError(true);
        return false;
      }
      return true;
    case 'mail':
      match = value.match(re.mail);
      if (!match) {
        setError(true);
        return false;
      }
      if (!(match[0] === value)) {
        setError(true);
        return false;
      }
      return true;
    case 'phone':
      match = value.match(re.phone);
      if (!match) {
        setError(true);
        return false;
      }
      if (!(match[0] === value)) {
        setError(true);
        return false;
      }
      return true;
    default:
      return true;
  }
};

export default validate;