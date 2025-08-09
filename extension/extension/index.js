async function loadDoc() {
    fetch("http://localhost:3000/predict/?query="+window.location.href)
    .then(result => result.json())
    .then(data => {
        if(data.output != 1)
        {
            
            alert("Phishing")
        }
    })
}
loadDoc();