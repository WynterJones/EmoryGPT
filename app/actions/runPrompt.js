/*
 *   Copyright (c) 2023 Wynter Jones
 *   All rights reserved.
 */

function emoryRunPrompt(prompt) {
  const textarea = document.querySelector(`form textarea`)
  textarea.value = prompt

  const submitBtn = document.querySelector(`form button`)
  submitBtn.removeAttribute('disabled')
  submitBtn.click()
}
