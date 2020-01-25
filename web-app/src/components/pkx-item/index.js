import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { getItemSprite } from "../../utils/get-sprite-url";
import { useTranslation } from "react-i18next";

export const PKXItem = ({ id }) => {
  const { t } = useTranslation();

  if (id <= 0) return null;

  const itemName = t(`items.${id}`);
  const altText = `Item - ${itemName}`;

  return (
    <Tooltip title={itemName}>
      <img src={getItemSprite(id)} alt={altText} />
    </Tooltip>
  );
};
