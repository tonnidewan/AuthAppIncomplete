import React, { Component } from 'react';
import { View, Text,ScrollView } from 'react-native';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import * as firebase from 'firebase';
//import console = require('console');

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password :'',
      gender : '',
      firstName : '',
      lastName : '',
      age : '',
      emailError : null,
      passwordError : null
    };
  }

  handleEmail =(text) =>
  {
    this.setState({
      email : text
    })
  }
  handlePassword = (text)=>
  {
    this.setState({
      password : text
    })
  }
  handleFirstName = (text)=>
  {
    this.setState({
      firstName: text
    })
  }
  handleLastName = (text)=>
  {
    this.setState({
      lastName : text
    })
  }
  handleAge = (text)=>
  {
    this.setState ({
      age : text
    })
  }
  handleGender = (text) =>
  {
    this.setState({
      gender : text
    })
  }

  // handleInput = (key,value) => {
  //   console.log(key,value) 
  //   []
  // }


  checkEmail = () => {
		const { email } = this.state;
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = re.test(String(email).toLowerCase())
    
    //console.log ('Is valid ',isValid);
 
		if(!isValid) {
			this.setState({
				emailError: 'Invalid Email'
			})
		}
  }
  
  checkEmail = () => {
		const { password } = this.state;
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    //const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    
    const isValid = re.test(String(password))
    
    //console.log ('Is valid ',isValid);
 
		if(!isValid) {
			this.setState({
				passwordError: 'Invalid Password'
			})
		}
  }
  
  signUpUser = () => {
		firebase.auth().createUserWithEmailAndPassword('tonni@dewan.com', '12345678abc').then(user => console.log('user ', user))
	}


  render() {  
    console.log('states ',this.state)
    console.log('state signup',this.state);
    return (
     
        // <View style={{flex : 1,}}>

        //   <View style={{margin : 25 ,flexDirection : 'column'}}>
        //     <Input handleInput={this.handleEmail} placeholder = "Email" />
        //     <Input secureTextEntry={true} handleInput={this.handlePassword} placeholder = "Password" />
        //     <View style={{flexDirection : 'row'}}>
        //       <Input customStyle={{flex : 1,marginRight: 5}} handleInput={this.handleFirstName} placeholder = "First name" />
        //       <Input customStyle={{flex : 1}} handleInput={this.handleLastName} placeholder = "Last name" />
        //     </View>
        //   </View>
          
        // </View>

         <ScrollView style={{flex : 1}}>

          <View style={{margin : 25 ,flexDirection : 'column'}}>
            <Input handleInput={this.handleEmail}
             //handleInput={(text) => this.handleInput('email',text)} onBlur={this.checkEmail}
              error={this.state.emailError}
              placeholder = "Email" />
            <Input secureTextEntry={true} handleInput={this.handlePassword}
             // error={this.state.passwordError}
               placeholder = "Password" />
            <Input handleInput={this.handleFirstName} placeholder = "First name" />
            <Input  handleInput={this.handleLastName} placeholder = "Last name" />
            <Input handleInput={this.handleAge} placeholder = "Age" />
            <Input  handleInput={this.handleGender} placeholder = "Gender" />

            <Button onPress={this.signUpUser} backgroundcolor='black' width ="50" title = "Sign Up"></Button>
            
          </View>

          
          
        </ScrollView>


     
    );
  }
}
