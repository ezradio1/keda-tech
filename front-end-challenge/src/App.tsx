import { ConfigProvider } from "antd";
import { PRIMARY } from "constants/colors";
import CustomLayout from "layout/CustomLayout";
import "./App.css";

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: PRIMARY,
        },
      }}
    >
      <CustomLayout />
    </ConfigProvider>
  );
};

export default App;
