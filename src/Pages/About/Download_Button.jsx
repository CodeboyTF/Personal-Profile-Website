import { FaDownload } from "react-icons/fa";

function DownloadCv() {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "Fhatuwani CV.pdf";
    link.download = "Fhatuwani_Makharamedzha_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={downloadCV}>
      <FaDownload style={{ marginRight: "8px" }} />
      Download CV
    </button>
  );
}

export default DownloadCv;
