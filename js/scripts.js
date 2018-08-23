// alert('YOLO BINCHES! its SKETCH - A - BETCH');
// rgb(0, 0, 0) = black
// rgb(255, 255, 255) = white 

function draw(cell) {
 	if(cell.style.background = `rgb(255, 255, 255)`) {
 		 cell.style.background = `rgb(0, 0, 0)`;
 	}    
};



// function clear() {
// 	.button1:hover {
//     background-color: #4CAF50;
//     color: white;
// }


let wrapperPosition = document.querySelector('body');

//CLEAR BUTTON WRAPPER
let clearButtonWrapper = document.createElement('div');
clearButtonWrapper.setAttribute('class','clearButtonDisplay');
clearButtonWrapper.style.cssText = 'display: grid; grid-template-columns:1fr; width: 170px; height: 50px; border: 1px solid black;'
wrapperPosition.appendChild(clearButtonWrapper);

//CLEAR BUTTON 
let clearButton = document.createElement('button');
clearButton.setAttribute('id','clearButton');
clearButton.style.cssText = 'background-color: #2df700; border: none; color: white; padding: 16px 32px; text-align: center;text-decoration: none; display: inline-block;font-size: 16px; margin: 4px 2px; -webkit-transition-duration: 0.4s; /* Safari */ transition-duration: 0.4s; cursor: pointer;'
clearButtonWrapper.appendChild(clearButton);
clearButton.textContent = 'Clear the Board';



// GRID WRAPPER

let wrapper = document.createElement('div');
wrapper.setAttribute('id', 'wrapper'); 
wrapper.style.cssText = 'display:grid; grid-template-columns: repeat(16,1fr); grid-template-rows: repeat(16,1fr); height: 500px; width: 500px; margin-left: auto; margin-right: auto; margin-top: 73px;';
wrapperPosition.appendChild(wrapper);
// wrapper.textContent = 'Hello World!' 


//BUILD CELLS
let cellPosition = document.querySelector('#wrapper');
let counter = 0;

     while (counter <256) {
     	 
         let cellName = document.createElement('div');
         cellName.setAttribute('class', 'cell');
         cellName.setAttribute('onmouseover',"draw(this)");
         cellName.style.cssText = 'border: 1px #2df700 solid; background: rgb(255, 255, 255);';
         cellPosition.appendChild(cellName);
         counter++;
         
     };


// CLEAR THE BOARD
	//remove old board first:
     clearButton.addEventListener('click', () => {
     	 let counter = 0;
     	 while (counter < 256) {
     		let cellNode = document.querySelector('.cell')
        	console.log(cellPosition.nodeType);
        	console.log(cellPosition.nodeName);
        	console.log(cellPosition.hasChildNodes());
        	console.log(cellNode);
        	cellPosition.removeChild(cellNode);
        	 counter++;
            }
         
    //build new board:
         let newCounter = 0;
         while (newCounter <256) {
     	 
           let cellName = document.createElement('div');
           cellName.setAttribute('class', 'cell');
           cellName.setAttribute('onmouseover',"draw(this)");
           cellName.style.cssText = 'border: 1px #2df700 solid; background: rgb(255, 255, 255);';
           cellPosition.appendChild(cellName);
           newCounter++;
        
        }; 

     });     


  
//      	let counter = 0;

//      while (counter <256) {
     	 
//          let cellName = document.createElement('div');
//          cellName.setAttribute('class', 'cell');
//          cellName.setAttribute('onmouseover',"draw(this)");
//          cellName.style.cssText = 'border: 1px #2df700 solid; background: rgb(255, 255, 255);';
//          cellPosition.appendChild(cellName);
//          counter++;
//          console.log('test')
//      };
	
// });


