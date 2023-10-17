const error = store => next => action => {
    if (action.type == 'SHOW_ERROR') {
        console.error('error',action.payload.error);
    } else {
        next(action);
    }
}

export default error;