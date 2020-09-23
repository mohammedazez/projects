export const CHANGE_NAME = "CHANGE_NAME"

export const changeName = (newName) => {
  return {
    type: CHANGE_NAME,
    newName
  }
}