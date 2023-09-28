import React from 'react';
import Card from 'react-bootstrap/Card';
// import badge from '../assets/img/verified badge.svg';

function SkillCard(props) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    <ul class="custom_list">
                        {props.text.map((val) =>
                            (<li>{val}</li>)
                        )
                        }
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default SkillCard;