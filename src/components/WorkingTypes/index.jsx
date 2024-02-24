import { styled } from "@mui/material/styles";
import { SvgIcon, Typography } from "@mui/material";

const workingTypes = [
  {
    path: "#",
    image: '/images/home/work.svg',
    title: "正社員",
  },
  {
    path: "#",
    image: '/images/home/chef.svg',
    title: "アルバイト",
  },
  {
    path: "#",
    image: '/images/home/railway.svg',
    title: "パート",
  },
  {
    path: "#",
    image: '/images/home/notelist.svg',
    title: "契約社員",
  },
  {
    path: "#",
    image: '/images/home/laptop.svg',
    title: "業務委託",
  },
];


const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  border: `2px solid ${theme.palette.primary.main}`,
  borderWidth: "2px 0 2px 0",
  marginInline: 10,
  [theme.breakpoints.up("md")]: {
    marginInline: 0,
    borderWidth: "0 2px 0 2px",
    flexDirection: "row",
  },
}));

const Item = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "40px 30px",
  alignItems: "center",
  flexDirection: "row",
  flexGrow: 1,
  "&:not(:last-child)": {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
    padding: 10,
    width: 1 / 5,
    "&:not(:last-child)": {
      borderBottom: "none",
      borderRight: `2px solid ${theme.palette.primary.main}`,
    },
  },
}));

const WorkingTypes = () => {
  return (
    <Wrapper>
      {workingTypes.map((item, index) => (
        <Item key={index}>
          <img
            color="green"
            src={item.image}
            className="mb-5"
          />
          <Typography color="primary" fontWeight={600} component="div">
            {item.title}
          </Typography>
          <div />
        </Item>
      ))}
    </Wrapper>
  );
};

export default WorkingTypes;
