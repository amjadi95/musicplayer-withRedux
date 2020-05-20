

export const song_isPlaying_action = (play) => {
    return {
        type: "SONG_IS_PLAYING",
        payload: { isPlaying: play }
    }
}
export const song_next_action = (number) => {
    return {
        type: "SONG_NEXT",
        payload: { next: number }
    }
}
export const song_isShuffle_action = (shuffle) => {
    return {
        type: "SONG_IS_SHUFFLE",
        payload: { isShuffle: shuffle }
    }
}

export const song_isRepeat_action = (repeat) => {
    return {
        type: "SONG_IS_REPEAT",
        payload: { repeat: repeat }
    }
}
export const song_noChange_currentSong = () => {
    return {
        type: "SONG_NO_CHANGE_CURRENT_SONG",

    }
}
export const nowPlaying_event_done = () => {
    return {
        type: "NOWPLAYING_EVENT_DONE"
    }
}
export const song_ended_action = () => {
    return {
        type: "SONG_ENDED"
    }
}
export const song_changeTrack_action = (list, id) => {
    return {
        type: "SONG_TRACK_CHANGED",
        payload: { id: id, list: list }
    }
}
