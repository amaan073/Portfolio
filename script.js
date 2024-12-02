
document.addEventListener('DOMContentLoaded', function() {

    //navbar
    const navbarItems = document.querySelectorAll('.navbar-item');
    navbarItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetDiv = document.getElementById(targetId);
            targetDiv.scrollIntoView({ behavior: 'smooth' });
        });
    });




    //contactButton
    const contactBtn = document.getElementById("contact");
    contactBtn.addEventListener('click', function() {
        const contactSection = document.getElementById("Contact");
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });




    // section FADE IN ANIMATION
    const fadeInElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);     //unobserved the element so the callback doesnt fire again when the element intersect, like in navbar observer function where there is no use of unobserve() function so the underline effect apply to same navlink again and again
            }
        });
    },{
        threshold: 0.25   
    });
    fadeInElements.forEach(element => {
        observer.observe(element);
    });



    
    //for responsive navbar menu
    const sections = document.querySelectorAll("section");

    let currentActiveLink = null;

    const observerForNavbar = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                let targetName = entry.target.classList[1];
                targetName = targetName.charAt(0).toUpperCase() + targetName.slice(1);

                const targetLink = document.querySelector(`[data-target="${targetName}"]`)  
                
                if (currentActiveLink) {
                    currentActiveLink.classList.remove('underline');  
                }


                targetLink.classList.add('underline');

                currentActiveLink = targetLink;
                
            }
        })
    });
    sections.forEach((section) => {
        observerForNavbar.observe(section);
    })





    //dropdown button function
    const dropdownBtn = document.querySelector(".dropdownBtn");
    const dropdownContent = document.querySelector(".dropdownContent");
    let buttonCicked = false;
    dropdownBtn.addEventListener("click",(e)=> {
        
        if(buttonCicked) {
            //already clicked
            dropdownBtn.style.rotate = "0deg"
            dropdownContent.classList.remove("dropdownBarOpen");
            dropdownContent.classList.add("dropdownBarClose");

            setTimeout(()=> {dropdownContent.style.display = "none";},300)
            buttonCicked = false;
        } else {
            //not clicked
            dropdownContent.style.display = "block";
            dropdownBtn.style.rotate = "180deg"

            dropdownContent.classList.remove("dropdownBarClose");
            dropdownContent.classList.add("dropdownBarOpen");
            buttonCicked = true;
        }

    });



    var dropdownItems = document.querySelectorAll(".dropdownContent>div");
    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetDiv = document.getElementById(targetId);
            targetDiv.scrollIntoView({ behavior: 'smooth' });
        });
    });
    




    
    //For projects links
    const projects = document.querySelectorAll(".project");

    const blogProject = projects[0];
    const todoList = projects[1];

    blogProject.addEventListener("click",()=> {window.open('https://amaan073.github.io/Blog-Project/index.html', '_blank')});
    todoList.addEventListener("click",()=> {window.open('https://amaan073.github.io/TodoList/', '_blank')});

    
});

    


