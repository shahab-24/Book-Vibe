const getStoredBook = () => {
  const storeBook = localStorage.getItem('book-id')
  if(storeBook){
    return JSON.parse(storeBook);
  }
  return[];
}

const saveStoredBook = Id =>{
  const saveBooks = getStoredBook();
  const exists = saveBooks.find(bookId => bookId === Id);
  if(!exists){
    saveBooks.push(Id);
    localStorage.setItem('book-id', JSON.stringify(saveBooks))
  }
}

export {getStoredBook, saveStoredBook}