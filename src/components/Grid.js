import React from 'react'
import Cell from './Cell'
import css from '../styles/grid.module.css'

const Grid = () => {
    return (
        <div className={css.grid}>
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
        </div>
    )
}

export default Grid