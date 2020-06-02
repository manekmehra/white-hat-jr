var snake
var bug


function setup() {
createCanvas(800,400)
background("green")
this.snake = Bodies.Rectangle(200,200,width,height)
this.bug = Bodies.Rectangle(snake.x+10,snake.y+10,width,height)
}

function draw() {
if (keydown("UP_ARROW"))[
    snake.y=snake.y-5
    ]
    if (keydown("RIGHT_ARROW"))[
        snake.x=snake.x+5
        ]
        if (keydown("DOWN_ARROW"))[
            snake.y=snake.y+5
            ]
            if (keydown("LEFT_ARROW"))[
                snake.x=snake.x-5
                ]
                if (snake.x = bug.x){
                    snake.height+1
                    snake.width+1
                }
                if (snake.y = bug.y){
                    snake.height+1
                    snake.width+1
                }
                if (snake.x = 800){
                    String("game over",200,200)
                }
                if (snake.x = 0){
                    String("game over",200,200)
                }
                if (snake.y = 400){
                    String("game over",200,200)
                }
                if (snake.y =0){
                    String("game over",200,200)
                }
                World.add(world,this.snake)
                World.add(world,this.bug)
}


