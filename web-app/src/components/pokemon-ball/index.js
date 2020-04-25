import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { getBallSprite } from "../../utils/get-sprite-url";
import { useTranslation } from "react-i18next";

export const PokemonBall = ({ id }) => {
  const { t } = useTranslation();

  if (id <= 0) return null;

  const ballName = t(`balls.${id}`);
  const altText = `Ball - ${ballName}`;

  return (
    <Tooltip title={ballName}>
      <img src={getBallSprite(id)} alt={altText} />
    </Tooltip>
  );
};
