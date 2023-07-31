const category = (category) => {
  switch (category) {
    case "cpu":
      return "CPU/Processor";
    case "motherboard":
      return "Motherboard";
    case "ram":
      return "RAM";
    case "power-supply":
      return "Power Supplier";
    case "storage":
      return "Storage Device";
    case "monitor":
      return "Monitor";
    case "other":
      return "Other";
    default:
      return "";
  }
};

export default category;
