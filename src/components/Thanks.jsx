import React from "react";
import "./Thanks.css";
import CheckIcon from "@mui/icons-material/Check";
import { Link } from "react-router-dom";

export default function Thanks() {
  return (
    <div className="thanks">
      <span className="thanks__message">
        {<CheckIcon fontSize="large" />} Thank You, your order has been placed.
      </span>

      <p className="thanks__orders">
        Please check you email for order confirmation and detailed delivery
        information. <br />
        Click <Link to="/orders">here</Link> to check your orders.
      </p>
    </div>
  );
}
