import React, { Component } from 'react';
import user from '../../assets/login.svg';
import psw from '../../assets/psw.svg';
import './login.less';
import Footer from '../../components/footer/footer'; 
import Header from '../../components/header/header'; 
//import request, {get} from '../../api/request';
class App extends Component {
constructor(props) {
    super(props);
    this.state = {
    	userName: '',
     	userPsw:'',
     	telError:'',
     	passwordError:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.pswChange = this.pswChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
  	let tel = e.target.value;
    this.setState({
    	userName: tel,
    });
  }
  pswChange(e) {
    let psw = e.target.value;
    this.setState({
    	userPsw: psw
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    let telReg=/^1[34578]\d{9}$/;
    let pswReg=/^\w{6,20}$/;
    if(this.state.userName === ''||this.state.userName === null){
    	alert('账户不能为空');
    }else if(this.state.userPsw === ''||this.state.userPsw === null){
    	alert('密码不能为空');
    }else if(telReg.test(this.state.userName) === false){
    	alert('账户不符合要求');
    }else if(pswReg.test(this.state.userPsw) === false){
    	alert('密码不符合要求');
    }else{
    	
    }
  }

  render() {
    return (
      <div className="App">
		<Header />
        <section className='t-c'>
        	<form onSubmit={this.handleSubmit}>
        <div className = "user">
        	<img src={user} className="userImg" alt="user" />
          <input  placeholder="请输入手机号" type="number" value={this.state.value} />
        </div>
        <div className = "psw">
        	<img src={psw} className="pswImg" alt="psw" />
          <input placeholder="请输入登录密码6-12位" type="password" value={this.state.psw} onChange={this.pswChange}/>
        </div>
        <input type="submit" value="登录" className="sub"/>
      </form>
      	<a className = 'noAccount'>没还有账号,赶紧注册</a>
        </section>
		<Footer/>
      </div>
    );
  }
}

export default App;