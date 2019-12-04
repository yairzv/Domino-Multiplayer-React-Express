import React from "react";

const Piece = props => {
  const { valid, side1, side2, isLaying } = props;

  const cardInCartSelected = valid;

  const getDegree = (isLaying, side1, side2) => {
    var deg;
    if (!isLaying && side1 <= side2) deg = 0;
    else {
      if (isLaying === true) deg = 90;
      else deg = 180;

      if (side1 < side2) deg *= -1;
    }

    return deg;
  };
  const getImageName = (side1, side2) => {
    return "p" + Math.min(side1, side2) + "_" + Math.max(side1, side2);
  };

  const imgName = getImageName(side1, side2);
  const imagePath = require("../resources/pieces/" + imgName + ".svg");
  const degree = getDegree(isLaying, side1, side2);
  const transform = "rotate(" + degree + "deg)";
  const width = "5vw";
  const height = width;
  let styleCopy = null;
  cardInCartSelected ? (styleCopy = validStyle) : (styleCopy = containerStyle);

  return (
    <div style={styleCopy}>
      <img src={imagePath} style={{ height, width, transform }} />
    </div>
  );
};

export default Piece;

export const EmptyPiece = () => <div style={containerStyle} />;

export class ValidPiece extends React.Component {
  constructor(props) {
    super(props);
    this.validPieceRef = React.createRef();
    this.scrollIntoCenter = this.scrollIntoCenter.bind(this);
  }

  scrollIntoCenter() {
    if (this.validPieceRef.current) {
      this.validPieceRef.current.scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center"
      });
      console.log("afters scrolled");
    }
  }

  componentDidMount() {
    this.scrollIntoCenter();
  }

  render() {
    return <div ref={this.validPieceRef} style={validStyle} />;
  }
}

const size = "5vw";
const imageStyle = {
  width: size,
  height: size
};

const containerStyle = {
  width: size,
  height: size,
  backgroundColor: "white"
};

const validStyle = {
  width: size,
  height: size,
  backgroundColor: "green"
};
