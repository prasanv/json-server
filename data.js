module.exports = () => {
  const data = { items: [] };
  for (let i = 0; i < 100; i++) {
    data.items.push({ id: i, title: `item${i}` });
  }
  return data;
};
