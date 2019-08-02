import React from 'react';
import Edit from './Components/edit.js';
import {Component} from 'react';
import NetworkSetting from './Components/networkSetting';
import SystemSetting from './Components/systemSetting';
import Communication from './Components/communication';
import PrivacySetting from './Components/privacySetting';
import DataSetting from './Components/dataSetting';

import { Route, BrowserRouter as Router } from 'react-router-dom';

class Routers extends Component{
    render(){
        return(
            <div>
<NetworkSetting/>
<SystemSetting/>
<Communication/>
<PrivacySetting/>
<DataSetting/>
    <Router>
       <div>
   
      <Route exact path="/" component={NetworkSetting} />
      <Route exact path="/edit-profile" component={Edit} />
      <Route exact path="/system-setting" component={SystemSetting} />
      <Route exact path="/communication" component={Communication} />
      <Route exact path="/data-setting" component={DataSetting} />
      <Route exact path="/privacy-setting" component={PrivacySetting} />

            </div>
    </Router>
    </div>
   )
        
}
}
export default Routers;