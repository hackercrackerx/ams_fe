export const strict = false
export const state = () => ({
  notify: {
    color: "green",
    message: "",
    display: ""
  },
  notifyError: {
    color: "red",
    message: "Error",
    display: false
  }
})

export const getters = {
  getNotify(state) {
    return state.notify
  },
  getNotifyError(state) {
    return state.notify
  }
}

export const mutations = {
  setNotifyMessage(state, payload) {
    state.notify = {
      display: true,
      color: payload.color,
      message: payload.message
    }
  }
}
