new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function() {
            this.turns = [];
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {
            if(this.playerAttacks(false))
                return;

            this.monsterAttacks();
        },
        specialAttack: function() {
            if(this.playerAttacks(true))
                return;

            this.monsterAttacks();
        },
        heal: function() {
            if(this.playerHealth <= 90)
                this.playerHealth += 10;
            else
                this.playerHealth = 100;

            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals Player for 10'
            });

            this.monsterAttacks();
        },
        giveUp: function() {
            this.gameIsRunning = false;            
        },
        monsterAttacks: function() {
            var damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;

            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage
            });

            this.checkWin();
        },
        playerAttacks: function(isSpecialAttack) {
            var damage = 0;
            var hitsHard = "";
            if(isSpecialAttack) {
                damage = this.calculateDamage(10, 20);
                hitsHard = " hard";
                this.monsterHealth -= damage;
            }
            else {
                damage = this.calculateDamage(3, 10);
                this.monsterHealth -= damage;
            }

            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster' + hitsHard + ' for ' + damage
            });

            return this.checkWin();
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function() {
            if(this.monsterHealth <= 0) {
                if(confirm('You won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if(this.playerHealth <= 0) {
                if(confirm('You lost! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
});