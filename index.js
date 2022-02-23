// Code your solution in this file!
function distanceFromHqInBlocks(num) {
    let distance;
    42 >= num 
        ? distance = 42 - num
        : distance = num - 42;
    return distance;
}

function distanceFromHqInFeet(num) {
    return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(start, end) {
    let distance;
    start >= end 
        ? distance = start - end
        : distance = end - start;
    return distance * 264;
}

function calculatesFarePrice(start, end) {
    let distance =  distanceTravelledInFeet(start, end);

    if(distance <= 400) {
        return 0;
    }else if(distance < 2000) {
        return 0.02 * (distance - 400);
    }else if(distance < 2500) {
        return 25;
    }else {
        return 'cannot travel that far';
    }
}