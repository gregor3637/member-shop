import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../../../General/Formik/FormikControl";
import FormButton from "../../../../General/Buttons/FormButton";
import InputURL from "../../../../General/Formik/InputURL";
import LanguageIcon from "@mui/icons-material/Language";
import PublicIcon from "@mui/icons-material/Public";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

const initialValues = {
  username: "",
  bio: "",
  email: "",
  walletAddress: "",
  links: {
    site: "",
    youtube: "",
    facebook: "",
    instagram: "",
  },
};

const selectOptions = [
  { label: "FraudulentActivity", value: "Fraudulent Activity" },
  { label: "Copyright", value: "Copyright infrigement" },
  { label: "Explicit", value: "Explicit and sensitive content" },
];

const validationSchema = Yup.object({
  username: Yup.string().required("Required"),
  // bio: Yup.string().required("Required"),
  // email: Yup.string().email("Invalid Email Format").required("Required"),
  // links: Yup.object({
  //   site: Yup.string().matches(
  //     /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
  //     "Enter correct url!"
  //   ),
  //   youtube: Yup.string().matches(
  //     /^[A-Za-z0-9_]{3}(?:|[A-Za-z0-9_]{3,})$/,
  //     "Enter correct url!"
  //   ),
  // }),
});

const User = (props) => {
  const onSubmit = (value, onSubmitProps) => {
    console.log("---------OnSubmit TrustAndSafety--> ", value);
  };

  initialValues.walletAddress = "0xd23a4cfe5d0325abdaf06620c9e6ec14b00bda5dff";

  return (
    <Wrapper>
      <h3>Profile Settings</h3>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {(formik) => {
          return (
            <Form>
              <FormikControl
                control="input"
                type="text"
                label="Username"
                name="username"
                placeholder={"Enter username"}
              />
              <FormikControl
                control="textarea"
                type="text"
                label="Bio"
                name="bio"
                placeholder={"Tell the world your story!"}
              />
              <FormikControl
                control="input"
                type="text"
                label="Email Address"
                name="email"
                placeholder={"Enter email"}
              />

              {/* <FormikControl
                control="input"
                type="text"
                label="Wallet Address"
                name="walletAddress"
              /> */}
              {/* <SocialMediaX>
                <h3>Add links to your social media profiles.</h3>
                <InputURL
                  title="Website"
                  titleIcon={<PublicIcon />}
                  description={"https://"}
                  name="links.site"
                  placeholder={"Website URL"}
                />
                <InputURL
                  title="YouTube"
                  titleIcon={<YouTubeIcon />}
                  name="links.youtube"
                  placeholder={"Channel URL"}
                />
                <InputURL
                  title="Facebook"
                  titleIcon={<FacebookOutlinedIcon />}
                  description={"facebook.com/"}
                  name="links.facebook"
                  placeholder={"Facebook Username"}
                />
              </SocialMediaX> */}
              {formik.isValid && <div>das</div>}
              <FormButtonX type="submit" disabled={!formik.isValid}>
                Submit 
              </FormButtonX>
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
};

const SocialMediaX = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    /* max-width: 24rem; */
    font-size: 2rem;
  }
`;
const FormButtonX = styled(FormButton)`
  flex: 1;
  width: 100%;

  border: none;
  background: var(--color-blue);

  :disabled {
    cursor: auto;
    background: var(--color-blue-light);
  }
`;

const Wrapper = styled.div`
  form {
    & > div {
      margin: 1.6rem 0;
    }

    input,
    textarea {
      padding: 1rem 0.5rem;
      font-size: 1.4rem;
      border-radius: 0.5rem;
      border: 0.1rem solid var(--color-button-dark-inactive);
    }
  }
`;

export default User;
