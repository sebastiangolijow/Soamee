import axios from 'axios';
const ALL_BOOKS = 'ALL_BOOKS';
const DETAIL_BOOK = 'DETAIL_BOOK';
const AUTHORS = 'AUTHORS';

export function allBooks() {
    return function (dispatch) {
      return fetch('http://localhost:3001/books')
        .then((response) => response.json())
        .then((json) => {
          dispatch({ type: ALL_BOOKS, payload: json});
        }).catch((err)=>console.log(err))
    };
  }

export function bookDetail(id){
  return function (dispatch) {
    console.log('aca')
    return fetch(`http://localhost:3001/book/${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(id)
        dispatch({ type: DETAIL_BOOK, payload: json});
      }).catch((err)=>console.log(err))
  };
}

export function CrearA({firstName, lastName, Id}){
  const id = Id;
  const first_name = firstName;
  const last_name = lastName;
  return function (dispatch){
      axios.post(`http://localhost:3001/author`, {id, first_name, last_name})
          .then(res =>
              dispatch({
                  type: 'CREATE_A',
                  payload: true
              }),
          ).catch(e => alert("Errors dates"))
  }
};

export function CrearB({name, isbn, authorId}){
  return function (dispatch){
      axios.post(`http://localhost:3001/book`, {name, isbn, authorId})
          .then(res =>
              dispatch({
                  type: 'CREATE_B',
                  payload: true
              }),
          ).catch(e => alert("Errors dates"))
  }
};

export function AuthorsAction(){
  return function (dispatch) {
    return fetch(`http://localhost:3001/authors`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: AUTHORS, payload: json});
      }).catch((err)=>console.log(err))
  };
}