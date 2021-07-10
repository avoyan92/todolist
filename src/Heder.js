import Diamond from "./linkedtech_img/10.jpg";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";

function Navabar() {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={Diamond} />
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
            <ExpandMoreIcon />
          </li>
          <li>
            <a href="#">About</a>
            <ExpandMoreIcon />
          </li>
          <li>
            <a href="#">Product</a>
            <ExpandMoreIcon />
          </li>
          <li>
            <a href="#">Blog</a>
            <ExpandMoreIcon />
          </li>
          <li>
            <a href="#">Bhop</a>
            <ExpandMoreIcon />
          </li>
          <li>
            <a href="#">Contact us</a>
            <ExpandMoreIcon />{" "}
          </li>
        </ul>
        <div className="search">
          <SearchIcon />

          <Badge color="secondary" badgeContent={3} showZero>
          <ShoppingCartOutlinedIcon />
          </Badge>

          <PersonOutlineOutlinedIcon />
        </div>
      </nav>
    </header>
  );
}
export default Navabar;
