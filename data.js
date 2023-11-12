

const Rollerskates = [
    ['Moxie', 
        ['Beach Bunnies',['Size 8',30],['Size 7', 32],['Size 6', 35],],
        ['Lollys',['Size 4',30],['Size 5', 32],['Size 6', 35],],
    ],
    ['Impalas',
        ['Standard',['Size 2',30],['Size 3', 32],['Size 5', 35],]
    ],
    ['Moonlight',
        ['Standard',['Size 1',30],['Size 2', 32],['Size 3', 35],]
    ],
    ]


const SlideBlocks = [
    ['CIB',
        ['Small', 40],
        ['Medium',50],
        ['Large',60],
    ],
    ['Wild Bone',
        ['Small', 40],
        ['Medium',50],
        ['Large',60],
    ],
]
 
//I need to make four functions here
 
// first function, it needs to make a dynamic dropdown takes the first items in the idex to make the items in the dropdown
//and then sets a varible to the idex of the one selected

let firstDropdown = "<option disabled hidden selected>Select Brand of Skate</option>";
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
let slideBlockDropdown = "<option disabled hidden selected>Slideblock type</option>";
for(i = 0; i < SlideBlocks.length;i++){
    let indexValue4 = i;
    slideBlockDropdown += "<option value = \"" + indexValue4 + "\">" + SlideBlocks[i][0] + "</option>"
}

document.getElementById("slideBlocksDropdown").innerHTML = slideBlockDropdown;

//5th function when a button is clicked if not everything is selected correctly then it tells then to select those, then takes
//vaule from the size that they chose and compares it to each of the sizes of the grindblock and determines which one fits the best 
// and saves the name o that size as a variable and displays that at the end

