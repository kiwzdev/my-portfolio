import toast from "react-hot-toast";

export const copyEmail = () => {
  const email = "athit.thammawongphon@gmail.com";
  navigator.clipboard.writeText(email);
  toast.success("Email copied to clipboard!");
};
