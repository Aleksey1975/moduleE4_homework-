

const leDevice = {
    on:false,
    turnOn: function (){
        this.on = true
    },
    turnOff: function () {
        this.on = false
    },
    getStatus: function (on) {
        if (this.on) {
            console.log(`This ${this.name} is turned on`)
        } else {
            console.log(`This ${this.name} is turned off`)
        }
    }
}

const tv = Object.create(leDevice)
tv.name = 'sony'
tv.wight = 20
tv.power = 5
tv.channels = [1, 1, 2, 3, 4]
tv.showChannel = function (channel){
    if(this.on && channel in this.channels) {
        console.log(`Show channel ${this.channels[channel]}`)
    }
}


tv.turnOn()
tv.getStatus()
tv.turnOff()
tv.getStatus()
tv.turnOn()
tv.showChannel(1)
tv.turnOff()
tv.getStatus()




const microwave = Object.create(leDevice)
microwave.name = 'lg'
microwave.wight = 10
microwave.power = 30
microwave.food = false
microwave.cook = function (){
    if(this.on && this.food){
        console.log('Cook a meal')
    }
}


microwave.turnOn()
microwave.getStatus()
microwave.food = true
microwave.cook()
microwave.getStatus()
microwave.turnOff()
microwave.getStatus()