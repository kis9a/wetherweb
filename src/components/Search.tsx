import React, { FC, useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { setAlert } from "../store/actions/alertActions";
import { getWeather, setLoading } from "../store/actions/weatherActions";

interface SearchProps {
  title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
  const dispath = useDispatch();
  const [city, setCity] = useState("");

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city.trim() === "") {
      return dispath(setAlert("City is required"));
    }

    dispath(setLoading());
    dispath(getWeather(city));
    setCity("");
  };

  return (
    <div>
      <h1>{title}</h1>
      <form className="form" onSubmit={submitHandler}>
        <input type="text" value={city} onChange={changeHandler} />
      </form>
      <button className="">Search</button>
    </div>
  );
};

export default Search;
