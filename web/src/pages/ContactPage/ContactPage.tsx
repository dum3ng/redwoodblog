import { MetaTags } from '@redwoodjs/web'
import {
  Form,
  Submit,
  TextAreaField,
  TextField,
  Label,
  FieldError,
} from '@redwoodjs/forms'

const onSubmit = (a) => {
  console.log(a)
}

const ContactPage = () => {
  return (
    <>
      <MetaTags
        title="Contact"
        // description="Contact description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1>ContactPage</h1>
      <Form onSubmit={onSubmit}>
        <Label name="name">name</Label>
        <TextField
          name="name"
          validation={{ required: true }}
          errorClassName="error"
        ></TextField>
        <FieldError name="name" className="error"></FieldError>

        <Label name="email">email</Label>
        <TextAreaField
          name="email"
          errorClassName="error"
          validation={{
            required: true,
            pattern: {
              value: /[^@]+@[^.]+\..+/,
              message: 'not valid email format',
            },
          }}
        ></TextAreaField>
        <FieldError name="email" className="error"></FieldError>

        <Submit>submit</Submit>
      </Form>
    </>
  )
}

export default ContactPage
