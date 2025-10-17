import { useRef, useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useTranslation } from "../hooks/useTranslation";

const Formulario = () => {
  const [validated, setValidated] = useState(false);
  const { t } = useTranslation()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm("service_ef3sv7t", "template_1vi86a5", form.current, {
        publicKey: "kj6kTakPgixopYKvB",
      })
      .then(
        () => {
          <Alert>("Email ENVIADO!");</Alert>
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
      reset()
    setValidated(true);
  };

  return (
    <section className="container text-light">
      <h1 className="text-center text-info titulo">{t('formTitle')}</h1>
      <h3 className="my-4 text-center text-info titulo">
        {t('formSubTitle')}🚀
      </h3>
      <Container className="mb-3 d-flex justify-content-center">
        <Form
          className="text-light w-75"
          ref={form}
          noValidate
          validated={validated}
          onSubmit={handleSubmit(sendEmail)}
        >
          <Form.Group>
            <Form.Label>{t('formPlaceholders.name')}*</Form.Label>
            <Form.Control
              type="text"
              className="text-light bg-dark"
              minLength={2}
              maxLength={100}
              {...register("user_name", {
                required: "El nombre es un dato obligatorio",
                minLength: {
                  value: 2,
                  message: "El nombre debe tener un mínimo de 2 caracteres",
                },
                maxLength: {
                  value: 100,
                  message: "El nombre debe tener un máximo de 100 caracteres",
                },
              })}
            ></Form.Control>
            <Form.Text className="text-danger">
              {errors.nombre?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>{t('formPlaceholders.email')}*</Form.Label>
            <Form.Control
              type="email"
              className="bg-dark text-light"
              placeholder="Ej lucas@mail.com"
              minLength={4}
              maxLength={100}
              {...register("user_email", {
                required: "El correo electrónico es un dato obligatorio",
                pattern: {
                  value:
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message:
                    "El correo electrónico debe tener un formato válido, por ejemplo juan2025@mail.com",
                },
                minLength: {
                  value: 4,
                  message:
                    "El correo electrónico debe tener un mínimo de 4 caracteres",
                },
                maxLength: {
                  value: 100,
                  message:
                    "El correo electrónico debe tener un máximo de 100 caracteres",
                },
              })}
            ></Form.Control>
            <Form.Text className="text-danger">
              {errors.email?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>{t('formPlaceholders.message')}*</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              className="bg-dark text-light"
              rows={4}
              minLength={4}
              maxLength={300}
              {...register("message", {
                required: "La consulta es un campo obligatorio",
                minLength: {
                  value: 4,
                  message: "La consulta debe tener un mínimo de 4 caracteres",
                },
                maxLength: {
                  value: 500,
                  message: "La consulta debe tener un máximo de 300 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.consulta?.message}
            </Form.Text>
          </Form.Group>
          <Button variant="success" type="submit" className="mt-4">
            {t('formPlaceholders.submit')}
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Formulario;
