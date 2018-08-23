// alert('YOLO BINCHES! its SKETCH - A - BETCH');

// HOVER Function:
// rgb(0, 0, 0) = black
// rgb(255, 255, 255) = white 

function draw(cell) {
  
 	if(cell.style.background = `rgb(255, 255, 255)`) {
 		 cell.style.background = `rgb(0, 0, 0)`;
 	}    
};

// function drawTwo(cell) {
	
// 	if(cell.style.background = `rgb(238, 238, 238)`) {
//  		 cell.style.background = `rgb(221, 221, 221)`;
//  	}    
// };

// CELL BUILDER function


     // let cellCounter = 0;
     // while (cellCounter >256) {
     //     let emptyCell = document.createElement('div');
     //     emptyCell.setAttribute('class', 'cell');
     //     emptyCell.setAttribute('onmouseover',"draw(this)");
     //     emptyCell.style.cssText = 'border: 1px red solid; background: rgb(255, 255, 255);';
     //     grid.appendChild(emptyCell);
     //     cellCounterer++;
     //     console.log('test')
     // };
    

// this wrapper will contain the grid
let wrapperPosition = document.querySelector('body');
let wrapper = document.createElement('div');
wrapper.setAttribute('id', 'wrapper'); 
wrapper.style.cssText = 'display:grid; grid-template-columns: repeat(16,1fr); grid-template-rows: repeat(16,1fr); height: 500px; width: 500px;';
wrapperPosition.appendChild(wrapper);
// wrapper.textContent = 'Hello World!' 



//BUILD CELLS
let cellPosition = document.querySelector('#wrapper');

let counter = 0;

     while (counter <256) {
     	 
         let cellName = document.createElement('div');
         cellName.setAttribute('class', 'cell');
         cellName.setAttribute('onmouseover',"draw(this)");
         cellName.style.cssText = 'border: 1px red solid; background: rgb(255, 255, 255);';
         cellPosition.appendChild(cellName);
         counter++;
         console.log('test')
     };
// buildCells(cellPosition);


//ROW 1

// let oneA = document.createElement('div');
// oneA.setAttribute('id', 'oneA');
// oneA.setAttribute('class', 'cell');
// oneA.setAttribute('onmouseover',"draw(this)");
// oneA.setAttribute('onmouseout',"draw(this)");
// oneA.setAttribute('onmouseover',"drawTwo(this)"); 
// oneA.style.cssText = 'border: 1px red solid; background: rgb(255, 255, 255);';
// cellPosition.appendChild(oneA);

// let oneB = document.createElement('div');
// oneB.setAttribute('id', 'oneB');
// oneB.setAttribute('class', 'cell'); 
// oneB.style.cssText = 'border: 1px red solid';
// cellPosition.appendChild(oneB);

// let oneC = document.createElement('div');
// oneC.setAttribute('id', 'oneC');
// oneC.setAttribute('class', 'cell'); 
// oneC.style.cssText = 'border: 1px red solid';
// cellPosition.appendChild(oneC);

// let oneD = document.createElement('div');
// oneD.setAttribute('id', 'oneD');
// oneD.setAttribute('class', 'cell'); 
// oneD.style.cssText = 'border: 1px red solid';
// cellPosition.appendChild(oneD);

// let oneE = document.createElement('div');
// oneE.setAttribute('id', 'oneE');
// oneE.setAttribute('class', 'cell'); 
// oneE.style.cssText = 'border: 1px red solid';
// cellPosition.appendChild(oneE);

// let oneF = document.createElement('div');
// oneF.setAttribute('id', 'oneF');
// oneF.setAttribute('class', 'cell'); 
// oneF.style.cssText = 'border: 1px red solid';
// cellPosition.appendChild(oneF);

// let oneG = document.createElement('div');
// oneG.setAttribute('id', 'oneG');
// oneG.setAttribute('class', 'cell'); 
// oneG.style.cssText = 'border: 1px red solid';
// cellPosition.appendChild(oneG);

// let oneH = document.createElement('div');
// oneH.setAttribute('id', 'oneH');
// oneH.setAttribute('class', 'cell'); 
// oneH.style.cssText = 'border: 1px red solid';
// cellPosition.appendChild(oneH);

// let oneI = document.createElement('div');
// oneI.setAttribute('id', 'oneI');
// oneI.setAttribute('class', 'cell'); 
// oneI.style.cssText = 'border: 1px red solid';
// cellPosition.appendChild(oneI);

// let oneJ = document.createElement('div');
// oneJ.setAttribute('id', 'oneJ');
// oneJ.setAttribute('class', 'cell'); 
// oneJ.style.cssText = 'border: 1px red solid';
// cellPosition.appendChild(oneJ);

// let oneK = document.createElement('div');
// oneK.setAttribute('id', 'oneK');
// oneK.setAttribute('class', 'cell'); 
// oneK.style.cssText = 'border: 1px red solid';
// cellPosition.appendChild(oneK);

