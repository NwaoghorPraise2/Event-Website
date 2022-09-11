const form = document.getElementById("payForm");
form.addEventListener("submit", payNow);

function payNow(e) {
  e.preventDefault();

  FlutterwaveCheckout({
    public_key: "FLWPUBK_TEST-bb57711d1a906c9c7003f806f633ec68-X",
    tx_ref: "AK_" + Math.floor((Math.random() * 1000000000) + 1),
    amount: 60000,
    currency: "NGN",

    //payment_options: "card,mobilemoney,ussd",

    customer: {
      email: document.getElementById("email").value,
      phonenumber: document.getElementById("number").value,
      name: document.getElementById("name").value,
    },

    callback: (data) => { // specified callback function
      //console.log(data);
      const reference = data.tx_ref;
      alert('Payment complete!' + reference + ' ' + 'Redirecting to Whatsapp. Click Now');
      window.location.assign(`https://wa.me/message/5QOYFGN462FUF1`);
    },

    customizations: {
      title: "Marvi-Events",
      description: "Book a Space on our calender."
    },
  });
}