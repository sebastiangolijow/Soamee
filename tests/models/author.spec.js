const { expect } = require('chai');
const {Author, Book } = require("../../src/db");

describe('Author model', () => {
  describe('Validators', () => {
    beforeEach(() => Author.sync({ force: true }));
    describe('first_name', () => {
      it('should throw an error if first_name is null', (done) => {
        Author.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Author.create({ first_name: 'Sebastian', last_name:'Golijow' });
      });
    });
  });
});

