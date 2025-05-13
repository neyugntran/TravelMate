import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { toast } from "react-toastify";

export default function useSocket(orderCode) {
  const socketRef = useRef(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const newSocket = io("http://localhost:3001");
    socketRef.current = newSocket;

    newSocket.on("connect", () => {
      console.log("WebSocket connected:", newSocket.id);
      setIsConnected(true);
    });

    newSocket.on("disconnect", () => {
      console.log("WebSocket disconnected");
      setIsConnected(false);
    });

    if (orderCode) {
      newSocket.emit("joinOrderRoom", { orderCode });
    }

    newSocket.on("paymentUpdated", (data) => {
      if (data.orderCode === orderCode) {
        toast.success("Thanh toán thành công");
      }
    });

    return () => {
      if (orderCode) {
        newSocket.emit("leaveOrderRoom", { orderCode });
      }
      newSocket.disconnect();
    };
  }, [orderCode]);

  return { socket: socketRef.current, isConnected };
}
