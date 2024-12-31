// import persian from "react-date-object/calendars/persian";
// import persian_fa from "react-date-object/locales/persian_fa";
// import opacity from "react-element-popper/animations/opacity";
// import transition from "react-element-popper/animations/transition";
// import DatePicker, { DateObject } from "react-multi-date-picker";
// import DatePanel from "react-multi-date-picker/plugins/date_panel";
// import DatePickerHeader from "react-multi-date-picker/plugins/date_picker_header";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  onMessageListener,
  requestForToken,
} from "./components/utils/firebase/firebase";
import Cart from "./pages/cart";
import Dashboard from "./pages/dashboard";
import Information from "./pages/information";
function App() {
  useEffect(() => {
    navigator.serviceWorker.ready.then(() => {
      requestForToken();

      onMessageListener()
        .then((payload) => {
          console.log({ payload });
          // setNotification({title: payload?.notification?.title, body: payload?.notification?.body});
        })
        .catch((err) => console.log("failed: ", err));
    });
  }, []);

  // let [value, setValue] = useState(new Date())
  // const date = new DateObject({
  //   format: "dddd YY MMMM YYYY",
  // }).convert(persian, persian_fa);

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/info" element={<Information />} />
      </Routes>

      {/* <DatePicker
        placeholder="انتخاب کنید"
        mapDays={({ date }) => {
          let isWeekend = [6].includes(date.weekDay.index);

          if (isWeekend)
            return {
              disabled: true,
              style: { color: "#ccc" },
              onClick: () => alert("آخر هفته ها غیر فعال هستند"),
            };
        }}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="top-left"
        autoFocus={true}
        animations={[
          transition({
            from: 35,
            transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
          }),
          opacity({ from: 0.1, to: 0.8, duration: 1000 }),
        ]}
        plugins={[
          <DatePickerHeader position="left" size="big" />,
          <DatePanel
            position={"right"}
            sort="date"
            // eachDaysInRange={!props.onlyMonthPicker && !props.onlyYearPicker}
          />,
          // <Settings
          //   position="bottom"
          //   defaultActive="locale"
          // />,
          // <Toolbar
          //   position="bottom"
          // />
        ]}
      /> */}
      {/* <p>{date.format()}</p> */}
      {/* <Calendar buttons/> */}
    </>
  );
}

export default App;
