// Code your solution in this file!
function distanceFromHqInBlocks(street){
    if (street >= 42){
        return street - 42;
    } else {
        return 42 - street;
    }
}

function distanceFromHqInFeet(street){
    return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(start, end){
    if (start > end ){
        return (start - end) * 264;
    } else {
        return (end - start) * 264;
    }
}

function calculatesFarePrice(start, end){
    if (distanceTravelledInFeet(start, end) < 400) {
        return 0
    } else if ((distanceTravelledInFeet(start, end)) >= 400 && (distanceTravelledInFeet(start, end)) <= 2000){
        return (distanceTravelledInFeet(start, end) - 400) * .02 
    } else if ((distanceTravelledInFeet(start, end)) > 2000 && (distanceTravelledInFeet(start, end)) <= 2500 ) {
        return 25
    } else if (distanceTravelledInFeet(start, end) > 2500) {
        return 'cannot travel that far'
    }

}