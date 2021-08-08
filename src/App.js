import "./styles.css";
import Calendar from "rc-year-calendar";
import "rc-year-calendar/locales/rc-year-calendar.ru";
import moment from "moment";

export default function App() {
  return (
    <div className="App">
      <Calendar year={moment().year()} language="en" weekStart={1} />
    </div>
  );
}
