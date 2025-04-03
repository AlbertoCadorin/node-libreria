# Node Libreria
### Descrizione
Costruire una semplice REST API per gestire una libreria di libri, applicando una struttura modulare e pulita del codice.

Funzionalità richieste
- Implementare le seguenti rotte:
- GET /books → Elenco di tutti i libri
- GET /books/:id → Dettaglio di un libro
- POST /books → Creazione di un nuovo libro
- PUT /books/:id → Modifica di un libro esistente
- DELETE /books/:id → Eliminazione di un libro

Middleware richiesti
- Logger: stampa in console metodo e URL per ogni richiesta
- Validazione: blocca POST e PUT se mancano title o author