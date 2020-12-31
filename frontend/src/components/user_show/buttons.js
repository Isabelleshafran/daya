import React from 'react';


class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
  }

  handleFollow() {
    this.props.follow(this.props.params.username);
  }
  handleUnfollow() {
    this.props.unfollow(this.props.params.username);
  }

  handleCreate(){
    this.props.history.push("/createEvent");
  }

  render() {


    // console.log(this.props.user.following)
    // console.log(this.props)
    // debugger

    if(this.props.params.username === this.props.user.username){
      return (
        <button onClick={() => this.handleCreate()} id="edit-button">
          <div id="button-text">Add Event</div>
        </button>
      );
    } else if (this.props.params.username.includes(this.props.params.username)) {
      return (
        <div id="button-container">
          <button id="edit-button">
            <div onClick={() => this.handleUnfollow()} id="button-text">
              Unfollow
            </div>
          </button>
        </div>
      );
    } else {
      return (
        <div id="button-container">
          <button id="edit-button">
            <div onClick={() => this.handleFollow()} id="button-text">
              Follow
            </div>
          </button>
        </div>
      );
    }

  }
}
 
export default Buttons;