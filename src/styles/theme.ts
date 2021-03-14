const breakpoints = {
  desktop: 992,
  tablet: 768,
  mobile: 320,
};

const theme = {
  palette: {
    primary: '#003DA5',
    gray: '#EBEBEB',
  },
  gradients: {
    blue: 'linear-gradient(90deg, #0D2A59 -9.16%, #3BABF4 110.99%)',
  },
  media: {
    mobile: `screen and (max-width: ${breakpoints.tablet}px)`,
    tablet: `screen and (min-width: ${breakpoints.tablet}px)`,
    desktop: `screen and (min-width: ${breakpoints.desktop}px)`,
  },
  shadows: {
    paperBoxShadow: '0 3px 10px rgba(0, 0, 0, .15)',
  },
  breakpoints,
};

export default theme;
