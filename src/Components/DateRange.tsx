import DateInput from "./DateInput";
import { useData } from "../Context/DataContext";

const DateRange = () => {
  const { initial, setInitial, end, setEnd } = useData();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
      className="box flex"
    >
      <DateInput
        label="Initial Date"
        value={initial}
        onChange={({ target }) => setInitial(target.value)}
      />
      <DateInput
        label="End Date"
        value={end}
        onChange={({ target }) => setEnd(target.value)}
      />
    </form>
  );
};

export default DateRange;
