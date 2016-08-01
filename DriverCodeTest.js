const fs = require('fs');

fs.readFile(file, 'utf8', function(err, data){
	if(err) throw err;
	var dataArr = data.toString().replace(/\s+/g, "").replace(/(>Rosalind_\d{4})/g, " ").split(" ")
	dataArr.shift();
	dnaMatch(dataArr);
});

function dnaMatch (stringArr){
var sequence = "";
//go through array of strings, applying checkTwo until there is only one element left (the combined string)
while(stringArr.length > 1){
	var i = 0;
	while(i<stringArr.length-1){
		var j=1;
		while(j<stringArr.length){
			var result = checkTwo(stringArr[i], stringArr[i+j]);
			//if there isn't overlap, leave as is and move on to next pair of strings
			if (result === false) j++;
			//if there is overlap, replace two strings with combined string
			else {
				stringArr.splice(i, 1);
				stringArr.splice(i+j, 1);
				stringArr.push(result);
			}
		}
		i++;	
	}
	i = 0;
	j = 1;
}
return stringArr[0];
}


function checkTwo (str1, str2){
var finalStr = "";

if(str2.length>str1.length){
	[str1, str2] =[str2, str1]
}

var j = str2.length/2+2 //more than half its length
//if overlap is beginning of str2, return combined string
var i = str1.indexOf(str2.slice(0, j);
if(i > 0){
	finalStr+=str1.slice(0,i);
	finalStr+=str2;
	return finalStr;
}
if(i === 0) {
	return str1;
}

//if overlap is end of str2, return combined string
i = str1.indexOf(str2.slice(j);
if(i === 0){
		finalStr+=str2.slice(0,j);
		finalStr+=str1;
		return finalStr;
}
if(i > 0) {
	return str1;
}

//if no overlap return false
return false;
}