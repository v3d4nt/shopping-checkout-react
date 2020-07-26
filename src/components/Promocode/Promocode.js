import React, { Component } from 'react';
import { Button, Collapse, Card, Form, Row, Col, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { handleChange } from '../../actions/promocodeActions'
class Promocode extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,

        }
    }

    handleChange = e => {
        this.props.handleChange(e);
    }

    render() {
        return (
            <div>

                <Button
                    className="promocode-button"
                    variant="link"
                    onClick={() => this.setState({ open: !this.state.open })}
                >
                    {this.state.open === false ? `Apply ` : `Hide `}
                     promo code
                    {this.state.open === false ? ` +` : ` -`}

                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Card className="promo-card">
                            <Row className="show-grid">
                                <Col md={12}>
                                    <Form>
                                        <FormGroup controlId="formInLineName">
                                            <FormLabel >Promo Code</FormLabel>
                                            <FormControl
                                                type="text"
                                                placeholder="Enter promo code"
                                                value={this.props.promoCode}
                                                onChange={this.handleChange}
                                            />
                                        </FormGroup>
                                        <Button
                                            variant="success"
                                            className="btn-round btn-block"
                                            disabled={this.props.isDisabled}
                                            onClick={this.props.giveDiscount}
                                        >
                                            Apply
                                        </Button>
                                    </Form>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                </Collapse>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    promoCode: state.promoCode.value
});


export default connect(mapStateToProps, { handleChange })(Promocode);