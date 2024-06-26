export const storeUser = (data) => {
  localStorage.setItem(
    "user", 
    JSON.stringify(data)
  );
};

export const userData = () => {
  const stringifiedUser = localStorage.getItem("user") || '""';
  return JSON.parse(stringifiedUser || {});
}