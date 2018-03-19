import Server from './server';

class API extends Server{
	  async ppyLogin(params = {}){
    try{
      let result = await this.axios('post', 'api/user/auth/pwd/login', params); 
      if(result && result.head.code === 0){
        return result;
      }else{
//      let err = {
//        tip: '登录失败',
//        response: result
//      }
//      throw err;
      }
    }catch(err){
      throw err;
    }
  }

}

export default new API();