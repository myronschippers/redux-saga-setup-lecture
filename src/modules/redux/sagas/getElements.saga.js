function* getElements() {
    try {
        const elementResponse = yield axios.get('/api/element');
        console.log(elementResponse);
        yield put({
            type: 'SET_ELEMENTS',
            payload: elementResponse.data
        })
    } catch (err) {
        console.log('error HELP:', err);
    }
}

export default getElements;