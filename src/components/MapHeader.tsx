import { Header, Title } from "./MapHeader.styled";
type titleProps = {
  title: string;
};
const MapHeader = ({ title }: titleProps) => {
  return (
    <Header>
      <Title>{title}</Title>
    </Header>
  );
};

export default MapHeader;
