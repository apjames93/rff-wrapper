CheckBox example:

```js noeditor
import MuiSubmit from '../MuiSubmit/MuiSubmit';
import MuiCheckBox from './MuiCheckBox';
```

```js
import Form from '../Form/Form';
import MuiSubmit from '../MuiSubmit/MuiSubmit';
import MuiCheckBox from './MuiCheckBox';


const onSubmit = async (values) => {
  console.log('CheckBox Form', values)
}

  <Form
    onSubmit={onSubmit}
  >
    <MuiCheckBox
      name="thing"
      label="thing"
      checkedIcon={{
          iconName: "alarm_off",
        }}
    />

    <MuiCheckBox
      name="otherThing"
      label="otherThing"
      icon={{
          iconName: "alarm_off",
        }}
    />

    <MuiCheckBox
      name="normalThing"
    />

    <MuiSubmit />
  </Form>
```
