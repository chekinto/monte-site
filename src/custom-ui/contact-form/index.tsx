import { Button, Field, Fieldset, Input, Stack } from "@chakra-ui/react";
import "./styles.css";

export const ContactForm = () => {
  return (
    <Fieldset.Root invalid size="lg" maxW="md" className="root" padding={8}>
      <Stack>
        <Fieldset.Legend color={"black"}>Contact details</Fieldset.Legend>
        <Fieldset.HelperText>
          Please provide your contact details below.
        </Fieldset.HelperText>
      </Stack>

      <Fieldset.Content>
        <Field.Root>
          <Field.Label>Name</Field.Label>
          <Input name="name" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Email address</Field.Label>
          <Input name="email" type="email" />
        </Field.Root>
      </Fieldset.Content>

      <Button type="submit" alignSelf="flex-start" colorPalette="blue" mt={8}>
        Submit
      </Button>
    </Fieldset.Root>
  );
};
