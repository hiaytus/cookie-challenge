import express from 'express';
import cookieParser from 'cookie-parser';
const app = express();
const port = 8080;
// app.use(express.json())

app.use(cookieParser())

app.get('/login', (req, res) => {
  // let user = req.body.name;
  res.cookie("name", "ella"); // input ?? 
  res.send("hello world")
})

app.get('/hello', (req, res) => {
  let user = req.cookies['name']
  console.log(user);
  res.send(`welcome ${user}`)
})

app.listen(port, () => {
  console.log(`server app listening at ${port}`)
})


// app.get('/api/books', (req, res) => {
//   res.status(200).send(books)
// })


// app.post('/api/books',  (req, res) =>{
//   let { title, author } = req.body;
//   let newBook = {
//     title,
//     author
//   };
//   books.push(newBook);
//   res.status(201).send(`Book added ${title}`) 
// })

// app.patch('/api/books', (req, res) => {
//   let foundFlag = false;
//   let foundBook = {};
//   books.forEach(book => {
//     if (book.title == req.body.title) {
//       foundFlag = true;
//       book.author = req.body.author
//       foundBook = book;
//     }
//   })
//   if (foundFlag) {
//     res.status(200).send(foundBook);
//   } else {
//     res.status(404).send("book not found")
//   }
// } )


// let books = [
//   {
//     title: "Book1",
//     author: "Author1"
//   },
//   {
//     title: "Book2",
//     author: "Author2"
//   }]