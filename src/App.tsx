import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "./store";
import Search from "./components/Search";
import Alert from "./components/Alert";
import Weather from "./components/Weather";
import { setAlert } from "./store/actions/alertActions";
import { setError } from "./store/actions/weatherActions";

const App: FC = () => {
  const dispath = useDispatch();
  const weatherData = useSelector((state: RootStore) => state.weather.data);
  const loading = useSelector((state: RootStore) => state.weather.loading);
  const error = useSelector((state: RootStore) => state.weather.error);
  const alertMsg = useSelector((state: RootStore) => state.alert.message);

  return (
    <div className="App">
      <Search title="Enter city name" />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        weatherData && <Weather data={weatherData} />
      )}
      {alertMsg && (
        <Alert message={alertMsg} onClose={() => dispath(setAlert(""))} />
      )}
      {error && <Alert message={error} onClose={() => dispath(setError())} />}
    </div>
  );
};

export default App;
