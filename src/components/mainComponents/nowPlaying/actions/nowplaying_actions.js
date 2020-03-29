

export const song_currentTime_action = (time) => {
    return {
        type: "SONG_CURRENT_TIME",
        payload: { song_currentTime: time }
    }
}
export const song_duration_action = (time) => {
    return {
        type: "SONG_DURATION",
        payload: { song_duration: time }
    }
}

export const song_set_current_time_action = (time) => {
    return {
        type: "SONG_SET_CURRENT_TIME",
        payload: { song_newCurrentTime: time }
    }
}

export const song_Change_currentTime_action = (isChange) => {
    return {
        type: "SONG_CHANGE_CURRENT_TIME",
        payload: { isChange_CurrentTime: isChange }
    }
}