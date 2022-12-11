import React from "react";

function InputField(props: any) {
  return (
    <div style={{display: 'flex',flexDirection: 'row'}}>
      <small style={{ marginRight: 5 }}>{props.lable}</small>
      <div style={{display: 'flex',flex: 1}}/>
      <input
        type={props.type ?? "text"}
        value={props.value}
        onChange={ props.onChangeValue}
        style={{ marginBottom: 8 }}
      />
    </div>
  );
}

export default InputField;
