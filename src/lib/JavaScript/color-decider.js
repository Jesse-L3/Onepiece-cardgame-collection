export const colorDecider = (color) => {
  if (color === 'Red') {
    return { PrimaryColor: 'var(--element-red-primary)', SecondaryColor: 'var(--element-red-secondary)' };
  } else if (color === 'Blue') {
    return { PrimaryColor: 'var(--element-blue-primary)', SecondaryColor: 'var(--element-blue-secondary)' };
  } else if (color === 'Green') {
    return { PrimaryColor: 'var(--element-green-primary)', SecondaryColor: 'var(--element-green-secondary)' };
  } else if (color === 'Yellow') {
    return { PrimaryColor: 'var(--element-yellow-primary)', SecondaryColor: 'var(--element-yellow-secondary)' };
  } else if (color === 'Purple') {
    return { PrimaryColor: 'var(--element-purple-primary)', SecondaryColor: 'var(--element-purple-secondary)' };
  } else if (color === 'Black') {
    return { PrimaryColor: 'var(--element-black-primary)', SecondaryColor: 'var(--element-black-secondary)' };
  } else if (color === 'Yellow Black' || color === 'Black Yellow') {
    return { PrimaryColor: 'var(--element-yellow-primary)', SecondaryColor: 'var(--element-black-secondary)' };
  } else if (color === 'Blue Black' || color === 'Black Blue') {
    return { PrimaryColor: 'var(--element-blue-primary)', SecondaryColor: 'var(--element-black-secondary)' };
  } else if (color === 'Red Black' || color === 'Black Red') {
    return { PrimaryColor: 'var(--element-red-primary)', SecondaryColor: 'var(--element-black-secondary)' };
  } else if (color === 'Green Black' || color === 'Black Green') {
    return { PrimaryColor: 'var(--element-green-primary)', SecondaryColor: 'var(--element-black-secondary)' };
  } else if (color === 'Purple Black' || color === 'Black Purple') {
    return { PrimaryColor: 'var(--element-purple-primary)', SecondaryColor: 'var(--element-black-secondary)' };
  } else if (color === 'Red Green' || color === 'Green Red') {
    return { PrimaryColor: 'var(--element-red-primary)', SecondaryColor: 'var(--element-green-primary)' };
  } else if (color === 'Red Blue' || color === 'Blue Red') {
    return { PrimaryColor: 'var(--element-red-primary)', SecondaryColor: 'var(--element-blue-primary)' };
  } else if (color === 'Red Yellow' || color === 'Yellow Red') {
    return { PrimaryColor: 'var(--element-red-primary)', SecondaryColor: 'var(--element-yellow-primary)' };
  } else if (color === 'Red Purple' || color === 'Purple Red') {
    return { PrimaryColor: 'var(--element-red-primary)', SecondaryColor: 'var(--element-purple-primary)' };
  } else if (color === 'Blue Green' || color === 'Green Blue') {
    return { PrimaryColor: 'var(--element-blue-primary)', SecondaryColor: 'var(--element-green-primary)' };
  } else if (color === 'Blue Yellow' || color === 'Yellow Blue') {
    return { PrimaryColor: 'var(--element-blue-primary)', SecondaryColor: 'var(--element-yellow-primary)' };
  } else if (color === 'Blue Purple' || color === 'Purple Blue') {
    return { PrimaryColor: 'var(--element-blue-primary)', SecondaryColor: 'var(--element-purple-primary)' };
  } else if (color === 'Yellow Green' || color === 'Green Yellow') {
    return { PrimaryColor: 'var(--element-yellow-primary)', SecondaryColor: 'var(--element-green-primary)' };
  } else if (color === 'Yellow Purple' || color === 'Purple Yellow') {
    return { PrimaryColor: 'var(--element-yellow-primary)', SecondaryColor: 'var(--element-purple-primary)' };
  } else if (color === 'Purple Green' || color === 'Green Purple') {
    return { PrimaryColor: 'var(--element-purple-primary)', SecondaryColor: 'var(--element-green-primary)' };
  } else {
    return { PrimaryColor: 'var(--element-red-primary)', SecondaryColor: 'var(--element-red-secondary)' };
  }
};
