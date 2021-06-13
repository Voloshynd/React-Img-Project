import React, { Component } from "react";
import { connect } from "react-redux";
import { uploadImage } from "../../store/Actions/ActionCreator";
import "./Upload.css";

class Upload extends Component {
  constructor() {
    super();
    this.state = {};
    this.onTitleAdd = this.onTitleAdd.bind(this);
    this.onImageAdd = this.onImageAdd.bind(this);
  }

  onTitleAdd(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  onImageAdd = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img),
      });
    }
  };
  render() {
    const newTitle = this.state.title;
    const newImage = this.state.image;
    const { pictureList } = this.props;
    const newImageData = {
      id: pictureList.length + 1,
      title: newTitle,
      upvotes: 0,
      downvotes: 0,
      hasStar: false,
      img: newImage,
    };
    return (
      <div className="uploadBox">
        <h4>UPLOAD IMAGE !</h4>
        <div className="addImage">
          <div className="inputsContainer">
            <div className="inputsName">
              <label htmlFor="addTitle">
                <p>Title:</p>
              </label>
              <p>Source:</p>
            </div>
            <div className="inputsBox">
              <input
                id="addTitle"
                name="title"
                type="text"
                placeholder="Provide title..."
                value={this.state.newTitle}
                onChange={this.onTitleAdd}
              />
              <div className="btn">
                <label htmlFor="uploadImage">Choose file</label>
              </div>
              <input
                id="uploadImage"
                type="file"
                name="image"
                style={{ visibility: "hidden" }}
                accept="image/*"
                onChange={this.onImageAdd}
              />
            </div>
          </div>
        </div>
        <div className="buttonFlex">
          <button
            type="submit"
            className="uploadButton"
            onClick={() => {
              this.props.dispatch(uploadImage(newImageData));
            }}
          >
            UPLOAD <i className="fa fa-upload" style={{ fontSize: "1rem" }}></i>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pictureList: state.pictures,
  };
};
const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
