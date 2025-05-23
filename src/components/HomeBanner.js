import React from 'react';
import "./HomeBannerStyle.css";
import cartoon from "../images/cartoon.png";

export default function HomeBanner({ id }) {
  return (
    <div className="home" id={id}>
      <div className='content'>
        <div className="wrapper">
          <div className="name">Trần Văn Tuấn</div>
          <div className="staticTitle">
            Tester
            <div className='hrLine'></div>
          </div>
          <ul className="dynamicTitle">
            <li>+<span>Developer</span></li>
          </ul>
          <a className='btn' href="https://www.facebook.com/tuan.tran.502564" target="_blank" rel="noopener noreferrer">Hire Me</a>
        </div>
      </div>
      <div className="mask">
        <img className='bg' src={cartoon} alt="girl-with-laptop" />
      </div>
    </div>
  )
}
