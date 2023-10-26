import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import clsx from 'clsx' only required if multiple classes need to be defined

export const btn = {
  save: "#4176ff",
  unavailable: "#7f8eb7",
  cancel: "#bbc0cb",
};

const useStyles = makeStyles({
  button: {
    backgroundColor: (props) => props.backgroundColor,
    width: "15em",
    color: "white",
    transition: "all 100ms ease-in",
    "&:hover": {
      backgroundColor: (props) => props.backgroundColor,
      transform: "scale(1.03)",
      filter: "brightness(95%)",
      transition: "all 100ms ease-in",
    },
  },
});

const BaseButton = ({ label, href, variant, ...props }) => {
  const { button } = useStyles(props);

  return (
    <Button className={`${button}`} variant={variant} href={href}>
      {label}
    </Button>
  );
};

export default BaseButton;
