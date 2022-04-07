const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const dragonDamage = () => Math.floor(Math.random() * dragon.strength + 1);
const warriorDamage = () => Math.floor(Math.random() * (warrior.weaponDmg + 1) + warrior.strength);
const mageDamage = () => {
    if(mage.mana >= 15) {
        return {damage: Math.floor(Math.random() * (mage.intelligence + 1) + mage.intelligence), gastoMana: 15}
    }
    return {damage: "Não possui mana suficiente", gastoMana: 0}
}
const battleMembers = { mage, warrior, dragon };

const gameActions = {
    warriorRound: (warriorDamage) => {
        warrior.damage = warriorDamage();
        dragon.healthPoints -= warrior.damage;
    },
    mageRound: (mageDamage) => {
        const stats = mageDamage()
        if(typeof stats.damage === 'number') {
            mage.damage = stats.damage;
            mage.mana -= stats.gastoMana;
            dragon.healthPoints -= warrior.damage;
        }
    },
    dragonRound: (dragonDamage) => {
        dragon.damage = dragonDamage();
        mage.healthPoints -= dragon.damage;
        warrior.healthPoints -= dragon.damage;
    },
    battleMembers: () => battleMembers,
  };

  gameActions.warriorRound(warriorDamage);
  gameActions.mageRound(mageDamage);
  gameActions.dragonRound(dragonDamage);
  console.log(gameActions.battleMembers());