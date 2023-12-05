const swiper = new Swiper('.swiper', {
    loop: true,
    sldesPerView: 1,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  const switchModal = () => {
    const modal = document.querySelector('.modal')
    const atualstyle = modal.style.display
    if(atualstyle === 'block'){
        modal.style.display = 'none'
    }
    else{
        modal.style.display = 'block'
    }
  }

  const btn = document.querySelector('.modalBtn')
    btn.addEventListener('click', switchModal)

    const btn2 = document.querySelector('.modalBtn2')
    btn2.addEventListener('click', switchModal)

    window.onclick = function(event){
        const modal = document.querySelector('.modal')
        if (event.target === modal){
            switchModal()
        }
    }

    var cardDrop = document.getElementById('card-dropdown');
    var activeDropdown;
    cardDrop.addEventListener('click',function(){
      var node;
      for (var i = 0; i < this.childNodes.length-1; i++)
        node = this.childNodes[i];
        if (node.className === 'dropdown-select') {
          node.classList.add('visible');
           activeDropdown = node; 
        };
    })
    
    window.onclick = function(e) {
      console.log(e.target.tagName)
      console.log('dropdown');
      console.log(activeDropdown)
      if (e.target.tagName === 'LI' && activeDropdown){
        if (e.target.innerHTML === 'Master Card') {
          document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/2vbqk5lcpi7hjoc/MasterCard_Logo.svg.png';
              activeDropdown.classList.remove('visible');
          activeDropdown = null;
          e.target.innerHTML = document.getElementById('current-card').innerHTML;
          document.getElementById('current-card').innerHTML = 'Master Card';
        }
        else if (e.target.innerHTML === 'American Express') {
             document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/f5hyn6u05ktql8d/amex-icon-6902.png';
              activeDropdown.classList.remove('visible');
          activeDropdown = null;
          e.target.innerHTML = document.getElementById('current-card').innerHTML;
          document.getElementById('current-card').innerHTML = 'American Express';      
        }
        else if (e.target.innerHTML === 'Visa') {
             document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png';
              activeDropdown.classList.remove('visible');
          activeDropdown = null;
          e.target.innerHTML = document.getElementById('current-card').innerHTML;
          document.getElementById('current-card').innerHTML = 'Visa';
        }
      }
      else if (e.target.className !== 'dropdown-btn' && activeDropdown) {
        activeDropdown.classList.remove('visible');
        activeDropdown = null;
      }
    }
    
  