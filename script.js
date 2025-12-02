document.getElementById("todayDate").value= new Date().toISOString().split("T")
[0]
function calculateAge(){
    let todayDate= new Date(document.getElementById("todayDate").value)
    let birthDate= new Date(document.getElementById("birthDate").value)

    if(!birthDate || birthDate > todayDate){
        document.getElementById("result").innerText="Invalid Date of Birth!"
        return
    } 
    
    let years= todayDate.getFullYear() - birthDate.getFullYear()
    let months=todayDate.getMonth() - birthDate.getMonth()
    let days=todayDate.getDate() - birthDate.getDate()

    if(days<0){
        months--
        days+= new Date(todayDate.getFullYear(),todayDate.getMonth(),0).
        getDate()
    }

    if(months<0){
        years--
        months += 12
    }
    document.getElementById("result").innerHTML="Year: "+years+" ,Month: "+months+" ,Days: "+days;
    
}