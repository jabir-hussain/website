var themeColor = '#dc3f38';

module.exports.light = {
  backgrounds: {
    main: '#f9f9f9',
    sectionPrimary: '#fbfbfb',
    sectionSecondary: '#fff',
    primary: themeColor,
    secondary: '#fff',
    serviceCards: ['#fdb633', '#52bced', '#55bc73', '#4247ae', '#dc3f38', '#f67c46']
  },
  textColors: {
    primary: themeColor,
    heading: '#32333c',
    paragraph: '#8a8fa3'
  },
  boxShadow: '1px 1px 10px rgba(0,0,0,0.1)'
};
module.exports.dark = {
  backgrounds: {
    main: '#f9f9f9',
    container: '#fff',
    primary: themeColor,
    secondary: '#fff',
    serviceCards: ['#fdb633', '#52bced', '#55bc73', '#4247ae', '#dc3f38', '#f67c46']
  },
  textColors: {
    primary: themeColor,
    heading: '#32333c',
    paragraph: '#8a8fa3'
  },
  boxShadow: '1px 1px 10px rgba(222,222,222,0.1)'
};
