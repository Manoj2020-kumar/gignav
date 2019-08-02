import {Component} from 'react';
import React from 'react';
import '../gignav-responsive-theme.css';
import '../gignav-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell,faAngleRight} from '@fortawesome/free-solid-svg-icons'

class Edit extends Component{
  render(){
  return (
      <div>
      <div class="header">
      <div class="left-header">
          <a href="#" class="logo"><img src="/images/LOGO.png"/></a>
          
          <a href="#" class="add-btn"><img src="/images/add-btn.png"/></a>
      </div>
      <div class="nav-links">
          <ul class="menus">
              <li><a href="#">Home</a></li>
              <li><a href="#">Network</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Connections</a></li>
              <li><a href="#">Customers</a></li>
              <li><a href="#">Performance</a></li>
          </ul>
      </div>
      <div class="right-header">
          <div class="right-action-list">
              <ul class="right-icon-list">
                  <li>
                      <a href="#" class="serch-icon"><FontAwesomeIcon icon={faSearch} /></a>
                  </li>
                  <li>
                      <a href="#" class="bell-icon" ><FontAwesomeIcon icon={faBell} /></a>
                  </li>
                  <li>
                      <a href="#" class="profile-pic"><img src="/images/avtar2.png"/></a>
                  </li>
              </ul>
              <div class="menu-btn">
                  <a href="#" class="menu-icons">
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
  
  <div class="body-panel">
      <div class="left-panel">
          <div class="profile-completeness">
          
              <div class="progress-icon">
                  <img src="/images/io.png"/>
              </div>
          
              <div class="progress-title">80% Profile Completeness</div>
              <div class="progress-subtitle">Add Profile Picture and Skills to complete profile</div>
          </div>
          <div class="profile-bio">
              <div class="profile-pic-case" style={{"background-image":"url(/images/avtar.png)"}}>
                  
              </div>
              <div class="user-name">
                  Peter Castillo
              </div>
              <div class="edit-btn">
                  <a href="/edit-profile">Edit Profile </a>
                 
              </div>
          </div>
          <div class="tabuler-links">
              <ul class="page-links">
                  <li>
                      <a href="#" class="">
                          <div class="s-title">
                          <FontAwesomeIcon icon={faAngleRight} />
                              <h6>Network Setting</h6>
                              <p>View and update Network Details</p>
                          </div>
                      </a>
                  </li>
                  <li>
                      <a href="#" class="">
                          <div class="s-title">
                          <FontAwesomeIcon icon={faAngleRight} />
                              <h6>System Setting</h6>
                              <p>View and update securty Setting</p>
                          </div>
                      </a>
                  </li>
                  <li>
                      <a href="#" class="">
                          <div class="s-title">
                          <FontAwesomeIcon icon={faAngleRight} />
                              <h6>Communication</h6>
                              <p>See and update payment Setting</p>
                          </div>
                      </a>
                  </li>
                  <li>
                      <a href="#" class="">
                          <div class="s-title">
                          <FontAwesomeIcon icon={faAngleRight} />
                              <h6>Data Setting</h6>
                              <p>View and update securty Setting</p>
                          </div>
                      </a>
                  </li>
                  <li>
                      <a href="#" class="">
                          <div class="s-title">
                          <FontAwesomeIcon icon={faAngleRight} />
                              <h6>Privacy Setting</h6>
                              <p>View and update securty Setting</p>
                          </div>
                      </a>
                  </li>
              </ul>
              <button class="logout-btn"> Log Out </button>
          </div>
      </div>
      
      
      
      <div class="right-panel">
          <div class="tab-inner">
              <div class="tab-heading">
                  Edit Profile
                  <div class="progress-box">
                      <div class="progress-title">80% Complete</div>
                      <div class="progress">
                      <div className='progress-bar'
                      role='progressbar'
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={10}
                      style={{width: '70%'}}></div>
                      </div> 
                  </div>
              </div>
              
              <div class="cover-bg">
                  <div class="click-images">
                      <div class="overlay">
                          <img src="/images/cam.png" width="68px"/>
                      </div>
                      <input type="file" class="upload-file"/>
                  </div>
              </div>
              <div class="public-profile-details">
                  <div class="form">
                      <div class="input-group">
                          <div class="label">
                              Full Name
                          </div>
                          <div class="input-field">
                              <input type="text"  class="form-control" value="Peter Castillo"/>
                          </div>
                      </div>
                      <div class="input-group">
                          <div class="label">
                              Email
                          </div>
                          <div class="input-field">
                              <input type="text"  class="form-control" value="om.soni@gignav.com"/>
                          </div>
                      </div>
                      <div class="input-group">
                          <div class="label">
                              Phone(optional)
                              
                          </div>
                          <div class="input-field">
                              <input type="text"  class="form-control" value="+1 (248) 134-3450"/>
                          </div>
                      </div>
                      <div class="input-group">
                          <div class="label">
                              Address(optional)
                          </div>
                          <div class="input-field">
                              <input type="text"  class="form-control" value="1 Amoth, Adelanto, VA, 55754"/>
                          </div>
                      </div>
                      
                      <div class="input-group">
                          <div class="label">
                              Bio
                          </div>
                          <div class="input-field">
                              <textarea type="text"  class="form-control" >
                              </textarea>
                          </div>
                      </div>
                      <div class="input-group">
                          <div class="label">
                              Skills
                          </div>
                          <div class="input-field">
                              <textarea type="text"  class="form-control" >
                              </textarea>
                          </div>
                      </div>
                  </div>
              </div>
              
              <div class="setting-footer">
                  <button type="submit" class="submit-btn">Save</button>
              </div>
          </div>
          
      </div>
  </div>

      </div>
  )
  }
}
  export default Edit;