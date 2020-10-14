import React from "react";
import Loader from "react-loader-spinner";

import { axiosWithAuth } from "./../utils/axiosWithAuth";

class FriendsList extends React.Component {
  state = {
    FriendsList: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then((res) => {
        this.setState({
          FriendsList: res.data
        });
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  };


  render() {
    return (
      <div className="friendList">

        {this.state.FriendsList.map((friend) => (
            <div key={friend.id}>
                {friend.name}, {friend.age}, {friend.email}
            </div>
        ))}

        {this.props.fetchingData && (
          <div className="key spinner">
            <Loader type="Puff" color="#204963" height="60" width="60" />
            <p>Loading Data</p>
          </div>
        )}
      </div>
    );
  }
}

export default FriendsList;
