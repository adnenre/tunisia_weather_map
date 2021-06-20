import { SPortlet, SPortletProps } from "./Portlet.styled";

interface PortletProps extends SPortletProps {
  children: React.ReactNode;
}

const Portlet = ({ children, justifyContent, padding }: PortletProps) => {
  return (
    <SPortlet justifyContent={justifyContent} padding={padding}>
      {children}
    </SPortlet>
  );
};

export default Portlet;
