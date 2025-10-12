import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


  return (
    <section className="container text-light">
      <h1 className="text-center text-info titulo">Contact me here!</h1>
      <h3 className="my-4 text-center text-info titulo">
        Let's do something amazing together🚀
      </h3>
      <Container className="mb-3 d-flex justify-content-center">
        <Form className="text-light w-75" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name/company*</Form.Label>
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
              {errors.nombre?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>email*</Form.Label>
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
            <Form.Label>message*</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              className="bg-dark text-light"
              rows={4}
              minLength={4}
              maxLength={300}
              {...register("consulta", {
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
            Enviar
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Formulario;