// let oneL = document.createElement('div');
// oneL.setAttribute('id', 'oneL');
// oneL.setAttribute('class', 'cell'); 
// oneL.style.cssText = 'border: 1px red solid';
// cellPosition.appendChild(oneL);

// let oneM = document.createElement('div');
// oneM.setAttribute('id', 'oneM');
// oneM.setAttribute('class', 'cell'); 
// oneM.style.cssText = 'border: 1px red solid';
// cellPosition.appendChild(oneM);

// let oneN = document.createElement('div');
// oneN.setAttribute('id', 'oneG');
// oneN.setAttribute('class', 'cell'); 
// oneN.style.cssText = 'border: 1px red solid';
// cellPosition.appendChild(oneN);

// let oneO = document.createElement('div');
// oneO.setAttribute('id', 'oneO');
// oneO.setAttribute('class', 'cell'); 
// oneO.style.cssText = 'border: 1px red solid';
// cellPosition.appendChild(oneO);

// let oneP = document.createElement('div');
// oneP.setAttribute('id', 'oneP');
// oneP.setAttribute('class', 'cell'); 
// oneP.style.cssText = 'border: 1px red solid';
// cellPosition.appendChild(oneP);

// //ROW 2

// let twoA = document.createElement('div');
// twoA.setAttribute('id', 'twoA');
// twoA.setAttribute('class', 'cell'); 
// twoA.style.cssText = 'border: 1px blue solid';
// cellPosition.appendChild(twoA);

// let twoB = document.createElement('div');
// twoB.setAttribute('id', 'twoB');
// twoB.setAttribute('class', 'cell'); 
// twoB.style.cssText = 'border: 1px blue solid';
// cellPosition.appendChild(twoB);

// let twoA = document.createElement('div');
// twoA.setAttribute('id', 'twoA');
// twoA.setAttribute('class', 'cell'); 
// twoA.style.cssText = 'border: 1px blue solid';
// cellPosition.appendChild(twoA);

// let twoA = document.createElement('div');
// twoA.setAttribute('id', 'twoA');
// twoA.setAttribute('class', 'cell'); 
// twoA.style.cssText = 'border: 1px blue solid';
// cellPosition.appendChild(twoA);

// let twoA = document.createElement('div');
// twoA.setAttribute('id', 'twoA');
// twoA.setAttribute('class', 'cell'); 
// twoA.style.cssText = 'border: 1px blue solid';
// cellPosition.appendChild(twoA);

// let twoA = document.createElement('div');
// twoA.setAttribute('id', 'twoA');
// twoA.setAttribute('class', 'cell'); 
// twoA.style.cssText = 'border: 1px blue solid';
// cellPosition.appendChild(twoA);

// let twoA = document.createElement('div');
// twoA.setAttribute('id', 'twoA');
// twoA.setAttribute('class', 'cell'); 
// twoA.style.cssText = 'border: 1px blue solid';
// cellPosition.appendChild(twoA);

// let twoA = document.createElement('div');
// twoA.setAttribute('id', 'twoA');
// twoA.setAttribute('class', 'cell'); 
// twoA.style.cssText = 'border: 1px blue solid';
// cellPosition.appendChild(twoA);

// let twoA = document.createElement('div');
// twoA.setAttribute('id', 'twoA');
// twoA.setAttribute('class', 'cell'); 
// twoA.style.cssText = 'border: 1px blue solid';
// cellPosition.appendChild(twoA);

// let twoA = document.createElement('div');
// twoA.setAttribute('id', 'twoA');
// twoA.setAttribute('class', 'cell'); 
// twoA.style.cssText = 'border: 1px blue solid';
// cellPosition.appendChild(twoA);

// let twoA = document.createElement('div');
// twoA.setAttribute('id', 'twoA');
// twoA.setAttribute('class', 'cell'); 
// twoA.style.cssText = 'border: 1px blue solid';
// cellPosition.appendChild(twoA);

// let twoA = document.createElement('div');
// twoA.setAttribute('id', 'twoA');
// twoA.setAttribute('class', 'cell'); 
// twoA.style.cssText = 'border: 1px blue solid';
// cellPosition.appendChild(twoA);

// let twoA = document.createElement('div');
// twoA.setAttribute('id', 'twoA');
// twoA.setAttribute('class', 'cell'); 
// twoA.style.cssText = 'border: 1px blue solid';
// cellPosition.appendChild(twoA);

// let twoA = document.createElement('div');
// twoA.setAttribute('id', 'twoA');
// twoA.setAttribute('class', 'cell'); 
// twoA.style.cssText = 'border: 1px blue solid';
// cellPosition.appendChild(twoA);

// let twoA = document.createElement('div');
// twoA.setAttribute('id', 'twoA');
// twoA.setAttribute('class', 'cell'); 
// twoA.style.cssText = 'border: 1px blue solid';
// cellPosition.appendChild(twoA);

// let twoA = document.createElement('div');
// twoA.setAttribute('id', 'twoA');
// twoA.setAttribute('class', 'cell'); 
// twoA.style.cssText = 'border: 1px blue solid';
// cellPosition.appendChild(twoA);




