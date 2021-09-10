import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {bookDetail} from '../../Redux/Actions'
import styles from './landing.module.scss'

export function About({id}){
const dispatch = useDispatch();
useEffect(() => dispatch(bookDetail(id)), []);
const details = useSelector((state) => state.DetailBook)
console.log('aca', details.bookFind, details.authorFind)
if(details.bookFind && details.authorFind){
    return (
        <div className={styles.container2}>
                <div styles={{display:'flex', flexDirection:'row'}}>
                <h1 className={styles.name}> Book: </h1>
                <h1 className={styles.name}>{details.bookFind.name}</h1>
                <h1 className={styles.name}>{details.bookFind.isbn}</h1>
            </div>
            <div styles={{display:'flex', flexDirection:'row'}}>
                <h1 className={styles.name}>Author:</h1>
                <h1 className={styles.name}>{details.authorFind.first_name}</h1>
                <h1 className={styles.name}>{details.authorFind.last_name}</h1>
            </div>
        </div>
    )
} else {
    return null
}
}