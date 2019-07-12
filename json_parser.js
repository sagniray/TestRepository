let json_object= {
	"op": "equal",
	"lhs": {
		"op": "add",
		"lhs": 1,
		"rhs": {
			"op": "multiply",
			"lhs": "x",
			"rhs": 10
		}
	},
	"rhs": 21
};
function getKeys(json_object, depth){
	let keys = [];
	let  equation = " ";
	keys = Object.keys(json_object);
	console.log('\n\n KEYS = ', keys);
	let x;
	for (let i = 0; i<keys.length; i++) {
		var key = keys[i];
		console.log('\n\n json_object[ ' + key + '] ', json_object[key] )
		console.log('\n\n type of ', typeof json_object[key] )
		/*if (typeof json_object[key] === "equal") {
			keys[key]
		}*/
		
		if(key === "op") {
			
			switch (json_object[key]) {
				
				case "equal" :
					equation += "=";
							break;
				case "add": 
					equation += "+";
							break;
				
				case "multiply" : 
					equation += "*";
							break;
				
				case "subtract": 
					equation += "-";
							break;
				
				case "divide" :
					equation += "/";
							break;
				
				default : 
							console.log("\n\n Invalid type of Operand = ",  json_object[key]);
							break;
				
				
			}
			
		} else if (key === "rhs") {
			switch (typeof json_object[key]){
				
				case "number": 
					equation += json_object[key];
						break;

				case "string": 
					  equation += json_object[key];
						break;
						
				case "object": 
				if (depth == 1)
				{
					equation += getKeys(json_object[key], (depth+1));
				}
					else {
						equation += "("+getKeys(json_object[key], (depth+1))+")";
						 }
						break;
				default : 
					console.log("\n\n Invalid type of Operand = ",  json_object[key]);
						break;
			}
		
		}
		else if (key === "lhs") {
			switch (typeof json_object[key]){
				
				case "number": 
					equation = json_object[key]+ equation;
						break;

				case "string": 
					  equation = json_object[key]+ equation;
						break;
						
				case "object": 
					if(depth == 1)
					{
						equation = getKeys(json_object[key], (depth+1))+ equation;
					}
					else {
						equation = "("+getKeys(json_object[key], (depth+1))+")" + equation;
					}
						break;
				default : 
					console.log("\n\n Invalid type of Operand = ",  json_object[key]);
						break;
			}
			
		
		}
		


		
	}
	return equation;
}


let result = getKeys(json_object, 1);
console.log("the result is ", result);
