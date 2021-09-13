import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {bookDetail} from '../../Redux/Actions';
import styles from './landing.module.scss';
import {useHistory} from 'react-router-dom';

const styleButton = {
    borderRadius: "999px",
    backgroundColor: "white",
    margin: "20px",
    outline: "none",
    fontFamily: "fantasy",
    height:'37px',
    width:'85px',
    fontSize:'11px'
  };

export function About({id}){
const dispatch = useDispatch();
const history = useHistory();
useEffect(() => dispatch(bookDetail(id)), []);
const details = useSelector((state) => state.DetailBook)
console.log('aca', details.bookFind, details.authorFind)
if(details.bookFind && details.authorFind){
    return (
        <div className={styles.container2}>
                <div className={styles.cardB}>
                    <h1 className={styles.name}> Book: </h1>
                    <h1 className={styles.name}>Name: {details.bookFind.name}</h1>
                    <h1 className={styles.name}>ISBN: {details.bookFind.isbn}</h1>
                </div>
                <div className={styles.cardA}>
                    <h1 className={styles.name}>Author:</h1>
                    <h1 className={styles.name}>Name: {details.authorFind.first_name}</h1>
                    <h1 className={styles.name}>Last Name: {details.authorFind.last_name}</h1>
                </div>
                <button style={styleButton} onClick={() => history.push(`/ModB/${id}`)}>Modificar datos</button>
        </div>
    )
} else {
    return null
}
}