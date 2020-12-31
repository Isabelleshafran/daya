import React from 'react';
import UserShow from './user_show';


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
    const {username} = this.props.params.username

   const Buttons = () => {
      let id = "";

      if(this.props.user.username === username){
        return (
          <button onClick={() => this.handleCreate()} id="edit-button">
            <div id="button-text">Add Event</div>
          </button>
        );
      }

      this.props.users.forEach(user => {
        // debugger
        if (user.username === this.props.params.username) {
          id = user.id;
        }
      })

      if(this.props.user.following.includes(id)){
        return (
         <div id="button-container">
           <button id="edit-button">
             <div onClick={() => this.handleUnfollow()} id="button-text">
              Unfollow
             </div>
           </button>
         </div>
        )
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

    return (
      Buttons()
    )

  }
}
 
export default Buttons;