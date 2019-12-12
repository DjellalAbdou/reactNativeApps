const Icon = ({name}) => {
  const iconsList = {
    heart: 'e800;',
    star: 'e801;',
    like: 'e800;',
    dislike: 'e802;',
    flash: 'e803;',
    marker: 'f031;',
    filter: 'f0b0;',
    user: 'f061;',
    circle: 'f039;',
    hashtag: 'f029;',
    calendar: 'f4c5;',
    chevronLeft: 'f004;',
    optionsV: 'f142;',
    optionsH: 'f141;',
    chat: 'f4ac;',
    explore: 'f50d;',
  };
  let icon = iconsList[name];
  icon = String.fromCharCode(parseInt(icon, 16));

  return icon;
};

export default Icon;
