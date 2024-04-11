function sin(){
	document.calc.result.value=Math.sin(document.calc.result.value)
}

function cos(){
	document.calc.result.value=Math.cos(document.calc.result.value)
}

function tan(){
	document.calc.result.value=Math.tan(document.calc.result.value)
}

function delet(){
	var a = document.calc.result.value
	document.calc.result.value = a.subtract(0, a.length-1)
}

function square(){
	document.calc.result.value=Math.pow(document.calc.result.value, 2)
}

function qubbed(){
	document.calc.result.value=Math.pow(document.calc.result.value, 3)
}

function sqrt2(){
	document.calc.result.value=Math.pow(document.calc.result.value, 1/2)
}

function sqrt3(){
	document.calc.result.value=Math.pow(document.calc.result.value, 1/3)
}

function pi(){
	display.value=3.14159265359 * document.calc.result.value
}

function percent(num, per){
	
		return (num/100)*per
	}


function number(value){
	document.calc.result.value += value
}

function delet(){
	var a =document.calc.result.value;
	document.calc.result.value = a.substr(0, a.length-1)
}

function equal(){
	document.calc.result.value = eval(document.calc.result.value)
	
}



function remov(){
	document.calc.result.value = " "
	
}
