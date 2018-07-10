import React from "react";

import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import cardFooterStyle from "../../assets/jss/material-dashboard-react/components/cardFooterStyle.jsx";

function CardFooter({ ...props }) {
  const {
    classes,
    className,
    children,
    plain,
    profile,
    stats,
    chart,
    ...rest
  } = props;
  const cardFooterClasses = classNames({
    [classes.cardFooter]: true,
    [classes.cardFooterPlain]: plain,
    [classes.cardFooterProfile]: profile,
    [classes.cardFooterStats]: stats,
    [classes.cardFooterChart]: chart,
    [className]: className !== undefined
  });
  return (
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  );
}


export default withStyles(cardFooterStyle)(CardFooter);
