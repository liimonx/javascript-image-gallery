const grid1 = document.getElementById('grid_1')
const grid2 = document.getElementById('grid_2')
const grid3 = document.getElementById('grid_3')
const grid4 = document.getElementById('grid_4')

const grid1Img = document.querySelectorAll('#grid_1 img')
const grid2Img = document.querySelectorAll('#grid_2 img')
const grid3Img = document.querySelectorAll('#grid_3 img')
const grid4Img = document.querySelectorAll('#grid_4 img')

let a = grid1.childNodes.length
let b = grid2.childNodes.length
let c = grid3.childNodes.length
let d = grid4.childNodes.length

const gridControl = (a,b,c,d) => {
    const t = (a+b+c+d) / 4
    a = t - a
    b = t - b
    c = t - c
    d = t - d
    const arr = [a, b, c, d]
    arr.forEach( s => {
        if (s > 0) {
            if (s == a) {
                
            }else if (s == b){
                
            }else if (s == c){

            }else if (s == d){
                
            }
        }else{
            if (s == a) {
                
            }else if (s == b){
                
            }else if (s == c){

            }else if (s == d){
                
            }
        }
    })


       
}

gridControl(a,b,c,d)
