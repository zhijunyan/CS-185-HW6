import React, { Component } from 'react';
import Home from './Home'
import Images from './Images'
import Videos from './Videos'
import Projects from './Projects'
import Forms from './Form'
<<<<<<< HEAD
import Movies from './Movies'
=======
>>>>>>> 257e298754f569434a2c5cc81e16ff2e6432980a


export class Body extends Component{
	displayContent =() => {
		var activeTab = this.props.activeTab

		if(activeTab===1)
			return <Home/>
		else if (activeTab==2) 
			return <Images/>

		else if (activeTab==3)
			return <Videos/>

		else if (activeTab==4)
			return <Projects/>
<<<<<<< HEAD

		else if (activeTab==5)
			return <Movies/>
=======
>>>>>>> 257e298754f569434a2c5cc81e16ff2e6432980a
		else
			return <Forms/>
		
	}
  render(){

    return (this.displayContent());
             
      
  }

}


export default Body;