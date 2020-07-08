import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import css from '../styles/cell.module.css'

const Cell = ({ turn, setTurn }) => {
    // eslint-disable-next-line
    const [piece, setPiece] = useState('')

    const handleMove = (e) => {
        setPiece(turn)
        setTurn(prevTurn => !prevTurn)
    }

    return (
        <div className={css.cell}>
            {
                piece !== '' ?
                    (
                        piece ?
                            (
                                <button className={css.x}>
                                    <FontAwesomeIcon className={css.mark} icon={['fas', 'times']} />
                                </button>
                            ) : (
                                <button className={css.o}>
                                    <FontAwesomeIcon className={css.mark} icon={['far', 'circle']} />
                                </button>
                            )
                    ) :
                    <button onClick={handleMove}></button>
            }
        </div>
    )
}

export default Cell