CheckBox example:

```js noeditor
import Submit from '../Submit/Submit';
import CheckBox from './CheckBox';
```

```js
import Form from '../Form/Form';
import Submit from '../Submit/Submit';
import CheckBox from './CheckBox';


const onSubmit = async (values) => {
  console.log('CheckBox Form', values)
}

  <Form
    onSubmit={onSubmit}
  >
    <CheckBox
      name="thing"
      label="thing"
      checkedIcon={{
          iconName: "alarm_off",
        }}
    />

    <CheckBox
      name="otherThing"
      label="otherThing"
      icon={{
          iconName: "alarm_off",
        }}
    />

    <CheckBox
      name="normalThing"
    />

    <Submit />
  </Form>
```
