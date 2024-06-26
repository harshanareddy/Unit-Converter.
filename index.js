const inptEl = document.getElementById("inpt-el")
const inptBtn = document.getElementById("inpt-btn")
const refreshBtn = document.getElementById("refresh-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

inptBtn.addEventListener("click", function(){
    const metric = inptEl.value

    if(Number(metric)){
        lengthConverter(metric)
        volumeConverter(metric)
        massConverter(metric)
    }else{
        alert("enter a number")
    }
   

})

refreshBtn.addEventListener("click", function(){
    inptEl.value = ""
    lengthConverter()
    volumeConverter()
    massConverter()

})

function lengthConverter(metric){ 
    if(metric){
        const toFeet  = (metric * 3.281).toFixed(3)
        const toMeter = (metric / 3.281).toFixed(3)
    
        const lengthStr = `${metric} meters = ${toFeet} feet | ${metric} feet = ${toMeter} meters`
        lengthEl.textContent = lengthStr
    }
    else{
        lengthEl.textContent = "0 meters = 0.000 feet | 0 feet = 0.000 meters"
    }
}

function volumeConverter(metric){
    if(metric){
        const toGallons = (metric * 0.264).toFixed(3)
        const toLitres  = (metric / 0.264).toFixed(3)
    
        const volumeStr = `${metric} litres = ${toGallons} gallons | ${metric} gallons = ${toLitres} litres`
        volumeEl.textContent = volumeStr
    }
    else{
        volumeEl.textContent = "0 litres = 0.000 gallons | 0 gallons = 0.000 litres"
    }
}

function massConverter(metric){
    if(metric){
        const toPounds = (metric * 2.204).toFixed(3)
        const toKilo   = (metric / 2.204).toFixed(3)
    
        const massStr = `${metric} kilos = ${toPounds} pounds | ${metric} pounds = ${toKilo} kilos`
        massEl.textContent = massStr
    }
    else{
        massEl.textContent = "0 kilos = 0.000 pounds | 0 pounds = 0.000 kilos"
    }

}