export const colorDecider = (color) => {
  if (color === 'Red') {
    return { PrimaryColor: '#D42F34', SecondaryColor: '#730F0F' };
  } else if (color === 'Blue') {
    return { PrimaryColor: '#5DA9D2', SecondaryColor: '#0F5973' };
  } else if (color === 'Green') {
    return { PrimaryColor: '#2ECC71', SecondaryColor: '#27AE60' };
  } else if (color === 'Yellow') {
    return { PrimaryColor: '#F1C40F', SecondaryColor: '#F39C12' };
  } else if (color === 'Purple') {
    return { PrimaryColor: '#77377F', SecondaryColor: '#51026B' };
  } else  if (color === 'Black') {
    return { PrimaryColor: '#1B2020', SecondaryColor: '#000000' };


  } else if (color === 'Yellow Black' || color === 'Black Yellow') {
    return { PrimaryColor: '#F1C40F', SecondaryColor: '#1B2020' };
  } else if (color === 'Blue Black' || color === 'Black Blue') {
    return { PrimaryColor: '#5DA9D2', SecondaryColor: '#1B2020' };
  } else if (color === 'Red Black' || color === 'Black Red') {
    return { PrimaryColor: '#D42F34', SecondaryColor: '#1B2020' };
  } else if (color === 'Green Black' || color === 'Black Green') {
    return { PrimaryColor: '#2ECC71', SecondaryColor: '#1B2020' };
  } else if (color === 'Purple Black' || color === 'Black Purple') {
    return { PrimaryColor: '#77377F', SecondaryColor: '#1B2020' };
  }

    else if (color === 'Red Green' || color === 'Green Red') {
    return { PrimaryColor: '#D42F34', SecondaryColor: '#2ECC71' };
  } else if (color === 'Red Blue' || color === 'Blue Red') {
    return { PrimaryColor: '#D42F34', SecondaryColor: '#5DA9D2' };
  } else if (color === 'Red Yellow' || color === 'Yellow Red') {
    return { PrimaryColor: '#D42F34', SecondaryColor: '#F1C40F' };
  } else if (color === 'Red Purple' || color === 'Purple Red') {
    return { PrimaryColor: '#D42F34', SecondaryColor: '#77377F' };
  }

    else if (color === 'Blue Green' || color === 'Green Blue') {
    return { PrimaryColor: '#5DA9D2', SecondaryColor: '#2ECC71' };
  } else if (color === 'Blue Yellow' || color === 'Yellow Blue') {
    return { PrimaryColor: '#5DA9D2', SecondaryColor: '#F1C40F' };
  } else if (color === 'Blue Purple' || color === 'Purple Blue') {
    return { PrimaryColor: '#5DA9D2', SecondaryColor: '#77377F' };
  }

    else if (color === 'Yellow Green' || color === 'Green Yellow') {
    return { PrimaryColor: '#F1C40F', SecondaryColor: '#2ECC71' };  
  } else if (color === 'Yellow Purple' || color === 'Purple Yellow') {
    return { PrimaryColor: '#F1C40F', SecondaryColor: '#77377F' };  
  }

  else if (color === 'Purple Green' || color === 'Green Purple') {
    return { PrimaryColor: '#77377F', SecondaryColor: '#2ECC71' };  
  }
  else {
    return { PrimaryColor: 'null', SecondaryColor: 'null' };
  }
};
