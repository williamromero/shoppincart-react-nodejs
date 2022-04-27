import React from 'react'
import { useSelector } from 'react-redux';
import { Breadcrumb } from '../../components/Breadcrumb'

const IndexCAScreen = (props) => {

  const userSignin = useSelector(state => state.userSignin)
  const { userInfo } = userSignin;
  if (!userInfo) {
    props.history.push('/signin')
  } else {
    return (
      <>
        <Breadcrumb name={ 'Principal' } />
      </>
    )
  }
}

export default IndexCAScreen
