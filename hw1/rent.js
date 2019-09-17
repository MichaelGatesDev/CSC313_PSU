// Create an array that contains three JavaScript objects as specified below:
// Each object represents a vehicle that can be rented, as such it will have the attributes id (will be a simple numerical type), make as a string, model as a string, color as a string, and is_rented as a boolean.  
// The three objects you place in the array with the attributes above can have whatever values you want (ids 1, 2, 3 and make up the other vehicle info)

let vehicles = [
    {
        id: 1,
        make: "Ford",
        model: "Explore",
        color: "White",
        is_rented: false
    },
    {
        id: 2,
        make: "Hyundai",
        model: "Sonata",
        color: "Black",
        is_rented: false
    },
    {
        id: 3,
        make: "Subaru",
        model: "Outback",
        color: "Tan",
        is_rented: false
    },
];


function getVehicleByID(vehicles, id) {
    return vehicles.find((veh) => veh.id === id);
}

function getLargestID(vehicles) {
    let largest = -1;
    for (const vehicle of vehicles) {
        if (vehicle.id > largest) largest = vehicle.id;
    }
    return largest;
}

function getNextID(vehicles) {
    const last = vehicles[vehicles.length - 1];
    if (last === undefined) return 0;
    const plusOne = last.id + 1;
    return getVehicleByID(vehicles, plusOne) === undefined ? plusOne : getLargestID(vehicles) + 1;
}


// Write four functions that take the array of objects as an argument and will modify the array (or return a new one, whatever works for you) as follows:

// rentVehicle(id) - Takes an id of a vehicle as a parameter and will change the "is_rented" boolean in the object to true and console.log out the vehicle's id, make, model, and color that was rented out, if it is already true then console.log that the vehicle is already rented
function rentVehicle(vehicles, id) {
    const vehicle = getVehicleByID(vehicles, id);
    if (vehicle === undefined) {
        console.error(`No such vehicle with id ${id} exists`);
        return;
    }
    if (vehicle.is_rented) {
        console.log("That vehicle is already rented!");
    } else {
        console.log("Renting out vehicle:");
        console.log(`ID: ${id}`);
        console.log(`Make: ${vehicle.make}`);
        console.log(`Model: ${vehicle.model}`);
        console.log(`Color: ${vehicle.color}`);
        vehicle.is_rented = true;
    }
};


// returnVehicle(id) - Takes an id of a vehicle as a parameter and sets the "is_rented" boolean to false and indicates via console.log that the vehicle with make/model/color was returned. If already false, it notes that via console.log that the vehicle was not rented out.
function returnVehicle(vehicles, id) {
    const vehicle = getVehicleByID(vehicles, id);
    if (vehicle === undefined) {
        console.error(`No such vehicle with id ${id} exists`);
        return;
    }
    if (!vehicle.is_rented) {
        console.log("That vehicle is not being rented!");
    } else {
        console.log("Returning rented vehicle:");
        console.log(`ID: ${id}`);
        console.log(`Make: ${vehicle.make}`);
        console.log(`Model: ${vehicle.model}`);
        console.log(`Color: ${vehicle.color}`);
        vehicle.is_rented = false;
    }
};


// addVehicle(make, model, color) - Adds a vehicle with the specified make/model/color to the array. The default boolean value should for "is_rented" should be false. The next id that can be used should be computed. That is, any available unused id is acceptable
function addVehicle(vehicles, make, model, color) {
    vehicles.push({
        id: getNextID(vehicles),
        make: make,
        model: model,
        color: color,
        is_rented: false,
    });
}

// removeVehicle(id) - Removes the vehicle with a given id from the array.
function removeVehicle(vehicles, id) {
    const vehicle = getVehicleByID(vehicles, id);
    if (vehicle === undefined) {
        console.error(`No such vehicle with id ${id} exists`);
        return vehicles;
    }
    return vehicles.filter((veh) => veh.id !== id);
}


console.log("VEHICLES INITIALLY:");
console.log(vehicles);
console.log(" ");


console.log("Try to rent invalid vehicle");
rentVehicle(vehicles, -1);
console.log(" ");

console.log("Try to rent valid vehicle");
rentVehicle(vehicles, 1);
console.log(" ");

console.log("Vehicles now:");
console.log(vehicles);
console.log(" ");

console.log("Try to return invalid vehicle");
returnVehicle(vehicles, -1);
console.log(" ");

console.log("Try to return valid vehicle that is not being rented");
returnVehicle(vehicles, 2);
console.log(" ");

console.log("Try to return valid vehicle");
returnVehicle(vehicles, 1);
console.log(" ");

console.log("Vehicles now:");
console.log(vehicles);
console.log(" ");

console.log("Try to add vehicle");
addVehicle(vehicles, "Hyundai", "Elantra", "Blue");
console.log(" ")

console.log("Vehicles now:");
console.log(vehicles);
console.log(" ");

console.log("Try to remove invalid vehicle");
vehicles = removeVehicle(vehicles, -1);
console.log(" ")
console.log("Try to remove valid vehicle");
vehicles = removeVehicle(vehicles, 4);
console.log(" ")

console.log("Vehicles now:");
console.log(vehicles);
console.log(" ");