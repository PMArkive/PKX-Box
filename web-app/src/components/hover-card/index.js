import React from 'react';
import Card from '@material-ui/core/Card';

const ForwardRefHoverCard = ({ defaultElevation = 1, ...props }, ref) => {
  const [elevation, setElevation] = React.useState(defaultElevation);

  return (
    <Card
      ref={ref}
      elevation={elevation}
      onMouseEnter={() => setElevation(defaultElevation + 3)}
      onMouseLeave={() => setElevation(defaultElevation)}
      {...props}
    />
  );
};

export const HoverCard = React.forwardRef(ForwardRefHoverCard);
