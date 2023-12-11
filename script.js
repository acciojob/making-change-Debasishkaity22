const makeChange = (c) => {
  // your name here
	let amount=c/100;
	let PennyIndollar=0.01;
	let NickleIndollar=0.05;
	let DimeIndollar=0.10;
	let QuarterIndollar=0.25;
	let Quarter=0;
	let Penny=0;
	let Nickle=0;
	let Dime=0;
	while(amount>=QuarterIndollar){
       Quarter++;
		amount-=QuarterIndollar;
	}
	while(amount>= DimeIndollar){
	Dime++;
		amount-=DimeIndollar;
	}
	while(amount>= NickleIndollar){
	Nickle++;
		amount-=NickleIndollar;
	}
	while(amount>= PennyIndollar){
	 Penny++;
		amount-=PennyIndollar;
	}
	let res={
		q:Quarter,
		d:Dime,
		n:Nickle,
		p:Penny
	};
	return res;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
