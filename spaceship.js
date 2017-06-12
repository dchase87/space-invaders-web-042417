class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.crew = crew
    crew.length === 0 ? this.docked = true : this.docked = false
    for (let i = 0; i < crew.length; i++) {
      crew[i].currentShip = this
    }
    this.phasers = phasers
    this.shields = shields
    this.warpDrive = 'disengaged'
    this.cloaked = false
    this.phasersCharge = 'uncharged'
  }


}
