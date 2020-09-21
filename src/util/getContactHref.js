const getContactHref = (name, contact) => {
  let href;

  switch (name) {
    case 'github':
      href = `https://github.com/${contact}`;
      break;
    case 'email':
      href = `mailto:${contact}`;
      break;
    case 'linkedin':
      href = `https://www.linkedin.com/in/${contact}`;
      break;
    case 'facebook':
      href = `https://www.facebook.com/${contact}`;
      break;
    default:
      href = contact;
      break;
  }

  return href;
};

export default getContactHref;
