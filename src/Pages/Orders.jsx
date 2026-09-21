import React from "react";
import { jsPDF } from "jspdf"
import "../css/Orders.css";
import Footer from "../Components/Footer";

const Orders = () => {

  const order = JSON.parse(localStorage.getItem("order"));

  const downloadPDF = () => {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("ShopEase - Order Receipt", 20, 20);

  doc.setFontSize(12);

  doc.text(`Order ID: #${order.id}`, 20, 35);
  doc.text(`Order Date: ${order.date}`, 20, 45);
  doc.text(`Status: ${order.status}`, 20, 55);

  doc.setFontSize(15);
  doc.text("Ordered Products", 20, 70);

  let y = 82;

  order.products.forEach((product) => {
    const quantity = product.quantity || 1;
    const productTotal = product.price * quantity;

    doc.setFontSize(11);

    doc.text(`Product: ${product.title}`, 20, y);
    doc.text(`Quantity: ${quantity}`, 20, y + 7);
    doc.text(`Price: $${product.price}`, 20, y + 14);
    doc.text(`Total: $${productTotal.toFixed(2)}`, 20, y + 21);

    y += 32;
  });

  doc.setFontSize(15);
  doc.text(
    `Total Amount: $${Number(order.total).toFixed(2)}`,
    20,
    y
  );

  y += 15;

  doc.setFontSize(15);
  doc.text("Delivery Details", 20, y);

  y += 10;

  doc.setFontSize(11);

  doc.text(`Name: ${order.customer.name}`, 20, y);
  y += 7;

  doc.text(`Email: ${order.customer.email}`, 20, y);
  y += 7;

  doc.text(`Phone: ${order.customer.phone}`, 20, y);
  y += 7;

  doc.text(`Address: ${order.customer.address}`, 20, y);
  y += 7;

  doc.text(`City: ${order.customer.city}`, 20, y);
  y += 7;

  doc.text(`State: ${order.customer.state}`, 20, y);
  y += 7;

  doc.text(`Pincode: ${order.customer.pincode}`, 20, y);
  y += 7;

  doc.text(`Payment: ${order.customer.payment}`, 20, y);

  doc.save(`ShopEase-Order-${order.id}.pdf`);
};

const copyOrder = async () => {
  let orderText = `
ShopEase - Order Details

Order ID: #${order.id}
Order Date: ${order.date}
Status: ${order.status}

Ordered Products:
`;

  order.products.forEach((product) => {
    const quantity = product.quantity || 1;
    const productTotal = product.price * quantity;

    orderText += `
${product.title}
Quantity: ${quantity}
Price: $${product.price}
Total: $${productTotal.toFixed(2)}
`;
  });

  orderText += `
Total Amount: $${Number(order.total).toFixed(2)}

Delivery Details:
Name: ${order.customer.name}
Email: ${order.customer.email}
Phone: ${order.customer.phone}
Address: ${order.customer.address}
City: ${order.customer.city}
State: ${order.customer.state}
Pincode: ${order.customer.pincode}
Payment: ${order.customer.payment}
`;

  try {
    await navigator.clipboard.writeText(orderText);

    alert("Order details copied!");
  } catch (error) {
    alert("Failed to copy order details.");
  }
};

  if (!order) {
    return (
      <div className="orders-page">
        <h1>My Orders</h1>
        <p className="no-orders">No orders found.</p>
      </div>
    );
  }

  return (
    <>
    <div className="orders-page">

      <h1>My Orders</h1>

      <div className="order-container">

        <div className="order-header">
          <div>
            <h3>Order ID</h3>
            <p>#{order.id}</p>
          </div>

          <div>
            <h3>Order Date</h3>
            <p>{order.date}</p>
          </div>

          <div>
            <h3>Status</h3>
            <p className="status">{order.status}</p>
          </div>
        </div>


        <h2>Ordered Products</h2>

        {order.products.map((product) => (

          <div className="order-product" key={product.id}>

            <img
              src={product.thumbnail}
              alt={product.title}
            />

            <div className="product-info">

              <h3>{product.title}</h3>

              <p>
                Quantity: {product.quantity || 1}
              </p>

              <p>
                Price: ${product.price}
              </p>

              <p>
                Total: $
                {(
                  product.price *
                  (product.quantity || 1)
                ).toFixed(2)}
              </p>

            </div>

          </div>

        ))}


        <div className="order-total">
          <h2>
            Total Amount: ${Number(order.total).toFixed(2)}
          </h2>
        </div>
       
         <div className="order-actions">
            <button onClick={downloadPDF} className="download-btn">
             📄 Download PDF
             </button>

          <button onClick={copyOrder} className="copy-btn">
          📋 Copy Order
        </button>
          </div>

        <div className="customer-details">

          <h2>Delivery Details</h2>

          <p>
            <strong>Name:</strong>{" "}
            {order.customer.name}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {order.customer.email}
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            {order.customer.phone}
          </p>

          <p>
            <strong>Address:</strong>{" "}
            {order.customer.address}
          </p>

          <p>
            <strong>City:</strong>{" "}
            {order.customer.city}
          </p>

          <p>
            <strong>State:</strong>{" "}
            {order.customer.state}
          </p>

          <p>
            <strong>Pincode:</strong>{" "}
            {order.customer.pincode}
          </p>

          <p>
            <strong>Payment:</strong>{" "}
            {order.customer.payment}
          </p>

        </div>

      </div>

    </div>
    <Footer/>
     </>
  );
 
};

export default Orders;

