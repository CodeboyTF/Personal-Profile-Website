import { FaPaypal } from "react-icons/fa";

function Contribution() {
  const ContributePay = () => {
    window.open("https://www.paypal.com/paypalme/yourusername", "_blank");
  };

  return (
    <button onClick={ContributePay}>
      <FaPaypal style={{ marginRight: "8px" }} />
      Contribute
    </button>
  );
}

export default Contribution;
