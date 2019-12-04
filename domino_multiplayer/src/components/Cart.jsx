import React from "react";
import Piece, { EmptyPiece } from "./Piece.jsx";

const Cart = props => {
  const { cart } = props;
  return (
    <table id="userCart">
      <tbody>
        <tr key={"row0"}>
          {cart.map((dominoPiece, j) => {
            const { valid, side1, side2 } = dominoPiece;
            let ret = null;
            if (valid === undefined) {
              ret = (
                <td key={j} onClick={() => props.onClick(j, dominoPiece)}>
                  <Piece side1={side1} side2={side2} isLaying={false} />
                </td>
              );
            } else if (valid) {
              ret = (
                <td key={j} onClick={() => props.onClick(j, dominoPiece)}>
                  <Piece
                    valid={true}
                    side1={side1}
                    side2={side2}
                    isLaying={false}
                  />
                </td>
              );
            } else {
              ret = (
                <td key={j}>
                  <EmptyPiece />
                </td>
              );
            }
            return ret;
          })}
        </tr>
      </tbody>
    </table>
  );
};

export default Cart;
