import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';



function handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
}

function model1VAflow(rica, lica, rva, lva){
    
    const kva = isNaN(rva) ? lva : rva;
    console.log('kva = ' + kva)
    const flow = 1.2259 * (rica + lica) + 0.9334 * kva;
    console.log(flow)
    
    return {
	flow
    }
}

function model2(rica, lica){
    
    const flow = 1.4236 * (rica + lica)
    
    return {
	flow
    }
    
}
function model2VAFlow(rica, lica, rva, lva){
    const kva = isNaN(rva) ? lva : rva;
    console.log('kva = ' + kva)
    const iva = 0.436 * (rica + lica) - kva;
    console.log(iva)
    
    if (isNaN(rva)) {
	rva = iva
    }
    if (isNaN(lva)) {
	lva = iva
    }

    const posterior = rva + lva
    
    return {
	rva,
	lva,
	posterior
    }
    
}
function model3PosteriorFlow(rica, lica){
    const posterior = 29.80+0.38*( rica + lica)
    return posterior    
}

function model5ICAFlow(rica,lica){
    if (isNaN(lica)) {
	const t_lica = 0.89 * rica + 36.60;
	lica = t_lica
	
    }
    if ( isNaN(rica)) {
	const t_rica = 0.82 * lica + 55.42;
	rica = t_rica
	
    }
    const anterior = rica + lica;

    return{
	rica,
	lica,
	anterior
    }    
}
function model8VAFlow(rva, lva){
    const kva = isNaN(rva) ? lva : rva;
    console.log('kva = ' + kva)
    const iva = 86.95 + 0.43 * kva;
    console.log(iva)
    
    if (isNaN(rva)) {
	rva = iva
    }
    if (isNaN(lva)) {
	lva = iva
    }

    const posterior = rva + lva
    
    return {
	rva,
	lva,
	posterior
    }
    
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
	case "0":
	    //alert('Not actually implemented');
	    cbf = rica+lica+rva+lva;
	    break;
	case "1":
	    if ( !( (isNaN(rva) && !isNaN(lva))||(!isNaN(rva)&&isNaN(lva)) )  ) {
		alert('clear either RVA or LVA');
	    } else {
		let compVA = model1VAflow(rica, lica, rva,lva)
		cbf = compVA.flow;
	    }
	    break;
	case "2":
	    //alert('Not actually implemented');
	    //if (isNaN(rva)) {alert('yes')}
	    console.log('rva = ' + rva)
	    console.log('lva = ' + lva)
	    if (!(isNaN(rva) && isNaN(lva))) {
		alert("Both RVA and LVA must be empty for model 2")
	    }
	    else {
		let comp = model2(rica, lica)
		cbf = comp.flow;
	    }
	    break;
	// case "3":
	//     if (!isNaN(rva) && !isNaN(lva)) {
	// 	alert("Both RVA and LVA must be empty for model 3")
		
	//     } else {
	// 	const posterior = model3PosteriorFlow( rica, lica)
	//     console.log('posterior = ' + posterior)
	//     cbf = rica+lica+posterior
	//     }
	//     break;
	case "3":
	    if ( !( (isNaN(rica) && !isNaN(lica))||(!isNaN(rica)&&isNaN(lica)) )  ) {
			alert('clear either RICA or LICA');
	    }
	    else {
		var posterior = rva + lva;
		var anterior = 0;
		var tica = 0;
		if (isNaN(lica)) {
		    tica = rica;
		}
		if (isNaN(rica)) {
		    tica = lica;
		}
		cbf = 1.8662*tica + 1.1451 * posterior;
	    }
	    break;

	case "4":
	    if ( !( (isNaN(rica) && !isNaN(lica))||(!isNaN(rica)&&isNaN(lica)) )  ) {
		alert('clear either RICA or LICA');
	    } else if ( !( (isNaN(rva) && !isNaN(lva))||(!isNaN(rva)&&isNaN(lva)) )  ) {
		alert('clear either RVA or LVA');
	    } else {
		
		const kva = isNaN(rva) ? lva : rva;
		const kica = isNaN(rica) ? lica : rica;
		
		cbf = 2.4194 * kica + 0.9825 * kva;
		
	    }
	    break;
	case "5":
	    var kica = 0;
	     if ( !( (isNaN(rica) && !isNaN(lica))||(!isNaN(rica)&&isNaN(lica)) )  ) {
		alert('clear either RICA or LICA');
	     } else {
		 if ( !isNaN(rva) && !isNaN(lva)  ) {
		     alert('clear  both RVA and LVA');
		 } else {
		     kica = isNaN(rica) ? lica : rica;
		 }
		    
		cbf = 2.8414 * kica;
		
	    }
	    break;

	case "6":
	    if ( !isNaN(rica) && !isNaN(lica)) {
		alert("clear both RICA and LICA")
	    } else {
		const posterior = rva + lva;
		
		cbf = 3.2193 * posterior;
	    }
	    break;
	case "7":
	    if ( !isNaN(rica) && !isNaN(lica)) {
		alert("clear both RICA and LICA")
	    } else if ( !( (isNaN(rva) && !isNaN(lva))||(!isNaN(rva)&&isNaN(lva)) )  ) {
		alert('clear either RVA or LVA');
	    } else {
		const kva = isNaN(rva) ? lva : rva;
		cbf = 5.8164 * kva;
	    }
	    break;
	case "8":
	    if ( !isNaN(rica) && !isNaN(lica) && !isNaN(rva) && !isNaN(lva)) {
		alert("clear ALL vessel flow values")
	    } else {
		cbf=933.6563
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
					     <option value="0">0 - Sum 4 Vessels</option>
					     <option value="1">1 - Impute from 2 ICAs and 1 VA</option>
					     <option value="2">2 - Impute from 2 ICAs</option>
					     <option value="3">3 - Impute from 1 ICA and 2 VAs</option>
					     <option value="4">4 - Impute from 1 ICA and 1 VA</option>
					     <option value="5">5 - Impute from 1 ICA</option>
					     <option value="6">6 - Impute from 2 VAs</option>
					     <option value="7">7 - Impute from 1 VA</option>
					     <option value="8">8 - All corrupted vessels - population mean flow</option>
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
