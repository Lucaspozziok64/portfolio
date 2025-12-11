import { Form, Button, Container, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTranslation } from "../hooks/useTranslation";
import Swal from "sweetalert2";
const urlBakend = import.meta.env.VITE_API_BACKEND;

const Formulario = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(urlBakend, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Email enviado exitosamente",
        });
        reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error al enviar!",
        });
        reset();
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Error de conexion,",
        text: "Intenta nuevamente"
      });
    }
  };

  return (
    <section className="container text-light">
      <h1 className="text-center text-info bebas">{t("formTitle")}</h1>
      <h3 className="my-4 text-center text-info subtitulo">
        {t("formSubTitle")}🚀
      </h3>
      <Container className="mb-3 d-flex justify-content-center">
        <Form
          className="text-light w-75"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <Form.Group>
            <Form.Label>{t("formPlaceholders.name")}*</Form.Label>
            <Form.Control
              type="text"
              className="text-light bg-dark"
              minLength={2}
              maxLength={100}
              {...register("name", {
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
              {errors.name?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>{t("formPlaceholders.email")}*</Form.Label>
            <Form.Control
              type="email"
              className="bg-dark text-light"
              placeholder="Ej lucas@mail.com"
              minLength={4}
              maxLength={100}
              {...register("email", {
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
            <Form.Label>{t("formPlaceholders.message")}*</Form.Label>
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
              {errors.message?.message}
            </Form.Text>
          </Form.Group>
          <Button
            variant="success"
            type="submit"
            className="mt-4"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? `${t("formPlaceholders.sending")}`
              : `${t("formPlaceholders.submit")}`}
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Formulario;
