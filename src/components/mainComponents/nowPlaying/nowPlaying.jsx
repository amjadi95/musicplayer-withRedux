import React, { Component } from "react";
import ProgressBar from "./progressBar.jsx";
import { connect } from "react-redux";
import {
  song_noChange_currentSong,
  nowPlaying_event_done,
  song_ended_action,
  song_isPlaying_action,
} from "./actions/nowplaying_actions.js";
import Controller from "./playing_controller";

class NowPlaying extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      duration: 0,
      nowplaying_mobile_clicked: false,
    };
    this.audio = null;
  }

  componentDidMount() {
    this.audio = new Audio(
      this.props.data.song_list[this.props.data.song_listIndex]
    );
    this.audio.ontimeupdate = this.updateProgressBar;
  }
  manager = () => {
    let data = this.props.data;

    if (data.song_isChange_currentSong) {
      this.onChangeSong(data);
    }
    this.onPlay();
    this.props.nowplaying_event_handled();
  };
  onChangeSong = (data) => {
    if (this.audio != null) {
      this.audio.pause();
    }
    this.audio = null;
    this.audio = new Audio(
      this.props.data.song_list[this.props.data.song_listIndex]
    );

    this.audio.ontimeupdate = this.updateProgressBar;

    this.props.noChange_currentSong();
    this.setState({
      currentTime: 0,
      duration: this.audio.duration,
    });
  };
  onPlay = () => {
    if (this.audio != null) {
      if (this.props.data.song_isPlaying) {
        this.audio.play();
      } else {
        this.audio.pause();
      }
    }
  };
  updateProgressBar = () => {
    if (this.audio.currentTime == this.audio.duration) {
      this.props.song_ended();
    } else {
      this.setState({
        currentTime: this.audio.currentTime,
        duration: this.audio.duration,
      });
    }
  };

  onChangeCurrentTime = (newCurrentTime) => {
    this.audio.currentTime = newCurrentTime;
  };
  onChangeStyle = (flag) => {
    this.setState({
      nowplaying_mobile_clicked: flag,
    });
  };
  render() {
    if (this.props.data.nowPlaying_has_event) {
      this.manager();
    }
    // let mobileViewStyleDisplay =
    //   window.innerWidth < 768 ? { display: "none " } : {};
    // console.log(window.innerWidth);
    let ss = "SONG TITLE IS HERE";
    let mystyle = {
      nowplaying_desktop: { display: "none" },
      nowplaying_mobile: { display: "flex" },
      nowplaying_container: {},
      nowplaying_hide_btn: { display: "none" },
    };
    let is_show_style = this.state.nowplaying_mobile_clicked;
    if (is_show_style) {
      mystyle.nowplaying_container = {
        height: "100%",
        bottom: 0,
      };
      mystyle.nowplaying_desktop = {
        display: "flex",
      };
      mystyle.nowplaying_mobile = { display: "none" };
      mystyle.nowplaying_hide_btn = { display: "flex" };
    }
    return (
      <div
        className="nowplaying-container fx  fx-cc"
        style={is_show_style ? mystyle.nowplaying_container : {}}
      >
        <div
          className={
            "nowplaying fx fxdr fjcsb faic" +
            (is_show_style ? " nowplaying-mobile-background" : "")
          }
        >
          <div
            className="nowplaying-mobile "
            style={is_show_style ? mystyle.nowplaying_mobile : {}}
          >
            <div
              className="song-info-mobile fx fxdr"
              onClick={() => {
                this.onChangeStyle(true);
              }}
            >
              <div className="song-title fx faic">{ss}</div>
              <div className="song-artist fx-cc sub-text">.ARTIST</div>
            </div>
            <div className="control-mobile fx fxdr fjcsb faic">
              <button
                className="music-controller play play-btn-mobile-view sub-text"
                onClick={() => {
                  this.props.song_isPlaying(this.props.data.song_isPlaying);
                }}
              >
                {this.props.data.song_isPlaying ? "pas" : "ply"}
              </button>
              <div className="nowplaying-option-item queue-icon sub-text">
                Q
              </div>
            </div>
          </div>

          <div
            className="nowplaying-desktop  "
            style={is_show_style ? mystyle.nowplaying_desktop : {}}
          >
            <button
              className="nowplaying-hide-btn fx-cc sub-text"
              style={is_show_style ? { display: "flex" } : { display: "none" }}
              onClick={() => {
                this.onChangeStyle(false);
              }}
            >
              dwn
            </button>
            <div className="song-information fx ">
              <div
                className="song-album sub-text"
                style={
                  is_show_style ? { display: "flex" } : { display: "none" }
                }
              >
                ALBUM
              </div>
              <div className="cover-container  position-relative">
                <img
                  className="cover-img"
                  src="https://img.discogs.com/-PYfy0374ILRlPg6t9wd8HPK8fA=/600x607/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-38661-1535757975-8082.jpeg.jpg"
                  alt=""
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="song-info fx fxdc ">
                <div className="song-title fx-cc">SONG TITLE</div>
                <div className="song-artist fx-cc sub-text">ARTIST</div>
              </div>
            </div>

            <div className="song-controls">
              <Controller></Controller>
              <ProgressBar
                currentTime={this.state.currentTime}
                duration={this.state.duration}
                onChangeCurrentTime={this.onChangeCurrentTime}
              ></ProgressBar>
            </div>
            <div className="nowplaying-option fx fxdr ">
              <div className="nowplaying-option-item queue-icon sub-text">
                Q
              </div>
              <div className="nowplaying-option-item like-icon sub-text">
                {"<3"}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: {
      song_listIndex: state.song_listIndex,
      song_isChange_currentSong: state.song_isChange_currentSong,
      song_list: state.song_list,
      song_isPlaying: state.song_isPlaying,
      nowPlaying_has_event: state.nowPlaying_has_event,
      song_repeat: state.song_repeat,
    },
  };
};

function mapDispatchToProps(dispatch) {
  return {
    noChange_currentSong: () => {
      dispatch(song_noChange_currentSong());
    },
    nowplaying_event_handled: () => {
      dispatch(nowPlaying_event_done());
    },
    song_ended: () => {
      dispatch(song_ended_action());
    },
    song_isPlaying: (isplaying) => {
      dispatch(song_isPlaying_action(!isplaying));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);
