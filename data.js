

const Rollerskates = [
    ['Moxie', 
        ['Beach Bunnies',['Size 8',60],['Size 7', 80],['Size 6', 116],],
        ['Lolly',['Size 4',55],['Size 5', 59],['Size 6', 68],['Size 7',78],['Size 8', 86],['Size 9', 95],['Size 10',100],['Size 11', 105],['Size 12', 128],],
    ],
    ['Impalas',
        ['Standard',['Size 2',35],['Size 3', 70],['Size 5', 140],]
    ],
    ['Moonlight',
        ['Standard',['Size 1',40],['Size 2', 64],['Size 3', 80],]
    ],
    ]


const SlideBlocks = [
    ['CIB',
        ['Small', 60],
        ['Medium',75],
        ['Large',90],
        ['X-Large',110],
    ],
    ['Wildbone Slider',//this is the hanger size only they will need to determine the bone slider size themselves dependnig on the wheel base
        ['2',54],
        ['3',66.68],
        ['4',79.36],
        ['5',92.08],
        ['6',111.126],
        ['7',117.48],
    ],
    ['Bone Plate',
        ['Small',79.375],
        ['Medium',98.425],
        ['Large',111,125],
    ],
    ['Disco Blox',
        ['0',55],
        ['1',65],
        ['2',75],
        ['3',85],
        ['4',95],
        ['5',105],
        ['6',115],
        ['7',125],
    ],
    ['Roller Wave Block',
        ['Small',60],
        ['Medium',73],
    ],
    ['Brunny Block',
        ['Small',60],
        ['Medium',80],
        ['Large',95],
        ['x-Large',110],
    ],
]
 
//I need to make four functions here
 
// first function, it needs to make a dynamic dropdown takes the first items in the idex to make the items in the dropdown
//and then sets a varible to the idex of the one selected

let firstDropdown = "<option disabled hidden selected>Brand of Skate</option>";
for (let i = 0; i < Rollerskates.length; i++) {
    let indexValue1 = i;
    firstDropdown += "<option value=\"" + indexValue1 + "\">" + Rollerskates[i][0] + "</option>";
} 
document.getElementById("populateFirstDropdown").innerHTML = firstDropdown;


//second one displays the next set of items within the one that was choosen and does the same thing to the next item

//gets the value from the drop down from the first select, you update the inner html within so that it doesn't just do it once
//now it needs to populate the second drow down menu using the value we just got


let selectedBrand = document.querySelector("#populateFirstDropdown");
let firstIndex;

selectedBrand.addEventListener("change", () =>{
    firstIndex = selectedBrand.options[selectedBrand.selectedIndex].value;
    let secondDropdown = "<option disabled hidden selected>Type of Skate</option>";
    for (let i = 1; i < Rollerskates[firstIndex].length;i++){ //i is set to 1 so that it skips the first iteam in the list
        let indexValue2 = i;
        secondDropdown += "<option value=\"" + indexValue2 + "\">" + Rollerskates[firstIndex][i][0] + "</option>";
    }
    document.getElementById("populateSecondDropdown").innerHTML = secondDropdown;
   
});

//third one displays teh size options depending on the previous one and then save that value instead of the idex
let selectedSize = document.querySelector("#populateSecondDropdown");
let secondIndex;
selectedSize.addEventListener("change",()=>{
    secondIndex = selectedSize.options[selectedSize.selectedIndex].value;
    let thirdDropdown = "<option disabled hidden selected>Select Size</option>";
    for(let i = 1;i < Rollerskates[firstIndex][secondIndex].length;i++){
        let indexValue3 = Rollerskates[firstIndex][secondIndex][i][1];
        thirdDropdown += "<option value=\"" + indexValue3 + "\">" + Rollerskates[firstIndex][secondIndex][i][0] + "</option>";
    }
    document.getElementById("populateThirdDropdown").innerHTML = thirdDropdown;
});
    
//4th one is a drop down where you choose which grind block you want
let slideBlockDropdown = "<option disabled hidden selected>Slideblock Type</option>";
for(i = 0; i < SlideBlocks.length;i++){
    let indexValue4 = i;
    slideBlockDropdown += "<option value = \"" + indexValue4 + "\">" + SlideBlocks[i][0] + "</option>"
}

document.getElementById("slideBlocksDropdown").innerHTML = slideBlockDropdown;

//5th function when a button is clicked if not everything is selected correctly then it tells then to select those, then takes
//vaule from the size that they chose and compares it to each of the sizes of the grindblock and determines which one fits the best 
// and saves the name o that size as a variable and displays that at the end
let selectedSkateSize = document.querySelector("#populateThirdDropdown");
let thirdIndex;
selectedSkateSize.addEventListener("change",()=>{
    thirdIndex = selectedSkateSize.options[selectedSkateSize.selectedIndex].value; 
});

let selectedBlockType = document.querySelector("#slideBlocksDropdown");
let blockType;
selectedBlockType.addEventListener("change",()=>{
    blockType = selectedBlockType.options[selectedBlockType.selectedIndex].value; 
});

function findSize(){
    let rightFit;
    //I need it to take the third index and compare it with all the sizes inside the block type, starting from the top down,
    //i'll compare the top one and determine if it's small than the size, if yes, it will move on to the next one
    //if it's smaller than the smallest one i need it to say that all the blocks are too big for your skate, try a different block
    //i also want it to give a disclamer if it selects the one that is the hanger size only
    let blockSize = "";
    //blockSize += "Size of skate is " + thirdIndex +  " Index of choosen block type is " +blockType ;
    blockSize += "The size of " + SlideBlocks[blockType][0]; + "that fits your skate is " + rightFit;

    document.getElementById("sizeOfBlock").innerHTML = blockSize;
}





