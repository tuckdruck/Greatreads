export const CHANGE_LOADED_STATUS = "CHANGE_LOADED_STATUS";

export const changeLoadedStatus = bool => {
  return {
    type: CHANGE_LOADED_STATUS,
    status: bool
  };
};
