let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let letters_arr = letters.split('');
let words = ['computer', 'table', 'earpods', 'pencil', 'glass', 'button', 'paper', 'letter'];
let word_arr = words[Math.floor(Math.random() * 10)].toUpperCase().split('');
display_letters();
display_word();
let letter_buttons = document.querySelectorAll(".letter_button");
let word_buttons = document.querySelectorAll(".word_button");
let founded = [];
let checked = [];

letter_buttons.forEach(v=>{
    v.addEventListener('click', function(){
        if(!checked.includes(this.innerText)){
            this.setAttribute('disabled', true);
            if(word_arr.includes(this.innerText)){
                let indices = get_indices(word_arr, this.innerText);
                indices.forEach(v=>{
                    word_buttons[v].innerText=this.innerText;
                    founded.push(this.innerText);
                })
            }else{
                checked.push(this.innerText);
            }
        }
        end_game();
    })
})

function display_letters(){
    let buttons='';
    letters_arr.forEach(v=>{
        buttons+=`<button class='btn btn-primary my-2 mx-2 letter_button'>${v.toUpperCase()}</button>`;
    });
    document.querySelector("#letters").innerHTML=buttons;
}

function display_word(){
    let word = '';
    word_arr.forEach(v=>{
        word+=`<button class="btn btn-secondary border shadow px-3 word_button">_</button>`;
    });
    document.querySelector("#word").innerHTML=word;
}

function get_indices(arr, v){
    let indices = [];
    arr.forEach((val, index)=>{
        if (val === v) {
            indices.push(index);
        }
    });
    return indices;
}

function end_game(){
    if(founded.length == word_arr.length){
        $("#staticBackdrop").modal("show");
        $(".modal-body").text("You Won");
    }else if(checked.length == 7){
        $("#staticBackdrop").modal("show");
        $(".modal-body").text("You Lost");
    }
}

$('#staticBackdrop').on('hidden.bs.modal', function () {
    location.reload();
})

let sketch = function(p) {
    p.setup = function(){
        p.createCanvas(250, 250);
    }
    
    p.draw = function(){
        if(checked.length>0){
            p.strokeWeight(4);
            p.clear();    
            p.noFill();
            p.beginShape();
            p.vertex(10, 230);
            p.vertex(30, 230);
            p.endShape();

            p.beginShape();
            p.vertex(20, 230);
            p.vertex(20, 20);
            p.endShape();
        }

        if(checked.length >1){
            p.beginShape();
            p.vertex(20, 20);
            p.vertex(120, 20);
            p.endShape();
        }

        if(checked.length >2){
            p.beginShape();
            p.vertex(120, 20);
            p.vertex(120, 65);
            p.endShape();
        }

        if(checked.length >3){
            p.strokeWeight(2);
            p.beginShape();
            p.translate(120, 85);
            for (let i = 0; i < 20; i+=0.01){
              x = p.cos(i) * 20;
              y = p.sin(i) * 20;
              p.vertex(x, y);
            }
            p.endShape();
        }

        if(checked.length >4){
            p.beginShape();
            p.vertex(0, 85);
            p.vertex(0, 20);
            p.endShape();
        }

        if(checked.length >5){
            p.beginShape();
            p.vertex(0, 35);
            p.vertex(-30, 70);
            p.endShape();
        
            p.beginShape();
            p.vertex(0, 35);
            p.vertex(30, 70);
            p.endShape();
        }

        if(checked.length >6){
            p.beginShape();
            p.vertex(0, 85);
            p.vertex(30, 120);
            p.endShape();

            p.beginShape();
            p.vertex(0, 85);
            p.vertex(-30, 120);
            p.endShape();
        }
    }
  };
  let canvas=new p5(sketch, 'canvas_draw');