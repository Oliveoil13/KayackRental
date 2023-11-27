

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
];


const SlideBlocks = [
    ['CIB',
        [
            ['X-Large', 110],
            ['Medium', 75],
            ['Large', 90],
            ['Small', 60],
        ]
    ],
    ['Wildbone Slider',
        [
            ['7',117.48],
            ['6',111.126],
            ['5',92.08],
            ['4',79.36],
            ['3',66.68],
            ['2',54],
        ]
    ],
    ['Bone Plate',
        [
            ['Large', 111, 125],
            ['Medium', 98.425],
            ['Small', 79.375],
        ]
    ],
    ['Disco Blox',
        [
            ['7', 125],
            ['6', 115],
            ['5', 105],
            ['4', 95],
            ['3', 85],
            ['2', 75],
            ['1', 65],
            ['0', 55],
        ]
    ],
    ['Roller Wave Block',
        [
            ['Medium', 73],
            ['Small', 60],
        ]
    ],
    ['Brunny Block',
        [
            ['X-Large', 110],
            ['Large', 95],
            ['Medium', 80],
            ['Small', 60],
        ]
    ],
    ['BackSide Block',
        [   
            ['Large',78],
            ['Medium',60],
            ['Small',50],
        ]
    ],
];
 
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
let blockSize;
function findSize(){
    if(blockType && thirdIndex != null){
        let bool = false;
        for (const item of SlideBlocks[blockType][1]) {
            const size = item[0];
            const val = item[1];
            bool = parseInt(thirdIndex) >= val;

            if (bool) {
                blockSize = size + " is the right size";
                document.getElementById("sizeOfBlock").innerHTML = blockSize;
                
                return;
            }
        }
        if(!bool){
            blockSize = "Your skate is too small for this block type";
            document.getElementById("sizeOfBlock").innerHTML = blockSize;
        }
        

    }else{
        blockSize = "Please select required dropdowns ";
        document.getElementById("sizeOfBlock").innerText = blockSize;

    }
}





