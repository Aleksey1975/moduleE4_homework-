class ElDevice2 {
    constructor(name, weight, power) {
        this.name = name
        this.on = false,
            this.weight = weight,
            this.power = power
        this.getStatus = function (on){
            if (this.on) {
                console.log(`This ${name} is turned on`)
            } else {
                console.log(`This ${name} is turned off`)
            }
        }
        this.turnOff = function (){
            this.on = false
        }
        this.turnOn = function (){
            this.on = true
        }
    }
}

const tv2 = new ElDevice2("Sony", 10, 5)
tv2.channels = [1, 1, 2, 3, 4]
tv2.showChannel = function (channel){
    if(this.on && channel in this.channels) {
        console.log(`Show channel ${this.channels[channel]}`)
    }
}

tv2.turnOn()
tv2.getStatus()
tv2.showChannel(1)
tv2.turnOff()
tv2.getStatus()


const microwave2 = new ElDevice2("LG", 11, 50)
microwave2.color = 'white'
microwave2.food = false
microwave2.cook = function (){
    if(this.on && this.food){
        console.log('Cook a meal')
    }
}


console.log(microwave2.color)
microwave2.turnOn()
microwave2.food = true
microwave2.cook()


