// order.js
document.addEventListener("DOMContentLoaded", () => {
  const orderButtons = document.querySelectorAll(".order-now");
  const modal = new bootstrap.Modal(document.getElementById("orderModal"));
  const selectedItemText = document.getElementById("selectedItem");

  orderButtons.forEach(button => {
    button.addEventListener("click", () => {
      const itemName = button.getAttribute("data-item");
      selectedItemText.textContent = `You are ordering: ${itemName}`;
      modal.show();
    });
  });

  document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("customerName").value;
    const email = document.getElementById("customerEmail").value;
    const address = document.getElementById("customerAddress").value;
    const item = selectedItemText.textContent;

    alert(`Order placed successfully!\n\n${item}\nName: ${name}\nEmail: ${email}\nAddress: ${address}`);
    this.reset();
    modal.hide();
  });
});
