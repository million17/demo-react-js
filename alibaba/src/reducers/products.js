var initState = [
    {
        id : 1,
        name : "IP 11",
        price : 700,
        status : true
    },
    {
        id : 2,
        name : "SamSung 11",
        price : 100,
        status : true
    },
    {
        id : 3,
        name : "NOKIA 11",
        price : 200,
        status : false
    },
];

const products = (state = initState, action) => {
    switch(action.type) {
        default : return [...state];
    }
}

export default products;