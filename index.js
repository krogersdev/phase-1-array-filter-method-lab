function findMatching(arr, driver) {
    return arr.filter(el => el.toLowerCase().indexOf(driver.toLowerCase()) !== -1)
}    

function fuzzyMatch(arr, driver) {
    return arr.filter(el => el.toLowerCase().indexOf(driver.toLowerCase()) === 0)
}

function matchName (arr, driver) {
    let result = arr.filter(el => el.name === driver)
    
    if(result) {
        return result;
    }
   
}