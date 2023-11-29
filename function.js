const avgP = document.querySelector(".avg")
const ulName = document.querySelector(".nameList")
const ulOccup = document.querySelector(".occupList")
const ulPrice = document.querySelector(".priceList")

const names = ["Teemo", "Heimer", "Poppy", "Trist", "Gnar", "Veigar"]
const occupations = ["Top", "Mid", "Bottom", "Support", "Jungle"]

function newLancer() {
    const nameNum = Math.floor(Math.random() * names.length)
    const occupationNum = Math.floor(Math.random() * occupations.length)
    const priceNum = Math.floor(Math.random() * 100)

    const lancer = {
        name: names[nameNum],
        occupation: occupations[occupationNum],
        stPrice: priceNum
    }
    return lancer
}

const lancerOne = newLancer()
const lancerTwo = newLancer()
const lancerArr = [lancerOne, lancerTwo]

function renderName() {
    const html = lancerArr.map((lancer) => {
        return `<li>${lancer.name}</li>`
    })
    ulName.innerHTML = html.join("")
}

function renderOccup() {
    const html = lancerArr.map((lancer) => {
        return `<li>${lancer.occupation}</li>`
    })
    ulOccup.innerHTML = html.join("")
}

function renderPrice() {
    const html = lancerArr.map((lancer) => {
        return `<li>$${lancer.stPrice}</li>`
    })
    ulPrice.innerHTML = html.join("")
}

function render() {
    renderName()
    renderOccup()
    renderPrice()
}

const interval = setInterval(() => {
    const obj = newLancer()
    lancerArr.push(obj)
    render()
    average()
    if(lancerArr.length === 10) {
        clearInterval(interval)
    }
}, 2000)

function average() {
    let sum = 0
    lancerArr.forEach((lancer) => {
        sum += lancer.stPrice
    })
    const avgPrice = document.querySelector(".avgPrice")
    let avgPriceNum = sum/lancerArr.length
    const round = avgPriceNum.toFixed(2)
    avgPrice.innerHTML = (`The average price for a freelancer right now is $${round}`)
    console.log(sum)
    console.log(round)
}


render()