let input = document.querySelector('input')
let list = document.querySelector('.list')


async function myFilter() {
    const res = await fetch('https://api.namnapi.se/v2/names.json?limit=100;')
    return res.json()
}

myFilter().then(data => {

    data.names.forEach(elm => {
        list.innerHTML += `<li>${elm.firstname}</li>`
    });
    let allList = document.querySelectorAll('li')
    allList.forEach(elm => {
        input.addEventListener('input', (e) => {
            if (!elm.textContent.toLowerCase().includes(e.target.value)) {
                elm.style.display = 'none'
            } else {
                elm.style.display = 'block'
            }
        })
    })

})