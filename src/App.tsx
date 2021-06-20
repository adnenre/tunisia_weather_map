import { Container } from "./styled";
import MapHeader from "./components/MapHeader";
import Map from "./container/Map";
import MapInfo from "./container/MapInfo";
import { AppStateProvider } from "./state/AppStateContext";
import {
  Layout,
  AppInfo,
  AppBody,
  AppHeader,
  AppFooter,
} from "./components/Layout.styled";
import CopyRight from "./components/CopyRight";
function App() {
  return (
    <>
      <AppStateProvider>
        <Layout>
          <AppHeader>
            <MapHeader title="Tunisia" />
          </AppHeader>
          <AppBody>
            <Map />
          </AppBody>
          <AppInfo>
            <MapInfo />
          </AppInfo>
          <AppFooter>
            <CopyRight value="copyright @ Adnen rebai 2020" />
          </AppFooter>
        </Layout>
      </AppStateProvider>
    </>
  );
}

export default App;
