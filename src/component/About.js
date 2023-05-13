import React from 'react'
import { Outlet } from 'react-router-dom'
import UserContext from '../utils/UserContext'

class About extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
         <h1 className='text-lg font-medium'>This Is a food delivery app designed with react, redux, tailwind css and react-router-dom.</h1>
        <UserContext.Consumer>
          {({user})=>(<h4 className='text-xl font-bold'>{user.name}- {user.email}</h4>)}
        </UserContext.Consumer>
      </div>

    )
  }
}

export default About