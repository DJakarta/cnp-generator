var display=function () {
		$k('#output')[0].innerText+=CNP()+'\n';
	},
	CNP=function () {
		var cnp='', date, currentDate=new Date().getTime(), sum=0, va=[2,7,9,1,4,6,3,5,8,2,7,9], ca=[];
		
		//gender
		cnp+=(Math.random()>0.5) ? 1 : 2;
		
		//age
		date=new Date(currentDate-1000*60*60*24*356*Math.round((15+Math.random()*10)));
		cnp+=date.getFullYear()%100+date.getMonth().leadingZeroes(2)+date.getDate().leadingZeroes(2);
		
		//county
		cnp+=Math.round(Math.random()*51+1).leadingZeroes(2);
		
		//city
		cnp+=Math.round(Math.random()*998+1).leadingZeroes(3);
		
		//control
		ca=cnp.split('');
		for (i=0; i<12; i++) {
			sum+=va[i]*ca[i];
		}
		cnp+=(sum%11===10) ? 1 : sum%11;
		
		return cnp;
	};

$k('#button').on('click', display, false);