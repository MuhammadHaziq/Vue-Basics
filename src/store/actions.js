export default {
  //  work as async code so use setTimout

  Register(context, userId) {
    //  we can get ({commit})
    // commit('mutationName', any param)
    setTimeout(() => {
      context.commit("Register", userId);
    }, 1000);
  },
  unRegister(context, userId) {
    setTimeout(() => {
      context.commit("unRegister", userId);
    }, 1000);
  }
};
