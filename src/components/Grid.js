import React, { useState } from 'react'
import Cell from './Cell'
import css from '../styles/grid.module.css'

const Grid = () => {
    // eslint-disable-next-line
    const [turn, setTurn] = useState(true)

    return (
        <div className={css.grid}>
            <Cell key={0} turn={turn} setTurn={setTurn} />
            <Cell key={1} turn={turn} setTurn={setTurn} />
            <Cell key={2} turn={turn} setTurn={setTurn} />
            <Cell key={3} turn={turn} setTurn={setTurn} />
            <Cell key={4} turn={turn} setTurn={setTurn} />
            <Cell key={5} turn={turn} setTurn={setTurn} />
            <Cell key={6} turn={turn} setTurn={setTurn} />
            <Cell key={7} turn={turn} setTurn={setTurn} />
            <Cell key={8} turn={turn} setTurn={setTurn} />
        </div>
    )
}

export default Grid