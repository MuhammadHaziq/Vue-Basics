export default {
  getRegisterUsers(state) {
    return state.users.filter(item => {
      return !item.registerd;
    });
  },
  notRegisterUsers(state) {
    // console.log(state.unRegisterUsers);
    return state.unRegisterUsers;
  },
  totalRegisters(state, getters) {
    return getters.getRegisterUsers.length;
  },
  totalNotRegister(state, getters) {
    return getters.notRegisterUsers.length;
  }
};
