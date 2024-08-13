import Menu from "@mui/material/Menu";

const ContextMenu = ({ children, anchorEl, onClose, menuProps }) => {
  const isOpen = Boolean(anchorEl);

  return (
    <Menu anchorEl={anchorEl} open={isOpen} onClose={onClose} {...menuProps}>
      {children}
    </Menu>
  );
};

export default ContextMenu;
