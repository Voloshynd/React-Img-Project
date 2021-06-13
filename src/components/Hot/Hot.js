import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addLike,
  addDislike,
  addStar,
} from "../../store/Actions/ActionCreator";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fasStar, farStar);
class Hot extends Component {
  render() {
    const { hotPictures } = this.props;
    const hotList = hotPictures.length ? (
      hotPictures.map((picture) => {
        return (
          <div key={picture.id} className="pictureBox">
            <div className="favorite">
              <h2>{picture.title}</h2>
              <FontAwesomeIcon
                className="addStar"
                onClick={() => {
                  const pictureId = picture.id;
                  this.props.dispatch(addStar(pictureId));
                }}
                icon={picture.hasStar ? fasStar : farStar}
              />
            </div>
            <img
              className="imgAnimal"
              src={picture.img}
              alt={picture.title}
            ></img>
            <div className="voteContainer">
              <button
                className="voteButtons"
                onClick={() => {
                  const clickedPictLikeId = picture.id;
                  this.props.dispatch(addLike(clickedPictLikeId));
                }}
              >
                {" "}
                <i
                  className="fa fa-thumbs-up"
                  style={{ fontSize: 20 }}
                ></i>{" "}
                {picture.upvotes}
              </button>
              <button
                className="voteButtons"
                onClick={() => {
                  const clickedPictDislikeId = picture.id;
                  this.props.dispatch(addDislike(clickedPictDislikeId));
                }}
              >
                {" "}
                <i
                  className="fa fa-thumbs-down"
                  style={{ fontSize: 20 }}
                ></i>{" "}
                {picture.downvotes}
              </button>
            </div>
          </div>
        );
      })
    ) : (
      <main>
        <h3>NO HOT PICTURES</h3>
      </main>
    );
    return <main>{hotList}</main>;
  }
}

const mapStateToProps = (state) => {
  return {
    hotPictures: state.pictures.filter(
      (hotFilterdPicture) =>
        hotFilterdPicture.upvotes - hotFilterdPicture.downvotes >= 5
    ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hot);
