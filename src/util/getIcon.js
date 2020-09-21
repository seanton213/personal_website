import { ICONS } from '../constant';

const getIcon = (name) => {
  let icon;

  switch (name) {
    case 'github':
      icon = ICONS.GITHUB;
      break;
    case 'email':
      icon = ICONS.EMAIL;
      break;
    case 'linkedin':
      icon = ICONS.LINKEDIN;
      break;
    case 'facebook':
      icon = ICONS.FACEBOOK;
      break;
    default:
      icon = {};
      break;
  }

  return icon;
};

export default getIcon;
