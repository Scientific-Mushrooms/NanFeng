import React from "react";

const styles = {
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff",
    width: "100%",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem"
  },
  
};

function Card({ ...props }) {
  const {
    children,
    ...rest
  } = props;

  return (
    <div style={styles.card} {...rest}>
      {children}
    </div>
  );
}

export default Card;
