const grid1 = document.getElementById('grid_1')
const grid2 = document.getElementById('grid_2')
const grid3 = document.getElementById('grid_3')
const grid4 = document.getElementById('grid_4')

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
                console.log(grid1.children);
                
            }else if (s == b){
                console.log(grid2.children);
                
            }else if (s == c){
                console.log(grid3.children);
            }else if (s == d){
                console.log(grid4.children);
            }
        }
    })    
       
}

gridControl(a,b,c,d)
