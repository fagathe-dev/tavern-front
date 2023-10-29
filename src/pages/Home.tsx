import InformationsBlock from "../components/ui/InformationsBlock";
import Container from "../components/grid/Container";
import Display from "../components/ui/typo/Display";
import Text from "../components/ui/typo/Text";
import { SyntheticEvent, useState } from "react";
import Hr from "../components/ui/Hr";
import Button from "../components/ui/button/Button";
import InputField from "../components/forms/fields/InputField";
import useToggle from "../hooks/useToggle";
import Form from "../components/forms/Form";
import ChoiceField from "../components/forms/fields/ChoiceField";
import Row from "../components/grid/Row";
import Badge from "../components/ui/Badge";
import Textarea from "../components/forms/Textarea";
import Lead from "../components/ui/typo/Lead";

const Home = () => {
  const [val, setVal] = useState("fagathe@meilleurtaux.com");
  const [pass, setPass] = useState("123Soleil");
  const [checked, handleCheck] = useToggle(false);

  const handleChangeVal = (e: SyntheticEvent<HTMLInputElement>) => {
    setVal(e.currentTarget.value);
  };

  const handleChangePass = (e: SyntheticEvent<HTMLInputElement>) => {
    setPass(e.currentTarget.value);
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    const choice = confirm("Are you sur about submitting this form ?");
    choice ? e.currentTarget.submit() : e.preventDefault();
  };

  return (
    <Container style={{ marginBlockStart: 20 }}>
      <Row id={"row"}>
        <InformationsBlock style={{ marginBlockStart: 15 }}>
          <Display size={2}>Lorem, ipsum.</Display>
          <Lead align="justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit optio,
            sunt debitis at fuga repellendus ut numquam nam nemo libero.
          </Lead>
        </InformationsBlock>
      </Row>
      <Hr />
      <Form method="get" onSubmit={handleSubmit}>
        <InputField
          label="Nom d'utilisateur"
          onChange={handleChangeVal}
          value={val}
          type="email"
          placeholder="ex : john.doe@email.fr"
          name="username"
        />
        <InputField
          label="Mot de passe"
          onChange={handleChangePass}
          value={pass}
          type="password"
          name="password"
        />
        <Badge>New</Badge>
        <Hr />
        <ChoiceField
          label={<Text>Enregistrer mon utilisateur</Text>}
          checked={checked}
          onChange={handleCheck}
          size="s"
          optional={true}
          name="consent"
        />
        <Row style={{ marginBlockEnd: 10 }}>
          <Textarea />
        </Row>
        <Button secondary={true} type="submit" label="Me connecter" />
      </Form>
    </Container>
  );
};
export default Home;
