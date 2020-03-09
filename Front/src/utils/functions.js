export function getSidebarNameCapitalize(string) {
  const sidebarName = string.replace('-button','');
  return sidebarName[0].toUpperCase() + sidebarName.slice(1);
};
