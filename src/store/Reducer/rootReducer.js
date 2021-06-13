import { dataPictures } from "./dataPictures";

const initialState = {
  pictures: dataPictures,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LIKE": {
      const newPictureArr = state.pictures.map((picture) =>
        picture.id === action.payload
          ? {
              ...picture,
              upvotes: picture.upvotes + 1,
            }
          : picture
      );
      return {
        ...state,
        pictures: newPictureArr,
      };
    }
    case "ADD_DISLIKE": {
      const newPictureArr = state.pictures.map((picture) =>
        picture.id === action.payload
          ? {
              ...picture,
              downvotes: picture.downvotes + 1,
            }
          : picture
      );
      return {
        ...state,
        pictures: newPictureArr,
      };
    }
    case "ADD_STAR": {
      const newPictureArr = state.pictures.map((picture) =>
        picture.id === action.payload
          ? {
              ...picture,
              hasStar: !picture.hasStar,
            }
          : picture
      );
      return {
        ...state,
        pictures: newPictureArr,
      };
    }
    case "UPLOAD_IMAGE": {
      return { ...state, pictures: [...state.pictures, action.payload] };
    }
    default:
      return { ...state };
  }
};
export default rootReducer;
