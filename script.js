function kartalarniKorsat() {
  var kartalar = document.querySelectorAll('.testimonial-card, .feature-card, .pricing-card');
  
  for (var i = 0; i < kartalar.length; i++) {
    var karta = kartalar[i];
    var joylashuv = karta.getBoundingClientRect().top;
    var oynaBalandligi = window.innerHeight;
    
    if (joylashuv < oynaBalandligi - 50) {
      karta.style.opacity = '1';
      karta.style.transform = 'translateY(0)';
    } else {
      karta.style.opacity = '0';
      karta.style.transform = 'translateY(30px)';
    }
  }
}

window.addEventListener('scroll', function() {
  kartalarniKorsat();
});

window.addEventListener('load', function() {
  var kartalar = document.querySelectorAll('.testimonial-card, .feature-card, .pricing-card');
  
  for (var i = 0; i < kartalar.length; i++) {
    kartalar[i].style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
  }
  
  kartalarniKorsat();
});

var faqTugmalar = document.querySelectorAll('.faq-question');

for (var k = 0; k < faqTugmalar.length; k++) {
  faqTugmalar[k].addEventListener('click', function() {
    var otaOyna = this.parentElement;
    
    if (otaOyna.classList.contains('active')) {
      otaOyna.classList.remove('active');
    } else {
      for (var j = 0; j < faqTugmalar.length; j++) {
        faqTugmalar[j].parentElement.classList.remove('active');
      }
      otaOyna.classList.add('active');
    }
  });
}

var forma = document.getElementById('newsletterForm');

if (forma) {
  forma.addEventListener('submit', function(voqea) {
    voqea.preventDefault();
    
    var kiritishMaydoni = forma.querySelector('input');
    var qiymat = kiritishMaydoni.value;
    
    if (qiymat !== '') {
      alert('Thank you! Your subscription has been successfully received.');
      kiritishMaydoni.value = '';
    } else {
      alert('Please enter your email address!');
    }
  });
}

var sanagach = 0;
while (sanagach < 1) {
  console.log('Certo Mobile Security Engine Ready');
  sanagach++;
}