const elementFromString = (htmlString) => {
  const div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
}

class ConfirmForm extends HTMLFormElement {

  dialogHtml = `
  <dialog>
    <form method='dialog'>
      Are you sure?
      <button type='submit' value='confirm'>Yes</button>
      <button type='submit' value='cancel'>No</button>
    </form>
  </dialog>
`;
  constructor() {
    super();

    const dialogElement = elementFromString(this.dialogHtml);
    // see https://codepen.io/brav0/pen/wYBwBe
    // binding to submit appears problematic
    // - returnValue is always old
    // - submit will not fire if closed with escape key
    // see also https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue re returnValue

    dialogElement.addEventListener('close', () => {
      if (dialogElement.returnValue === 'confirm') {
        const submitter = this.querySelector('button[type="submit"]');
        const submitEvent = new SubmitEvent('submit', {
          submitter,
        });
        this.dispatchEvent(submitEvent);
      }
    });
    this.appendChild(dialogElement);

    // suppress the original submit event and show modal
    this.addEventListener('submit', (event) => {
      event.preventDefault();
      if (event.cancelable) {
        // differentiate between the original event and the one created on confirmation
        event.stopImmediatePropagation();
        dialogElement.showModal();
      }
    });
  }
}
customElements.define('confirm-form', ConfirmForm, { extends: 'form' });
