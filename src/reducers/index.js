import { combineReducers } from 'redux';


const songsReducer = () => {
  return [
    { title: 'No scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:56' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I want it that way', duration: '5:24' }
  ]
};


const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};



export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})