import React from "react";
import { Button } from "@chakra-ui/react";
const CurrencyButton = ({ text, onOpen, isIcon }) => {
  return isIcon ? (
    <img
      src="https://cf.bstatic.com/static/img/flags/new/48-squared/in/20aa535a5d3c505dd02fea275ed1a36c0fb1fe08.png"
      alt="img"
      onClick={onOpen}
      style={{
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        marginRight: "10px",
        cursor: "pointer",
      }}
      title="Choose your language"
    />
  ) : (
    <Button onClick={onOpen} colorScheme="#003580" title="Choose your currency">
      {text}
    </Button>
  );
};

export default CurrencyButton;
