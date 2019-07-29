var flag = 0;
var arrEliments = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var arrConditions = [['one', 'two', 'three'],['four', 'five', 'six'],['seven', 'eight', 'nine'],['one', 'four', 'seven'],['two', 'five', 'eight'],['three', 'six', 'nine'],['one', 'five', 'nine'],['three', 'five', 'seven']];
var arrDefaultAttributeName = ['top left', 'top', 'top right', 'left', 'middle', 'right', 'bottom left', 'bottom', 'bottom right'];
var tempName = 0;
var arrCross = [];
var arrCircle = [];
var ply1=0,ply2=0;
var tempAttributeName1 = [];
var tempAttributeName2 = [];

window.onload = userIndicate(0);

function userIndicate(userIndicator) {
	if (userIndicator == 0){
		document.querySelector('#player_1_name').style.cssText = 'border-bottom-style: solid;';
	} else {
		document.querySelector('#player_2_name').style.cssText = 'border-bottom-style: solid;';
	}
}

function addImg(move) {
	if (flag == 0){
		document.querySelector('#player_2_name').style.cssText = 'border-bottom-style: solid;';
		document.querySelector('#player_1_name').style.cssText = 'border-bottom-style: none;';
		tempAttributeName1.push(document.querySelector(`#${move}`).getAttribute('class'));
		document.querySelector(`#${move}`).setAttribute('class', `${document.querySelector(`#${move}`).getAttribute('class')} ugAnimate`);
		document.querySelector(`#${move}`).innerHTML = 'X';
		document.querySelector(`#${move}`).removeAttribute('onclick');
		arrCross.push(move);
		flag = 1;
	}
	else {
		document.querySelector('#player_1_name').style.cssText = 'border-bottom-style: solid;';
		document.querySelector('#player_2_name').style.cssText = 'border-bottom-style: none;';
		tempAttributeName2.push(document.querySelector(`#${move}`).getAttribute('class'));
		document.querySelector(`#${move}`).setAttribute('class', `${document.querySelector(`#${move}`).getAttribute('class')} ugAnimate`);
		document.querySelector(`#${move}`).innerHTML = 'O';
		document.querySelector(`#${move}`).removeAttribute('onclick');
		arrCircle.push(move);
		flag = 0;
	}

	var conditionCross = [
	arrCross.includes('one') && arrCross.includes('two') && arrCross.includes('three'),
	arrCross.includes('four') && arrCross.includes('five') && arrCross.includes('six'),
	arrCross.includes('seven') && arrCross.includes('eight') && arrCross.includes('nine'),
	arrCross.includes('one') && arrCross.includes('four') && arrCross.includes('seven'),
	arrCross.includes('two') && arrCross.includes('five') && arrCross.includes('eight'),
	arrCross.includes('three') && arrCross.includes('six') && arrCross.includes('nine'),
	arrCross.includes('one') && arrCross.includes('five') && arrCross.includes('nine'),	
	arrCross.includes('three') && arrCross.includes('five') && arrCross.includes('seven')];
	
	var conditionCircle = [
	arrCircle.includes('one') && arrCircle.includes('two') && arrCircle.includes('three'),
	arrCircle.includes('four') && arrCircle.includes('five') && arrCircle.includes('six'),
	arrCircle.includes('seven') && arrCircle.includes('eight') && arrCircle.includes('nine'),
	arrCircle.includes('one') && arrCircle.includes('four') && arrCircle.includes('seven'),
	arrCircle.includes('two') && arrCircle.includes('five') && arrCircle.includes('eight'),
	arrCircle.includes('three') && arrCircle.includes('six') && arrCircle.includes('nine'),
	arrCircle.includes('one') && arrCircle.includes('five') && arrCircle.includes('nine'),
	arrCircle.includes('three') && arrCircle.includes('five') && arrCircle.includes('seven')];

	for (var a=0; a<8; a++){
		if (conditionCross[a] == true)
		{
			ply1++;
			tempName = a;
			flag = 0;
			document.querySelector('#player_1_name').style.cssText = 'border-bottom-style: none;';
			document.querySelector('#player_2_name').style.cssText = 'border-bottom-style: none;';
			userIndicate(0);
			resetImg('X'); 
		}
		else if (conditionCircle[a] == true)
		{
			ply2++;
			tempName = a;
			flag = 1;
			document.querySelector('#player_1_name').style.cssText = 'border-bottom-style: none;';
			document.querySelector('#player_2_name').style.cssText = 'border-bottom-style: none;';
			userIndicate(1);
			resetImg('O');
		}
	}
	
	
}

function resetImg(abc)
 {
	for (let i=0; i<=8; i++){
		document.querySelector(`#${arrEliments[i]}`).removeAttribute('onclick');
	}

	if (abc == 'X'){
		document.querySelector(`#${arrConditions[tempName][0]}`).setAttribute('class', `${document.querySelector(`#${arrConditions[tempName][0]}`).getAttribute('class')} blink`);
		document.querySelector(`#${arrConditions[tempName][1]}`).setAttribute('class', `${document.querySelector(`#${arrConditions[tempName][1]}`).getAttribute('class')} blink`);
		document.querySelector(`#${arrConditions[tempName][2]}`).setAttribute('class', `${document.querySelector(`#${arrConditions[tempName][2]}`).getAttribute('class')} blink`);
		document.querySelector('#player_1').innerHTML = `${ply1}`;
	}
	else {
		document.querySelector(`#${arrConditions[tempName][0]}`).setAttribute('class', `${document.querySelector(`#${arrConditions[tempName][0]}`).getAttribute('class')} blink`);
		document.querySelector(`#${arrConditions[tempName][1]}`).setAttribute('class', `${document.querySelector(`#${arrConditions[tempName][1]}`).getAttribute('class')} blink`);
		document.querySelector(`#${arrConditions[tempName][2]}`).setAttribute('class', `${document.querySelector(`#${arrConditions[tempName][2]}`).getAttribute('class')} blink`);
		document.querySelector('#player_2').innerHTML = `${ply2}`;
	}
}

function resetGame() {
	var len_cross=arrCross.length;
	var len_circle=arrCircle.length;
	
	for (let m=0;m<=8;m++){
		document.querySelector(`#${arrEliments[m]}`).setAttribute('class', `${arrDefaultAttributeName[m]}`);
	}

	document.querySelector(`#${arrConditions[tempName][0]}`).setAttribute('class', `${document.querySelector(`#${arrConditions[tempName][0]}`).getAttribute('class')}`);
	document.querySelector(`#${arrConditions[tempName][1]}`).setAttribute('class', `${document.querySelector(`#${arrConditions[tempName][1]}`).getAttribute('class')}`);
	document.querySelector(`#${arrConditions[tempName][2]}`).setAttribute('class', `${document.querySelector(`#${arrConditions[tempName][2]}`).getAttribute('class')}`);

	for(let y=0;y<len_cross;y++)
	{
		arrCross.pop();
	}
	
	for(let u=0;u<len_circle;u++)
	{
		arrCircle.pop();
	}

	for ( i=0; i<=8; i++){
		document.querySelector(`#${arrEliments[i]}`).innerHTML = '';
		document.querySelector(`#${arrEliments[i]}`).setAttribute('onclick', 'addImg(this.id)');
	}
}

