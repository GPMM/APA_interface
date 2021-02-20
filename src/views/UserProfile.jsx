import React, { Component } from "react";
import {
  Grid,
  Row,
  Col
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

class UserProfile extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Cadastro de professor"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "Matrícula",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Matrícula"
                        },
                        {
                          label: "Nome",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Nome" 
                        },
                        {
                          label: "Email",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Email"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                          label: "Senha",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Senha"
                        },
                        {
                          label: "Repita a senha",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Repita a senha"
                        }                       
                      ]}
                    />
                    <Button bsStyle="info" pullRight fill type="submit">
                      Salvar
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default UserProfile;
