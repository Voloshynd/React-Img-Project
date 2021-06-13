export const addLike = (clickedPictLikeId) => ({
  type: "ADD_LIKE",
  payload: clickedPictLikeId,
});

export const addDislike = (clickedPictDislikeId) => ({
  type: "ADD_DISLIKE",
  payload: clickedPictDislikeId,
});

export const addStar = (pictureId) => ({
  type: "ADD_STAR",
  payload: pictureId,
});

export const uploadImage = (addPictureId) => ({
  type: "UPLOAD_IMAGE",
  payload: addPictureId,
});
