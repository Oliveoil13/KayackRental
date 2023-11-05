

const Rollerskates = [
    ['Moxie',
    ['Beach Bunnies',
    ['Size 4',30],
    ['Size 5', 32],
    ['Size 6', 35],
    ],
    ['Lollys',
    ['Size 4',30],
    ['Size 5', 32],
    ['Size 6', 35],
    ],
    ],
    ['Impalas',
    ['Standard',
    ['Size 4',30],
    ['Size 5', 32],
    ['Size 6', 35],
    ]
    ],
    ['Moonlight',
    ['Standard',
    ['Size 4',30],
    ['Size 5', 32],
    ['Size 6', 35],
    ]
    ],
    ]

const GrindBlocks = [
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

let firstDropdown = "";
for (let i = 0; i < Rollerskates[0].length; i++) {
    firstDropdown += "<option value=\"" + "\">" + Rollerskates[i][0] + "</option>";
}

console.log(firstDropdown);
//second one displays the next set of items within the one that was choosen and does the same thing to the next item

//third one displays teh size options depending on the previous one and then save that value instead of the idex

//4th one is a drop down that uses the first order of indexes to display in the drop downs 

//5th function when a button is clicked if not everything is selected correctly then it tells then to select those, then takes
//vaule from the size that they chose and compares it to each of the sizes of the grindblock and determines which one fits the best 
// and saves the name o that size as a variable and displays that at the end

