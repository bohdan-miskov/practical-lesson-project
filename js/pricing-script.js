document.addEventListener('DOMContentLoaded', () => {
    // Знаходимо всі кнопки в елементах <li> з класом "asked-item"
    const buttons = document.querySelectorAll('.asked-item-btn');
    
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // Отримуємо батьківський <li>, в якому знаходиться кнопка
        const parentLi = button.closest('.asked-item');
        const content = parentLi.querySelector('.asked-item-appear-text');
        content.style.maxHeight = 0+'px';
        
        if (parentLi) {
          // Перемикаємо клас active
          parentLi.classList.toggle('active');
        }
        
        
        if (parentLi.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px'; // Встановлення потрібної висоти
        } 
      });
    });
  });
  