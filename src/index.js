import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';



function handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
}


class App extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    rica: null,
	    lica: null,
	    rva: null,
	    lva: null,
	    cbf: 0,
	    model: "1",
	       
	};
	console.log('ran constructor')
	this.calcCBF = this.calcCBF.bind(this);
    }

    calcCBF(e) {
	e.preventDefault();
	var cbf = 0;
	const rica = parseFloat(this.state.rica);
	const lica = parseFloat(this.state.lica);
	const rva = parseFloat(this.state.rva);
	const lva = parseFloat(this.state.lva);
	switch (this.state.model) {
	case "1":
	    //alert('Not actually implemented');
	    cbf = rica+lica+rva+lva;
	    break;
	case "2":
	    //alert('Not actually implemented');
	    //if (isNaN(rva)) {alert('yes')}
	    console.log('rva = ' + rva)
	    console.log('lva = ' + lva)
	    if ( !( (isNaN(rva) && !isNaN(lva))||(!isNaN(rva)&&isNaN(lva)) )  ) {
		alert('clear either RVA or LVA');
	    }
	    else {
		
		const kva = isNaN(rva) ? lva : rva;
		console.log('kva = ' + kva)
		const iva = 0.436 * (rica + lica) - kva;
		console.log(iva)
		cbf = rica+lica+kva+iva;
	    }
	    
	    break;
	default:
	    alert('model ' + this.state.model + ' not implemented');
	}

	
	
	this.setState({cbf: cbf})
    }
    
    render() {
	
	return(
	    
	<div>
      <h1>CBF Imputation</h1>
	<form>
	    <label>        Model:        <select    name="model"   value={this.state.model} onChange={e => this.setState({[e.target.name]: e.target.value})}  >
					     <option value="1">Model 1</option>
					     <option value="2">Model 2</option>
					     <option value="3">Model 3</option>
					     <option value="4">Model 4</option>
					     <option value="5">Model 5</option>
					     <option value="6">Model 6</option>
					     <option value="7">Model 7</option>
					     <option value="8">Model 8</option>
					     <option value="9">Model 9</option>
					 </select>
	    </label>
	    <br/>
        <label>
          RICA:{" "}
            <input
		type="number"
		value={this.state.rica}
		name="rica"
		onChange={e => this.setState({[e.target.name]: e.target.value})} />        </label>
	  <br/>
	  <label>
          LICA:{" "}
		   <input
		       type="number"
		       value={this.state.lica}
		       name="lica"
		       onChange={e => this.setState({[e.target.name]: e.target.value})} />        </label>
	  <br/><label>
	  RVA:{" "}
            <input
		type="number"
		value={this.state.rva}
		name="rva"
		onChange={e => this.setState({[e.target.name]: e.target.value})} />        </label>
	  <br/><label>
          LVA:{" "}
		   <input
		       type="number"
		       value={this.state.lva}
		       name="lva"
		       onChange={e => this.setState({[e.target.name]: e.target.value})} />        </label>
	    <br/><br/>
	    <button onClick={(e)=>{this.calcCBF(e)}}>Compute</button> <button >Clear</button>

	</form>

	<h5>Total CBF: {this.state.cbf}</h5>
	<div>
	    Sandbox
	<h5>RICA: {this.state.rica}</h5>
	    <h5>LICA: {this.state.lica}</h5>
	    </div>
    </div>
    );
    }

    
}






ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
