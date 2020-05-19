var character1 = {
        currentHeart : 3,
        nextHeart : 4,
        number: 1,
        plus(){
            document.getElementById(this.number + "heart" + this.nextHeart).style.display = "block";
            this.nextHeart ++;
            this.currentHeart = this.nextHeart - 1;
            console.log(this.nextHeart, this.currentHeart);
        },
        minus(){
            document.getElementById(this.number + "heart" + this.currentHeart).style.display = "none";
            this.nextHeart --;
            this.currentHeart = this.nextHeart - 1;
            console.log(this.nextHeart, this.currentHeart);
        },
    };
var character2 = {
        currentHeart : 3,
        nextHeart : 4,
        number: 2,
        plus(){
            document.getElementById(this.number + "heart" + this.nextHeart).style.display = "block";
            this.nextHeart ++;
            this.currentHeart = this.nextHeart - 1;
            console.log(this.nextHeart, this.currentHeart);
        },
        minus(){
            document.getElementById(this.number + "heart" + this.currentHeart).style.display = "none";
            this.nextHeart --;
            this.currentHeart = this.nextHeart - 1;
            console.log(this.nextHeart, this.currentHeart);
        },
    };
var character3 = {
        currentHeart : 3,
        nextHeart : 4,
        number: 3,
        plus(){
            document.getElementById(this.number + "heart" + this.nextHeart).style.display = "block";
            this.nextHeart ++;
            this.currentHeart = this.nextHeart - 1;
            console.log(this.nextHeart, this.currentHeart);
        },
        minus(){
            document.getElementById(this.number + "heart" + this.currentHeart).style.display = "none";
            this.nextHeart --;
            this.currentHeart = this.nextHeart - 1;
            console.log(this.nextHeart, this.currentHeart);
        },
    };

var character4 = {
        currentHeart : 3,
        nextHeart : 4,
        number: 4,
        plus(){
            document.getElementById(this.number + "heart" + this.nextHeart).style.display = "block";
            this.nextHeart ++;
            this.currentHeart = this.nextHeart - 1;
            console.log(this.nextHeart, this.currentHeart);
        },
        minus(){
            document.getElementById(this.number + "heart" + this.currentHeart).style.display = "none";
            this.nextHeart --;
            this.currentHeart = this.nextHeart - 1;
            console.log(this.nextHeart, this.currentHeart);
        },
    };

var character5 = {
        currentHeart : 3,
        nextHeart : 4,
        number: 5,
        plus(){
            document.getElementById(this.number + "heart" + this.nextHeart).style.display = "block";
            this.nextHeart ++;
            this.currentHeart = this.nextHeart - 1;
            console.log(this.nextHeart, this.currentHeart);
        },
        minus(){
            document.getElementById(this.number + "heart" + this.currentHeart).style.display = "none";
            this.nextHeart --;
            this.currentHeart = this.nextHeart - 1;
            console.log(this.nextHeart, this.currentHeart);
        },
    };

var character6 = {
        currentHeart : 3,
        nextHeart : 4,
        number: 6,
        plus(){
            document.getElementById(this.number + "heart" + this.nextHeart).style.display = "block";
            this.nextHeart ++;
            this.currentHeart = this.nextHeart - 1;
            console.log(this.nextHeart, this.currentHeart);
        },
        minus(){
            document.getElementById(this.number + "heart" + this.currentHeart).style.display = "none";
            this.nextHeart --;
            this.currentHeart = this.nextHeart - 1;
            console.log(this.nextHeart, this.currentHeart);
        },
    };

var character7 = {
        currentHeart : 3,
        nextHeart : 4,
        number: 7,
        plus(){
            document.getElementById(this.number + "heart" + this.nextHeart).style.display = "block";
            this.nextHeart ++;
            this.currentHeart = this.nextHeart - 1;
            console.log(this.nextHeart, this.currentHeart);
        },
        minus(){
            document.getElementById(this.number + "heart" + this.currentHeart).style.display = "none";
            this.nextHeart --;
            this.currentHeart = this.nextHeart - 1;
            console.log(this.nextHeart, this.currentHeart);
        },
    };

var character8 = {
        currentHeart : 3,
        nextHeart : 4,
        number: 8,
        plus(){
            document.getElementById(this.number + "heart" + this.nextHeart).style.display = "block";
            this.nextHeart ++;
            this.currentHeart = this.nextHeart - 1;
            console.log(this.nextHeart, this.currentHeart);
        },
        minus(){
            document.getElementById(this.number + "heart" + this.currentHeart).style.display = "none";
            this.nextHeart --;
            this.currentHeart = this.nextHeart - 1;
            console.log(this.nextHeart, this.currentHeart);
        },
    };


var initHearts = function(){
    for (i=1;i<9;i++){
        var hnum = 1;
        for(a=0;a<3;a++){
            document.getElementById(i + "heart" + hnum).style.display = "block";
            document.getElementById(i + "heart" + hnum).style.float = "left";
            console.log(i + "heart" + hnum);
            hnum++;
        };
        for(a=3; a<5;a++){
            document.getElementById(i + "heart" + hnum).style.display = "none";
            document.getElementById(i + "heart" + hnum).style.float = "left";
            console.log(i + "heart" + hnum);
            hnum++;
        };
    }
}

/*  document.getElementById("plus3").addEventListener("click", () =>{
    character3.plus();
});

document.getElementById("minus3").addEventListener("click", () =>{
    character3.minus();
}); */

initHearts();



