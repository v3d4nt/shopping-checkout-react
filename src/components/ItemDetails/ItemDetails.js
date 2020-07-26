import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Collapse from 'react-bootstrap/Collapse';
import Media from 'react-bootstrap/Media';
import Button from 'react-bootstrap/Button';


class ItemDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    render() {
        return (
            <div>

                <Button
                    className="item-details-button"
                    variant="link"
                    onClick={() => this.setState({ open: !this.state.open })}

                >
                    {this.state.open === false ? 'see' : 'hide'} item details
                    {this.state.open === false ? ' +' : ' -'}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Card>
                            <Media>
                                {/* <Media.Left> */}
                                <img
                                    width={100}
                                    height={100}
                                    alt="thumbnail"
                                    src="https://i5.walmartimages.com/asr/789350a0-f776-4b1e-8952-fcd14cd020b2_1.f3c9d8bfd1476ee6ddda981294b3a6a0.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                                />
                                {/* </Media.Left> */}
                                <Media.Body>
                                    <p>Essentials by OFM ESS-6065 Racing Style Gaming Chair, Multiple Colors</p>
                                    <Row className="show-grid">
                                        <Col md={6}>
                                            <strong>{`$${this.props.price}`}</strong>
                                            <br />
                                            <strong className="price-strike">{`$${this.props.price}`}</strong>
                                        </Col>
                                        <Col md={6}> Qty: 1 </Col>
                                    </Row>
                                </Media.Body>
                            </Media>

                        </Card>
                    </div>
                </Collapse>
            </div>
        )
    }


}

export default ItemDetails;