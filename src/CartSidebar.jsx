
import React, { useContext, useState } from "react";
import { Box, Typography, IconButton, Button, Snackbar } from "@mui/joy";
import { CartContext } from "./CartContext";
import OrderConfirmationModal from "./OrderConfirmationModal";

const CartSidebar = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);

  const order = {
    invoiceNo: "123454 10/06/2025 | 17:13:00",
    table: "Table 04",
    orderNo: "#0029",
    items: cart,
  };

  const handlePrintInvoice = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    setIsToastOpen(true);
    clearCart();
  };

  return (
    <>
      <Box
        sx={{
          width: "300px",
          background: "#fff",
          padding: "25px",
          m: 1,
          boxShadow: "-2px 0 4px rgba(0,0,0,0.1)",
          position: "fixed",
          right: "10px",
          top: "80px",
          bottom: "10px",
          borderRadius: "10px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Typography
          level="body2"
          sx={{
            color: "#666",
            fontFamily: "Roboto, sans-serif",
            fontSize: "12px",
            fontWeight: 400,
          }}
        >
          Invoice No.: {order.invoiceNo}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Typography
            level="h4"
            sx={{
              color: "#ff5722",
              fontFamily: "Roboto, sans-serif",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            Ep
          </Typography>
          <Typography
            level="body2"
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "12px",
              color: "#666",
              fontWeight: 400,
            }}
          >
            easypos@gmail.com
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            level="body1"
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "14px",
              color: "#333",
              fontWeight: 500,
            }}
          >
            {order.table}
          </Typography>
          <Typography
            level="body1"
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "14px",
              color: "#333",
              fontWeight: 500,
            }}
          >
            Order: {order.orderNo}
          </Typography>
        </Box>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <Box
              key={`${item.id}-${index}`}
              sx={{
                display: "flex",
                gap: "15px",
                alignItems: "center",
                borderBottom: "1px solid #e0e0e0",
                pb: 2,
                pt: 1,
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    level="body1"
                    sx={{
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#333",
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    level="body1"
                    sx={{
                      color: "#ff5722",
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    ${(item.price * item.quantity).toFixed(2)}
                  </Typography>
                </Box>
                <Typography
                  level="body2"
                  sx={{
                    color: "#666",
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "12px",
                    fontWeight: 400,
                  }}
                >
                  ${item.price.toFixed(2)}
                </Typography>
                {item.size && (
                  <Typography
                    level="body2"
                    sx={{
                      color: "#666",
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "12px",
                      fontWeight: 400,
                    }}
                  >
                    Size: {item.size}
                  </Typography>
                )}
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}
                >
                  <Button
                    onClick={() => updateQuantity(index, item.quantity - 1)}
                    sx={{
                      minWidth: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      backgroundColor: "#ff5722",
                      color: "#fff",
                      fontSize: "16px",
                      "&:hover": {
                        backgroundColor: "#e64a19",
                      },
                    }}
                  >
                    -
                  </Button>
                  <Typography
                    sx={{
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "14px",
                      color: "#333",
                    }}
                  >
                    {item.quantity}
                  </Typography>
                  <Button
                    onClick={() => updateQuantity(index, item.quantity + 1)}
                    sx={{
                      minWidth: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      backgroundColor: "#ff5722",
                      color: "#fff",
                      fontSize: "16px",
                      "&:hover": {
                        backgroundColor: "#e64a19",
                      },
                    }}
                  >
                    +
                  </Button>
                  <IconButton
                    onClick={() => removeFromCart(index)}
                    sx={{
                      ml: "auto",
                      color: "#666",
                    }}
                  >
                    <span>🗑️</span>
                  </IconButton>
                </Box>
              </Box>
            </Box>
          ))
        ) : (
          <Typography
            level="body2"
            sx={{
              color: "#999",
              fontFamily: "Roboto, sans-serif",
              fontSize: "12px",
              textAlign: "center",
              py: 2,
            }}
          >
            No items in the cart
          </Typography>
        )}
        <Box sx={{ mt: "auto" }}>
          <Typography
            level="h4"
            color="danger"
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            ${total.toFixed(2)}
          </Typography>
          <Typography
            level="body2"
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "12px",
              color: "#666",
              fontWeight: 400,
            }}
          >
            Items: {cart.length}, Quantity: {totalQuantity}
          </Typography>
          <Button
            variant="outlined"
            color="neutral"
            fullWidth
            sx={{
              mt: 2,
              borderRadius: "10px",
              fontFamily: "Roboto, sans-serif",
              fontSize: "14px",
              borderColor: "#e0e0e0",
              color: "#666",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
            onClick={handlePrintInvoice}
            disabled={cart.length === 0}
          >
            Print Invoice
          </Button>
          <Button
            variant="solid"
            color="success"
            fullWidth
            sx={{
              mt: 1,
              borderRadius: "10px",
              fontFamily: "Roboto, sans-serif",
              fontSize: "14px",
              backgroundColor: "#4caf50",
              "&:hover": {
                backgroundColor: "#43a047",
              },
            }}
          >
            Payments
          </Button>
        </Box>
      </Box>

      <OrderConfirmationModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
        order={order}
      />

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={isToastOpen}
        autoHideDuration={3000}
        onClose={() => setIsToastOpen(false)}
        sx={{
          bgcolor: "#4caf50",
          color: "white",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        Bill generated successfully
      </Snackbar>
    </>
  );
}

export default CartSidebar;
