import { Button, Modal, QRCode } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IconCopyPayOs, IconLightPayOs } from "../../Svg";
import useSocket from "../socket/socket";

const ModalPayment = ({ paymentDataOS, open, onOk, onCancel }) => {
  const {
    accountName,
    accountNumber,
    amount,
    description,
    orderCode,
    qrCode,
    bin,
  } = paymentDataOS || {};
  console.log(orderCode);
  
  const handleCopyText = (textToCopy, value) => {
    toast.success(`Copy ${value} Successfully`);
    navigator.clipboard.writeText(textToCopy);
  };
  const [bank, setBank] = useState(null);
  useEffect(() => {
    if (!bin) return;

    const getListBank = async () => {
      try {
        const res = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_LISTS_BANK_URL}`,
          headers: {
            "Content-Type": "application/json",
          },
        });
        return res.data;
      } catch (error) {
        console.error(
          "Error fetching list of banks:",
          error.response?.data || error.message
        );
        return null;
      }
    };

    const fetchBankDetails = async () => {
      try {
        const res = await getListBank();
        if (res && res.data) {
          const filteredBank = res.data.find((bank) => bank.bin === bin);
          setBank(filteredBank || null);
        }
      } catch (err) {
        console.error("Error fetching bank details:", err);
      }
    };

    fetchBankDetails();
  }, [bin]);
  const footerContent = (
    <div className="flex justify-end gap-3">
      <button
        className="border border-solid cursor-pointer !text-[#008080] w-full h-[40px] rounded-lg shadow-lg"
        onClick={onCancel}
      >
        <p>Cancel</p>
      </button>
      <button
        className="text-center w-full h-[40px] cursor-pointer bg-[#008080] text-white rounded-lg shadow-lg hover:bg-[#008080]/70 transition"
        disabled={amount < 2000}
        onClick={onOk}
      >
        <p>Pay {new Intl.NumberFormat("vi-VN").format(amount)} VND</p>
      </button>
    </div>
  );
  const { socket } = useSocket(orderCode);
  useEffect(() => {
    if (socket) {
      const handlePaymentUpdate = (data) => {
        console.log("Payment updated:", data);
        if (data.orderCode === orderCode) {
          toast.success("Thanh toán thành công");
        }
      };
      socket.on("paymentUpdated", handlePaymentUpdate);
      return () => {
        socket.off("paymentUpdated", handlePaymentUpdate);
      };
    }
  }, [socket, orderCode]);
  return (
    <Modal
      className="!top-[15%]"
      title="Thanh toán"
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      footer={footerContent}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <IconLightPayOs />
          <p className="font-normal text-base text-[#637381]">
            Please open any banking app to scan the code
          </p>
        </div>
        <div className="flex gap-6">
          <div className="w-[200px] h-[288px] bg-white flex flex-col items-center pt-6">
            <div className="flex flex-col items-center">
              <img src={bank?.logo} alt="" className="w-[100px] h-10" />
              <QRCode
                className="!p-0 !w-[160px] !h-[160px]"
                value={qrCode}
              ></QRCode>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[60%]">
            <div className="flex gap-3 items-center justify-between">
              <div className="flex flex-col gap-3">
                <p className="text-base text-[#718EBF] font-semibold">
                  Account Name
                </p>
                <p className="text-base text-[#202224] font-bold uppercase">
                  {accountName}
                </p>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => handleCopyText(accountName, "Account Name")}
              >
                <IconCopyPayOs />
              </div>
            </div>
            <div className="flex gap-3 items-center justify-between">
              <div className="flex flex-col gap-3">
                <p className="text-base text-[#718EBF] font-semibold">
                  Account Number
                </p>
                <p className="text-base text-[#202224] font-bold uppercase">
                  {accountNumber}
                </p>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => handleCopyText(accountNumber, "Account Number")}
              >
                <IconCopyPayOs />
              </div>
            </div>
            <div className="flex gap-3 items-center justify-between">
              <div className="flex flex-col gap-3">
                <p className="text-base text-[#718EBF] font-semibold">Amount</p>
                <p className="text-base text-[#202224] font-bold uppercase">
                  {new Intl.NumberFormat("vi-VN").format(amount)} VND
                </p>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => handleCopyText(amount, "Amount")}
              >
                <IconCopyPayOs />
              </div>
            </div>
            <div className="flex gap-3 items-center justify-between">
              <div className="flex flex-col gap-3">
                <p className="text-base text-[#718EBF] font-semibold">
                  Messages
                </p>
                <p className="text-base text-[#202224] font-bold uppercase">
                  {description}
                </p>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => handleCopyText(description, "Message")}
              >
                <IconCopyPayOs />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <p className="text-base font-normal text-[#F36515]">
            Please enter the correct amount of
            <span className="font-bold">
              {" "}
              {new Intl.NumberFormat("vi-VN").format(amount)}{" "}
            </span>
            and include the mesage
            <span className="font-bold"> {description} </span>
            when making the transfer
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ModalPayment;
