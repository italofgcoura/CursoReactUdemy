import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeReserve, updateAmountRequest } from '../../store/modules/reserve/actions'
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md';

import './styles.css';

export default function Reservas() {

    const reserves = useSelector(state => state.reserve);
    const dispatch = useDispatch();

    function handleDelete(id) {

        dispatch(removeReserve(id))

    }

    function decrementAmount(trip) {

        dispatch(updateAmountRequest(trip.id, trip.amount - 1))

    }

    function incrementAmount(trip) {

        dispatch(updateAmountRequest(trip.id, trip.amount + 1))

    }

    return (
        <div>
            <h1>Você solicitou {reserves.length} reservas.</h1>

            {reserves.map((reserve) =>
                <div className="reservas" key={reserve.id}>
                    <img src={reserve.image} alt={reserve.title} />
                    <strong>{reserve.title}</strong>

                    <div className="quantidade">
                        <button type="button" onClick={(() => decrementAmount(reserve))}><MdRemoveCircle size={25} color="#363636"></MdRemoveCircle></button>

                        <span>{reserve.amount}</span>

                        <button type="button" onClick={(() => incrementAmount(reserve))}><MdAddCircle size={25} color="#363636"></MdAddCircle></button>
                    </div>

                    <button type="button" onClick={(() => handleDelete(reserve.id))}>
                        <MdDelete size={20} color="#363636" />
                    </button>
                </div>
            )}
            <footer>
                <button type="button">Solicitar reservas</button>
            </footer>

        </div>
    )
}