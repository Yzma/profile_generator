const readline = require('node:readline')


const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

rl.question(`What's your name?`, (name) => {

  rl.question(`What's an activity you like doing?`, (activity) => {

    rl.question(`What do you listen to while doing that?`, (listen) => {

      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)`, (mealTime) => {
        
        rl.question(`What's your favourite thing to eat for that meal?`, (meal) => {
          
          rl.question(`Which sport is your absolute favourite?`, (sport) => {
            
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (superpower) => {
              
              console.log(`Name: ${name}`)
              console.log(`Favourite Activity: ${activity}`)
              console.log(`Favourite Music: ${listen}`)
              console.log(`Favourite Meal Time: ${mealTime}`)
              console.log(`Favourite Meal: ${meal}`)
              console.log(`Favourite Sport: ${sport}`)
              console.log(`Superpower: ${superpower}`)
              rl.close()
            })
          })
        })
      })
    })
  })
})

