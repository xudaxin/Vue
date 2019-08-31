//给action注册事件处理函数

//好像是用来修改的

export function setUserInfo({commit},user) {
  return commit('setUserInfo',user)  //接着去调用mutation中修改信息的setUserInfo
}
