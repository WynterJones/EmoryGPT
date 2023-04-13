/*
 *   Copyright (c) 2023 Wynter Jones
 *   All rights reserved.
 */

const emory = {
  init: () => {
    console.log('Connected')
    emory.addDropdown()
  },

  addDropdown: () => {
    const emoryContainer = document.createElement('div')
    emoryContainer.classList.add('emory_container')
    emoryContainer.innerHTML = `<button class="emory_button_dropdown">Write Page Copy</button>
    <div class="emory_button_dropdown-content">
      <a href="#" data-type="sales">Sales Copy</a>
      <a href="#" data-type"optin">Email Optin</a>
    </div>`
    document.body.appendChild(emoryContainer)

    const emoryLinks = document.querySelectorAll(
      '.emory_button_dropdown-content a'
    )
    emoryLinks.forEach(link => {
      link.addEventListener('click', emoryShowPopup)
    })
  },
}

emory.init()
