

function getData() {
    
    return new Promise((resolve, reject) => {

        fetch('https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72')
        .then(data => data.json()
        .then(data => {
            const quartos = data;
            resolve(quartos)
        })

        
    })

    
}

async function renderData() {

    const item = document.getElementById('1')
    const items = getData()

    console.log(items)

    items.map(i => {
        return item.innerHTML = 'texto'
    })
    

}

renderData()