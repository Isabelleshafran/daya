import {connect} from 'react-redux';
import {fetchEvents} from '../../actions/event_actions';
import UserShow from './user_show';
import { follow, unfollow } from "../../actions/session_actions";
import { fetchUsers } from "../../actions/session_actions";


const mapStateToProps = (state) => {
     return {
       user: state.session.user,
       events: state.events,
       followers: state.session.user.following,
       users: Object.values(state.users)
     };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      fetchEvents: () => dispatch(fetchEvents()),
      fetchUsers: () => dispatch(fetchUsers()),
      
      follow: (username) => dispatch(follow(username)),
      unfollow: (username) => dispatch(unfollow(username))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)