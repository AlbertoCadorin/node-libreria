// importiamo i post
const booksList = require('../data/books')

/// FUNZIONI ///

// index
function index(req,res){
    let filteredBooks = booksList;
    if(req.query.author){
        filteredBooks = booksList.filter(book => book.author.includes(req.query.author));
    };
    res.json(filteredBooks);
};

// show
function show(req,res) {
    const id = parseInt(req.params.id)
    const bookId = booksList.find( bookId => bookId.id === id)
  
    if (!postId){
      res.status(204)

      return res.json({
        error :"Not Found",
        message : "Post gia eliminato"
        
      })
    }
    res.json(bookId)
}
// destroy
function destroy(req,res) {
    const id = parseInt(req.params.id)
    const bookId = booksList.find( bookId => bookId.id === id)
  
    if (!postId){
      res.status(204)

      return res.json({
        error :"Not Found",
        message : "Post gia eliminato"
        
      })
    }
    booksList.splice(booksList.indexOf(bookId),1)
    res.sendStatus(204) 
    console.log(booksList)
}

// esporto le funzioni di controllo 
module.exports = {index,show,store,update,modify,destroy}