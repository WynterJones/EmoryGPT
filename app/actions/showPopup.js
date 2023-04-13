/*
 *   Copyright (c) 2023 Wynter Jones
 *   All rights reserved.
 */

function emoryShowPopup(e) {
  e.preventDefault()

  const type = e.target.dataset.type
  let name = ''

  const overlay = document.createElement('div')
  overlay.classList.add('emory_overlay')

  const modal = document.createElement('div')
  modal.classList.add('emory_modal')

  const header = document.createElement('h2')

  if (type === 'sales') {
    name = 'Sales Copy'
  } else if (type === 'optin') {
    name = 'Email Optin'
  }

  header.textContent = name

  const cta_input = document.createElement('input')
  cta_input.type = 'text'
  cta_input.name = 'emory_cta'
  cta_input.placeholder = 'Call to Action'
  cta_input.addEventListener('change', e => {
    emory_data.cta = e.target.value
  })

  const style_input = document.createElement('input')
  style_input.type = 'text'
  style_input.name = 'emory_style'
  style_input.placeholder = 'Voice / Style'
  style_input.addEventListener('change', e => {
    emory_data.voice = e.target.value
  })

  const submitBtn = document.createElement('button')
  submitBtn.textContent = 'Generate The Copy!'
  submitBtn.addEventListener('click', () => {
    document.body.removeChild(overlay)
    switch (type) {
      case 'sales':
        emory_salespage_formula.run()
        break
      case 'optin':
        emory_optin_formula.run()
        break
      default:
        break
    }
  })

  const closeBtn = document.createElement('button')
  closeBtn.textContent = 'Close'
  closeBtn.addEventListener('click', () => {
    document.body.removeChild(overlay)
  })

  modal.appendChild(header)
  modal.appendChild(cta_input)
  modal.appendChild(style_input)
  modal.appendChild(submitBtn)
  modal.appendChild(closeBtn)
  overlay.appendChild(modal)
  document.body.appendChild(overlay)
}
