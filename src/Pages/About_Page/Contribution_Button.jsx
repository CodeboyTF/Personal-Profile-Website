function Contribution() {
  const ContributePay = () => {
    const link = document.createElement("a");
    link.href = "https://www.paypal.com/donate/?hosted_button_id=XXXXXXXXXX"; // Replace with your actual PayPal donation link
    link.target = "_blank"; 
    link.rel = "noopener noreferrer"; // For security
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <button onClick={ContributePay}>Contribute</button>
    </>
  );
}

export default Contribution;
