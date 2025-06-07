import { defineStore } from 'pinia'
import solarSystemData from '@/data/solarSystemData'

export const useSolarSystemStore = defineStore('solarSystemStore', () => {
    function getPlanets() {
        return solarSystemData.planets
    }

    function getPlanet(planetName) {
        return getPlanets().find(planet => planet.name === planetName)
    }

    function getSatellite(planetName, satelliteName) {
        let planet = getPlanet(planetName);
        return planet.satellites.find(sat => sat.name === satelliteName)
    }
   

    return {
        getPlanets,
        getPlanet,
        getSatellite
    }  
})