class Cow extends Animal {

  constructor(field, x, y, health = 10, lifespan = 350) {
    super(field, x, y, health, lifespan)
    console.log('creating new cow')
    this.image = loadImage('./images/cow.png') 

    setInterval(() => {
      this.graze()
    }, 1000)

    setInterval(() => {
      this.hunger++
    }, 5000)
    
  }

  graze() {
    console.log('grazing')
    if (this.hunger > 5) {
      let random = Math.floor(Math.random() * this.field.crops.length) + 0  
      let possibleCrop = this.field.crops[random]
      console.log(possibleCrop)
      if (possibleCrop) {
        this.hunger = 0
        this.field.crops[random] = null
      } else {
        this.hunger++
      }
    }

  }

}