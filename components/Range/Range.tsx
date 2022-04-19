import {WrapRange, WrapValues} from "./styles";

const Range = ({placeholder, values, value, change}: IRangeProps): JSX.Element => {
  return (
    <WrapRange>
      <p>{placeholder}</p>
      <input
        value={value}
        type="range"
        min="0"
        max={values.length-1}
        onChange={e => change(e.target.value)}
      />
      <WrapValues>
        {
          values.map((item, idx) => {
            return <p key={`item_${idx}`}>{item}</p>
          })
        }
      </WrapValues>
    </WrapRange>
  );
};

export default Range;