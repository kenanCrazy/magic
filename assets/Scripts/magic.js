cc.Class({
    extends: cc.Component,

    properties: {
        nodeList: {
            default: [],
            type: [cc.Node]
        },
        tips: {
            default: [],
            type: [cc.Label]
        }
    },

    // use this for initialization
    onLoad: function () {
        this.mana = 0;
        this.tmpMana = 0;
        this.cost = 1;
        var self = this;
        self.freshMana();
        this.inervalId = setInterval(function () {
            if (self.mana < 10){
                self.mana++;
            }
            self.freshMana();
        }, 1000);
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        this.tips.string = "mana : " + this.mana + "/10" + "\n" +
                            "cost : " + this.cost;
    },
    
    freshMana: function() {
        console.log("mana = " + this.mana.toFixed(0) + "cost = " + this.cost.toFixed(0));
        for (var i = 0; i < this.nodeList.length; ++i) {
            if (i < this.mana){
                this.nodeList[i].active = true;
            }else{
                this.nodeList[i].active = false;
            }
        }
    },
    
    incManaCost: function(){
        if (this.cost < 10){
            this.cost++;
        }
    },
    decManaCost: function(){
        if (this.cost > 1){
            this.cost--;
        }
    },
    
    useMagic: function(){
        if (this.mana >= this.cost){
            this.mana -= this.cost;
            this.freshMana();
        }
    }
});
