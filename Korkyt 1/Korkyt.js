
const slider = {
    'list-1': false,
    'list-2': false,
    'list-3': false,
}


function page(argument){
    for(let a in slider){
        if(a == argument){
            if(document.querySelector(`#${argument}`).style.backgroundColor == 'white'){
                document.querySelector(`#${argument}`).style.backgroundColor = '#1C2938'
                document.querySelector(`#${argument}`).style.color = 'white'
                document.querySelector(`#${argument}-content`).style.animation = 'content-go 0.6s forwards'
                setTimeout(() => document.querySelector(`#${argument}-content`).style.display = 'none', 600)
                // document.querySelector(`#${argument}-content`).style.display = 'none'
                slider[argument] = false
            } else {
                document.querySelector(`#${argument}`).style.backgroundColor = 'white'
                document.querySelector(`#${argument}`).style.color = '#CD3F3E'
                document.querySelector(`#${argument}-content`).style.animation = 'content-come 1s forwards'
                document.querySelector(`#${argument}-content`).style.display = 'block'
                slider[argument] = true
            }
        } else {
            document.querySelector(`#${a}`).style.backgroundColor = '#1C2938';
            document.querySelector(`#${a}`).style.color = 'white';
            document.querySelector(`#${a}-content`).style.display = 'none'
            // document.querySelector(`#${a}-content`).style.animationName = 'content-go'
            // document.querySelector(`#${a}-content`).style.animationDuration = '0.6s'
            // document.querySelector(`#${argument}-content`).style.animationDelay = '0.6s'
            setTimeout(() => document.querySelector(`#${a}-content`).style.display = 'none', 600)
            slider[a] = false
        }
    }
    if(Object.keys(slider).every(a => slider[a] == false)){
        document.querySelector(`.title`).style.animationName = 'fade-in-animation'
        document.querySelector(`.title`).style.animationDuration = '0.6s'
        document.querySelector(`.title`).style.animationDelay = '0.6s'
    } else {
        document.querySelector(`.title`).style.animationName = 'fade-out-animation'
        document.querySelector(`.title`).style.animationDuration = '0.6s'
        document.querySelector(`.title`).style.animationDelay = '0s'
    }
    console.log(slider)  
}
