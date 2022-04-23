'use strict';
const tasks = [];

const washCarBtn = document.getElementById('wash-car');
const mowLawnBtn = document.getElementById('mown-lawn');
const pullWeedBtn = document.getElementById('pull-weed');

const taskContainer = document.querySelector('.tasks__list');

const totalAmountEl = document.querySelector('.total-amount');

function renderInvoice() {
  taskContainer.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    taskContainer.innerHTML += `
      <li class="tasks__item" data-index="${i}" >
        <span class="tasks__desc">
          ${tasks[i].task} <button id="remove">remove</button>
        </span>
        <span class="tasks__price"><span id="dollar-sign">$</span> ${tasks[i].price}</span>
      </li>
    `;
  }
  let totalAmount = 0;
  for (let i = 0; i < tasks.length; i++) {
    totalAmount += tasks[i].price;
  }

  totalAmountEl.innerHTML = `$${totalAmount}`;
}
tasks.some(task => task.task === 'Wash Car');
washCarBtn.addEventListener('click', function () {
  if (!tasks.some(task => task.task === 'Wash Car')) {
    tasks.push({ task: 'Wash Car', price: 10 });
    renderInvoice();
  }
});
mowLawnBtn.addEventListener('click', function () {
  if (!tasks.some(task => task.task === 'Mow Lawn')) {
    tasks.push({ task: 'Mow Lawn', price: 20 });
    renderInvoice();
  }
});
pullWeedBtn.addEventListener('click', function () {
  if (!tasks.some(task => task.task === 'Pull Weed')) {
    tasks.push({ task: 'Pull Weed', price: 30 });
    renderInvoice();
  }
});

taskContainer.addEventListener('click', function (e) {
  if (e.target.id === 'remove') {
    const index = e.target.parentElement.parentElement.dataset.index;
    tasks.splice(index, 1);
    renderInvoice();
  }
});
