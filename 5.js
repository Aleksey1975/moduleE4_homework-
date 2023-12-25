class ElDevice {
    constructor(name, weight, power) {
            this.name = name,
            this.on = false,
            this.weight = weight,
            this.power = power,
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

const tv = new ElDevice("sony", 20, 5)
tv.channels = [1, 1, 2, 3, 4]
tv.showChannel = function (channel){
    if(this.on && channel in this.channels) {
        console.log(`Show channel ${this.channels[channel]}`)
    }
}

tv.turnOn()
tv.getStatus()
tv.showChannel(1)
tv.turnOff()
tv.getStatus()


const microwave = new ElDevice("lg", 10, 30)
microwave.color = 'white'
microwave.food = false
microwave.cook = function (){
    if(this.on && this.food){
        console.log('Cook a meal')
    }
}


console.log(microwave.color)
microwave.turnOn()
microwave.food = true
microwave.cook()


