import Toast from "ts-toastify";
import { Position, ToastType } from "ts-toastify/lib/type/type";


const form = document.querySelector<HTMLFormElement>('form')!;
const resetButton = document.querySelector<HTMLButtonElement>('.reset_btn')!;
const submitButton = document.querySelector<HTMLButtonElement>('.submit_btn')!;
const clearAllButton = document.querySelector<HTMLButtonElement>('.clear_btn')!;

resetButton.addEventListener('click', (event) => {
  event.preventDefault();
  form.reset();

  document.querySelector<HTMLInputElement>('input[name="position"][value="top-right"]')!.checked = true;
  document.querySelector<HTMLInputElement>('input[name="toast-type"][value="default"]')!.checked = true;
  document.querySelector<HTMLInputElement>('input[name="theme"][value="light"]')!.checked = true;
  document.querySelector<HTMLInputElement>('input[name="options"][value="pauseOnFocusLoss"]')!.checked = true;
  document.querySelector<HTMLInputElement>('input[name="options"][value="pauseOnHover"]')!.checked = true;
  document.querySelector<HTMLInputElement>('input[name="options"][value="showProgress"]')!.checked = true;
  document.querySelector<HTMLInputElement>('input[name="options"][value="canClose"]')!.checked = true;
  document.querySelector<HTMLInputElement>('#autoCloseTime')!.value = '2000';
  document.querySelector<HTMLInputElement>('#toastMessage')!.value = '🦚 TypeScript Toastify';
});


submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const position = document.querySelector<HTMLInputElement>('input[name="position"]:checked')!.value;
  const toastType = document.querySelector<HTMLInputElement>('input[name="toast-type"]:checked')!.value;
  const theme = document.querySelector<HTMLInputElement>('input[name="theme"]:checked')!.value;

  const options: string[] = Array.from(document.querySelectorAll<HTMLInputElement>('input[name="options"]:checked'))
    .map((option) => option.value);

  const autoCloseTime = parseInt((document.querySelector('#autoCloseTime') as HTMLInputElement)!.value || '0', 10);
  const toastMessage = (document.querySelector('#toastMessage') as HTMLInputElement)!.value;

  const toast = new Toast({
    position: position as Position,
    toastMsg: toastMessage,
    autoCloseTime: autoCloseTime,
    canClose: options.includes('canClose'),
    showProgress: options.includes('showProgress'),
    pauseOnHover: options.includes('pauseOnHover'),
    pauseOnFocusLoss: options.includes('pauseOnFocusLoss'),
    type: toastType as ToastType,
    theme: theme as 'dark' | 'light',
  });


  clearAllButton.addEventListener('click', (event) => {
    event.preventDefault();
    toast.remove();
  })

});