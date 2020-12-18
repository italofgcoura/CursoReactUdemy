
import { select, all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import history from '../../../services/history'
import { addReserveSuccess, updateAmountSuccess } from './actions'

function* addToReserve({ id }) {

    const tripExists = yield select(
        state => state.reserve.find(trip => trip.id === id)
    );

    const stock = yield call(api.get, `/stock/${id}`);

    const stockAmount = stock.data.amount;

    const currentStock = tripExists ? tripExists.amount : 0;

    const amount = currentStock + 1;

    if (amount > stockAmount) {
        alert("Quantidade máxima atingida.")
    }

    if (tripExists) {

        const amount = tripExists.amount + 1;

        yield put(updateAmountSuccess(id, amount));

    } else {

        const response = yield call(api.get, `/trips/${id}`);

        const data = {
            ...response.data,
            amount: 1
        }

        yield put(addReserveSuccess(data));

        history.push('/reservas');
    }


}

function* updateAmount({ id, amount }) {

    if (amount <= 0) return;

    const stock = yield call(api.get, `/stock/${id}`);

    const stockAmount = stock.data.amount;

    if (amount > stockAmount) {
        alert('Quantidade máxima atingida');
        return;
    }

    yield put(updateAmountSuccess(id, amount));
}

export default all([
    takeLatest('ADD_RESERVE_REQUEST', addToReserve),
    takeLatest('UPDATE_RESERVE_REQUEST', updateAmount)
]);