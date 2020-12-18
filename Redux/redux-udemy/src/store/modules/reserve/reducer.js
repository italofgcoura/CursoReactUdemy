import produce from 'immer';

function reserve(state = [], action) {

    switch (action.type) {

        case 'ADD_RESERVE_SUCCESS':
            return produce(state, draft => {

                draft.push(action.trip);

            })

        case 'REMOVE_RESERVE':

            return produce(state, draft => {

                //se encontrar, retorna a posição do elemento, ou seja >= 0
                const tripIndex = draft.findIndex(trip => trip.id === action.id);

                if (tripIndex >= 0) {
                    draft.splice(tripIndex, 1);
                }

            })

        case 'UPDATE_RESERVE_SUCCESS':
            return produce(state, draft => {

                //se encontrar, retorna a posição do elemento, ou seja >= 0
                const tripIndex = draft.findIndex(trip => trip.id === action.id);

                if (tripIndex >= 0) {
                    draft[tripIndex].amount = Number(action.amount);
                }
            })


        default:
            return state;
    }

}

export default reserve;