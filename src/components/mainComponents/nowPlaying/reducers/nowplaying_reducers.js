const initialState = {
    song_currentTime: 0,
    song_duration: 0,
    Change_currentTime: false,
    song_newCurrentTime: 0
}
const now_playing_reducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case "SONG_CURRENT_TIME": {
            newState.song_currentTime = action.payload.song_currentTime;
            break;
        }
        case "SONG_DURATION": {
            newState.song_duration = action.payload.song_duration;
            break;
        }
        case "SONG_SET_CURRENT_TIME": {
            newState.song_newCurrentTime = action.payload.song_newCurrentTime;
            break;
        }
        case "SONG_CHANGE_CURRENT_TIME": {
            newState.Change_currentTime = action.payload.isChange_currentTime;
            break;
        }
    }

    return newState;
}
export default now_playing_reducer;
