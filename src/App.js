import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';



import './App.css';


import Navigation from './component/Navigation';
import FormAddGame from './component/FormAddGame';
import Games from './component/Games';

function App() {
  return (
  	<Router>
    	<Navigation />
		<div className="container p-4">
			<a href="#navbar-top" className="float" data-toggle="tooltip" title="Back to top">
                <i className="fa fa-chevron-up my-float"></i>
            </a>
			<div className="row justify-content-md-center">
				<div className="col-10 col-sm-10 col-lg-4">
					<Route path="/" exact component={FormAddGame} />
				</div>
				<div className="col-10 col-sm-10 col-lg-8">
					<h1 className="text-center">Last games addes</h1>
					<Games />
				</div>
			</div>  
      	</div>
    </Router>
    
  );
}

export default App;
