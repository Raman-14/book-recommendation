import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @Output() dataEvent = new EventEmitter<any>();

  // Database
  db: any = [];
  cartDb: any = [];
  categoryDB: any = [];

  constructor() {
    // ye file mein sab se phle constructor run hota hai
    this.loadOldBook();
  }

  cartVisible = 'hide-cart';

  popupVisible = 'hide-popup';

  showPopup() {
    this.popupVisible = 'show-popup';
  }

  hidePopup() {
    console.log('hiding...');
    this.popupVisible = 'hide-popup';
  }

  addBook() {
    var form: any = document.getElementById('add-form');
    var bookName: any = document.getElementById('book-name');
    var bookAuthor: any = document.getElementById('book-author');
    var bookCategory: any = document.getElementById('book-category');

    this.db.push({
      //row
      id: this.db.length + 1,
      bookName: bookName.value, //column
      bookAuthor: bookAuthor.value,
      bookCategory: bookCategory.value,
    });
    this.hidePopup();
  }

  dbCart = [];
  buyBook(bookId: any) {
    this.db.map((book: any) => {
      if (bookId === book.id) {
        this.cartDb.push(book);
        this.cartVisible = 'show-cart';
      }
    });
  }
  removeBook(bookId: any) {
    this.cartDb.map((book: any, index: any) => {
      console.log('L58:   ', index);
      if (bookId === book.id) {
        this.cartDb.splice(index, 1);
      }
    });

    console.log(this.cartDb);
  }
  deleteCart() {
    this.cartVisible = 'hide-cart';
  }

  loadOldBook() {
    console.log('Running Constructor Function');
    // return = [
    const oldBooks = [
      {
        id: 'uuid.v4()',
        bookName: 'alchemist',
        bookAuthor: 'paulo coelho',
        bookCategory: 'adventure',
      },
      {
        id: 'uuid.v4()1',
        bookName: 'Booke 2',
        bookAuthor: 'Authr 2',
        bookCategory: 'action',
      },
      {
        id: 'uuid.v4()4',
        bookName: 'Booke 3',
        bookAuthor: 'Authr 3',
        bookCategory: 'action',
      },
    ];
    this.db = oldBooks;
  }

  loadOldCategory() {
    console.log('Running Constructor Function');
    // return = [
    const oldCategory = ['ACTION', 'ADVENTURE', 'QUEST'];
    this.categoryDB = oldCategory;
  }
}
