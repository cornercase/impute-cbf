import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';



function handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
}

function model2posteriorFlow(rica, lica, rva, lva){
    const kva = isNaN(rva) ? lva : rva;
    console.log('kva = ' + kva)
    const iva = 0.436 * (rica + lica) - kva;
    console.log(iva)
    return kva+iva
}


class App extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    rica: '',
	    lica: '',
	    rva: '',
	    lva: '',
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
		const posterior = model2posteriorFlow(rica, lica, rva,lva)
		cbf = rica+lica+posterior;
	    }
	    break;
	case "3":
	    if (!isNaN(rva) && !isNaN(lva)) {
		alert("Both RVA and LVA must be empty for model 3")
		
	    } else {
	    const posterior = 29.80+0.38*( rica + lica)
	    console.log('posterior = ' + posterior)
	    cbf = rica+lica+posterior
	    }
	    break;
	case "4":
	    if ( !( (isNaN(rica) && !isNaN(lica))||(!isNaN(rica)&&isNaN(lica)) )  ) {
			alert('clear either RICA or LICA');
	    }
	    else {
		var posterior = rva + lva;
		var anterior = 0;
		if (isNaN(lica)) {
		    const t_lica = 0.3158 * posterior + 0.748 * rica
		    anterior = t_lica + rica
		}
		if (isNaN(rica)) {
		    const t_rica = 0.3218 * posterior + 0.722 * lica
		    anterior = lica + t_rica
		}
		cbf = anterior + posterior;
	    }
	    break;

	case "5":
	    if ( !( (isNaN(rica) && !isNaN(lica))||(!isNaN(rica)&&isNaN(lica)) )  ) {
		alert('clear either RICA or LICA');
	    } else if ( !( (isNaN(rva) && !isNaN(lva))||(!isNaN(rva)&&isNaN(lva)) )  ) {
		alert('clear either RVA or LVA');
	    } else {
		var anterior = 0;
		var posterior = 0;
		if (isNaN(lica)) {
		    const t_lica = 0.89 * rica + 36.60;
		    anterior = t_lica + rica;
		    posterior = model2posteriorFlow(rica,t_lica,rva,lva);
		    
		}
		if ( isNaN(rica)) {
		    const t_rica = 0.82 * lica + 55.42;
		    anterior = lica + t_rica;
		    posterior = model2posteriorFlow(t_rica,lica,rva,lva);
		}
		cbf = anterior+posterior;
		
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
					     <option value="1">1 - Sum 4 Vessels</option>
					     <option value="2">2 - Impute 1 corrupted vertebral artery</option>
					     <option value="3">3 - Discard vertebral, impute posterior</option>
					     <option value="4">4 - Impute 1 corrupted internal carotid</option>
					     <option value="5">5 - Impute 1 corruted ICA, 1 corrupted VA</option>
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
