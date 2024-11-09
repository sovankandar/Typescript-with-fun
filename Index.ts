interface  Book{
 title:string;
 author:string;
 isbn:string;
 isAvailable:boolean;
}

interface User{
 name:string;
 userId:number;
 borrowedBooks: Book[];
}

class Library {
 private books: Book[] = [];
 private users: User[] = [];

 addBook(book: Book): void {
  this.books.push(book);
 }

 registerUser(user: User): void {
  this.users.push(user);
 }

 private getUserById(userId: number): User | null {
  for (let i = 0; i < this.users.length; i++) {
   if (this.users[i].userId === userId) {
    return this.users[i];
   }
  }
  return null;
 }

 private getAvailableBookByIsbn(isbn: string): Book | null {
  for (let i = 0; i < this.books.length; i++) {
   if (this.books[i].isbn === isbn && this.books[i].isAvailable) {
    return this.books[i];
   }
  }
  return null;
 }

 borrowBook(userId: number, isbn: string): string {
  const user = this.getUserById(userId);
  const book = this.getAvailableBookByIsbn(isbn);

  if (user && book) {
   book.isAvailable = false;
   user.borrowedBooks.push(book);
   return `Book borrowed successfully!`;
  }
  return `Cannot borrow book: ${!user ? 'User not found' : 'Book unavailable'}`;
 }

 returnBook(userId: number, isbn: string): string {
  const user = this.getUserById(userId);
  let book: Book | null = null;

  for (let i = 0; i < this.books.length; i++) {
   if (this.books[i].isbn === isbn) {
    book = this.books[i];
    break;
   }
  }

  if (user && book && !book.isAvailable) {
   book.isAvailable = true;
   user.borrowedBooks = user.borrowedBooks.filter(b => b.isbn !== isbn);
   return `Book returned successfully!`;
  }
  return `Cannot return book: ${!user ? 'User not found' : 'Book not borrowed'}`;
 }
}

const myLibrary = new Library();

myLibrary.addBook({title: "Typescript Basic", author: "JohnShon", isbn: "1234", isAvailable: true})
myLibrary.addBook({title: "Advanced Typescript", author: "Johnshon", isbn: "1235", isAvailable: true})

myLibrary.registerUser({ name: "Alice", userId: 1, borrowedBooks: [] });
myLibrary.registerUser({ name: "Bob", userId: 2, borrowedBooks: [] });

console.log(myLibrary.borrowBook(1,"1234"))
console.log(myLibrary.borrowBook(1,"1235"))
console.log(myLibrary.returnBook(1,"1234"))