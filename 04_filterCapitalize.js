/* 
Write a program that takes a list of books, including their authors and publication years as input. The program should then filter out all books that were published before 2010 and create a new array with the remaining books, but with their author names capitalized.
*/

let bookList = [
    {
        bookName : 'Swami and Friends',
        authorName : 'Narayan',
        yearPublished : 1935 ,
    },
    {
        bookName : 'Gitanjali',
        authorName : 'Rabindranath Tagore',
        yearPublished : 1910 ,
    },
    {
        bookName : 'Wish I could Tell You',
        authorName : 'Durjoy Dutta',
        yearPublished : 2019,
    },
    {
        bookName : 'Five Point Someone',
        authorName : 'Chetan Bhagat',
        yearPublished : 2004,
    },
    {
        bookName : 'Wise or Otherwise',
        authorName : 'Sudha Murthy',
        yearPublished : 2002,
    },
    {
        bookName : 'The God of Small Things',
        authorName : 'Arundhati Roy',
        yearPublished : 1997,
    },
    {
        bookName : 'The fourth Quarter of Your Life',
        authorName : 'Allen Hunt',
        yearPublished : 2023,
    },

]

let newBookList = bookList.filter(book=> book.yearPublished < 2010);

 
let capsNewBookList = newBookList.map(book => ({
    bookName : book.bookName,
    authorName : book.authorName.toUpperCase(),
    yearPublished : book.yearPublished
}));

console.log(capsNewBookList);