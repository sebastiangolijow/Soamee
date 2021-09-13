const session = require('supertest-session');
const app = require('../../src/app.js');
var supertest = require('supertest-as-promised')(require('../../src/app'));
var expect = require('chai').expect;
const agent = session(app);


// describe('Pokemon routes', () => {
//   before(() => conn.authenticate()
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   }));
//   beforeEach(() => Pokemon.sync({ force: true })
//     .then(() => Pokemon.create(pokemon)));
//   describe('GET /pokemons', () => {
//     it('should get 200', () =>
//       agent.get('/pokemons').expect(200)
//     );
//   });
// });

describe("/books", function () {

  it("GET responde con status 200 y listado de libros",(done) =>  {
   return supertest 
      .get("/books") 
      .expect(200) 
      .expect("Content-Type", /json/), done()
    })

     it("POST agrega un libro", (done) =>  {
       return supertest
         .post("/book")
         .send({ name: "testing", authorId:1, isbn:10})
         .expect(200), done()})
    
  })