let cookiesPerSec = 0;
let amountCookies = 0

let bought = {
  'cursor': false,
  'grandma': false,
  'farm': false,
  'mine': false,
  'factory': false,
  'bank': false,
  'temple': false,
  'wizard': false,
  'shipment': false,
  'alchemy': false

}

const prices = {
  'cursor': 15,
  'grandma': 100,
  'farm':  1100,
  'mine': 12000,
  'factory': 130000,
  'bank': 1.4 * Math.pow(10, 6), //1.4 million
  'temple': 2 * Math.pow(10, 7), //20 million
  'wizard': 3 * Math.pow(10, 8), //300 million
  'shipment': 5.1 * Math.pow(10,9), //5.1 billion
  'alchemy': 7.5 * Math.pow(10,10) //75 billion

}

const perSec = {
  'cursor': .1,
  'grandma': 1,
  'farm': 8,
  'mine': 47,
  'factory': 260,
  'bank': 1400,
  'temple': 7800,
  'wizard': 44000,
  'shipment': 260000,
  'alchemy': 1.6 * Math.pow(10, 6) //1.6 million


}

function printNum(num) {
  let r = num + ""
  if(num == amountCookies) {
    num = Math.round(num)
    r = num + ""

    if(amountCookies >= Math.pow(10,6)) {
      num = Math.round(num / Math.pow(10,5)) / 10
      r = num + " million"
    }
  
    if(amountCookies >= Math.pow(10,9)) {
      num = num / Math.pow(10,3)
      r = num + " billion"
    }
  
    if(amountCookies >= Math.pow(10,12)) {
      num = num / Math.pow(10,3)
      r = num + " trillion"
    }
  
    if(amountCookies >= Math.pow(10,15)) {
      num = num / Math.pow(10,3)
      r = num + " quadrillion"
    }

  }
  else if(num == cookiesPerSec) {
    num = Math.round(num * 10) / 10
    r = num + ""

    if(cookiesPerSec >= Math.pow(10,6)) {
      num = Math.round(num / Math.pow(10,5)) / 10
      r = num + " million"
    }
  
    if(cookiesPerSec >= Math.pow(10,9)) {
      num = num / Math.pow(10,3)
      r = num + " billion"
    }
  
    if(cookiesPerSec >= Math.pow(10,12)) {
      num = num / Math.pow(10,3)
      r = num + " trillion"
    }
  
    if(cookiesPerSec >= Math.pow(10,15)) {
      num = num / Math.pow(10,3)
      r = num + " quadrillion"
    }

  }

  return r

}



function buyClicker(building) {
  if(amountCookies >= prices[building]) {
    amountCookies -= prices[building]   //buys the clicker
    document.getElementById('numCookies').innerText = printNum(amountCookies) + " cookies"; //updates amountCookies
    cookiesPerSec += perSec[building]
    document.getElementById('cookiesPerSec').innerText = printNum(cookiesPerSec) + " Cookies per second"

    setInterval(function () {
      amountCookies += perSec[building]
      document.getElementById('numCookies').innerText = printNum(amountCookies) + " cookies";

      buildBuilding("cursor")
      buildBuilding("grandma")
      buildBuilding("farm")
      buildBuilding("mine")
      buildBuilding("factory")
      buildBuilding("bank")
      buildBuilding("temple")
      buildBuilding("wizard")
      buildBuilding("shipment")
      buildBuilding("alchemy")

    }, 1000)
  }
  // else {
  //   alert('Not enough Cookies to buy')
  // }
  
  
}

function buildBuilding(building) {
  if(amountCookies >= ( .80 * prices[building]) && !bought[building]) {
    bought[building] = true
    const build = document.createElement("button")
    build.innerText = building.charAt(0).toUpperCase() + building.substring(1, building.length) + " (" + prices[building] + " Cookies)";
    build.id = building
    build.className = "building"
    document.getElementById('buildings').appendChild(build);

    document.getElementById(building).addEventListener("click", function() {
      buyClicker(building)
    })
    
  }

}

function cookieClicked() {
  amountCookies++

  buildBuilding("cursor")
  buildBuilding("grandma")
  buildBuilding("farm")
  buildBuilding("mine")
  buildBuilding("factory")
  buildBuilding("bank")
  buildBuilding("temple")
  buildBuilding("wizard")
  buildBuilding("shipment")
  buildBuilding("alchemy")

  
  document.getElementById('numCookies').innerText = printNum(amountCookies) + " cookies";

}

document.getElementById('cookie').addEventListener("click", cookieClicked)



