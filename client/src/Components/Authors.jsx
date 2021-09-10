import React, {useEffect} from 'react'
import styles from './authors.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import {AuthorsAction} from '../Redux/Actions'


export function Autores(){
const dispatch = useDispatch();
useEffect(() =>  dispatch(AuthorsAction()), [])
const Authors = useSelector((state) => state.Authors);
    return (
        <div className={styles.container}>
         
         {
            Authors && Authors.map((item) => (
                <div> 
                    <h1 className={styles.name}>
                    Nombre:    {item.first_name.toUpperCase()}
                    </h1>
                    <h1 className={styles.name}>
                    Apellido:   {item.last_name.toUpperCase()}
                    </h1>
                    <h1 className={styles.name}>
                    ID:    {item.id}
                    </h1>
                </div>
            ))
         }
        </div>
    )
}