let header = document.querySelector("header")
let headerContainer = document.querySelector("header .container")
let lis = document.querySelectorAll("header .container ul li");
let icon = document.querySelector("main .icon")
let dates = document.querySelectorAll(".experience .date p")
let experience = document.querySelectorAll(".experience .container .cards .card")
let education = document.querySelectorAll(".education .card")
let Project = document.querySelectorAll(".projects .card")
let skills = document.querySelectorAll(".skills span")
let button = document.querySelector("main .button button");
let image = document.querySelectorAll(".projects .card .image img")
let projectOverlay = document.querySelector(".projects .container .overlay")
let projectOverlayButton = document.querySelector(".projects .container .overlay Button")
let email = document.querySelector(".email")
let message = document.querySelector(".message")
let send = document.querySelector(".send")
onscroll = ()=> {
    console.log(scrollY)
    if(scrollY >= 600) {
        headerContainer.style.cssText = `
        background: #3498db;
        `
        header.style.cssText = `
        position: fixed;
        background: #3498db;
        `
        lis.forEach((e)=> {
            e.style.cssText = `
            color: white;
            `
            e.addEventListener("mouseenter" , ()=> {
                e.style.cssText = `
                color: #3498db;
                `
            })
            e.addEventListener("mouseleave" , ()=> {
                e.style.cssText = `
                color: #fff;
                `
            })
            })
    }else {
        headerContainer.style.cssText = `
        background: white;
        `
        header.style.cssText = ` 
        position: absolute;
        background: transparent;
        `
        lis.forEach((e)=> {
                e.style.cssText = `
                color: #3498db;
                `
                e.addEventListener("mouseenter" , ()=> {
                    e.style.cssText = `
                    color: #3498db;
                    `
                })
                e.addEventListener("mouseleave" , ()=> {
                    e.style.cssText = `
                    color: #3498db;
                    `
                })
            })
}
if(scrollY >= 550) {
    dates.forEach((e)=> {
        e.style.cssText = ` 
        left: 0;
        `
    })
    experience.forEach((e)=> {
        e.style.cssText =`
        right: 0;
        `
    })
}
if(scrollY >= 1422) {
    education[0].style.cssText = `
    left: 0;
    `
    education[1].style.cssText = `
    right: 0;
    `
}
if(scrollY >= 2224) {
    Project.forEach((e)=> {
        e.style.cssText = `
        left: 0;
        `
    })
}
if(scrollY >= 2794) {
    skills.forEach((e)=> {
        e.style.cssText = ` 
        top: 0;
        opacity: 1;
        `
    })
}
if(scrollY >= 350) {
    button.style.cssText = `
    display: block;
    `
    button.addEventListener("click" , ()=> {
        scrollTo({
            top: 0,
            behavior:"smooth"
        })
    })
}else {
    button.style.cssText = `
    display: none;
    `
}
}

lis[0].addEventListener("click" , ()=> {
    scrollTo({
        top: 600,
        behavior:"smooth"
    })
})
lis[1].addEventListener("click" , ()=> {
    scrollTo({
        top: 871,
        behavior:"smooth"
    })
})
lis[2].addEventListener("click" , ()=> {
    scrollTo({
        top: 1686,
        behavior:"smooth"
    })
})
lis[3].addEventListener("click" , ()=> {
    scrollTo({
        top: 2380,
        behavior:"smooth"
    })
})
lis[4].addEventListener("click" , ()=> {
    scrollTo({
        top: 4645,
        behavior:"smooth"
    })
})
lis[5].addEventListener("click" , ()=> {
    scrollTo({
        top: 4950,
        behavior:"smooth"
    })
})
icon.addEventListener("click" , ()=> {
    scrollTo({
        top: 871,
        behavior: "smooth"
    })
})

image.forEach((e)=> {
    e.addEventListener("click" ,()=> {
        projectOverlay.innerHTML = `
        <img src = "${e.src}" >
        `
        projectOverlay.style.cssText = `
        opacity: 1;
        z-index: 1;
        `
        setTimeout(()=> {
            projectOverlay.style.cssText = `
            opacity: 0;
            z-index: -2;
            `
            projectOverlay.innerHTML = ''
        } , 3000)
    })
})
let arr = [];
let emailReg = /\w+(\d+)?@gmail.com/
send.addEventListener("click" , ()=> {
    let contact
    if(email.value.match(emailReg) && message.value !== "") {
    let emailValue = email.value;
    let messageValue = message.value;
    contact = {
        email: emailValue,
        message: messageValue
    }
    arr.push(contact)
    console.log(arr)
    }else {
        email.style.cssText = `
        animation: flash 2s ;
        `
    }
    email.value = '';
    message.value = ''
})
