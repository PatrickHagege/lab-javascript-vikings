// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength
  }
}
Soldier.prototype.attack = function () {
  return this.strength;
}

Soldier.prototype.receiveDamage = function (damage) {
  this.health = this.health - damage;
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    return (this.health > 0) ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage;
    return (this.health > 0) ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  ////////////////////////////////////////////////////////////////////////

  attack(attackingArmy, defendingArmy) {
    this.attackingArmy = attackingArmy;//this.vikingArmy or this.saxonArmy
    this.defendingArmy = defendingArmy;//this.vikingArmy or this.saxonArmy

    let attackerTos = Math.floor(Math.random() * this.vikingArmy.length);
    let defenderTos = Math.floor(Math.random() * this.vikingArmy.length);
    let attacker = this.attackingArmy[attackerTos];
    let defender = this.defendingArmy[defenderTos];
    let stricken = defender.receiveDamage(attacker.strength);
    if (stricken.health <= 0) this.defendingArmy.splice(defenderTos, 1); // WHY ?
    return strickenSaxon;
  }

  ////////////////////////////////////////////////////////////////////////

  vikingAttack() {
    let vikTos = Math.floor(Math.random() * this.vikingArmy.length);
    let vikingAttacker = this.vikingArmy[vikTos];
    let saxTos = Math.floor(Math.random() * this.saxonArmy.length);
    let saxonVictim = this.saxonArmy[saxTos];
    //why not re assign the result of saxonVictim.receiveDamage to saxonVictim ?
    let strickenSaxon = saxonVictim.receiveDamage(vikingAttacker.strength);
    if (strickenSaxon.health <= 0) this.saxonArmy.splice(saxTos, 1); // WHY ?
    return strickenSaxon;
  }

  saxonAttack() {
    let saxTos = Math.floor(Math.random() * this.saxonArmy.length);
    let saxonAttacker = this.saxonArmy[saxTos];
    let vikTos = Math.floor(Math.random() * this.vikingArmy.length);
    let vikVictim = this.vikingArmy[vikTos];
    //why not re assign the result of saxonVictim.receiveDamage to saxonVictim ?
    let strickenViking = vikVictim.receiveDamage(saxonAttacker.strength);
    if (strickenViking.health <= 0) this.vikingArmy.splice(vikTos, 1);
    return strickenViking;
  }

  showStatus() {
    if(this.saxonArmy.length < 1) return "Vikings have won the war of the century!";
    if(this.vikingArmy.length <1) return "Saxons have fought for their lives and survived another day...";
    if(this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }

}
baba = new War;
console.log(baba.showStatus());

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
