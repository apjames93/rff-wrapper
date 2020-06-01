MuiCheckbox example:

```js noeditor
import MuiSubmit from '../MuiSubmit/MuiSubmit';
import MuiCheckbox from './MuiCheckbox';
```

```js
import Form from '../Form/Form';
import MuiSubmit from '../MuiSubmit/MuiSubmit';
import MuiCheckbox from './MuiCheckbox';


const onSubmit = async (values) => {
  console.log('CheckBox Form', values)
}

  <Form
    onSubmit={onSubmit}
  >
    <MuiCheckbox
      name="thing"
      label="thing"
      checkedIcon={{
          iconName: "alarm_off",
        }}
    />

    <MuiCheckbox
      name="otherThing"
      label="otherThing"
      icon={{
          iconName: "alarm_off",
        }}
    />

    <MuiCheckbox
      name="normalThing"
    />

    <MuiSubmit />
  </Form>
```
