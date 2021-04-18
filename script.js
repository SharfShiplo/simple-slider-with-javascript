let items = document.querySelectorAll('.screen');
let nextBtn = document.querySelector('.next-screen');
let prevBtn = document.querySelector('.prev-screen');
let index = 0;
window.onload = (event) => {
  items[0].classList.add('active');
  prevBtn.disabled = true;
};
    const nextScreen=()=> {
        if (index < indexMax()) {
          index++;
          return updateScreen(index);
        }
    }
   const prevScreen=()=> {
        if (index > 0) {
          index--;
          return updateScreen(index);
        }
    }
    const updateScreen=(index)=> {
        reset();
        goTo(index);
        return setBtns();
    }
   const indexMax=()=> {
        return items.length - 1;
    }
    const goTo =(index)=> {
        return items[index].classList.add('active');
    }
    const reset=()=> {
       for(let item of items) {
         item.classList.remove('active')
        }
    }
    const setBtns= ()=> {
        if (index === indexMax()) {
          nextBtn.disabled = true;
          prevBtn.disabled = false;
        } else if (index === 0) {
          nextBtn.disabled = false;
          prevBtn.disabled = true;
        } else {
          nextBtn.disabled = false;
          prevBtn.disabled = false;
        }
      }
const nextSlide =()=> {
  return nextScreen();
}
const prevSlide =()=> {
  return prevScreen();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);