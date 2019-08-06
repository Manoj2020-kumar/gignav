import {Component} from 'react';
import React from 'react';
import '../gignav-theme.css';
import Field from "../Field";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell,faAngleRight} from '@fortawesome/free-solid-svg-icons'
 

class NetworkSetting extends Component{
  constructor(props){
  super(props)
    this.state= {
         Data:Field
    }
  }

  render(){
    const selects =()=>{
      return this.state.Data.networkSettings.items.map(el =>
        {
          return(
            <option>{el.label}</option>
           )}
        );
    }
  return (
    <div>
	<div className="header">
  <div className="left-header">
    <a href="#" className="logo"><img src="images/LOGO.png"/></a>
    <a href="#" className="add-btn"><img src="images/add-btn.png"/></a>
  </div>
  <div className="nav-links">
    <ul className="menus">
      <li><a href="#">Home</a></li>
      <li><a href="#">Network</a></li>
      <li><a href="#">Jobs</a></li>
      <li><a href="#">Connections</a></li>
      <li><a href="#">Customers</a></li>
      <li><a href="#">Performance</a></li>
    </ul>
  </div>
  <div className="right-header">
    <div className="right-action-list">
      <ul className="right-icon-list">
        <li>
          <a href="#" className="serch-icon"><FontAwesomeIcon icon={faSearch} /></a>
        
        </li>
        <li>
          <a href="#" className="bell-icon" ><FontAwesomeIcon icon={faBell} /></a>
        </li>
        <li>
          <a href="#" className="profile-pic"><img src="images/Oval.png"/></a>
        </li>
      </ul>
      <div className="menu-btn">
        <a href="#" className="menu-icons">
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1C0 0.447715 0.497461 0 1.11111 0H18.8889C19.5025 0 20 0.447715 20 1C20 1.55228 19.5025 2 18.8889 2H1.11111C0.497462 2 0 1.55228 0 1Z" fill="#D8DADF"/>
          <path d="M0 15C0 14.4477 0.497461 14 1.11111 14H18.8889C19.5025 14 20 14.4477 20 15C20 15.5523 19.5025 16 18.8889 16H1.11111C0.497462 16 0 15.5523 0 15Z" fill="#D8DADF"/>
          <path d="M6.44444 8C6.44444 7.44772 6.94191 7 7.55556 7H18.8889C19.5025 7 20 7.44772 20 8C20 8.55228 19.5025 9 18.8889 9H7.55556C6.94191 9 6.44444 8.55228 6.44444 8Z" fill="#D8DADF"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>

<div className="body-panel">
  <div className="left-panel">
    <div className="profile-bio">
      <div className="profile-pic-case" style={{"backgroundImage":"url(images/Oval2.png)"}} >
        
      </div>
      <div className="user-name">
        Peter Castillo
      </div>
      <div className="edit-btn">
        <a href="/edit-profile">Edit Profile </a>
        
      </div>
    </div>
    <div className="tabuler-links">
      <ul className="page-links">
        <li>
          <a href="/" className="active">
            <div className="s-title" >
            <FontAwesomeIcon icon={faAngleRight} />
              <h6>Network Setting</h6>
              <p>View and update Network Details</p>
            </div>
          </a>
        </li>
        <li>
          <a href="/system-setting" className="">
            <div className="s-title">
            <FontAwesomeIcon icon={faAngleRight} />
              <h6>System Setting</h6>
              <p>View and update securty Setting</p>
            </div>
          </a>
        </li>
        <li>
          <a href="/communication" className="">
            <div className="s-title">
            <FontAwesomeIcon icon={faAngleRight} />
              <h6>Communication</h6>
              <p>See and update payment Setting</p>
            </div>
          </a>
        </li>
        <li>
          <a href="/data-setting" className="">
            <div className="s-title">
            <FontAwesomeIcon icon={faAngleRight} />
              <h6>Data Setting</h6>
              <p>View and update securty Setting</p>
            </div>
          </a>
        </li>
        <li>
          <a href="/privacy-setting" className="">
            <div className="s-title">
            <FontAwesomeIcon icon={faAngleRight} />
              <h6>Privacy Setting</h6>
              <p>View and update securty Setting</p>
            </div>
          </a>
        </li>
      </ul>
      <button className="logout-btn"> Log Out </button>
    </div>
  </div>
  
  <div className="right-panel">
    <div className="tab-inner">
      <div className="tab-heading">
        Network Setting
      
      </div>
      <div className="cover-bg">
        <img src="images/cover-img.png"/>
      </div>
      <div className="public-profile">
        <div className="public-title">Public Profile</div>
        <div className="switch-btn">
          <label className="switch">
            <input type="checkbox"/>
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      <div className="public-profile-details">
        <div className="form">
        
          <div className="input-group">
            <div className="label">
            Order
            </div>
            <div className="input-field">
              <input type="text"  className="form-control" Value={ this.state.Data.networkSettings.order}/>
            </div>
          </div>
          <div className="input-group">
          <div className="label">
          Code
          </div>
          <div className="input-field">
            <input type="text"  className="form-control" Value={ this.state.Data.networkSettings.code}/>
          </div>
        </div>
          <div className="input-group">
            <div className="label">
            Label
            </div>
            <div className="input-field">
              <input type="text"  className="form-control" value={ this.state.Data.networkSettings.label}/>
            </div>
          </div>
          <div className="input-group">
            <div className="label">
            Desc
            </div>
            <div className="input-field">
              <input type="text"  className="form-control" Value={ this.state.Data.networkSettings.desc}/>
            </div>
          </div>
          <div className="input-group">
            <div className="label">
              Items
            </div>
            
            <div className="input-field">
              <select type="text"  className="form-control" >
                {selects()}
              </select>
            </div>
          </div>
          
        </div>
  
       
      </div>
  
      
      
      <div className="setting-footer">
        <button type="submit" className="submit-btn">Save</button>
      </div>
    </div>
    
  </div>
</div>


</div>

  );
}
}


export default NetworkSetting;
