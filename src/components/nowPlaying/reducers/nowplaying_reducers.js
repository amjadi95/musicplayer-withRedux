//"https://irsv.upmusics.com/99/Hamid%20Askari%20%7C%20Hezar%20Daraje%20(128).mp3"
import sound1 from '../../../03_Verano_Porteño.mp3';
import sound2 from '../../../04_Tango.mp3';
import sound3 from '../../../10_Scenes_from_Summer.mp3';

const initialState = {
    nowPlaying_has_event: false,
    song_isShuffle: false,
    song_isPlaying: false,
    song_listLength: 3,
    song_listIndex: 0,
    song_isChange_currentSong: false,
    song_repeat: "none",
    song_list: [{ id: 1, src: sound1, duration: 233 }, { id: 2, src: sound2, duration: 278 }, { id: 3, src: sound3, duration: 228 }]

}
const now_playing_reducer = (state = initialState, action) => {
    const newState = { ...state };
    newState.nowPlaying_has_event = true;
    switch (action.type) {
        case "SONG_TRACK_CHANGED": {

            const newList = action.payload.list;
            if (newState.song_list != newList) {
                newState.song_list = newList;
                newState.song_listLength = newList.length;
            }
            for (let i = 0; i < newList.length; i++) {
                if (newList[i].id == action.payload.id) {
                    newState.song_listIndex = i;
                }
            }
            newState.song_isChange_currentSong = true;
            newState.song_isPlaying = true;
            break;
        }
        case "SONG_IS_PLAYING": {
            newState.song_isPlaying = action.payload.isPlaying;
            break;
        }
        case "SONG_ENDED": {
            if (newState.song_list != null && newState.song_list != []) {

                if (newState.song_repeat == "all") {
                    if (newState.song_list.length - 1 == newState.song_listIndex) {
                        newState.song_listIndex = 0;
                    }
                    else {
                        newState.song_listIndex++;
                    }
                }
                else if (newState.song_repeat == "none") {
                    if (newState.song_list.length - 1 == newState.song_listIndex) {
                        newState.song_isPlaying = false;
                        newState.nowPlaying_has_event = false;
                        break;
                    }
                    else {
                        newState.song_listIndex++;
                    }
                }
                newState.song_isChange_currentSong = true;
            }
            break;
        }
        case "SONG_NEXT": {
            if (newState.song_list != null && newState.song_list != []) {
                if (action.payload.next == 1) {
                    if (newState.song_list.length - 1 != newState.song_listIndex) {
                        newState.song_listIndex++;
                    }
                    else if (newState.song_repeat == "all") {
                        if (newState.song_list.length - 1 == newState.song_listIndex) {
                            newState.song_listIndex = 0;
                        }
                    }

                }
                else if (action.payload.next == -1 && newState.song_listIndex > 0) {
                    newState.song_listIndex--;

                }
                newState.song_isChange_currentSong = true;
            }
            break;
        }
        case "SONG_IS_SHUFFLE": {
            newState.song_isShuffle = action.payload.isShuffle;
            break;
        }
        case "SONG_IS_REPEAT": {
            newState.song_repeat = action.payload.repeat;
            break;
        }
        case "SONG_NO_CHANGE_CURRENT_SONG": {
            newState.song_isChange_currentSong = false;
            break;
        }
        case "NOWPLAYING_EVENT_DONE": {
            newState.nowPlaying_has_event = false;
            break;
        }

    }

    return newState;
}
export default now_playing_reducer;
