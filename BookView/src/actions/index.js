export function selectBook(book){
    // selectBook is an action creator
    // needs to return action: obj w/ type
    return {
        type: 'BOOK_SELECTED',
        payload: book 
    };
}