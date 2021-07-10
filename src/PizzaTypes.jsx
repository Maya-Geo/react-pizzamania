import React from 'react';
import images4 from './Images/made.jpg'
import images5 from './Images/toby.jpg'
import images6 from './Images/vege.jpg'
import images7 from './Images/pizza.jpg'

const PizzaTypes = () => {
    return (
        
		<div className="container pizza-types" >
		<div className="row">
			<h3 className="text-center">Pizza Types</h3>
	
			<div className="col-md-3">
				 <div className="thumbnail">
		  <img src={images4} alt="pepperoni" />
		  <div className="caption">
			<h3>Pepperoni Pizza</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		  </div>
		</div>
			</div>
			<div className="col-md-3">
				 <div className="thumbnail">
		  <img src={images5} alt="veg pizza" />
		  <div className="caption">
			<h3>Vegetable Pizza</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		  </div>
		</div>
			</div>
			<div className="col-md-3">
				 <div className="thumbnail">
		  <img src={images6} alt="cheese" />
		  <div className="caption">
			<h3>Cheese Pizza</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		  </div>
		</div>
			</div>
			<div className="col-md-3">
				 <div className="thumbnail">
		  <img src={images7} alt="boss" />
		  <div className="caption">
			<h3>Bossu Pizza</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		  </div>
		</div>
			</div>
		</div>
	</div>
        
    );
}

export default PizzaTypes;
