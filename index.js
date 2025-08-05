const book = {
  title: "It",
  author: "Stiven King",
  yearCreate: "1982",
  isReaing: false,
  getInfo() {
    return '${author} "${title}", ${yearCreate}';
  },
};
console.log(book.getInfo);

console.log(book);

