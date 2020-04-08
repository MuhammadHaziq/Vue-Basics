export default {
  Register(state, payload) {
    //  when use dispatch then it pass only param
    //  when we call mutations in component then it get data + mutation name in payload
    console.log(payload);
    const users = state.users.find(item => {
      return item.userId == payload.userId;
    });
    console.log(users);
    users.registerd = false;
    const unRegisterUsers = state.unRegisterUsers.find(ite => {
      ite.userId == payload.userId;
    });

    state.unRegisterUsers.splice(
      state.unRegisterUsers.indexOf(unRegisterUsers),
      1
    );
  },
  unRegister(state, payload) {
    console.log(payload);
    //  when use dispatch then it pass only param
    //  when we call mutations in component then it get data + mutation name in payload
    const users = state.users.find(item => {
      return item.userId == payload.userId;
    });
    console.log(users);
    users.registerd = true;
    const notRegister = {
      userId: payload.userId,
      name: users.name,
      email: users.email
    };
    state.unRegisterUsers.push(notRegister);
  }
};
