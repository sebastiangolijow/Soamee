import React, {useEffect} from 'react'
import styles from './landing.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import {allBooks} from '../../Redux/Actions'
import {Link} from 'react-router-dom'


export function Landing(){
const dispatch = useDispatch();
useEffect(() =>  dispatch(allBooks()), [])
const books = useSelector((state) => state.Books);
    return (
        <div className={styles.container}>
         
         {
            books && books.map((item) => (
                <div className={styles.cardB}> 
                    <h1 className={styles.name}>
                        <Link className={styles.link} to={`/book/${item.id}`}>{item.name.toUpperCase()}</Link>
                    </h1>
                </div>
            ))
         }
        </div>
    )
}