export function getSidebarNameCapitalize(string) {
  const sidebarName = string.replace('-button', '');
  return sidebarName[0].toUpperCase() + sidebarName.slice(1);
};

export function findTrainerImage(imagePath) {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const images = importAll(require.context('../assets/images/trainer', false, /\.(gif|png|jpe?g|svg)$/));
  return images[imagePath].default;
}

export function findPokemonImage(imagePath) {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const images = importAll(require.context('../assets/images/pokemon', false, /\.(gif|png|jpe?g|svg)$/));
  return images[imagePath].default;
}

export function findTypeImage(imagePath) {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const images = importAll(require.context('../assets/images/type', false, /\.(gif|png|jpe?g|svg)$/));
  return images[imagePath].default;
}

export function findCategoryImage(imagePath) {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const images = importAll(require.context('../assets/images/category', false, /\.(gif|png|jpe?g|svg)$/));
  return images[imagePath].default;
}

export function findDistanceImage(imagePath) {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const images = importAll(require.context('../assets/images/distance', false, /\.(gif|png|jpe?g|svg)$/));
  return images[imagePath].default;
}
