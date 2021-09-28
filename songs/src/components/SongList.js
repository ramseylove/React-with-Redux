import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className='item' key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={()=> this.props.selectSong(song)}
                        >
                            Select
                        </button>
                        </div>
                        <div className="content">
                            {song.title}
                    </div>
                </div>
            )
        })
    }
    render() {
        console.log(this.props)
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

// always going to get an arguement of state
// 
const mapStateToProps = (state) => {
    // always going to return an object
    // show up as props inside component
    console.log(state)
    return {
        songs: state.songs
    };
}

// always going to define map state
// define component as second arguement
// passing selectsong action creator
export default connect(mapStateToProps, {
    selectSong: selectSong
})(SongList);