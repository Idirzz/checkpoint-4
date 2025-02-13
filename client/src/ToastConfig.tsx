import { ToastContainer, Zoom } from "react-toastify";

export default function ToastContainerWithOptions() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={2000}
      hideProgressBar={false}
      theme="colored"
      transition={Zoom}
    />
  );
}
