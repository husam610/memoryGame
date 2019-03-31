let memory_array=[0,1,2,3,0,1,2,3];
let tempArr=[];

function checkCard(x,y,z){
    tempArr.push(x,y,z);
}

function testx(a,b){
document.getElementById(a).classList.toggle('MyClass1');
document.getElementById(b).classList.toggle('MyClass2');
}

function test1(a,b,c){
    testx(a,b);
    checkCard(a,b,c);
    console.log(tempArr);
    if(tempArr[5]== tempArr[2]){
        tempArr=[];
    }else if(tempArr[4] &&tempArr[5]==undefined){tempArr=[];
    }else if(tempArr[5] && tempArr[2]!== tempArr[5]){
        setTimeout(
        function(){
            document.getElementById(tempArr[0]).classList.toggle('MyClass1');
            document.getElementById(tempArr[1]).classList.toggle('MyClass2');
            document.getElementById(tempArr[3]).classList.toggle('MyClass1');
            document.getElementById(tempArr[4]).classList.toggle('MyClass2');
            tempArr=[]; }, 700);

    }
}

Array.prototype.randomCard = function(){
    let i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

function newBoard(){
    let output = '';
    memory_array.randomCard();
	for(let i = 0; i < memory_array.length; i++){
		output += '<div class="cardLea"><div id="t'+i+'" class="front MyClass11" onclick="test1('+"'"+'t'+i+''+"'"+','+"'"+'tt'+i+"'"+','+"'"+ memory_array[i]+"'"+')"><img src="img/logo.png" class="sora"></div><img src="img/'+memory_array[i]+'.jpg" id="tt'+i+'"class="back MyClass22" onclick="test1('+"'"+'t'+i+''+"'"+','+"'"+'tt'+i+''+"'"+')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
}

newBoard();