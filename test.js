const inptEl = document.getElementById("inpt-el")
const inptBtn = document.getElementById("inpt-btn")
const refreshBtn = document.getElementById("refresh-btn")
const lengthEl = document.getElementById("length-section")
const volumeEl = document.getElementById("volume-section")
const massEl = document.getElementById("mass-section")
let metric = ""


unitConverter(metric)

inptBtn.addEventListener("click", function(){
    metric = inptEl.value

    if(Number(metric)){
        unitConverter(metric)
    }else{
        alert("enter a number")
    }
   

})

refreshBtn.addEventListener("click", function(){
    inptEl.value = ""
    unitConverter()
})

function unitConverter(metric){
    if(metric){
        const toFeet  = (metric * 3.281).toFixed(3)
        const toMeter = (metric / 3.281).toFixed(3)

        const toGallons = (metric * 0.264).toFixed(3)
        const toLitres  = (metric / 0.264).toFixed(3)

        const toPounds = (metric * 2.204).toFixed(3)
        const toKilo   = (metric / 2.204).toFixed(3)
    
        const lengthStr = `
        <p> 
            ${metric} meters = ${toFeet} feet | ${metric} feet = ${toMeter} meters 
        </p>`
        lengthEl.innerHTML += lengthStr
    
        const volumeStr = `
        <p> 
            ${metric} litres = ${toGallons} gallons | ${metric} gallons = ${toLitres} litres 
        </p>`
        volumeEl.innerHTML += volumeStr
    
        const massStr = `
        <p> 
            ${metric} kilos = ${toPounds} pounds | ${metric} pounds = ${toKilo} kilos 
        </p>`
        massEl.innerHTML += massStr
    }
    else{
        lengthEl.innerHTML += `
        <p> 
            0 meters = 0.000 feet | 0 feet = 0.000 meters
        </p>`
        volumeEl.innerHTML += `
        <p>
            0 litres = 0.000 gallons | 0 gallons = 0.000 litres
        </p>`
        massEl.innerHTML += `
        <p>
            0 kilos = 0.000 pounds | 0 pounds = 0.000 kilos
        </p>`
    }
}



