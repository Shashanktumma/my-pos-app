import React, { useState } from "react";
import { Modal, ModalDialog, ModalClose, Typography, Table, Button, Box, Select, Option } from "@mui/joy";
import { CreditCard, Money } from "@mui/icons-material";

function OrderConfirmationModal({ open, onClose, onConfirm, order }) {
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  const subtotal = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = order.items.reduce((sum, item) => sum + 0.33 * item.quantity, 0);
  const total = subtotal + tax;

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        backdropFilter: "none",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
      }}
    >
      <ModalDialog
        sx={{
          width: "600px",
          borderRadius: "12px",
          p: 3,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <ModalClose />
        <Typography level="h5" sx={{ fontWeight: "bold", mb: 1 }}>
          Order confirmation
        </Typography>
        <Typography level="body2" sx={{ color: "gray", mb: 3 }}>
          Please confirm the order below to complete payment
        </Typography>
        <Box sx={{ overflowX: "auto" }}>
          <Table
            sx={{
              "& th": { color: "gray", fontSize: "0.8rem", fontWeight: "medium" },
              "& td": { fontSize: "0.9rem" },
              "& tr": { borderBottom: "1px solid #e0e0e0" },
            }}
          >
            <thead>
              <tr>
                <th style={{ width: "40%" }}>ITEM NAME</th>
                <th style={{ width: "10%" }}>QTY</th>
                <th style={{ width: "20%" }}>PRICE</th>
                <th style={{ width: "15%" }}>TAX</th>
                <th style={{ width: "15%" }}>SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item, index) => (
                <tr key={`${item.section}-${item.id}`}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>${(0.33 * item.quantity).toFixed(2)}</td>
                  <td>${(item.price * item.quantity + 0.33 * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Box>
        <Box sx={{ mt: 2, textAlign: "right" }}>
          <Typography level="body1" sx={{ fontWeight: "medium" }}>
            Subtotal: ${subtotal.toFixed(2)}
          </Typography>
          <Typography level="body1" sx={{ fontWeight: "medium" }}>
            Tax: ${tax.toFixed(2)}
          </Typography>
          <Typography level="body1" sx={{ fontWeight: "bold", color: "#ff6f61" }}>
            Total: ${total.toFixed(2)}
          </Typography>
        </Box>
        <Box sx={{ mt: 3, display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: 1 }}>
            <Select
              value={paymentMethod}
              onChange={(event, newValue) => setPaymentMethod(newValue)}
              startDecorator={
                paymentMethod === "Credit Card" ? (
                  <CreditCard sx={{ fontSize: 16 }} />
                ) : (
                  <Money sx={{ fontSize: 16 }} />
                )
              }
              sx={{
                minWidth: 150,
                borderRadius: "8px",
                bgcolor: "#f5f7fa",
              }}
            >
              <Option value="Credit Card" startDecorator={<CreditCard sx={{ fontSize: 16 }} />}>
                Credit Card
              </Option>
              <Option value="Cash" startDecorator={<Money sx={{ fontSize: 16 }} />}>
                Cash
              </Option>
            </Select>
          </Box>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "8px",
              borderColor: "#e0e0e0",
              color: "gray",
              px: 3,
              "&:hover": { borderColor: "#d0d0d0" },
            }}
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant="solid"
            sx={{
              bgcolor: "#ff6f61",
              color: "white",
              borderRadius: "8px",
              px: 3,
              "&:hover": { bgcolor: "#e63946" },
            }}
            onClick={onConfirm}
          >
            Confirm
          </Button>
        </Box>
      </ModalDialog>
    </Modal>
  );
}

export default OrderConfirmationModal;