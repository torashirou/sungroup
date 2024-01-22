const validate = (target: HTMLInputElement, type: string, setError: Function) => {
  const re = {
    letters: /.*[a-z]/gi,
    mail: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    // phone: /(^[+]+[0-9]{11,13}$)|(^[0-9]{9,12}$)/g,
    phone: /(^[0-9]{9}$)/g,
  };

  let match;
  switch (type) {
    case 'text':
      match = target.value.match(re.letters);
      if (!target.required && target.value === '') {
        return true;
      }
      if (!match) {
        setError(true);
        return false;
      }
      if (!(match[0] === target.value)) {
        setError(true);
        return false;
      }
      return true;
    case 'mail':
      match = target.value.match(re.mail);
      if (!match) {
        setError(true);
        return false;
      }
      if (!(match[0] === target.value)) {
        setError(true);
        return false;
      }
      return true;
    case 'phone':
      match = target.value.match(re.phone);
      if (!match) {
        setError(true);
        return false;
      }
      if (!(match[0] === target.value)) {
        setError(true);
        return false;
      }
      return true;
    default:
      return true;
  }
};

export default validate;