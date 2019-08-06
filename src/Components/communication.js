import { Component } from 'react';
import React from 'react';
import '../gignav-responsive-theme.css';
import '../gignav-theme.css';
import Field from "../Field";

class Communication extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Data: Field
    }
  }


  render() {
    const selects = () => {
      return this.state.Data.communicationSettings.items.map(el => {
        return (
          <option>{el.label}</option>
        );
      })
    };

    return (
      <div>

        <div className="body-panel">

          <div className="right-panel">
            <div className="tab-inner">
              <div className="tab-heading">
                Communication
      </div>
              <div className="cover-bg">
                <img src="images/cover-img.png" />
              </div>
              <div className="public-profile">
                <div className="public-title">Public Profile</div>
                <div className="switch-btn">
                  <label className="switch">
                    <input type="checkbox" />
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
                      <input type="text" className="form-control" Value={this.state.Data.communicationSettings.order} />
                    </div>
                  </div>
                  <div className="input-group">
                    <div className="label">
                      Code
          </div>
                    <div className="input-field">
                      <input type="text" className="form-control" Value={this.state.Data.communicationSettings.code} />
                    </div>
                  </div>
                  <div className="input-group">
                    <div className="label">
                      Label
            </div>
                    <div className="input-field">
                      <input type="text" className="form-control" value={this.state.Data.communicationSettings.label} />
                    </div>
                  </div>
                  <div className="input-group">
                    <div className="label">
                      Desc
            </div>
                    <div className="input-field">
                      <input type="text" className="form-control" Value={this.state.Data.communicationSettings.desc} />
                    </div>
                  </div>
                  <div className="input-group">
                    <div className="label">
                      Items
            </div>

                    <div className="input-field">
                      <select type="text" className="form-control" >
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


export default Communication;
