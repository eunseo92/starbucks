const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input') /*serachEl요소 안에서 찾기*/

searchEl.addEventListener('click', function() {
  // Logic..
  searchInputEl.focus();  /*input 요소 focus (확장)*/
}); /*클릭 이벤트 처리*/

searchInputEl.addEventListener('focus', function() { /*input 요소 확장*/
  searchEl.classList.add('focused'); /*클래스 추가*/
  searchInputEl.setAttribute('placeholder', '통합검색'); 
});

searchInputEl.addEventListener('blur', function() { /*input 요소 focus 해제 시*/
  searchEl.classList.remove('focused'); /*클래스 삭제*/
  searchInputEl.setAttribute('placeholder', ''); /*focus 해제시 빈문자*/
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021