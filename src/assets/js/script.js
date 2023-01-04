document.addEventListener('DOMContentLoaded', function () {
  const headerMenu = document.querySelector('.header-menu')
  const headerPopupWrapper = document.querySelector('.header-popup-wrapper')
  const burgerMenuIcon = document.querySelector('.header-menu--burger')

  headerMenu.addEventListener('click', () => {
    headerMenu.classList.toggle('header-menu--active')
    headerPopupWrapper.classList.toggle('header-popup-wrapper--active')
    burgerMenuIcon.classList.toggle('active')
  })

// // assign wheelzoom
//   wheelzoom(document.querySelector('.map-wrapper'));


// content animation
  const animatedItemsArray = document.querySelectorAll('.animated-item')

  if (animatedItemsArray.length) {
    window.addEventListener('scroll', animationOnScroll)

    function animationOnScroll() {
      for (let i = 0; i < animatedItemsArray.length; i++) {
        const animatedItem = animatedItemsArray[i]
        const animatedItemHeight = animatedItem.offsetHeight
        const animatedItemOffset = offset(animatedItem).top
        const animationStart = 4

        let animationItemPoint = window.innerHeight - animatedItemHeight / animationStart
        if (animatedItemHeight > window.innerHeight) {
          animationItemPoint = window.innerHeight - window.innerHeight / animationStart
        }

        if ((pageYOffset > animatedItemOffset - animationItemPoint) && pageYOffset < (animatedItemOffset + animatedItemHeight)) {
          animatedItem.classList.add('active')
        } else {
          animatedItem.classList.remove('active')
        }
      }
    }

    function offset(el) {
      const rect = el.getBoundingClientRect()
      const scrollLeft = window.pageYOffset || document.documentElement.scrollLeft
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft,
      }
    }

    animationOnScroll()
  }
})