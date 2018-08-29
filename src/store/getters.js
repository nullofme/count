const getters={
    val:(state)=>{
        return state.count%2?'奇数':'偶数'
       }
}
export default getters;