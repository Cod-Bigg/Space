const planetOverview = document.querySelector("#planet-overview-text");
const overviewBtn = document.querySelector("#overview");
const structureBtn = document.querySelector("#internal-structure");
const geologyBtn = document.querySelector("#surface-geology");
const planetImg = document.querySelector("img");


const mercuryOverview = () => {
    overviewBtn.addEventListener("click", () => {
        planetOverview.innerHTML = "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.";
        planetImg.src = "https://i.ibb.co/6JfYs86/planet-mercury.png";
    })
}
mercuryOverview();

const mercuryStructure = () => {
    structureBtn.addEventListener("click", () => {
        planetOverview.innerHTML = "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.";
        planetImg.src = "https://i.ibb.co/ZmqTLQh/planet-mercury-internal-1.png";
        console.log("heelo");
    })
}
mercuryStructure();

const mercuryGeology = () => {
    geologyBtn.addEventListener("click", () => {
        planetOverview.innerHTML = "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.";
        planetImg.src ="https://i.ibb.co/W62TZhD/geology-mercury.png";
    })
}
mercuryGeology();

