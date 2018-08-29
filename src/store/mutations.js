import * as Types from './mutation-types'
const mutations = {
  [Types.ADD](state, m) {
    state.count += m
  },
  [Types.MiNUS](state) {
   state.count-=1
  }
}
export default mutations;