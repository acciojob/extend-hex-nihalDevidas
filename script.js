const extendHex = (shortHex) => {
  // write your code here
	let arr   = ["#"];
	for(let i=0; i<shortHex.length;i++){
		if(shortHex.charAt(i) !== "#"){
			arr.push(shortHex.charAt(i));
		    arr.push(shortHex.charAt(i));
		}
	}

	return arr.join("");
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex)); 
