import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import './about.css';

export const getData = () => {
  return  axios.get('http://localhost:3030/api/getUserInfo');
}

const About = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => {
    return state || {};
  });

  useEffect(() => {
    if(userInfo.name === 'init') {
      getData().then(res => {
        dispatch({
          type: 'CHANGE_DATA',
          payload: res.data.data,
        })
      })
    }
  }, []);

  return (
    <div className="about">
      <h2>about</h2>
      <h3>{userInfo.name}-{userInfo.address}</h3>
      <NavLink to="/">home</NavLink>
    </div>
  )
}
export default About;