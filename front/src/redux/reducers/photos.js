var photos = (state = {}, action) => {

    switch (action.type) {
        case 'PHOTO_ADD':
            return { ...state, photos: action.photos };
        case 'PHOTO_CLEAN':
            return { ...state, photos: [] };
        default:
            return state;
    }
}

export default photos;